/* Logos Atlas: reader, references, sources, dialogs, search and routing. Widgets register themselves in A.W. */
(() => {
  'use strict';
  const A = window.A = { W: {} };
  const $ = A.$ = (s, r = document) => r.querySelector(s);
  const $$ = A.$$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = A.esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  A.store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* storage unavailable */ } }
  };
  A.svg = (name, attrs = {}, parent) => {
    const n = document.createElementNS('http://www.w3.org/2000/svg', name);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  };
  A.yr = y => y < 0 ? `${-y} BC` : (y < 1000 ? `AD ${y}` : `${y}`);
  A.reduceMotion = () => document.documentElement.dataset.motion === 'reduce' || matchMedia('(prefers-reduced-motion: reduce)').matches;
  const BIBLE = window.BIBLE || {}, QURAN = window.QURAN || {}, LEX = window.LEX || {}, STATS = window.STATS || {}, SOURCES = window.SOURCES || {};

  /* ── Translations: the list the reader knows, and counts derived from it ── */
  const TR = A.TR = [
    ['Wycliffe', 'Wycliffe Bible', 'c. 1395 · Middle English, translated from the Latin'],
    ['Tyndale', 'Tyndale', '1526–1534 · first English translation from the Greek and Hebrew (New Testament, Pentateuch and some other books only)'],
    ['Geneva', 'Geneva Bible', '1599 · Protestant exiles’ study Bible'],
    ['KJV', 'King James Version', '1611 · Church of England (1769 text)'],
    ['DRC', 'Douay–Rheims', '1582–1610 · Catholic, from the Vulgate (Challoner revision)'],
    ['YLT', 'Young’s Literal', '1862 · word-for-word'],
    ['ASV', 'American Standard', '1901 · revision of the KJV'],
    ['JPS', 'JPS Tanakh', '1917 · Jewish Publication Society (Hebrew Bible only)'],
    ['CPDV', 'Catholic Public Domain', '2009 · from the Vulgate'],
    ['BSB', 'Berean Standard Bible', '2023 · modern English'],
    ['Vulgate', 'Clementine Vulgate', '1592 · the Latin Bible of the Western Church'],
    ['ChiUn', 'Chinese Union Version', '1919 · Chinese (John 1:1 only)']
  ];
  const ENGLISH = TR.filter(([k]) => k !== 'Vulgate' && k !== 'ChiUn');
  const NUM = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  A.trCount = { english: ENGLISH.length, word: NUM[ENGLISH.length] || String(ENGLISH.length) };

  /* ── Where a link goes: said in words, so that a link never looks like more than it is ── */
  const HOSTS = [
    [/(^|\.)wikipedia\.org$/, u => `Wikipedia article “${decodeURIComponent(u.pathname.replace(/^\/wiki\//, '')).replace(/_/g, ' ')}”`],
    [/newadvent\.org$/, () => 'English text at New Advent'], [/sefaria\.org$/, () => 'text at Sefaria'], [/^doi\.org$/, () => 'publisher’s page (DOI)'],
    [/sacred-texts\.com$/, () => 'text at the Internet Sacred Text Archive'], [/ccel\.org$/, () => 'text at the Christian Classics Ethereal Library'],
    [/gutenberg\.org$/, () => 'text at Project Gutenberg'], [/plato\.stanford\.edu$/, () => 'Stanford Encyclopedia of Philosophy entry'],
    [/earlychristianwritings\.com$/, () => 'text and notes at Early Christian Writings'], [/vatican\.va$/, () => 'document on the Vatican website'],
    [/sunnah\.com$/, () => 'hadith text at Sunnah.com'], [/quran\.com$/, () => 'Quran.com'], [/britishmuseum\.org$/, () => 'British Museum collection record'],
    [/pubmed|ncbi\.nlm\.nih\.gov$/, () => 'PubMed record']
  ];
  A.dest = url => {
    try { const u = new URL(url); const h = HOSTS.find(([re]) => re.test(u.hostname)); return h ? h[1](u) : u.hostname.replace(/^www\./, ''); } catch (e) { return 'link'; }
  };
  const isWiki = url => /^https?:\/\/[a-z]+\.wikipedia\.org\//.test(url || '');

  /* ── Rich text: {{Gen.1.1}}, {{Q:2:255}}, [[source-id]], [label](url), **bold**, *italic* ── */
  const refLabel = A.refLabel = r => r.startsWith('Q:') ? (QURAN[r.slice(2)] ? QURAN[r.slice(2)].label : 'Qur’an ' + r.slice(2)) : (BIBLE[r] ? BIBLE[r].label : r);
  A.refBtn = r => r.startsWith('Q:')
    ? `<button type="button" class="ref q" data-q="${esc(r.slice(2))}" title="Read in Arabic and English">${esc(refLabel(r))}</button>`
    : `<button type="button" class="ref" data-ref="${esc(r)}" title="Read in Hebrew or Greek and in translation">${esc(refLabel(r))}</button>`;
  A.citeBtn = id => {
    const s = SOURCES[id];
    if (!s) return `<span class="cite missing">[source ${esc(id)} missing]</span>`;
    return `<button type="button" class="cite${s.st === 'retracted' ? ' retracted' : ''}" data-src="${esc(id)}" aria-label="Source: ${esc(s.short)}${s.st === 'retracted' ? ' (retracted)' : ''}">${esc(s.short)}</button>`;
  };
  const LINK = /\[([^\]]+)\]\((https?:\/\/(?:[^\s()]|\([^\s()]*\))+)\)/g;
  A.rich = s => {
    if (s == null) return '';
    const keep = [];
    const hold = h => `\u0000${keep.push(h) - 1}\u0000`;
    let t = String(s)
      .replace(/\[\[([\w-]+)\]\]/g, (_, id) => hold(A.citeBtn(id)))
      .replace(LINK, (_, label, url) => hold(A.link(label, url)))
      .replace(/\{\{([^}]+)\}\}/g, (_, r) => hold(A.refBtn(r)));
    t = A.inline(t);
    return t.replace(/\u0000(\d+)\u0000/g, (_, i) => keep[+i]);
  };
  A.inline = s => esc(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*\s][^*]*)\*/g, '<em>$1</em>').replace(/\[obj\.\]/g, '<span class="u">(object marker)</span>').replace(/&lt;([^&]{1,20})&gt;/g, '<span class="u">($1)</span>');
  // Wikipedia links say so, unless the label already does.
  A.link = (label, url) => url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${A.inline(label)}</a>${isWiki(url) && !/wikipedia/i.test(label) ? '<span class="dest"> (Wikipedia)</span>' : ''}` : A.inline(label);

  /* ── Blocks: statement type (the margin label) and, where given, evidential status ── */
  const KLABEL = { text: 'The text', record: 'Record', sch: 'Scholarship', open: 'Open question' };
  const EV = A.EV = { est: 'well established', pred: 'predominant scholarly view', deb: 'actively debated', min: 'minority interpretation', ins: 'insufficient evidence', ana: 'editorial analogy' };
  A.block = (b, i, list) => {
    // A run of statements of the same kind carries its label once, on the first of the run; an evidential status always shows.
    const prev = list && i > 0 ? list[i - 1] : null;
    const repeat = prev && prev.k === b.k && prev.who === b.who && !b.ev;
    const label = repeat ? '' : b.k === 'bel' ? `${b.who} belief` : KLABEL[b.k] || '';
    const ev = b.ev ? `<span class="blk-ev">${esc(EV[b.ev] || b.ev)}</span>` : '';
    const k = label || ev ? `<span class="blk-k">${esc(label)}${label && ev ? ' · ' : ''}${ev}</span>` : '';
    let body;
    if (b.k === 'quote') body = `<blockquote>“${A.rich(b.q)}”<footer>${b.ed ? esc(b.ed) + ' · ' : ''}${A.link(b.cite, b.url)}</footer></blockquote>`;
    else if (b.k === 'table') body = `<div class="tbl-wrap"><table class="tbl"><thead><tr>${b.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${A.rich(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    else if (b.k === 'list') body = `<ul class="list">${b.items.map(i => `<li>${A.rich(i)}</li>`).join('')}</ul>`;
    else body = `<p>${A.rich(b.x)}</p>`;
    return `<div class="blk" data-k="${b.k === 'quote' || b.k === 'table' || b.k === 'list' ? 'p' : b.k}">${k}${body}</div>`;
  };

  /* ── Units, parts and order ─────────────────────────────── */
  const PARTS = A.PARTS = ['Orientation', 'The Book', 'History', 'Christian Belief', 'Comparisons', 'People & Movements', 'Living It'];
  const BRANCH = new Set(['Comparisons', 'People & Movements']);
  const ORDER = ['welcome', 'method', 'library', 'transmission', 'scrolls', 'original', 'words', 'stories', 'atlas', 'jesus', 'time', 'creeds', 'orthodoxy', 'trinity', 'reading', 'arguments', 'miracles', 'hell', 'abrahamic', 'ancient', 'parallels', 'kemet', 'conversation', 'ingersoll', 'critics', 'templars', 'freemasonry', 'rosicrucians', 'mind', 'impact', 'inner', 'virtues', 'sources'];
  const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
  const units = A.units = (window.UNITS || []).slice().sort((a, b) => {
    const ia = ORDER.indexOf(a.id), ib = ORDER.indexOf(b.id);
    return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib) || PARTS.indexOf(a.part) - PARTS.indexOf(b.part);
  });
  const byId = A.byId = Object.fromEntries(units.map((u, i) => [u.id, Object.assign(u, { n: i + 1 })]));
  const partNo = p => ROMAN[PARTS.indexOf(p)] || '';
  const ROUTE = (window.START_ROUTE || []).filter(r => byId[r.id]);

  /* ── Visited marks: this browser only, never a measure of understanding ── */
  const seen = new Set(A.store.get('la3-seen', []));
  function renderToc(current) {
    $('#toc').innerHTML = `<a class="toc-start" href="#/welcome?route=1"${current === 'welcome' ? ' aria-current="page"' : ''}>Start here: a route through the essentials</a>` + PARTS.map(p => {
      const list = units.filter(u => u.part === p);
      if (!list.length) return '';
      return `<div class="toc-part"><span class="rn">${partNo(p)}</span>${esc(p)}${BRANCH.has(p) ? '<span class="branch">context</span>' : ''}</div><ol>${list.map(u =>
        `<li><a href="#/${u.id}"${u.id === current ? ' aria-current="page"' : ''}>${esc(u.title)}${seen.has(u.id) ? '<span class="seen" title="Opened in this browser">✓<span class="visually-hidden"> visited</span></span>' : ''}</a></li>`).join('')}</ol>`;
    }).join('');
  }
  $('#seen-clear').addEventListener('click', () => { seen.clear(); A.store.del('la3-seen'); renderToc((location.hash.match(/^#\/([\w-]+)/) || [])[1] || ''); });
  const rail = $('#rail'), scrim = $('#scrim');
  const closeRail = () => { rail.classList.remove('open'); scrim.hidden = true; $('#toc-btn').setAttribute('aria-expanded', 'false'); };
  $('#toc-btn').addEventListener('click', () => { const o = !rail.classList.contains('open'); rail.classList.toggle('open', o); scrim.hidden = !o; $('#toc-btn').setAttribute('aria-expanded', String(o)); if (o) $('#search').focus(); });
  scrim.addEventListener('click', closeRail);
  rail.addEventListener('click', e => { if (e.target.closest('a')) closeRail(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && rail.classList.contains('open')) { closeRail(); $('#toc-btn').focus(); } });

  /* ── Search: unit prose and the data behind the interactives ──
     Each document names the unit and item it comes from and links straight to it. Bible text is searched only for the
     passages the atlas cites (its selected excerpts), not the whole Bible. */
  const plain = s => String(s || '').replace(/\{\{[^}]+\}\}/g, ' ').replace(/\[\[[^\]]+\]\]/g, ' ').replace(LINK, '$1').replace(/\*+/g, '');
  const flat = v => typeof v === 'string' ? v : Array.isArray(v) ? v.map(flat).join(' ') : v && typeof v === 'object' ? Object.values(v).map(flat).join(' ') : '';
  const blockText = b => [b.x, b.q, b.items && b.items.join(' '), b.rows && b.rows.flat().join(' ')].join(' ');
  const docs = [];
  const add = (unit, item, href, ...text) => { if (byId[unit]) docs.push({ unit, item, href, text: text.map(t => plain(flat(t))).join(' \n ') }); };
  units.forEach(u => add(u.id, '', `#/${u.id}`, u.title, u.kicker, u.intro, u.learn, u.sections.flatMap(s => [s.h, ...s.blocks.map(blockText)])));
  (window.WORDS || []).forEach(w => add('words', `${w.tr} · ${w.gloss}`, `#/words?w=${w.id}`, w.tr, w.gloss, w.kjv, w.strong, w.notes.map(n => n.x)));
  (window.LAB || []).forEach(p => add('original', `${p.title} (${refLabel(p.ref)})`, `#/original?p=${encodeURIComponent(p.ref)}`, p.title, p.why, p.blocks.map(blockText)));
  (window.MIRACLES || []).forEach((m, i) => add('miracles', m.n, `#/miracles?m=${i}`, m));
  (window.STORIES || []).forEach(s => add('stories', s.t, `#/stories?s=${s.id}`, s.t, s.p, s.x, s.m, s.hard, s.vt, s.w));
  (window.PARALLELS || []).forEach(p => add('parallels', p.n, `#/parallels?q=${encodeURIComponent(p.n)}`, p.n, p.x));
  (window.CANON_ROWS || []).forEach(r => add('library', r.book, `#/library?q=${encodeURIComponent(r.book)}`, r.book, r.note));
  (window.ABRAHAMIC || []).forEach((a, i) => add('abrahamic', a.k, `#/abrahamic?t=${i}`, a));
  (window.ARGS || []).forEach(a => add('arguments', a.n, `#/arguments?a=${a.id}`, a.n, a.who, a.x, a.obj));
  (window.CORRECTIONS || []).forEach(c => add('method', c.what, `#/method?q=${encodeURIComponent(c.what)}`, c));
  Object.entries(SOURCES).forEach(([id, s]) => add('method', `Source: ${s.short}`, `#/method?src=${id}`, s.a, s.t, s.pub, s.sup, s.lim));
  const passages = Object.entries(BIBLE).map(([r, e]) => ({ r, label: e.label, text: [e.tr.BSB, e.tr.KJV, e.tr.DRC].filter(Boolean).join(' \n ') }));
  const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const snippet = (text, re, q) => {
    const i = text.search(re), a = Math.max(0, i - 50);
    return esc((a ? '…' : '') + text.slice(a, i + 90).replace(/\s+/g, ' ')).replace(new RegExp(reEsc(esc(q)), 'i'), m => `<mark>${m}</mark>`) + '…';
  };
  function search(q) {
    const box = $('#search-results'), toc = $('#toc');
    q = q.trim();
    if (q.length < 2) { box.innerHTML = ''; box.hidden = true; toc.hidden = false; return; }
    const re = new RegExp(reEsc(q), 'i');
    const hits = docs.filter(d => re.test(d.text) || re.test(d.item));
    const shown = hits.slice(0, 30).map(d => `<a href="${d.href}${d.href.includes('?') ? '&' : '?'}q=${encodeURIComponent(q)}"><span class="where">${esc(byId[d.unit].title)}${d.item ? ' › ' + esc(d.item) : ''}</span><span class="snip">${snippet(d.text, re, q)}</span></a>`);
    const ph = passages.filter(p => re.test(p.text)).slice(0, 8).map(p => `<button type="button" class="hit" data-ref="${esc(p.r)}"><span class="where">Passage cited in the atlas › ${esc(p.label)}</span><span class="snip">${snippet(p.text, re, q)}</span></button>`);
    box.innerHTML = `<p class="note search-scope">${hits.length} result${hits.length === 1 ? '' : 's'}${hits.length > 30 ? ' (first 30 shown)' : ''}. Searches unit text, key words, passage notes, stories, miracles, parallels, canon notes, comparisons, arguments, corrections and source records, and the English text of the ${passages.length} passages the atlas cites (not the whole Bible).</p>`
      + (shown.concat(ph).join('') || '<p class="note" style="padding:8px 10px">Nothing found.</p>');
    box.hidden = false; toc.hidden = true;
  }
  $('#search').addEventListener('input', e => search(e.target.value));

  /* ── Router ─────────────────────────────────────────────── */
  const main = $('#main');
  function route() {
    const m = location.hash.match(/^#\/([\w-]+)?(?:\?(.*))?/);
    const id = m && m[1], params = new URLSearchParams(m && m[2] || '');
    if (typeof A.stopAll === 'function') A.stopAll();
    if (!id || !byId[id]) renderCover(); else renderUnit(byId[id], params);
    renderToc(id || '');
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }
  window.addEventListener('hashchange', route);
  A.go = id => { if (location.hash === '#/' + id) route(); else location.hash = '#/' + id; };

  const routeList = () => `<ol class="route">${ROUTE.map((r, k) => `<li><a href="#/${r.id}"><span class="n">${k + 1}</span><span><b>${esc(r.label)}</b><span class="sub">${esc(byId[r.id].title)}${seen.has(r.id) ? ' · visited' : ''}</span></span></a></li>`).join('')}</ol>`;
  A.routeList = routeList;

  function renderCover() {
    document.title = 'Logos Atlas: Christianity in History, Scripture and Thought';
    const g = BIBLE['Gen.1.1'], j = BIBLE['John.1.1'];
    const inter = (b, heb) => `<div class="inter"${heb ? ' dir="rtl"' : ''}>${b.words.map(w => `<span class="iw"><span class="o${heb ? ' heb' : ''}" lang="${heb ? 'he' : 'grc'}">${esc(w[0])}</span><span class="g">${A.inline(w[2])}</span></span>`).join('')}</div>`;
    main.innerHTML = `<div class="cover">
      <p class="eyebrow">A study atlas</p>
      <h1><span class="r">L</span>ogos <span class="r">A</span>tlas</h1>
      <p class="tagline">Christianity in history, Scripture and thought: what its texts say, how they reached us, what Christians believe and why, how the faith compares with Judaism, Islam and the ancient world, and what it has meant for human life.</p>
      <div class="hero-texts">
        ${g ? `<div class="hero-card"><div class="src"><span>Genesis 1:1 · Hebrew</span>${A.refBtn('Gen.1.1')}</div>${inter(g, true)}<p class="en">“${esc(g.tr.KJV)}” <span class="dlg-note">(KJV)</span></p></div>` : ''}
        ${j ? `<div class="hero-card"><div class="src"><span>John 1:1 · Greek</span>${A.refBtn('John.1.1')}</div>${inter(j, false)}<p class="en">“${esc(j.tr.KJV)}” <span class="dlg-note">(KJV)</span></p></div>` : ''}
      </div>
      <div class="cover-actions">
        <a class="btn btn-primary" href="#/${ROUTE.length ? ROUTE[0].id : 'welcome'}">Start here: ${ROUTE.length} steps through the essentials</a>
        <a class="btn" href="#/welcome">How to use this atlas</a>
        <button type="button" class="btn" data-tour-start><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>Guided tour</button>
      </div>
      ${ROUTE.length ? `<section class="route-box"><h2>The start-here route</h2><p class="note">A suggested order for a first pass. Each step has a goal, the essential point, an example and a question to check your understanding. Explore freely too: every unit stands on its own.</p>${routeList()}</section>` : ''}
      <div class="parts">${PARTS.map(p => `<section class="part-card"><h2><span class="rn">${partNo(p)}</span>${esc(p)}</h2>${BRANCH.has(p) ? '<p class="note">Context: neighbouring traditions and movements, for after the essentials.</p>' : ''}<ul>${units.filter(u => u.part === p).map(u => `<li><a href="#/${u.id}">${esc(u.title)}</a><span class="k">${A.inline(u.kicker)}</span></li>`).join('')}</ul></section>`).join('')}</div>
    </div>`;
  }

  /* Sources a unit cites with [[id]], gathered for its footer. */
  const citedIn = u => [...new Set((JSON.stringify(u).match(/\[\[([\w-]+)\]\]/g) || []).map(m => m.slice(2, -2)))].filter(id => SOURCES[id]);
  const learnBox = l => `<aside class="learn" aria-label="Essentials">
      <div><h2>Goal</h2><p>${A.rich(l.goal)}</p></div>
      <div><h2>The essential point</h2><p>${A.rich(l.take)}</p></div>
      ${l.example ? `<div><h2>For example</h2><p>${A.rich(l.example)}</p></div>` : ''}
    </aside>`;
  const checkBox = l => l.check ? `<div class="end-box check"><h2>Check your understanding</h2><p>${A.rich(l.check.q)}</p>
      <details><summary>Show the answer</summary><p>${A.rich(l.check.a)}</p></details></div>` : '';

  function renderUnit(u, params) {
    document.title = `${u.title} · Logos Atlas`;
    const i = units.indexOf(u), prev = units[i - 1], next = units[i + 1];
    const ri = ROUTE.findIndex(r => r.id === u.id), onRoute = ri >= 0;
    const wdiv = (name, where) => name ? `<div class="widget" data-w="${name}" data-where="${where}"></div>` : '';
    const sec = (s, k) => {
      const body = `${s.blocks.length ? `<div class="blk-wrap">${s.blocks.map(A.block).join('')}</div>` : ''}${wdiv(s.widget, 's' + (k + 1))}`;
      return s.deep
        ? `<section id="s${k + 1}" data-sec="${k + 1}" class="deep"><details${params.get('q') ? ' open' : ''}><summary><h2 class="sec-h">${esc(s.h)}</h2><span class="note">Go deeper (optional)</span></summary>${body}</details></section>`
        : `<section id="s${k + 1}" data-sec="${k + 1}"><h2 class="sec-h">${esc(s.h)}</h2>${body}</section>`;
    };
    const cited = citedIn(u);
    const nextOnRoute = onRoute && ROUTE[ri + 1];
    main.innerHTML = `<article class="unit" data-unit="${u.id}">
      <header class="unit-head"><p class="eyebrow"><span class="n">${partNo(u.part)}</span>${esc(u.part)}${BRANCH.has(u.part) ? ' (context)' : ''} · Unit ${u.n} of ${units.length}${onRoute ? ` · <a href="#/welcome?route=1">Start-here route</a>, step ${ri + 1} of ${ROUTE.length}` : ''}</p><h1>${esc(u.title)}</h1><p class="kicker">${A.rich(u.kicker)}</p></header>
      ${u.learn ? learnBox(u.learn) : ''}
      <p class="unit-intro">${A.rich(u.intro)}</p>
      ${u.id === 'welcome' ? `<section class="route-box" id="route"><h2 class="sec-h">Start here</h2><p>A suggested route through the essentials, in ${ROUTE.length} steps. Each step opens with a goal and the essential point and ends with a question that checks understanding (not agreement). You can leave the route at any time.</p>${routeList()}</section>` : ''}
      ${wdiv(u.widget, 'unit')}
      ${u.sections.map(sec).join('')}
      <footer class="unit-end">
        ${u.learn ? checkBox(u.learn) : ''}
        ${u.questions && u.questions.length ? `<div class="end-box"><h2>Questions for reflection</h2><ol>${u.questions.map(q => `<li>${A.rich(q)}</li>`).join('')}</ol></div>` : ''}
        ${cited.length ? `<div class="end-box"><h2>Sources cited in this unit</h2><ul class="srclist">${cited.map(id => `<li>${A.citeBtn(id)} ${A.inline(SOURCES[id].a)}, ${A.inline(SOURCES[id].t)}${SOURCES[id].pub ? ', ' + A.inline(SOURCES[id].pub) : ''}${SOURCES[id].d ? ' (' + esc(SOURCES[id].d) + ')' : ''}</li>`).join('')}</ul><p class="note">Select a source to see what it supports, its limits and how it was checked.</p></div>` : ''}
        ${u.sources && u.sources.length ? `<div class="end-box"><h2>${cited.length ? 'Further reading and tools' : 'Sources and further reading'}</h2><ul>${u.sources.map(s => `<li>${A.inline(s.t)}${s.url ? ` · <a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(A.dest(s.url))}</a>${isWiki(s.url) && s.about ? ` <span class="note">(${esc(s.about)})</span>` : ''}` : ''}</li>`).join('')}</ul></div>` : ''}
        ${u.learn && u.learn.next ? `<div class="end-box"><h2>Where next</h2><ul>${u.learn.next.filter(n => byId[n[0]]).map(([id, why]) => `<li><a href="#/${id}">${esc(byId[id].title)}</a>: ${A.rich(why)}</li>`).join('')}</ul></div>` : ''}
        ${nextOnRoute ? `<nav class="pager route-pager" aria-label="Start-here route"><a class="next" href="#/${nextOnRoute.id}"><span class="dir">Route step ${ri + 2} of ${ROUTE.length} →</span><span class="t">${esc(nextOnRoute.label)}: ${esc(byId[nextOnRoute.id].title)}</span></a></nav>` : ''}
        <nav class="pager" aria-label="Units in order">${prev ? `<a href="#/${prev.id}"><span class="dir">← Previous unit</span><span class="t">${esc(prev.title)}</span></a>` : '<span></span>'}${next ? `<a class="next" href="#/${next.id}"><span class="dir">Next unit →</span><span class="t">${esc(next.title)}</span></a>` : ''}</nav>
      </footer></article>`;
    $$('.widget', main).forEach(el => {
      const f = A.W[el.dataset.w];
      if (!f) { el.innerHTML = `<p class="note">This interactive is not available.</p>`; return; }
      try { f(el, u, params); } catch (err) { console.error(err); el.innerHTML = `<p class="note">This interactive could not be shown.</p>`; }
    });
    seen.add(u.id); A.store.set('la3-seen', [...seen]);
    if (params.get('route') && $('#route', main)) setTimeout(() => $('#route', main).scrollIntoView({ block: 'start' }), 60);
    if (params.get('src')) setTimeout(() => A.openSource(params.get('src')), 60);
    const q = params.get('q');
    if (q) {
      const re = new RegExp(reEsc(q), 'i');
      const hit = $$('.sec-h, .blk p, .blk li, .blk td, .unit-intro, .learn p, .widget .card, .widget td, .widget .panel p, .widget li', main).find(n => re.test(n.textContent));
      if (hit) setTimeout(() => { const d = hit.closest('details'); if (d) d.open = true; hit.scrollIntoView({ block: 'center' }); hit.classList.add('spotlight'); setTimeout(() => hit.classList.remove('spotlight'), 2500); }, 80);
    }
  }

  /* ── Shared widget helpers ──────────────────────────────── */
  A.chips = (items, sel, attr = 'data-id') => items.map(([id, label]) => `<button type="button" class="chip" ${attr}="${esc(id)}" aria-selected="${id === sel}">${label}</button>`).join('');
  A.bindChips = (box, fn, attr = 'id') => box.addEventListener('click', e => {
    const b = e.target.closest(`[data-${attr}]`); if (!b || !box.contains(b)) return;
    $$(`[data-${attr}]`, box).forEach(x => x.setAttribute('aria-selected', String(x === b)));
    fn(b.dataset[attr], b);
  });
  A.translit = (w, lang) => lang === 'heb' ? w.replace(/\./g, '').toLowerCase() : w;

  /* ── Dialogs: focus moves in on open and returns to the opener on close ── */
  let opener = null;
  const openDlg = d => { if (!d.open) { opener = document.activeElement; d.showModal(); } };
  $$('dialog').forEach(d => {
    d.addEventListener('click', e => { if (e.target === d) d.close(); });
    $('.dlg-close', d).addEventListener('click', () => d.close());
    d.addEventListener('close', () => { if (d.id === 'bible-dlg' && A.stopSpeech) A.stopSpeech(); if (opener && document.contains(opener)) opener.focus(); opener = null; });
  });

  /* ── Source dialog ──────────────────────────────────────── */
  const sd = $('#src-dlg');
  A.openSource = id => {
    const s = SOURCES[id]; if (!s) return;
    const R = window.SOURCE_ROLES || {}, C = window.SOURCE_CHECKS || {};
    $('#sd-title').textContent = s.short;
    $('#sd-body').innerHTML = `
      ${s.st === 'retracted' ? `<p class="retraction" role="note"><b>Retracted.</b> ${A.rich(s.stNote || '')}</p>` : ''}
      <p class="lead">${A.inline(s.a)}, ${A.inline(s.t)}${s.pub ? `, <i>${A.inline(s.pub)}</i>` : ''}${s.d ? ` (${esc(s.d)})` : ''}.</p>
      <dl class="kv">
        <dt>Kind of source</dt><dd>${esc(R[s.role] || s.role)}</dd>
        <dt>Supports</dt><dd>${A.rich(s.sup)}</dd>
        ${s.lim ? `<dt>Limits</dt><dd>${A.rich(s.lim)}</dd>` : ''}
        <dt>How the atlas checked it</dt><dd>${esc(C[s.check] || s.check)}${s.checked ? ` (${esc(s.checked)})` : ''}.</dd>
      </dl>
      <p class="linkrow">${s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(A.dest(s.url))}</a>` : '<span class="note">No online copy is linked.</span>'}${s.alt ? `<a href="${esc(s.alt[1])}" target="_blank" rel="noopener">${esc(s.alt[0])}</a>` : ''}</p>
      <p class="dlg-note">A primary source shows that something was written, made or believed; it does not by itself show that what it reports happened. <a href="#/method">How sources are labelled</a>.</p>`;
    openDlg(sd);
  };
  document.addEventListener('click', e => { const c = e.target.closest('[data-src]'); if (c) { e.preventDefault(); A.openSource(c.dataset.src); } });

  /* ── Bible dialog ───────────────────────────────────────── */
  const SEFARIA = { '1_samuel': 'I_Samuel', '2_samuel': 'II_Samuel', '1_kings': 'I_Kings', '2_kings': 'II_Kings', '1_chronicles': 'I_Chronicles', '2_chronicles': 'II_Chronicles', songs: 'Song_of_Songs' };
  const NT = new Set(['matthew', 'mark', 'luke', 'john', 'acts', 'romans', '1_corinthians', '2_corinthians', 'galatians', 'ephesians', 'philippians', 'colossians', '1_thessalonians', '2_thessalonians', '1_timothy', '2_timothy', 'titus', 'philemon', 'hebrews', 'james', '1_peter', '2_peter', '1_john', '2_john', '3_john', 'jude', 'revelation']);
  const WITNESS = 'NA28 = Nestle–Aland 28th edition; SBL = Society of Biblical Literature GNT; WH = Westcott and Hort (1881); Treg = Tregelles; Tyn = Tyndale House GNT; TR = Textus Receptus (behind the KJV); Byz = Byzantine majority text; 01 = Codex Sinaiticus; 03 = Vaticanus; 05 = Bezae.';
  const dlg = $('#bible-dlg');
  let cur = null, tab = 'words', selWord = -1;
  const firstCV = r => { const m = r.match(/\.(\d+)\.(\d+)/); return m ? [+m[1], +m[2]] : [1, 1]; };
  function variant(note, lang) {
    if (!note) return '';
    let m = note.match(/^(\S+) \([oO]=([^)]+)\) (.+?) - G\d+\S* in: (.+)$/);
    if (m) return `Variant reading: <span lang="grc">${esc(m[1])}</span> (${esc(m[2])}, “${esc(m[3].trim())}”) in ${esc(m[4].replace(/«\d+/g, ''))}.`;
    m = note.match(/^[A-Z]=\s*(\S+)\s*\(([^)]+)\)\s*"([^"]+)"/);
    if (m) return `Variant reading: ${esc(A.translit(m[1], lang))} (<span lang="he">${esc(m[2])}</span>), “${esc(m[3])}”.`;
    return esc(note);
  }
  function wordPanel(e) {
    const w = e.words[selWord]; if (!w) return '<p class="dlg-note">Tap any word above to see its dictionary entry, how often it occurs and how STEP Bible glosses it.</p>';
    const lx = LEX[w[3]] || {}, st = STATS[w[3]];
    const max = st ? st.top[0][1] : 1;
    const heb = e.lang === 'heb';
    return `<div class="word-panel">
      <div class="hw"><span class="o ${heb ? 'heb' : ''}" lang="${heb ? 'he' : 'grc'}">${esc(lx.w || w[0])}</span><span><b>${esc(lx.tr || '')}</b> · ${esc(lx.gloss || w[2])}</span><span class="dlg-note">Strong’s ${esc(w[3])}</span></div>
      <p>In this verse: <b>${esc(w[0].replace(/[,.;:·]+$/, ''))}</b> (${esc(A.translit(w[1], e.lang))}), “${A.inline(w[2].replace(/[,.;:]+$/, ''))}”</p>
      ${w[4] === 'TR' ? `<p class="dlg-note">This word is in the Textus Receptus, the Greek text behind the King James Version, but not in the modern critical text (Nestle–Aland).</p>` : ''}
      ${w[5] ? `<p class="dlg-note">${variant(w[5], e.lang)}</p>` : ''}
      ${st ? `<p class="dlg-note">${st.n.toLocaleString()} occurrences under this Strong’s number in ${heb ? 'the Leningrad Codex as tagged by STEP Bible (Hebrew words only; Aramaic words have their own numbers)' : 'the Nestle–Aland text as tagged by STEP Bible (words found only in the Textus Receptus are not counted)'}. STEP Bible’s most frequent English glosses for it:</p><div class="glossbars">${st.top.map(([g, c]) => `<div class="glossbar"><span>${esc(g)}</span><span class="bar" style="width:${Math.max(2, c / max * 100)}%"></span><span class="c">${c}</span></div>`).join('')}</div>` : ''}
      <p class="dlg-note">A gloss is a brief aid, not a translation of every occurrence; a Strong’s number identifies a dictionary entry, not an interpretation. Context decides what a word means in a given verse. <a href="#/words">About word study</a>.</p>
      ${lx.def ? `<details><summary class="dlg-note">Lexicon entry (${heb ? 'Brown–Driver–Briggs, abridged' : 'Abbott-Smith'}, via STEP Bible)</summary><p class="def">${esc(lx.def.slice(0, 900))}${lx.def.length > 900 ? '…' : ''}</p></details>` : ''}
      ${L.isStrongs(w[3]) ? `<div class="linkrow">${A.link('Bible Hub concordance', L.strongs(w[3]))}${A.link('Blue Letter Bible', L.blb(w[3]))}</div>` : `<p class="dlg-note">${esc(w[3])} is a STEP Bible extended number, beyond Strong’s numbering, so Bible Hub and Blue Letter Bible have no entry for it.</p>`}
    </div>`;
  }
  function renderBible() {
    const e = BIBLE[cur]; if (!e) return;
    const [c, v] = firstCV(cur);
    const tabs = [];
    if (e.words.length) tabs.push(['words', e.lang === 'heb' ? 'Hebrew, word by word' : 'Greek, word by word']);
    tabs.push(['tr', 'Translations']);
    tabs.push(['links', 'Full chapter and other tools']);
    if (!tabs.some(t => t[0] === tab)) tab = tabs[0][0];
    $('#bd-tabs').innerHTML = A.chips(tabs, tab);
    $$('#bd-tabs .chip').forEach(b => { b.setAttribute('role', 'tab'); });
    const lead = e.tr.BSB || e.tr.KJV || e.tr.DRC || '';
    const leadName = e.tr.BSB ? 'Berean Standard Bible' : e.tr.KJV ? 'King James Version' : 'Douay–Rheims';
    let body = '';
    if (tab === 'words') {
      const heb = e.lang === 'heb';
      body = `<p class="lead">${esc(lead)} <span class="dlg-note">(${leadName})</span></p>
        <div class="inter"${heb ? ' dir="rtl"' : ''}>${e.words.map((w, i) => `<button type="button" class="iw${w[4] === 'TR' ? ' tr' : ''}${i === selWord ? ' sel' : ''}" data-w="${i}" title="Strong’s ${esc(w[3])}"><span class="o${heb ? ' heb' : ''}" lang="${heb ? 'he' : 'grc'}">${esc(w[0])}</span><span class="t">${esc(A.translit(w[1], e.lang))}</span><span class="g">${A.inline(w[2])}</span><span class="s">${esc(w[3] || '')}</span></button>`).join('')}</div>
        <p class="dlg-note">${heb ? 'Hebrew: the Leningrad Codex (1008), read right to left, as tagged in STEP Bible’s TAHOT.' : 'Greek: the Nestle–Aland text as tagged in STEP Bible’s TAGNT, with words found only in the Textus Receptus marked TR (dashed).'} Each word shows a transliteration (a spelling aid, not a full pronunciation guide), an English gloss and its Strong’s number. Glosses and numbering from STEP Bible (Tyndale House, Cambridge), CC BY 4.0.${e.words.some(w => w[5]) && !heb ? ' Witnesses: ' + WITNESS : ''}</p>
        <div id="bd-word">${wordPanel(e)}</div>`;
    } else if (tab === 'tr') {
      const have = TR.filter(([k]) => e.tr[k]), eng = have.filter(([k]) => k !== 'Vulgate' && k !== 'ChiUn');
      const lacking = ENGLISH.filter(([k]) => !e.tr[k]).map(([, n]) => n);
      body = `<p class="dlg-note">${eng.length} of the atlas’s ${A.trCount.english} English translations include this passage${e.tr.Vulgate ? ', with the Latin Vulgate' : ''}${e.tr.ChiUn ? ' and the Chinese Union Version' : ''}.${lacking.length ? ` Not shown: ${esc(lacking.join(', '))} (the book is not in that translation, or its numbering differs).` : ''} Each text is shown as that edition prints it.</p>
        <div class="tr-list">${have.map(([k, n, d]) => `<div class="tr-row"><div class="nm"><b>${n}</b>${d}</div><div${k === 'Vulgate' ? ' lang="la"' : k === 'ChiUn' ? ' lang="zh"' : ''}>${esc(e.tr[k])}${k === 'Vulgate' && e.tr.DRC ? `<div class="dlg-note">The Douay–Rheims above is an English translation of this Latin.</div>` : ''}</div></div>`).join('')}</div>
        <p class="dlg-note">${/^psalms$/.test(e.slug) ? 'The Latin and Catholic translations number most Psalms one lower (following the Greek), so they are linked rather than shown here. ' : ''}${e.tr.JPS ? 'Editorial note: the digital JPS 1917 text writes “G-d” and “HaShem”; the atlas restores the 1917 printing’s “God” and “the LORD.” ' : ''}All translations shown are in the public domain. The atlas holds only the passages it cites, not a full Bible; use the next tab for the whole chapter.</p>`;
    } else {
      const slug = e.slug, ot = slug && slug !== '-' && !NT.has(slug);
      const sef = ot ? (SEFARIA[slug] || slug.replace(/(^|_)(\w)/g, (_, a, b) => a + b.toUpperCase())) : null;
      body = `<div class="linkrow" style="flex-direction:column;gap:10px">
        ${slug && slug !== '-' ? A.link(`Bible Hub: the whole of ${e.label.replace(/:.*/, '')} in parallel translations`, `https://biblehub.com/${slug}/${c}.htm`) : ''}
        ${L.bh(slug, c, v) ? A.link('Bible Hub: this verse in dozens of translations, with commentaries', L.bh(slug, c, v)) : ''}
        ${L.bhInter(slug, c, v) ? A.link('Bible Hub interlinear: every word with Strong’s numbers and grammar', L.bhInter(slug, c, v)) : ''}
        ${A.link('BibleGateway: compare modern translations', L.bg(e.label, 'NRSVUE;ESV;NIV;NABRE'))}
        ${A.link('STEP Bible: original-language study tools', 'https://www.stepbible.org/?q=reference=' + encodeURIComponent(cur.split('-')[0]))}
        ${sef ? A.link('Sefaria: this chapter with Jewish commentaries', L.sefaria(sef + '.' + c)) : ''}
      </div><p class="dlg-note">Read a passage in its chapter before drawing conclusions from it. Verse numbering occasionally differs between Hebrew, Greek and English Bibles; the external sites note this where it applies.</p>`;
    }
    $('#bd-body').innerHTML = body;
  }
  A.openBible = ref => {
    if (!BIBLE[ref]) return;
    cur = ref; selWord = -1; tab = BIBLE[ref].words.length ? 'words' : 'tr';
    $('#bd-title').textContent = BIBLE[ref].label;
    renderBible();
    openDlg(dlg);
    $('#bd-body').scrollTop = 0;
  };
  A.bindChips($('#bd-tabs'), id => { tab = id; renderBible(); });
  $('#bd-body').addEventListener('click', ev => {
    const b = ev.target.closest('[data-w]'); if (!b) return;
    selWord = +b.dataset.w;
    $$('.iw', $('#bd-body')).forEach(x => x.classList.toggle('sel', x === b));
    $('#bd-word').innerHTML = wordPanel(BIBLE[cur]);
  });
  const speakBtn = $('#bd-speak');
  if (!('speechSynthesis' in window)) { speakBtn.disabled = true; speakBtn.title = 'Reading aloud is not available in this browser'; }
  speakBtn.addEventListener('click', () => {
    const e = BIBLE[cur]; if (!e || !A.speak) return;
    if (speakBtn.getAttribute('aria-pressed') === 'true') { A.stopSpeech(); speakBtn.setAttribute('aria-pressed', 'false'); return; }
    speakBtn.setAttribute('aria-pressed', 'true');
    A.speak(`${e.label}. ${e.tr.KJV || e.tr.BSB || e.tr.DRC}`, () => speakBtn.setAttribute('aria-pressed', 'false'));
  });

  /* ── Qur'an dialog ──────────────────────────────────────── */
  const qd = $('#quran-dlg');
  A.openQuran = q => {
    const e = QURAN[q]; if (!e) return;
    const [s, v] = q.split(/[:-]/);
    $('#qd-title').textContent = e.label;
    $('#qd-body').innerHTML = `<p class="q-ar" lang="ar">${esc(e.ar)}</p><p class="lead">${esc(e.en)}</p>
      <p class="dlg-note">Arabic: the Uthmani text in the Hafs reading. English: Marmaduke Pickthall, The Meaning of the Glorious Koran (1930), public domain. Muslims regard a translation as an interpretation of the meaning, not as the Qur’an itself, which is the Arabic.</p>
      <div class="linkrow">${A.link('Quran.com: this passage with many translations and word-by-word glosses', L.quran(s, v))}</div>`;
    openDlg(qd);
  };
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-ref]'); if (b) { e.preventDefault(); A.openBible(b.dataset.ref); return; }
    const q = e.target.closest('[data-q]'); if (q) { e.preventDefault(); A.openQuran(q.dataset.q); }
  });

  /* ── Theme and reading settings (this browser only) ─────── */
  const root = document.documentElement;
  const theme = A.store.get('la-theme', null);
  if (theme) root.dataset.theme = theme;
  $('#theme-btn').addEventListener('click', () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    A.store.set('la-theme', root.dataset.theme);
  });
  const READ = { size: ['m', [['s', 'Smaller'], ['m', 'Standard'], ['l', 'Larger'], ['xl', 'Largest']]], leading: ['n', [['n', 'Standard'], ['r', 'Relaxed']]], font: ['serif', [['serif', 'Book (serif)'], ['sans', 'Plain (sans-serif)']]], width: ['n', [['n', 'Standard'], ['narrow', 'Narrow']]], motion: ['auto', [['auto', 'Follow device setting'], ['reduce', 'Reduce motion']]] };
  const reading = Object.assign(Object.fromEntries(Object.entries(READ).map(([k, [d]]) => [k, d])), A.store.get('la-read', {}));
  const applyReading = () => Object.keys(READ).forEach(k => { if (reading[k] === READ[k][0]) delete root.dataset[k]; else root.dataset[k] = reading[k]; });
  applyReading();
  const rd = $('#read-dlg');
  $('#rd-body').innerHTML = Object.entries(READ).map(([k, [, opts]]) => `<fieldset><legend>${{ size: 'Text size', leading: 'Line spacing', font: 'Typeface', width: 'Line length', motion: 'Motion' }[k]}</legend>${opts.map(([v, l]) => `<label><input type="radio" name="rd-${k}" value="${v}"${reading[k] === v ? ' checked' : ''}> ${l}</label>`).join('')}</fieldset>`).join('')
    + '<p class="dlg-note">Settings are kept in this browser only. Your browser’s own zoom and reader mode also work here.</p>';
  $('#rd-body').addEventListener('change', e => { const m = e.target.name.match(/^rd-(\w+)$/); if (!m) return; reading[m[1]] = e.target.value; applyReading(); A.store.set('la-read', reading); });
  $('#read-btn').addEventListener('click', () => openDlg(rd));

  A.start = () => { route(); };
})();
