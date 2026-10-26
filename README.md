# Logos Atlas

A study atlas of Christianity in history, Scripture and thought. It covers what the Bible says and how it reached us, the Hebrew and Greek word by word, what Christians believe and the arguments for and against, how the faith compares with Judaism, Islam and the ancient world, the movements and critics around it, and the virtues as a way of life.

Christianity is its organising centre; other traditions appear as its neighbours, described as accurately as the atlas can in their own terms. It aims to be fair to Christians, who should recognise their faith in it, and useful to people of other faiths or none. The atlas was compiled by Claude, an AI model made by Anthropic, as study material. **No named human expert has reviewed it.** It does not speak for any church.

## Try it

- **Online, no install:** https://raw.githack.com/Ty73r5/Demo/main/index.html (follows the `main` branch; raw.githack caches files, so a change can take a while to appear).
- **Download:** the [latest release](https://github.com/Ty73r5/Demo/releases/latest) has `logos-atlas.html`, a single file that opens in any browser without a network connection, and `logos-atlas-site.zip` with the full site. A release is made by hand (see below), so the latest release can be older than `main`.
- **Your own GitHub Pages address (optional):** Settings → Pages → *Deploy from a branch* → `main`, `/ (root)`. The site would then appear at https://ty73r5.github.io/Demo/. Pages is not enabled by this repository.

**Start here** gives a suggested route through the essentials in eight steps. **Guided tour** is a 26-step spoken walk-through (about eight minutes at normal speed); without a browser voice it shows each step as text and waits for you. **Aa** sets text size, line spacing, typeface, line length and motion.

### What needs a network connection

The single-file edition works offline. These need a connection: the Google Fonts (the page falls back to system fonts without them), every external link, and some speech voices, which come from the browser or operating system. Settings and “visited” marks are kept in the browser’s local storage on that device only.

## Contents

Thirty-three study units in seven parts. Parts V and VI are marked as context: they place Christianity among its neighbours and are best read after the essentials.

| Part | Units |
|---|---|
| I. Orientation | How to use this atlas · Editorial method and corrections |
| II. The Book | The Bible as a library (books and canons by tradition) · How the text reached us (lines of transmission; one passage across the English translations, with changes highlighted) · The Dead Sea Scrolls · Reading the original (32 passages word by word) · Key words (66 Hebrew and Greek words, with cautions on word study) · The great stories (155 narratives) |
| III. History | The Atlas (97 places, c. 2500 BC to today) · Jesus of Nazareth · Days, dates and deep time |
| IV. Christian Belief | Creeds and doctrine (nine churches on 14 questions) · Heresy and orthodoxy · The Trinity and the Trivium (an editorial analogy, with what earlier writers actually said) · Reading Scripture · Arguments about God (six for, five against) · Miracles and the laws of nature (30 reported events) · Hell, judgement and the afterlife |
| V. Comparisons (context) | Judaism, Christianity and Islam (17 topics) · Ancient traditions · The Twelve, Judas and older stories · Kemet and the Metu Neter |
| VI. People & Movements (context) | The Great Conversation · Robert G. Ingersoll · Critics of Christianity · The Knights Templar · Freemasonry · Rosicrucians, Hermeticism and Christian Kabbalah |
| VII. Living It | The ancient mind and the modern · Contributions and harms · The inner life · Virtues and the good life · Sources and study tools |

The eight units on the start-here route each open with a goal, the essential point and an example, and close with a question that checks understanding (not agreement), an explained answer and where to go next.

## How statements and sources are labelled

A label in the margin says what kind of statement a passage makes: **The text** (what a text says), **Record** (events, manuscripts, inscriptions, measurements), **Scholarship** (what researchers conclude), **Belief** (what a named tradition holds) or **Open question**. Where it matters, a second phrase gives the evidential standing: *well established*, *predominant scholarly view*, *actively debated*, *minority interpretation*, *insufficient evidence* or *editorial analogy*. There are no numerical confidence scores.

Consequential claims carry a small marker that opens a source record (`assets/data/sources.js`): author, title, date, exact locator where one was checked, link, the source’s role (primary, scholarly, confessional, empirical, reference or editorial), what it supports, its limits, how the atlas checked it and when, and whether it has been retracted. Every link says where it goes; Wikipedia links are labelled as Wikipedia overviews, never as the work cited. The **Editorial method and corrections** unit explains all of this and lists every correction.

## Sources and data

Bible, Qur’an and lexicon text are generated from source files by `tools/build_texts.py`, not typed by hand. Other quotations (creeds, Church Fathers, philosophers, modern writers) were entered by hand; `docs/QUOTATIONS.md` lists them and whether a locator follows each. Most have not been re-checked against a printed edition.

- **Hebrew and Greek:** STEP Bible’s TAHOT and TAGNT (Leningrad Codex; Nestle–Aland with Textus Receptus words marked) and the TBESH/TBESG lexicons, Tyndale House, Cambridge, [CC BY 4.0](https://github.com/STEPBible/STEPBible-Data). Counts are of the main Strong’s number of each word in the Leningrad Codex or the Nestle–Aland text as STEP tags them.
- **Translations:** ten public-domain English translations (Wycliffe, Tyndale, Geneva 1599, KJV with Apocrypha, Douay–Rheims, Young’s Literal, ASV, JPS 1917, Catholic Public Domain Version, Berean Standard Bible), the Clementine Vulgate, and the Chinese Union Version for John 1:1, from [scrollmapper/bible_databases](https://github.com/scrollmapper/bible_databases). Which translations appear depends on the passage. The digital JPS text’s “G-d” and “HaShem” are restored to the 1917 printing’s “God” and “the LORD.” The atlas holds only the 705 passages it cites, not a full Bible.
- **Qur’an:** Uthmani Arabic (Hafs) and Pickthall (1930), public domain, from [fawazahmed0/quran-api](https://github.com/fawazahmed0/quran-api).
- **Map:** Natural Earth (public domain).

```sh
python3 tools/build_texts.py <source dir>     # writes assets/data/texts.js from the sources above
node tools/check_data.js                      # references, sources, citations, counts, labels, withdrawn wording
node tools/quote_register.js [--write]        # checks quoted Scripture against its passage; lists other quotations
node tools/check_links.js [--all]             # external links resolve (also runs in GitHub Actions)
node tools/check_ui.js                        # browser checks (needs Playwright with Chromium)
python3 tools/build_artifact.py dist/logos-atlas.html   # one self-contained HTML file
```

What the checks can and cannot show: `check_data.js` confirms that references resolve, that every Key Words entry’s Strong’s number occurs in its cited verses, that every source citation resolves and a retracted study is called retracted wherever it is cited, that miracle entries state the reading they apply to and give each proposed explanation a standing, that translation counts in the prose match the data, that Wikipedia links are not labelled as the works they describe, and that wording withdrawn in a correction has not returned. `quote_register.js` fails if a quotation followed by a Bible or Qur’an reference does not occur in that passage. None of this shows that a claim is true or that a hand-entered quotation is accurate; that takes reading the sources.

## Layout

- `index.html`: the page shell.
- `assets/data/`: all content. `units-*.js` hold the study units; `sources.js` the source records; `corrections.js` the corrections history; the other files hold the data the interactives use; `texts.js` is generated.
- `assets/app/`: the reader (`core.js`), the interactives (`w-*.js`), the guided tour (`tour.js`) and the stylesheet.
- `docs/`: the audit register for this revision and the quotation register.
- `tools/`: build scripts and checks.

No build step and no dependencies; the only network request the page makes itself is for Google Fonts.

To publish a release, open the Actions tab, choose **Release**, press **Run workflow** and enter a tag such as `v3.2.0`.
