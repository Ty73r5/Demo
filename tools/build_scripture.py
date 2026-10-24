"""Build assets/js/scripture.js: every verse cited in the site, quoted exactly from source texts.

Usage: python3 tools/build_scripture.py <source dir>

The source dir must hold (all public domain or CC BY):
  KJV.json YLT.json DRC.json ASV.json VulgClementine.json
      from https://github.com/scrollmapper/bible_databases (formats/json)
  gnt/<Book>.txt   SBL Greek New Testament (CC BY 4.0), https://github.com/Faithlife/SBLGNT (data/sblgnt/text)
  wlc/<Book>.xml   Westminster Leningrad Codex via Open Scriptures Hebrew Bible (CC BY 4.0),
                   https://github.com/openscriptures/morphhb (wlc)

Citations are found in assets/js/*.js as {{Book.C.V}} or {{Book.C.V-W}} (OSIS book abbreviations),
plus any quoted string that is exactly a reference, such as 'Book.C.V'.
"""
import glob, json, os, re, sys, unicodedata

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
BOOKS = {
    'Gen': 'Genesis', 'Exod': 'Exodus', 'Lev': 'Leviticus', 'Num': 'Numbers', 'Deut': 'Deuteronomy', 'Josh': 'Joshua',
    'Judg': 'Judges', 'Ruth': 'Ruth', '1Sam': 'I Samuel', '2Sam': 'II Samuel', '1Kgs': 'I Kings', '2Kgs': 'II Kings',
    'Neh': 'Nehemiah', 'Esth': 'Esther', 'Job': 'Job', 'Ps': 'Psalms', 'Prov': 'Proverbs', 'Eccl': 'Ecclesiastes',
    'Song': 'Song of Solomon', 'Isa': 'Isaiah', 'Jer': 'Jeremiah', 'Lam': 'Lamentations', 'Ezek': 'Ezekiel', 'Dan': 'Daniel', 'Hos': 'Hosea',
    'Amos': 'Amos', 'Jonah': 'Jonah', 'Mic': 'Micah', 'Hab': 'Habakkuk', 'Mal': 'Malachi',
    'Tob': 'Tobit', 'Wis': 'Wisdom', 'Sir': 'Sirach', '1Macc': 'I Maccabees', '2Macc': 'II Maccabees',
    'Matt': 'Matthew', 'Mark': 'Mark', 'Luke': 'Luke', 'John': 'John', 'Acts': 'Acts', 'Rom': 'Romans',
    '1Cor': 'I Corinthians', '2Cor': 'II Corinthians', 'Gal': 'Galatians', 'Eph': 'Ephesians', 'Phil': 'Philippians',
    'Col': 'Colossians', '1Thess': 'I Thessalonians', '1Tim': 'I Timothy', '2Tim': 'II Timothy', 'Titus': 'Titus',
    'Heb': 'Hebrews', 'Jas': 'James', '1Pet': 'I Peter', '2Pet': 'II Peter', '1John': 'I John', 'Jude': 'Jude',
    'Rev': 'Revelation of John',
}
NAMES = {  # display names
    '1Sam': '1 Samuel', '2Sam': '2 Samuel', '1Kgs': '1 Kings', '2Kgs': '2 Kings', 'Ps': 'Psalm', 'Song': 'Song of Songs',
    '1Macc': '1 Maccabees', '2Macc': '2 Maccabees', '1Cor': '1 Corinthians', '2Cor': '2 Corinthians',
    '1Thess': '1 Thessalonians', '1Tim': '1 Timothy', '2Tim': '2 Timothy', '1Pet': '1 Peter', '2Pet': '2 Peter',
    '1John': '1 John', 'Rev': 'Revelation', 'Wis': 'Wisdom', 'Sir': 'Sirach',
}
TRANSLATIONS = ['KJV', 'YLT', 'DRC', 'ASV', 'VulgClementine']
# Hebrew (WLC) verse numbering differs from English where a psalm title is its own verse.
HEB_REF = {'Ps.22.16': 'Ps.22.17', 'Ps.22.1': 'Ps.22.2', 'Ps.51.4': 'Ps.51.6', 'Ps.51.10': 'Ps.51.12',
           'Ps.51.17': 'Ps.51.19', 'Ps.19.1': 'Ps.19.2', 'Ps.46.10': 'Ps.46.11', 'Ps.42.5': 'Ps.42.6', 'Isa.9.6': 'Isa.9.5'}


def lxx_psalm(c):
    """Douay-Rheims and the Vulgate follow Septuagint psalm numbering (only the ranges this site uses)."""
    if 11 <= c <= 113 or 117 <= c <= 146:
        return c - 1
    if c <= 8 or c >= 148:
        return c
    raise ValueError(f'psalm {c} needs a manual Septuagint mapping')
CANTILLATION = re.compile('[֑-ֽ֯׀׃׆]')


def load(src, t):
    d = json.load(open(os.path.join(src, f'{t}.json')))
    return {b['name']: {c['chapter']: {v['verse']: v['text'] for v in c['verses']} for c in b['chapters']} for b in d['books']}


