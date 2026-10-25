/* Part I (Orientation) and Part II (The Book). Block kinds:
   p plain prose · text what a text says · record documented event or object · sch scholarship · bel belief (who) · open
   quote {q, cite, url} · table {head, rows} · list {items}. Rich text: {{Gen.1.1}} Bible, {{Q:4:157}} Qur'an, [label](url), *italic*. */
window.UNITS = window.UNITS || [];

UNITS.push({
  id: 'welcome', part: 'Orientation', title: 'How to use this atlas',
  kicker: 'A study atlas of Christianity in world history, and of the traditions it meets.',
  intro: 'This atlas is study material for anyone who wants to understand Christianity well: what its Scriptures say and how they reached us, what Christians believe and why, how the faith relates to Judaism, Islam and the older civilisations around it, and what it has meant for human life. It is written to be fair to Christians, who should recognise their faith in it, and useful to people of other faiths or none, who should find the history and the arguments laid out plainly.',
  sections: [
    { h: 'Four kinds of statement', blocks: [
      { k: 'p', x: 'Throughout the atlas, a small label in the margin marks what kind of statement a passage makes. Labels appear only where the difference matters.' },
      { k: 'text', x: 'What a text says. “The Gospel of John says the Word was God” is a fact about the text, whatever one believes about the Word. Canon lists, creeds and council decrees are also texts: it is a fact that the Council of Trent listed 73 books.' },
      { k: 'record', x: 'What the historical record shows: dated events, surviving manuscripts, inscriptions, archaeological finds and measurements. “The Great Isaiah Scroll was copied about 125 BC” is a statement about an object you can see in Jerusalem.' },
      { k: 'sch', x: 'What researchers conclude from texts and records. Scholars often disagree, and the atlas says so: “most scholars,” “a minority,” “debated.”' },
      { k: 'bel', who: 'Each tradition’s', x: 'What a community believes: that God spoke at Sinai, that Jesus rose from the dead, that the Qur’an is God’s speech, that the heart is weighed against Ma’at. Claims about God, revelation, miracles and the afterlife are beliefs in every tradition, and the atlas labels them the same way for each: Christian belief, Jewish belief, Muslim belief, Kemetic teaching.' },
      { k: 'open', x: 'Questions that are not settled.' } ] },
    { h: 'On evidence and its limits', blocks: [
      { k: 'p', x: 'Historians and scientists can test some things and not others. Many biblical details once doubted by scholars have since been confirmed by excavation: the Hittite empire (rediscovered at Boğazköy from 1906), King Belshazzar (named on the Nabonidus Cylinder, found 1854), the Assyrian king Sargon II of Isaiah 20:1 (his palace was found at Khorsabad in 1843), Pontius Pilate’s title (on a stone found at Caesarea in 1961), and the “House of David” (on a stele found at Tel Dan in 1993).' },
      { k: 'p', x: 'Other biblical accounts have no confirming evidence, and some are contested: the dates and scale of the Exodus and the conquest of Canaan, the lives of the patriarchs, a worldwide flood. Absence of evidence is not proof of absence, and finds keep arriving. The atlas reports both kinds of case and does not decide in advance what further evidence will show.' },
      { k: 'p', x: 'Some questions lie beyond any instrument: whether there is a God, why there is anything at all, whether a life is a gift. On these, the atlas presents what each tradition holds and the strongest arguments made for and against.' } ] },
    { h: 'Reading the sources yourself', blocks: [
      { k: 'p', x: 'Every Bible reference is a red link. Tap {{John.1.1}} to read it in eleven translations from Wycliffe (1390s) to the Berean Standard Bible (2020s), with every Hebrew or Greek word glossed in English and linked to its entry in the Strong’s concordance on Bible Hub. Qur’an references such as {{Q:112:1-4}} show the Arabic with Pickthall’s 1930 English translation. Other sources link to their texts online.' },
      { k: 'p', x: 'Use **Guided tour** at the top for a spoken walk-through, or move through the units in any order from the contents.' } ] },
    { h: 'Who made this', blocks: [
      { k: 'p', x: 'This atlas was compiled by Claude, an AI model made by Anthropic, as study material. It does not speak for any church or tradition. Its quotations are generated directly from the source texts, not from memory, and its other claims link to sources so that they can be checked. Errors are still possible; where a source and the atlas disagree, trust the source.' } ] }
  ],
  questions: ['Which kind of statement do you most often see confused in public debates about religion: a text, a record, a scholarly conclusion, or a belief?', 'What would count as evidence for or against a claim like “Jesus rose from the dead,” and what kind of question is it?'],
  sources: [
    { t: 'STEP Bible (Tyndale House, Cambridge): original-language data used here', url: 'https://www.stepbible.org/' },
    { t: 'Bible Hub: interlinear and Strong’s concordance', url: 'https://biblehub.com/' },
    { t: 'Quran.com: Arabic text and translations', url: 'https://quran.com/' }
  ]
});

