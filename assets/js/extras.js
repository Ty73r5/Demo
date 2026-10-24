/* Second-edition additions to the base datasets. Loaded after them, before app.js. Tags: F C D T S B. */

/* ── More traditions ─────────────────────────────────────────── */
TRADITIONS.push(
  { id: 'islam', name: 'Islam', era: 'AD 610 onward', core: 'Tawḥīd, the absolute oneness of God; Muhammad as the seal of the prophets; the Qur’an as God’s speech; Jesus (ʿĪsā) as a great prophet and the Messiah (al-Masīḥ).',
    texts: 'The Qur’an; the Hadith collections; the works of al-Ghazālī, Ibn Rushd (Averroes), Rūmī',
    gave: [['F', 'The Qur’an affirms Jesus’ virgin birth (3:47, 19:20), calls him the Messiah and the “Word” from God (4:171), and gives Mary a whole sura (19). She is named more often in the Qur’an than in the New Testament.'],
           ['F', 'Syriac Christian scholars, among them Ḥunayn ibn Isḥāq, translated Aristotle, Galen and Plato into Arabic in 9th-century Baghdad. Through Arabic and then Latin translation (Toledo, 12th century) much of Aristotle returned to the West and reached Aquinas.'],
           ['F', 'Islamic philosophers such as Avicenna and Averroes shaped scholastic metaphysics. Aquinas calls Averroes simply “the Commentator.”']],
    differs: [['F', 'The Qur’an denies that Jesus was crucified: “they killed him not, nor crucified him, but so it was made to appear to them” (4:157). It rejects the Trinity (4:171, 5:73) and Jesus’ divine sonship. For Christians the cross and the Trinity are the centre of the faith.'],
              ['F', 'Muslim conquest took Jerusalem (638), Egypt, Syria and North Africa from Christian rule. The Crusades and the Reconquista answered it, with violence on all sides.']],
    bridge: 'Gal.4.4', bn: 'Both traditions honour Jesus born of Mary. They divide over whether he is “the Son” sent “when the fulness of the time was come,” and over the cross.' },
  { id: 'hermetic', name: 'Hermeticism', era: '1st–3rd c. AD texts; revived from 1463', core: 'Hermes Trismegistus (“thrice-great”): God as Mind, the cosmos as God’s image, the soul’s ascent by knowledge. “As above, so below” comes from the medieval Emerald Tablet.',
    texts: 'Corpus Hermeticum (Poimandres), Asclepius, Emerald Tablet',
    gave: [['F', 'Marsilio Ficino translated the Corpus Hermeticum into Latin for Cosimo de’ Medici (1463, printed 1471), before he finished Plato. Hermes was then thought to be a contemporary of Moses.'],
           ['F', 'It fed Renaissance magic, Pico della Mirandola’s Oration on the Dignity of Man (1486), Christian Kabbalah (Reuchlin, 1517), alchemy, the Rosicrucian manifestos and later esoteric orders.']],
    differs: [['F', 'In 1614 the scholar Isaac Casaubon showed from its Greek vocabulary that the Corpus was written in the early Christian centuries, not in Moses’ time. Its echoes of Genesis and John are borrowings, not prophecies.'],
              ['S', 'Hermetic salvation comes through knowledge for an elite. The Gospel offers grace to everyone and is preached openly.']],
    bridge: '1Tim.6.20', bn: 'Paul warns Timothy against “oppositions of science falsely so called” (gnōsis): knowledge that claims to be higher than the faith.' },
  { id: 'norse', name: 'Germanic & Norse', era: 'c. AD 200–1200', core: 'Odin, Thor and the gods of Asgard; the world-tree Yggdrasil; heroic honour; fate (wyrd); Ragnarök, the twilight of the gods.',
    texts: 'Poetic Edda, Prose Edda (Snorri Sturluson, c. 1220), Beowulf, the sagas',
    gave: [['F', 'The Heliand (c. 830), an Old Saxon gospel poem, presents Christ as a generous lord and the apostles as his thanes, the gospel retold in the warrior idiom.'],
           ['F', 'The Dream of the Rood (carved in runes on the Ruthwell Cross, 8th century) makes the cross a speaking warrior and Christ “the young hero” who strips himself to mount it.'],
           ['F', 'Tolkien, a scholar of Beowulf, built Middle-earth from this northern imagination, joined to his Catholic faith.']],
    differs: [['D', 'Odin hangs on the tree for nine nights, wounded by a spear, to win the runes (Hávamál 138). The poem was written down after Christianisation, so it is debated whether it borrows from the Gospel or preserves older myth. Odin sacrifices himself to himself for wisdom; Christ gives himself for others.'],
              ['S', 'Northern myth ends in Ragnarök, where even the gods die. The Gospel ends in resurrection and a new creation. Tolkien called this the “eucatastrophe.”']],
    bridge: 'Col.2.15', bn: 'Christ as victor over the powers: “he made a shew of them openly, triumphing over them in it.” The Heliand’s warrior-Christ draws on this.' }
);
THREADS.push(
  { id: 'sacrifice', name: 'Sacrifice', q: 'Why do humans offer up what they value?', rows: [
      ['Göbekli Tepe', 'c. 9600 BC', 'Monumental carved pillars and feasting debris: worship before farming or cities', 'C'],
      ['Mesopotamia', 'Feeding the gods', 'Offerings sustain the gods, who need human labour', 'F'],
      ['Israel', 'Torah', 'Offerings as gift, communion and atonement. The prophets insist God desires mercy, not sacrifice {{Hos.6.6}}', 'F'],
      ['Girard', 'The scapegoat', 'Societies discharge violence onto a victim and sacralise it', 'D'],
      ['Christ', 'Once for all', 'The priest who offers himself, ending the sacrificial system {{Heb.10.10}}', 'B'] ] },
  { id: 'afterlife', name: 'After death', q: 'What survives?', rows: [
      ['Egypt', 'The ka and ba', 'The soul’s parts survive through ritual, preserved body and name', 'F'],
      ['Mesopotamia', 'The house of dust', 'A grey underworld for all: “the house where they sit in darkness” (Gilgamesh)', 'F'],
      ['Early Israel', 'Sheol', 'A shadowy realm. Later, resurrection hope appears {{Dan.12.2}}', 'C'],
      ['Greece', 'Immortal soul', 'Plato: the soul is freed from the body at death (Phaedo)', 'F'],
      ['India', 'Rebirth', 'Saṃsāra until liberation', 'F'],
      ['Christ', 'Resurrection of the body', 'Not escape from matter but its renewal: “it is sown in corruption; it is raised in incorruption” {{1Cor.15.42}}', 'B'] ] }
);

