/* Part IV: Christian belief. */
window.UNITS = window.UNITS || [];

UNITS.push({
  id: 'creeds', part: 'Christian Belief', title: 'Creeds and doctrine',
  kicker: 'What Christians confess together, and where the great traditions differ.',
  learn: {
    goal: 'Know what nearly all Christians confess together, and the main points on which Catholic, Orthodox and Protestant churches differ.',
    take: 'The Nicene Creed is shared by most Christians worldwide: one God, Father, Son and Holy Spirit; the incarnation, death and resurrection of Christ. The churches divide chiefly over authority (Scripture, tradition, the papacy), salvation (faith, works, grace), the sacraments and the Church.',
    example: 'Catholic, Orthodox and Protestant Christians all recite “I believe in one God, the Father Almighty”; they differ on the single Latin word *Filioque*, “and the Son,” which Western churches added to the creed.',
    check: { q: 'Is the Filioque a disagreement about whether God is a Trinity?',
      a: 'No. Both East and West confess the Trinity. The disagreement is about how the Spirit proceeds (from the Father, or from the Father and the Son) and about whether the Western church had authority to add words to a creed agreed by an ecumenical council. Distinguishing a shared doctrine from a disputed detail is the point of this unit.' },
    next: [['reading', 'route step 6: how Christians and Jews interpret the same texts'], ['orthodoxy', 'the early disputes the creeds answered']]
  },
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
    { t: 'Jaroslav Pelikan and Valerie Hotchkiss, Creeds and Confessions of Faith in the Christian Tradition (2003)' },
    { t: 'Jaroslav Pelikan: background on the first editor', url: L.wiki('Jaroslav_Pelikan') },
    { t: 'The Seven Ecumenical Councils (Schaff, NPNF II.14)', url: L.ccel('schaff/npnf214.html') },
    { t: 'Joint Declaration on the Doctrine of Justification (1999)' },
    { t: 'Joint Declaration on the Doctrine of Justification: an overview', url: L.wiki('Joint_Declaration_on_the_Doctrine_of_Justification') }
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
    { t: 'Rowan Williams, Arius: Heresy and Tradition (2nd ed., 2001)' },
    { t: 'Arianism: an overview', url: L.wiki('Arianism') }
  ]
});

