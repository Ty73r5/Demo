/* Guided tour with voice (Web Speech API). Each step opens a unit, brings one part of it into view and reads a short
   narration. The tour works silently where speech synthesis is unavailable. */
(() => {
  'use strict';
  const { $, esc } = A;
  const synth = 'speechSynthesis' in window ? window.speechSynthesis : null;
  let voice = null, rate = +(A.store.get('la-rate', 1)) || 1;
  const pickVoice = () => {
    if (!synth) return;
    const vs = synth.getVoices().filter(v => /^en(-|_|$)/i.test(v.lang));
    const pref = [/Google UK English Male/, /Daniel/, /Arthur/, /Google US English/, /Samantha/, /Natural/, /en-GB/i];
    voice = pref.map(re => vs.find(v => re.test(v.name) || re.test(v.lang))).find(Boolean) || vs[0] || null;
  };
  if (synth) { pickVoice(); synth.addEventListener && synth.addEventListener('voiceschanged', pickVoice); }

  /* Speak long text in sentence-sized chunks (some engines stop after about 15 seconds of one utterance). */
  let token = 0;
  A.speak = (text, onDone) => {
    if (!synth) { if (onDone) setTimeout(onDone, Math.min(12000, text.length * 55)); return; }
    synth.cancel();
    const my = ++token;
    const parts = String(text).replace(/\s+/g, ' ').match(/[^.!?;:]+[.!?;:]*\s*/g) || [text];
    const chunks = [];
    parts.forEach(p => { const last = chunks[chunks.length - 1]; if (last && (last + p).length < 220) chunks[chunks.length - 1] = last + p; else chunks.push(p); });
    let i = 0;
    const next = () => {
      if (my !== token) return;
      if (i >= chunks.length) { if (onDone) onDone(); return; }
      const u = new SpeechSynthesisUtterance(chunks[i++].trim());
      if (voice) u.voice = voice;
      u.lang = voice ? voice.lang : 'en-GB'; u.rate = rate; u.pitch = 1;
      u.onend = next; u.onerror = () => { if (my === token) next(); };
      synth.speak(u);
    };
    next();
  };
  A.stopSpeech = () => { token++; if (synth) synth.cancel(); };

  const STEPS = [
    { u: '', at: '.cover', say: 'Welcome to the Logos Atlas, a study atlas of Christianity in history, Scripture and thought. It was compiled by an AI model as study material, and its claims link to sources you can check for yourself. This tour takes about ten minutes. You can pause, go back, or leave at any time.' },
    { u: 'welcome', at: '#s1', say: 'As you read, small labels in the margin say what kind of statement each passage makes: what a text says, what the historical record shows, what scholars conclude, or what a community believes. Claims about God, revelation and miracles are beliefs in every tradition, and the atlas labels them the same way for Christians, Jews, Muslims and others.' },
    { u: 'welcome', at: '#s2', say: 'Some things can be tested and some cannot. Many biblical details once doubted have since been confirmed by excavation, others still lack evidence, and the deepest questions lie beyond any instrument. The atlas reports each kind of case honestly and leaves room for what is not yet known.' },
    { u: 'library', at: '[data-w="shelf"]', say: 'The Bible is a library, not a single book: law, history, poetry, prophecy, Gospels and letters, written over a thousand years in Hebrew, Aramaic and Greek. Choose any book on the shelf to see its date, its traditional author, and what modern scholars think.' },
    { u: 'library', at: '[data-w="canon"]', say: 'Christians do not all have the same number of books. Protestants have sixty-six, Catholics seventy-three, and the Ethiopian Church eighty-one. This table shows exactly which books differ, and the rings show the shared core and the writings outside it.' },
    { u: 'transmission', at: '[data-w="versions"]', say: 'No original manuscript of any ancient book survives, biblical or otherwise. What survives are copies and translations, and the Bible has far more of them than any other ancient text. Here is the same passage in English across six centuries, from Wycliffe to the Berean Standard Bible, with the words that changed highlighted.' },
    { u: 'scrolls', at: '#s4', say: 'In 1947 a Bedouin shepherd found the first of the Dead Sea Scrolls. They are the oldest surviving manuscripts of the Hebrew Bible by about a thousand years. They show how carefully the text was copied, and also that several forms of it circulated in the time of Jesus.' },
    { u: 'original', at: '[data-w="lab"]', say: 'Every Hebrew and Greek word in the atlas is shown with its pronunciation and its English meaning. Choose a passage to see how the original wording works, and where translators and traditions have read it differently. Each word links to the Strong’s concordance on Bible Hub.' },
    { u: 'words', at: '[data-w="words"]', say: 'Key words such as love, faith, spirit and righteousness are traced through the whole Bible: how often each occurs, how it is usually translated, and what range of meaning it carries.' },
    { u: 'atlas', at: '[data-w="map"]', say: 'The map follows ninety places through five thousand years, from the pyramids to the printing presses of the Reformation. Press play to watch the centuries pass, or choose a place to read its events.' },
    { u: 'jesus', at: '#s1', say: 'What can historians say about Jesus of Nazareth? Roman and Jewish writers mention him, and nearly all scholars agree that he lived, taught in Galilee and was crucified under Pontius Pilate. The resurrection is presented as Christians proclaim it, with the arguments made for and against.' },
    { u: 'time', at: '#s1', say: 'How do we know a day is a day, or how old the world is? This unit explains the sun, the moon and the calendar, how the past is dated, what science has learned about deep time, and the different ways Jews and Christians have read the days of Genesis.' },
    { u: 'trinity', at: '[data-w="triune"]', say: 'Christians confess one God in three persons. Medieval teachers compared the Father, the Son and the Spirit to the three arts of language, grammar, logic and rhetoric. The comparison is an analogy offered for reflection, and the unit is clear about where it breaks down.' },
    { u: 'arguments', at: '[data-w="args"]', say: 'Eleven classic arguments about God, six for and five against, each stated as its strongest advocates would put it, followed by the strongest reply.' },
    { u: 'abrahamic', at: '[data-w="abrahamic"]', say: 'Judaism, Christianity and Islam are compared topic by topic, each in its own words and from its own Scriptures. Qur’an references open the Arabic with an English translation.' },
    { u: 'kemet', at: '#s1', say: 'Ancient Egypt shaped the world of the Bible. This unit sets out what the Egyptian sources say, how they compare with Scripture, and how the modern Metu Neter system draws on them, without deciding the questions for you.' },
    { u: 'conversation', at: '[data-w="thinkers"]', say: 'The Great Conversation: sixty writers from Heraclitus to Charles Taylor, and the lines of influence between them. Choose a name to see whom they learned from and whom they shaped.' },
    { u: 'templars', at: '#s1', say: 'Movements such as the Knights Templar, Freemasonry and the Rosicrucians each have their own unit, treated on their own terms, with the documented history separated from the legends that later grew around them.' },
    { u: 'impact', at: '[data-w="impact"]', say: 'Christianity has shaped the world for good and for ill: hospitals, universities and the abolition of slavery; crusades, inquisitions and abuse. Both lists are set out from the record, with the responses Christians themselves have made.' },
    { u: 'virtues', at: '[data-w="virtues"]', say: 'The virtues are where belief becomes a way of life. Each is shown with its sources in Scripture and the classics, its parallels in other traditions, the reasons it is good, and what modern research has found.' },
    { u: 'virtues', at: '[data-w="examen"]', say: 'The examen is a short evening prayer from Ignatius of Loyola: stillness, gratitude, honest review, repentance and resolve. You can pray it here with a spoken guide.' },
    { u: 'sources', at: '[data-w="tools"]', say: 'Finally, every source the atlas uses is gathered here, with advice on studying the Bible with AI assistants, which can help a great deal but must always be checked. Thank you for taking the tour. Begin wherever your curiosity leads.' }
  ];

  const bar = $('#tourbar'), say = $('#tb-say'), stepEl = $('#tb-step'), playBtn = $('#tb-play');
  const PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>', PAUSE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>';
  let i = 0, playing = false, spot = null, wait = null;
  const unspot = () => { if (spot) spot.classList.remove('spotlight'); spot = null; };
  function show(k) {
    i = Math.max(0, Math.min(STEPS.length - 1, k));
    const s = STEPS[i];
    stepEl.textContent = `Step ${i + 1} of ${STEPS.length}`;
    say.textContent = s.say;
    unspot(); clearTimeout(wait);
    const cur = (location.hash.match(/^#\/([\w-]+)/) || [])[1] || '';
    const land = () => {
      const t = $(s.at);
      if (t) { t.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' }); t.classList.add('spotlight'); spot = t; }
      if (playing) A.speak(s.say, () => { if (playing) wait = setTimeout(() => { if (i < STEPS.length - 1) show(i + 1); else setPlaying(false); }, 900); });
    };
    if (cur !== s.u) { touring = true; location.hash = s.u ? '#/' + s.u : '#/'; setTimeout(land, 350); } else land();
  }
  let touring = false;
  function setPlaying(p) {
    playing = p; playBtn.innerHTML = p ? PAUSE : PLAY; playBtn.setAttribute('aria-label', p ? 'Pause' : 'Play');
    if (p) A.speak(STEPS[i].say, () => { if (playing) wait = setTimeout(() => { if (i < STEPS.length - 1) show(i + 1); else setPlaying(false); }, 900); });
    else { A.stopSpeech(); clearTimeout(wait); }
  }
  A.tourStart = () => { bar.hidden = false; playing = true; playBtn.innerHTML = PAUSE; show(0); };
  const end = () => { playing = false; A.stopSpeech(); clearTimeout(wait); unspot(); bar.hidden = true; };
  A.stopAll = () => { if (A.stopMap) A.stopMap(); if (A.stopExamen) A.stopExamen(); if (!touring) { if (!bar.hidden) end(); else A.stopSpeech(); } touring = false; };
  $('#tb-prev').addEventListener('click', () => show(i - 1));
  $('#tb-next').addEventListener('click', () => show(i + 1));
  playBtn.addEventListener('click', () => setPlaying(!playing));
  $('#tb-close').addEventListener('click', end);
  const rs = $('#tb-rate');
  rs.value = String(rate);
  rs.addEventListener('change', () => { rate = +rs.value; A.store.set('la-rate', rate); if (playing) setPlaying(true); });
  document.addEventListener('click', e => { if (e.target.closest('[data-tour-start]')) A.tourStart(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !bar.hidden && !document.querySelector('dialog[open]')) end(); });
  if (!synth) $('#tb-note').textContent = 'Voice is not available in this browser; the tour will advance silently.';
})();
