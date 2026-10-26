/* v3.1 units: the great stories, hell and judgement, the Twelve and Judas among older stories, miracles and the laws of nature. */
window.UNITS = window.UNITS || [];

UNITS.push({
  id: 'stories', part: 'The Book', title: 'The great stories',
  kicker: 'A quick reference to the Bible’s narratives, from Creation to the new Jerusalem: what happens, and what each has been taken to teach.',
  intro: 'Most of the Bible is story, and most of its moral teaching is carried by stories rather than rules. This unit gathers the narratives every reader meets, from the famous (Noah, David and Goliath, the prodigal son) to the hard ones that are often skipped (Jephthah’s daughter, the Levite’s concubine, Ananias and Sapphira). Each gives the passage, a short account of what happens, the meaning that Jewish and Christian readers have drawn from it, the virtues it commends and the failings it warns against.',
  widget: 'stories',
  sections: [
    { h: 'How to read the stories', blocks: [
      { k: 'p', x: 'Biblical narrative usually shows rather than tells. Its heroes are flawed: Abraham lies, Jacob cheats, Moses kills, David commits adultery and murder, Peter denies Jesus. Many stories describe what happened without approving it, and the narrator’s judgement is often given quietly, in a later consequence or a single line such as “every man did that which was right in his own eyes” {{Judg.21.25}}.' },
      { k: 'p', x: 'The meanings given here are the main lines of interpretation in Jewish and Christian tradition, not the only possible readings. Where a story is morally difficult, a note says how readers have wrestled with it. The virtues and warnings are tags for finding stories that bear on a theme: choose a virtue below to see every story that teaches it.' },
      { k: 'sch', x: 'Literary scholars such as Robert Alter (The Art of Biblical Narrative, 1981) have shown how carefully these stories are built: repetition with variation, speech that reveals character, and silences that invite the reader to judge. Phyllis Trible’s Texts of Terror (1984) drew attention to stories of violence against women that sermons tend to avoid.' },
      { k: 'bel', who: 'Christian', x: 'Christians read the Old Testament stories as their own family history and as pointing to Christ: “all these things happened unto them for ensamples: and they are written for our admonition” {{1Cor.10.11}}.' },
      { k: 'bel', who: 'Jewish', x: 'Jewish tradition reads the same stories through the Torah and the rabbis’ midrash, which fills their silences with questions and stories of its own, and as the history of God’s covenant with Israel.' } ] }
  ],
  questions: ['Choose a story where the hero fails. What does the narrator do with the failure?', 'Which virtue appears most often across the stories? Which failing?', 'Pick one of the hard stories. Is it describing or prescribing, and how can you tell?'],
  sources: [
    { t: 'Robert Alter, The Art of Biblical Narrative (1981)', url: L.wiki('Robert_Alter') },
    { t: 'Phyllis Trible, Texts of Terror (1984)', url: L.wiki('Phyllis_Trible') },
    { t: 'Sefaria: the stories with Jewish commentary', url: 'https://www.sefaria.org/' },
    { t: 'Bible Hub: every passage in parallel translations', url: 'https://biblehub.com/' }
  ]
});

