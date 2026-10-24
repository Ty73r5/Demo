/* Canon data. Tags: F fact · C consensus · D debated · T tradition · S synthesis · B faith. */
window.CANON_TRADITIONS = [
  { id: 'jew', name: 'Jewish Tanakh', count: '24 books', note: 'The same content as the Protestant Old Testament, counted differently (the Twelve Prophets are one book, Samuel, Kings and Chronicles one each, Ezra–Nehemiah one). Order: Torah, Nevi’im (Prophets), Ketuvim (Writings).' },
  { id: 'pro', name: 'Protestant', count: '66 books', note: '39 + 27. Follows the Hebrew canon for the Old Testament, on Jerome’s principle of “Hebrew verity.” The Apocrypha may be read “for example of life” but not to establish doctrine (Anglican Article VI). Lutheran and Anglican lectionaries still use some of them.' },
  { id: 'cat', name: 'Roman Catholic', count: '73 books', note: '46 + 27. Includes the seven deuterocanonical books and the Greek additions to Esther and Daniel. Defined dogmatically at Trent (1546), following the lists of Hippo (393), Carthage (397) and Florence (1442).' },
  { id: 'ort', name: 'Eastern Orthodox', count: '≈ 76–79 books', note: 'Follows the Septuagint. Adds 1 Esdras, 3 Maccabees, the Prayer of Manasseh and Psalm 151 to the Catholic list. 4 Maccabees sits in an appendix. Boundaries vary between Greek, Russian and other churches. Affirmed at the Synod of Jerusalem (1672).' },
  { id: 'eth', name: 'Ethiopian Orthodox Tewahedo', count: '81 books', note: 'The widest canon. It alone preserves 1 Enoch and Jubilees complete, alongside 1–3 Meqabyan (different books from Greek Maccabees). Its “broader” New Testament adds church-order books: Sinodos, the Book of the Covenant, Clement and the Didascalia.' },
  { id: 'syr', name: 'Church of the East (Peshitta)', count: '22-book NT', note: 'The Syriac Peshitta New Testament omits 2 Peter, 2–3 John, Jude and Revelation, which were disputed in the East when the Syriac canon took shape.' }
];

