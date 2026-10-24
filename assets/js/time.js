/* Time: what a day is, how dates are known, readings of the creation days, deep time, sacred rhythm.
   Tags: F documented or measured · C consensus · D debated · T tradition · S synthesis · B faith. */

window.TIME_DAY = [
  { k: 'What Genesis means by “day”', items: [
    ['F', 'The Hebrew yôm (H3117) has three senses within the first two chapters: the daylight hours (“God called the light Day”), a full evening-and-morning day, and an indefinite time (“in the day that the LORD God made the earth and the heavens,” covering the whole creation week) {{Gen.2.4}}.'],
    ['F', '“The evening and the morning were the first day” {{Gen.1.5}}. This is why the Jewish day, and the Sabbath, begins at sunset, and why the Church keeps vigils on the eve of feasts.'],
    ['F', 'The sun, moon and stars appear only on the fourth day {{Gen.1.16}}. Origen already asked (On First Principles 4.3.1, c. 230) who could suppose there were a first, second and third day, with evening and morning, without sun, moon and stars.'],
    ['F', 'Scripture itself relativises human time: “a thousand years in thy sight are but as yesterday” {{Ps.90.4}}, repeated in {{2Pet.3.8}}.'] ] },
  { k: 'What science means by “day”', items: [
    ['F', 'The solar day (noon to noon) averages 24 hours. The sidereal day, one rotation measured against the stars, is 23 hours 56 minutes 4 seconds. The difference is the Earth’s motion around the Sun.'],
    ['F', 'Since 1967 the second has been defined by atoms, not by the Earth: 9,192,631,770 oscillations of a caesium-133 atom. Leap seconds have kept clock time in step with the slowing Earth since 1972. In 2022 the world’s timekeepers voted to stop adding them by 2035.'],
    ['C', 'The day is getting longer. Tidal friction from the Moon slows the Earth by roughly 1.8 milliseconds per century, measured from ancient Babylonian, Chinese and Arab eclipse records. Layered tidal sediments suggest a day of about 22 hours some 620 million years ago.'],
    ['F', 'Your body keeps the day too. The 2017 Nobel Prize in Medicine (Hall, Rosbash and Young) went for the genes of the circadian clock that tune nearly every cell to a roughly 24-hour cycle.'] ] },
  { k: 'Hours in the Gospels', items: [
    ['F', 'Jews and Romans counted twelve hours of daylight from sunrise, so “the third hour” is about 9 a.m. and “the ninth hour” about 3 p.m. An hour was longer in summer than in winter.'],
    ['F', 'Mark says Jesus was crucified at the third hour {{Mark.15.25}}. John says Pilate’s judgement came “about the sixth hour” {{John.19.14}}.'],
    ['D', 'Proposed harmonies: John counts hours from midnight, Roman-style; ancient time-telling was approximate, in three-hour blocks; or John aligns the hour with the slaughter of the Passover lambs. None is certain.'] ] },
  { k: 'Weeks, months and years', items: [
    ['F', 'The seven-day week is rooted in the Sabbath {{Exod.20.11}}. Its planetary day names (Saturn’s day, Sun’s day, Moon’s day) are Roman, 1st century. Constantine made Sunday a day of rest in 321.'],
    ['F', 'The Hebrew calendar is lunisolar: twelve lunar months, with a thirteenth added seven times in every nineteen years (the Metonic cycle) to stay in step with the seasons. Passover falls on 14 Nisan, at a full moon in spring.'],
    ['F', 'Julius Caesar’s calendar (45 BC) assumed a year of 365¼ days, about 11 minutes too long. By 1582 it had drifted ten days, so Pope Gregory XIII’s reform skipped from 4 to 15 October. Britain and its colonies followed in 1752, dropping eleven days.'],
    ['F', 'Many Orthodox churches still keep the Julian calendar for feasts, so their Christmas falls on 7 January in the civil calendar. Their Easter is computed differently too, and coincided with the Western date in 2025, the 1,700th anniversary of Nicaea.'] ] },
  { k: 'How AD and BC were invented', items: [
    ['F', 'In 525 the monk Dionysius Exiguus, building Easter tables, numbered years “from the incarnation of our Lord Jesus Christ” in place of years from the persecuting emperor Diocletian.'],
    ['F', 'Bede’s Ecclesiastical History (731) made AD dating common in Europe, and Bede also counted years before the incarnation. There is no year zero: 1 BC is followed by AD 1.'],
    ['C', 'Dionysius was a few years off. Herod the Great died in 4 BC (Josephus links his death to a lunar eclipse and a Passover), and Jesus was born before Herod’s death, probably 6–4 BC {{Matt.2.1}}.'],
    ['F', 'BCE and CE (“Common Era”) keep exactly the same numbers. The calendar still counts from the estimated birth of Christ.'] ] }
];