/* ── More thinkers ───────────────────────────────────────────── */
THINKERS.push(
  { id: 'irenaeus', n: 'Irenaeus of Lyon', y: 180, w: 'Against Heresies', x: '“The glory of God is a human being fully alive.” Defended the four Gospels and one Creator against the Gnostics.', t: 'F', to: ['athanasius'] },
  { id: 'athanasius', n: 'Athanasius', y: 318, w: 'On the Incarnation', x: '“He became what we are that we might become what he is.” Exiled five times for the Nicene faith.', t: 'F', to: ['nyssa'] },
  { id: 'nyssa', n: 'Gregory of Nyssa', y: 380, w: 'Life of Moses; Homilies on Ecclesiastes', x: 'Endless ascent into God (epektasis), and the first outright condemnation of slavery.', t: 'F', to: ['dionysius'] },
  { id: 'ephrem', n: 'Ephrem the Syrian', y: 360, w: 'Hymns on Faith', x: 'Theology as poetry in the Semitic mode: “the harp of the Spirit.”', t: 'F', to: [] },
  { id: 'dionysius', n: 'Pseudo-Dionysius', y: 500, w: 'The Divine Names, The Mystical Theology', x: 'God beyond being, the celestial hierarchy, the apophatic way.', t: 'F', to: ['aquinas', 'eckhart'] },
  { id: 'damascus', n: 'John of Damascus', y: 730, w: 'On Holy Images; The Fount of Knowledge', x: 'Defended icons because God became matter. Summed up Greek patristic theology.', t: 'F', to: ['aquinas'] },
  { id: 'bernard', n: 'Bernard of Clairvaux', y: 1140, w: 'Sermons on the Song of Songs', x: 'Love mysticism, and patron of the Templars. “Love seeks no cause beyond itself.”', t: 'F', to: ['dante'] },
  { id: 'hildegard', n: 'Hildegard of Bingen', y: 1151, w: 'Scivias', x: 'Visionary, composer, physician, reformer; a Doctor of the Church.', t: 'F', to: [] },
  { id: 'francis', n: 'Francis of Assisi', y: 1225, w: 'Canticle of the Creatures', x: 'Brother Sun and Sister Moon: poverty, peace and the goodness of creation. He visited the Sultan in 1219.', t: 'F', to: ['bonaventure'] },
  { id: 'bonaventure', n: 'Bonaventure', y: 1259, w: 'The Journey of the Mind into God', x: 'All knowledge, the Trivium included, leads back to the Word.', t: 'F', to: ['dante'] },
  { id: 'eckhart', n: 'Meister Eckhart', y: 1320, w: 'German Sermons', x: 'Detachment and the birth of God in the soul’s ground.', t: 'F', to: [] },
  { id: 'erasmus', n: 'Erasmus', y: 1516, w: 'Novum Instrumentum; In Praise of Folly', x: 'Ad fontes, back to the sources: the first printed Greek New Testament, and satire of clerical corruption.', t: 'F', to: ['luther'] },
  { id: 'calvin', n: 'John Calvin', y: 1536, w: 'Institutes of the Christian Religion', x: '“Our wisdom … consists almost entirely of two parts: the knowledge of God and of ourselves.”', t: 'F', to: ['edwards'] },
  { id: 'teresa', n: 'Teresa of Ávila', y: 1577, w: 'The Interior Castle', x: 'The soul as a castle of seven dwellings, with God at the centre.', t: 'F', to: ['john_cross'] },
  { id: 'john_cross', n: 'John of the Cross', y: 1585, w: 'The Dark Night; The Ascent of Mount Carmel', x: '“In the evening of life we shall be judged on love.”', t: 'F', to: [] },
  { id: 'wesley', n: 'John Wesley', y: 1738, w: 'Sermons; Journal', x: 'At Aldersgate “I felt my heart strangely warmed.” Methodism, field preaching, opposition to slavery.', t: 'F', to: [] },
  { id: 'edwards', n: 'Jonathan Edwards', y: 1746, w: 'Religious Affections', x: 'America’s great theologian of the Awakening: true religion lies largely in holy affections, tested by their fruit.', t: 'F', to: [] },
  { id: 'paine', n: 'Thomas Paine', y: 1794, w: 'The Age of Reason', x: 'Deist critic of revelation and champion of the rights of man.', t: 'F', to: ['ingersoll'] },
  { id: 'newman', n: 'John Henry Newman', y: 1845, w: 'Development of Christian Doctrine; Grammar of Assent', x: 'Doctrine grows like a living idea. “To live is to change, and to be perfect is to have changed often.”', t: 'F', to: [] },
  { id: 'ingersoll', n: 'Robert G. Ingersoll', y: 1879, w: 'Some Mistakes of Moses', x: 'The Great Agnostic: reason, liberty and humane reform against dogma.', t: 'F', to: [] },
  { id: 'tolstoy', n: 'Leo Tolstoy', y: 1894, w: 'The Kingdom of God Is Within You', x: 'The Sermon on the Mount taken literally: non-resistance. It shaped Gandhi.', t: 'F', to: ['king'] },
  { id: 'james', n: 'William James', y: 1902, w: 'The Varieties of Religious Experience', x: 'Religion judged “by its fruits, not by its roots.”', t: 'F', to: ['jung'] },
  { id: 'barth', n: 'Karl Barth', y: 1919, w: 'Romans; Church Dogmatics', x: 'God is “wholly other,” known only as he speaks. Chief author of the Barmen Declaration (1934) against the Nazi church.', t: 'F', to: ['bonhoeffer'] },
  { id: 'campbell', n: 'Joseph Campbell', y: 1949, w: 'The Hero with a Thousand Faces', x: 'The monomyth: departure, initiation, return.', t: 'F', to: ['peterson'] },
  { id: 'eliade', n: 'Mircea Eliade', y: 1957, w: 'The Sacred and the Profane', x: 'Sacred time and space, and the hunger of modern people for the eternal return.', t: 'F', to: ['peterson'] },
  { id: 'merton', n: 'Thomas Merton', y: 1948, w: 'The Seven Storey Mountain', x: 'Trappist monk; contemplation and dialogue with Zen and Sufism.', t: 'F', to: [] },
  { id: 'frye', n: 'Northrop Frye', y: 1982, w: 'The Great Code', x: 'The Bible as the mythological framework of Western literature.', t: 'F', to: ['peterson'] },
  { id: 'macintyre', n: 'Alasdair MacIntyre', y: 1981, w: 'After Virtue', x: 'Modern moral language is fragments of a lost tradition; recover the virtues and the telos.', t: 'F', to: [] },
  { id: 'taylor', n: 'Charles Taylor', y: 2007, w: 'A Secular Age', x: 'How belief became one option among others: the “buffered self.”', t: 'F', to: [] }
);
// Wire new influences into existing thinkers.
const _th = Object.fromEntries(THINKERS.map(t => [t.id, t]));
_th.justin.to.push('irenaeus'); _th.plato.to.push('nyssa'); _th.augustine.to.push('bernard'); _th.aquinas.to.push('bonaventure');
_th.luther.to.push('wesley'); _th.kierkegaard.to.push('barth'); _th.jung.to.push('campbell'); _th.augustine.to.push('calvin');