/* Status per tradition: c = canonical, a = appendix or read but not canon, n = absent. Order: jew pro cat ort eth */
window.CANON_ROWS = [
  { book: 'Tobit', s: 'naccc', note: 'Aramaic and Hebrew fragments found at Qumran (4Q196–200). The negative Golden Rule appears at {{Tob.4.16}}.' },
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
  { id: 'core', name: 'Shared core', tag: 'F', blurb: 'Accepted by every major church: the 39 books of the Hebrew Bible and 22 New Testament books (four Gospels, Acts, the 13 letters under Paul’s name, Hebrews, James, 1 Peter, 1 John).',
    items: [
      { n: 'Torah, Prophets, Writings', d: 'c. 1000–150 BC', t: 'C', x: 'Jesus names the threefold shape: “the law of Moses, and the prophets, and the psalms” {{Luke.24.44}}.' },
      { n: 'Four Gospels', d: 'c. 65–100', t: 'C', x: 'By c. 180 Irenaeus insists on exactly four, “as there are four zones of the world.” The four are already cited together in the mid-2nd century.' },
      { n: 'Letters of Paul', d: 'c. 50–65', t: 'C', x: 'Seven are undisputed by critical scholars (Romans, 1–2 Corinthians, Galatians, Philippians, 1 Thessalonians, Philemon). The others are debated. 2 Peter already calls Paul’s letters scripture {{2Pet.3.16}}.' } ] },
  { id: 'anti', name: 'Once disputed, now received', tag: 'F', blurb: 'Eusebius’ antilegomena (“spoken against”): received gradually and still absent from the Peshitta.',
    items: [
      { n: 'Hebrews', d: 'c. 60–95', t: 'D', x: 'Its author is unknown. Origen: “who wrote the epistle, in truth God knows.” It was doubted in the West until the 4th century.' },
      { n: 'James', d: 'c. 50–100', t: 'D', x: 'Slow to be cited. Luther pushed it to the margins. Its “not by faith only” {{Jas.2.24}} complements Paul rather than contradicting him, on most readings.' },
      { n: '2 Peter, 2–3 John, Jude', d: 'c. 60–130', t: 'D', x: 'Small, late-attested letters. 2 Peter is the most disputed book in the canon on authorship.' },
      { n: 'Revelation', d: 'c. 95', t: 'D', x: 'Accepted early in the West but doubted in the East. It is still never read in the Byzantine Divine Liturgy.' } ] },
  { id: 'deutero', name: 'Deuterocanon', tag: 'F', blurb: 'In the Septuagint, used by the early Church, canonical for Catholics and Orthodox. Protestants call these books the Apocrypha.',
    items: [
      { n: 'Tobit, Judith, Wisdom, Sirach, Baruch, 1–2 Maccabees, Greek Esther & Daniel', d: 'c. 200 BC–AD 50', t: 'F', x: 'The KJV of 1611 printed them between the testaments, and most English Protestant Bibles dropped them after 1826.' } ] },
  { id: 'wider', name: 'Wider Orthodox & Ethiopian', tag: 'F', blurb: 'Canonical in particular ancient churches.',
    items: [
      { n: '1 Esdras, 3 Maccabees, Prayer of Manasseh, Psalm 151', d: '2nd c. BC–1st c. AD', t: 'F', x: 'Greek and Slavonic Bibles. 4 Maccabees, a Stoic-flavoured sermon on reason mastering the passions, is in an appendix.' },
      { n: '1 Enoch, Jubilees, Meqabyan, 4 Baruch', d: '3rd c. BC–2nd c. AD', t: 'F', x: 'Ethiopia. Enoch’s Watchers story expands {{Gen.6.2}}, and Jude quotes it.' } ] },
  { id: 'fathers', name: 'Read in church, never universal', tag: 'F', blurb: 'Orthodox in content and read aloud in some churches, but judged not apostolic. Several sit inside the great 4th–5th-century codices.',
    items: [
      { n: 'Didache', d: 'c. 50–120', t: 'C', x: 'A church manual: the Two Ways, baptism, the Eucharist, and the Lord’s Prayer three times a day. It forbids abortion and infanticide (2.2). Rediscovered in 1873.' },
      { n: '1 Clement', d: 'c. 96', t: 'C', x: 'A letter from Rome to Corinth on order and humility. It is in Codex Alexandrinus.' },
      { n: 'Shepherd of Hermas', d: 'c. 100–150', t: 'F', x: 'Visions on repentance after baptism. It is in Codex Sinaiticus. The Muratorian Fragment says it may be read but not in church as Scripture, being recent.' },
      { n: 'Epistle of Barnabas', d: 'c. 100–132', t: 'F', x: 'An allegorical reading of the Law. It is in Codex Sinaiticus right after Revelation.' },
      { n: 'Apocalypse of Peter', d: 'c. 135', t: 'F', x: 'An early tour of heaven and hell. The Muratorian Fragment accepts it with the note that “some of us” do not want it read.' } ] },
  { id: 'apocr', name: 'Apocryphal gospels & acts', tag: 'F', blurb: 'Popular, legendary expansions. Rejected for public reading, yet they shaped art, liturgy and feast days.',
    items: [
      { n: 'Protoevangelium of James', d: 'c. 150', t: 'F', x: 'Mary’s birth and childhood, and the names Joachim and Anne. A source for Marian feasts and tradition.' },
      { n: 'Infancy Gospel of Thomas', d: '2nd c.', t: 'F', x: 'The boy Jesus brings clay sparrows to life. The same miracle appears in the Qur’an (3:49).' },
      { n: 'Gospel of Peter', d: 'c. 150', t: 'F', x: 'A walking, speaking cross leaves the tomb. Bishop Serapion of Antioch (c. 200) first allowed it, then forbade it as docetic.' },
      { n: 'Gospel of Nicodemus (Acts of Pilate)', d: '4th–5th c.', t: 'F', x: 'Gives a full account of the Harrowing of Hell, which grew from {{1Pet.3.19}}.' },
      { n: 'Acts of Paul and Thecla', d: 'c. 160–190', t: 'F', x: 'A woman apostle who baptises. Tertullian (On Baptism 17) says the presbyter who wrote it was removed from office.' } ] },
  { id: 'gnostic', name: 'Gnostic & heterodox', tag: 'F', blurb: 'Judged contrary to the rule of faith. Most teach salvation by secret knowledge (gnōsis) and many treat the material world, and its Creator, as defective.',
    items: [
      { n: 'Gospel of Thomas', d: 'c. 60–150 (debated)', t: 'D', x: '114 sayings with no passion narrative. About half have Synoptic parallels. Saying 3: “the kingdom is inside you and outside you.” Saying 114 says Mary must be “made male” to enter the kingdom.' },
      { n: 'Gospel of Truth', d: 'c. 140–180', t: 'C', x: 'A Valentinian meditation, possibly by Valentinus himself. Irenaeus mentions a work by this name.' },
      { n: 'Gospel of Philip', d: '3rd c.', t: 'C', x: 'Valentinian sacramental sayings. The famous line about Jesus kissing Mary Magdalene sits in a damaged gap in the manuscript.' },
      { n: 'Apocryphon of John', d: 'c. 180', t: 'C', x: 'The Sethian myth: the Creator is Yaldabaoth, an ignorant lesser god, and Sophia’s fall produced the material world.' },
      { n: 'Gospel of Judas', d: 'c. 140–180', t: 'F', x: 'Irenaeus knew of it c. 180. A Coptic copy (Codex Tchacos) was published in 2006. Its portrait of Judas as hero is disputed in translation.' },
      { n: 'Gospel of Mary', d: '2nd c.', t: 'F', x: 'Mary Magdalene teaches the disciples and Peter objects. Known from the Berlin Codex and two Greek fragments.' } ] },
  { id: 'jewish', name: 'Qumran & Jewish pseudepigrapha', tag: 'F', blurb: 'The library around Jesus’ world. Never anyone’s Bible, but essential for reading it.',
    items: [
      { n: 'Community Rule (1QS)', d: 'c. 100 BC', t: 'F', x: 'Two spirits (light and darkness), a covenant community, and expectation of “the Messiahs of Aaron and Israel.”' },
      { n: 'War Scroll (1QM)', d: '1st c. BC', t: 'F', x: 'The final war of the Sons of Light against the Sons of Darkness.' },
      { n: 'Messianic Apocalypse (4Q521)', d: 'c. 100 BC', t: 'F', x: 'The Lord’s anointed will heal the wounded, revive the dead and bring good news to the poor. This closely matches Jesus’ answer to John {{Luke.7.22}}.' },
      { n: 'Temple Scroll, Copper Scroll, Damascus Document', d: '2nd–1st c. BC', t: 'F', x: 'Ideal temple law, a list of hidden treasure engraved on copper, and a sectarian rule that was first found in the Cairo Genizah in 1896.' } ] }
];

