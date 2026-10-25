/* Consistency checks on the atlas data. Run: node tools/check_data.js
   - every Bible and Qur'an reference in the content resolves to quoted text
   - every Key Words entry's Strong's number occurs in the Hebrew or Greek of at least one of its cited verses
   - every unit is well formed (known block kinds and widgets, beliefs attributed, sources linked)
   - every string written in Hebrew, Greek, Arabic, Coptic or Egyptian script is accompanied by English */
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.join(__dirname, '..', 'assets', 'data');
const files = require('./data_files.json');
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
for (const f of files) vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f });
const { BIBLE, QURAN, LEX, WORDS, UNITS } = ctx;
let bad = 0;
const fail = m => { bad++; console.log('FAIL', m); };

const REF = /^(?:[1-3]?[A-Z][a-z]+)\.\d+\.\d+(?:-\d+)?$/;
const KINDS = new Set(['p', 'text', 'record', 'sch', 'bel', 'open', 'quote', 'table', 'list']);
const WIDGETS = new Set(require('./widgets.json'));
const FOREIGN = /[֐-׿Ͱ-Ͽἀ-῿؀-ۿⲀ-⳿\u{13000}-\u{1342F}܀-ݏ]/u;
const LATIN = /[A-Za-z]{3,}/;

// 1. Walk every value in the content (not the generated texts) for references and foreign script.
const skip = new Set(['BIBLE', 'QURAN', 'LEX', 'STATS', 'GEO', 'L']);
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
  for (const s of u.sources || []) if (!/^https?:\/\//.test(s.url || '')) fail(`unit ${u.id}: source without link: ${s.t}`);
  for (const sec of u.sections) {
    if (sec.widget && !WIDGETS.has(sec.widget)) fail(`unit ${u.id}: unknown widget ${sec.widget}`);
    for (const b of sec.blocks) {
      if (!KINDS.has(b.k)) fail(`unit ${u.id} / ${sec.h}: unknown block kind ${b.k}`);
      if (b.k === 'bel' && !b.who) fail(`unit ${u.id} / ${sec.h}: belief without a tradition named`);
      if (b.k === 'quote' && !b.url) fail(`unit ${u.id} / ${sec.h}: quotation without a source link`);
    }
  }
}

console.log(`${UNITS.length} units, ${WORDS.length} key words, ${Object.keys(BIBLE).length} passages, ${refs} references and ${strings} strings checked; ${bad} problem(s).`);
process.exit(bad ? 1 : 0);