UNITS.push({
  id: 'trinity', part: 'Christian Belief', title: 'The Trinity and the Trivium',
  kicker: 'An analogy between the three arts of language and the Father, the Word and the Spirit: where it comes from, what is the atlas’s own, and where it breaks.',
  intro: 'The Trivium (grammar, logic, rhetoric) was the foundation of education from late antiquity to the early modern period. Christian thinkers repeatedly found in human speech and thought an image of the triune God: a speaker, the word spoken, and the breath that carries it; or memory, understanding and will. This unit offers one analogy for reflection, pairing the three arts with the three persons. It separates what earlier writers actually said from the atlas’s own synthesis, and it sets out the limits that keep any such analogy from becoming error.',
  widget: 'triune',
  sections: [
    { h: 'Four different things', blocks: [
      { k: 'list', items: [
        '**Doctrine:** what the churches confess. One God in three persons, Father, Son and Holy Spirit, “of one substance,” none before or after another in being (the Nicene Creed; the Athanasian Creed).',
        '**Theological appropriation:** attributing to one person a quality that belongs to all three, to help us know the persons: power to the Father, wisdom to the Son, goodness to the Spirit [[aquinasApprop]].',
        '**Analogy:** an image from creation that helps the mind think about God while falling short of him, such as Augustine’s memory, understanding and will [[augTrin10]].',
        '**Historical attribution:** the claim that a particular writer or tradition taught a particular analogy. This is a matter of evidence and needs an exact source.' ] },
      { k: 'p', x: 'The pairing of the Father with grammar, the Son with logic and the Spirit with rhetoric is an analogy. It is not doctrine and not an appropriation the churches teach, and the atlas has found no earlier writer who sets it out in this form, so it is presented as the atlas’s own synthesis [[trivMap]].', ev: 'ana' } ] },
    { h: 'What earlier writers actually said', blocks: [
      { k: 'text', x: 'The Psalms already hold speaker, word and breath together: “By the word of the LORD were the heavens made; and all the host of them by the breath (*rûaḥ*) of his mouth” {{Ps.33.6}}. Proverbs names three gifts as a set: wisdom (*ḥoḵmāh*), understanding (*təḇûnāh*) and knowledge (*daʿat*), by which God founded the world {{Prov.3.19-20}} and by which a house is built and filled {{Prov.24.3-4}}; the same three fill the craftsman Bezalel {{Exod.31.3}}. Neither text speaks of persons in God.' },
      { k: 'text', x: 'Theophilus of Antioch (c. 180) is the first writer known to use the word *Trias* (“Triad”) of God: “God, his Word, and his Wisdom” [[theophilus]]. Irenaeus calls the Word and Wisdom, the Son and the Spirit, the “hands” by which God made all things [[irenaeus420]]. Both identify Wisdom with the Spirit; most later writers, following Paul {{1Cor.1.24}}, identify it with the Son.' },
      { k: 'text', x: 'Augustine finds an image of the Trinity in the mind: memory, understanding and will, three acts and one mind [[augTrin10]]. Separately, he adopts Cicero’s three tasks of the speaker, to teach, to delight and to move [[augDoctr4]]. He does not join the two.' },
      { k: 'text', x: 'Bonaventure (c. 1250s) divides the arts of speech into grammar, logic and rhetoric, which express, teach and move, and finds in human speech, where an inner word is conceived and clothed in voice, an image of the eternal Word and of the incarnation [[bonaventure]]. He relates speech as a whole to the Word; he does not assign one art to each person.' },
      { k: 'record', x: 'The seven liberal arts (the Trivium of grammar, logic and rhetoric and the Quadrivium of arithmetic, geometry, music and astronomy) were fixed as a curriculum by Martianus Capella (5th century) and Boethius, who coined the word *quadrivium*. In the 20th century Dorothy L. Sayers offered a different Trinitarian analogy, from human creative work (Idea, Energy, Power) [[sayersMaker]], and separately revived the Trivium in her lecture “The Lost Tools of Learning” (1947).' } ] },
    { h: 'The analogy offered here', blocks: [
      { k: 'p', x: 'Grammar receives what is given: names, forms, the structure of a language. Logic orders and judges it. Rhetoric carries it to others so that it moves them. The analogy pairs these with the Father as source, the Son as the Word and Reason through whom all things were made {{John.1.3}}, and the Spirit as the breath that carries the Word and moves hearts {{Acts.2.37}}. The Hebrew pairings in the diagram (knowledge, understanding, wisdom) borrow the triad of Proverbs; linking wisdom with the Spirit follows Theophilus and Irenaeus, not the majority tradition.', ev: 'ana' },
      { k: 'p', x: 'Each art needs the others: logic needs grammar to have terms, and rhetoric without logic becomes manipulation. Christian theology describes the persons as dwelling in one another (*perichōrēsis*): “I am in the Father, and the Father in me” {{John.14.11}}. And order matters: Basil the Great describes grace as coming from the Father, through the Son, in the Spirit ([On the Holy Spirit](' + L.na('3203') + ')). Learning can be pictured the same way: from what is given, through understanding, into wise speech and action.', ev: 'ana' } ] },
    { h: 'Where the analogy breaks', blocks: [
      { k: 'bel', who: 'Christian', x: 'The divine persons are not three faculties or functions of one mind, and not three parts that together make up God. Each person is wholly God. The Father also reasons, the Son also speaks, and the Spirit also knows; each of the three arts, if it is applied to God at all, belongs to all three persons, as appropriated attributes do [[aquinasApprop]].' },
      { k: 'bel', who: 'Christian', x: 'Pressed one way, the analogy becomes **modalism**: one God playing three roles in turn, as one person might do grammar, then logic, then rhetoric. The early Church rejected this (Sabellius, 3rd century). Pressed another way, it becomes **partialism**: each person a third of God, as each art is a third of the Trivium. Classical doctrine rejects both.' },
      { k: 'sch', x: 'The tradition is divided on Wisdom: Paul calls Christ “the wisdom of God” {{1Cor.1.24}}, while Theophilus and Irenaeus identify Wisdom with the Spirit. The diagram follows the minority line.', ev: 'deb' },
      { k: 'bel', who: 'Jewish and Muslim', x: 'Both traditions, in their mainstream forms, reject the Trinity as compromising the oneness of God {{Deut.6.4}} {{Q:4:171}}.' },
      { k: 'bel', who: 'Christian', x: 'Christians answer that the Trinity is a description of the one God, not a plurality of gods. The comparison unit sets out the arguments.' } ] }
  ],
  questions: ['Which earlier image (Psalm 33, Proverbs, Augustine, Bonaventure) makes the idea clearest to you, and why?', 'Why do Christian theologians insist that analogies for the Trinity always fall short? Which way does this one fail first, toward modalism or toward partialism?', 'How might studying grammar, logic and rhetoric help a person read Scripture well, apart from any analogy?'],
  sources: [
    { t: 'Augustine, On the Trinity', url: L.na('1301') },
    { t: 'Theophilus of Antioch, To Autolycus', url: L.na('02042') },
    { t: 'Bonaventure, On the Reduction of the Arts to Theology, trans. Zachary Hayes (Works of St. Bonaventure 1; St. Bonaventure, NY: Franciscan Institute, 1996)' },
    { t: 'Dorothy L. Sayers, The Mind of the Maker (London: Methuen, 1941)' },
    { t: 'The Trivium: overview', url: L.wiki('Trivium') }
  ]
});