window.CANON_TIMELINE = [
  { y: -132, t: 'F', x: 'The prologue to Sirach mentions “the law, the prophets, and the other books,” the threefold canon taking shape.' },
  { y: 90,   t: 'C', x: 'The “Council of Jamnia” closing the Hebrew canon is a 19th-century hypothesis that most scholars have now abandoned. Rabbinic debate over books like Ecclesiastes continued.' },
  { y: 95,   t: 'F', x: 'Josephus (Against Apion 1.38–41) counts 22 sacred books “justly believed.”' },
  { y: 140,  t: 'F', x: 'Marcion’s truncated canon forces the Church to say what it reads.' },
  { y: 155,  t: 'F', x: 'Justin Martyr (1 Apology 67): on Sundays “the memoirs of the apostles or the writings of the prophets are read.”' },
  { y: 180,  t: 'F', x: 'Irenaeus defends four Gospels and the Old Testament against Gnostic and Marcionite alternatives.' },
  { y: 200,  t: 'D', x: 'The Muratorian Fragment lists most of the New Testament. It is usually dated late 2nd century, though some argue for the 4th.' },
  { y: 325,  t: 'F', x: 'Eusebius sorts books into accepted, disputed and spurious.' },
  { y: 367,  t: 'F', x: 'Athanasius lists the 27 books: “Let no one add to these, nor take anything from them.”' },
  { y: 397,  t: 'F', x: 'Hippo (393) and Carthage (397, 419) fix the Western canon, deuterocanon included.' },
  { y: 405,  t: 'F', x: 'Jerome’s Prologus Galeatus: books outside the Hebrew canon are “apocrypha.” He still translates several of them.' },
  { y: 1442, t: 'F', x: 'The Council of Florence (bull Cantate Domino) repeats the Carthage list.' },
  { y: 1522, t: 'F', x: 'Luther ranks books by how clearly they “promote Christ” (was Christum treibet).' },
  { y: 1546, t: 'F', x: 'Trent defines the canon under anathema, the first dogmatic, binding list in the West.' },
  { y: 1563, t: 'F', x: 'Article VI of the Thirty-Nine Articles: read the Apocrypha “for example of life,” not for doctrine.' },
  { y: 1611, t: 'F', x: 'The KJV prints the Apocrypha as a separate section between the testaments, and its calendar of readings still uses them.' },
  { y: 1672, t: 'F', x: 'The Orthodox Synod of Jerusalem affirms Tobit, Judith, Wisdom, Sirach, Maccabees and the additions to Daniel as Scripture.' },
  { y: 1826, t: 'F', x: 'Bible societies stop printing the Apocrypha. English Protestant Bibles shrink to 66 books.' }
];