window.TIME_METHODS = [
  { n: 'King lists and synchronisms', range: 'c. 2500 BC onward', prec: 'To the year where lists overlap', t: 'F',
    x: 'Rulers’ reigns are chained together, and the chains are tied across nations when two records mention the same event. Jehu of Israel bows before Shalmaneser III on the Black Obelisk (841 BC). Pharaoh Shishak’s campaign appears in {{1Kgs.14.25}} and on the Bubastite Portal at Karnak (c. 925 BC). Gallio’s proconsulship fixes Paul in Corinth (AD 51–52).' },
  { n: 'Astronomy', range: 'Wherever an eclipse or planet is recorded', prec: 'To the day', t: 'F',
    x: 'An Assyrian eponym list records a solar eclipse in the month Simanu in the year of Bur-Sagale. Astronomers calculate it as 15 June 763 BC, which anchors Assyrian and therefore Israelite dates to an exact calendar. Ptolemy’s Canon links Babylonian kings to recorded eclipses.' },
  { n: 'The Crucifixion date', range: 'AD 26–36', prec: 'Two candidate days', t: 'D',
    x: 'Pilate governed AD 26–36, and the Gospels place the death on a Friday at Passover. Astronomical reconstruction of the Jewish calendar gives two strong candidates: 7 April AD 30 and 3 April AD 33 (Humphreys and Waddington, Nature, 1983). Luke 3:1’s “fifteenth year of Tiberius” (c. AD 28–29) for John’s preaching fits either.' },
  { n: 'Radiocarbon', range: 'Up to about 50,000 years', prec: 'Decades to centuries, after calibration', t: 'F',
    x: 'Living things take in carbon-14, which decays with a half-life of about 5,730 years (Willard Libby, 1949; Nobel 1960). Raw dates are calibrated against tree rings and other records (the IntCal20 curve). Tests on the Dead Sea Scrolls in 1991 and 1994–95 broadly confirmed their handwriting dates. The 1988 tests dated the Shroud of Turin to AD 1260–1390, a result still disputed.' },
  { n: 'Tree rings (dendrochronology)', range: 'Back about 12,000 years', prec: 'To the year', t: 'C',
    x: 'Overlapping ring patterns from living and ancient timber build continuous calendars. They are also what makes radiocarbon accurate.' },
  { n: 'Ice cores', range: 'About 800,000 years', prec: 'Annual layers for tens of thousands of years, modelled beyond', t: 'C',
    x: 'Antarctic and Greenland cores preserve snowfall, air bubbles and volcanic ash layer by layer. The EPICA Dome C core reaches about 800,000 years.' },
  { n: 'Radiometric (uranium–lead, argon–argon)', range: 'Thousands to billions of years', prec: 'Often better than 1%', t: 'F',
    x: 'Radioactive parents decay to stable daughters at fixed rates. Clair Patterson (1956) dated meteorites and the Earth to about 4.55 billion years; the current figure is 4.54 ± 0.05 billion. Zircon crystals from Jack Hills, Australia, are 4.4 billion years old.' },
  { n: 'Cosmology', range: 'The age of the universe', prec: 'About ±0.2% within the standard model', t: 'C',
    x: 'Georges Lemaître, a Catholic priest, proposed an expanding universe from a “primeval atom” (1927). Hubble measured the expansion (1929), and Penzias and Wilson found the afterglow, the cosmic microwave background (1965). The Planck satellite (2018) gives 13.8 billion years. A live puzzle remains: expansion rates measured two ways disagree (the “Hubble tension”).' },
  { n: 'Handwriting (palaeography)', range: 'Manuscripts', prec: 'Usually ±25–50 years', t: 'D',
    x: 'Letter shapes change over time. 𝔓52, the John fragment, was long dated c. 125. Brent Nongbri (2005) argued the comparisons allow anything up to the early 3rd century.' },
  { n: 'Layers and pottery (stratigraphy)', range: 'Archaeological sites', prec: 'Relative, then tied to absolute dates', t: 'C',
    x: 'Lower layers are older, and pottery styles change in known sequences. These relative orders are then anchored by radiocarbon, coins and inscriptions.' }
];
window.TIME_LAYERS = [
  ['F', 'Measured now: radioactive decay rates, tree rings, ice layers, starlight, and the cosmic background radiation.'],
  ['C', 'Reconstructed from the measurements: the age of the Earth, the dates of eclipses, and calibrated radiocarbon dates. These are well supported and still open to revision.'],
  ['D', 'Contested reconstructions: the date of the Exodus, the years of the patriarchs, the exact year of the Crucifixion.'],
  ['B', 'Not measurable: why there is something rather than nothing, and what time is for. Science can date the universe. It cannot say whether it is a gift.']
];

