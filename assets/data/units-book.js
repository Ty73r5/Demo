/* Part I (Orientation) and Part II (The Book). Block kinds:
   p plain prose · text what a text says · record documented event or object · sch scholarship · bel belief (who) · open
   quote {q, cite, url} · table {head, rows} · list {items}. Rich text: {{Gen.1.1}} Bible, {{Q:4:157}} Qur'an, [label](url), *italic*. */
window.UNITS = window.UNITS || [];

UNITS.push({
  id: 'welcome', part: 'Orientation', title: 'How to use this atlas',
  kicker: 'A study atlas of Christianity in world history, and of the traditions it meets.',
  learn: {
    goal: 'Tell apart the kinds of statement the atlas makes, and know how each kind can be checked.',
    take: 'What a text says, what the historical record shows, what scholars conclude and what a community believes are different kinds of claim. Each is checked in a different way, and evidence for one is not automatically evidence for another.',
    example: 'That the Tel Dan stele reads “house of David” is a record. That a kingdom known by David’s name existed in the 9th century BC is a conclusion most scholars draw from it. That God chose David is a belief, which an inscription can neither confirm nor refute.',
    check: { q: 'The “Pilate stone” from Caesarea names Pontius Pilate as prefect of Judaea. Which of these does it show: (a) that Pilate governed Judaea with that title; (b) that Pilate tried Jesus; (c) that the Gospels’ trial accounts are accurate?',
      a: 'Only (a). The inscription attests the man, his office and his title [[pilateStone]]. That he tried Jesus rests on other sources (the Gospels, and Tacitus, Annals 15.44); whether the Gospels’ accounts are accurate in detail is a separate historical question. A find that attests a person or a title does not confirm a whole narrative.' },
    next: [['library', 'the first step of the start-here route: what kind of books the Bible contains'], ['method', 'how sources, quotations and corrections are handled']]
  },
  intro: 'This atlas is study material for anyone who wants to understand Christianity well: what its Scriptures say and how they reached us, what Christians believe and why, how the faith relates to Judaism, Islam and the older civilisations around it, and what it has meant for human life. Christianity is its organising centre. Other traditions appear as Christianity’s neighbours and conversation partners, described as accurately as the atlas can in their own terms. It aims to be fair to Christians, who should recognise their faith in it, and useful to people of other faiths or none, who should find the history and the arguments laid out plainly.',
  sections: [
    { h: 'Four kinds of statement', blocks: [
      { k: 'p', x: 'Throughout the atlas, a small label in the margin marks what kind of statement a passage makes. Labels appear only where the difference matters, and once at the head of a run of statements of the same kind; unlabelled passages are the atlas’s own explanation.' },
      { k: 'text', x: 'What a text says. “The Gospel of John says the Word was God” is a fact about the text, whatever one believes about the Word. Canon lists, creeds and council decrees are also texts: it is a fact that the Council of Trent’s decree of 1546 lists the books that Catholic Bibles now count as 73 [[trentIV]].' },
      { k: 'record', x: 'What the historical record shows: dated events, surviving manuscripts, inscriptions, archaeological finds and measurements. “The Great Isaiah Scroll was copied about 125 BC” is a statement about an object kept in Jerusalem.' },
      { k: 'sch', x: 'What researchers conclude from texts and records. Scholars often disagree, and the atlas says so: “most scholars,” “a minority,” “debated.”' },
      { k: 'bel', who: 'Each tradition’s', x: 'What a community believes: that God spoke at Sinai, that Jesus rose from the dead, that the Qur’an is God’s speech, that the heart is weighed against Maʿat. Claims about God, revelation, miracles and the afterlife are beliefs in every tradition, and the atlas labels them the same way for each. A belief label does not mean that a claim is false, nor that it is beyond historical investigation.' },
      { k: 'open', x: 'Questions that are not settled.' },
      { k: 'p', x: 'Where it matters, a second word after the label gives the evidential standing: *well established*, *predominant scholarly view*, *actively debated*, *minority interpretation*, *insufficient evidence*, or *editorial analogy* for the atlas’s own comparisons. The atlas does not give numerical confidence scores, and it does not claim a consensus it cannot show.' } ] },
    { h: 'What a find shows, and what it does not', blocks: [
      { k: 'p', x: 'Inscriptions and excavations have attested a number of people, titles and places named in the Bible. Each attests something specific. A find that confirms a person, a title or a place does not by itself confirm a whole narrative, and it cannot confirm a supernatural explanation.' },
      { k: 'table', head: ['Find', 'What it says', 'What it attests', 'What it does not show'], rows: [
        ['Cylinders of Nabonidus from Ur (found 1853–54; 6th century BC)', 'A prayer for King Nabonidus and for “Belshazzar, his eldest son” [[nabonidusCyl]]', 'That Belshazzar existed and was Nabonidus’s son. Other Babylonian texts show him as crown prince and regent in Babylon while his father stayed at Tayma [[belshazzarBM]].', 'Babylonian texts call him “the king’s son,” not king, though one says Nabonidus “entrusted the kingship” to him; Daniel calls him king and Nebuchadnezzar’s son {{Dan.5.2}}. Nothing here bears on the writing on the wall.'],
        ['Palace of Sargon II at Khorsabad (excavated from 1843; 8th century BC)', 'Sargon’s annals, including his campaign against Ashdod [[khorsabad]]', 'The king and the campaign that Isaiah 20:1 uses to date a prophecy {{Isa.20.1}}', 'Before the excavation, commentators knew Sargon mainly from this verse and often identified him with another Assyrian king. Whether anyone denied that he existed has not been established here.'],
        ['The Pilate stone, Caesarea (found 1961; c. AD 26–36)', '[Po]ntius Pilatus … [praef]ectus Iuda[ea]e [[pilateStone]]', 'The man, his office and his title, “prefect of Judaea”', 'Nothing about Jesus or the trial. The broken letters are restored by scholars.'],
        ['The Tel Dan stele (fragments found 1993–94; c. mid-9th century BC)', 'An Aramaic king, probably Hazael of Damascus, claims victory over a king of Israel and, on most readings, the “house of David” (*bytdwd*) [[telDan]]', 'A kingdom known by David’s name about a century and a half after his traditional dates', 'David’s life or the size of his kingdom. A minority of scholars read the letters differently.'],
        ['The Hittite archives at Boğazköy (excavated from 1906)', 'Tens of thousands of tablets of a Late Bronze Age kingdom in Anatolia [[bogazkoy]]', 'A great empire that 19th-century scholars had only begun to identify from Egyptian and Assyrian records and inscriptions', 'How the Bible’s “Hittites” in Canaan relate to this empire is debated. The often-repeated claim that scholars denied the Hittites ever existed is not supported by anything the atlas has found.']
      ] } ] },
    { h: 'On evidence and its limits', blocks: [
      { k: 'p', x: 'Absence of evidence counts against a claim when evidence would be expected to survive and has been looked for. It counts for little when no evidence would be expected, and it is inconclusive when what survives can be read in several ways. The cases differ, so the atlas treats them separately:' },
      { k: 'list', items: [
        '**A worldwide flood.** A recent global flood would have left a worldwide deposit of one age and broken continuous records such as ice cores and annual lake layers. Geologists find neither, so here the absence is evidence against a global reading; it says nothing against a regional flood or a theological reading. See Miracles and the laws of nature.',
        '**The Exodus and the conquest.** Egyptian records do not mention Israelite slaves or an exodus, and sites such as Jericho and Ai show little or no occupation at the dates usually proposed for the conquest. A small group might leave no trace, but the numbers the text gives {{Exod.12.37}} would be expected to leave some. Scholars range from a small group’s escape, remembered and enlarged, to reconstructions that redate the events; the question is actively debated.',
        '**The patriarchs.** A semi-nomadic family of the 2nd millennium BC would not be expected to leave inscriptions or identifiable remains, so the lack of evidence for Abraham as an individual says little either way. The argument turns instead on whether the stories’ details fit any one period, and on that scholars disagree.' ] },
      { k: 'p', x: 'Some questions lie beyond any instrument: whether there is a God, why there is anything at all, whether a life is a gift. On these, the atlas presents what each tradition holds and the strongest arguments made for and against.' } ] },
    { h: 'Reading the sources yourself', blocks: [
      { k: 'p', x: 'Every Bible reference is a red button. Tap {{John.1.1}} to read it in up to ten public-domain English translations, from Wycliffe (1390s) to the Berean Standard Bible (2020s), with the Latin Vulgate; which translations appear depends on the passage, since some do not include every book. Each Hebrew or Greek word is glossed in English and linked to its Strong’s entry. The atlas holds only the passages it cites, not a full Bible, and each dialog links to the whole chapter. Qur’an references such as {{Q:112:1-4}} show the Arabic with Pickthall’s 1930 English translation.' },
      { k: 'p', x: 'A small grey marker after a claim, such as [[telDan]], opens its source: who and what it is, the exact place cited, what kind of source it is, what it supports, its limits and how the atlas checked it. A retracted study is marked as retracted wherever it is cited. Links to Wikipedia say so; they are overviews, never a substitute for the work they describe.' },
      { k: 'p', x: 'Use **Start here** for a suggested route through the essentials, **Guided tour** for a spoken walk-through, the **Aa** button for text size, spacing and typeface, or move through the units in any order from the contents. Units in parts V and VI are marked “context”: they place Christianity among its neighbours and are best read after the essentials.' } ] },
    { h: 'Who made this', blocks: [
      { k: 'p', x: 'This atlas was compiled by Claude, an AI model made by Anthropic, as study material. It does not speak for any church or tradition, and no named human expert has reviewed it. The Bible, Qur’an and lexicon texts are generated by a script from the editions named in each dialog, not typed by hand. Other quotations (creeds, Church Fathers, philosophers, modern writers) were entered by hand and carry a citation, but most have not been re-checked against a printed edition; the editorial method sets out what has and has not been verified, and lists corrections. Where a source and the atlas disagree, trust the source.' } ] }
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
  learn: {
    goal: 'See the Bible as a library of different kinds of writing, and know who decided which books belong.',
    take: 'Genre shapes meaning: a proverb, a letter, a vision and a law are read differently. The books were used in worship before any list was drawn up, and churches still draw the boundary in different places.',
    example: '“Train up a child in the way he should go: and when he is old, he will not depart from it” {{Prov.22.6}} is a proverb: true as a generalisation about upbringing, not a promise that every child of careful parents will turn out well.',
    check: { q: 'Why do Protestant and Catholic Bibles have different numbers of Old Testament books, though their New Testaments are the same?',
      a: 'Protestant Old Testaments follow the books of the Hebrew Bible (the Jewish Tanakh, counted there as 24 books, here as 39). Catholic and Orthodox Old Testaments also include books found in the Greek Septuagint that the early Church read, such as Tobit, Sirach and 1–2 Maccabees. The Council of Trent confirmed the wider list for Catholics in 1546 [[trentIV]]; the Reformers kept those books, if at all, as useful reading but not Scripture.' },
    next: [['transmission', 'route step 2: how these books were copied and translated'], ['stories', 'the narratives, with what each has been taken to teach']]
  },
  intro: '“Bible” comes from the Greek *ta biblia*, “the books,” a plural. It is a library: law, history, poetry, proverbs, prophecy, biography, letters and visions, written by many hands from roughly the 10th century BC to the 2nd century AD in Hebrew, some Aramaic, and Greek. Christians receive it as one story with one Author behind the authors. Jews receive the first part, in a different order, as the whole of Scripture.',
  widget: 'shelf',
  sections: [
    { h: 'Languages and genres', blocks: [
      { k: 'record', x: 'Most of the Old Testament is in Hebrew. Parts of Daniel (2:4–7:28) and Ezra (4:8–6:18 and 7:12–26), one verse of Jeremiah (10:11) and two words in Genesis (31:47) are in Aramaic, the language of the Persian empire and later of Jesus. The New Testament is in koinē, the everyday Greek of the eastern Roman world.' },
      { k: 'p', x: 'Genres matter for reading. Proverbs are true as generalisations, not promises; apocalypse speaks in symbols; letters answer particular churches; most scholars now read the Gospels as ancient biographies. Many disagreements about the Bible are really disagreements about genre.' } ] },
    { h: 'Two orders, two endings', blocks: [
      { k: 'text', x: 'The Hebrew Bible (*Tanakh*, from Torah “instruction,” Nevi’im “Prophets,” Ketuvim “Writings”) ends with 2 Chronicles and Cyrus’s decree inviting the exiles home: “let him go up” {{2Chr.36.23}}. Most Christian Bibles end the Old Testament with the prophets, closing with Malachi’s promise that Elijah will come before the day of the LORD {{Mal.4.5}}.' },
      { k: 'sch', x: 'The two arrangements tell the story with different endings: return to the land and Temple, or expectation of a coming messenger, which the Gospels then open by announcing {{Matt.11.14}}.' } ] },
    { h: 'Who decided which books belong?', blocks: [
      { k: 'record', x: 'No single council created the Bible. The books were used in worship long before lists were drawn up. The first surviving list of exactly the 27 New Testament books is in Athanasius’s Easter letter of 367 ([Festal Letter 39](' + L.na('2806039') + ')). Regional councils at Hippo (393) and Carthage (397) approved a full Old and New Testament list. The Council of Nicaea (325) did not discuss the canon, despite a popular myth.' },
      { k: 'record', x: 'Josephus (c. AD 95) speaks of 22 Jewish sacred books “justly believed” (Against Apion 1.8; [overview of the work](' + L.wiki('Against_Apion') + ')). The rabbis debated the status of Ecclesiastes and the Song of Songs into the 2nd century (Mishnah, [Yadayim 3:5](' + L.sefaria('Mishnah_Yadayim.3.5') + ')). The once-popular idea of a formal “Council of Jamnia” (c. 90) closing the Hebrew canon is now largely abandoned by scholars.' },
      { k: 'record', x: 'The Reformation hardened the boundaries. Luther (1534) placed the books outside the Hebrew canon between the Testaments as “useful and good to read.” The Council of Trent (1546) defined the canon for Catholics, listing the books that Catholic Bibles count as 73; its decree groups Baruch with Jeremiah and does not name Lamentations separately [[trentIV]]. The Church of England’s Article VI of the Thirty-nine Articles (1563/1571; [overview](' + L.wiki('Thirty-nine_Articles') + ')) read the Apocrypha “for example of life” but not for doctrine, and the Westminster Confession (1646, chapter 1.3; [overview](' + L.wiki('Westminster_Confession_of_Faith') + ')) excluded them. Most English Protestant Bibles dropped them after 1826.' },
      { k: 'bel', who: 'Catholic', x: 'The Church did not create the canon but recognised, under the Holy Spirit, the books handed down from the apostles; the Old Testament includes the books of the Greek Septuagint that the early Church read ([Catechism of the Catholic Church, 120](https://www.vatican.va/archive/ENG0015/_INDEX.HTM)).' },
      { k: 'bel', who: 'Protestant', x: 'Scripture authenticates itself as God’s word, and the Church recognises it; the Old Testament is the Hebrew canon that Jesus and the apostles received {{Luke.24.44}}.' },
      { k: 'bel', who: 'Orthodox', x: 'The canon lives within Holy Tradition. The Septuagint is the Church’s Old Testament, and lists vary slightly between Orthodox churches.' },
      { k: 'bel', who: 'Jewish', x: 'Prophetic inspiration ended with Haggai, Zechariah and Malachi; after them “the holy spirit departed from Israel” ([Tosefta Sotah 13:3](' + L.sefaria('Tosefta_Sotah.13.3') + ')). The Tanakh is complete, and the Oral Torah, later written in the Mishnah and Talmud, is its authoritative interpretation.' },
      { k: 'bel', who: 'Muslim', x: 'God revealed the Tawrat (Torah) to Moses, the Zabur (Psalms) to David and the Injil (Gospel) to Jesus {{Q:5:46}}, but the texts as now held are believed to have been altered or misinterpreted (*taḥrīf*), and the Qur’an is the final, preserved revelation.' } ] },
    { h: 'Canons by tradition', widget: 'canon', blocks: [
      { k: 'p', x: 'Select a tradition to see where it draws the line, from the books every church accepts at the centre to writings no church accepts at the edge. The table below compares the books whose status differs.' } ] },
    { h: 'How the early Church judged a book', deep: true, blocks: [
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
        `**Gospel of Thomas** (composed c. 60–150, debated), 114 sayings attributed to Jesus. Complete only in Coptic in Nag Hammadi Codex II (4th century), with Greek fragments from Oxyrhynchus (c. 200–250) [[gospelThomas]]. [Read](https://www.earlychristianwritings.com/thomas.html)`,
        `**Gospel of Truth** (composed c. 140–180), a Valentinian meditation. Coptic copies in Nag Hammadi Codices I and XII (4th century); Irenaeus mentions a Valentinian “Gospel of Truth” c. 180 [[gospelTruth]]. [Read](https://www.earlychristianwritings.com/gospeltruth.html)`,
        `**Gospel of Mary** (composed 2nd century), in which Mary Magdalene teaches the disciples. *Not* from Nag Hammadi: a Coptic copy in the Berlin Codex (5th century, acquired 1896) and two Greek fragments of the 3rd century [[gospelMary]].`,
        `**Gospel of Judas** (composed 2nd century). *Not* from Nag Hammadi either: one Coptic copy in Codex Tchacos, found in the 1970s in Middle Egypt and radiocarbon dated to about AD 220–340, published in 2006 [[tchacos]] [[head2007]].`,
        `The **Nag Hammadi library** itself is a set of thirteen Coptic codices of the 4th century found in Upper Egypt in 1945, containing more than fifty texts. [Overview](https://en.wikipedia.org/wiki/Nag_Hammadi_library)` ] },
      { k: 'sch', x: 'Most specialists date the composition of these gospels to the 2nd–3rd centuries, later than the four canonical Gospels; the surviving manuscripts are later still. The Gospel of Thomas is debated: some scholars think parts preserve sayings as early as the canonical Gospels; most date it to the 2nd century. Manuscript date, composition date and discovery are three different things, and each of these texts has its own history.' } ] }
  ],
  questions: ['Why might a community read a book in worship for generations before anyone writes down a list?', 'The Protestant and Catholic Old Testaments differ by seven books. What is the strongest argument on each side?', 'How does the ending of the Hebrew Bible (2 Chronicles) differ in tone from the ending of the Christian Old Testament (Malachi)?'],
  sources: [
    { t: 'Athanasius, Festal Letter 39 (367)', url: L.na('2806039') },
    { t: 'The Muratorian Fragment, trans. B. M. Metzger', url: 'https://www.earlychristianwritings.com/text/muratorian-metzger.html' },
    { t: 'Bruce M. Metzger, The Canon of the New Testament: Its Origin, Development, and Significance (Oxford: Clarendon Press, 1987)' },
    { t: 'Development of the New Testament canon: an overview', url: L.wiki('Development_of_the_New_Testament_canon') },
    { t: 'Biblical canon: an overview with references', url: L.wiki('Biblical_canon') },
    { t: 'Catechism of the Catholic Church, §§ 101–141', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM' }
  ]
});