window.CANON_STEELMAN = [
  { side: 'For the shorter (Hebrew) Old Testament', t: 'S', pts: [
    'It is the canon of the Jewish community to whom “were committed the oracles of God” {{Rom.3.2}}.',
    'The New Testament never cites a deuterocanonical book with “it is written.”',
    'Jerome, the greatest biblical scholar of the early Church, held the same view.',
    'The threefold shape is attested by Jesus himself {{Luke.24.44}}.' ] },
  { side: 'For the longer (Septuagint) Old Testament', t: 'S', pts: [
    'Most New Testament quotations of the Old Testament follow the Septuagint, the Greek Bible of the apostolic Church.',
    'The New Testament alludes to deuterocanonical books, for example {{Heb.11.35}} and 2 Maccabees 7.',
    'Augustine and the African councils received them, and the Church read them liturgically for 1,100 years before the Reformation.',
    'Qumran shows the boundaries of Scripture were still fluid in Jesus’ day.' ] },
  { side: 'For the widest (Ethiopian) canon', t: 'S', pts: [
    'Jude quotes 1 Enoch as prophecy {{Jude.1.14}}.',
    'Enoch and Jubilees were among the most-copied books at Qumran.',
    'The Ethiopian Church kept a continuous tradition from the 4th century, untouched by later Western debates.' ] }
];

window.CANON_CRITERIA = [
  { n: 'Apostolicity', x: 'Written by an apostle or a close companion (Mark with Peter, Luke with Paul).' },
  { n: 'Rule of faith', x: 'Consistent with the faith handed down: one Creator, the true incarnation, the bodily resurrection.' },
  { n: 'Catholicity', x: 'Received and read widely across the churches, not in one sect or region alone.' },
  { n: 'Antiquity', x: 'Belongs to the apostolic age. Hermas failed this test because it was “written very recently, in our times.”' }
];
