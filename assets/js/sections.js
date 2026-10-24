/* Logos Atlas, second edition: renderers for the Library, Gospels in parallel, Doctrine & heresy,
   Reading Scripture, Time & deep time, the Inner Way, symbols, forgeries and the global church. */
(() => {
  'use strict';
  const { $, $$, esc, rich, tag, claims, vchip, kjv, yr, svg, tabs, S, acts } = window.LA;
  const grc = r => (S[r] && S[r].grc) || '';
  const verseBox = (r, extra = '') => `<div class="lex-verse"><div class="lv-r">${vchip(r)}${extra}</div>${esc(kjv(r))}</div>`;

  /* ── Library ─────────────────────────────────────────────── */
  let libCanon = 'pro', libGroup = 'all', libSel = 'Genesis';
  const groupName = Object.fromEntries(BOOK_GROUPS);
  $('#lib-groups').innerHTML = [['all', 'All']].concat(BOOK_GROUPS).map(([k, l]) => `<button type="button" class="chip" data-g="${k}" aria-pressed="${k === 'all'}">${esc(l)}</button>`).join('');
  function renderShelf() {
    const q = $('#lib-q').value.trim().toLowerCase();
    const list = BOOKS.filter(b => (libCanon === 'cat' || b.g !== 'deutero') && (libGroup === 'all' || b.g === libGroup) &&
      (!q || [b.name, b.trad, b.crit, b.theme, b.date].join(' ').toLowerCase().includes(q)));
    const total = BOOKS.filter(b => libCanon === 'cat' || b.g !== 'deutero').reduce((n, b) => n + (b.g === 'deutero' ? 1 : b.n), 0);
    $('#lib-shelf').innerHTML = `<p class="ui small muted lib-count">${list.length} of ${BOOKS.filter(b => libCanon === 'cat' || b.g !== 'deutero').length} entries · ${total} books in this canon (some entries group several books)</p>` +
      BOOK_GROUPS.filter(([g]) => list.some(b => b.g === g)).map(([g, l]) => `<div class="shelf-row"><h4 class="eyebrow">${esc(l)}</h4><div class="spines">${
        list.filter(b => b.g === g).map(b => `<button type="button" class="spine g-${g}" data-book="${esc(b.name)}" aria-pressed="${b.name === libSel}"><span class="sp-n">${esc(b.name)}</span>${b.n > 1 ? `<span class="sp-c">${b.n} books</span>` : ''}</button>`).join('')}</div></div>`).join('') ||
      `<p class="muted">No book matches “${esc(q)}”.</p>`;
  }
  function selectBook(name) {
    const b = BOOKS.find(x => x.name === name); if (!b) return; libSel = name;
    $$('.spine').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.book === name)));
    $('#lib-detail').innerHTML = `<p class="eyebrow">${esc(groupName[b.g])}${b.g === 'deutero' ? ' · Catholic and Orthodox canon' : ''}</p><h3>${esc(b.name)}</h3>
      <dl class="lib-dl">
        <div class="lex-row"><dt>Tradition</dt><dd>${esc(b.trad)} ${tag('T')}</dd></div>
        <div class="lex-row"><dt>Scholarship</dt><dd>${rich(b.crit)} ${tag(b.ct)}</dd></div>
        <div class="lex-row"><dt>Date</dt><dd>${esc(b.date)}</dd></div>
        <div class="lex-row"><dt>About</dt><dd>${rich(b.theme)}</dd></div></dl>
      ${verseBox(b.key)}`;
  }
  $('#lib-q').addEventListener('input', renderShelf);
  $('#lib-canon').addEventListener('click', e => { const c = e.target.closest('[data-canon]'); if (!c) return; libCanon = c.dataset.canon; $$('#lib-canon .chip').forEach(x => x.setAttribute('aria-pressed', String(x === c))); renderShelf(); });
  $('#lib-groups').addEventListener('click', e => { const c = e.target.closest('[data-g]'); if (!c) return; libGroup = c.dataset.g; $$('#lib-groups .chip').forEach(x => x.setAttribute('aria-pressed', String(x === c))); if (libGroup === 'deutero' && libCanon === 'pro') { libCanon = 'cat'; $$('#lib-canon .chip').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.canon === 'cat'))); } renderShelf(); });
  $('#lib-shelf').addEventListener('click', e => { const b = e.target.closest('[data-book]'); if (b) selectBook(b.dataset.book); });
  renderShelf(); selectBook(libSel);
  acts.book = v => selectBook(v);

  /* ── Gospels in parallel ─────────────────────────────────── */
  let synId = SYNOPTIC[0].id;
  function renderSyn(id) {
    synId = id; const p = SYNOPTIC.find(x => x.id === id); const showG = $('#syn-greek').checked;
    $('#syn-cols').innerHTML = p.refs.map(r => { const g = r.split('.')[0]; return `<div class="syn-col g-${g}"><p class="syn-book">${esc({ Matt: 'Matthew', Mark: 'Mark', Luke: 'Luke', John: 'John' }[g])}</p><p class="ui small">${vchip(r)}</p><p>${esc(kjv(r))}</p>${showG && grc(r) ? `<p class="grc-line small" lang="grc">${esc(grc(r))}</p>` : ''}</div>`; }).join('');
    $('#syn-notes').innerHTML = claims(p.notes);
  }
  const selectSyn = tabs($('#syn-tabs'), SYNOPTIC.map(s => [s.id, esc(s.n)]), renderSyn, synId);
  $('#syn-greek').addEventListener('change', () => renderSyn(synId));
  $('#syn-theories').innerHTML = claims(SYNOPTIC_THEORIES);
  acts.syn = v => selectSyn(v);

  /* ── Doctrine ────────────────────────────────────────────── */
  const docOn = new Set(['cat', 'ort', 'luth', 'bap']);
  $('#doc-pick').innerHTML = CHURCHES.map(([k, n]) => `<button type="button" class="chip" data-c="${k}" aria-pressed="${docOn.has(k)}">${esc(n)}</button>`).join('') + '<button type="button" class="chip" data-c="all" aria-pressed="false">All nine</button>';
  function renderDoc() {
    const cols = CHURCHES.filter(([k]) => docOn.has(k));
    $('#doc-table').style.minWidth = `${Math.max(640, 180 + cols.length * 190)}px`;
    $('#doc-table').innerHTML = `<thead><tr><th>Question</th>${cols.map(([, n]) => `<th>${esc(n)}</th>`).join('')}</tr></thead><tbody>${
      DOCTRINES.map(d => `<tr><th scope="row"><span class="dk">${esc(d.k)}</span><span class="dq">${esc(d.q)}</span></th>${cols.map(([k]) => `<td>${rich(d.v[k])}</td>`).join('')}</tr>`).join('')}</tbody>`;
  }
  $('#doc-pick').addEventListener('click', e => {
    const c = e.target.closest('[data-c]'); if (!c) return;
    if (c.dataset.c === 'all') CHURCHES.forEach(([k]) => docOn.add(k));
    else if (docOn.has(c.dataset.c)) { if (docOn.size > 1) docOn.delete(c.dataset.c); } else docOn.add(c.dataset.c);
    $$('#doc-pick .chip').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.c === 'all' ? docOn.size === CHURCHES.length : docOn.has(x.dataset.c))));
    renderDoc();
  });
  renderDoc();
  $('#creeds').innerHTML = CREEDS.map(c => `<li><span class="yr">${yr(c.y)}</span>${tag(c.t)} <strong>${esc(c.n)}.</strong> ${rich(c.x)}</li>`).join('');
  // Spectra
  (function spectra() {
    const host = $('#spectra');
    Object.entries(HERESY_SPECTRA).forEach(([key, sp]) => {
      const wrap = document.createElement('div'); wrap.className = 'spectrum';
      wrap.innerHTML = `<p class="sp-q">${esc(sp.label)}</p>`;
      const el = svg('svg', { viewBox: '0 0 760 120', class: 'sp-svg', role: 'img', 'aria-label': `${sp.label}: ${sp.left} to ${sp.right}` });
      const X = p => 70 + (p + 2) / 4 * 620;
      svg('line', { x1: 70, x2: 690, y1: 60, y2: 60, class: 'sp-axis' }, el);
      svg('rect', { x: X(-0.18), y: 48, width: X(0.18) - X(-0.18), height: 24, rx: 12, class: 'sp-ortho' }, el);
      [[sp.left, 70, 'start'], [sp.right, 690, 'end']].forEach(([t, x, a]) => { const n = svg('text', { x, y: 112, class: 'sp-end', 'text-anchor': a }, el); n.textContent = t; });
      sp.items.slice().sort((a, b) => a.pos - b.pos).forEach((it, i) => {
        const g = svg('g', { class: 'sp-pt', tabindex: 0, role: 'button', 'aria-label': it.n }, el);
        svg('circle', { cx: X(it.pos), cy: 60, r: it.pos === 0 ? 9 : 7, class: it.pos === 0 ? 'sp-dot o' : 'sp-dot' }, g);
        const t = svg('text', { x: X(it.pos), y: i % 2 ? 90 : 38, 'text-anchor': 'middle', class: 'sp-lbl' }, g); t.textContent = it.n;
        const show = () => { $$('.sp-pt').forEach(x => x.classList.remove('sel')); g.classList.add('sel'); $('#heresy-detail').innerHTML = `<p class="eyebrow">${esc(sp.label)} · ${yr(it.y)}</p><h3 style="font-size:var(--s-4)">${esc(it.n)} ${tag(it.t)}</h3><p>${rich(it.x)}</p><p class="small"><strong class="ui">Answer:</strong> ${rich(it.a)}</p>`; };
        g.addEventListener('click', show); g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(); } });
        if (key === 'god' && it.n === 'Arianism') show();
      });
      wrap.appendChild(el); host.appendChild(wrap);
    });
  })();
  $('#heresies-other').innerHTML = HERESIES_OTHER.map(h => `<div class="card"><h3>${esc(h.n)} <span class="ui small muted">${yr(h.y)}</span></h3><p>${tag(h.t)} ${rich(h.x)}</p><p class="small"><strong class="ui">Answer:</strong> ${rich(h.a)}</p></div>`).join('');
  $('#heresy-note').innerHTML = `${tag(HERESY_NOTE[0])} ${rich(HERESY_NOTE[1])}`;

  /* ── Reading Scripture ───────────────────────────────────── */
  let senseEx = 'jer';
  function renderSenses() {
    $('#senses').innerHTML = `<div class="sense-grid">${SENSES.christian.map((c, i) => `<div class="sense"><span class="sense-n">${['I', 'II', 'III', 'IV'][i]}</span><h4>${esc(c.k)}</h4><p class="small muted">${esc(c.q)}</p><p>${esc(c[senseEx])}</p><p class="pardes ui small"><strong>${esc(SENSES.jewish[i].k)}</strong> · ${esc(SENSES.jewish[i].x)}</p></div>`).join('')}</div>`;
  }
  $('#sense-ex').addEventListener('click', e => { const c = e.target.closest('[data-ex]'); if (!c) return; senseEx = c.dataset.ex; $$('#sense-ex .chip').forEach(x => x.setAttribute('aria-selected', String(x === c))); renderSenses(); });
  renderSenses();
  $('#sense-notes').innerHTML = claims(SENSES.notes);
  $('#sense-rules').innerHTML = claims(SENSES.rules);
  $('#sense-modern').innerHTML = SENSES.modern.map(m => `<div class="mod"><strong>${esc(m.n)}</strong><p class="small">${esc(m.q)}</p><p class="small"><span class="ok">Strength:</span> ${esc(m.s)} <span class="warn">Blind spot:</span> ${esc(m.b)}</p></div>`).join('');
  const pair = list => list.map(t => `<div class="typo-card"><h4>${esc(t.n)} ${tag(t.t)}</h4><div class="typo-pair"><div>${verseBox(t.ot)}</div><span class="typo-arrow" aria-hidden="true">→</span><div>${verseBox(t.nt)}</div></div><p class="small">${rich(t.x)}</p></div>`).join('');
  $('#typology').innerHTML = pair(TYPOLOGY);
  $('#ntuse').innerHTML = pair(NT_USE);
  $('#ntuse-note').innerHTML = `${tag(NT_USE_NOTE[0])} ${rich(NT_USE_NOTE[1])}`;
  $('#messianic').innerHTML = `<thead><tr><th>Text</th><th>Jewish reading</th><th>Christian reading</th><th>Status</th></tr></thead><tbody>${MESSIANIC.map(m => `<tr><td><strong>${esc(m.n)}</strong><br>${vchip(m.ref)}<br><span class="small">${esc(kjv(m.ref))}</span></td><td>${rich(m.jew)}</td><td>${rich(m.chr)}</td><td>${tag(m.t)}</td></tr>`).join('')}</tbody>`;

  /* ── Time ────────────────────────────────────────────────── */
  $('#time-day').innerHTML = TIME_DAY.map(b => `<div class="card"><h3>${esc(b.k)}</h3><ul class="claims">${claims(b.items)}</ul></div>`).join('');
  $('#time-layers').innerHTML = claims(TIME_LAYERS);
  $('#time-methods').innerHTML = TIME_METHODS.map(m => `<li><details><summary><span class="cy">${tag(m.t)}</span><span><span class="cn">${esc(m.n)}</span> <span class="cw">${esc(m.range)} · ${esc(m.prec)}</span></span></summary><div class="cbody"><p>${rich(m.x)}</p></div></details></li>`).join('');
  $('#readings').innerHTML = CREATION_READINGS.map(r => `<div class="card"><h3>${esc(r.n)}</h3><p class="small muted">${esc(r.who)}</p><p><span class="ok ui small">The case</span> ${rich(r.pro)}</p><p><span class="warn ui small">The difficulty</span> ${rich(r.con)}</p><p>${tag(r.t)}</p></div>`).join('');
  $('#reading-notes').innerHTML = claims(CREATION_NOTES);
  $('#rhythms').innerHTML = RHYTHMS.map(r => `<div class="card"><h3>${esc(r.n)}</h3>${verseBox(r.v)}<p class="small">${rich(r.x)}</p><p class="practice-line"><span class="ui small eyebrow">Practice</span> ${rich(r.practice)}</p><p class="small">${tag(r.evidence[0])} ${rich(r.evidence[1])}</p></div>`).join('');

  // Deep-time chart: logarithmic, one lane per category, every event labelled.
  (function deepTime() {
    const el = $('#deep'), tip = $('#deep-tip'), wrap = $('#deep-wrap');
    const cats = Object.keys(DEEP_CATS);
    $('#deep-legend').innerHTML = cats.map((c, i) => `<span><i class="sw s${i + 1}"></i>${esc(DEEP_CATS[c])}</span>`).join('');
    const W = 1240, L = 24, R = 24, top = 34, ROW = 16;
    const lmin = 1, lmax = Math.log10(1.6e10);
    const X = ya => L + (lmax - Math.log10(ya)) / (lmax - lmin) * (W - L - R);
    // Lay out labels per lane first: alternate above/below, stepping outward until a row is free.
    const lanes = cats.map(c => {
      const items = DEEP_TIME.filter(d => d.cat === c).sort((a, b) => b.ya - a.ya);
      const rows = {}; let up = 0, down = 0;
      const placed = items.map(d => {
        const x = X(d.ya), w = d.n.length * 6.3 + 12;
        for (let k = 0; ; k++) {
          const slot = k % 2 ? Math.ceil(k / 2) : -(k / 2 + 1); // -1, 1, -2, 2, ...
          const ends = rows[slot] || (rows[slot] = []);
          if (ends.every(([a, b]) => x + w / 2 < a - 4 || x - w / 2 > b + 4)) { ends.push([x - w / 2, x + w / 2]); up = Math.max(up, -Math.min(slot, 0)); down = Math.max(down, Math.max(slot, 0)); return { d, x, slot }; }
        }
      });
      return { c, placed, up, down };
    });
    let y = top + 6;
    lanes.forEach(l => { l.cy = y + l.up * ROW + 10; y = l.cy + l.down * ROW + 22; });
    const H = y + 4;
    el.setAttribute('viewBox', `0 0 ${W} ${H}`); el.setAttribute('width', W); el.setAttribute('height', H);
    const ax = svg('g', { class: 'axis' }, el);
    const tickLbl = { 10: '10 bn', 9: '1 bn', 8: '100 m', 7: '10 m', 6: '1 m', 5: '100,000', 4: '10,000', 3: '1,000', 2: '100', 1: '10 years ago' };
    for (let p = 10; p >= 1; p--) {
      svg('line', { x1: X(10 ** p), x2: X(10 ** p), y1: top - 6, y2: H - 6, class: 'deep-grid' }, ax);
      const t = svg('text', { x: X(10 ** p), y: top - 14, 'text-anchor': p === 1 ? 'end' : 'middle' }, ax); t.textContent = tickLbl[p];
    }
    const fmt = ya => ya >= 1e9 ? `${+(ya / 1e9).toFixed(2)} billion years ago` : ya >= 1e6 ? `${+(ya / 1e6).toFixed(1)} million years ago` : `${Math.round(ya).toLocaleString('en')} years ago`;
    lanes.forEach((lane, li) => {
      const cy = lane.cy;
      svg('line', { x1: L, x2: W - R, y1: cy, y2: cy, class: 'deep-lane' }, el);
      lane.placed.forEach(({ d, x, slot }) => {
        const ly = slot < 0 ? cy - 8 - (-slot - 1) * ROW : cy + 18 + (slot - 1) * ROW;
        const g = svg('g', { class: 'deep-pt', tabindex: 0, role: 'button', 'aria-label': `${d.n}, ${fmt(d.ya)}` }, el);
        if (Math.abs(slot) > 1) svg('line', { x1: x, x2: x, y1: cy, y2: slot < 0 ? ly + 3 : ly - 11, class: 'deep-tick' }, g);
        svg('circle', { cx: x, cy, r: 12, class: 'deep-hit' }, g);
        svg('circle', { cx: x, cy, r: 5, class: `deep-dot s${li + 1}` }, g);
        const t = svg('text', { x, y: ly, 'text-anchor': 'middle', class: 'deep-lbl' }, g); t.textContent = d.n;
        const show = () => {
          tip.hidden = false;
          tip.innerHTML = `<strong>${esc(d.n)}</strong><br>${fmt(d.ya)} ${tag(d.t)}<br><span class="muted">How we know:</span> ${esc(d.how)}<br><span class="muted">When we found out:</span> ${esc(d.found)}`;
          const wr = wrap.getBoundingClientRect(), pr = g.getBoundingClientRect();
          const left = Math.min(Math.max(pr.left - wr.left + pr.width / 2 - 140, 0), wr.width - 290);
          tip.style.left = `${left}px`; tip.style.top = `${pr.bottom - wr.top + 8}px`;
        };
        g.addEventListener('pointerenter', show); g.addEventListener('focus', show); g.addEventListener('click', show);
        g.addEventListener('pointerleave', () => { tip.hidden = true; }); g.addEventListener('blur', () => { tip.hidden = true; });
      });
    });
    $('#deep-note').innerHTML = `${tag(DEEP_NOTE[0])} ${rich(DEEP_NOTE[1])}`;
    $('#deep-table').innerHTML = `<thead><tr><th>Event</th><th>When</th><th>How we know</th><th>When we found out</th><th>Status</th></tr></thead><tbody>${DEEP_TIME.slice().sort((a, b) => b.ya - a.ya).map(d => `<tr><td>${esc(d.n)}<br><span class="small muted">${esc(DEEP_CATS[d.cat])}</span></td><td>${fmt(d.ya)}</td><td>${esc(d.how)}</td><td>${esc(d.found)}</td><td>${tag(d.t)}</td></tr>`).join('')}</tbody>`;
  })();

  // Liturgical wheel
  (function wheel() {
    const el = $('#year-wheel'), Y = LITURGICAL_YEAR;
    const start = new Date(Y.seasons[0].from + 'T00:00:00'), end = new Date('2026-11-29T00:00:00');
    const span = end - start, CX = 210, CY = 210, R1 = 190, R0 = 118;
    const ang = d => ((d - start) / span) * Math.PI * 2 - Math.PI / 2;
    const pt = (a, r) => [CX + Math.cos(a) * r, CY + Math.sin(a) * r];
    const fill = { violet: 'var(--murex)', white: 'var(--gold-leaf)', green: 'var(--verdigris)', red: 'var(--vermilion)' };
    const segs = Y.seasons.map(s => {
      const a0 = ang(new Date(s.from + 'T00:00:00')), a1 = ang(new Date(new Date(s.to + 'T00:00:00').getTime() + 864e5));
      const large = a1 - a0 > Math.PI ? 1 : 0;
      const [x0, y0] = pt(a0, R1), [x1, y1] = pt(a1, R1), [x2, y2] = pt(a1, R0), [x3, y3] = pt(a0, R0);
      const g = svg('g', { class: 'yr-seg', tabindex: 0, role: 'button', 'aria-label': s.n }, el);
      const p = svg('path', { d: `M${x0},${y0} A${R1},${R1} 0 ${large} 1 ${x1},${y1} L${x2},${y2} A${R0},${R0} 0 ${large} 0 ${x3},${y3} Z`, class: 'yr-arc' }, g);
      p.style.fill = fill[s.c];
      const mid = (a0 + a1) / 2, [lx, ly] = pt(mid, (R1 + R0) / 2);
      if (a1 - a0 > 0.28) { const t = svg('text', { x: lx, y: ly + 4, 'text-anchor': 'middle', class: 'yr-lbl' }, g); t.textContent = s.n; }
      const show = () => { $$('.yr-seg').forEach(x => x.classList.remove('sel')); g.classList.add('sel'); $('#year-detail').innerHTML = `<p class="eyebrow">${esc(Y.label)}</p><h3 style="font-size:var(--s-4)">${esc(s.n)}</h3><p class="ui small muted">${new Date(s.from + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })} – ${new Date(s.to + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} · liturgical colour ${s.c}</p><p>${rich(s.x)}</p>`; };
      g.addEventListener('click', show); g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(); } });
      return { s, show };
    });
    const now = new Date(); let cur = segs.find(x => now >= new Date(x.s.from + 'T00:00:00') && now < new Date(new Date(x.s.to + 'T00:00:00').getTime() + 864e5));
    const c = svg('text', { x: CX, y: CY - 4, 'text-anchor': 'middle', class: 'yr-center' }, el); c.textContent = 'The Christian year';
    const c2 = svg('text', { x: CX, y: CY + 18, 'text-anchor': 'middle', class: 'yr-center-sub' }, el);
    if (now >= start && now < end) {
      const [mx, my] = pt(ang(now), R1 + 8), [nx, ny] = pt(ang(now), R0 - 8);
      svg('line', { x1: mx, y1: my, x2: nx, y2: ny, class: 'yr-now' }, el);
      c2.textContent = `Today: ${cur ? cur.s.n : ''}`;
    } else c2.textContent = 'Advent 2025 to Advent 2026';
    (cur || segs[0]).show();
    $('#year-facts').innerHTML = claims(Y.facts);
  })();

  /* ── Inner Way ───────────────────────────────────────────── */
  $('#stages').innerHTML = INNER.stages.map((s, i) => `<div class="card stage"><span class="exn">${['I', 'II', 'III'][i]}</span><h3>${esc(s.n)}</h3><p>${esc(s.x)}</p>${verseBox(s.v)}<p class="small muted">${tag('S')} ${esc(s.art)}</p></div>`).join('');
  $('#stages-note').innerHTML = `${tag(INNER.stagesNote[0])} ${rich(INNER.stagesNote[1])}`;
  $('#practices').innerHTML = INNER.practices.map(p => `<div class="card"><h3>${esc(p.n)}</h3><p class="small muted">${esc(p.src)} ${tag(p.t)}</p><p>${rich(p.x)}</p></div>`).join('');
  $('#masters').innerHTML = INNER.masters.slice().sort((a, b) => a.y - b.y).map(m => `<li><span class="yr">${yr(m.y)}</span>${tag(m.t)} <strong>${esc(m.n)}.</strong> ${rich(m.x)}</li>`).join('');
  $('#union').innerHTML = `<thead><tr><th>Tradition</th><th>Term</th><th>Teaching</th><th>Status</th></tr></thead><tbody>${INNER.compare.map(c => `<tr><td>${esc(c.trad)}</td><td>${esc(c.term)}</td><td>${rich(c.x)}</td><td>${tag(c.t)}</td></tr>`).join('')}</tbody>`;
  $('#union-note').innerHTML = `${tag(INNER.compareNote[0])} ${rich(INNER.compareNote[1])}`;
  $('#experience').innerHTML = claims(INNER.experience);
  $('#discern').innerHTML = INNER.discern.map((d, i) => `<div class="card"><h3><span class="dn">${i + 1}</span> ${esc(d.n)}</h3><p>${rich(d.x)}</p>${verseBox(d.v)}</div>`).join('');
  $('#integrate').innerHTML = INNER.integrate.map(x => `<li>${esc(x)}</li>`).join('');

  /* ── Symbols, forgeries, global church ───────────────────── */
  $('#symbols').innerHTML = SYMBOLS.map(s => `<div class="sym"><div class="sym-g" aria-hidden="true">${esc(s.g)}</div><div><h4>${esc(s.n)} ${tag(s.t)}</h4><p class="small">${rich(s.x)}</p></div></div>`).join('');
  $('#frauds').innerHTML = FRAUDS.map(f => `<li>${tag(f.t)}<span><strong>${esc(f.n)}.</strong> ${rich(f.x)}</span></li>`).join('');
  $('#global').innerHTML = GLOBAL.tiles.map(t => `<div class="stat"><div class="big">${esc(t.n)}</div><div class="lbl">${esc(t.l)}</div></div>`).join('');
  $('#global-note').innerHTML = `${tag(GLOBAL.note[0])} ${rich(GLOBAL.note[1])}`;
})();
