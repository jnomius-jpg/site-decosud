"""Mesure et contrôle de la grille Sélection Déco Sud.
Usage : python3 decosud_grille.py dossier_photos/ [colonnes]
Les photos sont lues dans l'ordre alphabétique (= ordre de la grille).
"""
import sys, glob, os, math
import numpy as np
from PIL import Image
from skimage.color import rgb2lab

def mesurer(path):
    img = np.asarray(Image.open(path).convert("RGB").resize((400, 500))) / 255.0
    h, w, _ = img.shape
    zone = img[int(h*.2):int(h*.8), int(w*.2):int(w*.8)]  # zone produit ~ centre
    lab = rgb2lab(zone).reshape(-1, 3)
    L, a, b = lab.mean(axis=0)
    C = np.hypot(lab[:, 1], lab[:, 2]).mean()
    hue = math.degrees(math.atan2(b, a)) % 360
    L_img = rgb2lab(img)[..., 0].mean()  # clarté de la photo entière
    # M3 de Hasler & Süsstrunk, sur l'image entière (0-255)
    R, G, B = [img[..., i].ravel()*255 for i in range(3)]
    rg, yb = R - G, 0.5*(R + G) - B
    m3 = math.hypot(rg.std(), yb.std()) + 0.3*math.hypot(rg.mean(), yb.mean())
    return dict(L=L, C=C, h=hue, M3=m3, L_img=L_img)

def famille(m):
    if m["L"] < 45 and m["C"] < 20: return "S"
    if m["C"] < 12: return "N"
    h = m["h"]
    if 30 <= h < 75: return "T"
    if 75 <= h < 100 and m["C"] >= 25: return "J"
    if 75 <= h < 100: return "T"
    if 100 <= h < 170: return "V"
    if 200 <= h <= 270: return "B"
    return "T"

def est_accent(m, f):
    return f in ("J", "B", "S") or m["M3"] >= 45

INTERDITS = {frozenset("JB"), frozenset("JS"), frozenset("S")}

def voisins_ok(a, b):
    fa, fb = a["fam"], b["fam"]
    if frozenset((fa, fb)) in INTERDITS: return False, f"{fa}-{fb} interdit"
    teinte_ok = fa == fb or "N" in (fa, fb) or min(abs(a["h"]-b["h"]), 360-abs(a["h"]-b["h"])) <= 60
    if not teinte_ok: return False, f"teintes {fa}/{fb} trop éloignées"
    if abs(a["L"] - b["L"]) < 8: return False, "clartés trop proches (<8 L*)"
    return True, ""

def controler(items, cols):
    pb = []
    n = len(items)
    if sum(i["fam"] == "N" for i in items) < n/2: pb.append("Moins de 50 % de photos N")
    if sum(i["acc"] for i in items) > n/4: pb.append("Plus de 25 % d'accents")
    m3_moy = np.mean([i["M3"] for i in items])
    if not 15 <= m3_moy <= 30: pb.append(f"M3 moyen de la grille {m3_moy:.0f} hors 15-30")
    for k, it in enumerate(items[:cols]):
        if it["fam"] not in ("N", "T"): pb.append(f"Premier écran : {it['nom']} n'est ni N ni T")
    rows = [items[r:r+cols] for r in range(0, n, cols)]
    prev_acc_col = None
    for r, row in enumerate(rows):
        acc = [c for c, it in enumerate(row) if it["acc"]]
        if len(acc) > 1: pb.append(f"Rangée {r+1} : {len(acc)} accents")
        if acc and acc[0] == prev_acc_col: pb.append(f"Rangée {r+1} : accent dans la même colonne qu'au-dessus")
        prev_acc_col = acc[0] if acc else None
    moy = np.mean([i["L"] for i in items])
    for r, row in enumerate(rows):
        if abs(np.mean([i["L"] for i in row]) - moy) > 5: pb.append(f"Rangée {r+1} : clarté moyenne hors ±5")
    for k, it in enumerate(items):
        for j in (k+1 if (k+1) % cols else None, k+cols):
            if j is not None and j < n:
                ok, why = voisins_ok(it, items[j])
                if not ok: pb.append(f"{it['nom']} / {items[j]['nom']} : {why}")
    for it in items:
        if it["M3"] > 60: pb.append(f"{it['nom']} : M3 {it['M3']:.0f} > 60, désaturer")
        if not 78 <= it["L_img"] <= 92: pb.append(f"{it['nom']} : L* photo {it['L_img']:.0f} hors 78-92 (vue grille)")
    return pb

if __name__ == "__main__":
    dossier = sys.argv[1]; cols = int(sys.argv[2]) if len(sys.argv) > 2 else 3
    fichiers = sorted(f for f in glob.glob(os.path.join(dossier, "*")) if f.lower().endswith((".jpg", ".jpeg", ".png", ".webp")))
    items = []
    for f in fichiers:
        m = mesurer(f); fam = famille(m)
        items.append(dict(m, nom=os.path.basename(f), fam=fam, acc=est_accent(m, fam)))
        print(f"{os.path.basename(f):30s} L*{m['L']:5.1f} C*{m['C']:5.1f} h{m['h']:5.0f} M3{m['M3']:5.1f}  {fam}{' accent' if items[-1]['acc'] else ''}")
    pb = controler(items, cols)
    print("\nGrille conforme." if not pb else "\nÀ corriger :\n- " + "\n- ".join(pb))
