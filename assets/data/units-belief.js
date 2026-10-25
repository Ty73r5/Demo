/* Part IV: Christian belief. */
window.UNITS = window.UNITS || [];

UNITS.push({
  id: 'creeds', part: 'Christian Belief', title: 'Creeds and doctrine',
  kicker: 'What Christians confess together, and where the great traditions differ.',
  intro: 'Christianity is unusual among religions in summarising its faith in creeds: short, public statements recited in worship. The Apostles’ and Nicene Creeds are shared by most Christians worldwide. Beyond them, Catholic, Orthodox and Protestant churches differ on authority, salvation, the sacraments and the Church. This unit gives the creeds in full and compares nine traditions in their own words, with links to their own documents.',
  sections: [
    { h: 'The Apostles’ Creed', blocks: [
      { k: 'quote', q: 'I believe in God the Father Almighty, Maker of heaven and earth: And in Jesus Christ his only Son our Lord, Who was conceived by the Holy Ghost, Born of the Virgin Mary, Suffered under Pontius Pilate, Was crucified, dead, and buried, He descended into hell; The third day he rose again from the dead, He ascended into heaven, And sitteth on the right hand of God the Father Almighty; From thence he shall come to judge the quick and the dead. I believe in the Holy Ghost; The holy Catholick Church; The Communion of Saints; The Forgiveness of sins; The Resurrection of the body, And the life everlasting. Amen.', cite: 'Book of Common Prayer (1662)', url: L.wiki('Apostles%27_Creed') },
      { k: 'record', x: 'It grew from the baptismal questions of the church at Rome (the “Old Roman Symbol,” 2nd–4th century) and reached this form by the 8th century. The legend that each apostle contributed a line is medieval. It is used mainly in Western churches.' } ] },
    { h: 'The Nicene Creed', blocks: [
      { k: 'text', x: 'The Greek of the Council of Constantinople (381) begins *Pisteuomen eis hena Theon, Patera pantokratora*: “We believe in one God, the Father Almighty.” Councils said “we”; liturgies came to say “I.”' },
      { k: 'quote', q: 'I believe in one God the Father Almighty, Maker of heaven and earth, And of all things visible and invisible: And in one Lord Jesus Christ, the only-begotten Son of God, Begotten of his Father before all worlds, God of God, Light of Light, Very God of very God, Begotten, not made, Being of one substance with the Father, By whom all things were made: Who for us men, and for our salvation came down from heaven, And was incarnate by the Holy Ghost of the Virgin Mary, And was made man, And was crucified also for us under Pontius Pilate. He suffered and was buried, And the third day he rose again according to the Scriptures, And ascended into heaven, And sitteth on the right hand of the Father. And he shall come again with glory to judge both the quick and the dead: Whose kingdom shall have no end. And I believe in the Holy Ghost, The Lord and giver of life, Who proceedeth from the Father and the Son, Who with the Father and the Son together is worshipped and glorified, Who spake by the Prophets. And I believe one Catholick and Apostolick Church. I acknowledge one Baptism for the remission of sins. And I look for the Resurrection of the dead, And the life of the world to come. Amen.', cite: 'Book of Common Prayer (1662)', url: L.wiki('Nicene_Creed') },
      { k: 'record', x: 'Nicaea (325) declared the Son *homoousios*, “of one substance,” with the Father, against Arius, who taught that the Son was the first and greatest creature. Constantinople (381) expanded the article on the Holy Spirit. The words “and the Son” (*Filioque*) were added in the West, first at Toledo (589), and sung in Rome from 1014. The Eastern churches do not accept the addition, and it was one cause of the East–West schism of 1054.' },
      { k: 'record', x: 'The Council of Chalcedon (451) defined Christ as one person “in two natures, without confusion, without change, without division, without separation.” The Coptic, Ethiopian, Armenian and Syriac (Oriental Orthodox) churches did not accept its wording and confess “one incarnate nature of God the Word.” Modern dialogues have concluded that the two sides largely mean the same faith in different terms.' } ] },
    { h: 'Three confessions of the one God', blocks: [
      { k: 'table', head: ['Tradition', 'Confession', 'Translation'], rows: [
        ['Jewish', 'Šəmaʿ Yiśrāʾēl, YHWH ʾĕlōhênû, YHWH ʾeḥād', '“Hear, O Israel: the LORD our God, the LORD is one” {{Deut.6.4}}'],
        ['Christian', 'Pisteuomen eis hena Theon …', '“We believe in one God, the Father Almighty … and in one Lord Jesus Christ … and in the Holy Spirit” (Nicene Creed)'],
        ['Muslim', 'Lā ilāha illā llāh, Muḥammadun rasūlu llāh', '“There is no god but God; Muhammad is the messenger of God” (the Shahada)'] ] } ] },
    { h: 'Nine traditions compared', widget: 'doctrine', blocks: [
      { k: 'p', x: 'Choose which traditions to compare. Each answer summarises the tradition’s own documents, linked at the head of its column. Within every large tradition there is variety; the table gives the official or majority position.' } ] },
    { h: 'The ecumenical councils', blocks: [
      { k: 'table', head: ['Council', 'Year', 'What it decided'], rows: [
        ['Nicaea I', '325', 'The Son is of one substance with the Father; a common date for Easter'],
        ['Constantinople I', '381', 'The divinity of the Holy Spirit; the expanded Nicene Creed'],
        ['Ephesus', '431', 'Mary is Theotokos, “God-bearer”; Nestorius condemned'],
        ['Chalcedon', '451', 'One person in two natures'],
        ['Constantinople II', '553', 'Clarified Chalcedon in a direction acceptable to its critics'],
        ['Constantinople III', '680–681', 'Christ has two wills, divine and human'],
        ['Nicaea II', '787', 'Icons may be venerated; worship belongs to God alone'] ] },
      { k: 'record', x: 'The Orthodox and Catholic churches accept all seven; Catholics recognise further councils, up to Vatican II (1962–65). Most Protestants accept the doctrinal decisions of the first four as faithful to Scripture. The Church of the East accepts the first two.' } ] }
  ],
  questions: ['Why might a religion based on a person produce creeds, while one based on a law produces legal codes?', 'The Filioque is a single word. Why did it matter so much to both East and West?', 'Use the comparison table to find one point on which Catholics and Baptists agree and one on which Lutherans and Catholics agree against most Protestants.'],
  sources: [
    { t: 'Jaroslav Pelikan and Valerie Hotchkiss, Creeds and Confessions of Faith in the Christian Tradition (2003)', url: L.wiki('Jaroslav_Pelikan') },
    { t: 'The Seven Ecumenical Councils (Schaff, NPNF II.14)', url: L.ccel('schaff/npnf214.html') },
    { t: 'Joint Declaration on the Doctrine of Justification (1999)', url: L.wiki('Joint_Declaration_on_the_Doctrine_of_Justification') }
  ]
});