/* ── Ingersoll in his own words ──────────────────────────────── */
INGERSOLL.quotes = [
  ['F', '“An honest God is the noblest work of man.” (“The Gods,” 1872)'],
  ['F', '“In nature there are neither rewards nor punishments, there are consequences.” (“Some Reasons Why,” 1881)'],
  ['F', '“Happiness is the only good. The place to be happy is here. The time to be happy is now. The way to be happy is to make others so.” (his creed)'],
  ['D', '“Hands that help are better far than lips that pray.” (widely attributed to Ingersoll; the original source is uncertain)'],
  ['F', 'He was friends with the preacher Henry Ward Beecher, who publicly praised his oratory, and with Mark Twain, who wrote after hearing him in 1879 that he had never heard such a speech.'],
  ['S', 'A Christian reading: Matthew 25 judges by hands that help. The Gospel does not set prayer against help. It asks for both {{Jas.2.15-16}}.']
];

/* ── Orders: deeper history ─────────────────────────────────── */
(() => {
  const o = Object.fromEntries(ORDERS.map(x => [x.id, x]));
  o.templars.facts.push(
    ['F', 'The charges of 1307 included denying Christ, spitting on the cross, obscene kisses and worshipping an idol. “Baphomet,” probably a corruption of “Mahomet,” appears in a few confessions extracted under torture.'],
    ['F', 'The goat-headed “Baphomet” image is not medieval. It was drawn by the occultist Éliphas Lévi in 1856.']);
  o.masons.facts.push(
    ['F', 'Prince Hall, a free Black man in Boston, was initiated in 1775. African Lodge No. 459 received its charter from London in 1784, the origin of Prince Hall Freemasonry.'],
    ['F', 'The disappearance of William Morgan (1826), who had threatened to publish Masonic rituals, provoked the Anti-Masonic Party (1828), America’s first third party.'],
    ['F', 'Pope Leo XIII’s encyclical Humanum Genus (1884) condemned Freemasonry as naturalist and anti-Christian.'],
    ['F', 'Nazi Germany suppressed the lodges and sent Freemasons to concentration camps. In Italy, the illegal P2 lodge scandal (1981) toppled a government.']);
  o.masons.legends.push(
    ['T', 'Luciferian worship at the top degrees. This comes from Léo Taxil’s hoax (1885–97), which he confessed in 1897. Albert Pike’s Morals and Dogma (1871) is esoteric but contains no such creed.']);
  o.rosicrucians.facts.push(
    ['F', 'The manifestos appeared in the same year (1614) that Isaac Casaubon dated the Hermetic writings to the Christian era, and so undercut the “ancient wisdom” they drew on.'],
    ['F', 'The Lutheran mystic Jacob Boehme (Aurora, 1612) and the Christian Kabbalah of Reuchlin and Pico form the immediate background.']);
})();

