/* Widgets for Parts VI and VII: the Great Conversation, Peterson, critics, the ancient and modern mind, impact,
   the inner life, virtues, whole-life health, the examen and study tools. */
(() => {
  'use strict';
  const { W, $, $$, esc, rich, link, refBtn, chips, bindChips, yr } = A;

  /* ── The Great Conversation: an arc diagram of who drew on whom ── */
  W.thinkers = el => {
    const T = THINKERS.slice().sort((a, b) => a.y - b.y), idx = Object.fromEntries(T.map((t, i) => [t.id, i]));
    const rowH = 24, top = 14, gutter = 150, H = top * 2 + T.length * rowH;
    const yOf = i => top + i * rowH + rowH / 2;
    const edges = T.flatMap(t => (t.to || []).filter(id => id in idx).map(id => [t.id, id]));
    const eras = [['Ancient', -600, 30], ['Early Church', 30, 600], ['Middle Ages', 600, 1500], ['Reformation and early modern', 1500, 1800], ['Modern', 1800, 2100]];
    const rowsIn = (a, b) => T.map((t, i) => [t, i]).filter(([t]) => t.y >= a && t.y < b).map(([, i]) => i);
    el.innerHTML = `<div class="split split-even"><div class="hscroll" style="max-height:620px;overflow-y:auto"><svg class="thinker-svg" viewBox="0 0 480 ${H}" style="min-width:420px" role="group" aria-label="Writers in chronological order with lines of influence">
      ${eras.map(([n, a, b]) => { const r = rowsIn(a, b); if (!r.length) return ''; const y0 = yOf(r[0]) - rowH / 2, y1 = yOf(r[r.length - 1]) + rowH / 2; return `<g class="axis"><rect x="0" y="${y0}" width="480" height="${y1 - y0}" fill="${r[0] % 2 ? 'transparent' : 'var(--page-2)'}" opacity="0.5"/><text x="474" y="${y0 + 12}" text-anchor="end">${esc(n)}</text></g>`; }).join('')}
      ${edges.map(([a, b]) => { const y1 = yOf(idx[a]), y2 = yOf(idx[b]), r = Math.min(gutter - 30, Math.abs(y2 - y1) / 2); return `<path class="edge" data-a="${a}" data-b="${b}" d="M${gutter},${y1} C${gutter - r},${y1} ${gutter - r},${y2} ${gutter},${y2}"/>`; }).join('')}
      ${T.map((t, i) => `<g class="node" data-id="${t.id}" tabindex="0" role="button" aria-label="${esc(t.n)}"><rect x="${gutter - 4}" y="${yOf(i) - 10}" width="${480 - gutter - 60}" height="20" fill="transparent"/><circle cx="${gutter}" cy="${yOf(i)}" r="4.5" fill="var(--vermilion)"/><text x="${gutter + 10}" y="${yOf(i) + 4}">${esc(t.n)}<tspan dx="6" style="fill:var(--ink-faint);font-weight:400">${t.y < 0 ? -t.y + ' BC' : t.y}</tspan></text></g>`).join('')}
    </svg></div><div class="panel" id="tk-card" style="position:sticky;top:calc(var(--top) + 12px)"></div></div>
    <p class="note" style="margin-top:8px">Arcs join each writer to those they influenced, as commonly traced by historians of ideas; the list is selective. Dates are of a writer’s chief work or floruit.</p>`;
    const name = id => { const t = T[idx[id]]; return t ? `<button type="button" class="chip" data-go="${id}">${esc(t.n)}</button>` : ''; };
    const show = id => {
      const t = T[idx[id]]; if (!t) return;
      const from = edges.filter(e => e[1] === id).map(e => e[0]), to = (t.to || []).filter(x => x in idx);
      $$('.node', el).forEach(n => { const k = n.dataset.id; n.classList.toggle('sel', k === id); n.classList.toggle('rel', from.includes(k) || to.includes(k)); });
      $$('.edge', el).forEach(p => p.classList.toggle('on', p.dataset.a === id || p.dataset.b === id));
      $('#tk-card', el).innerHTML = `<p class="eyebrow">${yr(t.y)}</p><h3>${esc(t.n)}</h3><p class="meta">${rich(t.w)}</p><p style="margin-top:8px">${rich(t.x)}</p>
        ${from.length ? `<h4>Drew on</h4><div class="chips">${from.map(name).join('')}</div>` : ''}${to.length ? `<h4>Influenced</h4><div class="chips">${to.map(name).join('')}</div>` : ''}
        <p class="linkrow" style="margin-top:12px">${link('Biography', t.wiki)}${t.read ? link('Read: ' + t.read[0], t.read[1]) : ''}</p>`;
    };
    el.addEventListener('click', e => { const n = e.target.closest('.node,[data-go]'); if (n) show(n.dataset.id || n.dataset.go); });
    el.addEventListener('keydown', e => { const n = e.target.closest('.node'); if (n && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); show(n.dataset.id); } });
    show(idx.augustine != null ? 'augustine' : T[0].id);
  };

  W.peterson = el => {
    const P = PETERSON;
    el.innerHTML = `<div class="grid-cards">${P.elements.map(e => `<div class="card"><p class="eyebrow">${esc(e.figure)}</p><h3>${esc(e.name)}</h3><p>${rich(e.x)}</p><p>${refBtn(e.verse)}</p></div>`).join('')}</div>
      <h4 class="eyebrow" style="margin:18px 0 8px">The cycle of renewal, as Peterson describes it</h4>
      <ol class="chips" style="list-style:none;padding:0;margin:0;counter-reset:c">${P.cycle.map((c, i) => `<li class="chip" style="white-space:normal">${i + 1}. ${rich(c)}${i < P.cycle.length - 1 ? ' →' : ' ↺'}</li>`).join('')}</ol>`;
  };

  W.critics = el => {
    el.innerHTML = `<div class="split"><div class="picklist" id="cr-pick">${CRITICS.map((c, i) => `<button type="button" data-id="${i}" aria-selected="${i === 0}">${esc(c.n)}<span class="sub">${yr(c.y)}</span></button>`).join('')}</div><div class="panel" id="cr-card"></div></div>`;
    const show = i => {
      const c = CRITICS[+i];
      $$('#cr-pick [data-id]', el).forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === String(i))));
      $('#cr-card', el).innerHTML = `<p class="eyebrow">${yr(c.y)}</p><h3>${esc(c.n)}</h3><p class="meta">${rich(c.w)}</p>
        <h4>The criticism</h4><p>${rich(c.crit)}</p><h4>What it contributed</h4><p>${rich(c.gift)}</p><h4>Christian replies</h4><p>${rich(c.reply)}${c.n.startsWith('Robert G.') ? ' <a href="#/ingersoll">Open the unit</a>' : ''}</p>
        <p class="linkrow" style="margin-top:12px">${link('Biography', c.wiki)}${c.read ? link(c.read[0], c.read[1]) : ''}</p>`;
    };
    bindChips($('#cr-pick', el), show); show(0);
  };

  W.thennow = el => {
    el.innerHTML = `<div class="grid-cards">${THEN_NOW.map(t => `<div class="card"><h3>${esc(t.k)}</h3><dl class="kv" style="grid-template-columns:minmax(0,1fr);gap:2px"><dt>Then</dt><dd>${rich(t.then)}</dd><dt>Now</dt><dd>${rich(t.now)}</dd><dt>What the difference means</dt><dd>${rich(t.gap)}</dd></dl></div>`).join('')}</div>`;
  };

  W.impact = el => {
    el.innerHTML = `<div class="ledger"><div><h3>Contributions</h3>${FRUITS.map(f => `<details><summary>${esc(f.area)}</summary><div class="body"><p>${rich(f.x)}</p><p class="note">Scripture often cited: ${refBtn(f.v)} · ${link(f.src[0], f.src[1])}</p></div></details>`).join('')}</div>
      <div><h3>Harms</h3>${SHADOWS.map(s => `<details><summary>${esc(s.area)}</summary><div class="body"><p>${rich(s.x)}</p><div class="resp"><b>Responses within the tradition</b>${rich(s.fix)}</div><p class="note">${link(s.src[0], s.src[1])}</p></div></details>`).join('')}</div></div>
      <p class="note" style="margin-top:8px">Open any entry for the record and a source. The two lists are not weighed against each other here; the questions at the end of the unit invite you to do that.</p>`;
  };
  W.global = el => {
    el.innerHTML = `<div class="tiles">${GLOBAL.tiles.map(t => `<div class="tile"><div class="n">${esc(t.n)}</div><div class="l">${esc(t.l)}</div></div>`).join('')}</div><p class="note" style="margin-top:8px">${rich(GLOBAL.note)} ${link(GLOBAL.src[0], GLOBAL.src[1])}</p>`;
  };

  W.inner = el => {
    const I = INNER;
    el.innerHTML = `<h3 class="sec-h" style="margin-top:8px">Practices</h3><div class="grid-cards">${I.practices.map(p => `<div class="card"><h3>${rich(p.n)}</h3><p class="meta">${rich(p.src)}</p><p>${rich(p.x)}</p></div>`).join('')}</div>
      <h3 class="sec-h">Teachers of prayer</h3><div class="tbl-wrap"><table class="tbl"><tbody>${I.masters.map(m => `<tr><td style="white-space:nowrap">${yr(m.y)}</td><td>${link(m.n, m.url)}</td><td style="font-weight:400">${rich(m.x)}</td></tr>`).join('')}</tbody></table></div>
      <h3 class="sec-h">Compared with other contemplative traditions</h3><div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tradition</th><th>Goal</th><th>Description</th></tr></thead><tbody>${I.compare.map(c => `<tr><td>${esc(c.trad)}</td><td style="font-weight:400">${rich(c.term)}</td><td style="font-weight:400">${rich(c.x)}</td></tr>`).join('')}</tbody></table></div>
      <div class="blk-wrap" style="margin-top:12px"><div class="blk" data-k="p"><p>${rich(I.compareNote)}</p></div></div>`;
  };
  W.stages = el => { el.innerHTML = `<div class="grid-cards">${INNER.stages.map((s, i) => `<div class="card"><p class="eyebrow">Stage ${i + 1}</p><h3>${esc(s.n)}</h3><p>${rich(s.x)}</p><p>${refBtn(s.v)}</p></div>`).join('')}</div>`; };
  W.discern = el => { el.innerHTML = `<div class="blk-wrap">${INNER.discern.map(x => `<div class="blk" data-k="p"><p>${rich(x)}</p></div>`).join('')}</div>`; };
  W.research = el => { el.innerHTML = `<div class="blk-wrap">${INNER.research.map(r => `<div class="blk" data-k="record"><span class="blk-k">Record</span><p>${rich(r.x)} ${link('Source', r.url)}</p></div>`).join('')}</div>`; };

  W.virtues = el => {
    const G = [['all', 'All twelve'], ['cardinal', 'Cardinal'], ['theological', 'Theological'], ['other', 'Others Christianity stressed']];
    el.innerHTML = `<div class="chips" id="vt-g">${chips(G, 'all')}</div><div class="split" style="margin-top:12px"><div class="picklist" id="vt-pick"></div><div class="panel" id="vt-card"></div></div>`;
    let g = 'all', sel = VIRTUES[0].n;
    const list = () => { $('#vt-pick', el).innerHTML = VIRTUES.filter(v => g === 'all' || v.group === g).map(v => `<button type="button" data-id="${esc(v.n)}" aria-selected="${v.n === sel}">${esc(v.n)}<span class="sub">${esc(v.group === 'other' ? 'emphasised by Christianity' : v.group)}</span></button>`).join(''); };
    const show = n => {
      const v = VIRTUES.find(x => x.n === n); sel = n;
      $$('#vt-pick [data-id]', el).forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === n)));
      $('#vt-card', el).innerHTML = `<p class="eyebrow">${esc(v.group === 'other' ? 'A virtue Christianity emphasised' : v.group + ' virtue')}</p><h3>${esc(v.n)}</h3><p class="meta">${rich(v.o)}</p><p style="margin-top:8px"><b>${rich(v.def)}</b></p>
        <dl class="kv" style="margin-top:12px"><dt>Scripture</dt><dd>${v.v.map(refBtn).join(' ')}</dd><dt>Classical</dt><dd>${rich(v.classical)}</dd><dt>Other traditions</dt><dd>${rich(v.other)}</dd><dt>Why it is good</dt><dd>${rich(v.why)}${v.research ? ' ' + link('Study', v.research) : ''}</dd></dl>
        <p class="linkrow" style="margin-top:10px">${link('Read more', v.url)}</p>`;
    };
    bindChips($('#vt-g', el), x => { g = x; list(); show(VIRTUES.find(v => g === 'all' || v.group === g).n); });
    $('#vt-pick', el).addEventListener('click', e => { const b = e.target.closest('[data-id]'); if (b) show(b.dataset.id); });
    list(); show(sel);
  };
  W.vices = el => {
    el.innerHTML = `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Vice</th><th>Opposing virtue</th><th>What it is</th></tr></thead><tbody>${VICES.map(([a, b, x]) => `<tr><td>${rich(a)}</td><td>${esc(b)}</td><td style="font-weight:400">${rich(x)}</td></tr>`).join('')}</tbody></table></div><p class="note" style="margin-top:8px">${rich(VICES_NOTE)}</p>`;
  };
  W.pillars = el => {
    el.innerHTML = `<div class="chips" id="pl-pick">${chips(PILLARS.map(p => [p.id, esc(p.n)]), PILLARS[0].id)}</div><div class="panel" id="pl-card" style="margin-top:12px"></div>`;
    const show = id => {
      const p = PILLARS.find(x => x.id === id);
      $('#pl-card', el).innerHTML = `<p class="eyebrow">${esc(p.n)} health</p><p style="font-size:var(--s-3);line-height:1.45">${rich(p.x)}</p><p style="margin-top:8px">${p.v.map(refBtn).join(' ')}</p>
        <h4>Practices</h4><ul style="margin:0;padding-left:1.2em;display:grid;gap:6px">${p.practice.map(x => `<li>${rich(x)}</li>`).join('')}</ul>
        <h4>Research</h4><p>${rich(p.research[0])} ${link('Study', p.research[1])}</p>`;
    };
    bindChips($('#pl-pick', el), show); show(PILLARS[0].id);
  };
  W.examen = el => {
    el.innerHTML = `<div class="panel examen"><ol>${EXAMEN.map((s, i) => `<li data-i="${i}"><div><b>${esc(s.n)}</b><p>${rich(s.x)}</p></div></li>`).join('')}</ol>
      <div class="examen-controls"><button type="button" class="btn btn-primary" id="ex-go"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>Pray it now, with voice</button><span class="note" id="ex-status">About five minutes. A pause follows each step.</span></div>
      <p class="note" style="margin-top:10px">${rich(EXAMEN_NOTE)}</p></div>`;
    let timer = null, step = -1;
    const items = $$('li', el), status = $('#ex-status', el), go = $('#ex-go', el);
    const stop = () => { clearTimeout(timer); timer = null; step = -1; items.forEach(li => li.classList.remove('spotlight')); if (A.stopSpeech) A.stopSpeech(); go.lastChild.textContent = 'Pray it now, with voice'; status.textContent = 'About five minutes. A pause follows each step.'; };
    const run = () => {
      step++;
      items.forEach((li, i) => li.classList.toggle('spotlight', i === step));
      if (step >= EXAMEN.length) { stop(); status.textContent = 'Amen.'; return; }
      const s = EXAMEN[step]; status.textContent = `Step ${step + 1} of ${EXAMEN.length}: ${s.n}`;
      const plain = s.x.replace(/\{\{[^}]+\}\}/g, '');
      const next = () => { timer = setTimeout(run, 50000); };
      if (A.speak) A.speak(`${s.n}. ${plain}`, next); else next();
    };
    go.addEventListener('click', () => { if (step >= 0) return stop(); go.lastChild.textContent = 'Stop'; run(); });
    A.stopExamen = stop;
  };

  W.tools = el => {
    el.innerHTML = `<div class="grid-cards">${TOOLS.map(g => `<div class="card"><h3>${esc(g.g)}</h3><ul style="margin:0;padding-left:1.1em;display:grid;gap:8px">${g.items.map(([n, u, d]) => `<li>${link(n, u)}<br><span class="note">${esc(d)}</span></li>`).join('')}</ul></div>`).join('')}</div>`;
  };
  W.ai = el => {
    const S = AI_STUDY;
    el.innerHTML = `<div class="blk-wrap"><div class="blk" data-k="p"><p>${rich(S.intro)}</p></div></div>
      <div class="cols2" style="margin-top:14px"><div class="panel"><h4 style="margin-top:0">Tools</h4><ul style="margin:0;padding-left:1.1em;display:grid;gap:8px">${S.tools.map(([n, u, d]) => `<li>${link(n, u)}<br><span class="note">${esc(d)}</span></li>`).join('')}</ul>
        <h4>Good habits</h4><ul style="margin:0;padding-left:1.1em;display:grid;gap:6px">${S.habits.map(h => `<li>${rich(h)}</li>`).join('')}</ul></div>
      <div class="panel"><h4 style="margin-top:0">Questions to try</h4><ul style="margin:0;padding:0;list-style:none;display:grid;gap:8px">${S.prompts.map(p => `<li class="card" style="padding:10px 12px"><span>${esc(p)}</span><button type="button" class="chip" data-copy="${esc(p)}" style="justify-self:start">Copy</button></li>`).join('')}</ul></div></div>
      <div id="ai-ask"></div>`;
    el.addEventListener('click', async e => {
      const b = e.target.closest('[data-copy]'); if (!b) return;
      try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = 'Copied'; } catch (err) { b.textContent = 'Select and copy'; }
      setTimeout(() => { b.textContent = 'Copy'; }, 1600);
    });
    if (A.askWidget) A.askWidget($('#ai-ask', el));
  };
})();
