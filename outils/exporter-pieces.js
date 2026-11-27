// Exporte les pièces de assets/donnees.js en JSON (pour outils/etalonner_tout.py et outils/ordonner_grille.py).
// Usage : node outils/exporter-pieces.js > /tmp/pieces.json
global.window = {};
eval(require("fs").readFileSync(__dirname + "/../assets/donnees.js", "utf8"));
const D = window.DECOSUD, img = x => typeof x === "string" ? x : (x && x.src);
const uid = u => { const t = D.univers.find(x => x.id === u || x.nom === u); return t ? t.id : u; };
console.log(JSON.stringify(D.pieces.filter(p => !p.attente).map(p => {
  const vues = [img(p.image)].concat((p.images || []).map(img)).filter(Boolean);
  return { id: p.id, image: vues[0], vues, univers: [].concat(p.univers || []).map(uid), coupDeCoeur: p.coupDeCoeur || 0 };
})));
