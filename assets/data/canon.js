/* Canons by tradition: rings from the shared core outward, and the books whose status differs. */
window.CANON_TRADITIONS = [
  { id: 'jew', name: 'Jewish Tanakh', count: '24 books', note: 'Jews count their Bible as 24 books. They contain the same books as the Protestant 39-book Old Testament, counted differently (the Twelve Prophets are one book; Samuel, Kings and Chronicles one each; Ezra–Nehemiah one) and arranged in a different order: Torah, Nevi’im (Prophets), Ketuvim (Writings). Verse and chapter numbering also differ in places. Josephus counted 22.' },
  { id: 'pro', name: 'Protestant', count: '66 books', note: '39 + 27. Follows the Hebrew canon for the Old Testament, on Jerome’s principle of “Hebrew verity.” The Apocrypha may be read “for example of life” but not to establish doctrine (Anglican Article VI). Lutheran and Anglican lectionaries still use some of them.' },
  { id: 'cat', name: 'Roman Catholic', count: '73 books', note: '46 + 27 as modern Catholic Bibles count them. Includes the seven deuterocanonical books and the Greek additions to Esther and Daniel. Defined dogmatically at Trent (1546), following the lists of Hippo (393), Carthage (397) and Florence (1442). The decree’s own list names Baruch with Jeremiah and does not name Lamentations separately; it does not state a total [[trentIV]].' },
  { id: 'ort', name: 'Eastern Orthodox', count: '≈ 76–79 books', note: 'Follows the Septuagint. Greek and Slavonic Bibles generally add 1 Esdras, 3 Maccabees, the Prayer of Manasseh and Psalm 151 to the Catholic list, with 4 Maccabees in an appendix; the Slavonic adds 2–3 Esdras. Practice and terminology vary between churches, and there is no single binding list. The Synod of Jerusalem (1672) affirmed several of the deuterocanonical books, such as Wisdom, Judith, Tobit and Sirach, but did not settle every book [[dositheus1672]].' },
  { id: 'eth', name: 'Ethiopian Orthodox Tewahedo', count: '81 books (traditional number)', note: 'The widest canon, and the only one that includes 1 Enoch and Jubilees, alongside 1–3 Meqabyan (different books from Greek Maccabees). The number 81 is traditional, but lists reach it in different ways: scholars distinguish a “narrower” canon, mostly familiar books, from a “broader” one that adds church-order and other works such as the Sinodos, the Book of the Covenant, Ethiopic Clement and the Didascalia. How multi-part works are counted changes the total [[ethiopianCanon]].' },
  { id: 'syr', name: 'Syriac churches (Peshitta)', count: '22-book NT', note: 'The Syriac Peshitta New Testament (5th century in its standard form) omits 2 Peter, 2–3 John, Jude and Revelation, which were disputed in the East. Earlier, Syriac churches read the Gospels in Tatian’s harmony, the Diatessaron. Among the Syriac Orthodox the five books were translated in the Philoxenian (508) and Harklean (616) versions; the Church of the East has traditionally used the 22-book Peshitta [[syriacCanon]].' }
];

/* Status per tradition: c = canonical, a = appendix or read but not canon, n = absent. Order: jew pro cat ort eth */
window.CANON_ROWS = [
  { book: 'Tobit', s: 'naccc', note: 'Aramaic and Hebrew fragments found at Qumran (4Q196–200). The negative Golden Rule appears at {{Tob.4.16}} (4:15 in Bibles that follow the Greek).' },
  { book: 'Judith', s: 'naccc', note: 'A heroine’s deliverance story. Jerome translated it “in one night” and treated it as non-canonical.' },
  { book: 'Wisdom of Solomon', s: 'naccc', note: 'Probably written in Greek in Alexandria, 1st century BC. Its picture of the persecuted righteous man {{Wis.2.18-20}} reads to Christians like the Passion.' },
  { book: 'Sirach (Ecclesiasticus)', s: 'naccc', note: 'Hebrew text recovered at Masada and in the Cairo Genizah. Its translator’s prologue (c. 132 BC) speaks of “the law, the prophets and the other books.”' },
  { book: 'Baruch & Letter of Jeremiah', s: 'naccc', note: 'Catholic Bibles print the Letter as Baruch 6. A Greek fragment of the Letter was found in Qumran Cave 7.' },
  { book: '1–2 Maccabees', s: 'naccn', note: 'History of the revolt of 167–160 BC and the origin of Hanukkah. Hebrews 11:35 likely alludes to the martyrs of 2 Maccabees 7 {{Heb.11.35}}. Ethiopia has its own 1–3 Meqabyan instead.' },
  { book: 'Additions to Esther & Daniel', s: 'naccc', note: 'Greek Esther adds prayers that name God, who is never named in Hebrew Esther. Daniel gains Susanna, Bel and the Dragon, and the Song of the Three.' },
  { book: '1 Esdras', s: 'naacc', note: 'A Greek retelling of Ezra–Nehemiah. Printed in the KJV Apocrypha, and in the appendix of the Clementine Vulgate as “3 Esdras.”' },
  { book: '2 Esdras (4 Ezra)', s: 'naaac', note: 'A Jewish apocalypse after AD 70 with Christian additions. Canonical in Ethiopia as Ezra Sutuel. Appendix in the Vulgate and the KJV Apocrypha.' },
  { book: 'Prayer of Manasseh', s: 'naaca', note: 'A penitential prayer appended to 2 Chronicles or the Odes. Appendix in the Vulgate.' },
  { book: '3 Maccabees', s: 'nnncn', note: 'Persecution of Egyptian Jews under Ptolemy IV. Despite the title, it has nothing to do with the Maccabean revolt.' },
  { book: 'Psalm 151', s: 'nnncc', note: 'A Hebrew form was found at Qumran in the Great Psalms Scroll (11QPsᵃ), showing the text is old.' },
  { book: '1 Enoch', s: 'nnnnc', note: 'Aramaic fragments of four of its five sections survive at Qumran; only the Parables are missing. Quoted directly in {{Jude.1.14-15}}.' },
  { book: 'Jubilees', s: 'nnnnc', note: 'Retells Genesis–Exodus in 49-year cycles. About fifteen Hebrew copies were found at Qumran, more than of many canonical books.' }
];

