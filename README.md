# Logos Atlas

An interactive atlas of Christianity, written from faith and held to the evidence. Eighteen folios:

1. **The Atlas:** a pan-and-zoom map from Iona to China, 2600 BC to today, with about 100 places, seven layers and Paul's journeys.
2. **The Library:** all 73 books (Protestant 66 plus the deuterocanon): traditional and critical authorship, dates, themes and a key verse.
3. **Canon and beyond:** rings from the shared core to Gnostic and Qumran texts, the canon line of six traditions, the disputed-books matrix, and each canon's strongest case.
4. **Text and translation:** lines of transmission and a Verse Lab of 28 passages comparing Hebrew or Greek with the KJV, YLT, Douay–Rheims, ASV and Vulgate. Includes the Johannine Comma, the ending of Mark, Erasmus' back-translated Revelation 22, Junia, 666/616 and more.
5. **The Gospels in parallel:** word-for-word comparison of eight passages, plus the Synoptic problem.
6. **Concordance:** 66 Hebrew and Greek words with Strong's numbers, each Hebrew number verified against the Westminster Leningrad Codex tagging.
7. **The Trinity and the Trivium:** the analogy, its sources and its limits.
8. **Doctrine and heresy:** nine traditions compared on 14 questions, the creeds, and the Christological and Trinitarian errors drawn on two spectra.
9. **Reading Scripture:** the four senses and PaRDeS, interpretive rules, modern methods, 13 typological pairs, New Testament quotations that follow the Septuagint, and 13 messianic texts read the Jewish and the Christian way.
10. **Days, dates and deep time:** what a day is (Genesis, astronomy, atomic time, the Gospels' hours), calendars and the invention of AD, ten dating methods, a logarithmic deep-time chart, eight readings of the creation days, the liturgical year, and rhythms for living.
11. **Ancient traditions:** Egypt, Mesopotamia, Persia, Greece, Rome, Israel, India, China, Islam, Hermeticism and the Norse world, with ten cross-cultural threads.
12. **The Great Conversation:** an influence map of about 60 writers, and Peterson's *Maps of Meaning*.
13. **Iconoclasts and orders:** Ingersoll in depth, thirteen critics, the Templars, Freemasonry and the Rosicrucians (with the Taxil hoax and other myths), a link network and a guide to symbols.
14. **The evidence:** ancient sources, archaeology, arguments for and against, and forgeries and open questions.
15. **Fruits and shadows**, with the global church in numbers.
16. **Then and now:** how ancient words have drifted in meaning.
17. **The inner way:** contemplative stages and practices, the mystics, union compared across traditions, research on mystical experience, discernment of spirits, and integration.
18. **The Way:** temptation, virtues, six pillars of shalom, and an evening examen.

A **voice-guided tour** of 27 steps uses the browser's built-in speech synthesis. Where no voice is available it shows captions and advances at reading pace.

## Try it

- **Online, no install:** https://raw.githack.com/Ty73r5/Demo/main/index.html
- **Download:** the [latest release](https://github.com/Ty73r5/Demo/releases/latest) has `logos-atlas.html`, a single file that opens in any browser, and `logos-atlas-site.zip` with the full site.
- **Your own GitHub Pages address (optional):** in this repository go to Settings → Pages, set the source to *Deploy from a branch*, choose `main` and `/ (root)`, and save. The site then appears at https://ty73r5.github.io/Demo/ within a minute or two.

Press **Guided tour** at the top of the page for the narrated walk-through.

To publish a new version, open the Actions tab, choose **Release**, press **Run workflow** and enter a new tag such as `v1.0.1`.

## How claims are marked

Every claim carries one label: **Fact** (documented), **Consensus** (most specialists agree), **Debated**, **Tradition** (handed down, unverified), **Synthesis** (an interpretive reading) or **Faith** (what the Church confesses).

## Run it

Open `index.html` in a browser. It has no build step and no dependencies; the only network request is for Google Fonts.

To produce one self-contained HTML file:

```sh
python3 tools/build_artifact.py dist/logos-atlas.html
```

## Sources and rebuilding the data

Every verse quoted on the site is generated from source texts, not typed by hand. `tools/build_scripture.py` finds every `{{Book.C.V}}` citation in `assets/js/*.js` and writes the exact text to `assets/js/scripture.js`:

- KJV (1769), Young's Literal (1862), Douay–Rheims (Challoner), ASV (1901), Clementine Vulgate: public domain, from [scrollmapper/bible_databases](https://github.com/scrollmapper/bible_databases) (`formats/json`).
- Hebrew: Westminster Leningrad Codex with Strong's lemma tags, from the [Open Scriptures Hebrew Bible](https://github.com/openscriptures/morphhb) (CC BY 4.0). Cantillation is removed for legibility.
- Greek: [SBL Greek New Testament](https://github.com/Faithlife/SBLGNT) (CC BY 4.0, Logos Bible Software).

```sh
python3 tools/build_scripture.py <dir with KJV.json … VulgClementine.json, gnt/*.txt, wlc/*.xml>
```

The build fails if any citation cannot be resolved. Then run the consistency checks:

```sh
node tools/check_data.js
```

This confirms that every Hebrew concordance entry's Strong's number occurs in the tagged Hebrew of a cited verse, that every Greek word's stem appears in its verses, and that every structured reference resolves.

The map is generated by `tools/build_geo.py` from [Natural Earth](https://www.naturalearthdata.com/) 1:50m land, lakes and rivers (public domain):

```sh
python3 tools/build_geo.py <dir with ne_50m_land.geojson, ne_50m_lakes.geojson, ne_50m_rivers_lake_centerlines.geojson>
```

## Layout

```
index.html               page shell and the twelve folios
assets/css/style.css     design tokens (light and dark) and components
assets/js/app.js         rendering and interaction
assets/js/tour.js        guided-tour narration
assets/js/atlas.js       places, events, journeys
assets/js/canon.js       canons, rings, timeline
assets/js/texts.js       transmission streams, Verse Lab
assets/js/lexicon.js     concordance
assets/js/wisdom.js      Trinity/Trivium, traditions, thinkers, Peterson
assets/js/orders.js      Ingersoll, critics, Templars, Freemasonry, Rosicrucians
assets/js/life.js        evidence, fruits and shadows, then and now, the Way
assets/js/library.js     the books of the Bible
assets/js/compare.js     doctrines, creeds, heresies, Gospel parallels, typology, messianic texts, reading methods
assets/js/time.js        days, calendars, dating methods, creation readings, deep time, the Christian year
assets/js/inner.js       the contemplative tradition, discernment, symbols, forgeries, global church
assets/js/extras.js      second-edition additions to the base datasets
assets/js/sections.js    renderers for the second-edition folios
assets/js/scripture.js   generated: quoted verses
assets/js/geo.js         generated: map geometry
tools/                   generators
```