UNITS.push({
  id: 'hell', part: 'Christian Belief', title: 'Hell, judgement and the afterlife',
  kicker: 'What the Bible’s words for the underworld mean, how Christian views developed and divided, and how plague and fear shaped the idea.',
  intro: 'Few Christian teachings are more debated, or more often misunderstood, than hell. The English word covers four different words in the Bible, and Christians have held at least three serious views of final judgement. This unit sets out the texts, the main positions in each tradition’s own terms, the parallels in other religions, and a question that is often asked: how plague and suffering have been read as divine punishment, including the popular story behind “bless you.”',
  sections: [
    { h: 'Four words behind “hell”', blocks: [
      { k: 'table', head: ['Word', 'Language', 'Meaning', 'Example'], rows: [
        ['*Sheol* (H7585)', 'Hebrew', 'The grave, the shadowy realm of all the dead, good and bad alike. Not a place of punishment in most Old Testament texts.', '{{Gen.37.35}} {{Ps.16.10}}'],
        ['*Hadēs* (G86)', 'Greek', 'The Greek underworld; the Septuagint’s word for Sheol. In the New Testament the realm of the dead before the final judgement.', '{{Luke.16.23}} {{Rev.20.13-14}}'],
        ['*Geenna*, Gehenna (G1067)', 'Greek, from Hebrew *gê hinnōm*', 'The Valley of Hinnom outside Jerusalem, where children had been burned to Molech. Jesus uses it as the image of final judgement.', '{{Jer.7.31}} {{Matt.10.28}} {{Mark.9.43}}'],
        ['*Tartaroō* (G5020)', 'Greek', '“Cast into Tartarus,” the deepest prison of Greek myth; used once, of fallen angels.', '{{2Pet.2.4}}']
      ] },
      { k: 'record', x: 'The King James Version translates all of these as “hell” in many places (Sheol is “hell” 31 times and “grave” 31 times), which is why older English readers met hell where the Hebrew speaks only of death. Most modern translations keep the words distinct.' } ] },
    { h: 'How the idea developed', blocks: [
      { k: 'text', x: 'Most of the Old Testament says little about punishment after death: the dead go down to Sheol {{Job.7.9}}. The clearest Hebrew text on a final division is late: “many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt” {{Dan.12.2}}. Isaiah ends with an image of the bodies of rebels whose “worm shall not die, neither shall their fire be quenched” {{Isa.66.24}}, which Jesus quotes {{Mark.9.48}}.' },
      { k: 'text', x: 'In the Gospels Jesus warns of Gehenna, “outer darkness” and “everlasting fire, prepared for the devil and his angels” {{Matt.25.41}}, and tells the parable of the rich man and Lazarus {{Luke.16.19-31}}. Revelation describes a “lake of fire” {{Rev.20.14-15}}. Paul speaks rather of “everlasting destruction from the presence of the Lord” {{2Thess.1.9}} and of all things reconciled in Christ {{Col.1.20}}.' },
      { k: 'sch', x: 'Historians trace the growth of detailed pictures of punishment through Jewish apocalypses of the Second Temple period (1 Enoch) and the 2nd-century Apocalypse of Peter, the first Christian tour of hell, to Dante’s Inferno (c. 1308–21) and medieval “doom” paintings over church doorways. Much of the popular image (devils with pitchforks, layered circles) comes from these later sources, not from Scripture.' } ] },
    { h: 'Three Christian views', blocks: [
      { k: 'bel', who: 'Eternal punishment (the majority view)', x: 'Those who finally reject God are separated from him forever in conscious punishment {{Matt.25.46}}. Augustine (City of God 21), Aquinas and the Reformers taught this; it is in the Westminster Confession (33) and is the official teaching of the Catholic Church, which describes hell as “the state of definitive self-exclusion from communion with God” chosen by unrepentant mortal sin ([Catechism 1033–1037](https://www.vatican.va/archive/ENG0015/__P2N.HTM)). C. S. Lewis: the doors of hell “are locked on the inside” (The Problem of Pain, 1940).' },
      { k: 'bel', who: 'Conditional immortality', x: 'Only God is immortal {{1Tim.6.16}}; the unrepentant are finally destroyed, not kept alive in torment, and “everlasting punishment” is a punishment whose result is everlasting. Held by Seventh-day Adventists and Jehovah’s Witnesses, argued by Edward Fudge (The Fire That Consumes, 1982), and tentatively by the Anglican evangelical John Stott (1988).' },
      { k: 'bel', who: 'Universal restoration', x: 'God will finally reconcile all, and punishment is remedial {{1Cor.15.28}} {{1Tim.2.4}}. Origen and Gregory of Nyssa taught versions of this; a form attributed to Origen was condemned in 553. Modern defenders include David Bentley Hart (That All Shall Be Saved, 2019). Hans Urs von Balthasar argued that Christians may hope, though not assert, that all will be saved (Dare We Hope, 1986).' },
      { k: 'bel', who: 'Catholic and Orthodox', x: 'Purgatory, defined at Florence (1439) and Trent, is not a third destination but the purification of those who die in God’s grace; Catholics pray for the dead {{2Macc.12.46}}. The Orthodox reject purgatory as Rome defines it but also pray for the dead. The Apostles’ Creed’s “he descended into hell” refers to Christ among the dead, the “harrowing of hell” {{1Pet.3.19}}.' } ] },
    { h: 'Other traditions', blocks: [
      { k: 'bel', who: 'Jewish', x: 'Gehinnom is mainly purgative: “the judgement of the wicked in Gehinnom lasts twelve months” ([Mishnah Eduyot 2:10](https://www.sefaria.org/Mishnah_Eduyot.2.10)); mourners say Kaddish for eleven months for that reason. Judaism places its emphasis on this life rather than on describing the next.' },
      { k: 'bel', who: 'Muslim', x: 'Jahannam is a place of fire with seven gates {{Q:15:44}}, and paradise and the fire are described vividly. Most Muslims hold that believers who are punished will eventually leave it; whether the punishment of unbelievers is eternal has been discussed by some classical scholars, such as Ibn Qayyim al-Jawziyya.' },
      { k: 'record', x: 'Older parallels: in Egypt the heart that fails the weighing is devoured by Ammit, an end rather than endless torment; in Zoroastrianism the wicked fall from the Chinvat Bridge into the House of the Lie until a final purification; Greek myth placed the worst offenders in Tartarus; Hindu and Buddhist texts describe many hells (*naraka*), all temporary.' } ] },
    { h: 'Plague, punishment and “bless you”', blocks: [
      { k: 'p', x: 'A story often told is that people began saying “God bless you” after sneezes during a plague, because sneezing was taken as the first sign of a disease sent by God. What follows sets out what the sources actually show.' },
      { k: 'record', x: '**The plague of 590 in Rome is real.** Gregory of Tours, writing in the 590s, records that after a flood of the Tiber a plague struck Rome, killing Pope Pelagius II in February 590. His successor, Gregory the Great, preached that the plague was a call to repentance and led a sevenfold penitential procession through the city, during which, Gregory of Tours says, eighty people collapsed and died (History of the Franks 10.1). This was the Plague of Justinian, caused by the bacterium *Yersinia pestis*.' },
      { k: 'record', x: '**The sneeze custom is much older.** Pliny the Elder (c. AD 77) already asked, “Why do we salute a person who sneezes?” and reported that the emperor Tiberius insisted on being greeted when he sneezed (Natural History 28.23). In Homer’s Odyssey (17.541–547) Penelope takes her son’s sneeze as a good omen, and in Xenophon’s Anabasis (3.2.9) soldiers bow at a sneeze as a sign from the gods. Islamic custom, from the hadith, has the sneezer say “praise be to God” and the hearer answer “may God have mercy on you” ([Sahih al-Bukhari 6224](https://sunnah.com/bukhari:6224)).' },
      { k: 'sch', x: '**The plague explanation is a later legend.** The earliest known version is in the Golden Legend of Jacobus de Voragine (c. 1260), nearly 700 years after the event, which says that in Gregory’s plague people died suddenly, some while sneezing, so those nearby said “God help you.” No source from Gregory’s own time mentions the custom, and sneezing is not a typical sign of bubonic plague. Thomas Browne (Pseudodoxia Epidemica, 1646) already pointed out that the custom was older than Gregory. The likely verdict: the blessing came from ancient omen customs, and the plague story was attached to it afterwards.' },
      { k: 'record', x: '**Burning the dead.** Plague victims were not usually burned in Christian Europe, where cremation was avoided out of belief in the resurrection of the body. During the Black Death (1347–51), which killed perhaps a third to a half of Europe’s population, the dead were buried in mass graves such as the excavated pits at East Smithfield in London; at Avignon Pope Clement VI consecrated the Rhône so that bodies could be committed to the river. The image of a place next to the city where the dead were burned may come from a different source: the claim that Gehenna was Jerusalem’s ever-burning rubbish dump. That claim first appears in the commentary of Rabbi David Kimchi around 1200, and archaeologists have found no evidence of such a dump in the Hinnom Valley.' },
      { k: 'record', x: '**Plague as punishment.** Reading epidemics as divine judgement is very old: the Bible itself records plagues as judgement after David’s census {{2Sam.24.15}} and in the wilderness {{Num.16.49}}. During the Black Death, bands of flagellants whipped themselves in public penance until Clement VI condemned them in 1349, and Jews were falsely accused of poisoning wells and massacred, as at Strasbourg in February 1349, despite papal bulls declaring them innocent.' },
      { k: 'bel', who: 'Christian', x: 'Other Christians resisted the idea that every sufferer is being punished. Jesus rejects it of a man born blind {{John.9.3}} and of those killed when a tower fell {{Luke.13.4}}. During the Plague of Cyprian (c. 250–270), Bishop Dionysius of Alexandria praised Christians who nursed the sick at the cost of their own lives (Eusebius, Church History 7.22), and in 1527 Martin Luther’s Whether One May Flee from a Deadly Plague urged care for the sick, sensible precautions and not tempting God.' } ] }
  ],
  questions: ['Which of the three Christian views do you find best supported by the texts, and which texts are hardest for it?', 'Why might the King James habit of translating Sheol as “hell” matter for how English readers imagined the afterlife?', 'The “bless you” story is widely repeated but late. What makes a historical explanation attractive even when evidence is thin?'],
  sources: [
    { t: 'Catechism of the Catholic Church, 1020–1037 (the last things)', url: 'https://www.vatican.va/archive/ENG0015/__P2N.HTM' },
    { t: 'Stanford Encyclopedia of Philosophy: Heaven and Hell', url: L.sep('heaven-hell') },
    { t: 'Gregory of Tours, History of the Franks, book 10 (the plague of 590)', url: L.wiki('Gregory_of_Tours') },
    { t: 'Plague of Justinian', url: L.wiki('Plague_of_Justinian') },
    { t: 'Black Death', url: L.wiki('Black_Death') },
    { t: 'Gehenna', url: L.wiki('Gehenna') },
    { t: 'Edward Fudge, The Fire That Consumes (1982)', url: L.wiki('Annihilationism') },
    { t: 'David Bentley Hart, That All Shall Be Saved (2019)', url: L.wiki('Universal_reconciliation') }
  ]
});

