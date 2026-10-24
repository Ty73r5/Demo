/* Consistency checks on the site data. Run: node tools/check_data.js
   - every Hebrew concordance entry's Strong's number occurs in the Hebrew of at least one cited verse
   - every Greek concordance word's stem occurs in the Greek of at least one cited verse
   - every Verse Lab, Library and typology reference resolves to quoted text */
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.join(__dirname, '..', 'assets', 'js');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const order = [...html.matchAll(/<script src="assets\/js\/([\w.-]+)"><\/script>/g)].map(m => m[1]).filter(f => !['app.js', 'sections.js'].includes(f));
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
for (const f of order) vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f });
const S = ctx.SCRIPTURE; let bad = 0;
const fail = m => { bad++; console.log('FAIL', m); };
const strip = s => s.normalize('NFD').replace(/[̀-ͯ᾽᾿῀῁῍-῏῝-῟῭-`´῾]/g, '').toLowerCase().replace(/ς/g, 'σ');
for (const l of ctx.LEXICON) {
  for (const r of l.refs) if (!S[r]) fail(`${l.id}: missing verse ${r}`);
  if (l.lang === 'heb') {
    const nums = l.s.split('/').map(x => +x.trim().slice(1));
    const ok = l.refs.some(r => S[r] && S[r].heb && S[r].heb.some(([, n]) => nums.includes(n)));
    if (!ok) fail(`${l.id} ${l.s}: Strong's number not found in Hebrew of ${l.refs.join(', ')}`);
  } else {
    const stem = l.stem || strip(l.w.split('/')[0].trim()).slice(0, 4);
    const ok = l.refs.some(r => S[r] && S[r].grc && strip(S[r].grc).includes(stem.slice(0, 3)));
    if (!ok) fail(`${l.id} ${l.w}: stem "${stem}" not found in Greek of ${l.refs.join(', ')}`);
  }
}
const need = [...ctx.LAB.map(x => x.ref), ...ctx.BOOKS.map(b => b.key), ...ctx.TYPOLOGY.flatMap(t => [t.ot, t.nt]), ...ctx.NT_USE.flatMap(t => [t.ot, t.nt]), ...ctx.MESSIANIC.map(m => m.ref), ...ctx.SYNOPTIC.flatMap(s => s.refs)];
for (const r of need) if (!S[r]) fail(`missing verse ${r}`);
console.log(`${ctx.LEXICON.length} words, ${need.length} structured references checked; ${bad} problem(s).`);
process.exit(bad ? 1 : 0);
