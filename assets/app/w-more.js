/* Widgets for the v3.1 units: the great stories, the hell and miracles references, and the parallels table. */
(() => {
  'use strict';
  const { W, $, $$, esc, rich, link, refBtn, chips, bindChips } = A;

  W.stories = (el, u, params) => {
    const eras = Object.fromEntries(STORY_ERAS.map(([k, n, s]) => [k, [n, s]]));
    const count = {};
    STORIES.forEach(s => (s.vt || []).forEach(v => { count[v] = (count[v] || 0) + 1; }));
    const virtues = Object.keys(count).sort((a, b) => count[b] - count[a] || a.localeCompare(b));
    el.innerHTML = `<div class="chips scroll" id="st-era">${chips([['all', 'All']].concat(STORY_ERAS.map(([k, n]) => [k, esc(n)])), 'all')}</div>
      <div class="story-tools"><label class="note">Virtue <select id="st-virtue"><option value="">any</option>${virtues.map(v => `<option value="${esc(v)}">${esc(v)} (${count[v]})</option>`).join('')}</select></label>
        <input type="search" id="st-q" placeholder="Search the stories" aria-label="Search the stories"><span class="note" id="st-n"></span></div>
      <div class="panel" id="st-card" hidden></div>
      <div class="grid-cards" id="st-grid"></div>`;
    let era = 'all', virtue = '', q = '';
    const grid = $('#st-grid', el), card = $('#st-card', el);
    const show = id => {
      const s = STORIES.find(x => x.id === id); if (!s) return;
      card.hidden = false;
      card.innerHTML = `<p class="eyebrow">${esc(eras[s.era][0])} · ${esc(s.p)}</p><h3>${esc(s.t)}</h3>
        <h4>What happens</h4><p>${rich(s.x)}</p><h4>What it teaches</h4><p>${rich(s.m)}</p>
        ${s.vt && s.vt.length ? `<h4>Virtues</h4><div class="chips">${s.vt.map(v => `<button type="button" class="chip" data-virtue="${esc(v)}">${esc(v)}</button>`).join('')}</div>` : ''}
        ${s.w && s.w.length ? `<h4>Warns against</h4><div class="chips">${s.w.map(v => `<span class="chip" style="cursor:default">${esc(v)}</span>`).join('')}</div>` : ''}
        ${s.hard ? `<h4>A hard story: how readers have wrestled with it</h4><p>${rich(s.hard)}</p>` : ''}
        ${s.v ? `<p style="margin-top:12px">${refBtn(s.v)} <span class="note">Key verse, in the original and in translation</span></p>` : ''}`;
      $$('.card', grid).forEach(c => c.setAttribute('aria-selected', String(c.dataset.id === id)));
      card.scrollIntoView({ block: 'nearest', behavior: A.reduceMotion() ? 'auto' : 'smooth' });
    };
    const render = () => {
      const re = q ? new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') : null;
      const list = STORIES.filter(s => (era === 'all' || s.era === era) && (!virtue || (s.vt || []).includes(virtue)) && (!re || re.test([s.t, s.p, s.x, s.m, (s.vt || []).join(' '), (s.w || []).join(' ')].join(' '))));
      $('#st-n', el).textContent = `${list.length} of ${STORIES.length} stories`;
      grid.innerHTML = list.map(s => `<button type="button" class="card btnlike" data-id="${s.id}" aria-selected="false"><span class="meta">${esc(eras[s.era][0])} · ${esc(s.p)}</span><h3>${esc(s.t)}${s.hard ? ' <span class="meta" title="A morally difficult story">· hard</span>' : ''}</h3><span>${esc(s.m)}</span></button>`).join('') || '<p class="note">No stories match.</p>';
    };
    bindChips($('#st-era', el), id => { era = id; render(); });
    $('#st-virtue', el).addEventListener('change', e => { virtue = e.target.value; render(); });
    $('#st-q', el).addEventListener('input', e => { q = e.target.value.trim(); render(); });
    grid.addEventListener('click', e => { const c = e.target.closest('[data-id]'); if (c) show(c.dataset.id); });
    card.addEventListener('click', e => { const b = e.target.closest('[data-virtue]'); if (b) { virtue = b.dataset.virtue; $('#st-virtue', el).value = virtue; era = 'all'; $$('#st-era [data-id]', el).forEach(x => x.setAttribute('aria-selected', String(x.dataset.id === 'all'))); render(); } });
    render();
    if (params && params.get('s')) show(params.get('s'));
  };
})();

