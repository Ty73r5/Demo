/* Widgets for Parts IV and V: doctrine across churches, heresy spectra, the Trinity and the Trivium, reading Scripture,
   arguments about God, the Abrahamic comparison and the ancient traditions. Older data carry claim letters in
   pairs such as ["F", text]; only the text is shown, since each unit's prose already places them. */
(() => {
  'use strict';
  const { W, $, $$, esc, rich, link, refBtn, chips, bindChips } = A;
  const txt = p => Array.isArray(p) ? p[p.length - 1] : p;
  const paras = list => list.map(p => `<div class="blk" data-k="p"><p>${rich(txt(p))}</p></div>`).join('');

  W.doctrine = el => {
    const names = Object.fromEntries(CHURCHES);
    el.innerHTML = `<div class="chips scroll" id="dc-topic">${chips(DOCTRINES.map((d, i) => [String(i), esc(d.k)]), '0')}</div>
      <p id="dc-q" class="muted" style="margin:10px 0;font-style:italic"></p>
      <div class="grid-cards" id="dc-out"></div>
      <p class="note" style="margin-top:10px">Each tradition’s own statement of faith: ${CHURCHES.map(([k, n]) => CHURCH_DOCS[k] ? link(n, CHURCH_DOCS[k][1]) : esc(n)).join(' · ')}</p>`;
    const show = i => {
      const d = DOCTRINES[+i];
      $('#dc-q', el).textContent = d.q;
      $('#dc-out', el).innerHTML = CHURCHES.filter(([k]) => d.v[k]).map(([k]) => `<div class="card"><p class="eyebrow">${esc(names[k])}</p><p>${rich(d.v[k])}</p></div>`).join('');
    };
    bindChips($('#dc-topic', el), show); show('0');
  };

  const spectrum = (el, S, prefix) => {
    const pos = p => (50 + p / 2.3 * 46).toFixed(1);
    el.innerHTML = `<p class="eyebrow">${esc(S.label)}</p><div class="spectrum"><div class="pins">${S.items.map((it, i) => `<button type="button" class="pin${it.pos === 0 ? ' center' : ''}${i % 2 ? ' low' : ''}" style="left:${pos(it.pos)}%" data-id="${prefix}${i}" aria-selected="false">${esc(it.n)}</button>`).join('')}</div><div class="line"></div><div class="ends"><span>← ${esc(S.left)}</span><span>${esc(S.right)} →</span></div></div>`;
  };
  W.spectra = el => {
    el.innerHTML = `<div id="sp-a" style="margin-bottom:34px"></div><div id="sp-b"></div><div class="panel" id="sp-card" style="margin-top:28px"></div>
      <p class="note" style="margin-top:8px">Positions are schematic: each view is placed by how it relates the human and the divine (above) or the one and the three (below), with the position the councils adopted at the centre.</p>`;
    spectrum($('#sp-a', el), HERESY_SPECTRA.christ, 'c'); spectrum($('#sp-b', el), HERESY_SPECTRA.god, 'g');
    const show = id => {
      const it = (id[0] === 'c' ? HERESY_SPECTRA.christ : HERESY_SPECTRA.god).items[+id.slice(1)];
      $$('.pin', el).forEach(p => p.setAttribute('aria-selected', String(p.dataset.id === id)));
      $('#sp-card', el).innerHTML = `<p class="eyebrow">${A.yr(it.y)}</p><h3>${esc(it.n)}</h3><p>${rich(it.x)}</p>${it.a ? `<h4>${it.pos === 0 ? 'Where it was defined' : 'The response'}</h4><p>${rich(it.a)}</p>` : ''}`;
    };
    el.addEventListener('click', e => { const p = e.target.closest('.pin'); if (p) show(p.dataset.id); });
    show('c' + HERESY_SPECTRA.christ.items.findIndex(i => i.pos === 0));
  };
  W.heresies = el => {
    el.innerHTML = `<div class="grid-cards">${HERESIES_OTHER.map(h => `<div class="card"><p class="meta">${A.yr(h.y)}</p><h3>${esc(h.n)}</h3><p>${rich(h.x)}</p><p class="note"><b>Response:</b> ${rich(h.a)}</p></div>`).join('')}</div>`;
  };

  W.triune = el => {
    const P = TRIUNE.persons, C = ['var(--gold)', 'var(--vermilion)', 'var(--lapis)'];
    const pts = [[200, 70], [90, 260], [310, 260]];
    el.innerHTML = `<div class="split split-wide"><svg class="tri-svg" viewBox="0 0 400 330" role="group" aria-label="The three persons and the three arts">
      <path d="M200,70 L90,260 L310,260 Z" fill="none" stroke="var(--rule)" stroke-width="2"/>
      <circle cx="200" cy="197" r="34" fill="var(--page-2)" stroke="var(--rule)"/><text x="200" y="194" text-anchor="middle" style="font-size:12px">One God</text><text x="200" y="210" text-anchor="middle" style="font-size:10px;fill:var(--ink-soft)">one essence</text>
      ${P.map((p, i) => `<g class="p" data-id="${p.id}" tabindex="0" role="button" aria-label="${esc(p.name)} and ${esc(p.art)}"><circle cx="${pts[i][0]}" cy="${pts[i][1]}" r="46" fill="color-mix(in srgb, ${C[i]} 22%, var(--page))"/><text x="${pts[i][0]}" y="${pts[i][1] - 4}" text-anchor="middle" style="font-size:12.5px;font-weight:700">${esc(p.name.replace('The Son, the Logos', 'The Son'))}</text><text x="${pts[i][0]}" y="${pts[i][1] + 14}" text-anchor="middle" style="font-size:11.5px;fill:var(--ink-soft)">${esc(p.art)}</text></g>`).join('')}
    </svg><div class="panel" id="tr-card"></div></div>`;
    const show = id => {
      const i = P.findIndex(p => p.id === id), p = P[i];
      $$('.p', el).forEach(g => g.classList.toggle('sel', g.dataset.id === id));
      $('#tr-card', el).innerHTML = `<p class="eyebrow" style="color:${C[i]}">${esc(p.art)} · ${esc(p.q)}</p><h3>${esc(p.name)}</h3>
        <p class="meta">Hebrew <span lang="he" class="heb">${esc(p.heb[0])}</span> <i>${esc(p.heb[1])}</i>, “${esc(p.heb[2])}”</p>
        <ul style="margin:10px 0 0;padding-left:1.2em;display:grid;gap:6px">${p.lines.map(l => `<li>${rich(l)}</li>`).join('')}</ul><p style="margin-top:10px">${refBtn(p.verse)}</p>`;
    };
    el.addEventListener('click', e => { const g = e.target.closest('.p'); if (g) show(g.dataset.id); });
    el.addEventListener('keydown', e => { const g = e.target.closest('.p'); if (g && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); show(g.dataset.id); } });
    show(P[0].id);
  };

  W.senses = el => {
    const S = SENSES;
    el.innerHTML = `<div class="cols2"><div class="panel"><h4 style="margin-top:0">Christian: the four senses</h4><dl class="kv" style="grid-template-columns:minmax(0,1fr)">${S.christian.map(s => `<dt>${esc(s.k)}</dt><dd><i>${esc(s.q)}</i><br>Jerusalem: ${rich(s.jer)}<br>The Exodus: ${rich(s.ex)}</dd>`).join('')}</dl></div>
      <div class="panel"><h4 style="margin-top:0">Jewish: PaRDeS</h4><dl class="kv" style="grid-template-columns:minmax(0,1fr)">${S.jewish.map(s => `<dt>${esc(s.k)}</dt><dd>${rich(s.x)}</dd>`).join('')}</dl></div></div>
      <div class="blk-wrap" style="margin-top:14px">${paras(S.notes)}</div>
      ${S.rules ? `<h3 class="sec-h" style="font-size:var(--s-3);margin-top:30px">Rules for reading</h3><div class="blk-wrap">${paras(S.rules)}</div>` : ''}
      ${S.modern ? `<h3 class="sec-h" style="font-size:var(--s-3);margin-top:30px">Modern methods</h3><div class="grid-cards">${S.modern.map(m => `<div class="card"><h3>${esc(m.n)}</h3><p class="meta">${rich(m.q)}</p><p><b class="ui small">Strength:</b> ${rich(m.s)}</p><p><b class="ui small">Limit:</b> ${rich(m.b)}</p></div>`).join('')}</div>` : ''}`;
  };

  const pairCards = (list, a, b, la, lb) => `<div class="grid-cards">${list.map(t => `<div class="card"><h3>${esc(t.n)}</h3><p class="meta">${refBtn(t[a])} ${la} · ${refBtn(t[b])} ${lb}</p><p>${rich(t.x)}</p></div>`).join('')}</div>`;
  W.typology = el => { el.innerHTML = pairCards(TYPOLOGY, 'ot', 'nt', 'type', 'fulfilment'); };
  W.ntuse = el => { el.innerHTML = pairCards(NT_USE, 'ot', 'nt', 'source', 'quotation'); };

  W.messianic = el => {
    el.innerHTML = `<div class="split"><div class="picklist" id="ms-pick">${MESSIANIC.map((m, i) => `<button type="button" data-id="${i}" aria-selected="${i === 0}">${esc(m.n)}<span class="sub">${esc(A.refLabel(m.ref))}</span></button>`).join('')}</div><div class="panel" id="ms-card"></div></div>`;
    const show = i => {
      const m = MESSIANIC[+i], e = BIBLE[m.ref];
      $$('#ms-pick [data-id]', el).forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === String(i))));
      $('#ms-card', el).innerHTML = `<p class="eyebrow">${refBtn(m.ref)}</p><h3>${esc(m.n)}</h3>${e ? `<p style="margin:8px 0"><em>${esc(e.tr.JPS || e.tr.KJV || '')}</em> <span class="note">(${e.tr.JPS ? 'JPS 1917' : 'KJV'})</span></p>` : ''}
        <div class="cols2" style="margin-top:10px"><div><h4 style="margin-top:0">Jewish reading</h4><p>${rich(m.jew)}</p></div><div><h4 style="margin-top:0">Christian reading</h4><p>${rich(m.chr)}</p></div></div>`;
    };
    bindChips($('#ms-pick', el), show); show(0);
  };

  W.args = el => {
    el.innerHTML = `<div class="chips" id="ag-side">${chips([['for', 'Arguments for God'], ['against', 'Arguments against'], ['all', 'All eleven']], 'all')}</div>
      <div class="split" style="margin-top:12px"><div class="picklist" id="ag-pick"></div><div class="panel" id="ag-card"></div></div>`;
    let side = 'all', sel = ARGS[0].id;
    const list = () => { $('#ag-pick', el).innerHTML = ARGS.filter(a => side === 'all' || a.side === side).map(a => `<button type="button" data-id="${a.id}" aria-selected="${a.id === sel}">${esc(a.n)}<span class="sub">${a.side === 'for' ? 'For' : 'Against'}</span></button>`).join(''); };
    const show = id => {
      const a = ARGS.find(x => x.id === id); sel = id;
      $$('#ag-pick [data-id]', el).forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === id)));
      $('#ag-card', el).innerHTML = `<p class="eyebrow" style="color:${a.side === 'for' ? 'var(--lapis)' : 'var(--vermilion)'}">${a.side === 'for' ? 'An argument for the existence of God' : 'An argument against'}</p><h3>${esc(a.n)}</h3><p class="meta">${esc(a.who)}</p>
        <h4>The argument</h4><p>${rich(a.x)}</p><h4>${a.side === 'for' ? 'The main objection' : 'The main reply'}</h4><p>${rich(a.obj)}</p>
        <p class="linkrow" style="margin-top:12px">${link('Stanford Encyclopedia of Philosophy', a.url)}${a.read ? link(a.read[0], a.read[1]) : ''}</p>`;
    };
    bindChips($('#ag-side', el), s => { side = s; list(); const first = ARGS.find(a => side === 'all' || a.side === side); show(first.id); });
    $('#ag-pick', el).addEventListener('click', e => { const b = e.target.closest('[data-id]'); if (b) show(b.dataset.id); });
    list(); show(sel);
  };

  W.abrahamic = el => {
    el.innerHTML = `<div class="chips scroll" id="ab-topic">${chips(ABRAHAMIC.map((a, i) => [String(i), esc(a.k)]), '0')}</div>
      <div class="grid-cards" id="ab-out" style="margin-top:12px;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))"></div>
      <p class="note" style="margin-top:8px">Each column states what that tradition holds, in its own terms and sources. Within each tradition there is further variety (for example Orthodox, Conservative and Reform Judaism; Sunni and Shi‘a Islam; the Christian churches compared in the Creeds unit).</p>`;
    const show = i => {
      const a = ABRAHAMIC[+i];
      $('#ab-out', el).innerHTML = [['j', 'Judaism', 'var(--gold)'], ['c', 'Christianity', 'var(--vermilion)'], ['i', 'Islam', 'var(--verdigris)']].map(([k, n, c]) => `<div class="card" style="border-top:3px solid ${c}"><p class="eyebrow" style="color:${c}">${n}</p><p>${rich(a[k])}</p></div>`).join('');
    };
    bindChips($('#ab-topic', el), show); show('0');
  };

  W.traditions = el => {
    el.innerHTML = `<div class="chips scroll" id="td-pick">${chips(TRADITIONS.map(t => [t.id, esc(t.name)]), TRADITIONS[0].id)}</div><div class="panel" id="td-card" style="margin-top:12px"></div>`;
    const show = id => {
      const t = TRADITIONS.find(x => x.id === id);
      $('#td-card', el).innerHTML = `<p class="eyebrow">${esc(t.era)}</p><h3>${esc(t.name)}</h3><p>${rich(t.core)}</p><p class="meta" style="margin-top:6px">Key texts: ${rich(t.texts)}</p>
        <div class="cols2" style="margin-top:6px"><div><h4>What it gave, and where it meets the Bible</h4><div class="blk-wrap">${paras(t.gave)}</div></div><div><h4>Where it differs</h4><div class="blk-wrap">${paras(t.differs)}</div></div></div>
        ${t.bridge ? `<h4>A Christian bridge</h4><p>${rich(t.bn)} ${refBtn(t.bridge)}</p>` : ''}
        ${t.links && t.links.length ? `<h4>Read the sources</h4><p class="linkrow">${t.links.map(([n, u]) => link(n, u)).join('')}</p>` : ''}`;
    };
    bindChips($('#td-pick', el), show); show(TRADITIONS[0].id);
  };

  W.threads = el => {
    el.innerHTML = `<div class="chips scroll" id="th-pick">${chips(THREADS.map(t => [t.id, esc(t.name)]), THREADS[0].id)}</div><div id="th-card" style="margin-top:12px"></div>`;
    const show = id => {
      const t = THREADS.find(x => x.id === id);
      $('#th-card', el).innerHTML = `<p class="muted" style="font-style:italic;margin-bottom:10px">${esc(t.q)}</p><div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tradition</th><th>Term</th><th>Meaning</th></tr></thead><tbody>${t.rows.map(r => `<tr><td>${esc(r[0])}</td><td><i>${rich(r[1])}</i></td><td>${rich(r[2])}</td></tr>`).join('')}</tbody></table></div>`;
    };
    bindChips($('#th-pick', el), show); show(THREADS[0].id);
  };
})();
