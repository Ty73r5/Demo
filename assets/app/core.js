/* Logos Atlas: reader, references, dialogs, search and routing. Widgets register themselves in A.W. */
(() => {
  'use strict';
  const A = window.A = { W: {} };
  const $ = A.$ = (s, r = document) => r.querySelector(s);
  const $$ = A.$$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = A.esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  A.store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };
  A.svg = (name, attrs = {}, parent) => {
    const n = document.createElementNS('http://www.w3.org/2000/svg', name);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  };
  A.yr = y => y < 0 ? `${-y} BC` : (y < 1000 ? `AD ${y}` : `${y}`);
  const BIBLE = window.BIBLE || {}, QURAN = window.QURAN || {}, LEX = window.LEX || {}, STATS = window.STATS || {};

  /* ── Rich text: {{Gen.1.1}}, {{Q:2:255}}, [label](url), **bold**, *italic* ── */
  const refLabel = A.refLabel = r => r.startsWith('Q:') ? (QURAN[r.slice(2)] ? QURAN[r.slice(2)].label : 'Qur’an ' + r.slice(2)) : (BIBLE[r] ? BIBLE[r].label : r);
  A.refBtn = r => r.startsWith('Q:')
    ? `<button type="button" class="ref q" data-q="${esc(r.slice(2))}" title="Read in Arabic and English">${esc(refLabel(r))}</button>`
    : `<button type="button" class="ref" data-ref="${esc(r)}" title="Read in the original language and eleven translations">${esc(refLabel(r))}</button>`;
  const LINK = /\[([^\]]+)\]\((https?:\/\/(?:[^\s()]|\([^\s()]*\))+)\)/g;
  A.rich = s => {
    if (s == null) return '';
    const keep = [];
    const hold = h => `\u0000${keep.push(h) - 1}\u0000`;
    let t = String(s)
      .replace(LINK, (_, label, url) => hold(`<a href="${esc(url)}" target="_blank" rel="noopener">${A.inline(label)}</a>`))
      .replace(/\{\{([^}]+)\}\}/g, (_, r) => hold(A.refBtn(r)));
    t = A.inline(t);
    return t.replace(/\u0000(\d+)\u0000/g, (_, i) => keep[+i]);
  };
  A.inline = s => esc(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*\s][^*]*)\*/g, '<em>$1</em>').replace(/\[obj\.\]/g, '<span class="u">(object marker)</span>').replace(/&lt;([^&]{1,20})&gt;/g, '<span class="u">($1)</span>');
  A.link = (label, url) => url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${A.inline(label)}</a>` : A.inline(label);

  /* ── Blocks ─────────────────────────────────────────────── */
  const KLABEL = { text: 'The text', record: 'Record', sch: 'Scholarship', open: 'Open question' };
  const belLabel = who => /’s$/.test(who) ? `${who} belief` : `${who} belief`;
  A.block = (b, i, list) => {
    // A run of statements of the same kind carries its label once, on the first of the run.
    const prev = list && i > 0 ? list[i - 1] : null;
    const repeat = prev && prev.k === b.k && prev.who === b.who;
    const label = repeat ? '' : b.k === 'bel' ? belLabel(b.who) : KLABEL[b.k];
    const k = label ? `<span class="blk-k">${esc(label)}</span>` : '';
    let body;
    if (b.k === 'quote') body = `<blockquote>“${A.rich(b.q)}”<footer>${A.link(b.cite, b.url)}</footer></blockquote>`;
    else if (b.k === 'table') body = `<div class="tbl-wrap"><table class="tbl"><thead><tr>${b.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${A.rich(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    else if (b.k === 'list') body = `<ul class="list">${b.items.map(i => `<li>${A.rich(i)}</li>`).join('')}</ul>`;
    else body = `<p>${A.rich(b.x)}</p>`;
    return `<div class="blk" data-k="${b.k === 'quote' || b.k === 'table' || b.k === 'list' ? 'p' : b.k}">${k}${body}</div>`;
  };

  /* ── Units, parts and order ─────────────────────────────── */
  const PARTS = A.PARTS = ['Orientation', 'The Book', 'History', 'Christian Belief', 'Comparisons', 'People & Movements', 'Living It'];
  const ORDER = ['welcome', 'library', 'transmission', 'scrolls', 'original', 'words', 'stories', 'atlas', 'jesus', 'time', 'creeds', 'orthodoxy', 'trinity', 'reading', 'arguments', 'miracles', 'hell', 'abrahamic', 'ancient', 'parallels', 'kemet', 'conversation', 'ingersoll', 'critics', 'templars', 'freemasonry', 'rosicrucians', 'mind', 'impact', 'inner', 'virtues', 'sources'];
  const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
  const units = A.units = (window.UNITS || []).slice().sort((a, b) => {
    const ia = ORDER.indexOf(a.id), ib = ORDER.indexOf(b.id);
    return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib) || PARTS.indexOf(a.part) - PARTS.indexOf(b.part);
  });
  const byId = A.byId = Object.fromEntries(units.map((u, i) => [u.id, Object.assign(u, { n: i + 1 })]));
  const partNo = p => ROMAN[PARTS.indexOf(p)] || '';

  /* ── Contents rail ──────────────────────────────────────── */
  const seen = new Set(A.store.get('la3-seen', []));
  function renderToc(current) {
    $('#toc').innerHTML = PARTS.map(p => {
      const list = units.filter(u => u.part === p);
      if (!list.length) return '';
      return `<div class="toc-part"><span class="rn">${partNo(p)}</span>${esc(p)}</div><ol>${list.map(u =>
        `<li><a href="#/${u.id}"${u.id === current ? ' aria-current="page"' : ''}>${esc(u.title)}${seen.has(u.id) ? '<span class="seen" aria-label="read">✓</span>' : ''}</a></li>`).join('')}</ol>`;
    }).join('');
  }
  const rail = $('#rail'), scrim = $('#scrim');
  const closeRail = () => { rail.classList.remove('open'); scrim.hidden = true; $('#toc-btn').setAttribute('aria-expanded', 'false'); };
  $('#toc-btn').addEventListener('click', () => { const o = !rail.classList.contains('open'); rail.classList.toggle('open', o); scrim.hidden = !o; $('#toc-btn').setAttribute('aria-expanded', String(o)); });
  scrim.addEventListener('click', closeRail);
  rail.addEventListener('click', e => { if (e.target.closest('a')) closeRail(); });

  /* ── Search: unit text, Key Words and passages ──────────── */
  const plain = s => String(s || '').replace(/\{\{[^}]+\}\}/g, ' ').replace(LINK, '$1').replace(/\*+/g, '');
  const docs = units.map(u => ({ u, text: [u.title, u.kicker, u.intro, ...u.sections.flatMap(s => [s.h, ...s.blocks.map(b => [b.x, b.q, b.items && b.items.join(' '), b.rows && b.rows.flat().join(' ')].join(' '))])].map(plain).join(' \n ') }));
  function search(q) {
    const box = $('#search-results'), toc = $('#toc');
    q = q.trim();
    if (q.length < 2) { box.innerHTML = ''; box.hidden = true; toc.hidden = false; return; }
    const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    const hits = docs.filter(d => re.test(d.text)).slice(0, 20).map(d => {
      const i = d.text.search(re), a = Math.max(0, i - 50);
      const snip = esc((a ? '…' : '') + d.text.slice(a, i + 90).replace(/\s+/g, ' ')).replace(new RegExp(esc(q).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), m => `<mark>${m}</mark>`);
      return `<a href="#/${d.u.id}?q=${encodeURIComponent(q)}">${esc(d.u.title)}<span class="snip">${snip}…</span></a>`;
    });
    const words = (window.WORDS || []).filter(w => re.test(w.tr) || re.test(w.gloss)).slice(0, 6).map(w => `<a href="#/words?w=${w.id}">${esc(w.tr)} · ${esc(w.gloss)}<span class="snip">Key word, ${w.strong}</span></a>`);
    box.innerHTML = (hits.concat(words).join('') || '<p class="note" style="padding:8px 10px">Nothing found.</p>');
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
        <a class="btn btn-primary" href="#/welcome">Begin: how to use this atlas</a>
        <button type="button" class="btn" data-tour-start><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>Guided tour with voice</button>
        <a class="btn" href="#/original">Read the original languages</a>
      </div>
      <div class="parts">${PARTS.map(p => `<section class="part-card"><h2><span class="rn">${partNo(p)}</span>${esc(p)}</h2><ul>${units.filter(u => u.part === p).map(u => `<li><a href="#/${u.id}">${esc(u.title)}</a><span class="k">${A.inline(u.kicker)}</span></li>`).join('')}</ul></section>`).join('')}</div>
    </div>`;
  }

  function renderUnit(u, params) {
    document.title = `${u.title} · Logos Atlas`;
    const i = units.indexOf(u), prev = units[i - 1], next = units[i + 1];
    const wdiv = (name, where) => name ? `<div class="widget" data-w="${name}" data-where="${where}"></div>` : '';
    main.innerHTML = `<article class="unit" data-unit="${u.id}">
      <header class="unit-head"><p class="eyebrow"><span class="n">${partNo(u.part)}</span>${esc(u.part)} · Unit ${u.n} of ${units.length}</p><h1>${esc(u.title)}</h1><p class="kicker">${A.rich(u.kicker)}</p></header>
      <p class="unit-intro">${A.rich(u.intro)}</p>
      ${wdiv(u.widget, 'unit')}
      ${u.sections.map((s, k) => `<section id="s${k + 1}" data-sec="${k + 1}"><h2 class="sec-h">${esc(s.h)}</h2>${s.blocks.length ? `<div class="blk-wrap">${s.blocks.map(A.block).join('')}</div>` : ''}${wdiv(s.widget, 's' + (k + 1))}</section>`).join('')}
      <footer class="unit-end">
        ${u.questions && u.questions.length ? `<div class="end-box"><h2>Questions for study</h2><ol>${u.questions.map(q => `<li>${A.rich(q)}</li>`).join('')}</ol></div>` : ''}
        ${u.sources && u.sources.length ? `<div class="end-box"><h2>Sources and further reading</h2><ul>${u.sources.map(s => `<li>${A.link(s.t, s.url)}</li>`).join('')}</ul></div>` : ''}
        <nav class="pager" aria-label="Units">${prev ? `<a href="#/${prev.id}"><span class="dir">← Previous</span><span class="t">${esc(prev.title)}</span></a>` : '<span></span>'}${next ? `<a class="next" href="#/${next.id}"><span class="dir">Next →</span><span class="t">${esc(next.title)}</span></a>` : ''}</nav>
      </footer></article>`;
    $$('.widget', main).forEach(el => {
      const f = A.W[el.dataset.w];
      if (!f) { el.innerHTML = `<p class="note">This interactive is not available.</p>`; return; }
      try { f(el, u, params); } catch (err) { console.error(err); el.innerHTML = `<p class="note">This interactive could not be shown.</p>`; }
    });
    seen.add(u.id); A.store.set('la3-seen', [...seen]);
    const q = params.get('q');
    if (q) {
      const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      const hit = $$('.blk p, .blk li, .unit-intro', main).find(n => re.test(n.textContent));
      if (hit) setTimeout(() => { hit.scrollIntoView({ block: 'center' }); hit.classList.add('spotlight'); setTimeout(() => hit.classList.remove('spotlight'), 2500); }, 60);
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

  /* ── Bible dialog ───────────────────────────────────────── */
  const TR = [
    ['Wycliffe', 'Wycliffe Bible', 'c. 1395 · Middle English, translated from the Latin'],
    ['Tyndale', 'Tyndale', '1526–1534 · first English translation from the Greek and Hebrew (New Testament and Pentateuch)'],
    ['Geneva', 'Geneva Bible', '1599 · Protestant exiles’ study Bible'],
    ['KJV', 'King James Version', '1611 · Church of England (1769 text)'],
    ['DRC', 'Douay–Rheims', '1582–1610 · Catholic, from the Vulgate (Challoner revision)'],
    ['YLT', 'Young’s Literal', '1862 · word-for-word'],
    ['ASV', 'American Standard', '1901 · revision of the KJV'],
    ['JPS', 'JPS Tanakh', '1917 · Jewish Publication Society'],
    ['CPDV', 'Catholic Public Domain', '2009 · from the Vulgate'],
    ['BSB', 'Berean Standard Bible', '2023 · modern English'],
    ['Vulgate', 'Clementine Vulgate', '1592 · the Latin Bible of the Western Church'],
    ['ChiUn', 'Chinese Union Version', '1919 · Chinese']
  ];
  A.TR = TR;
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
    const w = e.words[selWord]; if (!w) return '<p class="dlg-note">Tap any word above to see its dictionary entry, how often it occurs and how it is translated.</p>';
    const lx = LEX[w[3]] || {}, st = STATS[w[3]];
    const max = st ? st.top[0][1] : 1;
    const heb = e.lang === 'heb';
    return `<div class="word-panel">
      <div class="hw"><span class="o ${heb ? 'heb' : ''}" lang="${heb ? 'he' : 'grc'}">${esc(lx.w || w[0])}</span><span><b>${esc(lx.tr || '')}</b> · ${esc(lx.gloss || w[2])}</span><span class="dlg-note">Strong’s ${esc(w[3])}</span></div>
      <p>In this verse: <b>${esc(w[0].replace(/[,.;:·]+$/, ''))}</b> (${esc(A.translit(w[1], e.lang))}), “${A.inline(w[2].replace(/[,.;:]+$/, ''))}”</p>
      ${w[4] === 'TR' ? `<p class="dlg-note">This word is in the Textus Receptus, the Greek text behind the King James Version, but not in the modern critical text (Nestle–Aland).</p>` : ''}
      ${w[5] ? `<p class="dlg-note">${variant(w[5], e.lang)}</p>` : ''}
      ${st ? `<p class="dlg-note">Occurs ${st.n.toLocaleString()} times in the ${heb ? 'Hebrew Bible' : 'Greek New Testament'}. Most frequent English glosses (STEP Bible):</p><div class="glossbars">${st.top.map(([g, c]) => `<div class="glossbar"><span>${esc(g)}</span><span class="bar" style="width:${Math.max(2, c / max * 100)}%"></span><span class="c">${c}</span></div>`).join('')}</div>` : ''}
      ${lx.def ? `<details><summary class="dlg-note">Lexicon entry (${heb ? 'Brown–Driver–Briggs, abridged' : 'Abbott-Smith'}, via STEP Bible)</summary><p class="def">${esc(lx.def.slice(0, 900))}${lx.def.length > 900 ? '…' : ''}</p></details>` : ''}
      <div class="linkrow">${A.link('Bible Hub concordance', L.strongs(w[3]))}${A.link('Blue Letter Bible', L.blb(w[3]))}</div>
    </div>`;
  }
  function renderBible() {
    const e = BIBLE[cur]; if (!e) return;
    const [c, v] = firstCV(cur);
    const tabs = [];
    if (e.words.length) tabs.push(['words', e.lang === 'heb' ? 'Hebrew, word by word' : 'Greek, word by word']);
    tabs.push(['tr', 'Translations']);
    tabs.push(['links', 'Check it yourself']);
    if (!tabs.some(t => t[0] === tab)) tab = tabs[0][0];
    $('#bd-tabs').innerHTML = A.chips(tabs, tab);
    const lead = e.tr.BSB || e.tr.KJV || e.tr.DRC || '';
    const leadName = e.tr.BSB ? 'Berean Standard Bible' : e.tr.KJV ? 'King James Version' : 'Douay–Rheims';
    let body = '';
    if (tab === 'words') {
      const heb = e.lang === 'heb';
      body = `<p class="lead">${esc(lead)} <span class="dlg-note">(${leadName})</span></p>
        <div class="inter"${heb ? ' dir="rtl"' : ''}>${e.words.map((w, i) => `<button type="button" class="iw${w[4] === 'TR' ? ' tr' : ''}${i === selWord ? ' sel' : ''}" data-w="${i}" title="Strong’s ${esc(w[3])}"><span class="o${heb ? ' heb' : ''}" lang="${heb ? 'he' : 'grc'}">${esc(w[0])}</span><span class="t">${esc(A.translit(w[1], e.lang))}</span><span class="g">${A.inline(w[2])}</span><span class="s">${esc(w[3] || '')}</span></button>`).join('')}</div>
        <p class="dlg-note">${heb ? 'Hebrew: the Leningrad Codex (1008), read right to left.' : 'Greek: the Nestle–Aland text, with words found only in the Textus Receptus marked TR (dashed).'} Each word shows its transliteration, an English gloss and its Strong’s number. Glosses and numbering from STEP Bible (Tyndale House, Cambridge), CC BY 4.0.${e.words.some(w => w[5]) && !heb ? ' Witnesses: ' + WITNESS : ''}</p>
        <div id="bd-word">${wordPanel(e)}</div>`;
    } else if (tab === 'tr') {
      const have = TR.filter(([k]) => e.tr[k]);
      body = `<div class="tr-list">${have.map(([k, n, d]) => `<div class="tr-row"><div class="nm"><b>${n}</b>${d}</div><div${k === 'Vulgate' ? ' lang="la"' : k === 'ChiUn' ? ' lang="zh"' : ''}>${esc(e.tr[k])}${k === 'Vulgate' && e.tr.DRC ? `<div class="dlg-note">The Douay–Rheims above is an English translation of this Latin.</div>` : ''}</div></div>`).join('')}</div>
        <p class="dlg-note">${/^psalms$/.test(e.slug) ? 'The Latin and Catholic translations number most Psalms one lower (following the Greek), so they are linked rather than shown here. ' : ''}${TR.length - have.length > 1 ? 'Translations that do not include this book or verse are omitted. ' : ''}The JPS 1917 text is shown with its original spelling of the divine names. All translations shown are in the public domain.</p>`;
    } else {
      const slug = e.slug, ot = slug && slug !== '-' && !NT.has(slug);
      const sef = ot ? (SEFARIA[slug] || slug.replace(/(^|_)(\w)/g, (_, a, b) => a + b.toUpperCase())) : null;
      body = `<div class="linkrow" style="flex-direction:column;gap:10px">
        ${L.bh(slug, c, v) ? A.link('Bible Hub: this verse in dozens of translations, with commentaries', L.bh(slug, c, v)) : ''}
        ${L.bhInter(slug, c, v) ? A.link('Bible Hub interlinear: every word with Strong’s numbers and grammar', L.bhInter(slug, c, v)) : ''}
        ${A.link('BibleGateway: compare modern translations', L.bg(e.label, 'NRSVUE;ESV;NIV;NABRE'))}
        ${A.link('STEP Bible: original-language study tools', 'https://www.stepbible.org/?q=reference=' + encodeURIComponent(cur.split('-')[0]))}
        ${sef ? A.link('Sefaria: this chapter with Jewish commentaries', L.sefaria(sef + '.' + c)) : ''}
      </div><p class="dlg-note">Verse numbering occasionally differs between Hebrew, Greek and English Bibles; the external sites note this where it applies.</p>`;
    }
    $('#bd-body').innerHTML = body;
  }
  A.openBible = ref => {
    if (!BIBLE[ref]) return;
    cur = ref; selWord = -1; tab = BIBLE[ref].words.length ? 'words' : 'tr';
    $('#bd-title').textContent = BIBLE[ref].label;
    renderBible();
    if (!dlg.open) dlg.showModal();
    $('#bd-body').scrollTop = 0;
  };
  A.bindChips($('#bd-tabs'), id => { tab = id; renderBible(); });
  $('#bd-body').addEventListener('click', ev => {
    const b = ev.target.closest('[data-w]'); if (!b) return;
    selWord = +b.dataset.w;
    $$('.iw', $('#bd-body')).forEach(x => x.classList.toggle('sel', x === b));
    $('#bd-word').innerHTML = wordPanel(BIBLE[cur]);
  });
  $('#bd-speak').addEventListener('click', () => { const e = BIBLE[cur]; if (e && A.speak) A.speak(`${e.label}. ${e.tr.KJV || e.tr.BSB || e.tr.DRC}`); });

  /* ── Qur'an dialog ──────────────────────────────────────── */
  const qd = $('#quran-dlg');
  A.openQuran = q => {
    const e = QURAN[q]; if (!e) return;
    const [s, v] = q.split(/[:-]/);
    $('#qd-title').textContent = e.label;
    $('#qd-body').innerHTML = `<p class="q-ar" lang="ar">${esc(e.ar)}</p><p class="lead">${esc(e.en)}</p>
      <p class="dlg-note">Arabic: the Uthmani text in the Hafs reading. English: Marmaduke Pickthall, The Meaning of the Glorious Koran (1930), public domain. Muslims regard a translation as an interpretation of the meaning, not as the Qur’an itself, which is the Arabic.</p>
      <div class="linkrow">${A.link('Quran.com: this passage with many translations and word-by-word glosses', L.quran(s, v))}</div>`;
    if (!qd.open) qd.showModal();
  };
  $$('dialog').forEach(d => {
    d.addEventListener('click', e => { if (e.target === d) d.close(); });
    $('.dlg-close', d).addEventListener('click', () => d.close());
  });
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-ref]'); if (b) { e.preventDefault(); A.openBible(b.dataset.ref); return; }
    const q = e.target.closest('[data-q]'); if (q) { e.preventDefault(); A.openQuran(q.dataset.q); }
  });

  /* ── Theme ──────────────────────────────────────────────── */
  const root = document.documentElement;
  const theme = A.store.get('la-theme', null);
  if (theme) root.dataset.theme = theme;
  $('#theme-btn').addEventListener('click', () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    A.store.set('la-theme', root.dataset.theme);
  });

  A.start = () => { route(); };
})();