(() => {
  'use strict';
  const { W, $, esc, rich, chips, bindChips } = A;
  const V = { found: ['Found in the sources', 'var(--verdigris)'], partial: ['Partly supported', 'var(--gold)'], unsupported: ['Not found in the ancient sources', 'var(--vermilion)'] };
  W.parallels = el => {
    el.innerHTML = `<div class="chips" id="pl-g">${chips([['all', 'All'], ['twelve', 'Twelve'], ['betrayal', 'Betrayal']], 'all')}</div>
      <div class="tbl-wrap" style="margin-top:12px"><table class="tbl"><thead><tr><th>Claimed parallel</th><th>Verdict</th><th>What the sources show</th></tr></thead><tbody id="pl-rows"></tbody></table></div>`;
    const show = g => { $('#pl-rows', el).innerHTML = PARALLELS.filter(p => g === 'all' || p.g === g).map(p => `<tr><td>${esc(p.n)}</td><td style="white-space:nowrap;font-family:var(--f-ui);font-size:var(--s-0);color:${V[p.v][1]}">${V[p.v][0]}</td><td style="font-weight:400">${rich(p.x)}</td></tr>`).join(''); };
    bindChips($('#pl-g', el), show); show('all');
  };
})();

(() => {
  'use strict';
  const { W, $, esc, rich, link, refBtn, chips, bindChips } = A;
  W.miracles = (el, u, params) => {
    const ST = window.MIRACLE_STATUS;
    el.innerHTML = `<div class="chips" id="mr-cat">${chips([['all', 'All']].concat(MIRACLE_CATS.map(([k, n]) => [k, esc(n)])), 'all')}</div>
      <p class="note" style="margin-top:8px">Each card says what the passage reports and, for a stated way of reading it, what ordinary physics, chemistry or biology would not produce. The narratives rarely describe a mechanism and the atlas does not supply one; this is not a judgement on whether the event happened. Open a card for the wording, the proposed explanations with their standing, how the story has been read, and what remains unknown.</p>
      <div class="grid-cards" id="mr-out" style="margin-top:12px"></div>`;
    const card = (m, i) => `<div class="card" id="mr-${i}"><p class="meta">${refBtn(m.v)}</p><h3>${esc(m.n)}</h3><p>${rich(m.x)}</p>
        <p class="note" style="margin-top:6px"><b>The difficulty:</b> ${rich(m.diff)}</p>
        <details${params && params.get('m') === String(i) ? ' open' : ''}><summary class="note">Wording, explanations, readings, unknowns</summary>
          <p class="note"><b>Wording and context:</b> ${rich(m.ctx)}</p>
          <p class="note"><b>Proposed explanations:</b></p><ul class="note">${m.prop.map(([t, s, url]) => `<li><i>${esc(ST[s] || s)}:</i> ${rich(t)}${url ? ' ' + link('study', url) : ''}</li>`).join('')}</ul>
          <p class="note"><b>How it has been read:</b> ${rich(m.theo)}</p>
          <p class="note"><b>What remains unknown:</b> ${rich(m.unk)}</p></details></div>`;
    const show = c => { $('#mr-out', el).innerHTML = MIRACLES.map((m, i) => c === 'all' || m.cat === c ? card(m, i) : '').join(''); };
    bindChips($('#mr-cat', el), show); show('all');
    const m = params && params.get('m');
    if (m && $('#mr-' + m, el)) setTimeout(() => { const t = $('#mr-' + m, el); t.scrollIntoView({ block: 'center' }); t.classList.add('spotlight'); setTimeout(() => t.classList.remove('spotlight'), 2500); }, 80);
  };
})();

(() => {
  'use strict';
  const { W, esc, rich, citeBtn } = A;
  const KIND = { error: 'Factual error', overreach: 'Stated too widely', label: 'Misleading label or link', provenance: 'Provenance conflated', method: 'Framing of the claim' };
  W.corrections = el => {
    el.innerHTML = `<div class="corrections">${(window.CORRECTIONS || []).map(c => `<article class="card corr"><p class="meta">${esc(c.d)} · ${esc(KIND[c.kind] || c.kind)} · <a href="#/${esc(c.unit)}">${esc(A.byId[c.unit] ? A.byId[c.unit].title : c.unit)}</a></p>
      <h3>${esc(c.what)}</h3>
      <dl class="kv"><dt>Before</dt><dd>${rich(c.before)}</dd><dt>Now</dt><dd>${rich(c.after)}</dd><dt>Why</dt><dd>${rich(c.why)}</dd>${c.src && c.src.length ? `<dt>Sources</dt><dd>${c.src.map(citeBtn).join(' ')}</dd>` : ''}</dl></article>`).join('')}</div>`;
  };
})();
