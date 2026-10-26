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
