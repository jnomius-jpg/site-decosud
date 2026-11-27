# Charte couleurs Déco Sud : comment l'appliquer

La charte complète, rédigée par Jules, est dans `docs/charte-couleurs-decosud.docx` (« Règles de colorimétrie et de grille photo », 27/11/2026). Ce fichier résume comment elle est outillée dans le site.

## À chaque ajout de produit ou revue de la Sélection

1. **Pas d'étalonnage** : décision de Jules du 27/11/2026, les photos d'origine sont affichées telles quelles (aucun filtre CSS non plus). `outils/etalonner.py` reste comme essai, non appliqué.
2. **Ordonner** la grille « Tout » et choisir les tuiles d'ambiance :
   `node outils/exporter-pieces.js > /tmp/pieces.json && python3 outils/ordonner_grille.py /tmp/pieces.json`
   Le script mesure chaque photo d'origine avec `outils/decosud_grille.py` (script de la charte, inchangé), cherche l'ordre qui enfreint le moins de règles pour « Tout » (mélange des univers) et pour chaque univers (sans mélange, avec sa propre photo d'ambiance), écrit `assets/grille.js` et affiche la liste des règles encore enfreintes.
3. **Ne pas compenser une mauvaise photo par son placement** : si une photo reste hors tolérance, la refaire ou la retoucher.
4. **Couleurs** : seulement les tokens de la palette (`:root` de `style.css`), aucune couleur en dur.
5. **Valider à l'œil** : captures ordinateur et mobile, puis la checklist de la charte.

## Écarts connus (27/11/2026)

- Nos photos sont des vues « situation » (objet en boutique, sur lin terracotta ou bois), pas des vues « grille » (objet seul sur fond uni). La cible « grille » (L* 78-92), la part de 50 % de photos N et un M3 moyen de 15 à 30 demandent des photos sur fond sable ou lin.
- L'ordre est calculé pour 3 colonnes. À 4 colonnes (au-delà de 1 440 px) et à 2 colonnes (mobile), les règles de voisinage ne sont pas garanties.
- Les aplats de la direction artistique (bleu du manifeste, cigales, vermillon, mimosa vif) sont hors palette : à arbitrer.
- La charte demande 3 vues par produit ; 14 produits seulement ont une 2e vue.