UNITS.push({
  id: 'transmission', part: 'The Book', title: 'How the text reached us',
  kicker: 'From scrolls and codices to printed Bibles: who copied, who translated, and what changed.',
  learn: {
    goal: 'Understand how the biblical text was copied, translated and printed, and what that means for its reliability.',
    take: 'No author’s original of any biblical book survives; we have copies, translations and quotations. Because there are so many, scholars can compare them, see where they differ, and in most places recover the earliest wording with confidence. The places where they cannot are known and marked.',
    example: 'The Great Isaiah Scroll from Qumran (c. 125 BC) is about a thousand years older than the oldest complete Hebrew Bibles, yet agrees with them in the large majority of its wording; most differences are spelling. It also has a few readings that modern translations now follow {{Isa.53.11}}.',
    check: { q: 'Thousands of manuscripts mean thousands of variant readings. Why does that not make the original wording hopeless to recover?',
      a: 'Because the variants can be compared. Most are spelling, word order or obvious slips that copies elsewhere correct. Where a variant matters, scholars weigh the age, spread and character of the manuscripts that have each reading. More copies produce more variants, but they also give more evidence for which reading came first. The handful of passages where real doubt remains (such as Mark 16:9–20 and John 7:53–8:11) are marked in modern Bibles; see Reading the original.' },
    next: [['original', 'route step 3: reading one passage closely in its own language'], ['scrolls', 'the Dead Sea Scrolls in detail']]
  },
  intro: 'No author’s original manuscript of any biblical book survives. That is normal for ancient literature: the works of Plato, Virgil and Tacitus also survive only in later copies (inscriptions and everyday papyrus documents, by contrast, often survive as originals). What survives of the Bible are copies, translations and quotations, and the New Testament is preserved in far more manuscripts than any other work of Greek or Latin antiquity. Textual criticism compares them to recover the earliest wording. This unit follows the main lines of transmission and shows one verse changing across six centuries of English.',
  widget: 'lineage',
  sections: [
    { h: 'The same words across six centuries of English', widget: 'versions', blocks: [
      { k: 'p', x: 'Choose a passage to read it in every English translation in the atlas, oldest first. Notice spelling (Wycliffe), Tyndale’s phrasing surviving in the King James, the Catholic tradition’s Latin roots (Douay–Rheims), Jewish wording (JPS 1917), and modern English (Berean Standard Bible).' } ] },
    { h: 'The Hebrew Bible', blocks: [
      { k: 'record', x: 'The Dead Sea Scrolls (found 1947–56 at Qumran and nearby sites) include about 950 manuscripts copied c. 250 BC–AD 68, with parts of every book of the Hebrew Bible except Esther. The Great Isaiah Scroll (1QIsaᵃ) is complete and about a thousand years older than the oldest complete medieval Hebrew Bibles. The scrolls are the oldest substantial biblical manuscripts, but not the oldest biblical wording: two tiny silver amulets from Ketef Hinnom in Jerusalem, of the late 7th or 6th century BC, carry a text close to the priestly blessing {{Num.6.24-26}} [[ketefHinnom]]. [See the Great Isaiah Scroll](http://dss.collections.imj.org.il/isaiah) · [Dead Sea Scrolls Digital Library](https://www.deadseascrolls.org.il/)' },
      { k: 'sch', x: 'The scrolls show the Hebrew text was copied with great care: the Isaiah scroll agrees with the later Masoretic text in the vast majority of its wording. They also show that in the 1st century several text forms circulated side by side: one close to the later Masoretic text, one close to the Hebrew behind the Greek Septuagint, and others.' },
      { k: 'record', x: 'The Masoretes, Jewish scholars in Tiberias (7th–10th centuries), added vowel signs, accents and marginal notes to the consonantal text. The Aleppo Codex (c. 930) and the Leningrad Codex (1008), the oldest complete Hebrew Bible, are their work. The Hebrew in this atlas is the Leningrad Codex.' } ] },
    { h: 'The Greek Old Testament', blocks: [
      { k: 'record', x: 'Jewish scholars in Alexandria translated the Torah into Greek around 250 BC and the rest over the next century or so: the Septuagint (from the legend of 72 translators, LXX). It was the Bible of Greek-speaking Jews and of the early Church, and most Old Testament quotations in the New Testament follow it.' },
      { k: 'sch', x: 'Where the Septuagint differs from the Masoretic text, it sometimes preserves a Hebrew text older than the Masoretic, as Qumran manuscripts confirm (for example in Jeremiah and Deuteronomy 32:43).' } ] },
    { h: 'The Greek New Testament', blocks: [
      { k: 'record', x: 'About 5,800 Greek New Testament manuscripts are catalogued, most of them medieval and many fragmentary, besides thousands in early translations and quotations by early Christian writers. For comparison, the best-attested classical work, Homer’s Iliad, survives in somewhat under two thousand papyri and manuscripts. The earliest New Testament manuscripts are papyri from Egypt: 𝔓52, a scrap of John 18, is usually dated 125–175, though some palaeographers allow a later date. Codex Sinaiticus and Codex Vaticanus (both 4th century) are the oldest near-complete Bibles. [Codex Sinaiticus online](https://codexsinaiticus.org/en/)' },
      { k: 'record', x: 'The first Greek New Testament to be printed was the fifth volume of the Complutensian Polyglot, completed at Alcalá in Spain on 10 January 1514; it was not sanctioned until 1520 and seems not to have circulated before about 1522 [[complutensian]]. The first to be published was Erasmus’s, printed by Froben at Basel in March 1516 from a handful of late medieval manuscripts [[erasmus1516]]. Revised by Stephanus (who added verse numbers in 1551) and Beza, this “Textus Receptus” (received text) underlies Tyndale and the King James. Since the 19th century, critical editions (Westcott–Hort 1881, Nestle–Aland, the SBL Greek New Testament) weigh the oldest manuscripts more heavily.' },
      { k: 'sch', x: 'Scholars estimate several hundred thousand textual variants, most of them spelling, word order or obvious slips. A small number affect meaning; the Reading the Original unit examines the most important. Bart Ehrman and Daniel Wallace, who disagree on much else, both affirm that no core Christian doctrine depends on a disputed reading (Ehrman in the interview printed with the paperback edition of Misquoting Jesus, 2007, while arguing that some variants change how particular passages read). This attribution has not been re-checked against the printed text.' } ] },
    { h: 'Latin, Syriac, Coptic and beyond', deep: true, blocks: [
      { k: 'record', x: 'Translations began early: Old Latin and Syriac in the 2nd century, Coptic in the 3rd, then Gothic, Armenian (with an alphabet invented for the purpose c. 405), Georgian, Ge’ez and others. Jerome’s Latin Vulgate (c. 382–405) translated most of the Old Testament directly from the Hebrew (the Psalter that came into common use was his revision from the Greek) and became the Bible of the Latin West for a thousand years.' } ] },
    { h: 'The English Bible', blocks: [
      { k: 'record', x: 'John Wycliffe’s circle produced the first complete English Bible (1380s), translated from Latin. William Tyndale translated the New Testament from Greek (printed at Worms, 1526) and much of the Old from Hebrew, and was executed for it in 1536. Coverdale (1535), the Great Bible (1539), the Geneva Bible (1560) and the Bishops’ Bible (1568) followed.' },
      { k: 'record', x: 'James I commissioned a new translation at Hampton Court in 1604. About 47 scholars in six companies revised the Bishops’ Bible against the Hebrew and Greek. Their instructions required that “the old ecclesiastical words” be kept, so ekklēsia stayed “church” rather than Tyndale’s “congregation.” The King James Version appeared in 1611, with the Apocrypha; most printings today follow Benjamin Blayney’s 1769 revision.' },
      { k: 'sch', x: 'A study of the wording estimates that about 83% of the King James New Testament follows Tyndale (Nielson and Skousen, 1998). Phrases such as “let there be light,” “the powers that be” and “fight the good fight” are his.' },
      { k: 'p', x: 'Translations lie on a spectrum from formal equivalence (word for word: Young’s Literal, the KJV, ASV) to functional equivalence (thought for thought). Each gains something and loses something, which is why serious study compares several.' } ] }
  ],
  questions: ['Why does the existence of thousands of manuscripts both create variants and make the original wording recoverable?', 'Read John 3:16 in Wycliffe, Tyndale and the BSB. What has changed in 600 years, and what has stayed?', 'Why might a translator like Tyndale have chosen “congregation” over “church,” and why might the King James translators have been told not to?'],
  sources: [
    { t: 'Emanuel Tov, Textual Criticism of the Hebrew Bible (3rd ed., Minneapolis: Fortress, 2012)' },
    { t: 'Bruce M. Metzger and Bart D. Ehrman, The Text of the New Testament: Its Transmission, Corruption, and Restoration (4th ed., New York: Oxford University Press, 2005)' },
    { t: 'Textual criticism of the New Testament: an overview', url: L.wiki('Textual_criticism_of_the_New_Testament') },
    { t: 'Codex Sinaiticus Project', url: 'https://codexsinaiticus.org/en/' },
    { t: 'The Leon Levy Dead Sea Scrolls Digital Library (Israel Antiquities Authority)', url: 'https://www.deadseascrolls.org.il/' },
    { t: 'The King James Version: an overview', url: L.wiki('King_James_Version') }
  ]
});

