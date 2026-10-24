/* Text, translation and transmission. Tags: F fact · C consensus · D debated · T tradition · S synthesis · B faith. */

/* Streams of transmission, drawn as a lineage chart. y = approximate year. */
window.STREAMS = [
  { id: 'heb', name: 'Hebrew Bible', nodes: [
    { y: -250, n: 'Dead Sea Scrolls', x: 'c. 250 BC–AD 68. Proto-Masoretic, Septuagint-like and independent text types side by side.' },
    { y: 100,  n: 'Proto-Masoretic standard', x: 'Consonantal text stabilised by c. AD 100 (the Masada and Murabba’at scrolls).' },
    { y: 930,  n: 'Aleppo Codex', x: 'The Masoretes of Tiberias add vowels, accents and marginal notes (masorah). Damaged in 1947.' },
    { y: 1008, n: 'Leningrad Codex', x: 'The oldest complete Hebrew Bible. Basis of BHS (1977) and of the Hebrew in this site.' },
    { y: 1524, n: 'Second Rabbinic Bible', x: 'Ben Hayyim’s Venice edition. Hebrew base of the KJV Old Testament.' } ] },
  { id: 'lxx', name: 'Greek Old Testament', nodes: [
    { y: -250, n: 'Septuagint (LXX)', x: 'Torah c. 250 BC, the rest by c. 100 BC. The Bible most quoted by New Testament writers.' },
    { y: 240,  n: 'Origen’s Hexapla', x: 'Six columns: Hebrew, transliteration, Aquila, Symmachus, LXX, Theodotion. The first critical edition.' },
    { y: 350,  n: 'Great codices', x: 'Vaticanus, Sinaiticus and Alexandrinus carry the LXX with the New Testament. The LXX remains the Orthodox Old Testament.' } ] },
  { id: 'lat', name: 'Latin', nodes: [
    { y: 180,  n: 'Old Latin (Vetus Latina)', x: 'Many uneven translations from Greek. Augustine complains of their number.' },
    { y: 405,  n: 'Jerome’s Vulgate', x: 'Old Testament newly translated from Hebrew, gospels revised from Greek.' },
    { y: 1382, n: 'Wycliffe Bible', x: 'English from the Vulgate.' },
    { y: 1592, n: 'Clementine Vulgate', x: 'Official Catholic edition until the Nova Vulgata (1979).' },
    { y: 1610, n: 'Douay–Rheims', x: 'English Catholic Bible from the Vulgate (NT 1582, OT 1609–10). Revised by Challoner in 1749–52.' } ] },
  { id: 'grk', name: 'Greek New Testament', nodes: [
    { y: 150,  n: 'Early papyri', x: '𝔓52 (John 18, c. 125–175), 𝔓46 (Paul, c. 200), 𝔓66 and 𝔓75 (John and Luke, c. 200).' },
    { y: 340,  n: 'Sinaiticus & Vaticanus', x: 'The oldest complete or near-complete New Testaments. The backbone of modern critical texts.' },
    { y: 900,  n: 'Byzantine majority', x: 'Hundreds of later minuscules. Critical scholars see a smoothed, harmonised text; its defenders see the Church’s preserved text.' },
    { y: 1516, n: 'Erasmus → Textus Receptus', x: 'Erasmus 1516, Stephanus 1550 (verse numbers 1551), Beza. Named “the text received by all” by the Elzevirs in 1633.' },
    { y: 1881, n: 'Critical text', x: 'Tischendorf, Westcott–Hort (1881), Nestle–Aland (28th edition 2012), SBLGNT (2010). Weighs the oldest witnesses.' } ] },
  { id: 'eng', name: 'English Bible', nodes: [
    { y: 1526, n: 'Tyndale', x: 'From Greek and Hebrew. Coins “scapegoat,” “Passover,” “atonement” (at-one-ment).' },
    { y: 1535, n: 'Coverdale', x: 'The first complete printed English Bible. Coins “lovingkindness.”' },
    { y: 1560, n: 'Geneva', x: 'Verses, notes, roman type, affordable.' },
    { y: 1611, n: 'King James', x: 'Revision of the Bishops’ Bible. The text read today is mostly Blayney’s 1769 Oxford standard.' },
    { y: 1901, n: 'ASV', x: 'American edition of the Revised Version. Uses “Jehovah” for YHWH.' },
    { y: 1952, n: 'RSV → NRSV, ESV', x: 'Critical text, formal equivalence. Isaiah 7:14 “young woman” in the RSV causes uproar.' },
    { y: 1978, n: 'NIV, NLT …', x: 'Functional (“thought-for-thought”) equivalence for readability.' } ] }
];