def gnt(src, b, c, v):
    p = os.path.join(src, 'gnt', f'{b}.txt')
    if not os.path.exists(p):
        return None
    for line in open(p, encoding='utf-8'):
        m = re.match(r'.+? (\d+):(\d+)\t(.*)', line.rstrip('\n'))
        if m and int(m.group(1)) == c and int(m.group(2)) == v:
            return re.sub(r'[⸀⸁⸂⸃⸄⸅]', '', m.group(3)).strip()
    return None


_wlc = {}


def wlc(src, b, c, v):
    p = os.path.join(src, 'wlc', f'{b}.xml')
    if not os.path.exists(p):
        return None
    if p not in _wlc:
        _wlc[p] = open(p, encoding='utf-8').read()
    m = re.search(rf'<verse osisID="{b}\.{c}\.{v}">(.*?)</verse>', _wlc[p], re.S)
    if not m:
        return None
    words = []
    for attrs, inner in re.findall(r'<w ([^>]*)>(.*?)</w>', m.group(1), re.S):
        lemma = re.search(r'lemma="([^"]*)"', attrs)
        text = re.sub(r'<[^>]+>', '', inner).replace('/', '')
        text = unicodedata.normalize('NFC', CANTILLATION.sub('', text))
        strong = re.findall(r'\d+', lemma.group(1)) if lemma else []
        words.append([text, int(strong[-1]) if strong else None])
    return words


def expand(ref):
    m = re.fullmatch(r'(\w+)\.(\d+)\.(\d+)(?:-(\d+))?', ref)
    if not m:
        raise ValueError(ref)
    b, c, v1 = m.group(1), int(m.group(2)), int(m.group(3))
    v2 = int(m.group(4) or v1)
    return b, c, list(range(v1, v2 + 1))


def label(b, c, vs):
    name = NAMES.get(b, BOOKS[b].replace('Revelation of John', 'Revelation'))
    return f'{name} {c}:{vs[0]}' + (f'–{vs[-1]}' if len(vs) > 1 else '')


def main(src):
    refs = set()
    for f in glob.glob(os.path.join(ROOT, 'assets', 'js', '*.js')):
        if f.endswith('scripture.js'):
            continue
        txt = open(f, encoding='utf-8').read()
        refs |= set(re.findall(r'\{\{(\w+\.\d+\.\d+(?:-\d+)?)\}\}', txt))
        refs |= set(re.findall(r'[\'"]((?:[1-3]?[A-Z][a-z]+)\.\d+\.\d+(?:-\d+)?)[\'"]', txt))
    texts = {t: load(src, t) for t in TRANSLATIONS}
    out, missing = {}, []
    for ref in sorted(refs):
        b, c, vs = expand(ref)
        if b not in BOOKS:
            missing.append(ref + ' (unknown book)')
            continue
        entry = {'label': label(b, c, vs)}
        for t in TRANSLATIONS:
            if b == 'Ps' and t in ('DRC', 'VulgClementine'):
                # Septuagint chapter, Hebrew verse (both count psalm titles as verses)
                locs = [(lxx_psalm(c), expand(HEB_REF.get(f'Ps.{c}.{v}', f'Ps.{c}.{v}'))[2][0]) for v in vs]
            else:
                locs = [(c, v) for v in vs]
            parts = [texts[t].get(BOOKS[b], {}).get(cc, {}).get(vv) for cc, vv in locs]
            if any(parts):
                entry[t] = ' '.join(p for p in parts if p)
        g = [gnt(src, b, c, v) for v in vs]
        if any(g):
            entry['grc'] = ' '.join(x for x in g if x)
        heb = []
        for v in vs:
            hb, hc, hv = expand(HEB_REF.get(f'{b}.{c}.{v}', f'{b}.{c}.{v}'))
            w = wlc(src, hb, hc, hv[0])
            if w:
                heb += w
        if heb:
            entry['heb'] = heb
        if 'KJV' not in entry and b not in ('Tob', 'Wis', 'Sir', '1Macc', '2Macc'):
            missing.append(ref)
        out[ref] = entry
    dest = os.path.join(ROOT, 'assets', 'js', 'scripture.js')
    with open(dest, 'w', encoding='utf-8') as fh:
        fh.write('/* Generated by tools/build_scripture.py. KJV (1769 text), YLT (1862), Douay-Rheims (Challoner), ASV (1901),\n'
                 '   Clementine Vulgate: public domain. Greek: SBLGNT (CC BY 4.0, Logos Bible Software).\n'
                 '   Hebrew: Westminster Leningrad Codex via Open Scriptures Hebrew Bible (CC BY 4.0), cantillation removed. */\n')
        fh.write('window.SCRIPTURE = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n')
    print(f'{len(out)} citations -> {dest} ({os.path.getsize(dest)} bytes)')
    if missing:
        print('MISSING:', ', '.join(missing))
        sys.exit(1)


if __name__ == '__main__':
    main(sys.argv[1])
