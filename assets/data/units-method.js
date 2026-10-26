/* Orientation: the editorial method, the corrections history, and the start-here route. */
window.UNITS = window.UNITS || [];

/* A suggested first route through the essentials. Each unit on it has a `learn` box (goal, essential point, example,
   a check of understanding and where to go next). */
window.START_ROUTE = [
  { id: 'library', label: 'Bible genres and context' },
  { id: 'transmission', label: 'Transmission and canon' },
  { id: 'original', label: 'Reading a passage' },
  { id: 'jesus', label: 'Jesus and the earliest sources' },
  { id: 'creeds', label: 'Central beliefs and disagreements' },
  { id: 'reading', label: 'Interpretation' },
  { id: 'arguments', label: 'Arguments' },
  { id: 'virtues', label: 'Practical reflection' }
];

UNITS.push({
  id: 'method', part: 'Orientation', title: 'Editorial method and corrections',
  kicker: 'How statements are labelled, how sources are chosen and checked, what the text pipeline does and does not cover, and what has been corrected.',
  intro: 'This unit says how the atlas was made, so that a reader can judge how far to trust it. It describes the labels used for statements and sources, says exactly what has and has not been checked, lists the corrections made so far, and names the work that remains. Nothing here claims more verification than was done.',
  sections: [
    { h: 'What the atlas is', blocks: [
      { k: 'p', x: 'The atlas was compiled by Claude, an AI model made by Anthropic, as study material, and revised in response to an independent review. No named, qualified human expert has reviewed it; where it says “checked,” it means the specific check described below. It is organised around Christianity: other traditions appear as neighbours, described in their own terms as far as possible.' },
      { k: 'p', x: 'Fairness here means accurate representation and evidence in proportion to the claim. It does not mean equal confidence in incompatible claims: where the evidence is strong (that Jesus was crucified; that there was no recent worldwide flood) the atlas says so, whichever tradition it favours.' } ] },
    { h: 'Two separate labels: kind of statement and evidential standing', blocks: [
      { k: 'table', head: ['Kind of statement', 'Means', 'Checked by'], rows: [
        ['The text', 'What a text says, including creeds and decrees', 'Reading the text in a named edition'],
        ['Record', 'Dated events, manuscripts, inscriptions, finds, measurements', 'The artifact, its publication and its dating'],
        ['Scholarship', 'What researchers conclude, with the range of views', 'The scholarly literature'],
        ['Belief (named tradition)', 'What a community holds', 'That tradition’s own documents; not an empirical test'],
        ['Open question', 'What is not settled', '—'] ] },
      { k: 'table', head: ['Evidential standing', 'Used when'], rows: [
        ['well established', 'Specialists of differing beliefs agree and the evidence is direct'],
        ['predominant scholarly view', 'Most specialists hold it; a minority dissents'],
        ['actively debated', 'Specialists divide without a clear majority'],
        ['minority interpretation', 'Defended by some specialists, not most'],
        ['insufficient evidence', 'The evidence needed to decide is lacking'],
        ['editorial analogy', 'The atlas’s own comparison or synthesis, offered for reflection'] ] },
      { k: 'p', x: 'The standing appears in words beside the margin label, never as a colour alone, and only where it matters. There are no numerical confidence scores, and the atlas avoids claiming a consensus it cannot show.' } ] },
    { h: 'Kinds of source', blocks: [
      { k: 'table', head: ['Role', 'What it can show'], rows: [
        ['Primary source', 'That someone wrote, made or believed something. It does not by itself show that what it reports happened, and it often needs scholarship to read correctly.'],
        ['Scholarly analysis', 'What a researcher concludes, and why.'],
        ['Confessional document', 'What a church or community officially holds.'],
        ['Empirical research', 'What a study found under its design. Observational studies show associations; only controlled designs test causes. A retracted study is marked as retracted wherever it is cited.'],
        ['Reference overview', 'Orientation (an encyclopedia, museum record or catalogue). Wikipedia is used this way and every Wikipedia link says so.'],
        ['Editorial explanation', 'The atlas’s own account or analogy.'] ] },
      { k: 'p', x: 'Consequential claims carry a compact marker such as [[watts2006]] that opens the source record: author or institution, title, date, exact locator where one was checked, link, role, what it supports, its limits, how it was checked and when, and its retraction or correction status. Lists at the end of each unit separate “sources cited” from “further reading.” Page numbers are given only where they were checked.' } ] },
    { h: 'How sources were checked in this revision', blocks: [
      { k: 'list', items: [
        '**Read for this revision:** the editor read the source itself.',
        '**Checked through search results:** the editor checked the claim against search-engine results that quote or summarise the source (for example, the text of a retraction notice or a museum record), but could not open the page itself. The editing environment’s network policy blocked direct access to most sites, including nature.com, PubMed, the British Museum and Wikipedia. This is weaker than reading the source, and each record says which applies.',
        '**Given from knowledge of the published work:** stated from the editor’s knowledge of a standard text (for example Augustine’s On the Trinity, book 10), not re-checked in this revision.',
        '**The atlas’s own synthesis:** nothing external to check.' ] },
      { k: 'p', x: 'Links are tested automatically on GitHub for whether they resolve (tools/check_links.js). A working link does not show that the page supports the claim.' } ] },
    { h: 'What is generated and what is hand-entered', blocks: [
      { k: 'table', head: ['Material', 'How it gets into the atlas', 'What has been verified'], rows: [
        ['Bible text (ten English translations, Latin, Chinese for John 1:1)', 'Generated by tools/build_texts.py from scrollmapper/bible_databases', 'Regenerated from source on 26 October 2026; the regenerated data matched the committed data exactly before new passages were added'],
        ['Hebrew and Greek words, glosses, Strong’s numbers, lexicon entries, counts', 'Generated from STEP Bible’s TAHOT, TAGNT, TBESH and TBESG', 'As above. Counts follow STEP’s tagging and have not been compared with other concordances'],
        ['Qur’an (Arabic and Pickthall)', 'Generated from fawazahmed0/quran-api', 'As above'],
        ['JPS 1917 divine names', 'The digital text’s “G-d” and “HaShem” are restored to the 1917 printing’s “God” and “the LORD” by the build script', 'An editorial normalisation, disclosed in each passage dialog'],
        ['Creeds (Book of Common Prayer 1662)', 'Entered by hand', 'Not re-checked against a printed edition in this revision'],
        ['Other quotations: Church Fathers, rabbis, philosophers, modern writers, inscriptions', 'Entered by hand by the AI compiler, with a citation', 'Listed in docs/QUOTATIONS.md (generated by tools/quote_register.js) with whether each has a locator. Except where a source record says otherwise, they have not been re-checked against an edition in this revision; treat them as attributed quotations to be verified'],
        ['Research findings', 'Summarised by hand with a DOI link', 'Summaries not re-checked in this revision except where a source record says so'] ] },
      { k: 'p', x: 'A notice that “AI can make mistakes” is no substitute for checking. Where a quotation could not be verified and a paraphrase serves, the atlas should paraphrase and attribute; converting the remaining hand-entered quotations is listed below as unfinished work.' } ] },
    { h: 'Corrections', widget: 'corrections', blocks: [
      { k: 'p', x: 'Each correction gives what the atlas said, what it says now, why, and the sources consulted. The full register, with priority and verification status for each item, is in the repository at docs/AUDIT_REGISTER.md.' } ] },
    { h: 'What has not been done', blocks: [
      { k: 'list', items: [
        'Most hand-entered quotations have not been re-checked against printed editions (see the quotation register).',
        'Many sources were checked only through search results, because the editing environment could not open the pages.',
        'The review was a substantial spot-check of the content, not a line-by-line audit of every unit. The map, the people and movements units, the great stories and the deep-time data were not re-audited in this revision beyond the specific items listed in the corrections.',
        'No qualified human specialist has reviewed the corrections.' ] },
      { k: 'p', x: 'To report an error, open an issue in the [project repository](https://github.com/Ty73r5/Demo/issues) with the unit, the claim and the source that contradicts it.' } ] }
  ],
  questions: ['Choose one source marker in the atlas and open it. Does the source support the claim as stated, or something narrower?', 'Why is “checked through search results” weaker than “read for this revision,” and when might it still be enough?'],
  sources: [
    { t: 'The atlas’s repository: content, build scripts and checks', url: 'https://github.com/Ty73r5/Demo' }
  ]
});