/* ── More Verse Lab entries ──────────────────────────────────── */
LAB.push(
  { ref: 'Gen.3.15', title: 'He, she, or it shall bruise', keys: [['הוּא', 'hûʾ', 'H1931', 'he / it (masculine)'], ['יְשׁוּפְךָ', 'yəšûp̄əḵā', 'H7779', 'shall bruise / strike you']],
    notes: [['F', 'The Hebrew pronoun is masculine, referring to the woman’s “seed.” The Septuagint uses a masculine pronoun even though its word for seed is neuter, which may already point to a person.'], ['F', 'The Vulgate reads ipsa, “she,” and so the Douay–Rheims has “she shall crush thy head.” Hence the many images of Mary treading on the serpent. The Nova Vulgata (1979) corrected it to ipsum, “it.”'], ['S', 'Irenaeus calls this the first announcement of the Gospel (protoevangelium): the woman’s offspring defeats the serpent at the cost of a wound.']] },
  { ref: 'Exod.20.13', title: 'Kill or murder?', keys: [['רָצַח', 'rāṣaḥ', 'H7523', 'to kill unlawfully, to murder']],
    notes: [['F', 'The KJV reads “Thou shalt not kill.” Modern translations (NIV, ESV, NRSV) read “murder.” Hebrew has several verbs for killing, and rāṣaḥ is not the one normally used for war or lawful execution.'], ['D', 'Numbers 35 uses rāṣaḥ also of accidental manslaughter, so “murder” can be too narrow. Christian traditions disagree on war and the death penalty, and Jesus extends the command to anger {{Matt.5.22}}.']] },
  { ref: 'Ps.2.12', title: 'Kiss the Son', keys: [['נַשְּׁקוּ־בַר', 'naššəqû-ḇar', 'H1248', '“kiss the son” (bar is Aramaic for son), or “kiss purely”']],
    notes: [['F', 'The Hebrew word for “son” is ben. The psalm uses bar, the Aramaic word, which surprises in a Hebrew poem.'], ['D', 'Jerome’s translation from the Hebrew reads adorate pure, “worship purely.” The Septuagint reads “lay hold of instruction.” The KJV’s “Kiss the Son” follows the Christian messianic reading. It is a genuinely uncertain line.']] },
  { ref: 'Matt.16.18', title: 'Upon this rock', keys: [['Πέτρος / πέτρα', 'Petros / petra', 'G4074/G4073', 'Peter (masculine name) / rock (feminine noun)']],
    notes: [['F', 'In Aramaic, which Jesus spoke, both words would be kêpā, so Peter is called Cephas {{John.1.42}}. Greek needed a masculine form for a man’s name.'], ['D', 'Catholic reading: Peter himself is the rock, and his successors hold the keys (Vatican I, 1870). Protestant readings: the rock is Peter’s confession of faith, or Christ. Orthodox: Peter’s faith shared by all bishops.'], ['F', 'Augustine offered both readings and left the choice to the reader (Retractations 1.21).']] },
  { ref: 'Mark.1.2', title: '“In Isaiah the prophet”', keys: [['ἐν τῷ Ἠσαΐᾳ τῷ προφήτῃ', 'en tō Ēsaia', '—', 'in Isaiah the prophet']],
    notes: [['F', 'The quotation that follows combines Malachi 3:1 and Isaiah 40:3. The oldest manuscripts read “as it is written in Isaiah the prophet.” Later manuscripts, followed by the KJV, “corrected” it to “in the prophets.”'], ['C', 'Textual critics prefer the harder reading, which a scribe is more likely to have smoothed than to have invented. Mark names the major prophet for a composite quotation.']] },
  { ref: 'Luke.23.34', title: 'Father, forgive them', keys: [['⟦ … ⟧', 'double brackets', 'SBLGNT', 'judged a very early addition']],
    notes: [['F', 'The prayer is missing from 𝔓75, Vaticanus, the first corrector of Sinaiticus and Codex Bezae, but present in most manuscripts and quoted by 2nd-century writers.'], ['D', 'Was it added, or deleted by scribes who could not accept that Jerusalem was forgiven after AD 70? Many scholars who doubt it was in Luke still think it is authentic tradition. Stephen echoes it in {{Acts.7.60}}.']] },
  { ref: 'John.1.18', title: 'The only begotten God?', keys: [['μονογενὴς θεός', 'monogenēs theos', 'G3439 G2316', '“the only-begotten God” (oldest manuscripts) / “Son” (later)']],
    notes: [['F', 'The KJV reads “the only begotten Son.” The oldest papyri (𝔓66, 𝔓75) and Sinaiticus and Vaticanus read “only-begotten God,” which SBLGNT and most modern translations follow (“the only God,” ESV).'], ['S', 'Here the older text is the higher Christology, the opposite of the common suspicion that early scribes made Jesus more divine over time.']] },
  { ref: 'Acts.20.28', title: 'His own blood', keys: [['τοῦ αἵματος τοῦ ἰδίου', 'tou haimatos tou idiou', 'G129 G2398', 'with his own blood / with the blood of his Own']],
    notes: [['F', 'Some manuscripts read “church of the Lord.” The stronger witnesses read “church of God, which he purchased with his own blood.”'], ['D', 'The Greek can also mean “with the blood of his own [Son].” Either way the verse is a text-critical and Christological crux.']] },
  { ref: 'Rom.9.5', title: 'Christ … God blessed for ever?', keys: [['ὁ ὢν ἐπὶ πάντων θεὸς εὐλογητός', 'ho ōn epi pantōn theos eulogētos', 'G2316', 'who is over all, God blessed for ever']],
    notes: [['F', 'The earliest manuscripts have no punctuation. A comma after “Christ” and the verse calls Christ God (KJV, NIV, ESV). A full stop and it becomes a doxology to God (RSV: “God who is over all be blessed for ever”).'], ['D', 'Grammar favours the first: Paul’s doxologies usually put “blessed” first. Most recent commentators agree, but the question shows how much hangs on punctuation.']] },
  { ref: 'Rom.16.7', title: 'Junia, of note among the apostles', keys: [['Ἰουνιαν', 'Iounian', 'G2458', 'Junia (a woman’s name) or “Junias”']],
    notes: [['F', 'The KJV reads “Junia,” a common Roman woman’s name. The man’s name “Junias” is unattested in antiquity, yet it appeared in many 20th-century Bibles. John Chrysostom (4th c.) praised this woman worthy to be called an apostle.'], ['D', '“Of note among the apostles” (an apostle herself) or “well known to the apostles” (Burer and Wallace, 2001)? Most scholars favour the first.']] },
  { ref: 'Rev.22.19', title: 'Book of life or tree of life?', keys: [['ξύλου τῆς ζωῆς', 'xylou tēs zōēs', 'G3586', 'the tree of life']],
    notes: [['F', 'Erasmus’ only manuscript of Revelation (minuscule 2814) lacked its last leaf, so in 1516 he translated the final six verses back into Greek from the Latin Vulgate. The Latin he used read libro (“book”), a corruption of ligno (“tree”). So the KJV reads “book of life” where every Greek manuscript reads “tree of life.”'], ['S', 'A vivid case of how one missing page shaped four centuries of English Bibles, and of why the oldest manuscripts matter.']] },
  { ref: 'Rev.13.18', title: '666 or 616?', keys: [['χξϛ', 'six hundred sixty-six', '—', 'written out in words in SBLGNT; some manuscripts use numerals']],
    notes: [['F', 'The oldest papyrus of this passage (𝔓115, c. 3rd century) and Codex Ephraemi read 616. Irenaeus (c. 180) knew both and preferred 666.'], ['C', 'In Hebrew letters “Nero Caesar” adds up to 666, and the Latin spelling to 616. Most scholars think the number points to Nero as the model of the persecuting beast.']] }
);