/* Featured verses for the Verse Lab. keys: original-language terms. */
window.LAB = [
  { ref: 'Gen.1.1-2', title: 'In the beginning', keys: [
      ['בְּרֵאשִׁית', 'bərēʾšît', 'H7225', 'in (a) beginning; no article in Hebrew'],
      ['בָּרָא', 'bārāʾ', 'H1254', 'created; in this stem only God is ever its subject'],
      ['אֱלֹהִים', 'ʾĕlōhîm', 'H430', 'God; plural in form, with a singular verb'],
      ['תֹהוּ וָבֹהוּ', 'tōhû wābōhû', 'H8414/H922', 'formless and empty; a rhyming pair'],
      ['תְהוֹם', 'təhôm', 'H8415', 'the deep; often linked to Babylonian Tiamat'],
      ['רוּחַ', 'rûaḥ', 'H7307', 'wind / breath / spirit'],
      ['מְרַחֶפֶת', 'məraḥep̄et', 'H7363', 'hovering or fluttering, like the eagle over its young in Deut 32:11'] ],
    notes: [
      ['F', 'YLT’s “In the beginning of God’s preparing” follows a reading of bərēʾšît as a construct (“when God began to create”). Rashi held it, and the NRSV and NJPS footnote or adopt it.'],
      ['D', 'The plural ʾĕlōhîm with singular verbs is usually explained as a plural of majesty or fullness. Many Fathers read it, with “Let us make man” {{Gen.1.26}}, as a first hint of the Trinity. Jewish exegesis reads the plural as God addressing the heavenly court.'],
      ['S', 'The creation pattern of separating and then naming (light and darkness, waters above and below) follows the order the Trivium teaches: name a thing, distinguish it, then call it good.'],
      ['C', 'Unlike the Enuma Elish, the deep here is not a defeated goddess. It is inert material under God’s word. Sun and moon go unnamed (“greater light,” “lesser light”), which reads as a deliberate demotion of astral gods.'] ] },
  { ref: 'Exod.3.14', title: 'I AM THAT I AM', keys: [
      ['אֶהְיֶה אֲשֶׁר אֶהְיֶה', 'ʾehyeh ʾăšer ʾehyeh', 'H1961', 'I am / I will be what I am / will be'],
      ['ἐγώ εἰμι ὁ ὤν', 'egō eimi ho ōn', 'LXX', 'I am the One who is (Septuagint)'] ],
    notes: [
      ['F', 'The Hebrew imperfect can be present or future: “I will be what I will be” (a promise of presence, see 3:12 “I will be with thee”) or “I am who I am” (self-existence).'],
      ['F', 'The Septuagint’s “the One who is” moved the name toward Greek ontology. The Vulgate’s Ego sum qui sum and the Douay’s “I AM WHO AM” follow it.'],
      ['F', 'Aquinas (Summa I, q.13, a.11) calls “He Who Is” the most proper name of God, because God’s essence is his existence.'],
      ['D', 'Jesus’ “Before Abraham was, I am” {{John.8.58}} uses egō eimi absolutely. The hearers’ reach for stones (8:59) suggests they heard a claim to the divine name. Some scholars read the phrase as emphatic self-identification only.'] ] },
  { ref: 'Deut.6.4', title: 'The Shema', keys: [
      ['שְׁמַע', 'šəmaʿ', 'H8085', 'hear, and so obey; one verb in Hebrew'],
      ['יְהוָה', 'YHWH', 'H3068', 'the divine name; read aloud as Adonai, “Lord”'],
      ['אֶחָד', 'ʾeḥād', 'H259', 'one; the same word as “one flesh” in Gen 2:24'] ],
    notes: [
      ['F', 'In the Masoretic text the last letters of šəmaʿ (ע) and ʾeḥād (ד) are written large. Together they spell ʿēd, “witness.”'],
      ['T', 'Rabbinic tradition reads the enlarged letters as Israel bearing witness to God’s oneness.'],
      ['F', '“Jehovah” (YLT, ASV) combines the consonants YHWH with the vowels of Adonai, which the Masoretes wrote in as a reminder to say Adonai. The KJV prints LORD in small capitals instead, though this digital text loses them.'],
      ['B', 'Jesus calls this the first commandment {{Mark.12.29}}. Christians hold that the Trinity confesses this one God and does not add to him.'] ] },
  { ref: 'Isa.7.14', title: 'Virgin or young woman?', keys: [
      ['הָעַלְמָה', 'hā-ʿalmāh', 'H5959', 'the young woman (of marriageable age)'],
      ['παρθένος', 'parthenos', 'G3933', 'Septuagint and Matthew: virgin, maiden'] ],
    notes: [
      ['F', 'ʿalmāh means a young woman of marriageable age. It does not by itself specify virginity, for which Hebrew has bətûlāh. Rebekah is called both {{Gen.24.43}}.'],
      ['F', 'The Septuagint’s Jewish translators, two centuries before Christ, chose parthenos. Matthew quotes that Greek {{Matt.1.23}}.'],
      ['F', 'The RSV (1952) and NRSV read “young woman,” while the KJV, NIV and ESV read “virgin.” The RSV choice provoked protests, including at least one public burning of the translation.'],
      ['S', 'Steelman for the Christian reading: the sign is addressed to the “house of David” (plural “you”) and the child is named God-with-us. The prophecy can have a near fulfilment in Ahaz’s day and a fuller one in Christ, as Matthew’s typological reading implies.'] ] },
  { ref: 'Isa.53.11', title: 'He shall see light', keys: [
      ['יִרְאֶה', 'yirʾeh', 'H7200', 'he shall see'],
      ['אוֹר', 'ʾôr', 'H216', 'light; present in the Great Isaiah Scroll, absent in the Masoretic text'] ],
    notes: [
      ['F', 'The Great Isaiah Scroll (1QIsaᵃ), 4QIsaᵈ and the Septuagint read “he shall see light.” The Masoretic text has no object.'],
      ['F', 'The NRSV (“he shall see light”) and NIV (“the light of life”) adopt the Qumran reading. The KJV, made before the scrolls were found, could not.'],
      ['S', 'Light after the servant’s death sharpens the passage’s vindication theme, which Christians read as resurrection.'] ] },
  { ref: 'Ps.22.16', title: 'They pierced my hands', keys: [
      ['כָּאֲרִי', 'kāʾărî', 'H738 / H3738', 'Masoretic vowels read “like a lion (ʾărî) my hands and my feet”; the Open Scriptures tagging links it instead to kārâ, “dig”'],
      ['ὤρυξαν', 'ōryxan', 'LXX', 'Septuagint: “they dug / pierced”'] ],
    notes: [
      ['F', 'The Masoretic text (Hebrew v.17) reads kaʾari, “like a lion.” The Septuagint reads “they dug.” A Psalms scroll from Naḥal Ḥever (5/6Ḥev Ps, 1st century AD) reads the verb form כארו (kaʾaru).'],
      ['D', 'Whether kaʾaru means “pierced,” “bound” or “dug” is debated, as is whether “like a lion” is the older text. Jewish translations usually keep “like a lion”; Christian ones “pierced.”'],
      ['S', 'Jesus prays the psalm’s first line on the cross {{Matt.27.46}}. Whatever the verb, the psalm as a whole runs from abandonment to praise, a shape the Church reads as Passion and Easter.'] ] },
  { ref: 'Matt.4.17', title: 'Repent, or do penance?', keys: [
      ['μετανοεῖτε', 'metanoeite', 'G3340', 'change your mind; turn the whole self'],
      ['pœnitentiam agite', 'Vulgate', 'Latin', 'do penance'] ],
    notes: [
      ['F', 'The Vulgate’s poenitentiam agite could be heard as “perform the sacrament of penance.” The Douay–Rheims keeps “Do penance.”'],
      ['F', 'Erasmus rendered it resipiscite, “come to your senses,” in his 1519 Latin. Luther’s first thesis (1517) turns on the same Greek: the whole life of the believer is to be repentance.'],
      ['C', 'metanoia (meta “after/change” + nous “mind”) gathers up the Hebrew šûb, “turn, return” {{Ezek.18.30}}. Repentance in this sense is a reorientation of the whole person, more than regret.'] ] },
  { ref: 'Luke.2.14', title: 'Good will toward men', keys: [
      ['εὐδοκία / εὐδοκίας', 'eudokia / eudokias', 'G2107', 'good pleasure; one letter (ς) changes the sentence'] ],
    notes: [
      ['F', 'Late manuscripts (the Textus Receptus) have the nominative eudokia: “peace, good will toward men” (KJV). The oldest (Sinaiticus, Vaticanus and Alexandrinus in their first hands) have the genitive eudokias: “peace among men of [his] good pleasure” (ASV, ESV).'],
      ['F', 'The Vulgate’s hominibus bonae voluntatis became the Douay’s “men of good will.” The sense moves from God’s favour to the hearers’ disposition.'],
      ['S', 'In the older reading, peace is God’s gift to those he favours, which makes the verse about grace more than about human goodwill.'] ] },
  { ref: 'John.1.1', title: 'In the beginning was the Logos', keys: [
      ['λόγος', 'logos', 'G3056', 'word, reason, account, ordering principle'],
      ['θεὸς ἦν ὁ λόγος', 'theos ēn ho logos', 'G2316', '“God was the Word”: theos without the article, placed first'] ],
    notes: [
      ['F', 'John echoes Genesis 1:1 (“In the beginning”) and takes up a word already rich in Heraclitus, the Stoics and Philo. In Greek it is “the reason in things.” In Jewish usage it is the creative word of God, “By the word of the LORD were the heavens made” {{Ps.33.6}}.'],
      ['C', 'theos without the article is qualitative, not indefinite. “What God was, the Word was” (NEB) captures it. The reading “a god” (New World Translation) is rejected by nearly all Greek grammarians.'],
      ['F', 'Erasmus (1519) rendered logos as Sermo (“discourse”). The Chinese Union Bible uses 道 (Dao). Goethe’s Faust tries “Word,” then “Mind,” then “Power,” and settles on “In the beginning was the Deed.”'],
      ['S', 'Logos is the root of “logic.” A faith that names its Lord the Logos commits itself to reason as well as to revelation.'] ] },
  { ref: 'John.3.16', title: 'Only begotten', keys: [
      ['μονογενής', 'monogenēs', 'G3439', 'only, unique, one-of-a-kind; “only-begotten” in older tradition'],
      ['αἰώνιος', 'aiōnios', 'G166', 'of the age (to come); eternal'] ],
    notes: [
      ['D', 'monogenēs is from monos (“only”) and genos (“kind”). Most modern lexicons give “only, unique”: “one and only” (NIV), “only” (ESV, NRSV). The Nicene tradition and the KJV, following Jerome’s unigenitus, read “only-begotten,” stressing eternal generation. Isaac is called monogenēs {{Heb.11.17}} though Abraham had other sons, which favours “unique.”'],
      ['F', 'YLT renders aiōnios as “age-during.” Its literalism shows the Jewish two-age frame (this age and the age to come) behind “eternal life.”'] ] },
  { ref: 'John.21.15', title: 'Lovest thou me?', keys: [
      ['ἀγαπᾷς', 'agapas', 'G25', 'do you love (agapaō)'],
      ['φιλῶ', 'philō', 'G5368', 'I love, as a friend (phileō)'] ],
    notes: [
      ['F', 'Jesus asks twice with agapaō and the third time with phileō. Peter answers each time with phileō. English uses “love” throughout and the shift disappears.'],
      ['D', 'Many modern scholars hold the verbs to be stylistic variation, since John uses them interchangeably elsewhere (3:35 and 5:20). Others, from the Fathers on, see Jesus coming down to meet Peter where he is.'] ] },
  { ref: '1Cor.13.13', title: 'Charity or love?', keys: [
      ['ἀγάπη', 'agapē', 'G26', 'self-giving love; rare in classical Greek, central in the New Testament'] ],
    notes: [
      ['F', 'The KJV renders agapē here as “charity,” from the Vulgate’s caritas (dearness, costly esteem). In modern English “charity” has narrowed to almsgiving, so the word now misleads.'],
      ['F', 'Faith, hope and love are the three theological virtues. With the four cardinal virtues of Plato and {{Wis.8.7}} (prudence, justice, fortitude, temperance) they form the classical seven.'] ] },
  { ref: 'Rom.3.28', title: 'By faith alone?', keys: [
      ['πίστει', 'pistei', 'G4102', 'by faith / trust / faithfulness; no word for “alone” in the Greek'] ],
    notes: [
      ['F', 'Luther’s 1522 German adds allein (“alone”). In his Open Letter on Translating (1530) he argues that German idiom requires it and that the sense is Paul’s.'],
      ['F', 'The only New Testament verse with “faith only” (pisteōs monon) denies it: {{Jas.2.24}}.'],
      ['S', 'Both can be read together. Paul excludes “works of the law” as the ground of acceptance, and James excludes a faith that bears no fruit. Most Lutheran and Catholic theologians agreed on this in the Joint Declaration on Justification (1999).'] ] },
  { ref: '1John.5.7-8', title: 'The Johannine Comma', keys: [
      ['ἐν τῷ οὐρανῷ … ', 'Comma Johanneum', '—', '“in heaven, the Father, the Word, and the Holy Ghost: and these three are one”'] ],
    notes: [
      ['F', 'The words about the Father, Word and Spirit appear in no Greek manuscript before the 14th century except as late marginal additions. They surface first in Latin, c. 380 (Priscillian), probably as a gloss.'],
      ['F', 'Erasmus omitted them in 1516 and 1519 and added them in 1522. They entered the Textus Receptus and the KJV. The ASV and all critical texts omit them.'],
      ['C', 'Trinitarian doctrine does not rest on this verse. Nicaea (325) and Constantinople (381) never cite it.'] ] },
  { ref: 'Mark.16.9', title: 'The ending of Mark', keys: [
      ['⟦ … ⟧', 'double brackets', 'SBLGNT', 'editors mark the passage as a later, though early, addition'] ],
    notes: [
      ['F', 'Codices Sinaiticus and Vaticanus end Mark at 16:8: “for they were afraid.” Vaticanus leaves a blank column after it. Eusebius and Jerome say the most accurate copies end there.'],
      ['F', 'Irenaeus quotes 16:19 c. 180, so the longer ending is very old. It remains canonical for Catholics and Orthodox and is printed (bracketed) in almost all Bibles.'],
      ['D', 'Whether Mark meant to end at 16:8, lost his ending, or had it supplied is debated.'] ] },
  { ref: 'John.8.7', title: 'He that is without sin', keys: [
      ['ἀναμάρτητος', 'anamartētos', 'G361', 'sinless, without missing the mark'] ],
    notes: [
      ['F', 'The story of the woman taken in adultery (7:53–8:11) is absent from 𝔓66, 𝔓75, Sinaiticus and Vaticanus. It first appears in Codex Bezae (c. 400), and some manuscripts place it after Luke 21:38.'],
      ['C', 'Many scholars think the story is authentic tradition about Jesus that “floated” before finding a home. Papias (c. 110, via Eusebius) knew a story of a woman accused of many sins.'] ] },
  { ref: 'Mark.1.41', title: 'Moved with compassion, or with anger?', keys: [
      ['σπλαγχνισθεὶς / ὀργισθεὶς', 'splanchnistheis / orgistheis', 'G4697/G3710', 'moved with compassion / becoming angry'] ],
    notes: [
      ['F', 'Most manuscripts read “moved with compassion” (KJV). Codex Bezae and some Old Latin read “becoming angry,” which the SBLGNT adopts.'],
      ['D', 'The harder reading (anger) is more likely to have been softened than invented. If original, the anger may be at the disease and the exclusion it caused, not at the man.'] ] }
];

window.MANUSCRIPT_FACTS = [
  { n: '≈ 5,800+', l: 'Greek New Testament manuscripts catalogued', t: 'F' },
  { n: '≈ 1,800', l: 'manuscripts of Homer’s Iliad, the next-best-attested ancient work', t: 'C' },
  { n: '1', l: 'medieval manuscript for Tacitus, Annals books 1–6 (9th century)', t: 'F' },
  { n: '≈ 400,000+', l: 'textual variants, most spelling and word order; few both meaningful and viable', t: 'D' }
];

window.KJV_RULES = [
  ['F', 'Rule 1: the Bishops’ Bible is to be followed and “as little altered as the truth of the original will permit.”'],
  ['F', 'Rule 3: “the old ecclesiastical words to be kept, viz. the word church not to be translated congregation.” Tyndale had used “congregation” for ekklēsia.'],
  ['F', 'Rule 6: no marginal notes except to explain Hebrew or Greek words, a reaction against the Geneva notes.'],
  ['F', 'The 1611 edition included the Apocrypha, about 8,400 marginal notes and alternative readings, and a preface, “The Translators to the Reader,” defending the use of many translations.']
];