/* Claimed parallels to the Twelve and to Judas, with what the primary sources support. v: found / partial / unsupported. */
window.PARALLELS = [
  { g: 'twelve', n: 'The twelve tribes of Israel', v: 'found', x: 'Jacob’s twelve sons become Israel’s twelve tribes {{Gen.49.28}}. Jesus links the two directly: the Twelve will sit on twelve thrones judging the tribes {{Matt.19.28}}. Most historians read the Twelve as a sign that Jesus was gathering a renewed Israel (E. P. Sanders).' },
  { g: 'twelve', n: 'The council of twelve at Qumran', v: 'found', x: 'The Community Rule describes a council of “twelve men and three priests” (1QS 8.1), a Jewish group of Jesus’ own time using twelve to represent Israel.' },
  { g: 'twelve', n: 'The zodiac and the twelve months', v: 'partial', x: 'Twelve signs and twelve months were standard in Babylonian and Greco-Roman astronomy, and Mithraic temple reliefs often surround the bull-slaying scene with the zodiac. This shows twelve was a widespread symbol of completeness; it does not show the Twelve were modelled on the signs, and the Gospels never connect them.' },
  { g: 'twelve', n: 'Mithras and twelve disciples', v: 'unsupported', x: 'No Mithraic text or image gives Mithras twelve disciples. The claim goes back to 19th-century writers and was popularised by the film Zeitgeist (2007); the twelve figures sometimes around Mithraic reliefs are the zodiac signs.' },
  { g: 'twelve', n: 'Horus and twelve disciples', v: 'unsupported', x: 'No Egyptian source gives Horus twelve disciples, a betrayal or a crucifixion. These claims come from Gerald Massey (Ancient Egypt, the Light of the World, 1907), not from Egyptian texts.' },
  { g: 'twelve', n: 'Hercules’ twelve labours; the twelve Olympians', v: 'partial', x: 'Both are documented in Greek sources, but they are tasks and gods, not followers; the shared feature is only the number.' },
  { g: 'betrayal', n: 'Ahithophel, David’s counsellor', v: 'found', x: 'David’s trusted adviser joins Absalom’s revolt and, when his advice is rejected, goes home and hangs himself {{2Sam.17.23}}. The Gospels apply David’s lament, “mine own familiar friend … which did eat of my bread, hath lifted up his heel against me” {{Ps.41.9}}, to Judas {{John.13.18}}. Scholars widely see Ahithophel as a model for how Judas’s end is told.' },
  { g: 'betrayal', n: 'Joseph sold for silver', v: 'found', x: 'It is Judah (in Greek, *Ioudas*, the same name as Judas) who proposes selling his brother Joseph for twenty pieces of silver {{Gen.37.26-28}}.' },
  { g: 'betrayal', n: 'Thirty pieces of silver', v: 'found', x: 'Thirty shekels is the price of a slave in the Law {{Exod.21.32}}. Zechariah is paid thirty pieces of silver and throws them to the potter in the temple {{Zech.11.12-13}}; Matthew uses this text for Judas’s payment and the potter’s field {{Matt.27.9-10}}, attributing it to Jeremiah.' },
  { g: 'betrayal', n: 'Osiris betrayed by his brother Set', v: 'found', x: 'Plutarch (On Isis and Osiris 13) tells how Set and seventy-two conspirators trick Osiris into a chest and kill him. The shared theme is a good king destroyed through treachery by one close to him; the differences are large: a brother not a disciple, a cosmic myth not a dated event, and Osiris rules the dead rather than returning to life.' },
  { g: 'betrayal', n: 'Baldr and Loki', v: 'partial', x: 'In the Prose Edda (Snorri Sturluson, c. 1220) Loki tricks the blind god Höd into killing the beloved Baldr with mistletoe. The story was written down more than two centuries after Iceland became Christian, so influence may run in either direction.' },
  { g: 'betrayal', n: 'Devadatta and the Buddha', v: 'found', x: 'In the Pali Vinaya (Cullavagga 7), the Buddha’s cousin and disciple Devadatta tries to kill him and split the community out of ambition. The pattern of a jealous insider is close; the texts are independent of the Gospels, and the outcome differs (the Buddha is unharmed).' },
  { g: 'betrayal', n: 'Krishna or Mithras crucified and betrayed', v: 'unsupported', x: 'No Hindu or Mithraic source describes Krishna or Mithras being betrayed by a disciple or crucified. The claims come from Kersey Graves, The World’s Sixteen Crucified Saviors (1875), a book historians of every persuasion regard as unreliable.' },
  { g: 'betrayal', n: 'Judas in later tradition', v: 'found', x: 'The Gospel of Judas (2nd century; a Coptic copy published 2006) recasts Judas as the disciple who understood Jesus. Some Muslim commentators on Qur’an 4:157 taught that Judas was made to resemble Jesus and crucified in his place, a view also found in the late Gospel of Barnabas.' }
];

