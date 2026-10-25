/* Part V: Comparisons. */
window.UNITS = window.UNITS || [];

/* Judaism, Christianity and Islam, topic by topic. Each cell summarises the tradition's own sources. */
window.ABRAHAMIC = [
  { k: 'God', j: 'One God, without parts or body: “Hear, O Israel” {{Deut.6.4}}. Maimonides’ Thirteen Principles affirm that God is one and incorporeal.',
    c: 'One God in three persons, Father, Son and Holy Spirit, sharing one divine nature. “God is love” {{1John.4.8}}.',
    i: 'Tawḥīd, God’s absolute oneness: “He begetteth not nor was begotten. And there is none comparable unto Him” {{Q:112:1-4}}. God is known by his Most Beautiful Names, traditionally ninety-nine.' },
  { k: 'Revelation', j: 'The Written Torah given at Sinai, with the Oral Torah handed down beside it and later written in the Mishnah (c. 200) and Talmud (c. 500).',
    c: 'God spoke through the prophets and finally through his Son {{Heb.1.1-2}}. Scripture is “given by inspiration of God” {{2Tim.3.16}}, and Christ himself is the Word.',
    i: 'The Qur’an is God’s own speech, revealed to Muhammad through the angel Gabriel {{Q:2:97}} over about 23 years (610–632), in Arabic. The Sunnah (the Prophet’s example, recorded in hadith) is the second source.' },
  { k: 'Prophets', j: 'Moses is the greatest prophet {{Deut.34.10}}. Prophecy ceased after Haggai, Zechariah and Malachi.',
    c: 'The prophets point forward to Christ; John the Baptist is the last of them {{Matt.11.13}}. The New Testament also recognises a gift of prophecy in the Church.',
    i: 'God sent many prophets, among them Adam, Noah, Abraham, Moses, David and Jesus. Twenty-five are named in the Qur’an. Muhammad is “the Seal of the Prophets” {{Q:33:40}}.' },
  { k: 'Abraham', j: 'Father of the Jewish people, with whom God made an everlasting covenant {{Gen.17.7}}.',
    c: 'Father of all who believe, Jew and Gentile {{Rom.4.16}}.',
    i: 'Ibrāhīm, “neither a Jew nor a Christian, but he was an upright man who had surrendered” {{Q:3:67}}, who with Ishmael raised the foundations of the Kaaba {{Q:2:127}}. Genesis names Isaac as the son nearly sacrificed {{Gen.22.2}}; the Qur’an does not name the son {{Q:37:102}}, and most Muslim tradition holds it was Ishmael.' },
  { k: 'Jesus', j: 'A Jewish teacher of the 1st century, not the Messiah, since the messianic age has not come.',
    c: 'The Messiah and eternal Son of God, crucified and risen, who will return.',
    i: 'ʿĪsā, a prophet and the Messiah, born of the virgin Mary, a Word from God and a spirit from Him {{Q:4:171}}; not divine and not crucified {{Q:4:157}}; he will return.' },
  { k: 'Mary', j: 'Not a figure in Jewish tradition.',
    c: 'Mother of the Lord. Catholic and Orthodox Christians venerate her as Theotokos, “God-bearer”; Protestants honour her as a model of faith {{Luke.1.38}}.',
    i: 'Maryam, chosen and purified “above all the women of creation” {{Q:3:42}}. Sura 19 bears her name, and she is named more often in the Qur’an than in the New Testament.' },
  { k: 'Human nature and sin', j: 'Each person has a good and an evil inclination (*yetzer tov*, *yetzer hara*). There is no inherited guilt; repentance (*teshuvah*) restores.',
    c: 'Humanity shares in Adam’s fall {{Rom.5.12}}. Western churches teach original sin (Augustine); the Orthodox speak of inherited mortality and weakness rather than guilt.',
    i: 'Adam and Eve repented and were forgiven {{Q:2:37}}. Every person is born in *fiṭrah*, a natural disposition toward God {{Q:30:30}}. There is no original sin.' },
  { k: 'Salvation', j: 'Faithfulness to the covenant, repentance, prayer and charity. “The righteous of all nations have a share in the world to come” (Tosefta Sanhedrin 13:2).',
    c: 'By grace through faith in Christ {{Eph.2.8}}. Traditions differ on how faith, works and sacraments relate.',
    i: 'Faith and righteous deeds, under God’s mercy. Deeds are weighed on the Day of Judgement: “whoso doeth good an atom’s weight will see it then” {{Q:99:7-8}}.' },
  { k: 'Law', j: '613 commandments (Talmud, Makkot 23b), interpreted in *halakhah*, the way of life of the Jewish community.',
    c: 'The Law is fulfilled in Christ {{Matt.5.17}}; love is “the fulfilling of the law” {{Rom.13.10}}. The moral law stands; ritual and food laws are not binding on Gentile Christians {{Acts.15.28-29}}.',
    i: 'The Sharīʿah, derived from the Qur’an and Sunnah and developed by jurists (fiqh) in several schools.' },
  { k: 'Prayer', j: 'Three daily services (morning, afternoon, evening); the Amidah and the Shema.',
    c: 'The Lord’s Prayer {{Matt.6.9}}, the Eucharist, the daily office, personal prayer.',
    i: 'Five daily prayers (*ṣalāh*) facing Mecca, including the Fātiḥah {{Q:1:1-7}}.' },
  { k: 'Fasting', j: 'Yom Kippur, the Day of Atonement {{Lev.16.29}}, and other fast days.',
    c: 'Lent, Fridays and personal fasting {{Matt.6.16-18}}; customs vary widely.',
    i: 'The month of Ramadan, from dawn to sunset {{Q:2:183}}.' },
  { k: 'Charity', j: '*Tzedakah*, which also means “righteousness.” Maimonides ranks eight levels, the highest being to make the poor self-sufficient.',
    c: 'Almsgiving in secret {{Matt.6.3-4}}; care for the poor as care for Christ {{Matt.25.40}}.',
    i: '*Zakāh*, an obligatory share of wealth (traditionally 2.5% of savings), and voluntary *ṣadaqah* {{Q:2:177}}.' },
  { k: 'Sacred places', j: 'Jerusalem and the Temple Mount; the Western Wall.',
    c: 'Jerusalem, Bethlehem, Rome and many pilgrimage sites, though no place is required.',
    i: 'Mecca and the Hajj, required once in a lifetime for those able {{Q:3:97}}; Medina; Jerusalem, the site of the Night Journey {{Q:17:1}}.' },
  { k: 'Angels and the adversary', j: 'Angels are God’s messengers. The *satan* is the accuser in God’s court {{Job.1.6}}.',
    c: 'Angels serve God; Satan is a fallen adversary, “that old serpent” {{Rev.12.9}}.',
    i: 'Angels such as Jibrīl (Gabriel); also the jinn. Iblīs refused to bow to Adam and became the tempter {{Q:2:34}}.' },
  { k: 'Food', j: 'Kashrut: no pork or shellfish, meat and milk kept separate {{Lev.11.7}}.',
    c: 'All foods are clean {{Mark.7.19}}; some churches keep fasting rules.',
    i: 'Halal: pork, blood and carrion are forbidden {{Q:5:3}}, and so are intoxicants {{Q:5:90}}.' },
  { k: 'The end', j: 'A messiah of David’s line will gather the exiles and rebuild the Temple; the dead will rise {{Dan.12.2}}.',
    c: 'Christ will return, the dead will rise, and God will make all things new {{Rev.21.5}}.',
    i: 'The Day of Judgement and the resurrection of bodies {{Q:75:3-4}}; Jesus will return; many traditions also expect the Mahdi.' },
  { k: 'Other faiths', j: 'Gentiles are righteous by keeping the seven Noahide laws (Talmud, Sanhedrin 56a).',
    c: 'Christ is the way {{John.14.6}}. Since Vatican II the Catholic Church “rejects nothing that is true and holy” in other religions (Nostra Aetate 2).',
    i: 'Jews and Christians are “People of the Scripture”: “our God and your God is One” {{Q:29:46}}. “There is no compulsion in religion” {{Q:2:256}}.' }
];