window.CREATION_READINGS = [
  { n: 'Young-earth, 24-hour days', who: 'Ussher (1650); Whitcomb and Morris, The Genesis Flood (1961); Answers in Genesis', t: 'S',
    pro: 'The plainest reading: numbered days with “evening and morning,” and the Sabbath commandment rests on them {{Exod.20.11}}. Genealogies give a chain of years.',
    con: 'It conflicts with converging evidence for deep time: radiometric dating, starlight distances, ice cores and tree rings. Defenders must posit created appearance or a different physics.' },
  { n: 'Instantaneous creation', who: 'Philo; Augustine, The Literal Meaning of Genesis (401–415)', t: 'S',
    pro: 'Augustine, with no pressure from modern science, held that God created all things at once. He read the days as an ordering of angelic knowledge and a teaching sequence, citing the Latin of Sirach 18:1, “he created all things together.” Non-literal reading of the days is ancient, not a retreat.',
    con: 'It treats the six-day narrative as non-chronological, which many find strained.' },
  { n: 'Day-age', who: 'Many 19th-century geologists; Hugh Ross', t: 'S',
    pro: 'yôm can mean an age, “a thousand years as a day.” It seeks harmony between Genesis and the scientific sequence.',
    con: 'The order does not match well: plants before the sun, birds before land animals.' },
  { n: 'Gap theory', who: 'Thomas Chalmers (1814); the Scofield Reference Bible (1909)', t: 'S',
    pro: 'An age-long gap between verse 1 and verse 2: the earth “became” waste and void after a primal judgement.',
    con: 'The Hebrew of verse 2 (hāyətāh, “was”) does not naturally mean “became,” and few Hebraists accept it.' },
  { n: 'Framework hypothesis', who: 'Arie Noordtzij (1924); Meredith Kline', t: 'S',
    pro: 'The days form a literary frame. Days 1–3 make realms and days 4–6 fill them with rulers: light / lights, sea and sky / fish and birds, land / animals and humans. Day 7 crowns them. The pattern is unmistakable in the text.',
    con: 'Critics say a frame need not exclude sequence, and that the text reads as narrative.' },
  { n: 'Analogical days', who: 'C. John Collins', t: 'S',
    pro: 'God’s “workweek” is told by analogy to ours, to give the pattern for human work and rest.',
    con: 'It leaves the physical timeline open, which some find too thin.' },
  { n: 'Cosmic temple', who: 'John Walton, The Lost World of Genesis One (2009)', t: 'S',
    pro: 'In ancient Near Eastern texts temples are inaugurated over seven days. Genesis 1 describes the cosmos being given functions as God’s temple, with God taking up rest (his reign) on day 7. It is about function, not material origins.',
    con: 'Debated whether “function” can be cleanly separated from “making.”' },
  { n: 'Historical-critical', who: 'Mainstream biblical scholarship', t: 'C',
    pro: 'A Priestly text, probably shaped in the exile, that answers Babylon’s creation myth: no battle, no rival gods, the sun and moon mere lamps, every human the image of God. It is theology addressed to its own world, not natural science.',
    con: 'If pressed to say the text is “only” polemic, it can lose its claim to tell the truth about God and the world.' }
];
window.CREATION_NOTES = [
  ['F', 'Augustine’s warning (The Literal Meaning of Genesis 1.19.39): it is disgraceful when non-believers hear a Christian talking nonsense about the natural world while claiming Scripture’s support, because they will then reject Scripture on matters they cannot check.'],
  ['F', 'Galileo, in his Letter to the Grand Duchess Christina (1615), quotes Cardinal Baronius: the Holy Spirit intends to teach us how one goes to heaven, not how the heavens go.'],
  ['F', 'Pius XII (Humani Generis, 1950) allowed Catholics to study evolution while holding that God creates each human soul. John Paul II (1996) called evolution “more than a hypothesis.” Francis Collins, who led the Human Genome Project, founded BioLogos (2007) for evolutionary creation.'],
  ['S', 'What Genesis 1 is certainly saying, on every reading: the world is not divine, not an accident, and not a battlefield of gods. It is good, ordered, and spoken into being by one God, who made man and woman alike in his image and gave a rhythm of work and rest.']
];