UNITS.push({
  id: 'orthodoxy', part: 'Christian Belief', title: 'Heresy and orthodoxy',
  kicker: 'The two great questions of the early Church, and the answers it rejected.',
  intro: '“Heresy” comes from the Greek *hairesis*, “choice” or “school of thought.” In the first five centuries Christians argued over two questions: who is Christ, and how can God be one and three? The answers they rejected help explain the ones they kept. Plotted on a line, the rejected views sit on either side of the positions the councils defined.',
  widget: 'spectra',
  sections: [
    { h: 'Why the arguments mattered', blocks: [
      { k: 'bel', who: 'Christian', x: 'If Christ were not truly God, he could not unite humanity to God; if he were not truly human, he could not redeem human nature. Gregory of Nazianzus: “that which he has not assumed he has not healed” ([Letter 101](' + L.na('3103a') + ')).' },
      { k: 'sch', x: 'Many of the rejected positions resolve a paradox by dropping one of its terms: Christ only human or only divine, God only one or only three. Historians also note the politics: emperors convened councils, and exile and violence were used on several sides.' } ] },
    { h: 'Other early disputes', widget: 'heresies', blocks: [] }
  ],
  questions: ['Choose one rejected view. What was attractive about it, and what did the Church think it lost?', 'Is there a modern view of Jesus that resembles one of these ancient positions?'],
  sources: [
    { t: 'Basil the Great, On the Holy Spirit (375)', url: L.na('3203') },
    { t: 'Tertullian, Against Praxeas (c. 213)', url: L.na('0317') },
    { t: 'Irenaeus, Against Heresies (c. 180)', url: L.na('0103') },
    { t: 'Rowan Williams, Arius: Heresy and Tradition (2nd ed., 2001)', url: L.wiki('Arianism') }
  ]
});

