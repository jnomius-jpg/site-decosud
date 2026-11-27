"""Ordonne la grille « Tout » de la Sélection selon la charte couleurs Déco Sud.

Usage : node outils/exporter-pieces.js > /tmp/pieces.json
        python3 outils/ordonner_grille.py /tmp/pieces.json
Lit les vues grille étalonnées (assets/img/grille/<id>.webp), les mesure avec decosud_grille.py,
cherche l'ordre qui enfreint le moins de règles de placement (3 colonnes), choisit les tuiles
d'ambiance (une toutes les 3 rangées, dans la famille de la rangée suivante), puis écrit assets/grille.js.
"""
import sys, os, json, random, math
sys.path.insert(0, os.path.dirname(__file__))
from decosud_grille import mesurer, famille, est_accent, controler, voisins_ok
import numpy as np

COLS = 3
RACINE = os.path.join(os.path.dirname(__file__), "..")
AMBIANCES = [  # tuiles d'ambiance étalonnées : image de situation + univers qu'elle annonce (lien vers ses produits)
    ("assets/img/grille/ambiance-noel.webp", "noel", "L'esprit de Noël"),
    ("assets/img/grille/ambiance-table.webp", "arts-de-la-table", "Arts de la table"),
    ("assets/img/grille/ambiance-lumiere.webp", "matieres-et-lumieres", "Matières & lumières"),
    ("assets/img/grille/ambiance-couleurs.webp", "couleurs-du-sud", "Couleurs du Sud"),
    ("assets/img/grille/ambiance-objets.webp", "objets-de-decoration", "Objets de décoration"),
    ("assets/img/grille/ambiance-linge.webp", "linge-et-etoffes", "Linge & étoffes"),
]

def penalite(items, cc):
    pb = controler(items, COLS)
    # on ignore les constats globaux qui ne dépendent pas de l'ordre (part de N, d'accents, M3, L* photo)
    locaux = [p for p in pb if not (p.startswith("Moins de 50") or p.startswith("Plus de 25") or p.startswith("M3 moyen") or "L* photo" in p or "désaturer" in p)]
    bonus = sum(1 for it in items[:COLS] if it["id"] not in cc)  # premier écran : les coups de cœur
    return len(locaux) + 0.5 * bonus, locaux

def recuire(items, cc, n):
    """Recuit simulé : l'ordre qui enfreint le moins de règles de placement."""
    if len(items) < 3: return items[:]
    random.seed(7)
    best = items[:]; random.shuffle(best)
    bp, _ = penalite(best, cc); cur, cp = best[:], bp
    T = 2.0
    for it in range(n):
        i, j = random.sample(range(len(cur)), 2)
        cand = cur[:]; cand[i], cand[j] = cand[j], cand[i]
        p, _ = penalite(cand, cc)
        if p <= cp or random.random() < math.exp((cp - p) / T):
            cur, cp = cand, p
            if p < bp: best, bp = cand[:], p
        T = max(0.02, T * 0.9999)
    return best

def main():
    pieces = json.load(open(sys.argv[1]))
    items, sans = [], []
    for p in pieces:
        f = os.path.join(RACINE, "assets/img/grille", p["id"] + ".webp")
        if not os.path.exists(f): sans.append(p["id"]); continue
        m = mesurer(f); fam = famille(m)
        items.append(dict(m, id=p["id"], nom=p["id"], fam=fam, acc=est_accent(m, fam)))
    cc = {p["id"] for p in pieces if p["coupDeCoeur"]}
    best = recuire(items, cc, 60000)
    # tuiles d'ambiance après les rangées 3, 6, 9…
    amb_fam = {}
    for src, u, nom in AMBIANCES:
        m = mesurer(os.path.join(RACINE, src)); amb_fam[src] = famille(m)
    tuiles, utilisees = [], set()
    rows = [best[r:r + COLS] for r in range(0, len(best), COLS)]
    for r in range(3, len(rows), 3):
        fams = [it["fam"] for it in rows[r]]
        dom = max(set(fams), key=fams.count)
        choix = [a for a in AMBIANCES if a[0] not in utilisees and amb_fam[a[0]] == dom] or [a for a in AMBIANCES if a[0] not in utilisees]
        if not choix: break
        a = choix[0]; utilisees.add(a[0])
        tuiles.append(dict(apres=r * COLS, image=a[0], univers=a[1], nom=a[2]))
    # chaque univers a son propre ordre (pas de mélange) et sa propre tuile d'ambiance
    par_univers, rapports = {}, {}
    univ_de = {p["id"]: p.get("univers", []) for p in pieces}
    for src, u, nom in AMBIANCES:
        sous = [it for it in items if u in univ_de.get(it["id"], [])]
        if not sous: continue
        o = recuire(sous, cc, 20000)
        n = len(o)
        apres = 9 if n >= 12 else (6 if n >= 8 else n)
        par_univers[u] = dict(ordre=[it["id"] for it in o] + [i for i in sans if u in univ_de.get(i, [])],
                              tuiles=[dict(apres=apres, image=src, univers=u, nom=nom)])
        rapports[u] = len(penalite(o, cc)[1])
    out = dict(ordre=[it["id"] for it in best] + sans, colonnes=COLS, tuiles=tuiles, univers=par_univers,
               mesures={it["id"]: dict(fam=it["fam"], accent=bool(it["acc"]), L=round(it["L"], 1), M3=round(it["M3"], 1),
                                    vue2=os.path.exists(os.path.join(RACINE, "assets/img/grille", it["id"] + "-2.webp"))) for it in best})
    with open(os.path.join(RACINE, "assets/grille.js"), "w") as fh:
        fh.write("/* Généré par outils/ordonner_grille.py (charte couleurs Déco Sud). Ne pas modifier à la main. */\n")
        fh.write("window.DECOSUD_GRILLE = " + json.dumps(out, ensure_ascii=False) + ";\n")
    pb = controler(best, COLS)
    import collections
    print("Familles :", dict(collections.Counter(i["fam"] for i in best)), "| accents :", sum(i["acc"] for i in best), "/", len(best))
    print("Sans photo (placées à la fin) :", sans)
    print("Tuiles d'ambiance :", [(t["apres"], t["univers"]) for t in tuiles])
    print("Univers (pièces, écarts de placement) :", {u: (len(v["ordre"]), rapports[u]) for u, v in par_univers.items()})
    print("\nGrille conforme." if not pb else f"\nÀ corriger ({len(pb)}) :\n- " + "\n- ".join(pb))

if __name__ == "__main__":
    main()
