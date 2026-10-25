"""Build the quoted-text data for Logos Atlas: every Bible passage, Qur'an verse and lexicon entry the content cites.

Usage: python3 tools/build_texts.py <source dir>

Writes assets/data/texts.js containing:
  BIBLE[ref]  = { label, tr: {KJV, BSB, ...}, words: [[orig, translit, gloss, strong, flag], ...], lang: 'heb'|'grc' }
  QURAN[ref]  = { label, ar, en }                       (Arabic Uthmani Hafs; Pickthall 1930, public domain)
  LEX[strong] = { w, tr, gloss, def }                   (STEPBible TBESH/TBESG brief lexicons)
  STATS[strong] = { n, top: [[gloss, count], ...] }     (occurrences counted from TAHOT/TAGNT)

Sources expected in <source dir> (all public domain or CC BY):
  scrollmapper bible_databases json: KJV KJVA BSB YLT DRC ASV Geneva1599 Tyndale Wycliffe JPS CPDV VulgClementine ChiUn
  step/  a checkout of github.com/STEPBible/STEPBible-Data (TAHOT, TAGNT, TBESH, TBESG), CC BY 4.0
  quran_ar.json, quran_pickthall.json  from github.com/fawazahmed0/quran-api (editions ara-quranuthmanihaf, eng-mohammedmarmadu)

Citations are found in assets/data/*.js as {{Book.C.V}}, {{Book.C.V-W}}, {{Q:S:V}} or {{Q:S:V-W}},
any quoted string that is exactly a Bible reference ('John.1.1'), and lexicon ids in WORDS (strong: 'H430').
"""
import glob, json, os, re, sys, unicodedata
from collections import Counter, defaultdict

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')

# OSIS-style abbreviation used in content -> (scrollmapper name, STEP abbreviation, display name, BibleHub slug)
BOOKS = {}
for row in """Gen|Genesis|Gen|Genesis|genesis
Exod|Exodus|Exo|Exodus|exodus
Lev|Leviticus|Lev|Leviticus|leviticus
Num|Numbers|Num|Numbers|numbers
Deut|Deuteronomy|Deu|Deuteronomy|deuteronomy
Josh|Joshua|Jos|Joshua|joshua
Judg|Judges|Jdg|Judges|judges
Ruth|Ruth|Rut|Ruth|ruth
1Sam|I Samuel|1Sa|1 Samuel|1_samuel
2Sam|II Samuel|2Sa|2 Samuel|2_samuel
1Kgs|I Kings|1Ki|1 Kings|1_kings
2Kgs|II Kings|2Ki|2 Kings|2_kings
1Chr|I Chronicles|1Ch|1 Chronicles|1_chronicles
2Chr|II Chronicles|2Ch|2 Chronicles|2_chronicles
Ezra|Ezra|Ezr|Ezra|ezra
Neh|Nehemiah|Neh|Nehemiah|nehemiah
Esth|Esther|Est|Esther|esther
Job|Job|Job|Job|job
Ps|Psalms|Psa|Psalm|psalms
Prov|Proverbs|Pro|Proverbs|proverbs
Eccl|Ecclesiastes|Ecc|Ecclesiastes|ecclesiastes
Song|Song of Solomon|Sng|Song of Songs|songs
Isa|Isaiah|Isa|Isaiah|isaiah
Jer|Jeremiah|Jer|Jeremiah|jeremiah
Lam|Lamentations|Lam|Lamentations|lamentations
Ezek|Ezekiel|Ezk|Ezekiel|ezekiel
Dan|Daniel|Dan|Daniel|daniel
Hos|Hosea|Hos|Hosea|hosea
Joel|Joel|Jol|Joel|joel
Amos|Amos|Amo|Amos|amos
Obad|Obadiah|Oba|Obadiah|obadiah
Jonah|Jonah|Jon|Jonah|jonah
Mic|Micah|Mic|Micah|micah
Nah|Nahum|Nam|Nahum|nahum
Hab|Habakkuk|Hab|Habakkuk|habakkuk
Zeph|Zephaniah|Zep|Zephaniah|zephaniah
Hag|Haggai|Hag|Haggai|haggai
Zech|Zechariah|Zec|Zechariah|zechariah
Mal|Malachi|Mal|Malachi|malachi
Matt|Matthew|Mat|Matthew|matthew
Mark|Mark|Mrk|Mark|mark
Luke|Luke|Luk|Luke|luke
John|John|Jhn|John|john
Acts|Acts|Act|Acts|acts
Rom|Romans|Rom|Romans|romans
1Cor|I Corinthians|1Co|1 Corinthians|1_corinthians
2Cor|II Corinthians|2Co|2 Corinthians|2_corinthians
Gal|Galatians|Gal|Galatians|galatians
Eph|Ephesians|Eph|Ephesians|ephesians
Phil|Philippians|Php|Philippians|philippians
Col|Colossians|Col|Colossians|colossians
1Thess|I Thessalonians|1Th|1 Thessalonians|1_thessalonians
2Thess|II Thessalonians|2Th|2 Thessalonians|2_thessalonians
1Tim|I Timothy|1Ti|1 Timothy|1_timothy
2Tim|II Timothy|2Ti|2 Timothy|2_timothy
Titus|Titus|Tit|Titus|titus
Phlm|Philemon|Phm|Philemon|philemon
Heb|Hebrews|Heb|Hebrews|hebrews
Jas|James|Jas|James|james
1Pet|I Peter|1Pe|1 Peter|1_peter
2Pet|II Peter|2Pe|2 Peter|2_peter
1John|I John|1Jn|1 John|1_john
2John|II John|2Jn|2 John|2_john
3John|III John|3Jn|3 John|3_john
Jude|Jude|Jud|Jude|jude
Rev|Revelation of John|Rev|Revelation|revelation
Tob|Tobit|-|Tobit|-
Jdt|Judith|-|Judith|-
Wis|Wisdom|-|Wisdom|-
Sir|Sirach|-|Sirach|-
Bar|Baruch|-|Baruch|-
1Macc|I Maccabees|-|1 Maccabees|-
2Macc|II Maccabees|-|2 Maccabees|-""".splitlines():
    a, sm, st, disp, slug = row.split('|')
    BOOKS[a] = (sm, st, disp, slug)
