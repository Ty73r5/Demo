/* Check that the atlas's external links resolve. Run: node tools/check_links.js [--all]
   Collects every URL written in the content, plus the links generated for each Bible passage, Qur'an verse and
   Strong's number (a sample of these unless --all). Fails on 404/410 and unreachable hosts; reports 403/429 separately,
   since several sites refuse automated requests that a browser would be served. Needs Node 18+ (global fetch). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.join(__dirname, '..', 'assets', 'data');
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
for (const f of require('./data_files.json')) vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f });
const { L, BIBLE, QURAN, LEX } = ctx;
const all = process.argv.includes('--all');

const content = new Map();
function walk(v, where) {
  if (typeof v === 'string') { for (const m of v.matchAll(/https?:\/\/[^\s)'"\]]+/g)) if (!content.has(m[0])) content.set(m[0], where); }
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, `${where}.${k}`);
}
for (const k of Object.keys(ctx)) if (/^[A-Z][A-Z_]+$/.test(k) && !['BIBLE', 'QURAN', 'LEX', 'STATS', 'GEO', 'L'].includes(k)) walk(ctx[k], k);

const sample = (arr, n) => all ? arr : arr.filter((_, i) => i % Math.max(1, Math.floor(arr.length / n)) === 0);
const generated = new Map();
const firstVerse = r => { const m = r.match(/^(.+)\.(\d+)\.(\d+)/); return [+m[2], +m[3]]; };
for (const r of sample(Object.keys(BIBLE), 60)) {
  const [c, v] = firstVerse(r), slug = BIBLE[r].slug;
  if (L.bh(slug, c, v)) generated.set(L.bh(slug, c, v), `BIBLE ${r}`);
  if (L.bhInter(slug, c, v) && BIBLE[r].words.length) generated.set(L.bhInter(slug, c, v), `BIBLE ${r} interlinear`);
}
for (const s of sample(Object.keys(LEX), 40)) { generated.set(L.strongs(s), `LEX ${s}`); generated.set(L.blb(s), `LEX ${s}`); }
for (const q of sample(Object.keys(QURAN), 10)) { const [s, v] = q.split(/[:-]/); generated.set(L.quran(s, v), `QURAN ${q}`); }

const urls = [...content, ...generated].filter(([u]) => !/^https:\/\/claude\.ai/.test(u));
const UA = 'Mozilla/5.0 (compatible; LogosAtlasLinkCheck/1.0; +https://github.com/ty73r5/demo)';
async function check(url) {
  for (const method of ['HEAD', 'GET']) {
    try {
      const res = await fetch(url, { method, redirect: 'follow', headers: { 'user-agent': UA, accept: 'text/html,*/*' }, signal: AbortSignal.timeout(25000) });
      if (method === 'HEAD' && [403, 404, 405, 429, 500, 501].includes(res.status)) continue; // some servers reject HEAD
      return res.status;
    } catch (e) { if (method === 'GET') return 'ERR ' + (e.cause && e.cause.code || e.name); }
  }
}
(async () => {
  const results = [], queue = [...urls];
  await Promise.all(Array.from({ length: 8 }, async () => { while (queue.length) { const [u, w] = queue.shift(); results.push([await check(u), u, w]); } }));
  const broken = results.filter(([s]) => s === 404 || s === 410 || String(s).startsWith('ERR') || s >= 500);
  const refused = results.filter(([s]) => s === 403 || s === 429 || s === 401);
  for (const [s, u, w] of broken) console.log(`BROKEN ${s} ${u}  (${w})`);
  for (const [s, u, w] of refused) console.log(`REFUSED ${s} ${u}  (${w})`);
  console.log(`${results.length} links checked (${content.size} in content, ${generated.size} generated${all ? '' : ', sampled'}): ${results.length - broken.length - refused.length} ok, ${refused.length} refused automated access, ${broken.length} broken.`);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `## Link check\n\n${results.length} links: ${broken.length} broken, ${refused.length} refused.\n\n` + broken.map(([s, u, w]) => `- ${s} ${u} (${w})`).join('\n') + '\n');
  process.exit(broken.length ? 1 : 0);
})();
