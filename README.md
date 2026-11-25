# Site vitrine Déco Sud

Site de la boutique Déco Sud, 8 rue Gabriel Péri, La Cadière-d'Azur.
Site statique (HTML, CSS, JavaScript), sans e-commerce, sans outil de construction : chaque fichier s'ouvre et se modifie tel quel.

## Les pages
- `index.html` : accueil (coups de cœur, manifeste, ambiances, guides, visite, Instagram)
- `selection.html` : la sélection d'objets, avec « Se renseigner » sur chaque pièce
- `visite.html` : adresse, horaires, plan et formulaire de demande (e-mail ou WhatsApp)
- `mentions-legales.html` : mentions légales et données personnelles

## Ce qu'on modifie le plus souvent
**`assets/donnees.js`** : l'e-mail et le WhatsApp de la boutique, et la liste des objets.

Ajouter ou changer un objet :
1. Mettre la photo dans `assets/img/` (portrait 4:5, environ 1200 px de large, en .jpg).
2. Dans `assets/donnees.js`, copier un bloc `{ ... }` et changer le nom, la marque ou l'artisan, et le chemin de l'image.
3. `coupDeCoeur: true` fait aussi apparaître l'objet sur la page d'accueil.
4. Sans photo (`image: ""`), une cigale colorée s'affiche à la place.

**Liens Instagram** : dans `index.html`, section « Suivez-nous », remplacer chaque lien par l'adresse du post.

**Horaires** : ils apparaissent dans `index.html`, `visite.html` et le pied de page de chaque page ; l'indicateur « ouvert / fermé » se règle dans `assets/main.js` (`SLOTS`, en minutes depuis minuit).

## Couleurs et polices
Dans `assets/style.css`, en haut (`:root`). Polices EB Garamond et DM Sans, hébergées dans `assets/fonts/` (pas d'appel à Google).

## Mise en ligne (GitHub Pages, gratuit)
Settings → Pages → Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
