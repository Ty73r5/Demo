/* Link builders for primary sources. Every URL the atlas shows is produced here or written out in full,
   so that tools/check_links.js can collect and test them all. */
window.L = {
  // Bible
  bh: (slug, c, v) => slug && slug !== '-' ? `https://biblehub.com/${slug}/${c}-${v}.htm` : null,
  bhInter: (slug, c, v) => slug && slug !== '-' ? `https://biblehub.com/interlinear/${slug}/${c}-${v}.htm` : null,
  // Strong's runs to H8674 and G5624. STEP Bible adds higher numbers (prefixes, extra senses) that these sites lack.
  isStrongs: s => /^[HG]\d+$/.test(s || '') && +s.slice(1) <= (s[0] === 'H' ? 8674 : 5624),
  strongs: s => L.isStrongs(s) ? `https://biblehub.com/${s[0] === 'H' ? 'hebrew' : 'greek'}/${s.slice(1)}.htm` : null,
  blb: s => L.isStrongs(s) ? `https://www.blueletterbible.org/lexicon/${s.toLowerCase()}/kjv/` : null,
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
  wiki: t => `https://en.wikipedia.org/wiki/${t.replace(/\(/g, '%28').replace(/\)/g, '%29')}`,
  sep: e => `https://plato.stanford.edu/entries/${e}/`,
  doi: d => `https://doi.org/${d}`,
  bm: id => `https://www.britishmuseum.org/collection/object/${id}`
};
