/* Consistency checks on the atlas data. Run: node tools/check_data.js
   - every Bible and Qur'an reference in the content resolves to quoted text
   - every Key Words entry's Strong's number occurs in the Hebrew or Greek of at least one of its cited verses
   - every unit is well formed (known block kinds and widgets, beliefs attributed, sources linked)
   - every string written in Hebrew, Greek, Arabic, Coptic or Egyptian script is accompanied by English
   - every [[source]] citation resolves to a complete source record; a retracted study is called retracted wherever cited
   - miracle entries state a reading and do not assign mechanisms; translation counts match the reader's data
   - links to Wikipedia are not labelled as if they were the work or text cited
   - start-here units have a goal, an essential point and a check of understanding; corrections cite real sources
   - phrases withdrawn in a correction do not return
   These checks catch known failure modes. They cannot show that a claim is true or that a quotation is accurate. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.join(__dirname, '..', 'assets', 'data');
const files = require('./data_files.json');
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
for (const f of files) vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f });
const { BIBLE, QURAN, LEX, WORDS, UNITS, SOURCES, SOURCE_ROLES, SOURCE_CHECKS, MIRACLES, MIRACLE_STATUS, START_ROUTE, CORRECTIONS } = ctx;
let bad = 0;
const fail = m => { bad++; console.log('FAIL', m); };

const REF = /^(?:[1-3]?[A-Z][a-z]+)\.\d+\.\d+(?:-\d+)?$/;
const KINDS = new Set(['p', 'text', 'record', 'sch', 'bel', 'open', 'quote', 'table', 'list']);
const WIDGETS = new Set(require('./widgets.json'));
const FOREIGN = /[֐-׿Ͱ-Ͽἀ-῿؀-ۿⲀ-⳿\u{13000}-\u{1342F}܀-ݏ]/u;
const LATIN = /[A-Za-z]{3,}/;

// 1. Walk every value in the content (not the generated texts) for references and foreign script.
const skip = new Set(['BIBLE', 'QURAN', 'LEX', 'STATS', 'GEO', 'L']);
const cites = [];  // [where, source id, the string it sits in]
const wikiLinks = []; // [where, label]
let refs = 0, strings = 0;
function walk(v, where, parent) {
  if (typeof v === 'string') {
    strings++;
    if (REF.test(v)) { refs++; if (!BIBLE[v]) fail(`${where}: unresolved reference ${v}`); }
    for (const m of v.matchAll(/\{\{([^}]+)\}\}/g)) {
      refs++;
      const r = m[1];
      if (r.startsWith('Q:')) { if (!QURAN[r.slice(2)]) fail(`${where}: unresolved Qur'an reference ${r}`); }
      else if (!BIBLE[r]) fail(`${where}: unresolved reference ${r}`);
    }
    for (const m of v.matchAll(/\]\(([^)]*)\)/g)) if (!/^https?:\/\//.test(m[1])) fail(`${where}: bad link target ${m[1]}`);
    for (const m of v.matchAll(/\[\[([\w-]+)\]\]/g)) cites.push([where, m[1], v]);
    for (const m of v.matchAll(/\[([^\]]+)\]\((https?:\/\/[a-z]+\.wikipedia\.org\/[^)]*)\)/g)) wikiLinks.push([where, m[1]]);
    if (FOREIGN.test(v) && !LATIN.test(v.replace(/\{\{[^}]+\}\}/g, ''))) {
      // A word in another script must sit beside its English (gloss, en, tr, meaning, l or x).
      const glossed = parent && ['gloss', 'en', 'meaning', 'l', 'x', 'def', 'name'].some(k => typeof parent[k] === 'string' && LATIN.test(parent[k]));
      if (!glossed) fail(`${where}: text in another script without English: ${v}`);
    }
  } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${where}[${i}]`, v.length > 1 && v.some(y => typeof y === 'string' && LATIN.test(y)) ? { x: v.find(y => typeof y === 'string' && LATIN.test(y)) } : parent));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, `${where}.${k}`, v);
}
for (const k of Object.keys(ctx)) if (/^[A-Z][A-Z_]+$/.test(k) && !skip.has(k)) walk(ctx[k], k, null);

// 2. Key Words: the Strong's number must occur in the original-language words of a cited verse.
for (const w of WORDS) {
  const nums = [w.strong, ...(w.also || [])];
  for (const n of nums) if (!LEX[n]) fail(`WORDS ${w.id}: ${n} missing from lexicon`);
  const found = w.refs.some(r => BIBLE[r] && BIBLE[r].words.some(x => nums.includes(x[3])));
  if (!found) fail(`WORDS ${w.id} ${w.strong}: not found in the words of ${w.refs.join(', ')}`);
  if (!w.gloss) fail(`WORDS ${w.id}: no English gloss`);
}

// 3. Units.
const ids = new Set();
for (const u of UNITS) {
  if (ids.has(u.id)) fail(`unit ${u.id}: duplicate id`); ids.add(u.id);
  for (const k of ['part', 'title', 'kicker', 'intro']) if (!u[k]) fail(`unit ${u.id}: missing ${k}`);
  if (u.widget && !WIDGETS.has(u.widget)) fail(`unit ${u.id}: unknown widget ${u.widget}`);
  if (!u.sources || !u.sources.length) fail(`unit ${u.id}: no sources`);
  for (const s of u.sources || []) { if (!s.t) fail(`unit ${u.id}: source without a title`); if (s.url && !/^https?:\/\//.test(s.url)) fail(`unit ${u.id}: bad source link: ${s.t}`); }
  for (const sec of u.sections) {
    if (sec.widget && !WIDGETS.has(sec.widget)) fail(`unit ${u.id}: unknown widget ${sec.widget}`);
    for (const b of sec.blocks) {
      if (!KINDS.has(b.k)) fail(`unit ${u.id} / ${sec.h}: unknown block kind ${b.k}`);
      if (b.k === 'bel' && !b.who) fail(`unit ${u.id} / ${sec.h}: belief without a tradition named`);
      if (b.k === 'quote' && !b.url) fail(`unit ${u.id} / ${sec.h}: quotation without a source link`);
    }
  }
}

// 4. Sources: every citation resolves; records are complete; retractions are visible where cited.
for (const [where, id, str] of cites) {
  const src = SOURCES[id];
  if (!src) { fail(`${where}: citation [[${id}]] has no source record`); continue; }
  if (src.st === 'retracted' && !/retract/i.test(str)) fail(`${where}: cites retracted ${id} without saying it was retracted`);
}
for (const [id, src] of Object.entries(SOURCES)) {
  for (const k of ['short', 'a', 't', 'role', 'check', 'sup']) if (!src[k]) fail(`SOURCES ${id}: missing ${k}`);
  if (!SOURCE_ROLES[src.role]) fail(`SOURCES ${id}: unknown role ${src.role}`);
  if (!SOURCE_CHECKS[src.check]) fail(`SOURCES ${id}: unknown check ${src.check}`);
  if (['opened', 'search'].includes(src.check) && !/^\d{4}-\d{2}-\d{2}$/.test(src.checked || '')) fail(`SOURCES ${id}: checked ${src.check} but no date`);
  if (src.st === 'retracted' && !src.stNote) fail(`SOURCES ${id}: retracted but no note`);
  if (src.url && !/^https?:\/\//.test(src.url)) fail(`SOURCES ${id}: bad url`);
}
// A retracted paper's DOI or first author may not appear without the word "retracted" nearby.
for (const [id, src] of Object.entries(SOURCES)) if (src.st === 'retracted' && src.url) {
  const doi = src.url.replace(/^https?:\/\/doi\.org\//, '');
  (function scan(v, where) {
    if (typeof v === 'string') { if (v.includes(doi) && !/retract/i.test(v)) fail(`${where}: links retracted ${id} without saying so`); }
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) scan(x, `${where}.${k}`);
  })(ctx.MIRACLES, 'MIRACLES');
}

// 5. Miracles: a stated reading, no assigned mechanism, a standing for every explanation.
for (const [i, m] of MIRACLES.entries()) {
  for (const k of ['n', 'v', 'x', 'ctx', 'diff', 'prop', 'theo', 'unk']) if (!m[k] || (Array.isArray(m[k]) && !m[k].length)) fail(`MIRACLES[${i}] ${m.n}: missing ${k}`);
  if (m.req) fail(`MIRACLES[${i}] ${m.n}: old "what it would require" field`);
  if (!/\b(read|reading)\b/i.test(m.diff || '') && !/calculation|cannot be the cause|is ordinary|common/i.test(m.diff || '')) fail(`MIRACLES[${i}] ${m.n}: difficulty does not state the reading it applies to`);
  if (/would (have to|require)|must have|necessarily/i.test(m.diff || '')) fail(`MIRACLES[${i}] ${m.n}: difficulty asserts a necessary mechanism`);
  for (const p of m.prop || []) if (!MIRACLE_STATUS[p[1]]) fail(`MIRACLES[${i}] ${m.n}: explanation without a valid standing`);
}

// 6. Translation counts: the number of English translations named in prose must match the data.
const english = new Set(); for (const e of Object.values(BIBLE)) for (const k of Object.keys(e.tr)) if (!['Vulgate', 'ChiUn'].includes(k)) english.add(k);
const NUMW = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen'];
const prose = [JSON.stringify(UNITS), ...['README.md', 'RELEASE_NOTES.md', 'index.html', 'assets/app/tour.js', 'assets/app/core.js', 'assets/app/w-book.js', 'assets/app/w-more.js', 'assets/data/lab.js'].map(f => fs.readFileSync(path.join(__dirname, '..', f), 'utf8'))];
for (const t of prose) for (const m of t.matchAll(/\b(\w+) (?:public-domain )?(?:English )?translations\b/gi)) {
  const n = NUMW.indexOf(m[1].toLowerCase()); if (n > 0 && n !== english.size && !/Bible|English/i.test(m[0].split(' ')[0])) fail(`translation count: “${m[0]}” but the data has ${english.size} English translations`);
}

// 7. Wikipedia links must not be labelled as the work or passage cited.
for (const [where, label] of wikiLinks) if (/\b\d+\.\d+\b|^(Annals|Letters|Against|On the|Testimonium|Article [IVX]+$)/.test(label)) fail(`${where}: Wikipedia link labelled like a primary text: “${label}”`);
for (const u of UNITS) for (const s of u.sources || []) if (s.url && /wikipedia\.org/.test(s.url) && /\(\d{4}|\d{4}\)/.test(s.t) && !/overview|article|about/i.test(s.t + (s.about || ''))) fail(`unit ${u.id}: source “${s.t}” is a dated work but links to Wikipedia`);

// 8. Start-here route and corrections.
const unitIds = new Set(UNITS.map(u => u.id));
for (const r of START_ROUTE) {
  const u = UNITS.find(x => x.id === r.id);
  if (!u) { fail(`START_ROUTE: no unit ${r.id}`); continue; }
  const l = u.learn || {};
  if (!l.goal || !l.take || !l.check || !l.check.q || !l.check.a) fail(`unit ${u.id}: on the start-here route without goal, essential point and a check`);
}
for (const u of UNITS) for (const [id] of (u.learn && u.learn.next) || []) if (!unitIds.has(id)) fail(`unit ${u.id}: “where next” names unknown unit ${id}`);
for (const c of CORRECTIONS) { if (!unitIds.has(c.unit)) fail(`CORRECTIONS ${c.what}: unknown unit ${c.unit}`); for (const id of c.src || []) if (!SOURCES[id]) fail(`CORRECTIONS ${c.what}: unknown source ${id}`); }

// 9. Withdrawn wording must not come back.
const WITHDRAWN = [/What it would require/, /cannot be male/, /historians of every (background|persuasion)/i, /Medieval teachers compared the Father/, /generated directly from the source texts/, /Trinity of God, Jesus and Mary \(5:116\)/, /once doubted by scholars have since been confirmed/, /oldest surviving manuscripts of the Hebrew Bible by about a thousand years/, /Neither does the original of any other ancient book/, /Erasmus published the first Greek New Testament in print/, /nuclear transmutation/, /aria-label="read"/];
// Site content only: the README and release notes may quote old wording when describing a correction.
const everything = prose.filter(t => !/^# Logos Atlas|^A study atlas of Christianity/.test(t)).join('\n') + JSON.stringify([ctx.MIRACLES, ctx.CANON_TRADITIONS, ctx.WORDS, ctx.ABRAHAMIC, ctx.PARALLELS, ctx.LAB]);
for (const re of WITHDRAWN) if (re.test(everything)) fail(`withdrawn wording has returned: ${re}`);

console.log(`${Object.keys(SOURCES).length} source records and ${cites.length} citations, ${MIRACLES.length} miracle entries, ${english.size} English translations, ${START_ROUTE.length} route units, ${CORRECTIONS.length} corrections checked.`);
console.log(`${UNITS.length} units, ${WORDS.length} key words, ${Object.keys(BIBLE).length} passages, ${refs} references and ${strings} strings checked; ${bad} problem(s).`);
process.exit(bad ? 1 : 0);
