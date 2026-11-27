"""Recette d'étalonnage commune Déco Sud (charte « Règles de colorimétrie et de grille photo »).

Usage : python3 outils/etalonner.py source.jpg sortie.webp
Applique la même recette à toutes les photos, sans réglage photo par photo :
  1. balance des blancs : neutres ramenés à a* ≈ +1,5, b* ≈ +5 (chaleur légère, jamais b* < 0 ni > +10) ;
  2. TSL : bleus −15 % de chroma, verts tirés vers le jaune et −10 %, oranges +5 en clarté ;
  3. clarté : courbe qui amène la clarté moyenne de la photo vers L* 70 (vue situation 62-76),
     noirs relevés (L* ≥ 10, rendu mat), hautes lumières protégées (≤ 1 % de blancs purs) ;
  4. couleur : chroma réduite seulement si la photo dépasse M3 36 (jamais en dessous de 55 % de l'original,
     pour ne pas tomber dans le « beige Instagram ») ;
  5. format 4:5, export WebP.
"""
import sys, math
import numpy as np
from PIL import Image
from skimage.color import rgb2lab, lab2rgb

CIBLE_L = 70.0      # clarté moyenne visée : nos photos sont des vues « situation » (cible 62-76) ; vue grille 78-92 quand on aura des photos sur fond uni
NOIR_MIN = 10.0     # L* des noirs (8-12)
M3_MAX = 36.0       # colorfulness visée d'une photo colorée (cible 22-40 ; on vise bas pour garder la grille sous M3 30)

def m3(rgb):
    R, G, B = [rgb[..., i].ravel() * 255 for i in range(3)]
    rg, yb = R - G, 0.5 * (R + G) - B
    return math.hypot(rg.std(), yb.std()) + 0.3 * math.hypot(rg.mean(), yb.mean())

def recadrer_45(im):
    w, h = im.size
    if abs(w / h - 0.8) < 0.01: return im
    if w / h > 0.8:
        nw = int(h * 0.8); x = (w - nw) // 2; return im.crop((x, 0, x + nw, h))
    nh = int(w / 0.8); y = (h - nh) // 2; return im.crop((0, y, w, y + nh))

def etalonner(im):
    im = recadrer_45(im.convert("RGB"))
    rgb = np.asarray(im).astype(np.float64) / 255.0
    lab = rgb2lab(rgb)
    L, a, b = lab[..., 0], lab[..., 1], lab[..., 2]
    C = np.hypot(a, b)
    # 1. Balance des blancs sur les zones neutres et claires
    neutres = (C < 14) & (L > 55)
    if neutres.sum() > 0.02 * L.size:
        a -= np.median(a[neutres]) - 1.5
        b -= np.median(b[neutres]) - 5.0
    # 2. TSL
    h = np.degrees(np.arctan2(b, a)) % 360
    C = np.hypot(a, b)
    bleus = (h > 200) & (h < 290)
    verts = (h > 100) & (h < 170)
    oranges = (h > 30) & (h < 75)
    C = np.where(bleus, C * 0.85, C)
    C = np.where(verts, C * 0.90, C)
    h = np.where(verts, h - 8, h)
    L = np.where(oranges, np.minimum(L + 5 * np.clip(C / 30, 0, 1), 100), L)
    # 3. Clarté : courbe gamma sur L*, noirs relevés, blancs protégés
    x = np.clip(L / 100, 0, 1)
    moy = max(x.mean(), 0.05)
    g = math.log(CIBLE_L / 100) / math.log(moy) if moy < CIBLE_L / 100 else 1.0
    g = max(g, 0.45)
    y = x ** g
    y = NOIR_MIN / 100 + (0.985 - NOIR_MIN / 100) * y   # noirs mats, blancs à 98,5 maxi
    L = y * 100
    # 4. Chroma : seulement si trop colorée
    a = C * np.cos(np.radians(h)); b = C * np.sin(np.radians(h))
    out = np.clip(lab2rgb(np.dstack([L, a, b])), 0, 1)
    c = m3(out)
    if c > M3_MAX:
        k = max(M3_MAX / c, 0.55)
        out = np.clip(lab2rgb(np.dstack([L, a * k, b * k])), 0, 1)
    return Image.fromarray((out * 255).round().astype(np.uint8))

if __name__ == "__main__":
    etalonner(Image.open(sys.argv[1])).save(sys.argv[2], "WEBP", quality=84, method=6)
