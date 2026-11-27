// Exporte les pièces de assets/donnees.js en JSON (pour outils/ordonner_grille.py).
// Usage : node outils/exporter-pieces.js > /tmp/pieces.json
global.window = {};
eval(require("fs").readFileSync(__dirname + "/../assets/donnees.js", "utf8"));
const D = window.DECOSUD, img = x => typeof x === "string" ? x : (x && x.src);
console.log(JSON.stringify(D.pieces.filter(p => !p.attente).map(p => ({
  id: p.id, image: img(p.image) || img((p.images || [])[0]), coupDeCoeur: p.coupDeCoeur || 0
}))));
