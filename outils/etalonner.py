"""Recette d'étalonnage commune Déco Sud (charte « Règles de colorimétrie et de grille photo »).

Usage : python3 outils/etalonner.py source.jpg sortie.webp
Applique la même recette à toutes les photos, sans réglage photo par photo :
  1. balance des blancs : neutres ramenés à a* ≈ +2,5, b* ≈ +7,5 (chaleur franche, jamais b* < 0 ni > +10) ;
  2. TSL : bleus −15 % de chroma, verts tirés vers le jaune et −10 %, oranges +4 en clarté ;
  3. clarté : courbe qui amène la clarté moyenne vers L* 60 au plus (on éclaircit peu) (vue situation 62-76), puis courbe en S douce
     pour le relief, noirs à L* 8 (mats sans être laiteux), blancs plafonnés à 96,5 ;
  4. couleur : chroma réduite seulement au-delà de M3 52, et jamais de plus de 15 %
     (pas de « beige Instagram ») ;
  5. format 4:5, export WebP.
"""
import sys, math
import numpy as np
from PIL import Image
from skimage.color import rgb2lab, lab2rgb

CIBLE_L = 60.0      # clarté moyenne visée (vue situation 62-76) : on reste dans le bas pour garder de la densité
NOIR_MIN = 8.0      # L* des noirs (8-12) : bas de la fourchette, pour éviter le rendu laiteux
BLANC_MAX = 96.5    # hautes lumières protégées
CONTRASTE = 0.18    # courbe en S douce autour du milieu (plus de relief)
CHAUD_B = 7.5       # b* visé pour les neutres (cible +3 à +8, on prend le haut : plus de chaleur)
CHAUD_A = 2.5       # a* visé pour les neutres (cible 0 à +3)
M3_MAX = 52.0       # au-delà, on retient la couleur (accent : 45-58, jamais plus de 60)

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
    # 1. Balance des blancs sur les zones neutres et claires, calée chaude
    neutres = (C < 14) & (L > 55)
    if neutres.sum() > 0.02 * L.size:
        a -= np.median(a[neutres]) - CHAUD_A
        b -= np.median(b[neutres]) - CHAUD_B
    # 2. TSL
    h = np.degrees(np.arctan2(b, a)) % 360
    C = np.hypot(a, b)
    bleus = (h > 200) & (h < 290)
    verts = (h > 100) & (h < 170)
    oranges = (h > 50) & (h < 75)   # bois, osier, terre cuite claire (pas les rouges)
    C = np.where(bleus, C * 0.85, C)
    C = np.where(verts, C * 0.90, C)
    h = np.where(verts, h - 8, h)
    L = np.where(oranges, np.minimum(L + 4 * np.clip(C / 30, 0, 1), 100), L)
    # 3. Clarté : gamma vers la cible, puis courbe en S (contraste), noirs et blancs bornés
    x = np.clip(L / 100, 0, 1)
    moy = max(x.mean(), 0.05)
    g = math.log(CIBLE_L / 100) / math.log(moy) if moy < CIBLE_L / 100 else 1.0
    y = x ** max(g, 0.75)
    y = y + CONTRASTE * np.sin(2 * np.pi * (y - 0.5)) / (2 * np.pi) * 2   # S douce
    y = np.clip(y, 0, 1)
    y = NOIR_MIN / 100 + (BLANC_MAX / 100 - NOIR_MIN / 100) * y
    L = y * 100
    # 4. Chroma : on garde la vie de la couleur, on ne plafonne que les photos criardes
    a = C * np.cos(np.radians(h)); b = C * np.sin(np.radians(h))
    out = np.clip(lab2rgb(np.dstack([L, a, b])), 0, 1)
    c = m3(out)
    if c > M3_MAX:
        k = max(M3_MAX / c, 0.85)
        out = np.clip(lab2rgb(np.dstack([L, a * k, b * k])), 0, 1)
    return Image.fromarray((out * 255).round().astype(np.uint8))

if __name__ == "__main__":
    etalonner(Image.open(sys.argv[1])).save(sys.argv[2], "WEBP", quality=84, method=6)