UNITS.push({
  id: 'trinity', part: 'Christian Belief', title: 'The Trinity and the Trivium',
  kicker: 'Grammar, logic and rhetoric as an image of the Father, the Word and the Spirit.',
  intro: 'The Trivium (grammar, logic, rhetoric) was the foundation of education from late antiquity to the early modern period. Christian thinkers repeatedly saw in human speech and thought an image of the triune God: a speaker, the word spoken, and the breath that carries it. This unit sets out the analogy, the sources behind it, and the limits that keep it from becoming error.',
  widget: 'triune',
  sections: [
    { h: 'Where the analogy comes from', blocks: [
      { k: 'text', x: 'The Psalms already hold speaker, word and breath together: “By the word of the LORD were the heavens made; and all the host of them by the breath (*rûaḥ*) of his mouth” {{Ps.33.6}}. Proverbs names three gifts as a set: wisdom (*ḥoḵmāh*), understanding (*təḇûnāh*) and knowledge (*daʿat*) build and fill a house {{Prov.24.3-4}} and fill the craftsman Bezalel {{Exod.31.3}}.' },
      { k: 'text', x: 'Theophilus of Antioch (c. 180) is the first writer known to use the word *Trias* (“Triad”) of God: “God, his Word, and his Wisdom” ([To Autolycus 2.15](' + L.na('02042') + ')). Irenaeus calls the Son and the Spirit, the Word and Wisdom, God’s “two hands” ([Against Heresies 4.20.1](' + L.na('0104') + ')).' },
      { k: 'text', x: 'Augustine finds the image of the Trinity in the human mind: memory, understanding and will, one mind in three acts ([On the Trinity 10.11–12](' + L.na('130110') + ')). He also adopts Cicero’s three tasks of the speaker, to teach, to delight and to move ([On Christian Doctrine 4.12](' + L.na('12024') + ')).' },
      { k: 'text', x: 'Bonaventure (c. 1250s) treats grammar, logic and rhetoric as the arts of speech (to express, to teach, to move) and sees in the mind’s inner word “clothed in voice” an image of the eternal Word made flesh ([On the Reduction of the Arts to Theology](' + L.wiki('Bonaventure') + ')). Hugh of St Victor’s Didascalicon (1120s) presents the liberal arts as a way of restoring the image of God in the soul.' },
      { k: 'record', x: 'The seven liberal arts (the Trivium of grammar, logic and rhetoric and the Quadrivium of arithmetic, geometry, music and astronomy) were fixed as a curriculum by Martianus Capella (5th century) and Boethius, who coined the word *quadrivium*. Dorothy L. Sayers’s Oxford lecture “The Lost Tools of Learning” (1947) revived the Trivium and inspired the modern classical-school movement.' } ] },
    { h: 'How the three belong together', blocks: [
      { k: 'p', x: 'Each art needs the others. Logic needs grammar to have terms; rhetoric without logic becomes manipulation; grammar is learned through speech that moves. Christian theology describes the persons of the Trinity as dwelling in one another (*perichōrēsis*): “I am in the Father, and the Father in me” {{John.14.11}}.' },
      { k: 'p', x: 'Order matters too. Basil the Great describes grace as coming from the Father, through the Son, in the Spirit ([On the Holy Spirit](' + L.na('3203') + ')). Learning runs the same way: from what is given, through understanding, into wise speech and action.' } ] },
    { h: 'Where the analogy breaks', blocks: [
      { k: 'bel', who: 'Christian', x: 'Aquinas permits “appropriation”: attributing power to the Father, wisdom to the Son and goodness to the Spirit, while holding that each attribute belongs to all three ([Summa I, q.39, a.7–8](' + L.summa('1039') + ')). The Trivium analogy works in the same way and is not doctrine.' },
      { k: 'bel', who: 'Christian', x: 'Pressed too far it becomes modalism, the teaching that God is one person playing three roles, rejected in the 3rd century. The Father also reasons, the Son also speaks, and the Spirit also knows.' },
      { k: 'sch', x: 'The tradition is divided on Wisdom: Paul calls Christ “the wisdom of God” {{1Cor.1.24}}, while Theophilus and Irenaeus identify Wisdom with the Spirit. Linking rhetoric to wisdom follows the second line and modern classical-education usage.' },
      { k: 'bel', who: 'Jewish and Muslim', x: 'Both reject the Trinity as compromising the oneness of God {{Deut.6.4}} {{Q:4:171}}.' },
      { k: 'bel', who: 'Christian', x: 'Christians answer that the Trinity is a description of the one God, not a plurality of gods. The comparison unit sets out the arguments.' } ] }
  ],
  questions: ['Which lens (Psalm 33, Proverbs, Augustine, Genesis) makes the analogy clearest to you?', 'Why do Christian theologians insist that analogies for the Trinity always fall short?', 'How might studying grammar, logic and rhetoric help a person read Scripture well?'],
  sources: [
    { t: 'Augustine, On the Trinity', url: L.na('1301') },
    { t: 'Theophilus of Antioch, To Autolycus', url: L.na('02042') },
    { t: 'Dorothy L. Sayers, “The Lost Tools of Learning” (1947)', url: L.wiki('Dorothy_L._Sayers') },
    { t: 'The Trivium: overview', url: L.wiki('Trivium') }
  ]
});

