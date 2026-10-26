/* Part III: History. */
window.UNITS = window.UNITS || [];

UNITS.push({
  id: 'atlas', part: 'History', title: 'The Atlas',
  kicker: 'Four and a half thousand years of places, from the pyramids to Azusa Street.',
  intro: 'The map holds about a hundred places where the story of the Bible, the Church and its neighbours happened. Move the slider to watch the centuries pass, switch layers on and off, follow Paul’s journeys, and open any place to read what the sources record there.',
  widget: 'map',
  sections: [],
  questions: ['Why did Christianity spread first along the coasts and roads of the Roman Mediterranean?', 'Compare the dates of the Church of the East in China (635) and the arrival of Christianity in Scandinavia. What does this suggest about the faith being a “Western” religion?'],
  sources: [
    { t: 'Natural Earth (map data, public domain)', url: 'https://www.naturalearthdata.com/' },
    { t: 'Pleiades: gazetteer of ancient places', url: 'https://pleiades.stoa.org/' },
    { t: 'Philip Jenkins, The Lost History of Christianity (2008)' },
    { t: 'Church of the East: an overview', url: L.wiki('Church_of_the_East') }
  ]
});

UNITS.push({
  id: 'jesus', part: 'History', title: 'Jesus of Nazareth',
  kicker: 'What the sources say, what historians conclude, and who Christians, Jews and Muslims believe he is.',
  learn: {
    goal: 'Know what the earliest sources about Jesus are, what historians of any belief generally conclude, and where history hands over to faith.',
    take: 'The sources are mainly Christian (Paul’s letters, the Gospels), with brief non-Christian mentions. From them nearly all historians conclude that Jesus lived, taught in Galilee, gathered disciples and was crucified under Pontius Pilate. Whether he rose from the dead is a question historians answer differently, partly because of what they think historical method can say about miracles.',
    example: 'Paul, writing about AD 54, passes on a creed he had “received” listing appearances of the risen Jesus {{1Cor.15.3-7}}. That Paul wrote this is a record; that the creed is very early is a widely held scholarly conclusion; that Jesus rose is Christian belief.',
    check: { q: 'Why do historians who are not Christians accept that Jesus was crucified?',
      a: 'Because it is reported independently in several early sources (Paul, Mark, John, and the Roman historian Tacitus), and because a crucified Messiah was an embarrassment that followers would not invent: Paul calls it a “stumbling block” {{1Cor.1.23}}. This is an argument from the sources, not from faith, which is why it is accepted across belief.' },
    next: [['creeds', 'route step 5: what Christians believe about him, and where churches differ'], ['abrahamic', 'how Judaism and Islam see Jesus']]
  },
  intro: 'More has been written about Jesus than about anyone else in history. This unit separates the sources from their interpretation: who wrote about him and when, what nearly all historians accept, where the Gospels agree and differ, and how the main traditions answer the question he himself asked: “whom say ye that I am?” {{Matt.16.15}}',
  sections: [
    { h: 'The sources', blocks: [
      { k: 'record', x: '**Paul’s letters** are the earliest Christian writings (c. 50–60). Paul met Peter and “James the Lord’s brother” in Jerusalem about three years after his conversion {{Gal.1.18-19}}, and he passes on a creed about Jesus’ death, burial and appearances that he had “received” {{1Cor.15.3-7}}.' },
      { k: 'sch', x: '**The four Gospels** are dated by most scholars to c. 65–100 (many conservative scholars place the first three before 70) and read as ancient biographies built on earlier oral and written tradition. Luke says he investigated eyewitness sources {{Luke.1.1-3}}. Most scholars think Mark was written first and used by Matthew and Luke.' },
      { k: 'record', x: '**Roman writers.** Tacitus (c. 116) says “Christus” was executed by the procurator Pontius Pilate under Tiberius (Annals 15.44; [overview with the Latin text](' + L.wiki('Tacitus_on_Jesus') + ')). Pliny the Younger (c. 112) describes Christians singing “a hymn to Christ as to a god” (Letters 10.96; [overview](' + L.wiki('Pliny_the_Younger_on_Christians') + ')). Suetonius mentions unrest at Rome “at the instigation of Chrestus” (Claudius 25.4). The satirist Lucian (c. 165) mocks Christians for worshipping “that crucified sophist.”' },
      { k: 'record', x: '**Jewish sources.** Josephus (c. 94) records the stoning in AD 62 of “James, the brother of Jesus who was called Christ” (Antiquities 20.200). A longer passage, the Testimonium Flavianum (Antiquities 18.63–64; [overview of the debate](' + L.wiki('Josephus_on_Jesus') + ')), was expanded by Christian copyists; most scholars think an authentic core describes Jesus as a wise man and wonder-worker crucified under Pilate. The Babylonian Talmud says “Yeshu” was hanged on the eve of Passover for sorcery and leading Israel astray ([Sanhedrin 43a](' + L.sefaria('Sanhedrin.43a') + ')); whether it refers to Jesus of Nazareth is debated.' },
      { k: 'text', x: '**The Qur’an** (7th century) speaks of ʿĪsā ibn Maryam, Jesus son of Mary, in some fifteen suras: his virgin birth {{Q:19:20-21}}, his miracles {{Q:3:49}}, his title al-Masīḥ, the Messiah, and the denial that he was crucified {{Q:4:157-158}}.' } ] },
    { h: 'What historians generally conclude', blocks: [
      { k: 'sch', x: 'Nearly all historians, whatever their beliefs, hold that Jesus existed. E. P. Sanders (Jesus and Judaism, 1985) listed facts he called almost beyond dispute: Jesus was baptised by John; he was a Galilean who preached and healed; he called disciples and spoke of twelve; he confined his activity to Israel; he engaged in a controversy about the Temple; he was crucified outside Jerusalem by the Roman authorities; and afterwards his followers continued as a movement.' },
      { k: 'sch', x: 'The theory that Jesus never existed (the “Christ myth”) is held by a small minority. Bart Ehrman, an agnostic New Testament scholar, wrote Did Jesus Exist? (2012) to rebut it.' },
      { k: 'sch', x: 'Dates: born before Herod the Great died in 4 BC, so probably 6–4 BC; John the Baptist began preaching in the fifteenth year of Tiberius, about AD 28–29 {{Luke.3.1}}; crucified under Pilate (governor AD 26–36; the Caesarea inscription calls him prefect [[pilateStone]]), most likely on 7 April AD 30 or 3 April AD 33, the two Passover Fridays that fit the evidence.' } ] },
    { h: 'What he taught', blocks: [
      { k: 'text', x: 'The Gospels summarise his message as the arrival of the kingdom (*basileia*, reign) of God and a call to repent {{Mark.1.15}}. He named the greatest commandments as love of God and love of neighbour, quoting the Torah {{Mark.12.29-31}}.' },
      { k: 'text', x: 'His teaching includes love of enemies {{Matt.5.44}}, the Golden Rule {{Matt.7.12}}, forgiveness without limit {{Matt.18.21-22}}, care for the poor and outcast {{Luke.4.18}}, and parables such as the Good Samaritan {{Luke.10.36-37}} and the Prodigal Son {{Luke.15.20}}.' },
      { k: 'sch', x: 'Scholars place him firmly within 1st-century Judaism. Many of his sayings have close parallels among the rabbis: Hillel’s negative Golden Rule ([Shabbat 31a](' + L.sefaria('Shabbat.31a') + ')) and debates over the Sabbath and purity. His distinctive notes are the authority with which he spoke, his table fellowship with sinners, and the centrality of his own person to the kingdom.' } ] },
    { h: 'The Gospels side by side', widget: 'gospels', blocks: [
      { k: 'p', x: 'Choose a passage to read the Gospels’ accounts word for word, with the Greek if you wish.' },
      { k: 'sch', x: 'How the first three Gospels relate (the “Synoptic problem”): most scholars hold that Matthew and Luke used Mark, together with a lost sayings collection called Q. Others (the Farrer hypothesis) think Luke used Matthew and no Q is needed. The ancient Church held that Matthew was written first. The Gospels follow the conventions of ancient biography, which allowed paraphrase, compression and reordering (Richard Burridge, What Are the Gospels?, 1992).' } ] },
    { h: 'The resurrection: claim and debate', blocks: [
      { k: 'text', x: 'The earliest written claim is Paul’s creed: Christ died, was buried, was raised on the third day, and appeared to Cephas, the twelve, more than five hundred at once, James and all the apostles {{1Cor.15.3-8}}. All four Gospels report women finding the tomb empty {{Mark.16.6}}.' },
      { k: 'sch', x: 'Historians generally accept that within a few years of the crucifixion his followers were proclaiming him risen in Jerusalem and were willing to suffer for it. Paul, once a persecutor, and James, his brother, who had not followed him in his lifetime {{John.7.5}}, became leaders. Matthew reports a Jewish counter-explanation that the disciples stole the body {{Matt.28.13}}, and Justin Martyr (c. 155) says it was still circulating ([Dialogue with Trypho 108](' + L.na('0128') + ')).' },
      { k: 'sch', x: 'Historians differ on how to explain these facts. N. T. Wright (The Resurrection of the Son of God, 2003) and Michael Licona argue that a bodily resurrection best explains the empty tomb and the appearances. Gerd Lüdemann and Bart Ehrman argue for visionary experiences after Jesus’ death. Many historians hold that a miracle is by its nature beyond what historical method can confirm or rule out.' },
      { k: 'bel', who: 'Christian', x: 'Jesus rose bodily from the dead, the first-fruits of the general resurrection: “if Christ be not risen, then is our preaching vain” {{1Cor.15.14}}.' },
      { k: 'bel', who: 'Jewish', x: 'Jesus died and did not rise. The messianic age, with the ingathering of the exiles, the rebuilt Temple and universal peace, has not arrived, so he was not the Messiah (Maimonides, [Mishneh Torah, Kings 11](' + L.sefaria('Mishneh_Torah,_Kings_and_Wars.11.4') + ')).' },
      { k: 'bel', who: 'Muslim', x: 'Jesus was not killed or crucified; it was made to appear so, and God raised him to Himself {{Q:4:157-158}}. He will return before the Day of Judgement ([Sahih al-Bukhari 3448](' + L.sunnah('bukhari:3448') + ')).' } ] },
    { h: '“Whom say ye that I am?”', blocks: [
      { k: 'table', head: ['', 'Christian', 'Jewish', 'Muslim', 'Historical scholarship'], rows: [
        ['Who is he?', 'The eternal Son of God made man, fully divine and fully human (Nicaea, Chalcedon)', 'A Jewish teacher of the 1st century, not the Messiah and not divine', 'A prophet and messenger of God, the Messiah, born of a virgin, not divine {{Q:5:75}}', 'A Jewish prophet and teacher; how he understood himself is debated'],
        ['Birth', 'Born of the Virgin Mary by the Holy Spirit {{Luke.1.35}}', 'An ordinary birth; Isaiah 7:14 refers to its own time', 'Born of the virgin Mary by God’s command, “Be!” {{Q:3:47}}', 'The birth narratives are theological and their historicity is debated'],
        ['Death', 'Crucified for the sins of the world', 'Executed by Rome', 'Not crucified; raised to God', 'Crucified under Pilate: among the most certain facts about him'],
        ['After death', 'Raised bodily on the third day; ascended; will return', 'Not raised', 'Alive with God; will return', 'His followers sincerely believed he appeared to them; explanations differ'],
        ['Title “Son of God”', 'Eternal Son, of one substance with the Father', 'A Jewish title for Israel or its king {{Ps.2.7}}, not divinity', 'Rejected: “it befitteth not Allah that He should take unto Himself a son” {{Q:19:35}}', 'Used in Judaism for kings and the righteous; its meaning in the Gospels is studied closely'] ] },
      { k: 'sch', x: 'Modern Jewish scholars such as Geza Vermes (Jesus the Jew, 1973) and Amy-Jill Levine have studied Jesus as a Jew of his time. Albert Schweitzer (The Quest of the Historical Jesus, 1906) argued that he was an apocalyptic prophet expecting the end, a view many scholars still hold. Others, such as John Dominic Crossan, emphasise a wisdom teacher of radical inclusion.' } ] }
  ],
  questions: ['Which non-Christian source about Jesus do you find most significant, and why?', 'Why do historians accept the crucifixion as nearly certain? (Consider the criterion of embarrassment.)', 'The table shows real agreement between Christianity and Islam about Jesus. Where exactly do they agree, and where is the decisive difference?'],
  sources: [
    { t: 'E. P. Sanders, Jesus and Judaism (London: SCM; Philadelphia: Fortress, 1985)' },
    { t: 'Bart D. Ehrman, Did Jesus Exist? The Historical Argument for Jesus of Nazareth (New York: HarperOne, 2012)' },
    { t: 'N. T. Wright, The Resurrection of the Son of God (London: SPCK; Minneapolis: Fortress, 2003)' },
    { t: 'Historicity of Jesus: overview with sources', url: L.wiki('Historicity_of_Jesus') },
    { t: 'Jesus in Islam: overview with Qur’anic references', url: L.wiki('Jesus_in_Islam') },
    { t: 'Geza Vermes, Jesus the Jew (London: Collins, 1973)' }
  ]
});