window.CANON_RINGS = [
  { id: 'core', name: 'Shared core', blurb: 'Accepted by every major church: the 39 books of the Hebrew Bible and 22 New Testament books (four Gospels, Acts, the 13 letters under Paul’s name, Hebrews, James, 1 Peter, 1 John).',
    items: [
      { n: 'Torah, Prophets, Writings', d: 'c. 1000–150 BC', x: 'Jesus names the threefold shape: “the law of Moses, and the prophets, and the psalms” {{Luke.24.44}}.' },
      { n: 'Four Gospels', d: 'c. 65–100', x: 'By c. 180 Irenaeus insists on exactly four, “as there are four zones of the world.” The four are already cited together in the mid-2nd century.' },
      { n: 'Letters of Paul', d: 'c. 50–65', x: 'Seven are undisputed by critical scholars (Romans, 1–2 Corinthians, Galatians, Philippians, 1 Thessalonians, Philemon). The others are debated. 2 Peter already calls Paul’s letters scripture {{2Pet.3.16}}.' } ] },
  { id: 'anti', name: 'Once disputed, now received', blurb: 'Eusebius’ antilegomena (“spoken against”): received gradually and still absent from the Peshitta.',
    items: [
      { n: 'Hebrews', d: 'c. 60–95', x: 'Its author is unknown. Origen: “who wrote the epistle, in truth God knows.” It was doubted in the West until the 4th century.' },
      { n: 'James', d: 'c. 50–100', x: 'Slow to be cited. Luther pushed it to the margins. Its “not by faith only” {{Jas.2.24}} complements Paul rather than contradicting him, on most readings.' },
      { n: '2 Peter, 2–3 John, Jude', d: 'c. 60–130', x: 'Small, late-attested letters. 2 Peter is the most disputed book in the canon on authorship.' },
      { n: 'Revelation', d: 'c. 95', x: 'Accepted early in the West but doubted in the East. It is still never read in the Byzantine Divine Liturgy.' } ] },
  { id: 'deutero', name: 'Deuterocanon', blurb: 'In the Septuagint, used by the early Church, canonical for Catholics and Orthodox. Protestants call these books the Apocrypha.',
    items: [
      { n: 'Tobit, Judith, Wisdom, Sirach, Baruch, 1–2 Maccabees, Greek Esther & Daniel', d: 'c. 200 BC–AD 50', x: 'The KJV of 1611 printed them between the testaments, and most English Protestant Bibles dropped them after 1826.' } ] },
  { id: 'wider', name: 'Wider Orthodox & Ethiopian', blurb: 'Canonical in particular ancient churches.',
    items: [
      { n: '1 Esdras, 3 Maccabees, Prayer of Manasseh, Psalm 151', d: '2nd c. BC–1st c. AD', x: 'Greek and Slavonic Bibles. 4 Maccabees, a Stoic-flavoured sermon on reason mastering the passions, is in an appendix.' },
      { n: '1 Enoch, Jubilees, Meqabyan, 4 Baruch', d: '3rd c. BC–2nd c. AD', x: 'Ethiopia. Enoch’s Watchers story expands {{Gen.6.2}}, and Jude quotes it.' } ] },
  { id: 'fathers', name: 'Read in church, never universal', blurb: 'Orthodox in content and read aloud in some churches, but judged not apostolic. Several sit inside the great 4th–5th-century codices.',
    items: [
      { n: 'Didache', d: 'c. 50–120', x: 'A church manual: the Two Ways, baptism, the Eucharist, and the Lord’s Prayer three times a day. It forbids abortion and infanticide (2.2). Rediscovered in 1873.' },
      { n: '1 Clement', d: 'c. 96', x: 'A letter from Rome to Corinth on order and humility. It is in Codex Alexandrinus.' },
      { n: 'Shepherd of Hermas', d: 'c. 100–150', x: 'Visions on repentance after baptism. It is in Codex Sinaiticus. The Muratorian Fragment says it may be read but not in church as Scripture, being recent.' },
      { n: 'Epistle of Barnabas', d: 'c. 100–132', x: 'An allegorical reading of the Law. It is in Codex Sinaiticus right after Revelation.' },
      { n: 'Apocalypse of Peter', d: 'c. 135', x: 'An early tour of heaven and hell. The Muratorian Fragment accepts it with the note that “some of us” do not want it read.' } ] },
  { id: 'apocr', name: 'Apocryphal gospels & acts', blurb: 'Popular, legendary expansions. Rejected for public reading, yet they shaped art, liturgy and feast days.',
    items: [
      { n: 'Protoevangelium of James', d: 'c. 150', x: 'Mary’s birth and childhood, and the names Joachim and Anne. A source for Marian feasts and tradition.' },
      { n: 'Infancy Gospel of Thomas', d: '2nd c.', x: 'The boy Jesus brings clay sparrows to life. The same miracle appears in the Qur’an (3:49).' },
      { n: 'Gospel of Peter', d: 'c. 150', x: 'A walking, speaking cross leaves the tomb. Bishop Serapion of Antioch (c. 200) first allowed it, then forbade it as docetic.' },
      { n: 'Gospel of Nicodemus (Acts of Pilate)', d: '4th–5th c.', x: 'Gives a full account of the Harrowing of Hell, which grew from {{1Pet.3.19}}.' },
      { n: 'Acts of Paul and Thecla', d: 'c. 160–190', x: 'A woman apostle who baptises. Tertullian (On Baptism 17) says the presbyter who wrote it was removed from office.' } ] },
  { id: 'gnostic', name: 'Gnostic & heterodox', blurb: 'Judged contrary to the rule of faith. Most teach salvation by secret knowledge (gnōsis) and many treat the material world, and its Creator, as defective.',
    items: [
      { n: 'Gospel of Thomas', d: 'c. 60–150 (debated)', x: '114 sayings with no passion narrative. About half have Synoptic parallels. Saying 3: “the kingdom is inside you and outside you.” Saying 114 says Mary must be “made male” to enter the kingdom.' },
      { n: 'Gospel of Truth', d: 'c. 140–180', x: 'A Valentinian meditation, possibly by Valentinus himself. Irenaeus mentions a work by this name.' },
      { n: 'Gospel of Philip', d: '3rd c.', x: 'Valentinian sacramental sayings. The famous line about Jesus kissing Mary Magdalene sits in a damaged gap in the manuscript.' },
      { n: 'Apocryphon of John', d: 'c. 180', x: 'The Sethian myth: the Creator is Yaldabaoth, an ignorant lesser god, and Sophia’s fall produced the material world.' },
      { n: 'Gospel of Judas', d: 'c. 140–180', x: 'Irenaeus knew of it c. 180. A Coptic copy (Codex Tchacos) was published in 2006. Its portrait of Judas as hero is disputed in translation.' },
      { n: 'Gospel of Mary', d: '2nd c.', x: 'Mary Magdalene teaches the disciples and Peter objects. Known from the Berlin Codex and two Greek fragments.' } ] },
  { id: 'jewish', name: 'Qumran & Jewish pseudepigrapha', blurb: 'The library around Jesus’ world. Never anyone’s Bible, but essential for reading it.',
    items: [
      { n: 'Community Rule (1QS)', d: 'c. 100 BC', x: 'Two spirits (light and darkness), a covenant community, and expectation of “the Messiahs of Aaron and Israel.”' },
      { n: 'War Scroll (1QM)', d: '1st c. BC', x: 'The final war of the Sons of Light against the Sons of Darkness.' },
      { n: 'Messianic Apocalypse (4Q521)', d: 'c. 100 BC', x: 'The Lord’s anointed will heal the wounded, revive the dead and bring good news to the poor. This closely matches Jesus’ answer to John {{Luke.7.22}}.' },
      { n: 'Temple Scroll, Copper Scroll, Damascus Document', d: '2nd–1st c. BC', x: 'Ideal temple law, a list of hidden treasure engraved on copper, and a sectarian rule that was first found in the Cairo Genizah in 1896.' } ] }
];