/* Deep time. ya = years before 2026. cat: cosmos | earth | human | bible | chrono */
window.DEEP_CATS = { cosmos: 'Cosmos', earth: 'Earth & life', human: 'Humankind', bible: 'Biblical history', chrono: 'Traditional creation dates' };
window.DEEP_TIME = [
  { cat: 'cosmos', ya: 13.8e9, n: 'Big Bang', how: 'Cosmic microwave background, expansion rate', found: 'Lemaître 1927; Hubble 1929; Penzias & Wilson 1965; Planck 2018', t: 'C' },
  { cat: 'cosmos', ya: 13.5e9, n: 'First galaxies', how: 'Deep-field light from the James Webb Space Telescope', found: 'JWST, 2022 onward', t: 'C' },
  { cat: 'cosmos', ya: 4.6e9, n: 'The Sun forms', how: 'Meteorite inclusions, stellar models', found: '20th century', t: 'C' },
  { cat: 'earth', ya: 4.54e9, n: 'The Earth forms', how: 'Uranium–lead dating of meteorites', found: 'Patterson 1956', t: 'C' },
  { cat: 'earth', ya: 3.5e9, n: 'Earliest widely accepted life', how: 'Stromatolites and microfossils', found: '1980s–2000s', t: 'C' },
  { cat: 'earth', ya: 2.4e9, n: 'Oxygen fills the air', how: 'Banded iron, sulphur isotopes', found: '1990s–2000s', t: 'C' },
  { cat: 'earth', ya: 538e6, n: 'Cambrian explosion', how: 'Fossils, dated volcanic ash', found: 'Darwin noted the puzzle in 1859', t: 'C' },
  { cat: 'earth', ya: 66e6, n: 'Dinosaurs end', how: 'Iridium layer, Chicxulub crater', found: 'Alvarez 1980', t: 'C' },
  { cat: 'human', ya: 6.5e6, n: 'Human and chimp lines part', how: 'Genetic clocks, fossils', found: '1960s onward', t: 'D' },
  { cat: 'human', ya: 300e3, n: 'Earliest Homo sapiens', how: 'Jebel Irhoud fossils, thermoluminescence', found: 'Published 2017', t: 'C' },
  { cat: 'human', ya: 75e3, n: 'Engraved ochre, Blombos Cave', how: 'Luminescence dating', found: 'Published 2002', t: 'C' },
  { cat: 'human', ya: 36e3, n: 'Chauvet cave paintings', how: 'Radiocarbon', found: 'Discovered 1994', t: 'C' },
  { cat: 'human', ya: 11.6e3, n: 'Göbekli Tepe, the oldest known temple', how: 'Radiocarbon', found: 'Excavated from 1995 (Klaus Schmidt)', t: 'C' },
  { cat: 'human', ya: 5.2e3, n: 'Writing, in Sumer and Egypt', how: 'Stratigraphy, radiocarbon', found: '19th–20th century', t: 'C' },
  { cat: 'bible', ya: 4.0e3, n: 'Abraham (traditional)', how: 'Biblical chronology; no independent record', found: '—', t: 'T' },
  { cat: 'bible', ya: 3233, n: '“Israel” on the Merneptah Stele', how: 'Egyptian regnal dates', found: 'Discovered 1896', t: 'F' },
  { cat: 'bible', ya: 2612, n: 'Fall of Jerusalem, exile', how: 'Babylonian Chronicles', found: '19th–20th century', t: 'F' },
  { cat: 'bible', ya: 1996, n: 'Crucifixion of Jesus', how: 'Roman governors, the Jewish calendar', found: '—', t: 'C' },
  { cat: 'bible', ya: 1701, n: 'Council of Nicaea', how: 'Documents', found: '—', t: 'F' },
  { cat: 'bible', ya: 415, n: 'King James Bible', how: 'Printed date', found: '—', t: 'F' },
  { cat: 'bible', ya: 79, n: 'Dead Sea Scrolls found', how: '—', found: '1947', t: 'F' },
  { cat: 'chrono', ya: 7534, n: 'Byzantine creation era, 5509 BC', how: 'Septuagint genealogies', found: '7th century', t: 'T' },
  { cat: 'chrono', ya: 7224, n: 'Eusebius, 5199 BC', how: 'Septuagint genealogies', found: 'c. 325', t: 'T' },
  { cat: 'chrono', ya: 6029, n: 'Ussher, 4004 BC', how: 'Masoretic genealogies and king lists', found: '1650', t: 'T' },
  { cat: 'chrono', ya: 5786, n: 'Jewish Anno Mundi, 3761 BC', how: 'Seder Olam Rabbah', found: '2nd century AD', t: 'T' }
];
window.DEEP_NOTE = ['F', 'Traditional creation dates differ by up to 1,800 years mainly because the Septuagint gives the patriarchs’ ages at the birth of their heirs about a century higher than the Hebrew text does (Genesis 5 and 11). The Byzantine Church followed the Greek; Ussher followed the Hebrew. Neither the Bible nor any council fixes a date for creation.'];