UNITS.push({
  id: 'parallels', part: 'Comparisons', title: 'The Twelve, Judas and older stories',
  kicker: 'Is the story of the twelve disciples and the betrayer borrowed from older religions? What the sources show, claim by claim.',
  intro: 'It is often said that the Gospels repeat older stories: that other gods had twelve disciples, or were betrayed by a follower. Some of these parallels are real and well documented; others cannot be found in any ancient source. This unit sets out what the Gospels say about the Twelve and Judas, how historians assess them, the main explanations for repeated story patterns, and a claim-by-claim table showing which parallels the primary sources support.',
  widget: 'parallels',
  sections: [
    { h: 'The Twelve in the sources', blocks: [
      { k: 'text', x: 'Mark, Matthew, Luke and Acts each list the Twelve {{Mark.3.16-19}}. The lists agree on most names and differ on one (Thaddaeus, or Judas son of James). After Judas’s death the remaining eleven choose Matthias by lot to restore the number {{Acts.1.26}}.' },
      { k: 'record', x: 'The earliest reference is in Paul, writing about AD 54: the risen Christ “was seen of Cephas, then of the twelve” {{1Cor.15.5}}. This shows “the Twelve” was an established group within about twenty-five years of the crucifixion.' },
      { k: 'sch', x: 'Most historians, including sceptical ones, accept that Jesus chose an inner circle of twelve as a symbol of Israel’s twelve tribes, part of his announcement that God was restoring Israel (E. P. Sanders, Jesus and Judaism, 1985).' } ] },
    { h: 'Judas in the sources', blocks: [
      { k: 'text', x: 'Mark says only that Judas, “one of the twelve,” went to the chief priests to hand Jesus over and was promised money {{Mark.14.10-11}}. Matthew adds the thirty pieces of silver and his suicide by hanging {{Matt.27.5}}; Acts says he bought a field, fell headlong and burst open {{Acts.1.18}}; John calls him a thief who kept the common purse {{John.12.6}}. The two death accounts differ, and ancient and modern readers have proposed harmonisations.' },
      { k: 'sch', x: 'Most scholars accept that Judas existed and handed Jesus over, chiefly because the early church would not invent the embarrassing fact that one of Jesus’ own chosen Twelve betrayed him (the criterion of embarrassment). A minority, such as Hyam Maccoby (Judas Iscariot and the Myth of Jewish Evil, 1992), see Judas as a literary figure. The meaning of “Iscariot” is debated: “man of Kerioth,” a link to the *sicarii* (dagger-men), or “the false one.”' } ] },
    { h: 'Why stories repeat', blocks: [
      { k: 'p', x: 'When two stories resemble each other, there are several possible explanations, and each case has to be judged on its evidence.' },
      { k: 'list', items: [
        '**Deliberate echo within the Bible.** The Gospels openly tell Jesus’ story with Old Testament patterns, and this is the best-documented kind of repetition: Judas is described with the words of the Psalms and Zechariah, and his end recalls Ahithophel. The Gospel writers saw this as fulfilment, not borrowing.',
        '**Borrowing from other religions.** This requires evidence that the older story existed in that form, was known to the later writers, and shares specific details. Several popular claims fail the first test: the details cannot be found in the ancient sources.',
        '**Shared human patterns.** Betrayal by an insider and the death of a good leader are common human experiences, and scholars such as Lord Raglan (The Hero, 1936), Carl Jung and Joseph Campbell argued that hero stories everywhere follow similar shapes. Similarity alone does not prove copying.',
        '**Literary imitation.** Dennis MacDonald (The Homeric Epics and the Gospel of Mark, 2000) argues that Mark consciously imitates episodes from Homer; most New Testament scholars have not been persuaded, but the method is debated.'
      ] },
      { k: 'bel', who: 'Christian', x: 'Christians have offered two classic answers to parallels. Justin Martyr (c. 155) argued that demons had imitated prophecies of Christ in pagan myths ([First Apology 54](https://www.newadvent.org/fathers/0126.htm)). C. S. Lewis argued instead that myths are longings that the Gospel fulfils: “myth became fact” (1944).' },
      { k: 'p', x: 'The table below lists the parallels most often claimed. “Found in the sources” means the ancient text says what is claimed; it does not mean the Gospels borrowed from it.' } ] }
  ],
  questions: ['Which parallel in the table is closest to the Gospel story, and what are the differences?', 'Why does the criterion of embarrassment make most historians think Judas was real?', 'What would you need to show to prove that one story borrowed from another?'],
  sources: [
    { t: 'E. P. Sanders, Jesus and Judaism (1985)', url: L.wiki('E._P._Sanders') },
    { t: 'Judas Iscariot: sources and interpretations', url: L.wiki('Judas_Iscariot') },
    { t: 'Plutarch, On Isis and Osiris', url: L.wiki('De_Iside_et_Osiride') },
    { t: 'Gospel of Judas', url: L.wiki('Gospel_of_Judas') },
    { t: 'Jesus in comparative mythology', url: L.wiki('Jesus_in_comparative_mythology') }
  ]
});