DEUTERO = {'Tob', 'Jdt', 'Wis', 'Sir', 'Bar', '1Macc', '2Macc'}
NT = set(list(BOOKS)[39:66])
# Order matters: these are shown in this order in the reader.
TRANSLATIONS = [
    ('Wycliffe', 'Wycliffe', 'c. 1395, Middle English from the Latin'),
    ('Tyndale', 'Tyndale', '1526–1530s, first English from Greek and Hebrew'),
    ('Geneva', 'Geneva1599', '1599, the Bible of Shakespeare and the Pilgrims'),
    ('KJV', 'KJV', 'King James Version, 1611 (1769 Oxford text)'),
    ('DRC', 'DRC', 'Douay–Rheims, Catholic, from the Vulgate (Challoner, 1752)'),
    ('YLT', 'YLT', 'Young’s Literal Translation, 1862'),
    ('ASV', 'ASV', 'American Standard Version, 1901'),
    ('JPS', 'JPS', 'Jewish Publication Society Tanakh, 1917'),
    ('CPDV', 'CPDV', 'Catholic Public Domain Version, 2009'),
    ('BSB', 'BSB', 'Berean Standard Bible, 2016–2023, modern English'),
    ('Vulgate', 'VulgClementine', 'Latin Vulgate (Clementine, 1592)'),
]
EXTRA = [('KJVA', 'KJVA'), ('ChiUn', 'ChiUn')]
CANT = re.compile('[֑-ֽ֯׀׃׆]')
REF_RE = r'(?:[1-3]?[A-Z][a-z]+)\.\d+\.\d+(?:-\d+)?'


def load_tr(src, t):
    d = json.load(open(os.path.join(src, f'{t}.json'), encoding='utf-8'))
    return {b['name']: {c['chapter']: {v['verse']: v['text'] for v in c['verses']} for c in b['chapters']} for b in d['books']}