/* ── More words for the concordance ─────────────────────────── */
LEXICON.push(
  { id: 'kabod', lang: 'heb', w: 'כָּבוֹד', tr: 'kāḇôḏ', s: 'H3519', gloss: 'glory, weight, honour', kjv: 'glory, honour, glorious', refs: ['Exod.33.18', 'Isa.6.3'], note: [['F', 'From kāḇēḏ, “heavy.” Glory is weight: the substance and gravity of a person. “Honour thy father” uses the same root, to give weight to.']] },
  { id: 'qadosh', lang: 'heb', w: 'קָדוֹשׁ', tr: 'qāḏôš', s: 'H6918', gloss: 'holy, set apart', kjv: 'holy, Holy One, saint', refs: ['Isa.6.3', 'Lev.19.2'], note: [['F', 'Holiness is first otherness: set apart for God. The threefold “holy, holy, holy” is Hebrew’s superlative.'], ['S', 'Leviticus makes it practical: be holy, because I am holy, worked out in honest weights, wages paid on time and care for the deaf and blind.']] },
  { id: 'tsedaqah', lang: 'heb', w: 'צְדָקָה', tr: 'ṣəḏāqāh', s: 'H6666', gloss: 'righteousness, right relationship; almsgiving (later Hebrew)', kjv: 'righteousness, justice', refs: ['Gen.15.6', 'Amos.5.24'], note: [['F', 'Righteousness is faithfulness to a relationship, not abstract perfection. In later Hebrew tsedaqah means charity, so giving to the poor counts as justice, not optional kindness.']] },
  { id: 'mishpat', lang: 'heb', w: 'מִשְׁפָּט', tr: 'mišpāṭ', s: 'H4941', gloss: 'justice, judgement, ordinance', kjv: 'judgment, manner, right', refs: ['Amos.5.24', 'Mic.6.8'], note: [['F', 'Paired with tsedaqah throughout the prophets: just structures and right relationships. “Let judgment run down as waters.”']] },
  { id: 'emet', lang: 'heb', w: 'אֱמֶת', tr: 'ʾĕmeṯ', s: 'H571', gloss: 'truth, faithfulness, reliability', kjv: 'truth, true, faithfully', refs: ['Exod.34.6', 'Zech.8.16'], note: [['F', 'From the same root as ʾāman, “firm.” Truth is what holds. Rabbinic tradition notes its letters run first, middle and last of the alphabet: truth stands on the whole.'], ['S', 'This sense of truth as reliability is the background to Jesus’ “I am … the truth.”']] },
  { id: 'torah', lang: 'heb', w: 'תּוֹרָה', tr: 'tôrāh', s: 'H8451', gloss: 'instruction, teaching, law', kjv: 'law', refs: ['Josh.1.8', 'Ps.1.2'], note: [['F', 'From yārāh, “to throw, to point”: instruction that shows the way. “Law” is too narrow, because Torah includes story, poetry and promise.']] },
  { id: 'berit', lang: 'heb', w: 'בְּרִית', tr: 'bərîṯ', s: 'H1285', gloss: 'covenant', kjv: 'covenant, league', refs: ['Gen.9.13', 'Jer.31.31'], note: [['F', 'Covenants were “cut” (kārat bərît), because animals were divided and the parties passed between them, as God alone does in Genesis 15.'], ['F', '“Testament” comes from the Latin testamentum, which renders the Greek diathēkē, used for this word. The “New Testament” is the new covenant.']] },
  { id: 'kipper', lang: 'heb', w: 'כִּפֶּר', tr: 'kipper', s: 'H3722', gloss: 'to atone, cover, purge, ransom', kjv: 'make atonement, purge, reconcile', refs: ['Lev.16.30', 'Lev.17.11'], note: [['F', 'Yom Kippur is the Day of Atonement. Tyndale coined “atonement” (at-one-ment) to render it.'], ['D', 'Whether kipper means “cover,” “wipe clean” or “ransom” is debated, and each sense shapes a theory of the atonement.']] },
  { id: 'goel', lang: 'heb', w: 'גֹּאֵל', tr: 'gōʾēl', s: 'H1350', gloss: 'kinsman-redeemer, avenger, next of kin', kjv: 'redeemer, kinsman, avenger', refs: ['Job.19.25', 'Ruth.4.14'], note: [['F', 'The relative bound to buy back land, free a family member from slavery, or marry a widow to preserve the line, as Boaz does for Ruth.'], ['S', 'Job’s “I know that my redeemer liveth” claims God as next of kin.']] },
  { id: 'satan', lang: 'heb', w: 'שָׂטָן', tr: 'śāṭān', s: 'H7854', gloss: 'adversary, accuser', kjv: 'Satan, adversary', refs: ['Job.1.6', 'Num.22.22'], note: [['F', 'In Numbers the angel of the LORD himself stands as a śāṭān, an obstacle, to Balaam. In Job it is “the satan,” a title: the accuser in the heavenly court.'], ['C', 'The personal Devil of the New Testament develops from these roots through Second-Temple Judaism.']] },
  { id: 'mashiach', lang: 'heb', w: 'מָשִׁיחַ', tr: 'māšîaḥ', s: 'H4899', gloss: 'anointed one: Messiah', kjv: 'anointed, Messiah', refs: ['1Sam.24.6', 'Isa.45.1'], note: [['F', 'Kings, priests and even the Persian Cyrus are “anointed.” Greek Christos translates it. “Jesus Christ” means “Jesus the Messiah.”']] },
  { id: 'yeshuah', lang: 'heb', w: 'יְשׁוּעָה', tr: 'yəšûʿāh', s: 'H3444', gloss: 'salvation, deliverance, victory', kjv: 'salvation, help, deliverance', refs: ['Gen.49.18', 'Isa.12.2'], note: [['F', 'The name Yēšûaʿ (Joshua, Jesus) shares this root: “YHWH saves.” Hence “thou shalt call his name Jesus: for he shall save his people.”']] },
  { id: 'hevel', lang: 'heb', w: 'הֶבֶל', tr: 'heḇel', s: 'H1892', gloss: 'vapour, breath, futility', kjv: 'vanity', refs: ['Eccl.1.2', 'Ps.144.4'], note: [['F', 'Not “meaningless” but “vapour”: real but fleeting, impossible to grasp. Abel’s name is the same word.']] },
  { id: 'tov', lang: 'heb', w: 'טוֹב', tr: 'ṭôḇ', s: 'H2896', gloss: 'good, pleasant, beautiful, beneficial', kjv: 'good, better, well, fair', refs: ['Gen.1.31', 'Mic.6.8'], note: [['F', 'The refrain of creation. The world is “very good,” fit for its purpose and beautiful, not divine and not evil.']] },
  { id: 'yom', lang: 'heb', w: 'יוֹם', tr: 'yôm', s: 'H3117', gloss: 'day; daylight; time, era', kjv: 'day, time, daily, year', refs: ['Gen.1.5', 'Gen.2.4'], note: [['F', 'See the Time folio: one word, three senses, within two chapters.']] },
  { id: 'olam', lang: 'heb', w: 'עוֹלָם', tr: 'ʿôlām', s: 'H5769', gloss: 'long duration, antiquity, forever; (later) world', kjv: 'ever, everlasting, old, perpetual', refs: ['Gen.21.33', 'Eccl.3.11'], note: [['F', 'God “hath set the world (ʿôlām) in their heart”: a longing for eternity built into humanity.']] },
  { id: 'doxa', lang: 'grc', w: 'δόξα', tr: 'doxa', s: 'G1391', gloss: 'glory, splendour; (classically) opinion', kjv: 'glory, honour, praise', refs: ['John.1.14', 'Luke.2.14'], note: [['F', 'In classical Greek doxa meant “opinion,” whence orthodoxy, right opinion. The Septuagint used it for kāḇôḏ, so the word came to mean God’s radiant weight.']] },
  { id: 'hagios', lang: 'grc', w: 'ἅγιος', tr: 'hagios', s: 'G40', gloss: 'holy; plural: saints', kjv: 'holy, saints', refs: ['1Pet.1.16', 'Phil.1.1'], note: [['F', 'Paul calls whole congregations “saints,” the set-apart ones, not a moral elite.']] },
  { id: 'sozo', lang: 'grc', w: 'σῴζω', stem: 'σωσ', tr: 'sōzō', s: 'G4982', gloss: 'to save, heal, make whole, rescue', kjv: 'save, make whole, heal', refs: ['Mark.5.34', 'Luke.19.10'], note: [['F', '“Thy faith hath made thee whole” uses the verb for “saved.” In the Gospels salvation and healing are one word.']] },
  { id: 'euangelion', lang: 'grc', w: 'εὐαγγέλιον', tr: 'euangelion', s: 'G2098', gloss: 'good news, gospel', kjv: 'gospel', refs: ['Mark.1.1', 'Rom.1.16'], note: [['F', 'The Priene calendar inscription (9 BC) calls Augustus’ birthday the beginning of “good news” (euangelia) for the world. Mark’s first line makes the same claim for Jesus.'], ['F', 'English “gospel” is Old English gōd spel, “good tidings.”']] },
  { id: 'kyrios', lang: 'grc', w: 'κύριος', tr: 'kyrios', s: 'G2962', gloss: 'lord, master; the divine name in the Septuagint', kjv: 'Lord, lord, master, sir', refs: ['Rom.10.9', 'Phil.2.11'], note: [['F', '“Jesus is Lord” (Kyrios Iēsous) was the first creed. In a world where “Caesar is lord” was the loyalty test, it was dangerous, and it applied to Jesus the Septuagint’s word for YHWH.']] },
  { id: 'parousia', lang: 'grc', w: 'παρουσία', tr: 'parousia', s: 'G3952', gloss: 'presence, arrival; a royal visit', kjv: 'coming, presence', refs: ['1Thess.4.15', 'Matt.24.27'], note: [['F', 'Used for an emperor’s state visit, when the city went out to meet him and escort him in. That image shapes {{1Thess.4.17}}.']] },
  { id: 'apokalypsis', lang: 'grc', w: 'ἀποκάλυψις', tr: 'apokalypsis', s: 'G602', gloss: 'unveiling, revelation', kjv: 'revelation, appearing, coming', refs: ['Rev.1.1', 'Gal.1.12'], note: [['F', 'Not “catastrophe” but disclosure: the curtain pulled back on what is truly going on.']] },
  { id: 'sarx', lang: 'grc', w: 'σάρξ', tr: 'sarx', s: 'G4561', gloss: 'flesh; human nature; (Paul) life curved in on itself', kjv: 'flesh, carnal', refs: ['John.1.14', 'Gal.5.17'], note: [['S', 'For Paul “flesh” is not the body as bad. It is human existence closed against God. The Word becoming flesh is the opposite of Gnostic contempt for matter.']] },
  { id: 'nous', lang: 'grc', w: 'νοῦς', tr: 'nous', s: 'G3563', gloss: 'mind, intellect, perception', kjv: 'mind, understanding', refs: ['Rom.12.2', '1Cor.2.16'], note: [['F', 'The root of meta-noia. For the Greek Fathers the nous is the eye of the soul, which prayer cleanses.']] },
  { id: 'kenoo', lang: 'grc', w: 'κενόω', tr: 'kenoō', s: 'G2758', gloss: 'to empty', kjv: 'make of no reputation, make void', refs: ['Phil.2.7'], note: [['F', 'The KJV says Christ “made himself of no reputation.” Literally he “emptied himself,” whence kenosis.'], ['S', 'Kenosis is the pattern for humility: power expressed as self-giving, not grasping.']] },
  { id: 'koinonia', lang: 'grc', w: 'κοινωνία', tr: 'koinōnia', s: 'G2842', gloss: 'fellowship, sharing, partnership, communion', kjv: 'fellowship, communion, contribution', refs: ['Acts.2.42', '2Cor.13.14'], note: [['F', 'Also used for a business partnership and for a collection of money (Romans 15:26). Fellowship had economic weight.']] },
  { id: 'baptizo', lang: 'grc', w: 'βαπτίζω', tr: 'baptizō', s: 'G907', gloss: 'to dip, immerse, wash', kjv: 'baptize, wash', refs: ['Matt.28.19', 'Mark.7.4'], note: [['F', 'Used for washing hands and dipping cups as well as for the rite. The debate between immersion and pouring is as old as the Didache, which allows pouring when water is scarce (7.3).']] },
  { id: 'martys', lang: 'grc', w: 'μάρτυς', tr: 'martys', s: 'G3144', gloss: 'witness', kjv: 'witness, martyr', refs: ['Acts.1.8', 'Rev.2.13'], note: [['F', 'A legal witness. So many witnesses died for their testimony that the word came to mean “martyr.”']] },
  { id: 'diabolos', lang: 'grc', w: 'διάβολος', tr: 'diabolos', s: 'G1228', gloss: 'slanderer, accuser; the Devil', kjv: 'devil, false accuser, slanderer', refs: ['Matt.4.1', '1Tim.3.11'], note: [['F', 'From diaballō, “to throw across,” to slander or divide. The same word describes human slanderers in 1 Timothy 3:11.']] },
  { id: 'hypokrites', lang: 'grc', w: 'ὑποκριτής', tr: 'hypokritēs', s: 'G5273', gloss: 'stage actor; pretender', kjv: 'hypocrite', refs: ['Matt.6.2', 'Matt.23.27'], note: [['F', 'A Greek actor who wore a mask. Sepphoris, a few miles from Nazareth, had a theatre, though its date is debated.']] },
  { id: 'skandalon', lang: 'grc', w: 'σκάνδαλον', tr: 'skandalon', s: 'G4625', gloss: 'the trigger-stick of a trap; stumbling block', kjv: 'offence, stumblingblock', refs: ['1Cor.1.23', 'Rom.9.33'], note: [['F', 'The crucified Messiah is the skandalon to Jews and foolishness to Greeks.']] },
  { id: 'hilasterion', lang: 'grc', w: 'ἱλαστήριον', tr: 'hilastērion', s: 'G2435', gloss: 'place or means of atonement; the mercy seat', kjv: 'propitiation, mercyseat', refs: ['Rom.3.25', 'Heb.9.5'], note: [['F', 'In the Septuagint it is the lid of the Ark, sprinkled on the Day of Atonement. Paul says God set forth Christ as the hilastērion: the mercy seat in person.'], ['D', 'Translated “propitiation” (turning away wrath) or “expiation” (removing sin); the choice shapes atonement theology.']] },
  { id: 'kairos', lang: 'grc', w: 'καιρός', tr: 'kairos', s: 'G2540', gloss: 'the right or opportune time; season', kjv: 'time, season, opportunity', refs: ['Mark.1.15', 'Eph.5.16'], note: [['F', 'Distinct from chronos, measured time. Both appear in {{Acts.1.7}}: “times (chronous) or the seasons (kairous).”']] },
  { id: 'chronos', lang: 'grc', w: 'χρόνος', tr: 'chronos', s: 'G5550', gloss: 'time as duration', kjv: 'time, season, while', refs: ['Gal.4.4', 'Acts.1.7'], note: [['F', '“When the fulness of the time (chronou) was come, God sent forth his Son”: history as a vessel filling up.']] },
  { id: 'zoe', lang: 'grc', w: 'ζωή', tr: 'zōē', s: 'G2222', gloss: 'life (as quality); vs. bios, a lifetime or livelihood', kjv: 'life, lifetime', refs: ['John.10.10', 'John.1.4'], note: [['F', '“I am come that they might have life (zōē), and … more abundantly.” Bios is the life you earn and spend; zōē is the life you are given.']] }
);