UNITS.push({
  id: 'library', part: 'The Book', title: 'The Bible as a library',
  kicker: 'Sixty-six to eighty-one books, written over a thousand years, in three languages.',
  intro: '“Bible” comes from the Greek *ta biblia*, “the books,” a plural. It is a library: law, history, poetry, proverbs, prophecy, biography, letters and visions, written by many hands from roughly the 10th century BC to the 2nd century AD in Hebrew, some Aramaic, and Greek. Christians receive it as one story with one Author behind the authors. Jews receive the first part, in a different order, as the whole of Scripture.',
  widget: 'shelf',
  sections: [
    { h: 'Languages and genres', blocks: [
      { k: 'record', x: 'Most of the Old Testament is in Hebrew. Parts of Daniel (2:4–7:28) and Ezra (4:8–6:18 and 7:12–26), one verse of Jeremiah (10:11) and two words in Genesis (31:47) are in Aramaic, the language of the Persian empire and later of Jesus. The New Testament is in koinē, the everyday Greek of the eastern Roman world.' },
      { k: 'p', x: 'Genres matter for reading. Proverbs are true as generalisations, not promises; apocalypse speaks in symbols; letters answer particular churches; the Gospels are ancient biographies. Many disagreements about the Bible are really disagreements about genre.' } ] },
    { h: 'Two orders, two endings', blocks: [
      { k: 'text', x: 'The Hebrew Bible (*Tanakh*, from Torah “instruction,” Nevi’im “Prophets,” Ketuvim “Writings”) ends with 2 Chronicles and Cyrus’s decree inviting the exiles home: “let him go up” {{2Chr.36.23}}. The Christian Old Testament, following the Greek Septuagint’s order, ends with Malachi’s promise that Elijah will come before the day of the LORD {{Mal.4.5}}.' },
      { k: 'sch', x: 'The two arrangements tell the story with different endings: return to the land and Temple, or expectation of a coming messenger, which the Gospels then open by announcing {{Matt.11.14}}.' } ] },
    { h: 'Who decided which books belong?', blocks: [
      { k: 'record', x: 'No single council created the Bible. The books were used in worship long before lists were drawn up. The first surviving list of exactly the 27 New Testament books is in Athanasius’s Easter letter of 367 ([Festal Letter 39](' + L.na('2806039') + ')). Regional councils at Hippo (393) and Carthage (397) approved a full Old and New Testament list. The Council of Nicaea (325) did not discuss the canon, despite a popular myth.' },
      { k: 'record', x: 'Josephus (c. AD 95) speaks of 22 Jewish sacred books “justly believed” ([Against Apion 1.8](' + L.wiki('Against_Apion') + ')). The rabbis debated the status of Ecclesiastes and the Song of Songs into the 2nd century (Mishnah, [Yadayim 3:5](' + L.sefaria('Mishnah_Yadayim.3.5') + ')). The once-popular idea of a formal “Council of Jamnia” (c. 90) closing the Hebrew canon is now largely abandoned by scholars.' },
      { k: 'record', x: 'The Reformation hardened the boundaries. Luther (1534) placed the books outside the Hebrew canon between the Testaments as “useful and good to read.” The Council of Trent (1546) defined 73 books as canonical for Catholics. The Church of England’s [Article VI](' + L.wiki('Thirty-nine_Articles') + ') (1563/1571) read the Apocrypha “for example of life” but not for doctrine, and the [Westminster Confession](' + L.wiki('Westminster_Confession_of_Faith') + ') (1646) excluded them. Most English Protestant Bibles dropped them after 1826.' },
      { k: 'bel', who: 'Catholic', x: 'The Church did not create the canon but recognised, under the Holy Spirit, the books handed down from the apostles; the Old Testament includes the books of the Greek Septuagint that the early Church read ([Catechism of the Catholic Church, 120](https://www.vatican.va/archive/ENG0015/_INDEX.HTM)).' },
      { k: 'bel', who: 'Protestant', x: 'Scripture authenticates itself as God’s word, and the Church recognises it; the Old Testament is the Hebrew canon that Jesus and the apostles received {{Luke.24.44}}.' },
      { k: 'bel', who: 'Orthodox', x: 'The canon lives within Holy Tradition. The Septuagint is the Church’s Old Testament, and lists vary slightly between Orthodox churches.' },
      { k: 'bel', who: 'Jewish', x: 'Prophetic inspiration ended with Haggai, Zechariah and Malachi; after them “the holy spirit departed from Israel” ([Tosefta Sotah 13:3](' + L.sefaria('Tosefta_Sotah.13.3') + ')). The Tanakh is complete, and the Oral Torah, later written in the Mishnah and Talmud, is its authoritative interpretation.' },
      { k: 'bel', who: 'Muslim', x: 'God revealed the Tawrat (Torah) to Moses, the Zabur (Psalms) to David and the Injil (Gospel) to Jesus {{Q:5:46}}, but the texts as now held are believed to have been altered or misinterpreted (*taḥrīf*), and the Qur’an is the final, preserved revelation.' } ] },
    { h: 'Canons by tradition', widget: 'canon', blocks: [
      { k: 'p', x: 'Select a tradition to see where it draws the line, from the books every church accepts at the centre to writings no church accepts at the edge. The table below compares the books whose status differs.' } ] },
    { h: 'How the early Church judged a book', blocks: [
      { k: 'list', items: [
        '**Apostolic origin**: written by an apostle or a close companion (Mark with Peter, Luke with Paul).',
        '**Rule of faith**: consistent with the faith handed down: one Creator, the real incarnation, the bodily resurrection.',
        '**Catholicity**: read widely across the churches, not in one region or sect alone.',
        '**Antiquity**: from the apostolic age. The Muratorian Fragment (late 2nd century) declines the Shepherd of Hermas for public reading because it was written “very recently, in our times” ([text](https://www.earlychristianwritings.com/text/muratorian-metzger.html)).' ] } ] },
    { h: 'Writings outside the canon', blocks: [
      { k: 'p', x: 'Many early Jewish and Christian writings survive outside the canon. They are essential for understanding the world of the Bible, and some were read in churches for generations. Read them yourself:' },
      { k: 'list', items: [
        `**Didache** (c. 50–120), a church manual: the Two Ways, baptism and the Eucharist. [Read](${L.na('0714')})`,
        `**1 Clement** (c. 96), a letter from Rome to Corinth, included in Codex Alexandrinus. [Read](${L.na('1010')})`,
        `**Shepherd of Hermas** (c. 100–150), visions about repentance, included in Codex Sinaiticus. [Read](${L.na('0201')})`,
        `**Epistle of Barnabas** (c. 100–132), an allegorical reading of the Law, also in Sinaiticus. [Read](${L.na('0124')})`,
        `**Protoevangelium of James** (c. 150), the birth and childhood of Mary, source of the names Joachim and Anne. [Read](${L.na('0847')})`,
        `**1 Enoch** (3rd–1st c. BC), canonical in the Ethiopian Church and quoted in Jude 14–15. [Read the R. H. Charles translation](${L.sacred('bib/boe/index.htm')})`,
        `**Gospel of Thomas** (debated: c. 60–150), 114 sayings attributed to Jesus, found at Nag Hammadi. [Read](https://www.earlychristianwritings.com/thomas.html)`,
        `**Gospel of Judas, Gospel of Mary, Gospel of Truth and the rest of the Nag Hammadi library**: [about the library](https://en.wikipedia.org/wiki/Nag_Hammadi_library)` ] },
      { k: 'sch', x: 'Most specialists date the Gnostic gospels to the 2nd–3rd centuries, later than the four canonical Gospels. The Gospel of Thomas is debated: some scholars think parts preserve sayings as early as the canonical Gospels; most date it to the 2nd century.' } ] }
  ],
  questions: ['Why might a community read a book in worship for generations before anyone writes down a list?', 'The Protestant and Catholic Old Testaments differ by seven books. What is the strongest argument on each side?', 'How does the ending of the Hebrew Bible (2 Chronicles) differ in tone from the ending of the Christian Old Testament (Malachi)?'],
  sources: [
    { t: 'Athanasius, Festal Letter 39 (367)', url: L.na('2806039') },
    { t: 'The Muratorian Fragment, trans. B. M. Metzger', url: 'https://www.earlychristianwritings.com/text/muratorian-metzger.html' },
    { t: 'Bruce M. Metzger, The Canon of the New Testament (Oxford, 1987)', url: L.wiki('Development_of_the_New_Testament_canon') },
    { t: 'Biblical canon: an overview with references', url: L.wiki('Biblical_canon') },
    { t: 'Catechism of the Catholic Church, §§ 101–141', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' }
  ]
});

UNITS.push({
  id: 'transmission', part: 'The Book', title: 'How the text reached us',
  kicker: 'From scrolls and codices to printed Bibles: who copied, who translated, and what changed.',
  intro: 'No original manuscript of any biblical book survives. Neither does the original of any other ancient book. What survives are copies, translations and quotations, and the Bible has far more of them than any other ancient text. Textual criticism compares them to recover the earliest wording. This unit follows the main lines of transmission and shows one verse changing across six centuries of English.',
  widget: 'lineage',
  sections: [
    { h: 'The same words across six centuries of English', widget: 'versions', blocks: [
      { k: 'p', x: 'Choose a passage to read it in every English translation in the atlas, oldest first. Notice spelling (Wycliffe), Tyndale’s phrasing surviving in the King James, the Catholic tradition’s Latin roots (Douay–Rheims), Jewish wording (JPS 1917), and modern English (Berean Standard Bible).' } ] },
    { h: 'The Hebrew Bible', blocks: [
      { k: 'record', x: 'The Dead Sea Scrolls (found 1947–56 at Qumran and nearby sites) include about 950 manuscripts copied c. 250 BC–AD 68, with parts of every book of the Hebrew Bible except Esther. The Great Isaiah Scroll (1QIsaᵃ) is complete and about a thousand years older than the oldest complete medieval Hebrew Bibles. [See the Great Isaiah Scroll](http://dss.collections.imj.org.il/isaiah) · [Dead Sea Scrolls Digital Library](https://www.deadseascrolls.org.il/)' },
      { k: 'sch', x: 'The scrolls show the Hebrew text was copied with great care: the Isaiah scroll agrees with the later Masoretic text in the vast majority of its wording. They also show that in the 1st century several text forms circulated side by side: one close to the later Masoretic text, one close to the Hebrew behind the Greek Septuagint, and others.' },
      { k: 'record', x: 'The Masoretes, Jewish scholars in Tiberias (7th–10th centuries), added vowel signs, accents and marginal notes to the consonantal text. The Aleppo Codex (c. 930) and the Leningrad Codex (1008), the oldest complete Hebrew Bible, are their work. The Hebrew in this atlas is the Leningrad Codex.' } ] },
    { h: 'The Greek Old Testament', blocks: [
      { k: 'record', x: 'Jewish scholars in Alexandria translated the Torah into Greek around 250 BC and the rest over the next century or so: the Septuagint (from the legend of 72 translators, LXX). It was the Bible of Greek-speaking Jews and of the early Church, and most Old Testament quotations in the New Testament follow it.' },
      { k: 'sch', x: 'Where the Septuagint differs from the Masoretic text, it sometimes preserves a Hebrew text older than the Masoretic, as Qumran manuscripts confirm (for example in Jeremiah and Deuteronomy 32:43).' } ] },
    { h: 'The Greek New Testament', blocks: [
      { k: 'record', x: 'About 5,800 Greek New Testament manuscripts are catalogued, from fragments to complete Bibles. The earliest are papyri from Egypt: 𝔓52, a scrap of John 18, is usually dated 125–175. Codex Sinaiticus and Codex Vaticanus (both 4th century) are the oldest near-complete Bibles. [Codex Sinaiticus online](https://codexsinaiticus.org/en/)' },
      { k: 'record', x: 'Erasmus published the first Greek New Testament in print (Basel, 1516) from a handful of late medieval manuscripts. Revised by Stephanus (who added verse numbers in 1551) and Beza, this “Textus Receptus” (received text) underlies Tyndale and the King James. Since the 19th century, critical editions (Westcott–Hort 1881, Nestle–Aland, the SBL Greek New Testament) weigh the oldest manuscripts more heavily.' },
      { k: 'sch', x: 'Scholars estimate several hundred thousand textual variants, most of them spelling, word order or obvious slips. A small number affect meaning; the Reading the Original unit examines the most important. Bart Ehrman and Daniel Wallace, who disagree on much else, both affirm that no core Christian doctrine depends on a disputed reading.' } ] },
    { h: 'Latin, Syriac, Coptic and beyond', blocks: [
      { k: 'record', x: 'Translations began early: Old Latin and Syriac in the 2nd century, Coptic in the 3rd, then Gothic, Armenian (with an alphabet invented for the purpose c. 405), Georgian, Ge’ez and others. Jerome’s Latin Vulgate (c. 382–405) translated the Old Testament directly from Hebrew and became the Bible of the Latin West for a thousand years.' } ] },
    { h: 'The English Bible', blocks: [
      { k: 'record', x: 'John Wycliffe’s circle produced the first complete English Bible (1380s), translated from Latin. William Tyndale translated the New Testament from Greek (printed at Worms, 1526) and much of the Old from Hebrew, and was executed for it in 1536. Coverdale (1535), the Great Bible (1539), the Geneva Bible (1560) and the Bishops’ Bible (1568) followed.' },
      { k: 'record', x: 'James I commissioned a new translation at Hampton Court in 1604. About 47 scholars in six companies revised the Bishops’ Bible against the Hebrew and Greek. Their instructions required that “the old ecclesiastical words” be kept, so ekklēsia stayed “church” rather than Tyndale’s “congregation.” The King James Version appeared in 1611, with the Apocrypha; most printings today follow Benjamin Blayney’s 1769 revision.' },
      { k: 'sch', x: 'Studies of the wording estimate that roughly 80% of the King James New Testament follows Tyndale (Nielson and Skousen, 1998). Phrases such as “let there be light,” “the powers that be” and “fight the good fight” are his.' },
      { k: 'p', x: 'Translations lie on a spectrum from formal equivalence (word for word: Young’s Literal, the KJV, ASV) to functional equivalence (thought for thought). Each gains something and loses something, which is why serious study compares several.' } ] }
  ],
  questions: ['Why does the existence of thousands of manuscripts both create variants and make the original wording recoverable?', 'Read John 3:16 in Wycliffe, Tyndale and the BSB. What has changed in 600 years, and what has stayed?', 'Why might a translator like Tyndale have chosen “congregation” over “church,” and why might the King James translators have been told not to?'],
  sources: [
    { t: 'Emanuel Tov, Textual Criticism of the Hebrew Bible (3rd ed., 2012)', url: L.wiki('Textual_criticism') },
    { t: 'Bruce M. Metzger and Bart D. Ehrman, The Text of the New Testament (4th ed., 2005)', url: L.wiki('Textual_criticism_of_the_New_Testament') },
    { t: 'Codex Sinaiticus Project', url: 'https://codexsinaiticus.org/en/' },
    { t: 'The Leon Levy Dead Sea Scrolls Digital Library (Israel Antiquities Authority)', url: 'https://www.deadseascrolls.org.il/' },
    { t: 'The King James Version and its 1611 preface, The Translators to the Reader', url: L.wiki('King_James_Version') }
  ]
});

UNITS.push({
  id: 'original', part: 'The Book', title: 'Reading the original',
  kicker: 'Thirty-two passages where the Hebrew, the Greek, the manuscripts or the translations make a difference.',
  intro: 'Every passage below is shown word by word in Hebrew or Greek, with each word’s English gloss and Strong’s number, beside eleven translations. Words found only in the Textus Receptus, the Greek text behind the King James, are marked. The notes say what the text shows, what the manuscripts record, what scholars conclude, and how Jewish, Christian or Muslim readers understand the passage.',
  widget: 'lab',
  sections: [],
  questions: ['Choose one passage where translations disagree. Which reading do you find more convincing, and why?', 'Why might a scribe add words to a text, and why might he remove them?', 'What does Romans 16:7 suggest about women’s roles in the earliest churches, and what are the arguments on the other side?'],
  sources: [
    { t: 'Bible Hub interlinear', url: 'https://biblehub.com/interlinear/' },
    { t: 'STEP Bible: Translators Amalgamated Hebrew OT and Greek NT (CC BY 4.0)', url: 'https://github.com/STEPBible/STEPBible-Data' },
    { t: 'Bruce M. Metzger, A Textual Commentary on the Greek New Testament (2nd ed., 1994)', url: L.wiki('Textual_variants_in_the_New_Testament') },
    { t: 'SBL Greek New Testament', url: 'https://sblgnt.com/' }
  ]
});

UNITS.push({
  id: 'words', part: 'The Book', title: 'Key words',
  kicker: 'Sixty-six Hebrew and Greek words whose meaning modern English often loses.',
  intro: 'Each entry gives the word in its own script with a transliteration, its Strong’s number (linked to Bible Hub and Blue Letter Bible), its range of meaning, how often it occurs in the Hebrew Bible or Greek New Testament, and how it is usually translated. The counts and translations are computed from the full original-language texts, not estimated.',
  widget: 'words',
  sections: [],
  questions: ['Pick a word whose English translation has narrowed over time (charity, soul, heart, faith). How does the older meaning change a familiar verse?', 'Why might one Hebrew word (rûaḥ) for wind, breath and spirit be hard to translate consistently?'],
  sources: [
    { t: 'Bible Hub: Strong’s Hebrew and Greek', url: 'https://biblehub.com/strongs.htm' },
    { t: 'Blue Letter Bible lexicon', url: 'https://www.blueletterbible.org/' },
    { t: 'STEP Bible brief lexicons (TBESH, TBESG), abridged from Brown–Driver–Briggs and Abbott-Smith', url: 'https://github.com/STEPBible/STEPBible-Data/tree/master/Lexicons' }
  ]
});