UNITS.push({
  id: 'abrahamic', part: 'Comparisons', title: 'Judaism, Christianity and Islam',
  kicker: 'Three faiths that trace themselves to Abraham: what they share and where they part.',
  intro: 'More than half of humanity belongs to a faith that traces itself to Abraham. Judaism, Christianity and Islam share one God, the prophets, a moral law, prayer, fasting and charity, and the hope of a final judgement. They differ decisively over Jesus, over the nature of God’s oneness, and over which scripture is final. This unit compares them topic by topic, in each tradition’s own terms, and then looks more closely at Islam and Judaism and at how the three have related through history.',
  widget: 'abrahamic',
  sections: [
    { h: 'Islam: the record', blocks: [
      { k: 'record', x: 'Muhammad was born in Mecca around 570. Muslims date the first revelation to 610, in a cave on Mount Hira. Opposition in Mecca led to the emigration (*Hijrah*) to Medina in 622, which begins the Islamic calendar. By his death in 632 most of Arabia had accepted Islam; within a century Muslim rule stretched from Spain to Central Asia.' },
      { k: 'record', x: 'The Qur’an has 114 suras (chapters) and about 6,236 verses, arranged roughly from longest to shortest rather than in order of revelation. Tradition holds that the standard text was compiled under the caliph ʿUthmān around 650. A dispute over leadership after Muhammad divided Sunni and Shiʿa Muslims; about 85–90% of Muslims today are Sunni.' },
      { k: 'record', x: 'Pew Research Center estimates about two billion Muslims in 2020, a quarter of the world’s population, and about 2.3 billion Christians.' },
      { k: 'bel', who: 'Muslim', x: 'The five pillars: the profession of faith (*shahādah*), five daily prayers, almsgiving (*zakāh*), fasting in Ramadan, and pilgrimage to Mecca. The six articles of faith: God, the angels, the revealed books, the prophets, the Last Day, and God’s decree.' } ] },
    { h: 'Jesus and Mary in the Qur’an', blocks: [
      { k: 'text', x: 'The Qur’an calls Jesus the Messiah, “illustrious in the world and the Hereafter” {{Q:3:45}}. It tells of the annunciation to Mary {{Q:19:16-21}} and of the infant Jesus speaking from the cradle {{Q:19:29-33}}. It credits him with healing the blind and the leper, raising the dead and giving life to clay birds “by Allah’s leave” {{Q:3:49}}.' },
      { k: 'text', x: 'It denies three things Christians affirm: that God is three {{Q:4:171}} {{Q:5:73}}, that God has a son {{Q:19:35}}, and that Jesus was crucified {{Q:4:157}}. In one passage God asks Jesus whether he told people to worship him and his mother, and Jesus denies it {{Q:5:116}}.' },
      { k: 'sch', x: 'Scholars note that the Qur’an’s critique of a Trinity of God, Jesus and Mary (5:116) does not match the creeds, which name Father, Son and Spirit; it may respond to popular practice among Christians of 7th-century Arabia. Its infancy stories have parallels in the Protoevangelium of James and the Infancy Gospel of Thomas.' },
      { k: 'text', x: 'The Qur’an speaks warmly of Christians: “thou wilt find the nearest of them in affection to those who believe … those who say: Lo! We are Christians” {{Q:5:82}}. Muslims read {{Q:61:6}}, where Jesus announces a messenger named Aḥmad, as a prophecy of Muhammad, and some connect it with the Paraclete of {{John.14.16}}.' } ] },
    { h: 'The decisive differences', blocks: [
      { k: 'bel', who: 'Muslim', x: 'To call Jesus God’s son, or God three, compromises God’s oneness; God forgives directly and needs no sacrifice; the Qur’an corrects what earlier communities altered.' },
      { k: 'bel', who: 'Christian', x: 'The Trinity is one God, not three. The cross is attested by the earliest Christian, Jewish and Roman sources, so to deny it is to deny the historical record. Forgiveness at the cross is God’s own costly act of love {{Rom.5.8}}.' },
      { k: 'sch', x: 'Historians of every background regard the crucifixion of Jesus as one of the best-attested facts about him. Muslim scholars have read Qur’an 4:157 in several ways: that another was crucified in his likeness (the majority view), that Jesus was crucified but not killed, or that the Jews did not achieve his death because God raised him.' } ] },
    { h: 'Judaism after the Temple', blocks: [
      { k: 'record', x: 'After Rome destroyed the Temple in AD 70, the rabbis rebuilt Jewish life around Torah study, prayer and the synagogue. The Mishnah (c. 200) and the Babylonian Talmud (c. 500) became the foundation of Jewish law and thought. Today’s main movements (Orthodox, Conservative and Reform) took shape in the 19th century.' },
      { k: 'record', x: 'Christianity began as a Jewish movement; the “parting of the ways” was gradual over the first centuries. Centuries of Christian hostility followed: the charge of deicide, forced disputations, ghettos, expulsions and massacres. The Holocaust forced a reckoning. Vatican II’s Nostra Aetate (1965) rejected the deicide charge, and many Protestant churches issued similar statements. In 2000, Jewish scholars published [Dabru Emet](' + L.wiki('Dabru_Emet') + '), affirming that Jews and Christians worship the same God.' },
      { k: 'bel', who: 'Jewish', x: 'God’s covenant with Israel is eternal; Jews are called to sanctify the world through the commandments. The Messiah will come and the world will be redeemed.' } ] },
    { h: 'How the three have met', blocks: [
      { k: 'record', x: 'John of Damascus (c. 730), living under the caliphate, wrote about Islam as a Christian heresy. In 9th-century Baghdad, Christian scholars translated Aristotle and Galen into Arabic; through Arabic and Latin, Aristotle reached medieval Europe, and Aquinas engaged closely with Averroes and Maimonides. The Crusades (1095–1291) and the Reconquista were wars of faith on both sides. In 1219 Francis of Assisi crossed the lines to visit Sultan al-Kāmil.' },
      { k: 'record', x: 'Nostra Aetate (1965) says the Catholic Church “regards with esteem also the Moslems. They adore the one God.” In 2007, 138 Muslim scholars addressed Christian leaders in [A Common Word Between Us and You](' + L.wiki('A_Common_Word_Between_Us_and_You') + '), built on the shared commandments to love God and neighbour. In 2019 Pope Francis and the Grand Imam of al-Azhar signed the Document on Human Fraternity in Abu Dhabi.' } ] }
  ],
  questions: ['List three things all three traditions share. Which difference do you think is most important, and why?', 'How does the Qur’an’s portrait of Jesus compare with the Gospels’? What is the strongest argument each tradition makes for its account?', 'What does “A Common Word” suggest about where Christian–Muslim dialogue can begin?'],
  sources: [
    { t: 'Quran.com: Arabic with many translations', url: 'https://quran.com/' },
    { t: 'Sunnah.com: hadith collections', url: 'https://sunnah.com/' },
    { t: 'Sefaria: Torah, Talmud, Mishnah and commentaries', url: 'https://www.sefaria.org/' },
    { t: 'Nostra Aetate (1965)', url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decl_19651028_nostra-aetate_en.html' },
    { t: 'Pew Research Center: the global religious landscape', url: 'https://www.pewresearch.org/religion/' },
    { t: 'Jesus in Islam: overview', url: L.wiki('Jesus_in_Islam') }
  ]
});

UNITS.push({
  id: 'ancient', part: 'Comparisons', title: 'Ancient traditions',
  kicker: 'Egypt, Mesopotamia, Persia, Greece, Rome, India, China and the North: what they gave, and where the ways part.',
  intro: 'Christianity grew up among older civilisations and borrowed from them openly: Greek philosophy, Roman law and roads, Egyptian monasticism. It also defined itself against them. Augustine, reading the Exodus, said Christians should “spoil the Egyptians”: carry off the gold of pagan learning for better use ([On Christian Doctrine 2.40.60](' + L.na('12022') + ')). Justin Martyr went further: whatever any people has said truly belongs to Christians, because the Word sows seeds of truth in every nation ([Second Apology 13](' + L.na('0127') + ')). This unit sets each tradition out in its own terms, with its primary texts, and then traces shared threads across them.',
  widget: 'traditions',
  sections: [
    { h: 'Threads across traditions', widget: 'threads', blocks: [
      { k: 'p', x: 'Similar ideas appear across cultures: a moral order in the cosmos, the Golden Rule, a great flood, a judgement of the dead, creation by a word. Similarity can mean shared human experience, historical contact, a common source, or, for many believers, the same truth glimpsed from many places. Each row cites its source so that the parallels can be checked, and differences matter as much as likenesses.' } ] },
    { h: 'A note on “dying and rising gods”', blocks: [
      { k: 'record', x: 'Popular books and films claim that the Gospel story was copied from myths of Horus, Mithras, Osiris or Dionysus. The ancient sources do not support most of the specific claims, such as Horus born of a virgin on 25 December with twelve disciples, or Mithras crucified and raised; these come from 19th-century writers such as Gerald Massey, not from Egyptian or Roman texts.' },
      { k: 'sch', x: 'Scholars still debate the broader category. J. Z. Smith (1987) argued that “dying and rising gods” is a modern construct; Tryggve Mettinger (2001) argued that some ancient Near Eastern gods (Dumuzi, Baal, Melqart) were believed to die and return, but in seasonal, mythic cycles, not as a recent public event.' },
      { k: 'bel', who: 'Christian', x: 'C. S. Lewis argued in “Myth Became Fact” (1944) that if the Gospel is true, echoes of it in human myth are what one would expect: longings that reality finally answers.' } ] }
  ],
  questions: ['Choose one thread. Is the similarity best explained by contact, by shared human nature, or by something else?', 'What did the early Church accept from Greek philosophy, and what did it refuse?', 'Justin Martyr and Augustine both welcomed truth from pagan sources. What limits did each set?'],
  sources: [
    { t: 'C. S. Lewis, The Abolition of Man (1943), appendix “Illustrations of the Tao”', url: L.wiki('The_Abolition_of_Man') },
    { t: 'James B. Pritchard, Ancient Near Eastern Texts Relating to the Old Testament', url: L.wiki('Ancient_Near_Eastern_Texts_Relating_to_the_Old_Testament') },
    { t: 'Internet Sacred Text Archive', url: 'https://sacred-texts.com/' },
    { t: 'Chinese Text Project', url: 'https://ctext.org/' }
  ]
});

UNITS.push({
  id: 'kemet', part: 'Comparisons', title: 'Kemet and the Metu Neter',
  kicker: 'Ancient Egyptian religion as the sources record it, a modern Kemetic system built on it, and how both compare with Christianity.',
  intro: 'Kemet (*kmt*, “the black land,” from the dark soil of the Nile) is what the ancient Egyptians called their country. Their religion lasted three thousand years and shaped the world of the Bible. In the late 20th century, Ra Un Nefer Amen and the Ausar Auset Society developed the Metu Neter, a spiritual system drawing on Egyptian concepts. This unit keeps three things distinct: what ancient Egyptian sources say, what the modern system teaches, and how each compares with Christian faith.',
  sections: [
    { h: 'The ancient sources', blocks: [
      { k: 'record', x: 'Egyptian religion is known from temple and tomb inscriptions, papyri and objects. The main religious texts are the Pyramid Texts (carved c. 2350 BC in the pyramid of Unas), the Coffin Texts (Middle Kingdom) and the Book of the Dead (New Kingdom; its own title is *prt m hrw*, “Coming Forth by Day”). Hieroglyphs were deciphered by Champollion in 1822 with the help of the Rosetta Stone. [Book of the Dead, trans. Budge](' + L.sacred('egy/ebod/index.htm') + ') · [Rosetta Stone, British Museum](' + L.bm('Y_EA24') + ')' },
      { k: 'text', x: 'The Egyptians called their writing *mdw nṯr*, “the words of the god(s),” the origin of the modern name Metu Neter (or Medu Netjer). *Nṯr* (neter) means god; *nṯrw* (neteru), gods.' },
      { k: 'record', x: 'Key ideas: *Maʿat*, truth, justice and cosmic order, personified as a goddess with an ostrich feather; the person as body, heart (*ib*), life-force (*ka*), personality (*ba*), name (*ren*), shadow (*šwt*) and transfigured spirit (*akh*); and the judgement of the dead, in which the heart is weighed against Maʿat’s feather while the deceased declares innocence of forty-two wrongs before forty-two judges (Book of the Dead, chapter 125).' },
      { k: 'record', x: 'The fullest connected account of the Osiris myth is by the Greek writer Plutarch (On Isis and Osiris, 1st century AD), supplemented by Egyptian fragments: Osiris is murdered by his brother Set, restored by Isis, and rules the dead, while his son Horus avenges him and rules the living. The Memphite Theology, preserved on the Shabaka Stone (c. 700 BC, copying an older text), describes the god Ptah creating through his heart and his tongue, thought and word ([British Museum](' + L.bm('Y_EA498') + ')).' },
      { k: 'sch', x: 'Egyptian religion was never a single system. It varied by city, period and social class, combined many gods with a sense of underlying unity (especially in hymns to Amun-Ra), and changed across three millennia. Egyptologists caution against reading later theories back into it.' } ] },
    { h: 'Egypt and the Bible', blocks: [
      { k: 'text', x: 'Egypt is Joseph’s refuge, Israel’s house of bondage, and the place where the child Jesus is taken {{Matt.2.15}}. Moses is “learned in all the wisdom of the Egyptians” {{Acts.7.22}}.' },
      { k: 'sch', x: 'Most scholars hold that Proverbs 22:17–24:22 adapts the Egyptian Instruction of Amenemope, and many see Akhenaten’s Hymn to the Aten behind Psalm 104 or a shared hymn tradition {{Ps.104.24}}.' },
      { k: 'record', x: 'Egypt became one of the great centres of Christianity: Alexandria’s theologians, the first monks (Antony, Pachomius), and the Coptic Church, whose liturgical language descends from ancient Egyptian. Coptic Christians adopted the ankh, the hieroglyph for “life,” as a form of the cross (*crux ansata*).' } ] },
    { h: 'The Metu Neter system', blocks: [
      { k: 'record', x: 'Ra Un Nefer Amen founded the Ausar Auset Society in New York in 1973. His books Metu Neter, Vol. 1: The Great Oracle of Tehuti and the Egyptian System of Spiritual Cultivation (1990) and later volumes set out a system of meditation, chant (*hekau*), trance, ethical discipline based on Maʿat, and an oracle. It arranges divine principles named for Egyptian deities (Ausar, Tehuti, Maat, Heru, Het-Heru, Auset, Geb and others) on a Tree of Life, as stages of the spirit’s cultivation.' },
      { k: 'bel', who: 'Metu Neter', x: 'The system teaches that the human spirit can be cultivated, through knowledge, meditation and right living, until the indwelling divine (Ausar) is realised. It presents this as the restoration of an ancient African spiritual science, and holds that the Kabbalistic Tree of Life derives from Kemetic sources.' },
      { k: 'sch', x: 'Egyptologists have found no ancient Egyptian evidence for a Tree of Life diagram of spheres. The ten *sefirot* derive from Jewish mysticism (the Sefer Yetzirah, c. 3rd–6th century, the Bahir and the Zohar, 12th–13th centuries), and the familiar tree diagram is later still. Early modern writers such as Athanasius Kircher (Oedipus Aegyptiacus, 1652) already linked Kabbalah to Egypt, so the association itself has a long history.' },
      { k: 'sch', x: 'The system belongs to a wider 20th-century movement of African and African-diaspora reclamation. Related claims, such as George G. M. James’s Stolen Legacy (1954), Cheikh Anta Diop’s work, and Martin Bernal’s Black Athena (1987), argued that Greek philosophy owed much to Egypt. Critics, notably Mary Lefkowitz (Not Out of Africa, 1996), rejected the stronger claims. Greek writers themselves (Herodotus, Plato) admired Egypt’s antiquity, and that admiration is well documented.' } ] },
    { h: 'Compared with Christian faith', blocks: [
      { k: 'table', head: ['Theme', 'Ancient Egypt (sources)', 'Metu Neter (modern system)', 'Christianity'], rows: [
        ['The divine', 'Many gods, often seen as aspects of a hidden unity (Amun, “the hidden one”)', 'One God expressed through divine principles (neteru)', 'One God in three persons; creatures are not emanations of God {{Isa.45.5}}'],
        ['Creation', 'By Ptah’s heart and tongue, or by Atum from the primeval waters', 'Unfolding of the divine through the spheres', 'By the Word {{John.1.3}}, out of nothing'],
        ['Ethics', 'Maʿat: the 42 declarations of innocence (BD 125); Ptahhotep and Amenemope', 'Cultivation of Maʿat; behavioural disciplines', 'The Ten Commandments {{Exod.20.3-17}}, love of God and neighbour'],
        ['Death and life', 'Osiris restored to rule the dead; the heart weighed', 'Realising the divine Ausar within', 'Christ raised bodily; grace and the resurrection of the dead {{1Cor.15.20}}'],
        ['Guidance', 'Oracles of the gods, dreams, divination', 'The oracle of Tehuti; trance', 'Scripture, prayer and the Spirit. Divination is forbidden {{Deut.18.10-11}}, though Israel cast lots {{Acts.1.26}}'] ] },
      { k: 'p', x: 'Both traditions value self-mastery, truthfulness, justice, meditation and discipline, and both see the human person as more than the body. The deepest difference is the source of transformation: cultivation of the divine within, or the grace of a personal God who is distinct from creation and gives himself in Christ.' },
      { k: 'bel', who: 'Christian', x: 'Christians can honour Egypt’s moral wisdom, as Proverbs does, while holding that God is not a principle within the self but the Creator who calls the self by name {{Isa.43.1}}, and that union with him is a gift, not an achievement.' } ] }
  ],
  questions: ['What can be known about ancient Egyptian religion from its own sources, and where do later systems add to it?', 'Compare the 42 declarations of Book of the Dead 125 with the Ten Commandments. What is similar, and what is different in form and spirit?', 'Why might a modern movement look to ancient Egypt for spiritual identity, and how should a historian and a believer each respond?'],
  sources: [
    { t: 'The Egyptian Book of the Dead, trans. E. A. Wallis Budge (1895)', url: L.sacred('egy/ebod/index.htm') },
    { t: 'Miriam Lichtheim, Ancient Egyptian Literature (1973–80)', url: L.wiki('Miriam_Lichtheim') },
    { t: 'Ancient Egyptian religion: overview', url: L.wiki('Ancient_Egyptian_religion') },
    { t: 'Ausar Auset Society', url: L.wiki('Ausar_Auset_Society') },
    { t: 'Kemetism: modern Egyptian religious movements', url: L.wiki('Kemetism') },
    { t: 'Mary Lefkowitz, Not Out of Africa (1996)', url: L.wiki('Not_Out_of_Africa') }
  ]
});