UNITS.push({
  id: 'time', part: 'History', title: 'Days, dates and deep time',
  kicker: 'How we know a day is a day, how the calendar was built, how the past is dated, and how to live wisely in time.',
  intro: 'Every date in this atlas rests on a method, and every method has limits. This unit explains what a “day” means in Genesis, in astronomy and in the Gospels; how the week, the calendar and AD dating came about; how historians and scientists date the past; how readers have understood the days of creation; and what the biblical rhythms of time offer a life today.',
  sections: [
    { h: 'What is a day?', blocks: [
      { k: 'text', x: 'The Hebrew *yôm* has three senses within the first two chapters of Genesis: daylight (“God called the light Day” {{Gen.1.5}}), a full evening-and-morning day, and an indefinite time (“in the day that the LORD God made the earth and the heavens,” covering the whole creation week {{Gen.2.4}}).' },
      { k: 'text', x: '“The evening and the morning were the first day.” This is why the Jewish day and the Sabbath begin at sunset, and why churches keep vigils on the eve of feasts. The sun, moon and stars appear on the fourth day {{Gen.1.16}}; Origen asked around 230 how there could be days before them ([On First Principles 4.3.1](' + L.na('04124') + ')).' },
      { k: 'record', x: 'Astronomically, the solar day (noon to noon) averages 24 hours; one rotation measured against the stars takes 23 hours 56 minutes 4 seconds. Since 1967 the second has been defined by atomic physics (9,192,631,770 oscillations of a caesium-133 atom), and leap seconds have kept clocks in step with the Earth since 1972 (they are to be phased out by 2035).' },
      { k: 'record', x: 'The day is lengthening by about 1.8 milliseconds per century as the Moon’s tides slow the Earth, measured from ancient Babylonian, Chinese and Arab eclipse records. Layered tidal sediments suggest days of about 22 hours some 620 million years ago. The human body keeps time too: the 2017 Nobel Prize in Medicine was awarded for the genes of the roughly 24-hour circadian clock.' },
      { k: 'p', x: 'Jews and Romans counted twelve hours of daylight from sunrise. Mark says Jesus was crucified at the third hour, about 9 a.m. {{Mark.15.25}}; John places Pilate’s judgement at about the sixth hour {{John.19.14}}. Harmonisations are proposed (different reckonings, approximate time-telling), and none is certain.' } ] },
    { h: 'Weeks, calendars and the invention of AD', blocks: [
      { k: 'text', x: 'The seven-day week is grounded in the Sabbath {{Exod.20.11}}. In Deuteronomy the Sabbath is grounded instead in release from slavery: your servants rest as you do {{Deut.5.15}}.' },
      { k: 'record', x: 'The planetary names of the days (Saturn’s day, Sun’s day, Moon’s day) are Roman, from the 1st century. Constantine made Sunday a day of rest in 321. The Hebrew calendar is lunisolar, adding a thirteenth month seven times in nineteen years. Islam’s calendar is purely lunar, about eleven days shorter than the solar year, so Ramadan moves through the seasons.' },
      { k: 'record', x: 'Julius Caesar’s calendar (45 BC) was 11 minutes a year too long. By 1582 it had drifted ten days, and Pope Gregory XIII’s reform skipped from 4 to 15 October. Britain followed in 1752, dropping eleven days. Many Orthodox churches still keep the Julian calendar for feasts, which is why their Christmas falls on 7 January.' },
      { k: 'record', x: 'In 525 the monk Dionysius Exiguus numbered years “from the incarnation” instead of from the persecuting emperor Diocletian. Bede (731) spread the system. There is no year zero. Dionysius was a few years off, since Herod died in 4 BC. BCE and CE keep the same numbers.' } ] },
    { h: 'How the past is dated', widget: 'methods', blocks: [
      { k: 'p', x: 'Some dates are written down, some are calculated from the sky, and some are measured in the laboratory. Open each method to see its range, precision and a biblical example.' } ] },
    { h: 'Deep time', widget: 'deep', blocks: [
      { k: 'p', x: 'The chart uses a logarithmic scale: each step to the left is ten times further back. Hover over or tap any point for how the date is known and when it was found out. Traditional creation dates are plotted too; they differ mainly because the Greek and Hebrew texts of Genesis 5 and 11 give different ages.' } ] },
    { h: 'Names attested outside the Bible', blocks: [
      { k: 'p', x: 'Inscriptions and excavations attest a number of people and places named in the Bible. Each find attests something specific, set out in the opening unit’s table; none confirms a whole narrative by itself, and some popular versions of these stories (“scholars said the Hittites never existed”) are not supported by evidence the atlas has found.' },
      { k: 'list', items: [
        '**Belshazzar** {{Dan.5.1}}: named on Nabonidus’s cylinders from Ur (found 1853–54) as the king’s eldest son, and in other texts as crown prince and regent [[nabonidusCyl]] [[belshazzarBM]]. Before that he was known only from Daniel, Baruch and writers who depend on them, such as Josephus.',
        '**Sargon II** {{Isa.20.1}}: his palace and annals, including the Ashdod campaign, were excavated at Khorsabad from 1843 [[khorsabad]].',
        '**Pontius Pilate**: his title “prefect of Judaea” on an inscription found at Caesarea in 1961 [[pilateStone]].',
        '**The “house of David”**: on the Tel Dan stele (1993–94), at a time when some scholars doubted that David existed [[telDan]].',
        '**The Hittites** {{Gen.23.10}}: an Anatolian empire identified in the late 19th century and documented by the Boğazköy archives from 1906; how it relates to the Bible’s Hittites is debated [[bogazkoy]].',
        '**The Pool of Siloam** {{John.9.7}} (a Second Temple pool excavated from 2004) and **the Pool of Bethesda** {{John.5.2}} (excavated from the 19th century; how its remains fit John’s “five porches” is debated).' ] },
      { k: 'open', x: 'Absence of evidence counts differently in different cases. A worldwide flood would have left worldwide traces, and none is found; the Exodus on the scale the text gives would be expected to leave some, and the question is debated; individual patriarchs would not be expected to leave any. The opening unit sets these cases out separately.' } ] },
    { h: 'What are the days of Genesis?', widget: 'readings', blocks: [
      { k: 'p', x: 'Christians and Jews have read the creation days in many ways, long before modern science. Each card gives a reading’s best case and its main difficulty.' },
      { k: 'p', x: 'Augustine warned (The Literal Meaning of Genesis 1.19.39) that it is disgraceful when non-believers hear a Christian talking nonsense about the natural world while appealing to Scripture, because they will then distrust Scripture where they cannot check it. Galileo (1615) quoted Cardinal Baronius: the Holy Spirit intends to teach us how one goes to heaven, not how the heavens go.' },
      { k: 'record', x: 'Georges Lemaître, a Catholic priest and physicist, proposed in 1927 that the universe is expanding from a beginning. Fred Hoyle coined “Big Bang” in 1949 partly in scepticism, preferring an eternal steady-state universe. Pius XII welcomed the idea of a beginning in 1951; Lemaître himself cautioned against treating it as proof of creation.' },
      { k: 'p', x: 'On each of these readings, Genesis 1 says that the world is not divine, not an accident, and not a battlefield of gods: it is good, ordered and spoken into being by one God, who made man and woman alike in his image and gave a rhythm of work and rest.' } ] },
    { h: 'The Christian year', widget: 'year', blocks: [] },
    { h: 'Living wisely in time', widget: 'rhythms', blocks: [
      { k: 'p', x: '“So teach us to number our days, that we may apply our hearts unto wisdom” {{Ps.90.12}}. The Bible gives time a shape: the day, the week, the year, seven years and fifty, and a life. Each rhythm below comes with a practice and the evidence behind it.' } ] }
  ],
  questions: ['Which of the dating methods do you trust most, and what are its limits?', 'Augustine read the days of Genesis non-literally fifteen centuries before Darwin. Does that change how you see the modern debate?', 'What would a weekly Sabbath change in your own life?'],
  sources: [
    { t: 'Humphreys and Waddington, “Dating the Crucifixion,” Nature 306 (1983)', url: L.doi('10.1038/306743a0') },
    { t: 'Stephenson, Morrison and Hohenkerk, “Measurement of the Earth’s rotation: 720 BC to AD 2015,” Proc. R. Soc. A (2016)', url: L.doi('10.1098/rspa.2016.0404') },
    { t: 'Planck Collaboration, cosmological parameters (2018)', url: L.doi('10.1051/0004-6361/201833910') },
    { t: 'John Walton, The Lost World of Genesis One (2009)' },
    { t: 'John Walton: background on the author', url: L.wiki('John_H._Walton') },
    { t: 'Augustine, The Literal Meaning of Genesis', url: L.wiki('De_Genesi_ad_litteram') }
  ]
});