window.RHYTHMS = [
  { n: 'The day', v: 'Ps.55.17', x: 'Evening, morning and noon. Daniel prayed three times a day, and the Didache asks Christians to pray the Lord’s Prayer three times a day. Monasteries divided the day into the Hours, seven times a day {{Ps.119.164}}.',
    practice: 'Anchor three moments: on waking, at midday, before sleep. Begin the day at evening as Genesis does: rest first, then work.',
    evidence: ['F', 'Circadian rhythm is built into human cells. Adults need at least seven hours of sleep for health (American Academy of Sleep Medicine and Sleep Research Society consensus, 2015).'] },
  { n: 'The week', v: 'Mark.2.27', x: 'One day in seven without production. In Deuteronomy the Sabbath is grounded in liberation from slavery: your servant rests as you do {{Deut.5.15}}.',
    practice: 'Choose a 24-hour Sabbath: no work, no buying, no screens if you can. Worship, eat together, walk, sleep.',
    evidence: ['S', 'Abraham Heschel called the Sabbath “a palace in time.” Unrelieved work erodes attention and relationships. The commandment is less a burden than a boundary.'] },
  { n: 'The year', v: 'Eccl.3.1', x: 'Israel’s feasts (Passover, Weeks, Booths) became the Church’s year: fasting and feasting, waiting and fulfilment.',
    practice: 'Keep at least Advent, Lent and Easter on purpose: a season to wait, a season to strip back, a season to celebrate.',
    evidence: ['F', 'The calendar’s rhythm of fast before feast (Advent before Christmas, Lent before Easter) runs through the whole tradition.'] },
  { n: 'Seven years and fifty', v: 'Lev.25.10', x: 'Every seventh year the land rested and debts were released. Every fiftieth year was jubilee: liberty proclaimed and land returned {{Lev.25.4}}.',
    practice: 'Plan a sabbatical rhythm in your own life: periodic release of debt, possessions and grudges; a reset of what you own and owe.',
    evidence: ['F', 'Jesus’ first sermon in Luke reads Isaiah’s jubilee text {{Luke.4.19}}. The Liberty Bell is inscribed with Leviticus 25:10.'] },
  { n: 'A life', v: 'Ps.90.12', x: '“So teach us to number our days, that we may apply our hearts unto wisdom.” About 70 or 80 years {{Ps.90.10}}. The New Testament adds kairos, the seized moment: “redeeming the time” {{Eph.5.16}}.',
    practice: 'Count your remaining Sabbaths (about 52 a year). Ask what one thing deserves your kairos this season.',
    evidence: ['S', 'Chronos is clock time and kairos is the right time. The Gospel opens with both: “the time (kairos) is fulfilled” {{Mark.1.15}}.'] }
];

