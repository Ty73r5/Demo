"""Bundle the site into one self-contained HTML file (CSS and scripts inlined).

Usage: python3 tools/build_artifact.py [output.html] [--fragment]
--fragment drops the <!doctype>, <html>, <head> and <body> wrappers, for hosts that supply their own.
"""
import os, re, sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')


def read(rel):
    with open(os.path.join(ROOT, rel), encoding='utf-8') as fh:
        return fh.read()


def bundle(fragment=False):
    html = read('index.html')
    html = re.sub(r'<link rel="stylesheet" href="assets/css/style.css">',
                  lambda m: '<style>\n' + read('assets/css/style.css') + '\n</style>', html)
    html = re.sub(r'<script src="(assets/js/[\w.-]+)"></script>',
                  lambda m: '<script>\n' + read(m.group(1)).replace('</script', '<\\/script') + '\n</script>', html)
    if fragment:
        head = re.search(r'<head>(.*?)</head>', html, re.S).group(1)
        body = re.search(r'<body>(.*)</body>', html, re.S).group(1)
        head = re.sub(r'<meta charset[^>]*>\s*|<meta name="viewport"[^>]*>\s*', '', head)
        html = head.strip() + '\n' + body.strip() + '\n'
    return html


if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    out = args[0] if args else os.path.join(ROOT, 'dist', 'logos-atlas.html')
    os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
    with open(out, 'w', encoding='utf-8') as fh:
        fh.write(bundle('--fragment' in sys.argv))
    print(out, os.path.getsize(out), 'bytes')
