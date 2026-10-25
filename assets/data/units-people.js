/* Part VI: People and movements. Each movement is treated on its own terms. */
window.UNITS = window.UNITS || [];

UNITS.push({
  id: 'conversation', part: 'People & Movements', title: 'The Great Conversation',
  kicker: 'Sixty writers from Heraclitus to Charles Taylor, and who learned from whom.',
  intro: 'The “Great Conversation” is the long argument of Western thought about God, the good and the human person, much of it carried on by Christians and their critics. Select a writer to see what they wrote, whom they drew on and whom they shaped, with links to biographies and, where available, the texts themselves.',
  widget: 'thinkers',
  sections: [
    { h: 'Jordan Peterson and Maps of Meaning', widget: 'peterson', blocks: [
      { k: 'text', x: 'In Maps of Meaning: The Architecture of Belief (1999), Peterson distinguishes the world as a “place of things,” which science describes, from the world as a “forum for action,” which myth and story describe. He identifies recurring elements in myth: the Unknown (chaos, the Great Mother), the Known (order and tradition, the Great Father), the Knower (the hero, the Divine Son) and the Adversary.' },
      { k: 'sch', x: 'Peterson draws on Carl Jung, Erich Neumann, Mircea Eliade and Northrop Frye. His lecture series on Genesis (2017) and his book We Who Wrestle with God (2024) read the biblical stories as accounts of how to face chaos, resentment and pride.' },
      { k: 'p', x: 'For many secular readers, Peterson has made the Bible seem serious again. Christian critics welcome that while noting the limits of a psychological reading. The creeds claim that certain things happened, and Paul says that if Christ is not raised, faith is vain {{1Cor.15.14}}. In debates with Sam Harris (2017–18), Peterson defended a pragmatic idea of truth, roughly what serves life in the long run.' },
      { k: 'sch', x: 'Theologians also note that Peterson’s Great Father and Great Mother are Jungian archetypes of order and chaos, not persons of the Trinity; the parallel with Christian teaching is closest for the hero as Logos, the Word who brings order out of chaos {{John.1.5}}.' } ] }
  ],
  questions: ['Pick two writers a thousand years apart who are linked in the chart. What did the later one take from the earlier?', 'What is gained and what is lost when the Bible is read primarily as psychology?'],
  sources: [
    { t: 'Mortimer Adler, The Great Conversation (1952)', url: L.wiki('Great_Books_of_the_Western_World') },
    { t: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/' },
    { t: 'Project Gutenberg', url: 'https://www.gutenberg.org/' },
    { t: 'Jordan B. Peterson, Maps of Meaning (1999)', url: L.wiki('Maps_of_Meaning:_The_Architecture_of_Belief') }
  ]
});

UNITS.push({
  id: 'ingersoll', part: 'People & Movements', title: 'Robert G. Ingersoll',
  kicker: '“The Great Agnostic” (1833–1899): his life, his arguments, and the Christian replies.',
  intro: 'Robert Green Ingersoll was the most famous American orator of the late 19th century and the leading public critic of Christianity in his day. Huge paying audiences came to hear him attack the Bible and defend reason, liberty and humane reform, and many Christians who disagreed with him admired him personally. This unit presents his life and arguments in his own words, and the responses of his Christian contemporaries.',
  sections: [
    { h: 'Life', blocks: [
      { k: 'record', x: 'Born 11 August 1833 in Dresden, New York, the son of John Ingersoll, a Congregationalist minister and abolitionist whose views cost him several pulpits. Largely self-educated, he became a lawyer in Peoria, Illinois. In 1862 he married Eva Parker; they had two daughters, Eva and Maud.' },
      { k: 'record', x: 'In the Civil War he was colonel of the 11th Illinois Cavalry; he was captured by Confederate forces at Lexington, Tennessee, in December 1862 and paroled. He served as Attorney General of Illinois (1867–69). His speech nominating James G. Blaine for president in 1876 (the “Plumed Knight” speech) made him a national figure, but his religious views barred him from high office himself.' },
      { k: 'record', x: 'From 1872 until his death he lectured across the country. He moved to Washington (1877) and then New York (1885), and died at Dobbs Ferry, New York, on 21 July 1899. He is buried at Arlington National Cemetery. His birthplace in Dresden is now a museum.' } ] },
    { h: 'His arguments', blocks: [
      { k: 'record', x: 'His best-known lectures were “The Gods” (1872), “Some Mistakes of Moses” (1879), “What Must We Do to Be Saved?” (1880) and “Why I Am Agnostic” (1896). His collected works fill twelve volumes ([read his works](' + L.gut('Ingersoll') + ')).' },
      { k: 'p', x: 'His case was chiefly moral. He asked how a good God could command the destruction of the Canaanites, regulate slavery, or punish honest doubt with eternal torment. He argued that belief must answer to evidence and conscience, that no church may coerce either, and that the Bible is a human book to be judged like any other.' },
      { k: 'quote', q: 'An honest God is the noblest work of man.', cite: '“The Gods” (1872)', url: L.wiki('Robert_G._Ingersoll') },
      { k: 'quote', q: 'In nature there are neither rewards nor punishments; there are consequences.', cite: '“Some Reasons Why” (1881)', url: L.wiki('Robert_G._Ingersoll') },
      { k: 'quote', q: 'Happiness is the only good. The place to be happy is here. The time to be happy is now. The way to be happy is to make others so.', cite: 'His creed, often repeated in his lectures', url: L.wiki('Robert_G._Ingersoll') },
      { k: 'quote', q: 'Life is a narrow vale between the cold and barren peaks of two eternities. We strive in vain to look beyond the heights.', cite: 'At the grave of his brother Ebon (1879)', url: L.wiki('Robert_G._Ingersoll') } ] },
    { h: 'His causes', blocks: [
      { k: 'record', x: 'He defended Charles B. Reynolds at a New Jersey blasphemy trial (1887) in a celebrated plea for free speech; Reynolds was convicted and fined. He supported women’s suffrage, opposed the beating of children, and denounced the Supreme Court’s 1883 decision striking down the Civil Rights Act of 1875. He spoke at the funeral of his friend Walt Whitman (1892).' } ] },
    { h: 'The Christian replies', blocks: [
      { k: 'record', x: 'His opponents answered in print. The Presbyterian minister Henry M. Field debated him in the North American Review (1887–88), and the former British prime minister W. E. Gladstone joined the exchange (1888). The Catholic priest Louis A. Lambert’s Notes on Ingersoll (1883) became a bestseller. The preacher Henry Ward Beecher, though he rejected Ingersoll’s views, publicly praised him as an orator.' },
      { k: 'bel', who: 'Christian', x: 'Christian writers have argued that many of Ingersoll’s moral premises (the worth of every person, compassion for the weak, the evil of slavery and cruelty to children) came from the Christian tradition he attacked, and that his target was mostly a literalist Protestantism of his day, not the older and wider tradition, which already held a range of views on hell and on reading Scripture.' },
      { k: 'p', x: 'Ingersoll in turn pointed to real histories of persecution, slavery defended from pulpits, and dogma resisting science. Both sides of the argument can still be read in their own words, and each is stronger than its opponents usually allow.' } ] },
    { h: 'A note on Freemasonry', blocks: [
      { k: 'p', x: 'Readers sometimes ask whether Ingersoll was a Freemason. His biographies record no Masonic membership, and he does not appear to have written about the order. He belongs instead to the American freethought tradition of Thomas Paine, whom he admired.' } ] }
  ],
  questions: ['Which of Ingersoll’s moral objections do you think Christians have answered best, and which least well?', 'Ingersoll judged Christianity largely by its own ideals. What does that suggest about where those ideals came from?'],
  sources: [
    { t: 'The Works of Robert G. Ingersoll (Project Gutenberg)', url: L.gut('Ingersoll') },
    { t: 'Susan Jacoby, The Great Agnostic: Robert Ingersoll and American Freethought (2013)', url: L.wiki('Robert_G._Ingersoll') },
    { t: 'Robert Green Ingersoll Birthplace Museum', url: L.wiki('Robert_Green_Ingersoll_Birthplace') },
    { t: 'Louis A. Lambert, Notes on Ingersoll (1883)', url: L.gut('Notes on Ingersoll') }
  ]
});

UNITS.push({
  id: 'critics', part: 'People & Movements', title: 'Critics of Christianity',
  kicker: 'Thirteen critics from Celsus to Bertrand Russell, each with the response the Church made.',
  intro: 'Christianity has never lacked critics, and many of the faith’s deepest works were written to answer them. Each critic below is presented with their main charge, what their criticism contributed, and how Christians replied.',
  widget: 'critics',
  sections: [],
  questions: ['Which critic do you find strongest, and which Christian reply?', 'Origen preserved most of Celsus’s book by quoting it in order to answer it. What does that suggest about how to argue well?'],
  sources: [
    { t: 'Origen, Against Celsus', url: L.na('0416') },
    { t: 'Bertrand Russell and Frederick Copleston, the BBC debate on the existence of God (1948)', url: L.wiki('Bertrand_Russell') },
    { t: 'David Hume, An Enquiry Concerning Human Understanding (1748)', url: 'https://www.gutenberg.org/ebooks/9662' }
  ]
});

UNITS.push({
  id: 'templars', part: 'People & Movements', title: 'The Knights Templar',
  kicker: 'A military religious order (1120–1312): its history, its trial, and the legends that grew afterwards.',
  intro: 'The Poor Fellow-Soldiers of Christ and of the Temple of Solomon were founded to protect pilgrims in the Holy Land after the First Crusade. They became the wealthiest and most international institution of medieval Christendom, were destroyed by a king who owed them money, and have attracted more legend than almost any other medieval subject. This unit separates the record from the legends.',
  sections: [
    { h: 'The record', blocks: [
      { k: 'record', x: 'Founded around 1120 in Jerusalem by Hugues de Payens and eight companions, who were lodged in the Al-Aqsa mosque on the Temple Mount, which the crusaders believed to be the Temple of Solomon. Their Rule was approved at the Council of Troyes (1129). Bernard of Clairvaux wrote In Praise of the New Knighthood for them: knights who lived under monastic vows.' },
      { k: 'record', x: 'Papal privileges (Omne datum optimum, 1139) made them answerable to the pope alone. They built castles across the Levant and developed an international system of deposits and letters of credit that let pilgrims travel without carrying coin. With the fall of Acre in 1291 the Holy Land was lost.' },
      { k: 'record', x: 'On Friday 13 October 1307, Philip IV of France had the Templars in France arrested. They were charged with denying Christ, spitting on the cross, obscene rites and idol-worship; “Baphomet,” probably a corruption of “Mahomet,” appears in a few confessions. Confessions were extracted under torture, and many were later retracted.' },
      { k: 'record', x: 'The Chinon Parchment (1308), rediscovered in the Vatican archives in 2001, records papal envoys absolving the order’s leaders. At the Council of Vienne (1312), Pope Clement V suppressed the order by administrative decree (Vox in excelso), not by a verdict of guilt. Grand Master Jacques de Molay, having retracted his confession, was burned in Paris in 1314. Templar property passed mostly to the Hospitallers; in Portugal the Templars continued as the Order of Christ (1319).' } ] },
    { h: 'The legends', blocks: [
      { k: 'sch', x: 'Later centuries attached many stories to the Templars: guardians of the Holy Grail or the Ark of the Covenant, keepers of a secret bloodline of Jesus, survivors hidden in Scotland at Rosslyn Chapel, ancestors of the Freemasons. Historians find no medieval evidence for any of these. They come from 18th-century Masonic rituals, 19th-century occultists (Éliphas Lévi drew the goat-headed “Baphomet” in 1856) and 20th-century books (The Holy Blood and the Holy Grail, 1982; The Da Vinci Code, 2003).' },
      { k: 'sch', x: 'The superstition about Friday the 13th is not attested before the 19th century and has no documented connection with 1307.' } ] },
    { h: 'Assessments', blocks: [
      { k: 'sch', x: 'Most historians now regard the charges as fabricated or extracted under torture to serve the French crown’s finances and its power over the papacy (Malcolm Barber, The Trial of the Templars).' },
      { k: 'bel', who: 'Christian', x: 'Christians today differ on the crusading ideal of monks who fight, which Bernard defended and many later Christians, Catholic and Protestant, have criticised. The order’s destruction by a Christian king is often cited as an example of injustice within Christendom.' } ] }
  ],
  questions: ['Why do the Templars attract so many legends?', 'What does the Templars’ trial show about the relationship between church and state in the 14th century?'],
  sources: [
    { t: 'Malcolm Barber, The New Knighthood (1994) and The Trial of the Templars (1978)', url: L.wiki('Knights_Templar') },
    { t: 'Bernard of Clairvaux, In Praise of the New Knighthood', url: L.wiki('De_laude_novae_militiae') },
    { t: 'The Chinon Parchment', url: L.wiki('Chinon_Parchment') },
    { t: 'Trials of the Knights Templar', url: L.wiki('Trials_of_the_Knights_Templar') }
  ]
});

UNITS.push({
  id: 'freemasonry', part: 'People & Movements', title: 'Freemasonry',
  kicker: 'A fraternity of moral instruction through builders’ symbols: its history, teaching, and relations with the churches.',
  intro: 'Freemasonry describes itself as “a peculiar system of morality, veiled in allegory and illustrated by symbols.” It grew from medieval stonemasons’ guilds into a worldwide fraternity of men (with separate women’s and mixed orders) who meet in lodges, use the tools of building as moral emblems, and require belief in a Supreme Being. This unit presents its history, its own self-understanding, and how churches have assessed it.',
  sections: [
    { h: 'Origins', blocks: [
      { k: 'record', x: 'Operative stonemasons organised in lodges in medieval Britain. The Schaw Statutes (1597–99) regulated Scottish lodges, the earliest clear records. During the 17th century gentlemen with no connection to building were admitted as “speculative” or “accepted” masons; the antiquarian Elias Ashmole recorded his initiation at Warrington in 1646.' },
      { k: 'record', x: 'Four London lodges formed a Grand Lodge in 1717 by the traditional account (some historians question the date). James Anderson’s Constitutions (1723) required of members only “that Religion in which all Men agree.” Freemasonry spread across Europe and the Americas: Benjamin Franklin printed the first Masonic book in America (1734), and George Washington, Mozart (whose Magic Flute, 1791, uses Masonic symbolism) and Voltaire were members.' },
      { k: 'record', x: 'Prince Hall, a free Black man in Boston, was initiated in 1775; African Lodge No. 459 was chartered from London in 1784, the origin of Prince Hall Freemasonry.' } ] },
    { h: 'Teaching and symbols', blocks: [
      { k: 'bel', who: 'Masonic', x: 'Freemasonry says it is not a religion and not a substitute for religion, but a fraternity that teaches morality and charity and welcomes men of any faith who believe in a Supreme Being, the “Great Architect of the Universe” ([United Grand Lodge of England](https://www.ugle.org.uk/)).' },
      { k: 'record', x: 'There are three “craft” degrees: Entered Apprentice, Fellowcraft and Master Mason. Builders’ tools carry moral meanings: the square (virtue), the compasses (restraint of desire), the level (equality), the plumb (uprightness). The Fellowcraft degree teaches the seven liberal arts, beginning with grammar, rhetoric and logic. The Master Mason degree enacts the legendary murder of Hiram Abiff, a figure expanded from the craftsman Hiram of Tyre who worked on Solomon’s Temple {{1Kgs.7.13-14}}.' },
      { k: 'record', x: 'Additional systems of degrees were built on the craft degrees, among them the Scottish Rite (to the 33rd degree) and the York Rite, whose “Knights Templar” degree is open only to Christians and is symbolic rather than a historical succession.' } ] },
    { h: 'Myths and controversies', blocks: [
      { k: 'sch', x: 'Claims of descent from the Templars began with Andrew Michael Ramsay’s Oration (1737) and the German Rite of Strict Observance (1750s); the Masonic Convent of Wilhelmsbad (1782) formally abandoned them. Historians regard them as legend.' },
      { k: 'record', x: 'The disappearance of William Morgan (1826), who had threatened to publish Masonic rituals, produced the Anti-Masonic Party (1828), America’s first third party. From 1885 to 1897 Léo Taxil published fabricated “exposés” of Masonic devil-worship, then confessed publicly that he had invented them; quotations attributing Luciferian teaching to Albert Pike still circulate from this hoax. Nazi Germany suppressed the lodges and sent Freemasons to concentration camps.' } ] },
    { h: 'The churches’ assessments', blocks: [
      { k: 'bel', who: 'Catholic', x: 'The Catholic Church has prohibited membership since Pope Clement XII’s In eminenti (1738). Leo XIII’s Humanum Genus (1884) condemned Freemasonry as naturalist. In 1983 the Congregation for the Doctrine of the Faith declared Masonic principles irreconcilable with Church doctrine, and reaffirmed this in 2023.' },
      { k: 'bel', who: 'Protestant', x: 'Several Protestant bodies, including British Methodists (1985) and some Lutheran and Baptist churches, discourage membership, mainly because lodge ritual treats different faiths as equal paths to the Great Architect. Others leave it to conscience: the Southern Baptist Convention did so in 1993. Many Protestant ministers have been Masons, especially in America and Britain.' } ] }
  ],
  questions: ['What does Freemasonry’s requirement of belief in a Supreme Being, without a creed, say about the Enlightenment?', 'Why have churches objected, and what do Masons answer?'],
  sources: [
    { t: 'United Grand Lodge of England', url: 'https://www.ugle.org.uk/' },
    { t: 'Freemasonry: overview with sources', url: L.wiki('Freemasonry') },
    { t: 'David Stevenson, The Origins of Freemasonry: Scotland’s Century, 1590–1710 (1988)', url: L.wiki('Schaw_Statutes') },
    { t: 'The Taxil hoax', url: L.wiki('Taxil_hoax') },
    { t: 'Prince Hall Freemasonry', url: L.wiki('Prince_Hall_Freemasonry') }
  ]
});

UNITS.push({
  id: 'rosicrucians', part: 'People & Movements', title: 'Rosicrucians, Hermeticism and Christian Kabbalah',
  kicker: 'Early modern currents of Christian esotericism: what the documents say and who wrote them.',
  intro: 'In the Renaissance, scholars rediscovered texts they believed preserved the wisdom of ancient Egypt and Israel: the Hermetic writings and the Jewish Kabbalah. Christian thinkers tried to unite them with the Gospel, and in the early 17th century three anonymous pamphlets announced a secret Rosicrucian brotherhood. This unit follows these currents through their documents.',
  sections: [
    { h: 'Hermeticism', blocks: [
      { k: 'text', x: 'The Corpus Hermeticum, attributed to Hermes Trismegistus (“thrice-great Hermes”), teaches that God is Mind, the cosmos is God’s image, and the soul ascends by knowledge. The medieval Emerald Tablet is the source of “as above, so below.” [Read the Corpus Hermeticum](' + L.sacred('chr/herm/index.htm') + ')' },
      { k: 'record', x: 'Marsilio Ficino translated the Corpus into Latin for Cosimo de’ Medici in 1463, interrupting his translation of Plato, because Hermes was then thought to be a contemporary of Moses. In 1614 the scholar Isaac Casaubon showed from its Greek vocabulary that the texts date from the early Christian centuries.' } ] },
    { h: 'Christian Kabbalah', blocks: [
      { k: 'record', x: 'Kabbalah is a Jewish mystical tradition centred on the ten *sefirot*, the attributes through which the hidden God is revealed (Sefer Yetzirah; the Bahir, 12th century; the Zohar, late 13th century). Giovanni Pico della Mirandola’s Oration on the Dignity of Man (1486) and his 900 Theses claimed that Kabbalah confirmed Christian truths, and Johann Reuchlin’s On the Art of Kabbalah (1517) developed the idea.' },
      { k: 'bel', who: 'Jewish', x: 'Kabbalah belongs to Jewish tradition and Torah observance. Many Jewish scholars regard Christian Kabbalah as an appropriation that misreads it.' } ] },
    { h: 'The Rosicrucian manifestos', blocks: [
      { k: 'record', x: 'Three anonymous works appeared in Germany: the Fama Fraternitatis (Kassel, 1614), the Confessio Fraternitatis (1615) and the Chymical Wedding of Christian Rosenkreutz (Strasbourg, 1616). They told of a German pilgrim, Christian Rosenkreutz (supposedly 1378–1484), who learned secret wisdom in the East and founded a brotherhood to bring about a “universal reformation” of learning, medicine and religion. [Read the Fama](' + L.sacred('sro/rhr/index.htm') + ')' },
      { k: 'record', x: 'The Chymical Wedding was written by Johann Valentin Andreae, a Lutheran theologian of Tübingen, who later called it a *ludibrium*, a jest or entertainment. Hundreds of pamphlets sought the brotherhood, and none found it. Its themes are Lutheran piety, Paracelsian medicine, alchemy and the Hermetic and Kabbalistic ideas above.' },
      { k: 'record', x: 'Later movements took the Rosicrucian name: the Rose Croix degree of the Scottish Rite, the Hermetic Order of the Golden Dawn (1888), the Rosicrucian Fellowship (1909) and AMORC (1915), each with its own claimed lineage.' } ] },
    { h: 'Assessments', blocks: [
      { k: 'sch', x: 'Historians such as Frances Yates (The Rosicrucian Enlightenment, 1972) argued that these currents helped inspire the scientific revolution’s dream of reading the “book of nature”; others think she overstated the link.' },
      { k: 'bel', who: 'Christian', x: 'Mainstream churches have generally regarded esoteric movements with caution: the Gospel was preached openly {{John.18.20}}, and secret knowledge for an elite recalls the Gnosticism the early Church rejected. Believers are told to “try the spirits whether they are of God” {{1John.4.1}}.' } ] }
  ],
  questions: ['Why did Renaissance Christians want ancient Egyptian and Jewish wisdom to confirm the Gospel?', 'What does Casaubon’s redating of the Hermetic texts teach about how claims of ancient origin should be tested?'],
  sources: [
    { t: 'Frances A. Yates, Giordano Bruno and the Hermetic Tradition (1964)', url: L.wiki('Frances_Yates') },
    { t: 'Rosicrucianism: overview', url: L.wiki('Rosicrucianism') },
    { t: 'Christian Kabbalah', url: L.wiki('Christian_Kabbalah') },
    { t: 'Hermeticism', url: L.wiki('Hermeticism') }
  ]
});
