"""Ré-étalonne toutes les vues de la grille avec la recette unique (outils/etalonner.py).

Usage : node outils/exporter-pieces.js > /tmp/pieces.json
        python3 outils/etalonner_tout.py /tmp/pieces.json
Écrit assets/img/grille/<id>.webp (1re photo), <id>-2.webp (2e photo, survol) et ambiance-*.webp (sans recadrage 4:5).
"""
import sys, os, json
sys.path.insert(0, os.path.dirname(__file__))
from PIL import Image, ImageOps
import etalonner as E

RACINE = os.path.join(os.path.dirname(__file__), "..")
DEST = os.path.join(RACINE, "assets/img/grille")

def sortir(src, dest, largeur, recadrer=True):
    im = ImageOps.exif_transpose(Image.open(os.path.join(RACINE, src))).convert("RGB")
    if im.width > largeur * 1.5: im.thumbnail((int(largeur * 1.5), 10000))
    if not recadrer:
        garde = E.recadrer_45; E.recadrer_45 = lambda x: x
    try: out = E.etalonner(im)
    finally:
        if not recadrer: E.recadrer_45 = garde
    if out.width > largeur: out.thumbnail((largeur, 10000), Image.LANCZOS)
    out.save(dest, "WEBP", quality=84, method=6)

def main():
    os.makedirs(DEST, exist_ok=True)
    for p in json.load(open(sys.argv[1])):
        vues = p.get("vues") or []
        if not vues or not os.path.exists(os.path.join(RACINE, vues[0])): print("sans photo :", p["id"]); continue
        sortir(vues[0], os.path.join(DEST, p["id"] + ".webp"), 1200)
        if len(vues) > 1 and os.path.exists(os.path.join(RACINE, vues[1])):
            sortir(vues[1], os.path.join(DEST, p["id"] + "-2.webp"), 1200)
    for nom in ["noel", "table", "lumiere", "couleurs", "objets", "linge"]:
        sortir(f"assets/img/univers-{nom}.jpg", os.path.join(DEST, f"ambiance-{nom}.webp"), 1800, recadrer=False)
    print("ok")

if __name__ == "__main__":
    main()
