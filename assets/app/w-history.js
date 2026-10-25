/* Widgets for Part III, History: the atlas map, the Gospels side by side, dating methods, deep time, readings of Genesis,
   the Christian year and the rhythms of time. */
(() => {
  'use strict';
  const { W, $, $$, esc, rich, link, refBtn, chips, bindChips, svg, yr } = A;
  const HUE = { gold: 'var(--gold)', lapis: 'var(--lapis)', vermilion: 'var(--vermilion)', verdigris: 'var(--verdigris)', ochre: 'var(--ochre)', murex: 'var(--murex)', ink: 'var(--ink-soft)' };

  /* ── The atlas map ──────────────────────────────────────── */
  W.map = el => {
    const G = window.GEO, C38 = Math.cos(38 * Math.PI / 180);
    const proj = (lon, lat) => [(lon + 12) * 10 * C38, (62 - lat) * 10];
    const HOME = { x: 8, y: 92, w: 500, h: 300 };
    const MAJOR = new Set(['jerusalem', 'rome', 'athens', 'alexandria', 'constantinople', 'antioch', 'babylon', 'wittenberg', 'paris', 'london', 'ephesus', 'mecca', 'varanasi', 'qufu']);
    const layerOn = Object.fromEntries(Object.keys(LAYERS).map(k => [k, true]));
    let vb = { ...HOME }, year = 2025, sel = null, hover = null, journeys = false, playing = null;
    el.innerHTML = `<div class="chips" id="mp-layers" style="margin-bottom:10px">${Object.entries(LAYERS).map(([k, l]) => `<button type="button" class="chip" data-layer="${k}" aria-pressed="true"><span class="swatch" style="--c:${HUE[l.hue]}"></span>${esc(l.label)}</button>`).join('')}<button type="button" class="chip" id="mp-journeys" aria-pressed="false">Paul’s journeys</button></div>
      <div class="map-wrap" id="mp-wrap"><svg id="mp-svg" role="img" aria-label="Map of places in the history of Christianity and the traditions it met"></svg>
        <div class="map-tools"><button type="button" class="btn" id="mp-in" aria-label="Zoom in">+</button><button type="button" class="btn" id="mp-out" aria-label="Zoom out">−</button><button type="button" class="btn" id="mp-home" aria-label="Reset view">⌂</button></div></div>
      <div class="timebar"><button type="button" class="btn icon-btn" id="mp-play" aria-label="Play through time"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></button><input type="range" id="mp-year" min="-2600" max="2025" step="1" value="2025" aria-label="Year"><span class="yr" id="mp-yr">All eras</span></div>
      <div class="chips" id="mp-off" style="margin-top:8px"><span class="note" style="align-self:center">Beyond the map:</span>${OFFMAP.map(p => `<button type="button" class="chip" data-off="${p.id}">${esc(p.name)}</button>`).join('')}</div>
      <div class="panel place-card" id="mp-card" style="margin-top:12px"></div>
      <p class="note" style="margin-top:8px">Drag to pan; pinch, double-click or use the buttons to zoom. Places appear from the date of their first event; a ring marks places with events near the selected year. Coastlines: Natural Earth.</p>`;
    const S = $('#mp-svg', el), wrap = $('#mp-wrap', el);
    const g = svg('g', {}, S);
    svg('rect', { x: -400, y: -400, width: G.w + 800, height: G.h + 800, class: 'map-sea' }, g);
    for (let lon = -10; lon <= 120; lon += 10) { const [x] = proj(lon, 0); svg('line', { x1: x, x2: x, y1: 0, y2: G.h, class: 'map-grat' }, g); }
    for (let lat = 10; lat <= 60; lat += 10) { const [, y] = proj(0, lat); svg('line', { x1: 0, x2: G.w, y1: y, y2: y, class: 'map-grat' }, g); }
    svg('path', { d: G.land, class: 'map-land' }, g);
    if (G.lakes) svg('path', { d: G.lakes, class: 'map-lake' }, g);
    if (G.rivers) Object.values(typeof G.rivers === 'string' ? { r: G.rivers } : G.rivers).forEach(d => svg('path', { d, class: 'map-river' }, g));
    const seaG = svg('g', {}, g);
    [['Mediterranean Sea', 18, 34.6], ['Black Sea', 34, 43.3], ['Red Sea', 38.2, 20.5], ['Persian Gulf', 51.5, 27.2], ['Arabian Sea', 63, 15], ['Caspian', 50.6, 41.8], ['Atlantic', -9, 44], ['Bay of Bengal', 88, 15]].forEach(([t, lon, lat]) => { const [x, y] = proj(lon, lat); svg('text', { x, y, class: 'map-sea-label', 'text-anchor': 'middle' }, seaG).textContent = t; });
    const jG = svg('g', {}, g), jC = ['var(--vermilion)', 'var(--lapis)', 'var(--verdigris)', 'var(--murex)'];
    JOURNEYS.forEach((j, i) => { const p = svg('path', { d: j.pts.map(([lon, lat], k) => { const [x, y] = proj(lon, lat); return (k ? 'L' : 'M') + x.toFixed(1) + ',' + y.toFixed(1); }).join(''), class: 'journey', stroke: jC[i] }, jG); svg('title', {}, p).textContent = j.name; });
    const mG = svg('g', {}, g);
    const markers = PLACES.map(p => {
      const [x, y] = proj(p.lon, p.lat), hue = HUE[LAYERS[p.layer].hue];
      const m = svg('g', { class: 'marker', tabindex: 0, role: 'button', 'aria-label': p.name }, mG);
      const halo = svg('circle', { cx: x, cy: y, r: 7, class: 'halo', stroke: hue }, m);
      const dot = svg('circle', { cx: x, cy: y, r: 5, class: 'dot', fill: hue }, m);
      const label = svg('text', { x: x + 8, y: y + 4 }, m); label.textContent = p.name;
      m.addEventListener('click', () => { if (!moved) select(p.id); });
      m.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(p.id); } });
      m.addEventListener('pointerenter', () => { hover = p.id; draw(); });
      m.addEventListener('pointerleave', () => { hover = null; draw(); });
      return { p, m, halo, dot, label, x, y, first: Math.min(...p.events.map(e => e.y)) };
    });
    const all = Object.fromEntries(PLACES.concat(OFFMAP).map(p => [p.id, p]));
    const fit = v => {
      const r = wrap.getBoundingClientRect(); if (!r.width || !r.height) return v;
      const a = r.width / r.height, cx = v.x + v.w / 2, cy = v.y + v.h / 2;
      let w = v.w, h = v.h; if (w / h > a) h = w / a; else w = h * a;
      w = Math.min(Math.max(w, 50), G.w * 1.1); h = w / a;
      return { x: Math.min(Math.max(cx - w / 2, -60), G.w - w + 60), y: Math.min(Math.max(cy - h / 2, -60), G.h - h + 60), w, h };
    };
    const setView = v => { vb = fit(v); S.setAttribute('viewBox', `${vb.x} ${vb.y} ${vb.w} ${vb.h}`); draw(); };
    function draw() {
      const r = S.getBoundingClientRect(), ppu = r.width ? r.width / vb.w : 1, k = 1 / ppu;
      const zoomed = vb.w < 230, win = year < 0 ? 180 : year < 1000 ? 70 : 45;
      markers.forEach(o => {
        const vis = layerOn[o.p.layer] && o.first <= year;
        o.m.style.display = vis ? '' : 'none'; if (!vis) return;
        o.dot.setAttribute('r', (o.p.id === sel ? 7 : 5) * k); o.halo.setAttribute('r', 8 * k);
        o.label.setAttribute('x', o.x + 9 * k); o.label.setAttribute('y', o.y + 4 * k);
        o.label.style.fontSize = (12 * k) + 'px'; o.label.style.strokeWidth = (3 * k) + 'px';
        o.label.style.display = (zoomed || (ppu > 1.1 && MAJOR.has(o.p.id)) || o.p.id === sel || o.p.id === hover) ? '' : 'none';
        o.m.classList.toggle('sel', o.p.id === sel);
        o.m.classList.toggle('live', year < 2025 && o.p.events.some(e => Math.abs(e.y - year) <= win));
      });
      $$('text', seaG).forEach(t => { t.style.fontSize = (13 * k) + 'px'; });
      jG.style.display = journeys ? '' : 'none';
      $('#mp-yr', el).textContent = year >= 2025 ? 'All eras' : yr(year);
    }
    function select(id, fly) {
      sel = id; const p = all[id]; if (!p) return;
      const l = LAYERS[p.layer];
      $('#mp-card', el).innerHTML = `<p class="eyebrow" style="color:${HUE[l.hue]}">${esc(l.label)}</p><h3>${esc(p.name)}</h3><ul class="events">${p.events.slice().sort((a, b) => a.y - b.y).map(e => `<li class="${e.y > year ? 'later' : ''}"><span class="when">${yr(e.y)}</span><span>${rich(e.x)}</span></li>`).join('')}</ul>`;
      if (fly && p.lon != null) { const [x, y] = proj(p.lon, p.lat); setView({ x: x - 150, y: y - 90, w: 300, h: 180 }); } else draw();
    }
    A.mapSelect = (id, fly) => select(id, fly);
    $('#mp-layers', el).addEventListener('click', e => {
      const b = e.target.closest('[data-layer]');
      if (b) { layerOn[b.dataset.layer] = !layerOn[b.dataset.layer]; b.setAttribute('aria-pressed', String(layerOn[b.dataset.layer])); draw(); }
    });
    $('#mp-journeys', el).addEventListener('click', e => { journeys = !journeys; e.currentTarget.setAttribute('aria-pressed', String(journeys)); if (journeys) { setYear(2025); setView({ x: 150, y: 150, w: 260, h: 150 }); } else draw(); });
    $('#mp-off', el).addEventListener('click', e => { const b = e.target.closest('[data-off]'); if (b) select(b.dataset.off); });
    const range = $('#mp-year', el);
    const setYear = y => { year = Math.round(y); range.value = year; draw(); if (sel) select(sel); };
    range.addEventListener('input', () => setYear(+range.value));
    const playBtn = $('#mp-play', el), PLAY = playBtn.innerHTML, PAUSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>';
    const stop = () => { if (playing) cancelAnimationFrame(playing); playing = null; playBtn.innerHTML = PLAY; };
    A.stopMap = stop;
    playBtn.addEventListener('click', () => {
      if (playing) return stop();
      if (year >= 2025) setYear(-2600);
      playBtn.innerHTML = PAUSE; let last = performance.now();
      const step = now => {
        const dt = Math.min(now - last, 100); last = now;
        const ny = year + (year < 0 ? 90 : year < 1500 ? 45 : 22) * dt / 1000;
        if (ny >= 2025) { setYear(2025); return stop(); }
        year = ny; range.value = Math.round(ny); draw();
        playing = requestAnimationFrame(step);
      };
      playing = requestAnimationFrame(step);
    });
    let moved = false, drag = null, pinch = null; const ptr = new Map();
    const toSvg = (cx, cy) => { const r = S.getBoundingClientRect(); return [vb.x + (cx - r.left) / r.width * vb.w, vb.y + (cy - r.top) / r.height * vb.h]; };
    const zoomAt = (f, cx, cy) => { const [sx, sy] = cx == null ? [vb.x + vb.w / 2, vb.y + vb.h / 2] : toSvg(cx, cy); setView({ x: sx - (sx - vb.x) * f, y: sy - (sy - vb.y) * f, w: vb.w * f, h: vb.h * f }); };
    S.addEventListener('pointerdown', e => {
      ptr.set(e.pointerId, [e.clientX, e.clientY]); moved = false;
      if (ptr.size === 1) drag = { x: e.clientX, y: e.clientY, vb: { ...vb } };
      if (ptr.size === 2) { const [a, b] = [...ptr.values()]; pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), vb: { ...vb }, c: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] }; }
    });
    S.addEventListener('pointermove', e => {
      if (!ptr.has(e.pointerId)) return;
      ptr.set(e.pointerId, [e.clientX, e.clientY]);
      if (ptr.size === 2 && pinch) { const [a, b] = [...ptr.values()]; vb = { ...pinch.vb }; zoomAt(pinch.d / Math.hypot(a[0] - b[0], a[1] - b[1]), pinch.c[0], pinch.c[1]); moved = true; return; }
      if (drag) {
        const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
        if (!moved && Math.hypot(dx, dy) < 5) return;
        if (!moved) { moved = true; S.setPointerCapture(e.pointerId); S.classList.add('dragging'); }
        const r = S.getBoundingClientRect();
        setView({ ...drag.vb, x: drag.vb.x - dx / r.width * drag.vb.w, y: drag.vb.y - dy / r.height * drag.vb.h });
      }
    });
    const end = e => { ptr.delete(e.pointerId); if (ptr.size < 2) pinch = null; if (!ptr.size) { drag = null; S.classList.remove('dragging'); setTimeout(() => { moved = false; }, 0); } };
    S.addEventListener('pointerup', end); S.addEventListener('pointercancel', end);
    S.addEventListener('wheel', e => { if (!(e.ctrlKey || e.metaKey)) return; e.preventDefault(); zoomAt(e.deltaY > 0 ? 1.15 : 1 / 1.15, e.clientX, e.clientY); }, { passive: false });
    S.addEventListener('dblclick', e => zoomAt(0.6, e.clientX, e.clientY));
    $('#mp-in', el).addEventListener('click', () => zoomAt(0.7));
    $('#mp-out', el).addEventListener('click', () => zoomAt(1 / 0.7));
    $('#mp-home', el).addEventListener('click', () => setView(HOME));
    if ('ResizeObserver' in window) new ResizeObserver(() => setView(vb)).observe(wrap);
    requestAnimationFrame(() => { setView(HOME); select('jerusalem'); });
  };

  /* ── The Gospels side by side ───────────────────────────── */
  W.gospels = el => {
    el.innerHTML = `<div class="chips" id="gs-pick">${chips(SYNOPTIC.map(s => [s.id, esc(s.n)]), SYNOPTIC[0].id)}</div><div id="gs-out" style="margin-top:12px"></div>`;
    const show = id => {
      const s = SYNOPTIC.find(x => x.id === id);
      $('#gs-out', el).innerHTML = `<div class="grid-cards">${s.refs.map(r => { const e = BIBLE[r]; return `<div class="card"><p class="meta">${refBtn(r)}</p><p>${esc(e ? (e.tr.KJV || '') : '')}</p>${e && e.tr.BSB ? `<p class="note">BSB: ${esc(e.tr.BSB)}</p>` : ''}</div>`; }).join('')}</div>
        <div class="blk-wrap" style="margin-top:14px">${s.notes.map(x => `<div class="blk" data-k="p"><p>${rich(x)}</p></div>`).join('')}</div>`;
    };
    bindChips($('#gs-pick', el), show); show(SYNOPTIC[0].id);
  };

  /* ── How the past is dated ──────────────────────────────── */
  W.methods = el => {
    el.innerHTML = `<div class="grid-cards">${TIME_METHODS.map(m => `<div class="card"><h3>${esc(m.n)}</h3><p class="meta">${esc(m.range)} · precision: ${esc(m.prec)}</p><p>${rich(m.x)}</p></div>`).join('')}</div>`;
  };

  /* ── Deep time on a logarithmic scale ───────────────────── */
  W.deep = el => {
    const cats = Object.keys(DEEP_CATS), C = { cosmos: 'var(--s4)', earth: 'var(--s3)', human: 'var(--s2)', bible: 'var(--s1)', chrono: 'var(--s5)' };
    const W0 = 760, left = 120, right = 20, laneH = 34, top = 18;
    const lmin = Math.log10(50), lmax = Math.log10(2e10);
    const x = ya => left + (lmax - Math.log10(ya)) / (lmax - lmin) * (W0 - left - right);
    const H = top + cats.length * laneH + 30;
    const ticks = [1e10, 1e9, 1e8, 1e7, 1e6, 1e5, 1e4, 1e3, 1e2];
    const fmt = v => v >= 1e9 ? v / 1e9 + ' billion' : v >= 1e6 ? v / 1e6 + ' million' : v.toLocaleString();
    el.innerHTML = `<div class="hscroll"><svg class="axis-svg" viewBox="0 0 ${W0} ${H}" style="min-width:640px" role="group" aria-label="Deep time, years ago, logarithmic scale">
      ${ticks.map(t => `<line class="tick" x1="${x(t)}" x2="${x(t)}" y1="${top - 6}" y2="${H - 24}"/><text x="${x(t)}" y="${H - 8}" text-anchor="middle">${fmt(t)}</text>`).join('')}
      ${cats.map((c, i) => `<text x="${left - 12}" y="${top + i * laneH + laneH / 2 + 4}" text-anchor="end">${esc(DEEP_CATS[c])}</text>`).join('')}
      ${DEEP_TIME.map((d, k) => { const i = cats.indexOf(d.cat); return `<g class="pt" data-k="${k}" tabindex="0" role="button" aria-label="${esc(d.n)}"><circle cx="${x(d.ya)}" cy="${top + i * laneH + laneH / 2}" r="7" fill="${C[d.cat]}"/></g>`; }).join('')}
    </svg></div><p class="note" style="margin-top:6px">Years before the present, on a logarithmic scale: each step left is ten times further back.</p>
    <div class="panel" id="dp-card" style="margin-top:10px"></div><p class="note" style="margin-top:8px">${rich(DEEP_NOTE)}</p>`;
    const show = k => {
      const d = DEEP_TIME[k];
      $$('.pt', el).forEach(p => p.classList.toggle('sel', +p.dataset.k === k));
      $('#dp-card', el).innerHTML = `<p class="eyebrow" style="color:${C[d.cat]}">${esc(DEEP_CATS[d.cat])} · about ${fmt(d.ya)} years ago</p><h3>${rich(d.n)}</h3>${d.how ? `<dl class="kv"><dt>How we know</dt><dd>${rich(d.how)}</dd>${d.found && d.found !== '—' ? `<dt>Discovered</dt><dd>${rich(d.found)}</dd>` : ''}</dl>` : ''}`;
    };
    el.addEventListener('click', e => { const p = e.target.closest('.pt'); if (p) show(+p.dataset.k); });
    el.addEventListener('keydown', e => { const p = e.target.closest('.pt'); if (p && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); show(+p.dataset.k); } });
    show(DEEP_TIME.findIndex(d => d.cat === 'bible'));
  };

  /* ── Readings of the days of Genesis ────────────────────── */
  W.readings = el => {
    el.innerHTML = `<div class="split"><div class="picklist" id="rd-pick">${CREATION_READINGS.map((r, i) => `<button type="button" data-id="${i}" aria-selected="${i === 0}">${esc(r.n)}</button>`).join('')}</div><div class="panel" id="rd-card"></div></div>`;
    const show = i => {
      const r = CREATION_READINGS[+i];
      $$('#rd-pick [data-id]', el).forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === String(i))));
      $('#rd-card', el).innerHTML = `<h3>${esc(r.n)}</h3><p class="meta">${rich(r.who)}</p><h4>The case for it</h4><p>${rich(r.pro)}</p><h4>The main difficulty</h4><p>${rich(r.con)}</p>`;
    };
    bindChips($('#rd-pick', el), show); show(0);
  };

  /* ── The Christian year as a wheel ──────────────────────── */
  W.year = el => {
    const LY = LITURGICAL_YEAR, S = LY.seasons;
    const t0 = Date.parse(S[0].from), t1 = Date.parse(S[S.length - 1].to) + 864e5, span = t1 - t0;
    const COL = { violet: 'var(--murex)', white: 'var(--gold-leaf)', green: 'var(--verdigris)', red: 'var(--vermilion)', rose: 'var(--s5)' };
    const ang = t => (t - t0) / span * 2 * Math.PI - Math.PI / 2;
    const P = (a, r) => [200 + r * Math.cos(a), 200 + r * Math.sin(a)];
    const arc = (a0, a1, r0, r1) => { const lg = a1 - a0 > Math.PI ? 1 : 0, [x0, y0] = P(a0, r1), [x1, y1] = P(a1, r1), [x2, y2] = P(a1, r0), [x3, y3] = P(a0, r0); return `M${x0},${y0}A${r1},${r1} 0 ${lg} 1 ${x1},${y1}L${x2},${y2}A${r0},${r0} 0 ${lg} 0 ${x3},${y3}Z`; };
    const now = Date.now(), inYear = now >= t0 && now < t1;
    const today = inYear ? S.findIndex(s => now >= Date.parse(s.from) && now < Date.parse(s.to) + 864e5) : -1;
    const [tx, ty] = P(ang(now), 172);
    el.innerHTML = `<div class="year-wrap"><svg viewBox="0 0 400 400" role="group" aria-label="${esc(LY.label)}">
      ${S.map((s, i) => `<path class="seg" data-i="${i}" d="${arc(ang(Date.parse(s.from)), ang(Date.parse(s.to) + 864e5), 92, 160)}" fill="${COL[s.c] || 'var(--rule)'}" tabindex="0" role="button" aria-label="${esc(s.n)}"/>`).join('')}
      ${inYear ? `<circle cx="${tx}" cy="${ty}" r="6" fill="var(--ink)"/><text x="${tx}" y="${ty - 10}" text-anchor="middle" style="font-size:11px">today</text>` : ''}
      <text x="200" y="196" text-anchor="middle" style="font-family:var(--f-display);font-size:20px">The Christian year</text><text x="200" y="216" text-anchor="middle" style="font-size:11px;fill:var(--ink-soft)">${esc(LY.label.replace('Western Christian year ', ''))}</text></svg>
      <div class="panel" id="yr-card"></div></div>
      <div class="blk-wrap" style="margin-top:14px">${LY.facts.map(x => `<div class="blk" data-k="p"><p>${rich(x)}</p></div>`).join('')}</div>`;
    const fmt = d => new Date(d + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    const show = i => {
      const s = S[i];
      $$('.seg', el).forEach(p => p.classList.toggle('sel', +p.dataset.i === i));
      $('#yr-card', el).innerHTML = `<p class="eyebrow"><span class="swatch" style="--c:${COL[s.c]}"></span>Liturgical colour: ${esc(s.c)}</p><h3>${esc(s.n)}</h3><p class="meta">${fmt(s.from)} – ${fmt(s.to)}</p><p style="margin-top:8px">${rich(s.x)}</p>${i === today ? '<p class="note" style="margin-top:8px">The current season.</p>' : ''}`;
    };
    el.addEventListener('click', e => { const p = e.target.closest('.seg'); if (p) show(+p.dataset.i); });
    el.addEventListener('keydown', e => { const p = e.target.closest('.seg'); if (p && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); show(+p.dataset.i); } });
    show(today >= 0 ? today : 0);
  };

  /* ── Rhythms: day, week, year, sabbath years, a life ───── */
  W.rhythms = el => {
    el.innerHTML = `<div class="chips" id="rh-pick">${chips(RHYTHMS.map((r, i) => [String(i), esc(r.n)]), '0')}</div><div class="panel" id="rh-card" style="margin-top:12px"></div>`;
    const show = i => {
      const r = RHYTHMS[+i];
      $('#rh-card', el).innerHTML = `<h3>${esc(r.n)} ${r.v ? refBtn(r.v) : ''}</h3><p>${rich(r.x)}</p><h4>A practice</h4><p>${rich(r.practice)}</p>${r.evidence ? `<h4>What research and history add</h4><p>${rich(r.evidence)}</p>` : ''}`;
    };
    bindChips($('#rh-pick', el), show); show('0');
  };
})();