UNITS.push({
  id: 'reading', part: 'Christian Belief', title: 'Reading Scripture',
  kicker: 'Four senses, types and shadows, and the same texts read by synagogue and Church.',
  intro: 'Jews and Christians share most of a Bible but read it differently. Both traditions developed sophisticated methods of interpretation long before modern scholarship. This unit sets out the classic Christian “four senses” beside the Jewish PaRDeS, the rules readers have used, modern critical methods, the typology by which Christians read the Old Testament as pointing to Christ, and the messianic texts read the Jewish and the Christian way.',
  sections: [
    { h: 'The four senses', widget: 'senses', blocks: [
      { k: 'text', x: 'John Cassian (Conferences 14.8, c. 420) explains the four senses with Jerusalem ([read](' + L.na('350814') + ')). Dante (Letter to Can Grande) uses the Exodus, on {{Ps.114.1}}. A medieval couplet sums them up: *Littera gesta docet, quid credas allegoria, moralis quid agas, quo tendas anagogia*: “the letter teaches what happened; allegory, what to believe; the moral sense, what to do; anagogy, where to aim.”' },
      { k: 'record', x: 'PaRDeS, an acronym of Peshat, Remez, Derash and Sod that spells “orchard,” is attested from 13th-century Spain. It is a close Jewish parallel to the four senses, and the two may have influenced each other.' },
      { k: 'p', x: 'Thomas Aquinas insisted that all the spiritual senses rest on the literal one ([Summa I, q.1, a.10](' + L.summa('1001') + ')). In Trivium terms, grammar secures the literal sense, logic draws out its teaching, and rhetoric moves the reader to live and hope.' } ] },
    { h: 'Rules for reading', blocks: [
      { k: 'list', items: [
        `**The rule of love** (Augustine): whoever thinks they understand Scripture but does not build up love of God and neighbour has not yet understood it ([On Christian Doctrine 1.36.40](${L.na('12021')})).`,
        '**The rule of faith** (Irenaeus, Tertullian): read each part in harmony with the whole faith received.',
        `**Vincent of Lérins** (434): hold “what has been believed everywhere, always, and by all” ([Commonitory 2](${L.na('3506')})).`,
        '**Scripture interprets Scripture** (Luther): clearer passages explain obscure ones.',
        `**Hillel’s seven rules** (*middot*), among them “light and heavy” (*qal va-ḥomer*), the argument from the lesser to the greater. Jesus argues in this way: “how much more shall your Father” {{Matt.7.11}}. [Rabbinic rules of interpretation](${L.wiki('Talmudical_hermeneutics')})` ] },
      { k: 'sch', x: 'Modern methods ask different questions: historical-critical study (who wrote this, when, using what sources), form criticism (what oral settings lie behind a passage), canonical reading (what it means within the whole Bible, after Brevard Childs), literary study (how the story works, after Robert Alter’s The Art of Biblical Narrative, 1981), and reader-centred approaches. Each recovers something the others miss.' } ] },
    { h: 'Types and shadows', widget: 'typology', blocks: [
      { k: 'bel', who: 'Christian', x: 'The Old Testament contains persons, events and institutions that prefigure Christ: “all these things happened unto them for ensamples” {{1Cor.10.11}}. Many such links are made in the New Testament itself; others were drawn by the Church Fathers.' },
      { k: 'bel', who: 'Jewish', x: 'The same stories have their own meaning in Israel’s covenant with God, and are not read as pointing to Jesus. Jewish tradition has its own typology, for example the Exodus as a pattern for the final redemption.' } ] },
    { h: 'When the New Testament quotes the Greek', widget: 'ntuse', blocks: [
      { k: 'sch', x: 'Most Old Testament quotations in the New Testament are closer to the Septuagint than to the later Masoretic Hebrew. The Dead Sea Scrolls show that several Hebrew text forms circulated in the 1st century, some matching the Greek, so these were real Bibles of the apostles’ day.' } ] },
    { h: 'Messianic texts, read two ways', widget: 'messianic', blocks: [] }
  ],
  questions: ['Apply the four senses to a passage you know well. Which sense is easiest for you, and which hardest?', 'Choose one messianic text and state the Jewish and Christian readings as their best defenders would.', 'Is typology a discovery of real patterns or a way of reading imposed afterwards? What would count as evidence either way?'],
  sources: [
    { t: 'John Cassian, Conferences 14', url: L.na('350814') },
    { t: 'Augustine, On Christian Doctrine', url: L.na('1202') },
    { t: 'Henri de Lubac, Medieval Exegesis (1959–64)', url: L.wiki('Henri_de_Lubac') },
    { t: 'Sefaria: the Jewish library online', url: 'https://www.sefaria.org/' },
    { t: 'Robert Alter, The Art of Biblical Narrative (1981)', url: L.wiki('Robert_Alter') }
  ]
});
