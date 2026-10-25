/* Doctrines across traditions, creeds, heresies, Gospel parallels, typology, the New Testament's use of the Old,
   messianic texts and ways of reading. (Any 't' fields are legacy and unused.) */

window.CHURCH_DOCS = {
  cat: ['Catechism of the Catholic Church', 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM'],
  ort: ['The Orthodox Faith (Orthodox Church in America)', 'https://www.oca.org/orthodoxy/the-orthodox-faith'],
  oo: ['Oriental Orthodox Churches: overview', 'https://en.wikipedia.org/wiki/Oriental_Orthodox_Churches'],
  luth: ['The Book of Concord (1580)', 'https://bookofconcord.org/'],
  ref: ['Westminster Confession of Faith (1646)', 'https://opc.org/wcf.html'],
  ang: ['The Thirty-Nine Articles (1571)', 'https://en.wikipedia.org/wiki/Thirty-nine_Articles'],
  bap: ['The Baptist Faith and Message (2000)', 'https://bfm.sbc.net/bfm2000/'],
  meth: ['Methodist Articles of Religion (1784)', 'https://en.wikipedia.org/wiki/Articles_of_Religion_%28Methodist%29'],
  pent: ['Assemblies of God, Statement of Fundamental Truths', 'https://ag.org/Beliefs/Statement-of-Fundamental-Truths']
};

window.CHURCHES = [
  ['cat', 'Catholic'], ['ort', 'Eastern Orthodox'], ['oo', 'Oriental Orthodox'], ['luth', 'Lutheran'], ['ref', 'Reformed'],
  ['ang', 'Anglican'], ['bap', 'Baptist'], ['meth', 'Methodist'], ['pent', 'Pentecostal']
];

/* Each topic: row of positions, keyed like CHURCHES. Short, precise, checked against each body's own documents. */
window.DOCTRINES = [
  { k: 'Authority', q: 'Where does binding teaching come from?', v: {
    cat: 'Scripture and Tradition, one deposit, interpreted by the Magisterium (Vatican II, Dei Verbum 10).',
    ort: 'Holy Tradition, within which Scripture is supreme, with the seven councils and the Fathers.',
    oo: 'Tradition with the first three councils (Nicaea, Constantinople, Ephesus).',
    luth: 'Scripture alone as the norm that norms. The Book of Concord (1580) is the norm that is normed.',
    ref: 'Scripture alone (Westminster 1.6), with confessions such as Heidelberg (1563) and Westminster (1646) as subordinate standards.',
    ang: 'Scripture first, read with the tradition of the early Church and with reason (Richard Hooker, 1590s).',
    bap: 'Scripture alone. Confessions exist but bind no conscience; each believer is competent before God.',
    meth: 'Scripture, illumined by tradition, reason and experience: the “Wesleyan quadrilateral” (a term coined by Albert Outler, 1964).',
    pent: 'Scripture, with present-day prophecy and gifts tested by it.' } },
  { k: 'Justification', q: 'How is a sinner made right with God?', v: {
    cat: 'By grace, through faith working in love. Righteousness is infused and grows; grace can be cooperated with or lost (Trent, Session 6).',
    ort: 'Salvation as theosis, union with God, by grace with human cooperation (synergy). The legal framing is less central.',
    oo: 'Like the Orthodox: grace, faith, sacraments and ascetic struggle toward union with God.',
    luth: 'By grace alone through faith alone, for Christ’s sake. His righteousness is credited (imputed) to the sinner (Augsburg Confession IV).',
    ref: 'Faith alone, imputed righteousness, within God’s sovereign election.',
    ang: '“We are justified by Faith only” (Article XI), with a wide range of emphasis in practice.',
    bap: 'Faith alone, received personally, usually in a conscious conversion.',
    meth: 'Faith alone, followed by sanctification aimed at “Christian perfection” in love (Wesley).',
    pent: 'Faith alone, often followed by a distinct baptism in the Spirit.' } },
  { k: 'Free will & election', q: 'Who chooses whom?', v: {
    cat: 'Grace comes first and free will truly cooperates. Thomists and Molinists still debate the mechanics.',
    ort: 'Synergy: God’s grace and human freedom work together. Predestination follows God’s foreknowledge.',
    oo: 'Synergy, as in the Orthodox churches.',
    luth: 'The will is bound in spiritual matters, so election to salvation is pure grace. Damnation is not predestined (Formula of Concord XI).',
    ref: 'Unconditional election (Synod of Dort, 1619). The “TULIP” acronym is a later summary.',
    ang: 'Article XVII affirms predestination. In practice the communion holds both Calvinist and Arminian views.',
    bap: 'Historically split between “General” (Arminian) and “Particular” (Calvinist) Baptists.',
    meth: 'Arminian: prevenient grace enables every person to respond.',
    pent: 'Mostly Arminian.' } },
  { k: 'Sacraments', q: 'How many, and what do they do?', v: {
    cat: 'Seven sacraments, which confer grace by the rite performed (ex opere operato).',
    ort: 'Seven “mysteries” is customary, though the number is not rigidly fixed.',
    oo: 'Seven.',
    luth: 'Two (Baptism and the Lord’s Supper), with absolution sometimes counted as a third.',
    ref: 'Two, as signs and seals of the covenant.',
    ang: 'Two “Sacraments of the Gospel,” plus five “commonly called Sacraments” (Article XXV).',
    bap: 'Two ordinances, commanded acts of obedience and witness.',
    meth: 'Two, as means of grace.',
    pent: 'Two ordinances. Some add footwashing.' } },
  { k: 'The Eucharist', q: 'Is Christ present in the bread and wine?', v: {
    cat: 'Transubstantiation: the substance becomes Christ’s body and blood (Lateran IV 1215; Trent).',
    ort: 'A real change (metabolē), received as a mystery without a philosophical definition.',
    oo: 'Real presence, received as a mystery.',
    luth: 'Real presence: Christ’s body and blood “in, with and under” the bread and wine, a sacramental union.',
    ref: 'Calvin: a real but spiritual feeding on Christ by faith. Zwingli: a memorial.',
    ang: 'Real presence, with a wide spectrum of explanation.',
    bap: 'A memorial: “this do in remembrance of me.”',
    meth: 'Real, spiritual presence (United Methodist statement “This Holy Mystery,” 2004).',
    pent: 'Mostly memorial.' } },
  { k: 'Baptism', q: 'Whom, and how?', v: {
    cat: 'Infants and adults; regenerative.',
    ort: 'Infants by triple immersion, given chrismation and first communion at the same rite.',
    oo: 'Infants by immersion, with chrismation.',
    luth: 'Infants; regenerative, received by faith.',
    ref: 'Infants of believers, as a sign of the covenant, like circumcision.',
    ang: 'Infants and adults.',
    bap: 'Believers only, by full immersion.',
    meth: 'Infants and adults; any mode.',
    pent: 'Believers by immersion. Oneness Pentecostals baptise “in Jesus’ name.”' } },
  { k: 'Mary', q: 'Who is she to the believer?', v: {
    cat: 'Theotokos and ever-virgin. Immaculate Conception defined 1854, Assumption 1950. Her intercession is sought.',
    ort: 'Theotokos, ever-virgin, Dormition, highly venerated. The Immaculate Conception as Rome defines it is rejected.',
    oo: 'Theotokos, deeply venerated.',
    luth: 'Theotokos, honoured; Luther held her perpetual virginity. No invocation.',
    ref: 'Honoured as the mother of the Lord. No veneration.',
    ang: 'From honour to full veneration, depending on the parish.',
    bap: 'Honoured as a model believer.',
    meth: 'Honoured.',
    pent: 'Honoured.' } },
  { k: 'Saints & images', q: 'May we ask saints to pray, and use images?', v: {
    cat: 'Yes: veneration, not worship (dulia, not latreia).',
    ort: 'Yes. Icons are theology in colour (Second Nicaea, 787).',
    oo: 'Yes.',
    luth: 'Saints are remembered as examples, and images are allowed, but not invoked (Augsburg Confession XXI).',
    ref: 'No invocation. Images were removed from churches under the second commandment.',
    ang: 'Saints are commemorated; practice varies.',
    bap: 'No.',
    meth: 'Saints are remembered; no invocation.',
    pent: 'No.' } },
  { k: 'After death', q: 'Is there purification after death?', v: {
    cat: 'Purgatory (Florence 1439; Trent). Prayers for the dead.',
    ort: 'Prayers for the dead and an intermediate state. Purgatory as Rome defines it is rejected.',
    oo: 'Prayers for the dead.',
    luth: 'No purgatory.',
    ref: 'No purgatory.',
    ang: 'Article XXII rejects “the Romish doctrine concerning Purgatory.” Anglo-Catholics pray for the dead.',
    bap: 'No purgatory.',
    meth: 'No purgatory.',
    pent: 'No purgatory.' } },
  { k: 'Church order', q: 'Who governs?', v: {
    cat: 'Pope and bishops in apostolic succession. Papal infallibility defined 1870.',
    ort: 'Bishops in council. Self-governing churches, with the Ecumenical Patriarch as first among equals.',
    oo: 'Patriarchs and bishops.',
    luth: 'Varies: bishops in Scandinavia, synods elsewhere.',
    ref: 'Elders, ruling and teaching, in presbyteries.',
    ang: 'Bishops. The Archbishop of Canterbury is first among equals.',
    bap: 'Each congregation governs itself.',
    meth: 'A connected system of conferences, with bishops in American Methodism.',
    pent: 'Varies.' } },
  { k: 'Married clergy', q: 'May priests or ministers marry?', v: {
    cat: 'Latin-rite priests are celibate. Eastern Catholic priests may marry before ordination.',
    ort: 'Priests may marry before ordination. Bishops are drawn from monks.',
    oo: 'As the Orthodox.',
    luth: 'Yes.', ref: 'Yes.', ang: 'Yes.', bap: 'Yes.', meth: 'Yes.', pent: 'Yes.' } },
  { k: 'Women ordained', q: 'May women be ordained pastors or priests?', v: {
    cat: 'No (Ordinatio Sacerdotalis, 1994).',
    ort: 'No priests. The female diaconate is being revived in places.',
    oo: 'No priests. The Armenian Church has ordained deaconesses.',
    luth: 'Varies: the ELCA and its predecessor churches have since 1970; the Missouri Synod does not.',
    ref: 'Varies: the PC(USA) and its predecessors have since 1956; the PCA does not.',
    ang: 'Varies: the Church of England ordained women priests from 1994 and bishops from 2015.',
    bap: 'Varies: the Southern Baptist confession (2000) limits the office of pastor to men.',
    meth: 'Yes (full clergy rights in American Methodism since 1956).',
    pent: 'Often yes; the Assemblies of God has ordained women since its early decades.' } },
  { k: 'The Filioque', q: 'Does the Spirit proceed from the Father “and the Son”?', v: {
    cat: 'Yes. Added at Toledo (589) and used in Rome from 1014.',
    ort: 'No. The Spirit proceeds from the Father alone, as in the original 381 Creed.',
    oo: 'No.',
    luth: 'Yes, inherited from the Western creed.', ref: 'Yes.', ang: 'Yes; some provinces now print the 381 text.', bap: 'Generally not addressed; Western text.', meth: 'Yes.', pent: 'Generally not addressed.' } },
  { k: 'The goal', q: 'What is salvation finally for?', v: {
    cat: 'The beatific vision: seeing God face to face.',
    ort: 'Theosis. Athanasius: “God became man so that man might become god.”',
    oo: 'Union with God.',
    luth: 'Forgiveness, life and salvation, with the resurrection of the body.',
    ref: 'To glorify God and enjoy him forever (Westminster Shorter Catechism, Q1).',
    ang: 'Holiness and the communion of saints.',
    bap: 'Eternal life with Christ.',
    meth: 'Perfect love of God and neighbour, the restoration of the image of God.',
    pent: 'Eternal life with Christ, and the Spirit’s power now.' } }
];

window.CREEDS = [
  { n: 'The Old Roman Symbol → Apostles’ Creed', y: 150, t: 'C', x: 'A baptismal question-and-answer formula used in Rome by the 2nd–3rd century. The full text known as the Apostles’ Creed is fixed by the 8th century. The legend that each apostle wrote one line is medieval.' },
  { n: 'Nicene Creed (325)', y: 325, t: 'F', x: 'The Son is “of one substance” (homoousios) with the Father, “begotten, not made.” It ends abruptly with “And in the Holy Spirit,” followed by anathemas against Arius.' },
  { n: 'Niceno-Constantinopolitan Creed (381)', y: 381, t: 'F', x: 'Expands the article on the Spirit (“the Lord, the giver of life … who spake by the prophets”) and adds “whose kingdom shall have no end” against Marcellus of Ancyra. It is the creed shared by East and West.' },
  { n: 'The Filioque (589 / 1014)', y: 589, t: 'F', x: 'The Third Council of Toledo adds “and the Son” to the procession of the Spirit. Rome first sings it at Mass in 1014. The East counts it among the causes of the schism of 1054.' },
  { n: 'Chalcedonian Definition (451)', y: 451, t: 'F', x: 'One Christ “acknowledged in two natures, without confusion, without change, without division, without separation.”' },
  { n: 'Athanasian Creed (Quicunque vult)', y: 500, t: 'C', x: 'A Latin creed of the 5th–6th century, not by Athanasius: “we worship one God in Trinity, and Trinity in Unity; neither confounding the Persons, nor dividing the Substance.”' },
  { n: 'Augsburg Confession (1530)', y: 1530, t: 'F', x: 'Melanchthon’s statement of Lutheran faith before Emperor Charles V, the foundational Protestant confession.' },
  { n: 'Westminster Confession (1646)', y: 1646, t: 'F', x: 'The classic Reformed standard. Its Shorter Catechism opens: “What is the chief end of man? Man’s chief end is to glorify God, and to enjoy him for ever.”' }
];

/* Heresies placed on two spectra. pos: -2 … +2. */
window.HERESY_SPECTRA = {
  christ: { label: 'Who is Christ?', left: 'Only human', right: 'Only divine', items: [
    { n: 'Ebionites', pos: -2, y: 100, t: 'F', x: 'Jewish-Christian groups who held Jesus to be a human prophet and Messiah, born of Joseph and Mary, and kept the full Law.', a: 'Rejected by Irenaeus and the great Church.' },
    { n: 'Adoptionism', pos: -1.5, y: 190, t: 'F', x: 'Jesus was a man adopted as God’s Son at his baptism (Theodotus, c. 190; Paul of Samosata, condemned at Antioch in 268).', a: 'The Word was God from the beginning {{John.1.1}}.' },
    { n: 'Nestorianism', pos: -0.6, y: 428, t: 'F', x: 'Nestorius divided Christ so sharply into a divine and a human subject that Mary could be called “Christ-bearer” but not “God-bearer.”', a: 'Council of Ephesus (431). The Church of the East later honoured Nestorius but teaches one Christ.' },
    { n: 'Chalcedon', pos: 0, y: 451, t: 'B', x: 'One person, truly God and truly man, two natures united without confusion and without division.', a: 'The shared confession of Catholics, Orthodox and most Protestants.' },
    { n: 'Apollinarianism', pos: 0.7, y: 362, t: 'F', x: 'Apollinaris taught that the divine Word replaced Christ’s human mind.', a: 'Gregory of Nazianzus: “what has not been assumed has not been healed.” Condemned at Constantinople (381).' },
    { n: 'Monothelitism', pos: 0.9, y: 638, t: 'F', x: 'A 7th-century imperial compromise: Christ has two natures but one will.', a: 'Maximus the Confessor resisted it and had his tongue and hand cut off. Condemned at Constantinople III (681).' },
    { n: 'Eutychianism', pos: 1.3, y: 448, t: 'F', x: 'Eutyches held that after the union Christ’s humanity was swallowed up in his divinity, so that he was not of one substance with us. The Oriental Orthodox also reject him; their “one incarnate nature” (miaphysite) formula is not his.', a: 'Chalcedon (451).' },
    { n: 'Docetism', pos: 2, y: 100, t: 'F', x: 'Christ only seemed (dokein) to have a body and to suffer.', a: '“Every spirit that confesseth not that Jesus Christ is come in the flesh is not of God” {{1John.4.3}}. Ignatius: if he only seemed to suffer, then I only seem to be in chains.' } ] },
  god: { label: 'How is God one and three?', left: 'Three gods', right: 'One person', items: [
    { n: 'Tritheism', pos: -2, y: 560, t: 'F', x: 'John Philoponus spoke of three natures and was read as teaching three gods.', a: 'Condemned at Constantinople III (681).' },
    { n: 'Arianism', pos: -1.1, y: 318, t: 'F', x: 'Arius: the Son is the first and greatest creature. “There was when he was not.”', a: 'Nicaea (325): “begotten, not made, of one substance with the Father.” Athanasius was exiled five times defending it.' },
    { n: 'Pneumatomachians', pos: -0.7, y: 370, t: 'F', x: 'The “Spirit-fighters” accepted the Son’s divinity but denied the Spirit’s.', a: 'Basil, On the Holy Spirit (375); Constantinople (381).' },
    { n: 'Nicene faith', pos: 0, y: 381, t: 'B', x: 'One essence (ousia), three persons (hypostaseis), each fully God, none a part, none a mode.', a: 'The Cappadocian settlement.' },
    { n: 'Modalism (Sabellianism)', pos: 1.4, y: 215, t: 'F', x: 'One person who appears successively as Father, Son and Spirit, like an actor’s masks. Tertullian charged Praxeas with having “crucified the Father.”', a: 'Tertullian, Against Praxeas (c. 213). The Son prays to the Father {{John.17.5}}. A modern form is Oneness Pentecostalism (1913–16).' } ] }
};

window.HERESIES_OTHER = [
  { n: 'Gnosticism', y: 140, t: 'F', x: 'Salvation by secret knowledge. The Creator is an ignorant lesser god and matter is a prison.', a: 'Irenaeus, Against Heresies (c. 180): one God made all things, and he made them good.' },
  { n: 'Marcionism', y: 144, t: 'F', x: 'The God of the Old Testament is not the Father of Jesus. Marcion cut the canon down to Luke and Paul.', a: 'The Church kept the Old Testament and both Testaments’ one God.' },
  { n: 'Montanism', y: 156, t: 'F', x: 'The “New Prophecy”: ecstatic prophets claiming the Paraclete’s final revelation. Tertullian joined them.', a: 'The canon is closed to new revelation that adds doctrine.' },
  { n: 'Donatism', y: 311, t: 'F', x: 'Sacraments given by clergy who lapsed under persecution are invalid.', a: 'Augustine: the sacraments belong to Christ, not the minister. Their validity does not depend on his holiness.' },
  { n: 'Pelagianism', y: 411, t: 'F', x: 'Humans can obey God without inner grace, and Adam’s sin harmed only by bad example.', a: 'Carthage (418), Ephesus (431), Orange (529): grace goes before every good act {{John.15.5}}.' }
];


/* Gospel parallels. */
window.SYNOPTIC = [
  { id: 'title', n: 'The inscription on the cross', refs: ['Matt.27.37', 'Mark.15.26', 'Luke.23.38', 'John.19.19'],
    notes: [['F', 'Four wordings: “This is Jesus the King of the Jews” (Matthew); “The King of the Jews” (Mark); “This is the King of the Jews” (Luke); “Jesus of Nazareth the King of the Jews” (John, who adds that it was written in Hebrew, Greek and Latin).'],
            ['S', 'Ancient writers reported the gist of words, not a transcript. All four agree on the charge, which is the historical core.']] },
  { id: 'last', n: 'The last words', refs: ['Matt.27.46', 'Luke.23.46', 'John.19.30'],
    notes: [['F', 'Matthew and Mark: the cry of Psalm 22, in Aramaic. Luke: “Father, into thy hands I commend my spirit” (Psalm 31:5). John: “It is finished” (tetelestai).'],
            ['S', 'The tradition gathers them as the Seven Last Words. Each Gospel shows a different face of the same death: abandonment, trust, completion.']] },
  { id: 'prayer', n: 'The Lord’s Prayer', refs: ['Matt.6.9-13', 'Luke.11.2-4'],
    notes: [['F', 'Luke’s version is shorter: no “which art in heaven,” no “thy will be done,” no “deliver us from evil” in the oldest manuscripts. The KJV’s Luke follows later manuscripts that were harmonised with Matthew.'],
            ['C', 'Most scholars think Luke preserves the shorter form and Matthew the liturgical form used in worship. The doxology at the end of Matthew’s version is a later addition.']] },
  { id: 'beatitudes', n: 'The Beatitudes', refs: ['Matt.5.3', 'Luke.6.20'],
    notes: [['F', 'Matthew: “Blessed are the poor in spirit,” on a mountain, nine beatitudes. Luke: “Blessed be ye poor,” on a level place, four beatitudes with four matching woes.'],
            ['D', 'Two occasions, or one teaching shaped two ways: Matthew stresses inward poverty and Luke material poverty. Both are biblical concerns.']] },
  { id: 'good', n: '“Why callest thou me good?”', refs: ['Mark.10.18', 'Matt.19.17', 'Luke.18.19'],
    notes: [['F', 'Mark and Luke: “Why callest thou me good? there is none good but one, that is, God.” In the oldest manuscripts Matthew reads “Why do you ask me about what is good?” The KJV’s Matthew follows later manuscripts that assimilated it to Mark.'],
            ['C', 'This is a classic case for Markan priority: Matthew appears to soften a saying that might seem to deny Jesus’ goodness.']] },
  { id: 'centurion', n: 'The centurion’s confession', refs: ['Mark.15.39', 'Luke.23.47'],
    notes: [['F', 'Mark: “Truly this man was the Son of God.” Luke: “Certainly this was a righteous man.”'],
            ['S', 'Luke, writing for a Greco-Roman audience, may render the sense in terms they would recognise: the innocent, just man of Plato’s Republic.']] },
  { id: 'temple', n: 'The cleansing of the Temple', refs: ['Mark.11.15', 'John.2.15'],
    notes: [['F', 'The Synoptics place it in Passion Week, as the trigger for the arrest. John places it at the start of the ministry.'],
            ['D', 'Two cleansings (harmonisers), or John arranging his material theologically (most critical scholars).']] },
  { id: 'tomb', n: 'Who came to the tomb?', refs: ['Matt.28.1', 'Mark.16.1', 'Luke.24.10', 'John.20.1'],
    notes: [['F', 'Matthew: two Marys. Mark: two Marys and Salome. Luke: several women, naming Joanna. John: Mary Magdalene alone, then Peter and the Beloved Disciple.'],
            ['S', 'Every account puts women first at the tomb. In a culture that discounted women’s testimony that is an unlikely invention, an argument from embarrassment that is widely granted.']] }
];
/* Typology: type and antitype. */
window.TYPOLOGY = [
  { n: 'The first and last Adam', ot: 'Gen.2.7', nt: '1Cor.15.45', t: 'F', x: 'Paul calls Christ “the last Adam”: the first brought death, the second life.' },
  { n: 'Isaac on the altar', ot: 'Gen.22.8', nt: 'John.1.29', t: 'S', x: 'The father offers his beloved son on a mountain; “God will provide himself a lamb.” Hebrews 11:19 reads Isaac’s return as resurrection “in a figure.”' },
  { n: 'The Passover lamb', ot: 'Exod.12.46', nt: 'John.19.36', t: 'F', x: 'John times the crucifixion to the slaughter of the lambs and notes that no bone was broken. Paul: “Christ our passover is sacrificed for us.”' },
  { n: 'Manna', ot: 'Exod.16.15', nt: 'John.6.35', t: 'F', x: 'Bread from heaven in the wilderness becomes “I am the bread of life.”' },
  { n: 'The bronze serpent', ot: 'Num.21.9', nt: 'John.3.14', t: 'F', x: 'What wounded is lifted up and heals whoever looks: “so must the Son of man be lifted up.”' },
  { n: 'The sign of Jonah', ot: 'Jonah.1.17', nt: 'Matt.12.40', t: 'F', x: 'Three days in the fish: Jesus’ own chosen sign of his burial and resurrection.' },
  { n: 'Melchizedek', ot: 'Gen.14.18', nt: 'Heb.7.3', t: 'F', x: 'A priest-king of Salem with bread and wine, “without father, without mother,” a priesthood outside Levi.' },
  { n: 'The Red Sea', ot: 'Exod.14.22', nt: '1Cor.10.2', t: 'F', x: 'Israel “baptized unto Moses in the cloud and in the sea”: passage through water from slavery to freedom.' },
  { n: 'Temple and body', ot: '1Kgs.8.27', nt: 'John.2.19', t: 'F', x: '“Destroy this temple, and in three days I will raise it up”: the place where God dwells becomes a person.' },
  { n: 'The Day of Atonement', ot: 'Lev.16.15', nt: 'Heb.9.12', t: 'F', x: 'The high priest enters the holiest once a year with blood. Christ enters “once” with his own.' },
  { n: 'Joseph', ot: 'Gen.50.20', nt: 'Acts.2.23', t: 'S', x: 'Betrayed by his brothers, raised to the right hand of power, and forgiving: “ye thought evil against me; but God meant it unto good.”' },
  { n: 'Eve from the side', ot: 'Gen.2.21', nt: 'John.19.34', t: 'S', x: 'Augustine: from the sleeping Adam’s side, Eve; from the side of Christ asleep in death, blood and water, the sacraments by which the Church is born.' },
  { n: 'Elijah who returns', ot: 'Mal.4.5', nt: 'Matt.11.14', t: 'F', x: 'Malachi’s closing promise; Jesus identifies John the Baptist as the Elijah who was to come.' }
];

/* Where the New Testament follows the Greek Old Testament (or another text) against the Masoretic Hebrew. */
window.NT_USE = [
  { n: 'A body prepared', ot: 'Ps.40.6', nt: 'Heb.10.5', t: 'F', x: 'The Hebrew says “mine ears hast thou opened” (literally “dug”). The Septuagint has “a body hast thou prepared me,” and Hebrews builds its argument on that reading.' },
  { n: 'The angels worship him', ot: 'Deut.32.43', nt: 'Heb.1.6', t: 'F', x: '“Let all the angels of God worship him” is missing from the Masoretic text and the KJV’s Deuteronomy. It is in the Septuagint, and a Qumran manuscript (4QDeutq) has a Hebrew form of it, so Hebrews quotes a genuine ancient text.' },
  { n: 'The residue of men', ot: 'Amos.9.11-12', nt: 'Acts.15.16-17', t: 'F', x: 'At the Council of Jerusalem, James cites Amos in the Septuagint form, “that the residue of men might seek after the Lord.” The Hebrew reads “that they may possess the remnant of Edom,” a difference of a few consonants that the Greek translators read differently.' },
  { n: 'He gave gifts', ot: 'Ps.68.18', nt: 'Eph.4.8', t: 'F', x: 'The psalm says the ascended king “received gifts for men.” Paul says he “gave gifts unto men,” a reading also found in the Aramaic Targum and the Syriac.' },
  { n: 'Out of Egypt', ot: 'Hos.11.1', nt: 'Matt.2.15', t: 'F', x: 'Here Matthew follows the Hebrew (“my son”) and not the Septuagint (“his children”). New Testament writers used several text forms.' },
  { n: 'A virgin', ot: 'Isa.7.14', nt: 'Matt.1.23', t: 'F', x: 'Matthew quotes the Septuagint’s parthenos (see the Verse Lab).' }
];


/* Messianic texts, Jewish and Christian readings. */
window.MESSIANIC = [
  { ref: 'Gen.3.15', n: 'The seed of the woman', jew: 'Enmity between humanity and the serpent; a moral struggle against the evil inclination.', chr: 'The protoevangelium, the first gospel: Irenaeus (c. 180) reads it of Christ crushing the serpent. The Vulgate’s “she shall crush” (ipsa) fed Marian readings.', t: 'D' },
  { ref: 'Gen.49.10', n: 'Until Shiloh come', jew: 'The Aramaic Targum Onkelos already reads it: “until the Messiah comes, whose is the kingdom.”', chr: 'Judah’s sceptre passes to the Messiah of Judah’s line.', t: 'F' },
  { ref: 'Deut.18.15', n: 'A prophet like Moses', jew: 'The line of true prophets.', chr: 'Peter applies it to Jesus in {{Acts.3.22}}.', t: 'F' },
  { ref: 'Ps.2.7', n: '“Thou art my Son”', jew: 'A coronation psalm for the Davidic king. The Talmud (Sukkah 52a) applies Psalm 2 to the Messiah son of David.', chr: 'Applied to the resurrection {{Acts.13.33}} and to Christ’s superiority over angels (Hebrews 1:5).', t: 'F' },
  { ref: 'Ps.110.1', n: '“Sit thou at my right hand”', jew: 'Read of Abraham (Talmud, Nedarim 32b) or of David.', chr: 'The Old Testament verse most quoted or alluded to in the New Testament. Jesus uses it to pose the question of the Messiah’s identity {{Mark.12.36}}.', t: 'F' },
  { ref: 'Isa.9.6', n: 'Wonderful, Counsellor, the mighty God', jew: 'Throne names given to Hezekiah (Rashi), describing the God he serves.', chr: 'A divine child-king, fulfilled in Christ.', t: 'D' },
  { ref: 'Isa.53.5', n: 'The suffering servant', jew: 'Since Rashi, chiefly Israel suffering among the nations; Origen already reports Jews reading it of the people (Against Celsus 1.55). Targum Jonathan calls the servant “the Messiah” but transfers the suffering to others.', chr: 'The clearest prophecy of the Passion. Philip expounds it to the Ethiopian {{Acts.8.35}}.', t: 'D' },
  { ref: 'Dan.7.13', n: 'One like the Son of man', jew: 'Israel personified (compare 7:27), or the Messiah (Talmud, Sanhedrin 98a).', chr: 'Jesus’ favourite self-designation and his answer at his trial {{Mark.14.62}}.', t: 'F' },
  { ref: 'Dan.9.25', n: 'Seventy weeks', jew: 'Most Jewish and critical readings point to the crisis under Antiochus IV (167–164 BC).', chr: 'Julius Africanus (3rd c.) and many after him count 490 years to the time of Christ. The starting decree is debated.', t: 'D' },
  { ref: 'Mic.5.2', n: 'Out of Bethlehem', jew: 'A ruler from David’s town. The Targum reads it of the Messiah.', chr: 'The scribes cite it to Herod {{Matt.2.6}}.', t: 'F' },
  { ref: 'Zech.9.9', n: 'Lowly, riding upon an ass', jew: 'Messianic in the Talmud (Sanhedrin 98a): if Israel is unworthy, the Messiah comes lowly on a donkey.', chr: 'The Triumphal Entry {{Matt.21.5}}.', t: 'F' },
  { ref: 'Zech.12.10', n: 'Whom they have pierced', jew: 'The Talmud (Sukkah 52a) reads it of a slain Messiah son of Joseph.', chr: 'Applied to the spear at the cross {{John.19.37}}.', t: 'F' },
  { ref: 'Jer.31.31', n: 'A new covenant', jew: 'Torah renewed and written on the heart in the age to come.', chr: '“This cup is the new testament in my blood.” Hebrews 8 quotes the passage in full.', t: 'F' }
];

/* Reading Scripture. */
window.SENSES = {
  christian: [
    { k: 'Literal (historical)', q: 'What happened, and what do the words mean?', jer: 'Jerusalem, the city of the Jews.', ex: 'Israel leaves Egypt in the days of Moses.' },
    { k: 'Allegorical', q: 'What does it teach us to believe?', jer: 'The Church of Christ.', ex: 'Our redemption through Christ.' },
    { k: 'Moral (tropological)', q: 'What does it teach us to do?', jer: 'The soul of each person.', ex: 'The soul turning from the misery of sin to grace.' },
    { k: 'Anagogical', q: 'Where are we heading?', jer: 'The heavenly city, the mother of us all.', ex: 'The holy soul departing this world’s slavery for the freedom of eternal glory.' }
  ],
  jewish: [
    { k: 'Peshat', x: 'The plain, contextual sense.' },
    { k: 'Remez', x: 'The hint: allusion and allegory.' },
    { k: 'Derash', x: 'The homiletic or interpretive sense: midrash.' },
    { k: 'Sod', x: 'The secret, mystical sense: Kabbalah.' }
  ],
  notes: [
    ['F', 'The Jerusalem example is John Cassian’s (Conferences 14.8, c. 420). The Exodus example is Dante’s, from his letter to Can Grande, on {{Ps.114.1}}.'],
    ['F', 'A medieval couplet (Augustine of Dacia, 13th c.) sums up the four senses: Littera gesta docet, quid credas allegoria, moralis quid agas, quo tendas anagogia. “The letter teaches deeds; allegory what to believe; the moral sense what to do; anagogy where to aim.”'],
    ['F', 'PaRDeS (an acronym meaning “orchard”) is attested from 13th-century Spain. It is a close Jewish parallel, and the two may have influenced each other.'],
    ['S', 'Trivium in reading: grammar secures the literal sense, logic draws out the doctrine, and rhetoric moves the reader to live it and to hope. Thomas Aquinas insisted that all the spiritual senses rest on the literal (Summa I, q.1, a.10).']
  ],
  rules: [
    ['F', 'Augustine’s rule of love: whoever thinks they understand Scripture but does not build up love of God and neighbour has not yet understood it (On Christian Doctrine 1.36.40).'],
    ['F', 'The rule of faith: read each part in harmony with the whole confession of the Church (Irenaeus, Tertullian).'],
    ['F', 'Vincent of Lérins (434): hold “what has been believed everywhere, always, and by all.”'],
    ['F', 'Luther: Scripture is its own interpreter (sacra scriptura sui ipsius interpres). Clearer passages explain obscure ones.'],
    ['F', 'Hillel’s seven rules (middot), including qal va-ḥomer, “light and heavy.” Jesus argues in this way: “how much more shall your Father” {{Matt.7.11}}.']
  ],
  modern: [
    { n: 'Historical-critical', q: 'Who wrote this, when, from what sources, for whom?', s: 'Recovers original context and exposes anachronism.', b: 'Can dissolve a text into sources and leave no word for today.' },
    { n: 'Form criticism', q: 'What oral form and life-setting lie behind this unit? (Gunkel, Bultmann)', s: 'Shows how communities used texts in worship and teaching.', b: 'Often speculative about settings.' },
    { n: 'Canonical', q: 'What does it mean as part of the whole Bible? (Brevard Childs, 1979)', s: 'Reads the text the Church actually received.', b: 'Can neglect historical development.' },
    { n: 'Literary', q: 'How does the story work: plot, character, repetition, irony? (Robert Alter, 1981)', s: 'Recovers the artistry the ancients took for granted.', b: 'Can bracket the question of history.' },
    { n: 'Theological', q: 'What does God say through this to the Church now?', s: 'Restores Scripture as a living word.', b: 'Can read later doctrine back into the text.' },
    { n: 'Reader-response', q: 'How do readers in different situations hear it?', s: 'Hears overlooked voices (the poor, the colonised, women).', b: 'Can lose any check on the reader.' }
  ]
};