UNITS.push({
  id: 'original', part: 'The Book', title: 'Reading the original',
  kicker: 'Thirty-two passages where the Hebrew, the Greek, the manuscripts or the translations make a difference.',
  learn: {
    goal: 'Read one passage closely: its words, its manuscripts, its translations and its interpreters.',
    take: 'Translations differ for three different reasons: the manuscripts differ, a word or construction can be read more than one way, or translators aim at different kinds of English. Knowing which reason applies tells you what kind of evidence could settle it.',
    example: 'In John 1:1, “the Word was God” renders *theos ēn ho logos*. The word order and the missing article are a question of grammar, not of manuscripts: the manuscripts agree here {{John.1.1}}.',
    check: { q: 'Luke 23:34 (“Father, forgive them”) is missing from some of the oldest manuscripts. Is the disagreement between translations there a question of manuscripts, of grammar, or of translation style?',
      a: 'Of manuscripts. The words are clear when present; the question is whether Luke wrote them, which is decided by weighing which manuscripts have them and why a scribe might have added or removed them. Open that passage below to see the evidence.' },
    next: [['jesus', 'route step 4: what historians can say about Jesus and the earliest sources'], ['words', 'word studies, and how to use them without overreaching']]
  },
  intro: 'Every passage below is shown word by word in Hebrew or Greek, with each word’s English gloss and Strong’s number, beside up to ten English translations (as available for that passage) and the Latin Vulgate. Words found only in the Textus Receptus, the Greek text behind the King James, are marked. The notes say what the text shows, what the manuscripts record, what scholars conclude, and how Jewish, Christian or Muslim readers understand the passage.',
  widget: 'lab',
  sections: [],
  questions: ['Choose one passage where translations disagree. Which reading do you find more convincing, and why?', 'Why might a scribe add words to a text, and why might he remove them?', 'What does Romans 16:7 suggest about women’s roles in the earliest churches, and what are the arguments on the other side?'],
  sources: [
    { t: 'Bible Hub interlinear', url: 'https://biblehub.com/interlinear/' },
    { t: 'STEP Bible: Translators Amalgamated Hebrew OT and Greek NT (CC BY 4.0)', url: 'https://github.com/STEPBible/STEPBible-Data' },
    { t: 'Bruce M. Metzger, A Textual Commentary on the Greek New Testament (2nd ed., Stuttgart: Deutsche Bibelgesellschaft, 1994)' },
    { t: 'Textual variants in the New Testament: an overview', url: L.wiki('Textual_variants_in_the_New_Testament') },
    { t: 'SBL Greek New Testament', url: 'https://sblgnt.com/' }
  ]
});