UNITS.push({
  id: 'miracles', part: 'Christian Belief', title: 'Miracles and the laws of nature',
  kicker: 'Thirty events in the Bible that go beyond physics and biology as now understood, with what they would require and what has been proposed.',
  intro: 'The Bible describes events that, if they happened as told, are not explained by the laws of nature as science now knows them: the sun standing still, water becoming wine, the dead raised. This unit lists them, states plainly what each would require physically, and notes any natural explanation that has been proposed, with its source. It also sets out how believers and sceptics have thought about miracles, and what science can and cannot settle.',
  widget: 'miracles',
  sections: [
    { h: 'What is a miracle?', blocks: [
      { k: 'p', x: 'Hume defined a miracle as “a violation of the laws of nature” (Enquiry 10). Christian thinkers have usually put it differently. Augustine wrote that a wonder happens “not contrary to nature, but contrary to what is known of nature” (City of God 21.8). Aquinas defined a miracle as something done by God beyond the order of nature as we know it (Summa Contra Gentiles 3.101). On this view the laws of nature describe how things normally go, and a miracle is God acting in a way that is not normal, not a contradiction of reason.' },
      { k: 'p', x: 'The Bible itself uses three words: *signs* (pointing beyond themselves), *wonders* (provoking awe) and *powers* (acts of strength) {{Acts.2.22}}. Many of its miracles are not described as breaking nature at all but as perfect timing: a wind that blows all night {{Exod.14.21}}, a storm that drops. Others, such as the resurrection, are presented as entirely beyond nature.' } ] },
    { h: 'What science can and cannot say', blocks: [
      { k: 'p', x: 'Science can test natural explanations, date objects, model events and examine claimed healings; for instance, the Lourdes Medical Bureau has examined claimed cures since 1883. It cannot, by its own method, show that God could not act, since its method studies the regular behaviour of nature. Whether such acts happen is a question about God and about historical evidence, which is why the arguments are philosophical and historical as well as scientific.' },
      { k: 'p', x: 'As the atlas’s opening unit notes, knowledge changes. Scientists once doubted that stones fell from the sky; meteorites were accepted only around 1803. Other things once accepted have been overturned. Both believers and sceptics have reason for humility about what future evidence will show.' } ] },
    { h: 'How traditions have read them', blocks: [
      { k: 'bel', who: 'Christian', x: 'Christians believe God acts in history and that the miracles, above all the resurrection, are real signs of his kingdom. C. S. Lewis (Miracles, 1947) argued that if God exists, nature is not a closed system and miracles are possible; the question is one of evidence. Many Christians also read some miracle stories symbolically; others, such as Rudolf Bultmann (1941), argued for “demythologising” them altogether.' },
      { k: 'bel', who: 'Jewish', x: 'The Mishnah lists ten things created at twilight on the eve of the first Sabbath, among them the mouth of Balaam’s donkey and the manna ([Avot 5:6](https://www.sefaria.org/Pirkei_Avot.5.6)): miracles built into creation from the start. Maimonides held a similar view.' },
      { k: 'bel', who: 'Muslim', x: 'The Qur’an affirms the miracles of earlier prophets, including Jesus {{Q:3:49}}, and presents the Qur’an itself as Muhammad’s chief sign. The theologian al-Ghazali argued that the regular connection of cause and effect is God’s habit, which he may set aside.' },
      { k: 'sch', x: 'Critical scholars approach the miracle stories in several ways: as embellished memories of real events, as theological narratives (D. F. Strauss, The Life of Jesus, 1835), or as reports of experiences whose cause is left open. Most historians agree that Jesus was known in his lifetime as a healer and exorcist, since even his opponents attributed his power to Beelzebub {{Mark.3.22}}.' } ] }
  ],
  questions: ['Which miracle in the list depends most on timing, and which most clearly on breaking a law of nature?', 'Is Augustine’s definition of a miracle more or less convincing than Hume’s? Why?', 'What kind of evidence could count for or against a miracle that happened two thousand years ago?'],
  sources: [
    { t: 'Stanford Encyclopedia of Philosophy: Miracles', url: L.sep('miracles') },
    { t: 'David Hume, An Enquiry Concerning Human Understanding, section 10 (1748)', url: 'https://www.gutenberg.org/ebooks/9662' },
    { t: 'C. S. Lewis, Miracles (1947)', url: L.wiki('Miracles_(book)') },
    { t: 'Augustine, City of God 21.8', url: L.na('120121') },
    { t: 'Lourdes Medical Bureau', url: L.wiki('Lourdes_Medical_Bureau') }
  ]
});