window.LITURGICAL_YEAR = {
  label: 'Western Christian year 2025–26',
  seasons: [
    { n: 'Advent', from: '2025-11-30', to: '2025-12-24', c: 'violet', x: 'Four Sundays of waiting for Christ’s coming, at Bethlehem and at the end.' },
    { n: 'Christmas', from: '2025-12-25', to: '2026-01-05', c: 'white', x: 'The twelve days. 25 December is first recorded as the Nativity in the Roman Chronograph of 354.' },
    { n: 'Epiphany', from: '2026-01-06', to: '2026-02-17', c: 'green', x: 'Christ shown to the nations: the Magi, the baptism, the wedding at Cana.' },
    { n: 'Lent', from: '2026-02-18', to: '2026-03-28', c: 'violet', x: 'From Ash Wednesday, forty days of fasting, prayer and almsgiving, excluding Sundays, after Jesus’ forty days in the wilderness.' },
    { n: 'Holy Week', from: '2026-03-29', to: '2026-04-04', c: 'red', x: 'Palm Sunday, Maundy Thursday (from mandatum, the “new commandment” of John 13:34), Good Friday, Holy Saturday.' },
    { n: 'Easter', from: '2026-04-05', to: '2026-05-23', c: 'white', x: 'Fifty days of resurrection. Ascension falls on the fortieth day (14 May).' },
    { n: 'Pentecost', from: '2026-05-24', to: '2026-05-30', c: 'red', x: 'The Spirit poured out on the fiftieth day, the Jewish feast of Weeks (Shavuot).' },
    { n: 'Ordinary Time', from: '2026-05-31', to: '2026-11-28', c: 'green', x: 'The long green season of growth, ending with Christ the King.' }
  ],
  facts: [
    ['F', 'Easter falls on the first Sunday after the ecclesiastical full moon on or after 21 March. Eusebius records that Nicaea (325) asked all churches to keep it on the same Sunday instead of following separate reckonings.'],
    ['D', 'Why 25 December? One theory: the Church adopted the Roman festival of the Unconquered Sun. Another: early Christians dated Christ’s conception to 25 March, the traditional date of his death (Augustine, On the Trinity 4.5), and nine months later is 25 December. The evidence is thin either way.'],
    ['D', 'The English name “Easter” may come from Eostre, a goddess named only by Bede (725). Most languages use a form of Pascha, from the Hebrew Pesach, Passover.'],
    ['F', 'In 2026 Western Easter is 5 April and Orthodox Pascha is 12 April.']
  ]
};