UNITS.push({
  id: 'words', part: 'The Book', title: 'Key words',
  kicker: 'Sixty-six Hebrew and Greek words whose meaning modern English often loses, and how to study a word without overreaching.',
  intro: 'Each entry gives the word in its own script with a transliteration, its Strong’s number (linked to Bible Hub and Blue Letter Bible), its range of meaning, how often it occurs, and the English glosses STEP Bible gives it. Counts and glosses are computed by the atlas’s build script from STEP Bible’s tagged texts; the counting rules are set out below. Read the cautions first: word studies are among the easiest places to go wrong.',
  sections: [
    { h: 'How to use a word study', blocks: [
      { k: 'list', items: [
        '**A gloss is a brief aid, not the meaning of every occurrence.** “Spirit” is a gloss for *rûaḥ*; in a given verse it may mean wind, breath, mood or the Spirit of God.',
        '**A Strong’s number identifies a dictionary entry, not an interpretation.** Two words with the same number can be used quite differently, and one English word can stand for several numbers.',
        '**A word’s range of meaning is not its meaning in each verse.** Reading every sense into one occurrence (“illegitimate totality transfer”) is a well-known fallacy (James Barr, The Semantics of Biblical Language, 1961; D. A. Carson, Exegetical Fallacies, 2nd ed. 1996).',
        '**Roots and etymology rarely decide meaning.** What a word’s parts once meant (*meta* + *noia*, *kāḇôḏ* “heavy”) can illuminate it, but usage at the time decides what it meant; English “nice” once meant “ignorant.”',
        '**Context, syntax, genre and usage control meaning.** Read the sentence, the paragraph and the book before the dictionary.',
        '**Transliteration is a spelling aid, not a pronunciation guide.** Ancient pronunciation is reconstructed and varied by period and region.' ] },
      { k: 'p', x: 'Where an entry draws a modern analogy (to the Trivium, or to a modern writer such as Jordan Peterson), it is labelled as a modern analogy: an aid to thinking, not a claim about what the ancient word meant.' } ] },
    { h: 'The words', widget: 'words', blocks: [] },
    { h: 'How the counts are made', deep: true, blocks: [
      { k: 'list', items: [
        '**Hebrew:** words of the Leningrad Codex as tagged in STEP Bible’s TAHOT, counted by the Strong’s number of the main word (prefixes and suffixes are not counted separately). Aramaic words have their own numbers and are counted under those. How written (*ketiv*) and read (*qere*) forms are distinguished follows STEP Bible’s tagging and has not been independently checked.',
        '**Greek:** words of the Nestle–Aland text as tagged in STEP Bible’s TAGNT. Words found only in the Textus Receptus (behind the King James) are not counted.',
        '**Glosses:** the English glosses STEP Bible attaches to each occurrence, grouped as they are spelled. They show how STEP’s translators rendered the word, not how any particular English Bible does.',
        '**What was not done:** the counts have not been compared with other concordances, which use other texts and rules and so give somewhat different numbers.' ] } ] }
  ],
  questions: ['Pick a word whose English translation has narrowed over time (charity, soul, heart, faith). How does the older meaning change a familiar verse?', 'Why might one Hebrew word (rûaḥ) for wind, breath and spirit be hard to translate consistently?', 'Find a sermon or book that says “the word really means …”. Is the claim about usage, about etymology, or about the whole range of meaning?'],
  sources: [
    { t: 'Bible Hub: Strong’s Hebrew and Greek', url: 'https://biblehub.com/strongs.htm' },
    { t: 'Blue Letter Bible lexicon', url: 'https://www.blueletterbible.org/' },
    { t: 'STEP Bible brief lexicons (TBESH, TBESG), abridged from Brown–Driver–Briggs and Abbott-Smith', url: 'https://github.com/STEPBible/STEPBible-Data/tree/master/Lexicons' },
    { t: 'James Barr, The Semantics of Biblical Language (Oxford: Oxford University Press, 1961)' },
    { t: 'D. A. Carson, Exegetical Fallacies (2nd ed., Grand Rapids: Baker, 1996)' }
  ]
});
