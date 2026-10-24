/* Logos Atlas — rendering and interaction. No dependencies. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const SVGNS = 'http://www.w3.org/2000/svg';
  const S = window.SCRIPTURE || {};

  const TAGS = {
    F: ['Fact', 'Documented fact: attested by primary sources, artefacts or the text itself'],
    C: ['Consensus', 'Scholarly consensus: the view of most specialists, though not proven beyond dispute'],
    D: ['Debated', 'Debated: serious scholars disagree'],
    T: ['Tradition', 'Tradition or legend: handed down, not independently verified'],
    S: ['Synthesis', 'Interpretive synthesis: a reasoned reading or argument offered for your judgement'],
    B: ['Faith', 'Confession of faith: what the Church believes, beyond historical proof']
  };
  const HUE = { gold: 'var(--gold)', lapis: 'var(--lapis)', vermilion: 'var(--vermilion)', verdigris: 'var(--verdigris)', ochre: 'var(--ochre)', murex: 'var(--murex)' };
  const LEX_BY_S = {};
  LEXICON.forEach(l => l.s.split('/').forEach(k => { LEX_BY_S[k.trim()] = l; }));
  const VERSIONS = [['KJV', 'King James'], ['YLT', 'Young’s Literal'], ['DRC', 'Douay–Rheims'], ['ASV', 'ASV 1901'], ['VulgClementine', 'Vulgate']];

  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const refLabel = r => (S[r] && S[r].label) || r;
  const vchip = r => `<button type="button" class="vref" data-ref="${esc(r)}">${esc(refLabel(r))}</button>`;
  const rich = s => esc(s).replace(/\{\{([\w.\-]+)\}\}/g, (_, r) => vchip(r));
  const tag = t => `<span class="tag tag-${t}" title="${esc(TAGS[t][1])}">${TAGS[t][0]}</span>`;
  const claims = list => list.map(([t, x]) => `<li>${tag(t)}<span>${rich(x)}</span></li>`).join('');
  const yr = y => y < 0 ? `${-y} BC` : (y < 1000 ? `AD ${y}` : `${y}`);
  const kjv = r => { const e = S[r]; return e ? (e.KJV || e.DRC || '') : ''; };
  const svg = (name, attrs = {}, parent) => {
    const n = document.createElementNS(SVGNS, name);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  };
  function tabs(container, items, onSelect, initial, role = 'tab') {
    container.innerHTML = items.map(([id, label, extra]) =>
      `<button type="button" class="chip" role="${role}" data-id="${esc(id)}" aria-selected="false" ${extra || ''}>${label}</button>`).join('');
    const select = id => {
      $$('.chip', container).forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === id)));
      onSelect(id);
    };
    container.addEventListener('click', e => { const b = e.target.closest('.chip'); if (b) select(b.dataset.id); });
    select(initial);
    return select;
  }

  /* ── Legend, folio index, theme ─────────────────────────── */
  const SHORT = { F: 'primary sources or artefacts', C: 'most specialists agree', D: 'serious scholars disagree', T: 'handed down, unverified', S: 'a reasoned reading', B: 'what the Church confesses' };
  $('#legend').insertAdjacentHTML('beforeend', Object.keys(TAGS).map(t => `<div>${tag(t)}<span>${SHORT[t]}</span></div>`).join(''));
  const folios = $$('section.folio');
  $('#folio-list').innerHTML = folios.map(f => `<li><a href="#${f.id}" data-for="${f.id}"><span class="num">${f.dataset.num}</span><span>${esc(f.dataset.title)}</span></a></li>`).join('');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        $$('#folio-list a').forEach(a => a.setAttribute('aria-current', String(a.dataset.for === en.target.id)));
        const cur = $(`#folio-list a[data-for="${en.target.id}"]`);
        if (cur && window.matchMedia('(max-width: 960px)').matches) cur.scrollIntoView({ block: 'nearest', inline: 'center' });
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    folios.forEach(f => io.observe(f));
  }
  const root = document.documentElement;
  const savedTheme = store.get('la-theme', null);
  if (savedTheme) root.dataset.theme = savedTheme;
  $('#theme-toggle').addEventListener('click', () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    store.set('la-theme', root.dataset.theme);
  });

  /* ── Hero texts ─────────────────────────────────────────── */
  if (S['Gen.1.1'] && S['Gen.1.1'].heb) $('#hero-heb').textContent = S['Gen.1.1'].heb.map(w => w[0]).join(' ');
  if (S['John.1.1']) { $('#hero-grc').textContent = S['John.1.1'].grc; $('#hero-lat').textContent = S['John.1.1'].VulgClementine; }

  /* ── Verse dialog ───────────────────────────────────────── */
  const dlg = $('#verse-dlg');
  let dlgRef = null, dlgTab = 'KJV';
  function hebLine(words, hits = new Set()) {
    return `<div class="heb-line" lang="he">${words.map(([w, n]) => {
      const lx = n && LEX_BY_S['H' + n];
      return `<button type="button" class="word${hits.has(n) ? ' hit' : ''}" data-strong="${n || ''}" ${lx ? `data-lex="${lx.id}"` : ''} title="${n ? 'Strong’s H' + n + (lx ? ' · ' + esc(lx.gloss) : '') : ''}"><span class="w">${esc(w)}</span><span class="n">${n ? 'H' + n : '·'}</span></button>`;
    }).join('')}</div>`;
  }
  function renderDlg() {
    const e = S[dlgRef]; if (!e) return;
    const avail = VERSIONS.filter(([k]) => e[k]);
    const orig = e.heb ? 'Hebrew' : e.grc ? 'Greek' : null;
    const all = avail.map(([k, l]) => [k, l]).concat(orig ? [['orig', orig]] : []);
    if (!all.some(([k]) => k === dlgTab)) dlgTab = all[0][0];
    $('#vd-tabs').innerHTML = all.map(([k, l]) => `<button type="button" class="chip" role="tab" data-k="${k}" aria-selected="${k === dlgTab}">${l}</button>`).join('');
    let body;
    if (dlgTab === 'orig') {
      body = e.heb
        ? `<div class="original">${hebLine(e.heb)}<p class="orig-note">Westminster Leningrad Codex. Each word shows its Strong’s number. Words with a concordance entry open it.</p></div>`
        : `<div class="original"><p class="grc-line" lang="grc">${esc(e.grc)}</p><p class="orig-note">SBL Greek New Testament. ⟦ ⟧ marks text the editors judge a later addition.</p></div>`;
    } else {
      body = `<p class="vd-text${dlgTab === 'VulgClementine' ? ' lat' : ''}"${dlgTab === 'VulgClementine' ? ' lang="la"' : ''}>${esc(e[dlgTab])}</p>`;
      const missing = VERSIONS.filter(([k]) => !e[k]).map(([, l]) => l);
      if (missing.length && missing.length < VERSIONS.length) body += `<p class="vd-note">Not in this passage’s source for: ${missing.join(', ')}${/^(Tob|Wis|Sir|1Macc|2Macc)\./.test(dlgRef) ? ' (Protestant editions omit the deuterocanon)' : ''}.</p>`;
      if (dlgTab === 'KJV') body += `<p class="vd-note">KJV 1769 Oxford text. Printed Bibles show the divine name as LORD in small capitals; this digital source does not.</p>`;
    }
    $('#vd-body').innerHTML = body;
  }
  function openVerse(ref) {
    if (!S[ref]) return;
    dlgRef = ref; $('#vd-title').textContent = S[ref].label; renderDlg();
    if (typeof dlg.showModal === 'function') { if (!dlg.open) dlg.showModal(); } else dlg.setAttribute('open', '');
  }
  $('#vd-tabs').addEventListener('click', e => { const b = e.target.closest('[data-k]'); if (b) { dlgTab = b.dataset.k; renderDlg(); } });
  $('#vd-close').addEventListener('click', () => dlg.close ? dlg.close() : dlg.removeAttribute('open'));
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  $('#vd-body').addEventListener('click', e => {
    const w = e.target.closest('[data-lex]'); if (!w) return;
    dlg.close(); selectLex(w.dataset.lex); $('#concordance').scrollIntoView();
  });
  $('#vd-speak').addEventListener('click', () => {
    const e = S[dlgRef]; if (!e) return;
    const text = dlgTab === 'orig' ? null : e[dlgTab];
    if (text) speakOnce(`${e.label}. ${text}`, dlgTab === 'VulgClementine' ? 'la' : 'en');
  });
  document.addEventListener('click', e => { const b = e.target.closest('.vref'); if (b) { e.preventDefault(); openVerse(b.dataset.ref); } });

  /* ── Atlas ──────────────────────────────────────────────── */
  const C38 = Math.cos(38 * Math.PI / 180);
  const proj = (lon, lat) => [(lon + 12) * 10 * C38, (62 - lat) * 10];
  const mapSvg = $('#map'), mapWrap = $('#map-wrap');
  const G = window.GEO;
  const HOME = { x: 8, y: 92, w: 500, h: 300 };
  let vb = { ...HOME };
  const layerOn = Object.fromEntries(Object.keys(LAYERS).map(k => [k, true]));
  let year = 2025, selPlace = null, hoverPlace = null, showJourneys = false;
  const MAJOR = new Set(['jerusalem', 'rome', 'athens', 'alexandria', 'constantinople', 'antioch', 'babylon', 'wittenberg', 'paris', 'london', 'ephesus', 'varanasi', 'qufu']);

  const gView = svg('g', {}, mapSvg);
  svg('rect', { x: -400, y: -400, width: G.w + 800, height: G.h + 800, class: 'map-sea' }, gView);
  const grat = svg('g', {}, gView);
  for (let lon = -10; lon <= 120; lon += 10) { const [x] = proj(lon, 0); svg('line', { x1: x, x2: x, y1: 0, y2: G.h, class: 'map-grat' }, grat); }
  for (let lat = 10; lat <= 60; lat += 10) { const [, y] = proj(0, lat); svg('line', { x1: 0, x2: G.w, y1: y, y2: y, class: 'map-grat' }, grat); }
  svg('path', { d: G.land, class: 'map-land' }, gView);
  svg('path', { d: G.lakes, class: 'map-lake' }, gView);
  Object.values(G.rivers).forEach(d => svg('path', { d, class: 'map-river' }, gView));
  const seaLabels = [['Mediterranean Sea', 18, 34.6], ['Black Sea', 34, 43.3], ['Red Sea', 38.2, 20.5], ['Persian Gulf', 51.5, 27.2], ['Arabian Sea', 63, 15], ['Caspian', 50.6, 41.8], ['Atlantic', -9, 44], ['Bay of Bengal', 88, 15]];
  const seaG = svg('g', {}, gView);
  seaLabels.forEach(([t, lon, lat]) => { const [x, y] = proj(lon, lat); const n = svg('text', { x, y, class: 'map-sea-label', 'text-anchor': 'middle' }, seaG); n.textContent = t; });
  const jG = svg('g', {}, gView);
  const jColors = ['var(--vermilion)', 'var(--lapis)', 'var(--verdigris)', 'var(--murex)'];
  JOURNEYS.forEach((j, i) => {
    const d = j.pts.map(([lon, lat], k) => { const [x, y] = proj(lon, lat); return (k ? 'L' : 'M') + x.toFixed(1) + ',' + y.toFixed(1); }).join('');
    const p = svg('path', { d, class: 'journey', stroke: jColors[i] }, jG);
    svg('title', {}, p).textContent = j.name;
  });
  const mG = svg('g', {}, gView);
  const markers = PLACES.map(p => {
    const [x, y] = proj(p.lon, p.lat);
    const g = svg('g', { class: 'marker', tabindex: 0, role: 'button', 'aria-label': p.name }, mG);
    const halo = svg('circle', { cx: x, cy: y, r: 6, class: 'halo', stroke: HUE[LAYERS[p.layer].hue] }, g);
    const dot = svg('circle', { cx: x, cy: y, r: 5, class: 'dot', fill: HUE[LAYERS[p.layer].hue] }, g);
    const label = svg('text', { x: x + 8, y: y + 4 }, g); label.textContent = p.name;
    const minY = Math.min(...p.events.map(e => e.y));
    g.addEventListener('click', () => { if (!dragMoved) selectPlace(p.id); });
    g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectPlace(p.id); } });
    g.addEventListener('pointerenter', () => { hoverPlace = p.id; drawMarkers(); });
    g.addEventListener('pointerleave', () => { hoverPlace = null; drawMarkers(); });
    return { p, g, halo, dot, label, x, y, minY };
  });
  const ALL_PLACES = PLACES.concat(OFFMAP);
  const placeById = Object.fromEntries(ALL_PLACES.map(p => [p.id, p]));

  function pxPerUnit() { const r = mapSvg.getBoundingClientRect(); return r.width ? r.width / vb.w : 1; }
  function fitAspect(v) {
    const r = mapWrap.getBoundingClientRect(); if (!r.width || !r.height) return v;
    const a = r.width / r.height; const cx = v.x + v.w / 2, cy = v.y + v.h / 2;
    let w = v.w, h = v.h; if (w / h > a) h = w / a; else w = h * a;
    w = Math.min(Math.max(w, 60), G.w * 1.1); h = w / a;
    return { x: Math.min(Math.max(cx - w / 2, -60), G.w - w + 60), y: Math.min(Math.max(cy - h / 2, -60), G.h - h + 60), w, h };
  }
  function setView(v) { vb = fitAspect(v); mapSvg.setAttribute('viewBox', `${vb.x} ${vb.y} ${vb.w} ${vb.h}`); drawMarkers(); }
  function drawMarkers() {
    const ppu = pxPerUnit(), k = 1 / ppu;
    const zoomed = vb.w < 260, roomy = ppu > 1.1; // on narrow screens keep only selected/hovered labels until zoomed
    const win = year < 0 ? 180 : year < 1000 ? 70 : 45;
    markers.forEach(m => {
      const vis = layerOn[m.p.layer] && m.minY <= year;
      m.g.style.display = vis ? '' : 'none';
      if (!vis) return;
      m.dot.setAttribute('r', (m.p.id === selPlace ? 7 : 5) * k);
      m.halo.setAttribute('r', 7 * k);
      m.label.setAttribute('x', m.x + 9 * k); m.label.setAttribute('y', m.y + 4 * k);
      m.label.style.fontSize = (12 * k) + 'px'; m.label.style.strokeWidth = (3 * k) + 'px';
      m.label.style.display = (zoomed || (roomy && MAJOR.has(m.p.id)) || m.p.id === selPlace || m.p.id === hoverPlace) ? '' : 'none';
      m.g.classList.toggle('sel', m.p.id === selPlace);
      m.g.classList.toggle('live', year < 2025 && m.p.events.some(e => Math.abs(e.y - year) <= win));
    });
    seaG.querySelectorAll('text').forEach(t => { t.style.fontSize = (13 * k) + 'px'; });
    jG.style.display = showJourneys && year >= 46 ? '' : 'none';
    $('#map-year').textContent = year >= 2025 ? 'All eras' : (year < 0 ? `${-year} BC` : `AD ${year}`);
  }
  function selectPlace(id, fly) {
    selPlace = id; const p = placeById[id]; if (!p) return;
    const evs = p.events.slice().sort((a, b) => a.y - b.y);
    const L = LAYERS[p.layer];
    $('#place-card').innerHTML = `<p class="eyebrow" style="color:${HUE[L.hue]}">${esc(L.label)}</p><h3>${esc(p.name)}</h3>
      <ul class="events">${evs.map(e => `<li class="${e.y > year ? 'later' : ''}"><span class="when">${yr(e.y)} ${tag(e.t)}</span><span>${rich(e.x)}</span></li>`).join('')}</ul>`;
    if (fly && p.lon != null) { const [x, y] = proj(p.lon, p.lat); setView({ x: x - 170, y: y - 100, w: 340, h: 200 }); } else drawMarkers();
  }
  $('#layer-chips').innerHTML = Object.entries(LAYERS).map(([k, L]) => `<button type="button" class="chip layer-chip" data-layer="${k}" data-hue="${L.hue}" aria-pressed="true"><span class="sw"></span>${esc(L.label)}</button>`).join('');
  $('#layer-chips').addEventListener('click', e => {
    const b = e.target.closest('[data-layer]'); if (!b) return;
    layerOn[b.dataset.layer] = !layerOn[b.dataset.layer]; b.setAttribute('aria-pressed', String(layerOn[b.dataset.layer])); drawMarkers();
  });
  $('#offmap').insertAdjacentHTML('beforeend', OFFMAP.map(p => `<button type="button" class="chip" data-off="${p.id}">${esc(p.name)}</button>`).join(''));
  $('#offmap').addEventListener('click', e => { const b = e.target.closest('[data-off]'); if (b) selectPlace(b.dataset.off); });
  const yearInput = $('#year');
  const setYear = y => { year = Math.round(y); yearInput.value = year; drawMarkers(); if (selPlace) selectPlace(selPlace); };
  yearInput.addEventListener('input', () => setYear(+yearInput.value));
  $('#journeys').addEventListener('click', e => { showJourneys = !showJourneys; e.currentTarget.setAttribute('aria-pressed', String(showJourneys)); if (showJourneys && year < 46) setYear(60); else drawMarkers(); });
  let playing = null;
  const playBtn = $('#play');
  const PLAY_ICON = playBtn.innerHTML, PAUSE_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>';
  function stopPlay() { if (playing) cancelAnimationFrame(playing); playing = null; playBtn.innerHTML = PLAY_ICON; playBtn.setAttribute('aria-label', 'Play through time'); }
  playBtn.addEventListener('click', () => {
    if (playing) return stopPlay();
    if (year >= 2025) setYear(-2600);
    playBtn.innerHTML = PAUSE_ICON; playBtn.setAttribute('aria-label', 'Pause');
    let last = performance.now();
    const step = now => {
      const dt = Math.min(now - last, 100); last = now;
      const speed = year < 0 ? 90 : year < 1500 ? 45 : 22; // years per second
      const ny = year + speed * dt / 1000;
      if (ny >= 2025) { setYear(2025); return stopPlay(); }
      year = ny; yearInput.value = Math.round(ny); drawMarkers();
      playing = requestAnimationFrame(step);
    };
    playing = requestAnimationFrame(step);
  });
  // Pan and zoom
  let dragMoved = false;
  const pointers = new Map(); let pinchStart = null, dragStart = null;
  const toSvg = (cx, cy) => { const r = mapSvg.getBoundingClientRect(); return [vb.x + (cx - r.left) / r.width * vb.w, vb.y + (cy - r.top) / r.height * vb.h]; };
  function zoomAt(f, cx, cy) {
    const [sx, sy] = cx == null ? [vb.x + vb.w / 2, vb.y + vb.h / 2] : toSvg(cx, cy);
    setView({ x: sx - (sx - vb.x) * f, y: sy - (sy - vb.y) * f, w: vb.w * f, h: vb.h * f });
  }
  mapSvg.addEventListener('pointerdown', e => {
    pointers.set(e.pointerId, [e.clientX, e.clientY]); dragMoved = false;
    if (pointers.size === 1) dragStart = { x: e.clientX, y: e.clientY, vb: { ...vb } };
    if (pointers.size === 2) { const [a, b] = [...pointers.values()]; pinchStart = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), vb: { ...vb }, c: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] }; }
  });
  mapSvg.addEventListener('pointermove', e => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, [e.clientX, e.clientY]);
    if (pointers.size === 2 && pinchStart) {
      const [a, b] = [...pointers.values()]; const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
      vb = { ...pinchStart.vb }; zoomAt(pinchStart.d / d, pinchStart.c[0], pinchStart.c[1]); dragMoved = true; return;
    }
    if (dragStart) {
      const dx = e.clientX - dragStart.x, dy = e.clientY - dragStart.y;
      if (!dragMoved && Math.hypot(dx, dy) < 5) return;
      if (!dragMoved) { dragMoved = true; mapSvg.setPointerCapture(e.pointerId); mapSvg.classList.add('dragging'); }
      const r = mapSvg.getBoundingClientRect();
      setView({ ...dragStart.vb, x: dragStart.vb.x - dx / r.width * dragStart.vb.w, y: dragStart.vb.y - dy / r.height * dragStart.vb.h });
    }
  });
  const endPtr = e => { pointers.delete(e.pointerId); if (pointers.size < 2) pinchStart = null; if (!pointers.size) { dragStart = null; mapSvg.classList.remove('dragging'); setTimeout(() => { dragMoved = false; }, 0); } };
  mapSvg.addEventListener('pointerup', endPtr); mapSvg.addEventListener('pointercancel', endPtr);
  mapSvg.addEventListener('wheel', e => { if (!(e.ctrlKey || e.metaKey)) return; e.preventDefault(); zoomAt(e.deltaY > 0 ? 1.15 : 1 / 1.15, e.clientX, e.clientY); }, { passive: false });
  mapSvg.addEventListener('dblclick', e => zoomAt(0.6, e.clientX, e.clientY));
  $('#zoom-in').addEventListener('click', () => zoomAt(0.7));
  $('#zoom-out').addEventListener('click', () => zoomAt(1 / 0.7));
  $('#zoom-reset').addEventListener('click', () => setView(HOME));
  if ('ResizeObserver' in window) new ResizeObserver(() => setView(vb)).observe(mapWrap);
  setView(HOME); selectPlace('jerusalem');

  /* ── Canon ──────────────────────────────────────────────── */
  const RINGS = CANON_RINGS;
  const INCLUDES = { jew: ['core'], pro: ['core', 'anti'], cat: ['core', 'anti', 'deutero'], ort: ['core', 'anti', 'deutero', 'wider'], eth: ['core', 'anti', 'deutero', 'wider'], syr: ['core'] };
  const ringsSvg = $('#rings'); const CX = 280, CY = 280, R0 = 52, DR = 28;
  const ringR = i => R0 + DR * i;
  let selRing = 'core', selTrad = 'pro';
  const ringFill = i => `color-mix(in srgb, ${i < 3 ? 'var(--gold-leaf)' : i < 5 ? 'var(--lapis)' : 'var(--murex)'} ${[62, 46, 34, 40, 28, 34, 24, 16][i]}%, var(--page))`;
  for (let i = RINGS.length - 1; i >= 0; i--) {
    const c = svg('circle', { cx: CX, cy: CY, r: ringR(i), class: 'ring', 'data-ring': RINGS[i].id, tabindex: 0, role: 'button', 'aria-label': RINGS[i].name }, ringsSvg);
    c.style.fill = ringFill(i);
    c.addEventListener('click', () => selectRing(RINGS[i].id));
    c.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectRing(RINGS[i].id); } });
  }
  const ringDefs = svg('defs', {}, ringsSvg);
  RINGS.forEach((rg, i) => {
    if (i === 0) { const t = svg('text', { x: CX, y: CY + 4, class: 'ring-label', 'text-anchor': 'middle' }, ringsSvg); t.textContent = rg.name; return; }
    const r = ringR(i) - DR / 2 - 4; // text baseline sits inside the band
    svg('path', { id: `ring-arc-${i}`, d: `M${CX - r},${CY} A${r},${r} 0 0 1 ${CX + r},${CY}` }, ringDefs);
    const t = svg('text', { class: 'ring-label', 'text-anchor': 'middle' }, ringsSvg);
    const tp = svg('textPath', { href: `#ring-arc-${i}`, startOffset: '50%' }, t); tp.textContent = rg.name;
  });
  const canonLine = svg('circle', { cx: CX, cy: CY, r: ringR(1), class: 'canon-line' }, ringsSvg);
  const canonLbl = svg('text', { class: 'canon-line-label', 'text-anchor': 'start' }, ringsSvg); canonLbl.textContent = 'canon';
  function selectRing(id) {
    selRing = id; const rg = RINGS.find(r => r.id === id);
    $$('.ring', ringsSvg).forEach(c => c.classList.toggle('sel', c.dataset.ring === id));
    const inCanon = INCLUDES[selTrad].includes(id);
    $('#ring-detail').innerHTML = `<p class="eyebrow">${inCanon ? 'Inside the canon of the selected tradition' : 'Outside the canon of the selected tradition'}</p>
      <h3>${esc(rg.name)} ${tag(rg.tag)}</h3><p>${rich(rg.blurb)}</p>
      <ul class="ring-items">${rg.items.map(it => `<li><span class="nm">${esc(it.n)}</span><span class="dt">${esc(it.d)} · ${tag(it.t)}</span><span>${rich(it.x)}</span></li>`).join('')}</ul>`;
  }
  function selectTrad(id) {
    selTrad = id; const T = CANON_TRADITIONS.find(t => t.id === id);
    $('#trad-note').innerHTML = `<strong>${esc(T.name)} · ${esc(T.count)}.</strong> ${rich(T.note)}`;
    const n = INCLUDES[id].length; const r = ringR(n - 1);
    canonLine.setAttribute('r', r + 1);
    const a = -Math.PI / 4; canonLbl.setAttribute('x', CX + Math.cos(a) * (r + 8)); canonLbl.setAttribute('y', CY + Math.sin(a) * (r + 8));
    $$('#matrix td.st, #matrix th.tc').forEach(c => { c.style.background = c.dataset.trad === id ? 'color-mix(in srgb, var(--gold-leaf) 16%, transparent)' : ''; });
    selectRing(selRing);
  }
  const SYM = { c: ['✓', 'st-c', 'Canonical'], a: ['◐', 'st-a', 'Appendix, or read but not canon'], n: ['—', 'st-n', 'Absent'] };
  const MCOLS = ['jew', 'pro', 'cat', 'ort', 'eth'];
  $('#matrix').innerHTML = `<thead><tr><th>Book</th>${MCOLS.map(c => `<th class="tc" data-trad="${c}">${esc(CANON_TRADITIONS.find(t => t.id === c).name.replace(' Tewahedo', '').replace('Roman ', ''))}</th>`).join('')}<th>Note</th></tr></thead>
    <tbody>${CANON_ROWS.map(r => `<tr><td>${esc(r.book)}</td>${[...r.s].map((s, i) => `<td class="st ${SYM[s][1]}" data-trad="${MCOLS[i]}" title="${SYM[s][2]}"><span aria-hidden="true">${SYM[s][0]}</span><span class="visually-hidden">${SYM[s][2]}</span></td>`).join('')}<td class="nt">${rich(r.note)}</td></tr>`).join('')}</tbody>`;
  const selectTradTab = tabs($('#trad-chips'), CANON_TRADITIONS.map(t => [t.id, esc(t.name)]), selectTrad, 'pro');
  $('#canon-timeline').innerHTML = CANON_TIMELINE.map(e => `<li><span class="yr">${yr(e.y)}</span>${tag(e.t)} ${rich(e.x)}</li>`).join('');
  $('#canon-steel').innerHTML = CANON_STEELMAN.map(s => `<div class="card"><h3>${esc(s.side)}</h3><ul>${s.pts.map(p => `<li>${rich(p)}</li>`).join('')}</ul><p class="small">${tag(s.t)} Each case is stated as its own defenders would state it.</p></div>`).join('');
  $('#canon-criteria').innerHTML = CANON_CRITERIA.map(c => `<div class="card"><h3>${esc(c.n)}</h3><p>${esc(c.x)}</p></div>`).join('');

  /* ── Lineage chart ──────────────────────────────────────── */
  (function lineage() {
    const el = $('#lineage'), L = 170, A = 0.42, B = 2.0, BRK = 1400;
    const X = y => y < BRK ? L + (y + 300) * A : L + (BRK + 300) * A + (y - BRK) * B;
    const W = X(2030) + 30, laneH = 92, top = 40, H = top + STREAMS.length * laneH + 10;
    el.setAttribute('width', W); el.setAttribute('height', H); el.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const ax = svg('g', { class: 'axis' }, el);
    [-300, 0, 300, 600, 900, 1200, 1400, 1500, 1600, 1700, 1800, 1900, 2000].forEach(t => {
      svg('line', { x1: X(t), x2: X(t), y1: top - 8, y2: H - 6, class: t === BRK ? 'break' : '' , opacity: t === BRK ? 1 : 0.5 }, ax);
      const tx = svg('text', { x: X(t), y: top - 14, 'text-anchor': 'middle' }, ax); tx.textContent = t === 0 ? 'AD 1' : t < 0 ? `${-t} BC` : t;
    });
    let n = 0;
    STREAMS.forEach((st, li) => {
      const cy = top + li * laneH + laneH / 2;
      svg('line', { x1: L - 10, x2: W - 20, y1: cy, y2: cy, class: 'lane-line' }, el);
      const lt = svg('text', { x: 14, y: cy + 5, class: 'lane-label' }, el); lt.textContent = st.name;
      st.nodes.forEach((nd, i) => {
        const g = svg('g', { class: 'node', tabindex: 0, role: 'button', 'aria-label': `${nd.n}, ${yr(nd.y)}` }, el);
        svg('circle', { cx: X(nd.y), cy, r: 7, fill: ['var(--gold)', 'var(--verdigris)', 'var(--murex)', 'var(--lapis)', 'var(--vermilion)'][li] }, g);
        const t = svg('text', { x: X(nd.y), y: i % 2 ? cy + 24 : cy - 14, 'text-anchor': 'middle' }, g); t.textContent = nd.n;
        const show = () => { $$('.node', el).forEach(x => x.classList.remove('sel')); g.classList.add('sel'); $('#lineage-detail').innerHTML = `<strong>${esc(nd.n)}</strong> <span class="muted ui small">${yr(nd.y)} · ${esc(st.name)}</span><br>${rich(nd.x)}`; };
        g.addEventListener('click', show); g.addEventListener('keydown', e => { if (e.key === 'Enter') show(); });
        if (n++ === 0) show();
      });
    });
  })();

  /* ── Verse Lab ──────────────────────────────────────────── */
  $('#lab-list').innerHTML = LAB.map(l => `<li><button type="button" role="tab" data-ref="${esc(l.ref)}" aria-selected="false"><span class="r">${esc(refLabel(l.ref))}</span><span class="t">${esc(l.title)}</span></button></li>`).join('');
  function selectLab(ref) {
    const l = LAB.find(x => x.ref === ref) || LAB[0]; const e = S[l.ref] || {};
    $$('#lab-list button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.ref === l.ref)));
    const hits = new Set(l.keys.flatMap(k => (k[2].match(/H(\d+)/g) || []).map(s => +s.slice(1))));
    const orig = e.heb ? `<div class="original">${hebLine(e.heb, hits)}<p class="orig-note">Hebrew, Westminster Leningrad Codex. Highlighted words are discussed below.</p></div>`
      : e.grc ? `<div class="original"><p class="grc-line" lang="grc">${esc(e.grc)}</p><p class="orig-note">Greek, SBL Greek New Testament (critical text).</p></div>` : '';
    $('#lab-main').innerHTML = `<div><p class="eyebrow">${vchip(l.ref)}</p><h3>${esc(l.title)}</h3></div>${orig}
      <div class="keys">${l.keys.map(k => `<div class="key"><span class="k-w" ${/[֐-׿]/.test(k[0]) ? 'lang="he" dir="rtl"' : ''}>${esc(k[0])}</span><span class="k-m"><span class="tr">${esc(k[1])}</span><span class="sn">${esc(k[2])}</span>${esc(k[3])}</span></div>`).join('')}</div>
      <div class="versions">${VERSIONS.map(([k, n]) => e[k] ? `<div class="version"><span class="vn">${n}</span><span class="vt"${k === 'VulgClementine' ? ' lang="la" style="font-style:italic"' : ''}>${esc(e[k])}</span></div>` : `<div class="version absent"><span class="vn">${n}</span><span class="vt">This verse is absent from this edition.</span></div>`).join('')}</div>
      <ul class="claims">${claims(l.notes)}</ul>`;
  }
  $('#lab-list').addEventListener('click', e => { const b = e.target.closest('[data-ref]'); if (b) selectLab(b.dataset.ref); });
  $('#lab-main').addEventListener('click', e => { const w = e.target.closest('[data-lex]'); if (w) { selectLex(w.dataset.lex); $('#concordance').scrollIntoView(); } });
  selectLab(LAB[0].ref);
  $('#ms-stats').innerHTML = MANUSCRIPT_FACTS.map(m => `<div class="stat"><div class="big">${esc(m.n)}</div><div class="lbl">${esc(m.l)} ${tag(m.t)}</div></div>`).join('');
  $('#kjv-rules').innerHTML = claims(KJV_RULES);

  /* ── Concordance ────────────────────────────────────────── */
  let lexLang = 'all', lexSel = 'logos';
  function renderLexGrid() {
    const q = $('#lex-q').value.trim().toLowerCase();
    const items = LEXICON.filter(l => (lexLang === 'all' || l.lang === lexLang) && (!q || [l.id, l.w, l.tr, l.s, l.gloss, l.kjv].join(' ').toLowerCase().includes(q)));
    $('#lex-grid').innerHTML = items.length ? items.map(l => `<button type="button" class="lex-card" data-id="${l.id}" aria-selected="${l.id === lexSel}"><span class="lw ${l.lang}" lang="${l.lang === 'heb' ? 'he' : 'grc'}">${esc(l.w)}</span><span class="lt">${esc(l.tr)}</span><span class="ls">${esc(l.s)}</span></button>`).join('')
      : `<p class="muted">No word matches “${esc(q)}”. Try an English meaning such as love, sin or spirit.</p>`;
  }
  function selectLex(id) {
    const l = LEXICON.find(x => x.id === id); if (!l) return; lexSel = id;
    $$('.lex-card').forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === id)));
    $('#lex-detail').innerHTML = `<div class="big-w ${l.lang}" lang="${l.lang === 'heb' ? 'he' : 'grc'}">${esc(l.w)}</div>
      <dl style="margin:0;display:grid;gap:6px">
        <div class="lex-row"><dt>Translit.</dt><dd><em>${esc(l.tr)}</em> · ${l.lang === 'heb' ? 'Hebrew' : 'Greek'}</dd></div>
        <div class="lex-row"><dt>Strong’s</dt><dd>${esc(l.s)}</dd></div>
        <div class="lex-row"><dt>Meaning</dt><dd>${esc(l.gloss)}</dd></div>
        <div class="lex-row"><dt>In the KJV</dt><dd>${esc(l.kjv)}</dd></div></dl>
      <ul class="claims">${claims(l.note)}</ul>
      <div class="lex-verses">${l.refs.map(r => `<div class="lex-verse"><div class="lv-r">${vchip(r)}</div>${esc(kjv(r))}</div>`).join('')}</div>`;
  }
  $('#lex-q').addEventListener('input', renderLexGrid);
  $$('[data-lang]').forEach(b => b.addEventListener('click', () => { lexLang = b.dataset.lang; $$('[data-lang]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); renderLexGrid(); }));
  $('#lex-grid').addEventListener('click', e => { const b = e.target.closest('.lex-card'); if (b) selectLex(b.dataset.id); });
  renderLexGrid(); selectLex(lexSel);

  /* ── Trinity & Trivium ──────────────────────────────────── */
  const LENSES = {
    persons: { label: 'Persons', center: 'One God', f: p => [p.name.replace('The ', '').replace(', the Logos', ''), p.art] },
    trivium: { label: 'Trivium', center: 'One art of speech', f: p => [p.art, p.q] },
    proverbs: { label: 'Proverbs 24:3–4', center: 'One house', f: p => [p.heb[2][0].toUpperCase() + p.heb[2].slice(1), p.heb[1]] },
    augustine: { label: 'Augustine’s mind', center: 'One mind', f: p => [{ father: 'Memory', son: 'Understanding', spirit: 'Will · Love' }[p.id], { father: 'memoria', son: 'intellegentia', spirit: 'voluntas' }[p.id]] },
    psalm: { label: 'Psalm 33:6', center: 'The heavens made', f: p => [{ father: 'The LORD', son: 'His Word', spirit: 'His Breath' }[p.id], { father: 'YHWH', son: 'dābār', spirit: 'rûaḥ' }[p.id]] },
    genesis: { label: 'Genesis 1', center: '“Very good”', f: p => [{ father: 'Naming', son: 'Separating', spirit: 'Hovering · Blessing' }[p.id], { father: '“and God called”', son: '“and God divided”', spirit: '“it was good”' }[p.id]] }
  };
  const triSvg = $('#tri'); const TP = { father: [260, 80], son: [90, 370], spirit: [430, 370] };
  svg('path', { d: `M${TP.father}L${TP.son}L${TP.spirit}Z`, class: 'tri-edge' }, triSvg);
  svg('path', { d: `M${TP.father}L${TP.spirit}L${TP.son}Z`, class: 'tri-flow' }, triSvg);
  const triCenter = svg('text', { x: 260, y: 290, class: 'tri-center' }, triSvg);
  const triNodes = TRIUNE.persons.map(p => {
    const [x, y] = TP[p.id];
    const g = svg('g', { class: 'tri-node', tabindex: 0, role: 'button' }, triSvg);
    svg('circle', { cx: x, cy: y, r: 66 }, g);
    const t1 = svg('text', { x, y: y + 2, class: 't1' }, g), t2 = svg('text', { x, y: y + 24, class: 't2' }, g);
    g.addEventListener('click', () => selectTri(p.id)); g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectTri(p.id); } });
    return { p, g, t1, t2 };
  });
  let triLens = 'persons';
  function setLens(id) {
    triLens = id; const L = LENSES[id]; triCenter.textContent = L.center;
    triNodes.forEach(n => { const [a, b] = L.f(n.p); n.t1.textContent = a; n.t2.textContent = b; n.g.setAttribute('aria-label', `${a}, ${b}`); });
  }
  function selectTri(id) {
    const p = TRIUNE.persons.find(x => x.id === id);
    triNodes.forEach(n => n.g.classList.toggle('sel', n.p.id === id));
    $('#tri-detail').innerHTML = `<p class="art">${esc(p.art)}</p><h3>${esc(p.name)}</h3><p class="q">${esc(p.q)}</p>
      <p><span class="hb" lang="he">${esc(p.heb[0])}</span> <em>${esc(p.heb[1])}</em>, ${esc(p.heb[2])} ${tag('F')}</p>
      <ul>${p.lines.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      <div class="lex-verse"><div class="lv-r">${vchip(p.verse)}</div>${esc(kjv(p.verse))}</div>
      <p class="small muted">${tag('S')} These correspondences are an analogy drawn from the sources listed below, not a doctrine.</p>`;
  }
  tabs($('#tri-lens'), Object.entries(LENSES).map(([k, v]) => [k, esc(v.label)]), setLens, 'persons');
  selectTri('son');
  $('#tri-sources').innerHTML = claims(TRIUNE.sources);
  $('#tri-bonds').innerHTML = claims(TRIUNE.bonds);
  $('#tri-limits').innerHTML = claims(TRIUNE.limits);

  /* ── Traditions & threads ───────────────────────────────── */
  function selectTradition(id) {
    const t = TRADITIONS.find(x => x.id === id);
    $('#trad-body').innerHTML = `<div class="trad-core"><span class="era">${esc(t.era)}</span><h3>${esc(t.name)}</h3><p>${rich(t.core)}</p><p class="small muted"><em>Key texts:</em> ${esc(t.texts)}</p></div>
      <div><h4 class="eyebrow" style="margin-bottom:8px">What it gave, and what the faith received</h4><ul class="claims">${claims(t.gave)}</ul></div>
      <div><h4 class="eyebrow" style="margin-bottom:8px;color:var(--vermilion)">Where the ways part</h4><ul class="claims">${claims(t.differs)}</ul></div>
      <div class="bridge"><p class="ui small">${vchip(t.bridge)}</p><p>${esc(kjv(t.bridge))}</p><p class="small muted">${esc(t.bn)}</p></div>`;
  }
  const selectTraditionTab = tabs($('#trad-tabs'), TRADITIONS.map(t => [t.id, esc(t.name)]), selectTradition, 'egypt');
  function selectThread(id) {
    const th = THREADS.find(x => x.id === id);
    $('#thread-q').textContent = th.q;
    $('#thread-table').innerHTML = `<thead><tr><th>Tradition</th><th>Source</th><th>Teaching</th><th>Status</th></tr></thead><tbody>${th.rows.map(r => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td><td>${rich(r[2])}</td><td>${tag(r[3])}</td></tr>`).join('')}</tbody>`;
  }
  const selectThreadTab = tabs($('#thread-tabs'), THREADS.map(t => [t.id, esc(t.name)]), selectThread, 'order');

  /* ── Great Conversation ─────────────────────────────────── */
  const thinkerById = Object.fromEntries(THINKERS.map(t => [t.id, t]));
  const thinkerG = {};
  (function conversation() {
    const el = $('#thinkers'), L = 30;
    const X = y => y < 1000 ? L + (y + 550) * 0.26 : y < 1800 ? L + 1550 * 0.26 + (y - 1000) * 0.7 : L + 1550 * 0.26 + 800 * 0.7 + (y - 1800) * 4.2;
    const W = X(2030) + 40, rowH = 44, top = 36;
    const rows = []; const pos = {};
    THINKERS.slice().sort((a, b) => a.y - b.y).forEach(t => {
      const x = X(t.y), w = t.n.length * 6.6 + 22;
      let r = rows.findIndex(end => end < x - 6); if (r < 0) { rows.push(0); r = rows.length - 1; }
      rows[r] = x + w; pos[t.id] = [x, top + 20 + r * rowH];
    });
    const H = top + 30 + rows.length * rowH;
    el.setAttribute('width', W); el.setAttribute('height', H); el.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const ax = svg('g', { class: 'axis' }, el);
    [-500, 0, 500, 1000, 1200, 1400, 1600, 1800, 1850, 1900, 1950, 2000].forEach(t => {
      svg('line', { x1: X(t), x2: X(t), y1: top - 6, y2: H - 4, opacity: 0.35, class: (t === 1000 || t === 1800) ? 'break' : '' }, ax);
      const tx = svg('text', { x: X(t), y: top - 12, 'text-anchor': 'middle' }, ax); tx.textContent = t === 0 ? 'AD 1' : t < 0 ? `${-t} BC` : t;
    });
    const linkG = svg('g', {}, el);
    THINKERS.forEach(t => t.to.forEach(to => {
      if (!pos[to]) return; const [x1, y1] = pos[t.id], [x2, y2] = pos[to];
      svg('path', { d: `M${x1},${y1} C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2},${y2}`, class: 'tlink', 'data-a': t.id, 'data-b': to }, linkG);
    }));
    THINKERS.forEach(t => {
      const [x, y] = pos[t.id];
      const g = svg('g', { tabindex: 0, role: 'button', 'aria-label': t.n }, el);
      svg('circle', { cx: x, cy: y, r: 7, class: 'tdot', fill: t.id === 'peterson' ? 'var(--vermilion)' : t.t === 'B' ? 'var(--gold)' : 'var(--lapis)' }, g);
      const tx = svg('text', { x: x + 11, y: y + 4, class: 'tn' }, g); tx.textContent = t.n;
      g.addEventListener('click', () => selectThinker(t.id)); g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectThinker(t.id); } });
      thinkerG[t.id] = g;
    });
  })();
  function selectThinker(id) {
    const t = thinkerById[id];
    const from = THINKERS.filter(x => x.to.includes(id));
    const rel = new Set([id, ...t.to, ...from.map(x => x.id)]);
    Object.entries(thinkerG).forEach(([k, g]) => { g.classList.toggle('sel', k === id); g.classList.toggle('dim', !rel.has(k)); });
    $$('#thinkers .tlink').forEach(p => p.classList.toggle('hot', p.dataset.a === id || p.dataset.b === id));
    $('#thinker-card').innerHTML = `<p class="eyebrow">${yr(t.y)} · ${esc(t.w)}</p><h3>${esc(t.n)}</h3><p>${tag(t.t)} ${rich(t.x)}</p>
      <p class="small muted">${from.length ? 'Drew from: ' + from.map(x => esc(x.n)).join(', ') + '. ' : ''}${t.to.length ? 'Shaped: ' + t.to.map(x => esc(thinkerById[x].n)).join(', ') + '.' : ''}</p>`;
  }
  selectThinker('augustine');
  // Maps of Meaning diagram
  (function maps() {
    const el = $('#mm');
    const defs = svg('defs', {}, el);
    const pat = svg('pattern', { id: 'waves', width: 24, height: 12, patternUnits: 'userSpaceOnUse' }, defs);
    svg('path', { d: 'M0 6 Q6 0 12 6 T24 6', fill: 'none', stroke: 'var(--lapis)', 'stroke-width': 1, opacity: 0.35 }, pat);
    const items = {
      unknown: () => { const g = svg('g', { class: 'mm-el', tabindex: 0, role: 'button' }, el); const c = svg('circle', { cx: 230, cy: 230, r: 214, class: 'mm-shape', fill: 'color-mix(in srgb, var(--lapis) 14%, var(--page))', stroke: 'var(--lapis)', 'stroke-width': 1.5 }, g); svg('circle', { cx: 230, cy: 230, r: 214, fill: 'url(#waves)', 'pointer-events': 'none' }, g); return [g, c]; },
      known: () => { const g = svg('g', { class: 'mm-el', tabindex: 0, role: 'button' }, el); const c = svg('circle', { cx: 230, cy: 240, r: 116, class: 'mm-shape', fill: 'color-mix(in srgb, var(--gold-leaf) 26%, var(--page))', stroke: 'var(--gold)', 'stroke-width': 1.5 }, g); return [g, c]; },
      adversary: () => { const g = svg('g', { class: 'mm-el', tabindex: 0, role: 'button' }, el); const c = svg('rect', { x: 196, y: 262, width: 68, height: 44, rx: 2, class: 'mm-shape', fill: 'var(--page)', stroke: 'var(--ink-soft)', 'stroke-width': 1.5 }, g); return [g, c]; },
      knower: () => { const g = svg('g', { class: 'mm-el', tabindex: 0, role: 'button' }, el); const c = svg('circle', { cx: 316, cy: 160, r: 30, class: 'mm-shape', fill: 'color-mix(in srgb, var(--vermilion) 22%, var(--page))', stroke: 'var(--vermilion)', 'stroke-width': 2 }, g); return [g, c]; }
    };
    const labels = [['The Unknown', 'Great Mother · chaos', 230, 60], ['The Known', 'Great Father · order', 230, 205], ['Adversary', '', 230, 290], ['Knower', 'the Son', 316, 158]];
    const els = {};
    Object.entries(items).forEach(([k, f]) => { const [g] = f(); els[k] = g; g.addEventListener('click', () => selectMM(k)); g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectMM(k); } }); });
    labels.forEach(([a, b, x, y]) => { const t = svg('text', { x, y, class: 'mm-label' }, el); t.textContent = a; if (b) { const s = svg('text', { x, y: y + 16, class: 'mm-sub' }, el); s.textContent = b; } });
    const arrow = svg('path', { d: 'M340 136 Q392 92 400 60', fill: 'none', stroke: 'var(--vermilion)', 'stroke-width': 1.5, 'stroke-dasharray': '4 4' }, el);
    svg('title', {}, arrow).textContent = 'Voluntary exploration of the unknown';
    window.__mm = els;
  })();
  function selectMM(id) {
    const e = PETERSON.elements.find(x => x.id === id);
    Object.entries(window.__mm).forEach(([k, g]) => g.classList.toggle('sel', k === id));
    $('#mm-detail').innerHTML = `<p class="eyebrow">${esc(e.figure)}</p><h3 style="font-size:var(--s-4)">${esc(e.name)}</h3><p>${tag('S')} ${rich(e.x)}</p><div class="lex-verse"><div class="lv-r">${vchip(e.verse)}</div>${esc(kjv(e.verse))}</div>`;
  }
  $('#mm-cycle').innerHTML = PETERSON.cycle.map(c => `<li>${esc(c)}</li>`).join('');
  $('#mm-steel').innerHTML = claims(PETERSON.steel);
  $('#mm-crit').innerHTML = claims(PETERSON.critique);
  selectMM('knower');

  /* ── Iconoclasts & orders ───────────────────────────────── */
  const ING_TABS = [['life', 'Life'], ['contributions', 'Contributions'], ['steel', 'His strongest case'], ['reply', 'A Christian reply'], ['links', 'The Masonic question']];
  const selectIng = tabs($('#ing-tabs'), ING_TABS, id => { $('#ing-body').innerHTML = claims(INGERSOLL[id]); }, 'life');
  $('#critics').innerHTML = CRITICS.map(c => `<li><details><summary><span class="cy">${yr(c.y)}</span><span><span class="cn">${esc(c.n)}</span> <span class="cw">${esc(c.w)}</span></span></summary>
    <div class="cbody"><p><b>Charge</b>${rich(c.crit)}</p><p><b>What it gave</b>${rich(c.gift)}</p><p><b>Answer</b>${rich(c.reply)}</p><p>${tag(c.t)}</p></div></details></li>`).join('');
  const selectOrder = tabs($('#order-tabs'), ORDERS.map(o => [o.id, esc(o.name)]), id => {
    const o = ORDERS.find(x => x.id === id);
    $('#order-body').innerHTML = `<div><p class="eyebrow">${esc(o.span)}</p><h3 style="font-size:var(--s-4)">${esc(o.name)}</h3></div>
      <div class="order-cols"><div class="fact"><h4>What the documents show</h4><ul class="claims">${claims(o.facts)}</ul></div><div class="legend"><h4>What legend adds</h4><ul class="claims">${claims(o.legends)}</ul></div></div>
      <div class="bridge"><p class="ui small eyebrow">A Christian assessment</p><p>${tag('S')} ${rich(o.christian)}</p></div>`;
    $$('#net .net-edge').forEach(p => { p.style.opacity = (p.dataset.a === id || p.dataset.b === id) ? 1 : 0.35; });
  }, 'templars');
  (function network() {
    const el = $('#net');
    const P = { templars: [100, 70], christ: [100, 290], rosicrucians: [380, 50], golden: [650, 50], masons: [380, 180], enlight: [650, 180], paine: [380, 310], ingersoll: [650, 310] };
    const eg = svg('g', {}, el), ng = svg('g', {}, el);
    ORDER_LINKS.forEach(([a, b, t, cap]) => {
      const [x1, y1] = P[a], [x2, y2] = P[b]; const mx = (x1 + x2) / 2 + (y2 - y1) * 0.08, my = (y1 + y2) / 2 - (x2 - x1) * 0.08;
      const d = `M${x1},${y1} Q${mx},${my} ${x2},${y2}`;
      svg('path', { d, class: `net-edge ${t}`, 'data-a': a, 'data-b': b }, eg);
      const hit = svg('path', { d, class: 'net-edge-hit', tabindex: 0, role: 'button', 'aria-label': cap }, eg);
      const show = () => { $('#net-caption').innerHTML = `${tag(t)} <strong>${esc(ORDER_NODES[a])} → ${esc(ORDER_NODES[b])}</strong>: ${esc(cap)}`; };
      hit.addEventListener('click', show); hit.addEventListener('keydown', e => { if (e.key === 'Enter') show(); }); hit.addEventListener('pointerenter', show);
    });
    Object.entries(P).forEach(([k, [x, y]]) => {
      const g = svg('g', { class: 'net-node' }, ng); const w = ORDER_NODES[k].length * 8 + 26;
      svg('rect', { x: x - w / 2, y: y - 17, width: w, height: 34, rx: 17 }, g);
      const t = svg('text', { x, y: y + 5 }, g); t.textContent = ORDER_NODES[k];
    });
  })();
  selectOrder('templars');

  /* ── Evidence ───────────────────────────────────────────── */
  $('#ev-sources').innerHTML = EVIDENCE.sources.map(s => `<li>${tag(s.t)}<span><strong>${esc(s.n)}</strong> <span class="muted ui small">${yr(s.y)}</span><br>${rich(s.x)}</span></li>`).join('');
  $('#ev-digs').innerHTML = EVIDENCE.digs.map(s => `<li>${tag(s.t)}<span><strong>${esc(s.n)}</strong> <span class="muted ui small">${s.y < 0 ? 'c. ' + yr(s.y) : '1st century'}</span><br>${rich(s.x)}</span></li>`).join('');
  $('#ev-for').innerHTML = EVIDENCE.forFaith.map(s => `<li>${tag(s.t)}<span><strong>${esc(s.n)}.</strong> ${rich(s.x)}</span></li>`).join('');
  $('#ev-against').innerHTML = EVIDENCE.against.map(s => `<li>${tag(s.t)}<span><strong>${esc(s.n)}.</strong> ${rich(s.x)}<br><span class="muted"><em>Reply:</em> ${rich(s.r)}</span></span></li>`).join('');

  /* ── Ledger ─────────────────────────────────────────────── */
  $('#fruits').innerHTML = FRUITS.map(f => `<div class="ledger-item"><div class="ah">${esc(f.area)} ${tag(f.t)}</div><p>${rich(f.x)}</p><p class="small">${vchip(f.v)}</p></div>`).join('');
  $('#shadows').innerHTML = SHADOWS.map(f => `<div class="ledger-item"><div class="ah">${esc(f.area)} ${tag(f.t)}</div><p>${rich(f.x)}</p><p class="fix"><b>Correction from within</b> ${rich(f.fix)}</p></div>`).join('');

  /* ── Then & Now ─────────────────────────────────────────── */
  $('#gaps').innerHTML = `<div class="gap-row head"><div>Word</div><div>Then</div><div>Now</div><div>The gap</div></div>` +
    THEN_NOW.map(g => `<div class="gap-row"><div class="gk">${esc(g.k)}</div><div data-l="Then">${rich(g.then)}</div><div data-l="Now">${rich(g.now)}</div><div class="gg" data-l="The gap">${rich(g.gap)}</div></div>`).join('');

  /* ── The Way ────────────────────────────────────────────── */
  $('#way-summary').innerHTML = WAY.summary.map(r => `<div class="sv"><span class="svr">${vchip(r)}</span><span>${esc(kjv(r))}</span></div>`).join('');
  $('#tempt-notes').innerHTML = claims([WAY.temptation.note, WAY.temptation.sequence]);
  $('#triad').innerHTML = `<thead><tr><th>Desire (1 John 2:16)</th><th>Eve (Genesis 3:6)</th><th>Christ tempted (Matthew 4)</th><th>Remedy</th></tr></thead><tbody>${WAY.temptation.triad.map(t => `<tr><td><strong>${esc(t.n)}</strong></td><td>“${esc(t.eve)}”</td><td>${esc(t.christ)}</td><td>${rich(t.remedy)}</td></tr>`).join('')}</tbody>`;
  $('#vices').innerHTML = WAY.temptation.vices.map(([v, g, x]) => `<div class="vv-item"><div class="pair"><span class="vice">${esc(v)}</span> → <span class="virt">${esc(g)}</span></div><p>${rich(x)}</p></div>`).join('');
  $('#vices-note').innerHTML = `${tag(WAY.temptation.vicesNote[0])} ${rich(WAY.temptation.vicesNote[1])}`;
  const checks = store.get('la-pillars', {});
  $('#pillars').innerHTML = WAY.pillars.map(p => `<div class="card pillar" data-p="${p.id}"><h3>${esc(p.n)} <span class="count" data-count="${p.id}"></span></h3><p>${rich(p.x)}</p><p class="pv">${p.v.map(vchip).join(' ')}</p>
    <ul class="practice">${p.practice.map((x, i) => { const id = `pr-${p.id}-${i}`; return `<li><label for="${id}"><input type="checkbox" id="${id}" data-key="${id}" ${checks[id] ? 'checked' : ''}><span>${rich(x)}</span></label></li>`; }).join('')}</ul></div>`).join('');
  const updateCounts = () => WAY.pillars.forEach(p => { const n = p.practice.filter((_, i) => checks[`pr-${p.id}-${i}`]).length; $(`[data-count="${p.id}"]`).textContent = `${n} of ${p.practice.length} kept`; });
  $('#pillars').addEventListener('change', e => { const c = e.target.closest('[data-key]'); if (!c) return; checks[c.dataset.key] = c.checked; store.set('la-pillars', checks); updateCounts(); });
  updateCounts();
  const today = new Date().toISOString().slice(0, 10), exKey = `la-examen-${today}`;
  const exData = store.get(exKey, {});
  $('#examen').innerHTML = WAY.examen.map((s, i) => `<div class="ex-step"><span class="exn">${['I', 'II', 'III', 'IV', 'V'][i]}</span><div><h4>${esc(s.n)}</h4><p class="small">${rich(s.x)}</p><textarea id="ex-${i}" data-i="${i}" aria-label="${esc(s.n)} notes" placeholder="Write here, or simply pray">${esc(exData[i] || '')}</textarea></div></div>`).join('') +
    `<div class="ex-foot"><span>${tag(WAY.examenNote[0])} ${esc(WAY.examenNote[1])}</span><span style="margin-left:auto">Saved in this browser for ${today}.</span><button type="button" class="btn" id="ex-clear">Clear today</button></div>`;
  $('#examen').addEventListener('input', e => { const t = e.target.closest('[data-i]'); if (!t) return; exData[t.dataset.i] = t.value; store.set(exKey, exData); });
  $('#ex-clear').addEventListener('click', () => { $$('#examen textarea').forEach(t => { t.value = ''; }); Object.keys(exData).forEach(k => delete exData[k]); store.set(exKey, exData); });

  /* ── Speech ─────────────────────────────────────────────── */
  const synth = window.speechSynthesis || null;
  let voices = [];
  const voiceSel = $('#tour-voice');
  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices().filter(v => /^en(-|_|$)/i.test(v.lang));
    const pref = store.get('la-voice', null);
    const rank = v => (/natural|neural|premium|enhanced/i.test(v.name) ? 0 : 1) + (/en-GB/i.test(v.lang) ? 0 : 0.5);
    voices.sort((a, b) => rank(a) - rank(b));
    voiceSel.innerHTML = voices.map((v, i) => `<option value="${i}" ${v.name === pref ? 'selected' : ''}>${esc(v.name.replace(/Microsoft |Google /, ''))}</option>`).join('') || '<option>Default voice</option>';
  }
  if (synth) { loadVoices(); synth.addEventListener ? synth.addEventListener('voiceschanged', loadVoices) : (synth.onvoiceschanged = loadVoices); }
  voiceSel.addEventListener('change', () => { const v = voices[+voiceSel.value]; if (v) store.set('la-voice', v.name); });
  const rateInput = $('#tour-rate');
  rateInput.value = store.get('la-rate', 0.95);
  rateInput.addEventListener('change', () => store.set('la-rate', +rateInput.value));
  function utter(text, lang) {
    const u = new SpeechSynthesisUtterance(text);
    const v = voices[+voiceSel.value];
    if (lang === 'la') { u.lang = 'it-IT'; } else if (v) { u.voice = v; u.lang = v.lang; }
    u.rate = +rateInput.value; u.pitch = 1;
    return u;
  }
  // Chrome stops long utterances, so speak sentence by sentence.
  function speakChunks(text, lang, onDone) {
    if (!synth) { onDone && onDone(false); return; }
    synth.cancel();
    const parts = text.match(/[^.!?;:]+[.!?;:]*\s*/g) || [text];
    let i = 0; const token = {}; speakChunks.token = token;
    const next = () => {
      if (speakChunks.token !== token) return;
      if (i >= parts.length) { onDone && onDone(true); return; }
      const u = utter(parts[i++].trim(), lang);
      u.onend = next; u.onerror = () => { if (speakChunks.token === token) next(); };
      synth.speak(u);
    };
    next();
  }
  function speakOnce(text, lang) { speakChunks(text, lang); }
  function stopSpeech() { speakChunks.token = null; if (synth) synth.cancel(); }

  /* ── Guided tour ────────────────────────────────────────── */
  const bar = $('#tour-bar');
  let tIdx = 0, tPlaying = false, tTimer = null, spot = null;
  const PAUSE_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>';
  const PLAY_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  function runAct(act) {
    if (!act) return;
    const [k, v] = act.split(':');
    if (k === 'year') { setYear(+v); selectPlace('giza', true); }
    if (k === 'place') { if (year < 2025 && placeById[v].events.every(e => e.y > year)) setYear(2025); selectPlace(v, true); }
    if (k === 'journeys') { showJourneys = true; $('#journeys').setAttribute('aria-pressed', 'true'); setYear(60); setView({ x: 150, y: 150, w: 280, h: 170 }); }
    if (k === 'trad') selectTradTab(v);
    if (k === 'lab') selectLab(v);
    if (k === 'lex') selectLex(v);
    if (k === 'tri') { selectTri(v); }
    if (k === 'thread') selectThreadTab(v);
    if (k === 'mm') { selectMM(v); selectThinker('peterson'); }
    if (k === 'ing') selectIng(v);
    if (k === 'order') selectOrder(v);
  }
  function tourGo(i) {
    clearTimeout(tTimer); stopSpeech();
    tIdx = Math.max(0, Math.min(TOUR.length - 1, i));
    const st = TOUR[tIdx];
    if (spot) spot.classList.remove('spotlight');
    const behavior = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    $('#' + st.sec).scrollIntoView({ behavior, block: 'start' });
    runAct(st.act);
    spot = $(st.target); if (spot) { spot.classList.add('spotlight'); setTimeout(() => spot && spot.scrollIntoView({ block: 'center', behavior }), 450); }
    $('#tour-step').textContent = `${tIdx + 1} / ${TOUR.length}`;
    $('#tour-caption').innerHTML = `<span class="tt">${esc(st.title)}</span>${esc(st.say)}`;
    $('#tour-prog').style.width = `${(tIdx + 1) / TOUR.length * 100}%`;
    if (tPlaying) speakStep();
  }
  function speakStep() {
    const st = TOUR[tIdx];
    const advance = () => { if (!tPlaying) return; if (tIdx < TOUR.length - 1) tTimer = setTimeout(() => tourGo(tIdx + 1), 1100); else setTourPlaying(false); };
    if (synth && voices.length + synth.getVoices().length > 0) speakChunks(st.say, 'en', ok => { if (ok) advance(); });
    else tTimer = setTimeout(advance, Math.max(6000, st.say.split(/\s+/).length / 2.6 * 1000)); // no speech engine: pace by reading time
  }
  function setTourPlaying(p, speak = true) {
    tPlaying = p; const b = $('#tour-play');
    b.innerHTML = p ? PAUSE_SVG : PLAY_SVG; b.setAttribute('aria-label', p ? 'Pause' : 'Play');
    if (p) { if (speak) speakStep(); } else { clearTimeout(tTimer); stopSpeech(); }
  }
  function tourStart() { bar.hidden = false; stopPlay(); setTourPlaying(true, false); tourGo(0); }
  function tourEnd() { setTourPlaying(false); bar.hidden = true; if (spot) spot.classList.remove('spotlight'); }
  $('#tour-start').addEventListener('click', tourStart);
  $$('[data-action="tour"]').forEach(b => b.addEventListener('click', tourStart));
  $('#tour-next').addEventListener('click', () => tourGo(tIdx + 1));
  $('#tour-prev').addEventListener('click', () => tourGo(tIdx - 1));
  $('#tour-play').addEventListener('click', () => setTourPlaying(!tPlaying));
  $('#tour-close').addEventListener('click', tourEnd);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !bar.hidden && !(dlg.open)) tourEnd(); });

  window.LogosAtlas = { openVerse, selectPlace, tourGo };
})();