def expand(ref):
    m = re.fullmatch(r'(\w+)\.(\d+)\.(\d+)(?:-(\d+))?', ref)
    b, c, v1 = m.group(1), int(m.group(2)), int(m.group(3))
    return b, c, list(range(v1, int(m.group(4) or v1) + 1))


def step_rows(src):
    """Index TAHOT/TAGNT rows by English reference 'Gen.1.1'."""
    rows = defaultdict(list)
    for f in glob.glob(os.path.join(src, 'step', 'Translators Amalgamated OT+NT', 'TA*.txt')):
        greek = os.path.basename(f).startswith('TAGNT')
        for line in open(f, encoding='utf-8-sig'):
            # Hebrew rows: Eng(Heb), e.g. Psa.22.16(22.17). Greek rows: Greek[Eng], e.g. 2Co.13.13[13.14].
            m = re.match(r'([1-3]?[A-Z][a-z]{1,2})\.(\d+)\.(\d+)(?:\((\d+)\.(\d+)\))?(?:\[(\d+)\.(\d+)\])?#(\d+)=([A-Za-z]+)(?:\([^)]*\))?\t', line)
            if not m:
                continue
            cols = line.rstrip('\n').split('\t')
            key = f'{m.group(1)}.{m.group(2)}.{m.group(3)}'
            if m.group(6):
                key = f'{m.group(1)}.{m.group(6)}.{m.group(7)}'
                GRK_VERSE[key] = (int(m.group(2)), int(m.group(3)))
            rows[key].append((greek, m.group(9), cols))
            if m.group(4):
                HEB_VERSE[key] = (int(m.group(4)), int(m.group(5)))
    return rows


GRK_VERSE = {}  # English reference -> (chapter, verse) in Greek (NA28) numbering, from TAGNT
HEB_VERSE = {}  # English reference -> (chapter, verse) in Hebrew numbering, from TAHOT


def restore_jps(t):
    """The digital JPS edition writes 'G-d' and 'HaShem'; the 1917 printing reads 'God' and 'the LORD'."""
    t = t.replace('G-d', 'God')
    t = re.sub(r'(^|[.;:!?]\s+|[‘“"]\s*)HaShem', lambda m: m.group(1) + 'The LORD', t)
    return t.replace('HaShem', 'the LORD')


def base_strong(s):
    m = re.search(r'([HG])0*(\d+)', s)
    return f'{m.group(1)}{m.group(2)}' if m else None


def hebrew_word(cols):
    word = unicodedata.normalize('NFC', CANT.sub('', cols[1].replace('/', '').replace('\\', '')))
    main = re.search(r'\{([HG]\d+[A-Za-z]?)\}', cols[4])
    strong = base_strong(main.group(1)) if main else base_strong(cols[4])
    gloss = re.sub(r'\s*/\s*', ' ', cols[3]).replace('<obj.>', '[obj.]').strip()
    # the gloss of the main word only (for statistics)
    parts, tags = cols[3].split('/'), cols[4].split('/')
    core = next((p for p, t in zip(parts, tags) if '{' in t), cols[3]) if len(parts) == len(tags) else cols[3]
    note = cols[6].strip() if len(cols) > 6 else ''
    return [word.replace('׃', '').strip(), cols[2].replace('/', ''), gloss, strong, note, core.strip()]


def greek_word(cols):
    m = re.match(r'(.+?)\s*\((.+)\)$', cols[1].strip())
    word, translit = (m.group(1), m.group(2)) if m else (cols[1], '')
    strong = base_strong(cols[3].split('=')[0])
    note = cols[6].strip() if len(cols) > 6 else ''
    gloss = re.sub(r'^\[\d+\]\s*', '', cols[2].strip())  # drop English verse numbers such as "[14] The"
    return [word.replace('¶', '').strip(), translit, gloss, strong, note, gloss]