/* ── More places ─────────────────────────────────────────────── */
LAYERS.thought = { label: 'Writers & mystics', hue: 'ink' };
PLACES.push(
  { id: 'mecca', name: 'Mecca & Medina', lon: 39.83, lat: 21.42, layer: 'ancient', events: [
    { y: 610, t: 'F', x: 'Muhammad’s first revelation (by Muslim tradition) near Mecca. The Hijra to Medina in 622 begins the Islamic calendar.' },
    { y: 638, t: 'F', x: 'Caliph Umar takes Jerusalem from the Byzantines.' } ] },
  { id: 'baghdad', name: 'Baghdad', lon: 44.37, lat: 33.31, layer: 'text', events: [
    { y: 850, t: 'F', x: 'The House of Wisdom era: the Nestorian Christian physician Ḥunayn ibn Isḥāq and his school translate Galen, Aristotle and Plato from Greek through Syriac into Arabic.' } ] },
  { id: 'toledo', name: 'Toledo', lon: -4.03, lat: 39.86, layer: 'text', events: [
    { y: 589, t: 'F', x: 'The Third Council of Toledo: the Visigoths renounce Arianism, and the Filioque enters the Creed.' },
    { y: 1150, t: 'F', x: 'Translators such as Gerard of Cremona render Arabic science and Aristotle into Latin, fuelling the scholastic age.' } ] },
  { id: 'canterbury', name: 'Canterbury', lon: 1.08, lat: 51.28, layer: 'church', events: [
    { y: 597, t: 'F', x: 'Augustine of Canterbury, sent by Pope Gregory the Great, baptises King Æthelberht of Kent.' },
    { y: 1093, t: 'F', x: 'Anselm becomes archbishop, author of “faith seeking understanding.”' },
    { y: 1170, t: 'F', x: 'Thomas Becket murdered in his cathedral; Chaucer’s pilgrims are headed here.' } ] },
  { id: 'cluny', name: 'Cluny', lon: 4.66, lat: 46.43, layer: 'church', events: [
    { y: 910, t: 'F', x: 'The abbey is founded free of lay control. Its reform network of hundreds of houses reshaped the medieval Church.' } ] },
  { id: 'aachen', name: 'Aachen', lon: 6.08, lat: 50.78, layer: 'text', events: [
    { y: 800, t: 'F', x: 'Charlemagne is crowned emperor in Rome. Alcuin of York leads the Carolingian revival from his court here; the clear Carolingian minuscule script becomes the ancestor of our lowercase letters.' } ] },
  { id: 'assisi', name: 'Assisi', lon: 12.61, lat: 43.07, layer: 'thought', events: [
    { y: 1209, t: 'F', x: 'Francis receives papal approval for his brotherhood of poverty.' },
    { y: 1225, t: 'F', x: 'The Canticle of the Creatures, among the first great poems in Italian.' } ] },
  { id: 'avignon', name: 'Avignon', lon: 4.81, lat: 43.95, layer: 'council', events: [
    { y: 1309, t: 'F', x: 'The papacy moves to Avignon under French influence (1309–77). The Western Schism (1378–1417) follows, with two and then three rival popes.' } ] },
  { id: 'constance', name: 'Constance', lon: 9.17, lat: 47.66, layer: 'council', events: [
    { y: 1415, t: 'F', x: 'The Council of Constance ends the Western Schism, condemns Wycliffe posthumously, and burns Jan Hus despite a safe-conduct.' } ] },
  { id: 'prague', name: 'Prague', lon: 14.42, lat: 50.09, layer: 'church', events: [
    { y: 1402, t: 'F', x: 'Jan Hus preaches in Czech at the Bethlehem Chapel, a century before Luther, on Scripture and Church reform.' } ] },
  { id: 'zurich', name: 'Zurich', lon: 8.54, lat: 47.38, layer: 'council', events: [
    { y: 1519, t: 'F', x: 'Zwingli begins preaching straight through Matthew. The Reformed tradition begins.' },
    { y: 1525, t: 'F', x: 'Conrad Grebel baptises adult believers: the Anabaptist movement, ancestor of Mennonites, Amish and Hutterites. Within two years Zurich drowns Felix Manz.' } ] },
  { id: 'munster', name: 'Münster', lon: 7.63, lat: 51.96, layer: 'council', events: [
    { y: 1534, t: 'F', x: 'Radical Anabaptists seize the city as a “New Jerusalem” with polygamy and terror. Its violent suppression (1535) haunted the peaceful Anabaptists for centuries.' } ] },
  { id: 'kiev', name: 'Kyiv', lon: 30.52, lat: 50.45, layer: 'church', events: [
    { y: 988, t: 'F', x: 'Prince Volodymyr is baptised and his people with him in the Dnieper, the birth of Russian and Ukrainian Orthodoxy. The Primary Chronicle says his envoys reported of Hagia Sophia: “we knew not whether we were in heaven or on earth.”' } ] },
  { id: 'moscow', name: 'Moscow', lon: 37.62, lat: 55.75, layer: 'church', events: [
    { y: 1510, t: 'F', x: 'The monk Philotheus: “two Romes have fallen, the third stands, and a fourth there shall not be,” Moscow as the Third Rome.' } ] },
  { id: 'athos', name: 'Mount Athos', lon: 24.33, lat: 40.16, layer: 'thought', events: [
    { y: 963, t: 'F', x: 'Athanasius the Athonite founds the Great Lavra. The Holy Mountain becomes the heart of Orthodox monasticism.' },
    { y: 1340, t: 'F', x: 'The hesychast controversy: Gregory Palamas defends the monks’ prayer of the heart and their vision of uncreated light.' } ] },
  { id: 'lindisfarne', name: 'Lindisfarne & Whitby', lon: -1.8, lat: 55.67, layer: 'text', events: [
    { y: 664, t: 'F', x: 'The Synod of Whitby, under Abbess Hilda, chooses Roman over Irish reckoning of Easter.' },
    { y: 715, t: 'C', x: 'The Lindisfarne Gospels are illuminated. An Old English gloss added c. 950 is the oldest surviving English version of the Gospels.' },
    { y: 793, t: 'F', x: 'Viking raid on Lindisfarne, the conventional start of the Viking Age.' } ] },
  { id: 'lalibela', name: 'Lalibela', lon: 39.04, lat: 12.03, layer: 'church', events: [
    { y: 1200, t: 'C', x: 'Eleven churches carved downward out of solid rock under King Lalibela, a “New Jerusalem” for Ethiopian pilgrims.' } ] },
  { id: 'goa', name: 'Goa', lon: 73.82, lat: 15.5, layer: 'church', events: [
    { y: 1542, t: 'F', x: 'Francis Xavier arrives, beginning Jesuit missions across Asia.' },
    { y: 1560, t: 'F', x: 'The Goa Inquisition begins (to 1812), targeting converted Hindus, Jews and Muslims and the local Syriac Christians.' } ] },
  { id: 'beijing', name: 'Beijing', lon: 116.4, lat: 39.9, layer: 'thought', events: [
    { y: 1601, t: 'F', x: 'Matteo Ricci enters the Forbidden City, dressed as a Confucian scholar, with clocks, maps and Euclid.' } ] },
  { id: 'herrnhut', name: 'Herrnhut', lon: 14.74, lat: 51.02, layer: 'church', events: [
    { y: 1727, t: 'F', x: 'The Moravian community’s prayer watch begins and runs for a hundred years.' },
    { y: 1732, t: 'F', x: 'The first Moravian missionaries leave for the Caribbean, among the first Protestant missionaries, after the Danish-Halle mission to India (1706). Moravians later shape Wesley.' } ] },
  { id: 'lagos', name: 'Lagos', lon: 3.38, lat: 6.52, layer: 'church', events: [
    { y: 1864, t: 'F', x: 'Samuel Ajayi Crowther, a freed slave, is consecrated the first African Anglican bishop. He translated the Bible into Yoruba.' },
    { y: 2010, t: 'F', x: 'Nigeria has one of the world’s largest Christian populations. Africa is now home to about a quarter of all Christians.' } ] },
  { id: 'copenhagen', name: 'Copenhagen', lon: 12.57, lat: 55.68, layer: 'thought', events: [
    { y: 1843, t: 'F', x: 'Kierkegaard publishes Either/Or and Fear and Trembling, attacking comfortable “Christendom.”' } ] },
  { id: 'petersburg', name: 'St Petersburg', lon: 30.32, lat: 59.94, layer: 'thought', events: [
    { y: 1849, t: 'F', x: 'Dostoevsky’s mock execution, then Siberia, where a New Testament given to him became his only book for years.' },
    { y: 1880, t: 'F', x: 'The Brothers Karamazov.' } ] },
  { id: 'avila', name: 'Ávila', lon: -4.7, lat: 40.66, layer: 'thought', events: [
    { y: 1562, t: 'F', x: 'Teresa founds the reformed (Discalced) Carmelite convent of San José, and later writes The Interior Castle (1577).' } ] },
  { id: 'flossenburg', name: 'Flossenbürg', lon: 12.35, lat: 49.73, layer: 'thought', events: [
    { y: 1945, t: 'F', x: 'Dietrich Bonhoeffer hanged on 9 April 1945, weeks before liberation. His last recorded words: “This is the end, for me the beginning of life.”' } ] },
  { id: 'auschwitz', name: 'Auschwitz', lon: 19.2, lat: 50.03, layer: 'thought', events: [
    { y: 1941, t: 'F', x: 'Maximilian Kolbe, a Franciscan priest, volunteers to die in place of a condemned stranger, Franciszek Gajowniczek, who survived the war.' } ] }
);
OFFMAP.push(
  { id: 'azusa', name: 'Los Angeles (Azusa Street)', layer: 'church', events: [
    { y: 1906, t: 'F', x: 'The Azusa Street Revival under William J. Seymour, a Black preacher, with interracial worship and speaking in tongues. Global Pentecostalism grew from it.' } ] },
  { id: 'birmingham', name: 'Birmingham, Alabama', layer: 'thought', events: [
    { y: 1963, t: 'F', x: 'Martin Luther King Jr.’s Letter from Birmingham Jail, citing Augustine, Aquinas, Buber and Tillich.' } ] }
);
