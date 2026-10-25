/* Link builders for primary sources. Every URL the atlas shows is produced here or written out in full,
   so that tools/check_links.js can collect and test them all. */
window.L = {
  // Bible
  bh: (slug, c, v) => `https://biblehub.com/${slug}/${c}-${v}.htm`,
  bhInter: (slug, c, v) => `https://biblehub.com/interlinear/${slug}/${c}-${v}.htm`,
  strongs: s => `https://biblehub.com/${s[0] === 'H' ? 'hebrew' : 'greek'}/${s.slice(1)}.htm`,
  blb: s => `https://www.blueletterbible.org/lexicon/${s.toLowerCase()}/kjv/`,
  bg: (q, v = 'DRA') => `https://www.biblegateway.com/passage/?search=${encodeURIComponent(q)}&version=${v}`,
  // Jewish texts
  sefaria: ref => `https://www.sefaria.org/${ref}`,
  // Islamic texts
  quran: (s, v) => `https://quran.com/${s}/${v}`,
  sunnah: ref => `https://sunnah.com/${ref}`,
  // Church Fathers and classics
  na: id => `https://www.newadvent.org/fathers/${id}.htm`,
  summa: id => `https://www.newadvent.org/summa/${id}.htm`,
  ccel: path => `https://www.ccel.org/ccel/${path}`,
  sacred: path => `https://sacred-texts.com/${path}`,
  ctext: path => `https://ctext.org/${path}`,
  gut: q => `https://www.gutenberg.org/ebooks/search/?query=${encodeURIComponent(q)}`,
  wiki: t => `https://en.wikipedia.org/wiki/${t}`,
  sep: e => `https://plato.stanford.edu/entries/${e}/`,
  doi: d => `https://doi.org/${d}`,
  bm: id => `https://www.britishmuseum.org/collection/object/${id}`
};
