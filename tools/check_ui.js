/* Browser checks for the reader. Run: node tools/check_ui.js
   Needs Playwright with Chromium (npm i -D playwright && npx playwright install chromium, or a preinstalled copy).
   Serves the site from a local HTTP server, then checks: every unit renders without script errors; search finds items
   inside interactives and opens them; citation markers open a source record and focus returns on close; keyboard use
   of the contents and dialogs; reading settings apply and persist; visited marks; the tour without a voice waits for
   the reader; no horizontal scrolling at phone width; and the single-file build works with the network switched off.
   These checks test behaviour. They say nothing about whether the content is true. */
const http = require('http'), fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const { chromium } = require('playwright');
const root = path.join(__dirname, '..');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const f = path.join(root, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res);
});
let bad = 0;
const ok = (cond, msg) => { if (cond) console.log('ok  ', msg); else { bad++; console.log('FAIL', msg); } };

(async () => {
  await new Promise(r => server.listen(0, r));
  const base = `http://localhost:${server.address().port}/index.html`;
  const browser = await chromium.launch();
  const errors = [];
  const watch = p => { p.on('pageerror', e => errors.push(e.message)); return p; };
  const noFonts = p => p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());

  // Desktop
  const page = watch(await browser.newPage({ viewport: { width: 1280, height: 900 } })); await noFonts(page);
  await page.goto(base + '#/', { waitUntil: 'load' });
  const ids = await page.evaluate(() => A.units.map(u => u.id));
  let broken = [];
  for (const id of ids) {
    await page.evaluate(i => { location.hash = '#/' + i; }, id); await page.waitForTimeout(60);
    if (await page.locator('.widget .note', { hasText: /not available|could not be shown/ }).count()) broken.push(id);
    if (await page.locator('.cite.missing').count()) broken.push(id + ' (missing source)');
  }
  ok(!broken.length && !errors.length, `all ${ids.length} units render without script errors ${broken.join(' ')} ${errors.join(' | ')}`);

  // Search reaches interactive data and opens the item
  await page.goto(base + '#/welcome', { waitUntil: 'load' });
  await page.fill('#search', 'Tchacos');
  ok(await page.locator('#search-results a', { hasText: 'Bible as a library' }).count() > 0, 'search finds text inside a list (Codex Tchacos)');
  await page.fill('#search', 'Komodo');
  const hit = page.locator('#search-results a', { hasText: 'virgin birth' });
  ok(await hit.count() > 0, 'search finds a miracle card and names it');
  await hit.first().click(); await page.waitForTimeout(300);
  ok(await page.locator('.card details[open]', { hasText: 'Komodo' }).count() === 1 || await page.locator('.card.spotlight').count() === 1, 'search result opens the matching miracle card');
  await page.fill('#search', 'Methuselah');
  ok(await page.locator('#search-results .hit').count() > 0, 'search covers the cited passages’ text');

  // Citation marker opens a source record; Escape closes; focus returns
  await page.goto(base + '#/miracles?m=27', { waitUntil: 'load' }); await page.waitForTimeout(200);
  const cite = page.locator('.cite.retracted').first();
  ok(await cite.count() === 1, 'retracted study is marked at its citation');
  await cite.focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(100);
  ok(await page.locator('#src-dlg[open] .retraction').count() === 1, 'source record shows the retraction');
  await page.keyboard.press('Escape'); await page.waitForTimeout(100);
  ok(await page.evaluate(() => document.activeElement && document.activeElement.classList.contains('cite')), 'focus returns to the citation after closing');

  // Keyboard: contents link, Bible dialog
  await page.goto(base + '#/', { waitUntil: 'load' }); await page.waitForTimeout(150);
  await page.fill('#search', ''); await page.focus('#search'); await page.keyboard.press('Tab');
  ok(await page.evaluate(() => document.activeElement.classList.contains('toc-start')), 'Tab from search reaches the start-here link');
  await page.goto(base + '#/welcome', { waitUntil: 'load' });
  await page.locator('[data-ref="John.1.1"]').first().focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(100);
  ok(await page.locator('#bible-dlg[open]').count() === 1, 'Bible dialog opens from the keyboard');
  await page.locator('#bd-tabs .chip', { hasText: 'Translations' }).click();
  ok(/10 English translations|of the atlas’s 10 English translations/.test(await page.textContent('#bd-body')), 'translation count in the dialog comes from the data');
  await page.keyboard.press('Escape');

  // Reading settings apply and persist; visited marks
  await page.click('#read-btn'); await page.check('input[name="rd-size"][value="xl"]'); await page.check('input[name="rd-font"][value="sans"]'); await page.keyboard.press('Escape');
  await page.reload({ waitUntil: 'load' });
  ok(await page.evaluate(() => document.documentElement.dataset.size === 'xl' && document.documentElement.dataset.font === 'sans'), 'reading settings apply and persist');
  ok(await page.locator('.toc .seen .visually-hidden', { hasText: 'visited' }).count() > 0, 'opened units are marked “visited”, not “read”');
  await page.click('#seen-clear');
  ok(await page.locator('.toc .seen').count() === 0, 'visited marks can be cleared');

  // Start-here route and checks of understanding
  await page.goto(base + '#/library', { waitUntil: 'load' });
  ok(await page.locator('.learn').count() === 1 && await page.locator('.end-box.check details').count() === 1, 'route unit has essentials and a check with a hidden answer');
  ok(await page.locator('.route-pager').count() === 1, 'route unit links to the next route step');

  // Tour without a voice waits for the reader
  const quiet = watch(await browser.newPage()); await noFonts(quiet);
  await quiet.addInitScript(() => { delete window.speechSynthesis; Object.defineProperty(window, 'speechSynthesis', { value: undefined }); });
  await quiet.goto(base + '#/', { waitUntil: 'load' });
  await quiet.evaluate(() => A.tourStart()); await quiet.waitForTimeout(2500);
  ok(/Step 1 of/.test(await quiet.textContent('#tb-step')), 'text-only tour does not advance on its own');
  const info = await quiet.evaluate(() => A.tourInfo);
  ok(info && info.minutes > 0 && (await quiet.textContent('#tb-say')).includes(`${info.minutes} minutes`), `tour states its own length (${info && info.minutes} minutes for ${info && info.steps} steps)`);

  // Phone width
  const phone = watch(await browser.newPage({ viewport: { width: 360, height: 780 }, isMobile: true, hasTouch: true })); await noFonts(phone);
  const wide = [];
  for (const id of ids) { await phone.goto(`${base}#/${id}`, { waitUntil: 'load' }); await phone.waitForTimeout(40); if (await phone.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)) wide.push(id); }
  ok(!wide.length, `no horizontal scrolling at 360 px ${wide.join(' ')}`);
  await phone.goto(base + '#/welcome', { waitUntil: 'load' });
  await phone.click('#toc-btn');
  ok(await phone.locator('#rail.open').count() === 1, 'contents open on a phone');
  const small = await phone.evaluate(() => [...document.querySelectorAll('.masthead button, .chip, .pager a, .route a')].filter(b => { const r = b.getBoundingClientRect(); return r.width && (r.height < 24 || r.width < 24); }).length);
  ok(small === 0, `buttons in the masthead, chips and navigation are at least 24 px (${small} smaller)`);

  // Single-file build, offline
  const out = path.join(require('os').tmpdir(), 'logos-atlas-check.html');
  execFileSync('python3', [path.join(__dirname, 'build_artifact.py'), out]);
  const ctx = await browser.newContext(); await ctx.setOffline(true);
  const off = watch(await ctx.newPage());
  await off.goto('file://' + out + '#/miracles', { waitUntil: 'load' });
  ok(await off.locator('.card').count() >= 30 && await off.evaluate(() => !!window.BIBLE && Object.keys(BIBLE).length > 600), 'single-file build works with the network off');
  await off.locator('[data-ref]').first().click();
  ok(await off.locator('#bible-dlg[open] .iw').count() > 0, 'offline: passages and original-language words load');

  await browser.close(); server.close();
  console.log(bad ? `${bad} check(s) failed.` : 'All UI checks passed.');
  process.exit(bad ? 1 : 0);
})().catch(e => { console.error(e); server.close(); process.exit(1); });