def main(src):
    data_dir = os.path.join(ROOT, 'assets', 'data')
    content = ''
    for f in sorted(glob.glob(os.path.join(data_dir, '*.js'))):
        if os.path.basename(f) != 'texts.js':
            content += open(f, encoding='utf-8').read()
    refs = set(re.findall(r'\{\{(' + REF_RE + r')\}\}', content)) | set(re.findall(r"['\"](" + REF_RE + r")['\"]", content))
    qrefs = set(re.findall(r'\{\{Q:(\d+:\d+(?:-\d+)?)\}\}', content)) | set(re.findall(r"['\"]Q:(\d+:\d+(?:-\d+)?)['\"]", content))
    lex_ids = set(re.findall(r"strong:\s*'([HG]\d+)'", content))

    texts = {k: load_tr(src, f) for k, f, _ in TRANSLATIONS}
    texts.update({k: load_tr(src, f) for k, f in EXTRA})
    rows = step_rows(src)
    bible, missing = {}, []
    for ref in sorted(refs):
        b, c, vs = expand(ref)
        if b not in BOOKS:
            missing.append(ref + ' (unknown book)')
            continue
        sm, st, disp, slug = BOOKS[b]
        e = {'label': f'{disp} {c}:{vs[0]}' + (f'–{vs[-1]}' if len(vs) > 1 else ''), 'tr': {}, 'slug': slug}
        for key, _, _ in TRANSLATIONS + [(k, None, None) for k, _ in EXTRA]:
            # Psalms in Douay-Rheims and the Vulgate follow Septuagint numbering; the reader links out instead.
            if b == 'Ps' and key in ('DRC', 'Vulgate', 'CPDV'):
                continue
            if key == 'JPS':  # the 1917 JPS follows Hebrew verse numbering
                locs = [HEB_VERSE.get(f'{st}.{c}.{v}', (c, v)) for v in vs]
            else:
                locs = [(c, v) for v in vs]
            parts = [texts[key].get(sm, {}).get(cc, {}).get(vv) for cc, vv in locs]
            if not any(parts) and key != 'JPS':  # some editions follow the Greek (NA28) or Hebrew numbering
                alt = GRK_VERSE if b in NT else HEB_VERSE
                parts = [texts[key].get(sm, {}).get(cc, {}).get(vv) for cc, vv in [alt.get(f'{st}.{c}.{v}', (c, v)) for v in vs]]
            if key == 'JPS':
                if not any(parts):  # some books in this edition use English numbering
                    parts = [texts[key].get(sm, {}).get(c, {}).get(v) for v in vs]
                parts = [restore_jps(p) if p else p for p in parts]
            if any(parts):
                e['tr'][key] = ' '.join(p.strip() for p in parts if p)
        if b in DEUTERO and 'KJV' not in e['tr'] and 'KJVA' in e['tr']:
            e['tr']['KJV'] = e['tr'].pop('KJVA')  # the 1611 Apocrypha
        e['tr'].pop('KJVA', None)
        if b in ('Tob', 'Jdt'):
            # The Vulgate's Tobit and Judith follow a different recension and numbering from the Greek behind the
            # KJV Apocrypha, so the two families cannot be shown side by side; keep the Vulgate family.
            e['tr'].pop('KJV', None)
        if b != 'John' or c != 1 or 1 not in vs:
            e['tr'].pop('ChiUn', None)
        words = []
        if st != '-':
            for v in vs:
                for greek, typ, cols in rows.get(f'{st}.{c}.{v}', []):
                    if greek:
                        if not re.search('[NK]', typ):
                            continue
                        w = greek_word(cols)
                        flag = '' if 'N' in typ else 'TR'  # words only in the Textus Receptus (KJV) tradition
                        words.append(w[:4] + [flag, w[4]])
                    elif 'L' in typ:
                        w = hebrew_word(cols)
                        words.append(w[:4] + ['', w[4]])
            e['lang'] = 'grc' if b in NT else 'heb'
        e['words'] = words
        if 'KJV' not in e['tr'] and b not in DEUTERO:
            missing.append(ref)
        if st != '-' and not words:
            missing.append(ref + ' (no original-language words)')
        bible[ref] = e

    qa = {(x['chapter'], x['verse']): x['text'] for x in json.load(open(os.path.join(src, 'quran_ar.json')))['quran']}
    qe = {(x['chapter'], x['verse']): x['text'] for x in json.load(open(os.path.join(src, 'quran_pickthall.json')))['quran']}
    quran = {}
    for q in sorted(qrefs):
        m = re.fullmatch(r'(\d+):(\d+)(?:-(\d+))?', q)
        s, v1 = int(m.group(1)), int(m.group(2))
        vs = range(v1, int(m.group(3) or v1) + 1)
        if not all((s, v) in qa for v in vs):
            missing.append('Q:' + q)
            continue
        quran[q] = {'label': f'Qur’an {s}:{v1}' + (f'–{vs[-1]}' if len(vs) > 1 else ''),
                    'ar': ' '.join(f'{qa[(s, v)]} ﴿{v}﴾' for v in vs), 'en': ' '.join(qe[(s, v)] for v in vs)}

    # Lexicon: every Strong's number appearing in cited passages, plus the word-study entries.
    want = {w[3] for e in bible.values() for w in e['words'] if w[3]} | lex_ids
    lex = {}
    for name in ('TBESH', 'TBESG'):
        path = glob.glob(os.path.join(src, 'step', 'Lexicons', f'{name}*.txt'))[0]
        for line in open(path, encoding='utf-8-sig'):
            cols = line.rstrip('\n').split('\t')
            if len(cols) < 8 or not re.match(r'[HG]\d{4}', cols[0]):
                continue
            s = base_strong(cols[0])
            if s not in want or s in lex:
                continue
            d = re.sub(r'<[^>]+>', ' ', cols[7]).replace('&nbsp;', ' ')
            d = re.sub(r'\s+', ' ', d).strip()
            lex[s] = {'w': cols[3], 'tr': cols[4], 'gloss': cols[6], 'def': (d[:320] + '…') if len(d) > 320 else d}

    stats = {}
    counts, glosses = Counter(), defaultdict(Counter)
    for key, rs in rows.items():
        for greek, typ, cols in rs:
            if greek and 'N' not in typ:
                continue
            if not greek and 'L' not in typ:
                continue
            w = greek_word(cols) if greek else hebrew_word(cols)
            if w[3] in lex_ids:
                counts[w[3]] += 1
                g = re.sub(r'[\[\]<>.,;:!?“”"]', '', w[5]).strip().lower()
                if g:
                    glosses[w[3]][g] += 1
    for s in lex_ids:
        stats[s] = {'n': counts[s], 'top': glosses[s].most_common(6)}

    os.makedirs(data_dir, exist_ok=True)
    dest = os.path.join(data_dir, 'texts.js')
    with open(dest, 'w', encoding='utf-8') as fh:
        fh.write('/* Generated by tools/build_texts.py. Do not edit.\n'
                 '   English Bibles: Wycliffe, Tyndale, Geneva 1599, KJV (with 1611 Apocrypha), Douay-Rheims, YLT, ASV, JPS 1917,\n'
                 '   Catholic Public Domain Version, Berean Standard Bible, Clementine Vulgate, Chinese Union: public domain\n'
                 '   (scrollmapper/bible_databases). Hebrew and Greek words, glosses and lexicon: STEP Bible (www.STEPBible.org),\n'
                 '   Tyndale House Cambridge, CC BY 4.0. Qur\'an: Uthmani Hafs text (King Fahd Complex via fawazahmed0/quran-api)\n'
                 '   and Marmaduke Pickthall, The Meaning of the Glorious Koran (1930), public domain. */\n')
        for name, obj in (('BIBLE', bible), ('QURAN', quran), ('LEX', lex), ('STATS', stats)):
            fh.write(f'window.{name} = ' + json.dumps(obj, ensure_ascii=False, separators=(',', ':')) + ';\n')
    print(f'{len(bible)} Bible passages, {len(quran)} Qur’an passages, {len(lex)} lexicon entries -> {dest} '
          f'({os.path.getsize(dest) // 1024} KB)')
    if missing:
        print('MISSING:', ', '.join(missing))
        sys.exit(1)


if __name__ == '__main__':
    main(sys.argv[1])
