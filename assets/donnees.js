/* ==========================================================
   DÉCO SUD — LE FICHIER À MODIFIER
   Tout ce qui change souvent est ici : coordonnées et objets.
   ========================================================== */

window.DECOSUD = {

  /* ---------- Coordonnées ---------- */
  contact: {
    email: "",               // À COMPLÉTER, ex. "bonjour@decosud.fr" (sans e-mail, le formulaire propose le téléphone)
    whatsapp: "",            // À COMPLÉTER, format international sans espaces ni +, ex. "33612345678" (vide = bouton masqué)
    telephone: "04 94 98 21 77",
    instagram: "https://www.instagram.com/decosud_83740/"
  },

  /* ---------- Les objets ----------
     Pour ajouter un objet : copier un bloc { ... }, changer les textes.
     - image : chemin de la photo (format portrait 4:5 conseillé, 1200 px de large).
       Laisser "" tant que la photo n'est pas prête : une cigale colorée s'affiche à la place.
     - couleur : couleur de la cigale de remplacement (terra, cobalt, ocre, olive).
     - coupDeCoeur : true = l'objet apparaît aussi sur la page d'accueil.
  */
  pieces: [
    { id: "vase-day-dream",  nom: "Vase Day-Dream",                 par: "Pols Potten",                    image: "assets/img/cc-vase-daydream.jpg",  coupDeCoeur: true },
    { id: "verres-abeille",  nom: "Verres Abeille",                 par: "La Rochère",                     image: "assets/img/cc-verres-abeille.jpg", coupDeCoeur: true },
    { id: "cyanotypes",      nom: "Cyanotypes",                     par: "Bruno Sussi, artiste du Var",    image: "assets/img/cc-cyanotypes.jpg",     coupDeCoeur: true },
    { id: "radassier",       nom: "Radassier, banc du début XIXᵉ",  par: "Pièce ancienne, région d'Avignon", image: "assets/img/cc-radassier.jpg",   coupDeCoeur: true },
    { id: "suspension",      nom: "Suspension en verre",            par: "Luminaires",                     image: "assets/img/cc-suspension.jpg",     coupDeCoeur: true },
    { id: "drap-haomy",      nom: "Drap de plage",                  par: "Haomy",                          image: "assets/img/cc-drap-haomy.jpg",     coupDeCoeur: true },
    { id: "costa-nova",      nom: "Vaisselle en grès",              par: "Costa Nova",                     image: "", couleur: "terra" },
    { id: "broderies",       nom: "Broderies à la main",            par: "Daniela Belfiore",               image: "", couleur: "olive" },
    { id: "pas-dans-la-mer", nom: "Créations",                      par: "Gwenaëlle, Pas dans la mer",     image: "", couleur: "cobalt" }
  ]
};
