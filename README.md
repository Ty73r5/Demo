# Logos Atlas

A study atlas of Christianity in history, Scripture and thought. It covers what the Bible says and how it reached us, the Hebrew and Greek word by word, what Christians believe and the arguments for and against, how the faith compares with Judaism, Islam and the ancient world, the movements and critics around it, and the virtues as a way of life.

It is written to be fair to Christians, who should recognise their faith in it, and useful to people of other faiths or none. Claims link to their sources so that they can be checked. The atlas was compiled by Claude, an AI model made by Anthropic, as study material; it does not speak for any church.

## Try it

- **Online, no install:** https://raw.githack.com/Ty73r5/Demo/main/index.html
- **Download:** the [latest release](https://github.com/Ty73r5/Demo/releases/latest) has `logos-atlas.html`, a single file that opens in any browser, and `logos-atlas-site.zip` with the full site.
- **Your own GitHub Pages address (optional):** Settings → Pages → *Deploy from a branch* → `main`, `/ (root)`. The site appears at https://ty73r5.github.io/Demo/.

Press **Guided tour** for a 26-step spoken walk-through. Chrome, Edge and Safari have the best voices.

## Contents

Thirty-two study units in seven parts. Each has an introduction, sections, an interactive, questions for study and sources.

| Part | Units |
|---|---|
| I. Orientation | How to use this atlas |
| II. The Book | The Bible as a library (books and canons by tradition) · How the text reached us (lines of transmission; one passage across twelve translations with changes highlighted) · The Dead Sea Scrolls · Reading the original (32 passages word by word) · Key words (66 Hebrew and Greek words) · The great stories (155 narratives with their meanings, virtues and hard cases) |
| III. History | The Atlas (97 places, 2600 BC to today) · Jesus of Nazareth · Days, dates and deep time |
| IV. Christian Belief | Creeds and doctrine (nine churches on 14 questions) · Heresy and orthodoxy · The Trinity and the Trivium · Reading Scripture · Arguments about God (six for, five against) · Miracles and the laws of nature (30 events, what each would require, proposed explanations) · Hell, judgement and the afterlife (including plague and the history of “bless you”) |
| V. Comparisons | Judaism, Christianity and Islam (17 topics) · Ancient traditions · The Twelve, Judas and older stories (claimed parallels checked against the sources) · Kemet and the Metu Neter |
| VI. People & Movements | The Great Conversation (61 writers; Peterson’s *Maps of Meaning*) · Robert G. Ingersoll · Critics of Christianity · The Knights Templar · Freemasonry · Rosicrucians, Hermeticism and Christian Kabbalah |
| VII. Living It | The ancient mind and the modern · Contributions and harms · The inner life · Virtues and the good life (with research and an evening examen) · Sources and study tools (including studying with AI) |

## How statements are labelled

A quiet label in the margin marks what kind of statement a passage makes, where it matters:

- **The text**: what a text says, including canon lists, creeds and decrees. It is a fact that John says “the Word was God,” whatever one believes about the Word.
- **Record**: dated events, manuscripts, inscriptions, finds and measurements.
- **Scholarship**: what researchers conclude, with the range of views.
- **Belief**: what a community holds, named by tradition (Christian, Jewish, Muslim, Masonic, Kemetic …). Claims about God, revelation, miracles and the afterlife are labelled the same way for every tradition.
- **Open question**: what is not settled.

## Every word in English

Every Bible reference opens the passage in up to eleven public-domain translations, from Wycliffe (c. 1395) to the Berean Standard Bible (2023), plus the Latin Vulgate. Each Hebrew or Greek word appears with its transliteration, an English gloss, and its Strong’s number linked to Bible Hub and Blue Letter Bible. Tapping a word shows how often it occurs and how it is usually translated. Qur’an references show the Arabic with Pickthall’s English.

## Sources and data

All quoted text is generated from source files, not typed by hand.

- **Hebrew and Greek:** STEP Bible’s TAHOT and TAGNT (Leningrad Codex; Nestle–Aland with Textus Receptus words marked) and the TBESH/TBESG lexicons, Tyndale House, Cambridge, [CC BY 4.0](https://github.com/STEPBible/STEPBible-Data).
- **Translations:** Wycliffe, Tyndale, Geneva 1599, KJV (with Apocrypha), Douay–Rheims, Young’s Literal, ASV, JPS 1917, Catholic Public Domain Version, Berean Standard Bible, Clementine Vulgate, from [scrollmapper/bible_databases](https://github.com/scrollmapper/bible_databases). The JPS 1917 text is shown with the divine names as printed in 1917.
- **Qur’an:** Uthmani Arabic (Hafs) and Pickthall (1930), public domain, from [fawazahmed0/quran-api](https://github.com/fawazahmed0/quran-api).
- **Map:** Natural Earth (public domain).

```sh
python3 tools/build_texts.py <source dir>   # writes assets/data/texts.js from the sources above
node tools/check_data.js                    # references, Strong's numbers, untranslated script, unit structure
node tools/check_links.js [--all]           # external links (also runs in GitHub Actions)
python3 tools/build_artifact.py dist/logos-atlas.html   # one self-contained HTML file
```

`check_data.js` confirms that every Key Words entry’s Strong’s number really occurs in the Hebrew or Greek of the verses it cites, that every reference resolves, and that no Hebrew, Greek, Arabic or Coptic text appears without English beside it.

## Layout

- `index.html`: the page shell.
- `assets/data/`: all content. `units-*.js` hold the study units; the other files hold the data the interactives use; `texts.js` is generated.
- `assets/app/`: the reader (`core.js`), the interactives (`w-*.js`), the guided tour (`tour.js`) and the stylesheet.

No build step and no dependencies; the only network request is for Google Fonts.

To publish a new version, open the Actions tab, choose **Release**, press **Run workflow** and enter a tag such as `v3.0.1`.
