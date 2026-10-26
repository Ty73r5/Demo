/* Widgets for Part II, The Book: the shelf, canons, lineage, versions, the passage lab and key words. */
(() => {
  'use strict';
  const { W, $, $$, esc, rich, inline, link, refBtn, chips, bindChips } = A;
  const GROUP_C = { torah: 'var(--gold)', history: 'var(--ochre)', wisdom: 'var(--verdigris)', prophets: 'var(--vermilion)', deutero: 'var(--murex)', gospels: 'var(--lapis)', paul: 'var(--s1)', general: 'var(--s4)', apoc: 'var(--s5)' };

  W.shelf = el => {
    el.innerHTML = `<div class="shelf">${BOOK_GROUPS.map(([g, name]) => `<div class="shelf-group"><h4>${esc(name)}</h4><div class="spines">${BOOKS.filter(b => b.g === g).map(b =>
      `<button type="button" class="spine" style="--c:${GROUP_C[g]}" data-id="${b.n}-${esc(b.name)}" aria-selected="false">${esc(b.name)}</button>`).join('')}</div></div>`).join('')}</div>
      <div class="panel" id="shelf-panel" style="margin-top:14px"></div>`;
    const show = id => {
      const b = BOOKS.find(x => `${x.n}-${x.name}` === id) || BOOKS[0];
      $$('.spine', el).forEach(s => s.setAttribute('aria-selected', String(s.dataset.id === `${b.n}-${b.name}`)));
      $('#shelf-panel', el).innerHTML = `<p class="eyebrow" style="color:${GROUP_C[b.g]}">${esc(BOOK_GROUPS.find(g => g[0] === b.g)[1])}</p><h3>${esc(b.name)}</h3>
        <p class="meta">${esc(b.heb)}</p>
        <p style="margin-top:10px">${rich(b.theme)} ${b.key ? refBtn(b.key) : ''}</p>
        <dl class="kv" style="margin-top:12px"><dt>Date</dt><dd>${esc(b.date)}</dd><dt>Traditional author</dt><dd>${rich(b.trad)}</dd><dt>Scholarship</dt><dd>${rich(b.sch)}</dd></dl>`;
    };
    el.addEventListener('click', e => { const s = e.target.closest('.spine'); if (s) show(s.dataset.id); });
    show(`${BOOKS[0].n}-${BOOKS[0].name}`);
  };

  W.canon = el => {
    const cols = ['jew', 'pro', 'cat', 'ort', 'eth'];
    const names = { jew: 'Jewish', pro: 'Protestant', cat: 'Catholic', ort: 'Orthodox', eth: 'Ethiopian' };
    const st = { c: ['st-c', 'Scripture'], a: ['st-a', 'Read or appendix'], n: ['st-n', '—'] };
    el.innerHTML = `<div class="chips" id="cn-trad">${chips(CANON_TRADITIONS.map(t => [t.id, esc(t.name)]), 'pro')}</div>
      <div class="panel" id="cn-note" style="margin:12px 0 16px"></div>
      <div class="canon-grid"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>Book</th>${cols.map(c => `<th style="text-align:center">${names[c]}</th>`).join('')}</tr></thead>
      <tbody>${CANON_ROWS.map(r => `<tr><td>${esc(r.book)}<div class="note" style="font-weight:400;margin-top:4px">${rich(r.note)}</div></td>${cols.map((c, i) => { const s = st[r.s[i]] || st.n; return `<td class="c"><span class="${s[0]}">${s[1]}</span></td>`; }).join('')}</tr>`).join('')}</tbody></table></div>
      <p class="note" style="margin-top:8px">Only books whose status differs between traditions are listed. All five accept the 39 books of the Hebrew Bible; all Christian traditions here accept the 27 books of the New Testament. The Syriac Peshitta tradition historically omitted 2 Peter, 2–3 John, Jude and Revelation.</p></div>
      <h3 class="sec-h" style="margin-top:36px;font-size:var(--s-3)">From the shared core outward</h3>
      <div class="split"><svg class="tri-svg" id="cn-rings" viewBox="0 0 400 400" role="group" aria-label="Rings of acceptance"></svg><div class="panel" id="cn-ring"></div></div>`;
    const showT = id => { const t = CANON_TRADITIONS.find(x => x.id === id); $('#cn-note', el).innerHTML = `<h3>${esc(t.name)} <span class="meta">${esc(t.count)}</span></h3><p>${rich(t.note)}</p>`; };
    bindChips($('#cn-trad', el), showT); showT('pro');
    const svgEl = $('#cn-rings', el), R = CANON_RINGS, n = R.length;
    const fill = i => `color-mix(in srgb, ${i < 3 ? 'var(--gold-leaf)' : i < 5 ? 'var(--lapis)' : 'var(--murex)'} ${[60, 46, 36, 40, 30, 34, 26, 18][i] || 20}%, var(--page))`;
    for (let i = n - 1; i >= 0; i--) {
      const c = A.svg('circle', { cx: 200, cy: 200, r: 34 + i * 20.5, 'data-i': i, tabindex: 0, role: 'button', 'aria-label': R[i].name, style: `fill:${fill(i)};stroke:var(--page);stroke-width:2;cursor:pointer` }, svgEl);
      c.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showR(i); } });
    }
    R.forEach((r, i) => { const t = A.svg('text', { x: 200, y: i ? 200 - (34 + i * 20.5) + 14 : 204, 'text-anchor': 'middle', style: 'font-size:10.5px;pointer-events:none;fill:var(--ink)' }, svgEl); t.textContent = i ? r.name : 'Core'; });
    const showR = i => {
      const r = R[i];
      $$('circle', svgEl).forEach(c => c.style.strokeWidth = +c.dataset.i === i ? '3' : '2');
      $$('circle', svgEl).forEach(c => c.style.stroke = +c.dataset.i === i ? 'var(--ink)' : 'var(--page)');
      $('#cn-ring', el).innerHTML = `<p class="eyebrow">Ring ${i + 1} of ${n}</p><h3>${esc(r.name)}</h3><p>${rich(r.blurb)}</p>${r.items.map(it => `<h4>${esc(it.n)} <span class="meta" style="text-transform:none;letter-spacing:0">${esc(it.d || '')}</span></h4>${it.x ? `<p>${rich(it.x)}</p>` : ''}`).join('')}`;
    };
    svgEl.addEventListener('click', e => { const c = e.target.closest('[data-i]'); if (c) showR(+c.dataset.i); });
    showR(0);
  };

  W.lineage = el => {
    const lo = -300, hi = 2050, pos = y => ((y - lo) / (hi - lo) * 100).toFixed(2);
    const C = ['var(--gold)', 'var(--lapis)', 'var(--vermilion)', 'var(--verdigris)', 'var(--murex)'];
    const all = LINEAGE.flatMap((l, li) => l.items.map((it, k) => ({ ...it, lane: l.lane, li, id: `${li}-${k}` })));
    el.innerHTML = `<div class="lineage">${LINEAGE.map((l, li) => `<div class="lin-lane"><span class="nm">${esc(l.lane)}</span><div class="lin-track">${l.items.map((it, k) =>
      `<button type="button" class="lin-item" style="left:${pos(it.y)}%;--c:${C[li]};padding:0;width:16px;height:16px;top:9px;border-width:2px" data-id="${li}-${k}" aria-label="${esc(it.n)}, ${esc(it.d)}" title="${esc(it.n)} (${esc(it.d)})"></button>`).join('')}</div></div>`).join('')}
      <div class="lin-axis"><span></span><div class="ticks">${[-250, 0, 250, 500, 750, 1000, 1250, 1500, 1750, 2000].map(y => `<span style="left:${pos(y)}%">${y < 0 ? -y + ' BC' : y === 0 ? 'AD 1' : y}</span>`).join('')}</div></div></div>
      <div class="chips scroll" id="lin-list" style="margin-top:12px">${chips(all.map(a => [a.id, esc(a.n)]), '1-3')}</div>
      <div class="panel" id="lin-card" style="margin-top:10px"></div>`;
    const show = id => {
      const a = all.find(x => x.id === id);
      $$('[data-id]', el).forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === id)));
      $$('.lin-item', el).forEach(b => { const on = b.dataset.id === id; b.style.background = on ? b.style.getPropertyValue('--c') : ''; b.style.transform = on ? 'scale(1.35)' : ''; });
      $('#lin-card', el).innerHTML = `<p class="eyebrow" style="color:${C[a.li]}">${esc(a.lane)} · ${esc(a.d)}</p><h3>${esc(a.n)}</h3><p>${rich(a.x)}</p><p class="linkrow" style="margin-top:8px">${link('Read more', a.url)}</p>`;
      const chip = $(`#lin-list [data-id="${id}"]`, el); if (chip) chip.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    };
    el.addEventListener('click', e => { const b = e.target.closest('[data-id]'); if (b) show(b.dataset.id); });
    show('1-3');
  };

  /* Word-level differences between consecutive translations (longest common subsequence). */
  // Compare consonant skeletons so that spelling alone (loued / loved, sonne / Son) does not count as a change.
  const norm = w => { const t = w.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '').replace(/v/g, 'u').replace(/j/g, 'i'); return t ? (t[0] + t.slice(1).replace(/[aeiouy]/g, '')).replace(/(.)\1+/g, '$1') : ''; };
  function marked(prev, curr) {
    const a = prev ? prev.split(/\s+/).map(norm) : null, b = curr.split(/\s+/);
    if (!a) return esc(curr);
    const bn = b.map(norm), m = a.length, n = b.length;
    const T = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));
    for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--) T[i][j] = a[i] === bn[j] ? T[i + 1][j + 1] + 1 : Math.max(T[i + 1][j], T[i][j + 1]);
    const keep = new Set(); let i = 0, j = 0;
    while (i < m && j < n) { if (a[i] === bn[j]) { keep.add(j); i++; j++; } else if (T[i + 1][j] >= T[i][j + 1]) i++; else j++; }
    return b.map((w, k) => keep.has(k) || !bn[k] ? esc(w) : `<mark class="chg">${esc(w)}</mark>`).join(' ');
  }
  W.versions = el => {
    const list = (window.VERSION_PASSAGES || []).filter(r => BIBLE[r]);
    el.innerHTML = `<div class="chips scroll" id="vv-pick">${chips(list.map(r => [r, esc(BIBLE[r].label)]), list[0])}</div>
      <label class="note" style="display:flex;gap:8px;align-items:center;margin:10px 0"><input type="checkbox" id="vv-diff" checked> Highlight words that differ from the translation above</label>
      <div class="panel"><div class="tr-list" id="vv-out"></div></div>
      <p class="note" style="margin-top:8px">Differences of spelling alone, such as <i>loued</i> and <i>loved</i>, are mostly ignored. The Latin is the source of Wycliffe, Douay–Rheims and the Catholic Public Domain Version; the others translate the Hebrew and Greek.</p>`;
    const show = r => {
      const e = BIBLE[r], diff = $('#vv-diff', el).checked;
      const rows = A.TR.filter(([k]) => e.tr[k] && k !== 'ChiUn');
      let prev = null;
      $('#vv-out', el).innerHTML = rows.map(([k, n, d]) => { const lat = k === 'Vulgate'; const h = diff && !lat ? marked(prev, e.tr[k]) : esc(e.tr[k]); if (!lat) prev = e.tr[k]; return `<div class="tr-row"><div class="nm"><b>${n}</b>${d}</div><div${lat ? ' lang="la"' : ''}>${h}</div></div>`; }).join('') + `<p class="linkrow">${refBtn(r)} <span class="note">Open the original-language words</span></p>`;
      el.dataset.r = r;
    };
    bindChips($('#vv-pick', el), show);
    $('#vv-diff', el).addEventListener('change', () => show(el.dataset.r));
    show(list[0]);
  };

  /* Interlinear rendering shared by the lab and the tour. */
  A.interlinear = (ref, opts = {}) => {
    const e = BIBLE[ref]; if (!e || !e.words.length) return '';
    const heb = e.lang === 'heb';
    return `<div class="inter"${heb ? ' dir="rtl"' : ''}>${e.words.map(w => `<span class="iw${w[4] === 'TR' ? ' tr' : ''}"><span class="o${heb ? ' heb' : ''}" lang="${heb ? 'he' : 'grc'}">${esc(w[0])}</span><span class="t">${esc(A.translit(w[1], e.lang))}</span><span class="g">${inline(w[2])}</span>${opts.strong === false ? '' : `<span class="s">${esc(w[3] || '')}</span>`}</span>`).join('')}</div>`;
  };

  W.lab = (el, u, params) => {
    el.innerHTML = `<div class="split"><div class="picklist" id="lab-pick" role="listbox" aria-label="Passages">${LAB.map(p => `<button type="button" data-id="${esc(p.ref)}" aria-selected="false">${esc(p.title)}<span class="sub">${esc(A.refLabel(p.ref))}</span></button>`).join('')}</div><div class="panel" id="lab-card"></div></div>`;
    const show = ref => {
      const p = LAB.find(x => x.ref === ref) || LAB[0], e = BIBLE[p.ref];
      $$('#lab-pick [data-id]', el).forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === p.ref)));
      $('#lab-card', el).innerHTML = `<p class="eyebrow">${esc(A.refLabel(p.ref))}</p><h3>${esc(p.title)}</h3><p class="muted">${rich(p.why)}</p>
        ${e ? `<div style="margin:14px 0">${A.interlinear(p.ref)}</div><p><em>${esc(e.tr.KJV || e.tr.DRC || '')}</em> <span class="note">(${e.tr.KJV ? 'KJV' : 'Douay–Rheims'})</span></p>${e.tr.BSB ? `<p style="margin-top:4px"><em>${esc(e.tr.BSB)}</em> <span class="note">(BSB)</span></p>` : ''}` : ''}
        <div class="blk-wrap" style="margin-top:16px">${p.blocks.map(A.block).join('')}</div>
        <p class="linkrow" style="margin-top:14px">${refBtn(p.ref)} <span class="note">All translations, word study and Bible Hub links</span></p>`;
    };
    bindChips($('#lab-pick', el), show);
    show(params && params.get('p') || LAB[0].ref);
  };

  W.words = (el, u, params) => {
    el.innerHTML = `<div class="chips" id="kw-lang" style="margin-bottom:10px">${chips([['all', 'All'], ['heb', 'Hebrew'], ['grc', 'Greek']], 'all')}</div>
      <div class="split"><div class="picklist" id="kw-pick" role="listbox" aria-label="Key words"></div><div class="panel" id="kw-card"></div></div>`;
    let lang = 'all', sel = params && params.get('w') || WORDS[0].id;
    const list = () => {
      $('#kw-pick', el).innerHTML = WORDS.filter(w => lang === 'all' || w.lang === lang).map(w => `<button type="button" data-id="${w.id}" aria-selected="${w.id === sel}">${esc(w.tr)}<span class="sub">${esc(w.gloss)}</span></button>`).join('');
    };
    const show = id => {
      const w = WORDS.find(x => x.id === id) || WORDS[0]; sel = w.id;
      $$('#kw-pick [data-id]', el).forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === sel)));
      const st = STATS[w.strong], max = st ? st.top[0][1] : 1, heb = w.lang === 'heb';
      $('#kw-card', el).innerHTML = `<p class="eyebrow">${heb ? 'Hebrew' : 'Greek'} · Strong’s ${esc([w.strong, ...(w.also || [])].join(', '))}</p>
        <h3><span lang="${heb ? 'he' : 'grc'}" class="${heb ? 'heb' : ''}" style="font-size:1.1em">${esc(w.w)}</span> <span style="font-size:0.75em">${esc(w.tr)}</span></h3>
        <p><b>${esc(w.gloss)}</b></p>
        <dl class="kv" style="margin-top:10px"><dt>KJV renders it</dt><dd>${esc(w.kjv)}</dd>${st ? `<dt>Occurrences</dt><dd>${st.n.toLocaleString()} under ${esc(w.strong)} in ${heb ? 'the Leningrad Codex' : 'the Nestle–Aland text'} as tagged by STEP Bible (<a href="#/words?q=How%20the%20counts">counting rules</a>)</dd>` : ''}</dl>
        ${st ? `<h4>STEP Bible’s English glosses for its occurrences</h4><div class="glossbars">${st.top.map(([g, c]) => `<div class="glossbar"><span>${esc(g)}</span><span class="bar" style="width:${Math.max(2, c / max * 100)}%"></span><span class="c">${c}</span></div>`).join('')}</div>` : ''}
        <div class="blk-wrap" style="margin-top:16px">${w.notes.map(A.block).join('')}</div>
        <h4>Read it in context</h4><p>${w.refs.map(refBtn).join(' ')}</p><p class="note">The atlas holds these verses only; each opens with a link to its whole chapter. A gloss is a brief aid, and the meaning in any verse depends on its context.</p>
        ${L.isStrongs(w.strong) ? `<p class="linkrow" style="margin-top:10px">${link('Bible Hub concordance', L.strongs(w.strong))}${link('Blue Letter Bible', L.blb(w.strong))}</p>` : ''}`;
    };
    bindChips($('#kw-lang', el), l => { lang = l; list(); });
    $('#kw-pick', el).addEventListener('click', e => { const b = e.target.closest('[data-id]'); if (b) show(b.dataset.id); });
    list(); show(sel);
  };
})();