UNITS.push({
  id: 'reading', part: 'Christian Belief', title: 'Reading Scripture',
  kicker: 'Four senses, types and shadows, and the same texts read by synagogue and Church.',
  learn: {
    goal: 'Recognise the main ways Scripture has been interpreted, ancient and modern, and what each is good for.',
    take: 'Readers have always asked more than one question of a text: what it said to its first hearers, what it teaches, how to live, and what to hope for. Modern critical methods add questions about authors, sources and settings. Good interpretation keeps the literal sense as its anchor.',
    example: 'Jerusalem, in John Cassian’s classic example, is a city (literal), the Church (allegorical), the soul (moral) and the heavenly city (anagogical).',
    check: { q: 'A preacher says Rahab’s scarlet cord {{Josh.2.18}} is a figure of Christ’s blood. Which kind of reading is that, and what would a historical-critical scholar ask instead?',
      a: 'It is a typological or allegorical reading, found already in 1 Clement (c. 96). A historical-critical scholar would ask what the cord meant in the story and to its first audience: a sign that marked Rahab’s house for protection. The two questions are different, and an answer to one does not settle the other.' },
    next: [['arguments', 'route step 7: the arguments for and against God'], ['original', 'read a passage closely in Hebrew or Greek']]
  },
  intro: 'Jews and Christians share most of a Bible but read it differently. Both traditions developed sophisticated methods of interpretation long before modern scholarship. This unit sets out the classic Christian “four senses” beside the Jewish PaRDeS, the rules readers have used, modern critical methods, the typology by which Christians read the Old Testament as pointing to Christ, and the messianic texts read the Jewish and the Christian way.',
  sections: [
    { h: 'The four senses', widget: 'senses', blocks: [
      { k: 'text', x: 'John Cassian (Conferences 14.8, c. 420) explains the four senses with Jerusalem ([read](' + L.na('350814') + ')). Dante (Letter to Can Grande) uses the Exodus, on {{Ps.114.1}}. A medieval couplet sums them up: *Littera gesta docet, quid credas allegoria, moralis quid agas, quo tendas anagogia*: “the letter teaches what happened; allegory, what to believe; the moral sense, what to do; anagogy, where to aim.”' },
      { k: 'record', x: 'PaRDeS, an acronym of Peshat, Remez, Derash and Sod that spells “orchard,” is attested from 13th-century Spain. It is a close Jewish parallel to the four senses, and the two may have influenced each other.' },
      { k: 'p', x: 'Thomas Aquinas insisted that all the spiritual senses rest on the literal one ([Summa I, q.1, a.10](' + L.summa('1001') + ')). As a modern analogy (the atlas’s, not Aquinas’s): grammar secures the literal sense, logic draws out its teaching, and rhetoric moves the reader to live and hope.', ev: 'ana' } ] },
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
    { t: 'Henri de Lubac, Medieval Exegesis (1959–64)' },
    { t: 'Henri de Lubac: background on the author', url: L.wiki('Henri_de_Lubac') },
    { t: 'Sefaria: the Jewish library online', url: 'https://www.sefaria.org/' },
    { t: 'Robert Alter, The Art of Biblical Narrative (1981)' },
    { t: 'Robert Alter: background on the author', url: L.wiki('Robert_Alter') }
  ]
});
