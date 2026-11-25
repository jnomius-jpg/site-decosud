/* ==========================================================
   DÉCO SUD — LE FICHIER À MODIFIER
   Tout ce qui change souvent est ici : coordonnées, univers et objets.
   ========================================================== */

/* ---------- Saison de Noël ----------
   true = le pop-up « Noël » s'affiche sur la page d'accueil (une fois par visite).
   false = il disparaît. L'univers Noël, lui, reste dans la Sélection tant qu'il est listé plus bas. */
const SAISON_NOEL_ACTIVE = true;

window.DECOSUD = {

  /* ---------- Coordonnées ---------- */
  contact: {
    email: "decosud83740@gmail.com",
    formspree: "https://formspree.io/f/xppdbjob",   // adresse d'envoi des formulaires (Formspree)
    telephone: "04 94 98 21 77",
    instagram: "https://www.instagram.com/decosud_83740/"
  },

  /* ---------- Les univers (catégories) ----------
     Pour ajouter un univers : copier une ligne, choisir un id court en minuscules
     sans accent ni espace (il sert dans l'adresse : selection.html#mon-id).
     Les filtres de la page Sélection apparaissent dans cet ordre. */
  univers: [
    { id: "noel",                 nom: "Noël" },
    { id: "arts-de-la-table",     nom: "Arts de la table" },
    { id: "matieres-et-lumieres", nom: "Matières & lumières" },
    { id: "couleurs-du-sud",      nom: "Couleurs du Sud" },
    { id: "objets-de-decoration", nom: "Objets de décoration" },
    { id: "linge-et-etoffes",     nom: "Linge & étoffes" }
  ],

  /* ---------- Les objets ----------
     Pour ajouter un objet : copier un bloc { ... }, changer les textes.
     - univers : l'id d'un univers ci-dessus.
     - image : chemin de la photo (format portrait 4:5 conseillé, 1200 px de large).
       Laisser "" tant que la photo n'est pas prête : une cigale colorée s'affiche à la place.
     - couleur : couleur de la cigale de remplacement (terra, cobalt, ocre, olive).
     - coupDeCoeur : true = l'objet apparaît aussi sur la page d'accueil.
  */
  pieces: [
    /* Noël */
    { id: "noel-decorations", univers: "noel", nom: "Décorations brodées de perles", par: "À suspendre au sapin", image: "assets/img/obj-noel-decorations.jpg" },
    { id: "noel-sapin",       univers: "noel", nom: "Sapin doré",                    par: "Décoration de table",  image: "assets/img/obj-noel-sapin.jpg" },
    { id: "noel-seau",        univers: "noel", nom: "Seau à champagne doré",         par: "Tables de fête",       image: "assets/img/obj-noel-seau.jpg" },

    /* Arts de la table */
    { id: "verres-abeille",   univers: "arts-de-la-table", nom: "Verres Abeille",             par: "La Rochère",          image: "assets/img/cc-verres-abeille.jpg", coupDeCoeur: true },
    { id: "pichet",           univers: "arts-de-la-table", nom: "Pichet en faïence blanche",  par: "Arts de la table",    image: "assets/img/obj-pichet.jpg" },
    { id: "serviettes-lin",   univers: "arts-de-la-table", nom: "Serviettes en lin",          par: "Linge de table",      image: "assets/img/obj-serviettes-lin.jpg" },
    { id: "assiettes-bleues", univers: "arts-de-la-table", nom: "Assiette bleu nuit",         par: "Vaisselle",           image: "assets/img/obj-assiettes-bleues.jpg" },
    { id: "photophores",      univers: "arts-de-la-table", nom: "Photophores et bougies",     par: "Tables de fête",      image: "assets/img/obj-photophores.jpg" },

    /* Matières & lumières */
    { id: "suspension",       univers: "matieres-et-lumieres", nom: "Suspension en verre",           par: "Luminaires",                       image: "assets/img/cc-suspension.jpg",     coupDeCoeur: true },
    { id: "vase-day-dream",   univers: "matieres-et-lumieres", nom: "Vase Day-Dream",                par: "Pols Potten",                      image: "assets/img/cc-vase-daydream.jpg",  coupDeCoeur: true },
    { id: "radassier",        univers: "matieres-et-lumieres", nom: "Radassier, banc du début XIXᵉ", par: "Pièce ancienne, région d'Avignon", image: "assets/img/cc-radassier.jpg",      coupDeCoeur: true },
    { id: "broderies",        univers: "matieres-et-lumieres", nom: "Broderies à la main",           par: "Daniela Belfiore",                 image: "", couleur: "olive" },

    /* Couleurs du Sud */
    { id: "cyanotypes",       univers: "couleurs-du-sud", nom: "Cyanotypes",           par: "Bruno Sussi, artiste du Var", image: "assets/img/cc-cyanotypes.jpg", coupDeCoeur: true },
    { id: "drap-haomy",       univers: "couleurs-du-sud", nom: "Drap de plage",        par: "Haomy",                       image: "assets/img/cc-drap-haomy.jpg", coupDeCoeur: true },
    { id: "vases-bleus",      univers: "couleurs-du-sud", nom: "Vases en verre bleu",  par: "Verrerie",                    image: "assets/img/obj-vases-bleus.jpg" },
    { id: "bougies",          univers: "couleurs-du-sud", nom: "Bougies de printemps", par: "Senteurs",                    image: "assets/img/obj-bougies-printemps.jpg" },
    { id: "costa-nova",       univers: "couleurs-du-sud", nom: "Vaisselle en grès",    par: "Costa Nova",                  image: "", couleur: "terra" },
    { id: "pas-dans-la-mer",  univers: "couleurs-du-sud", nom: "Créations",            par: "Gwenaëlle, Pas dans la mer",  image: "", couleur: "cobalt" },

    /* Objets de décoration */
    { id: "vase-sculptural",  univers: "objets-de-decoration", nom: "Vase sculptural ajouré",      par: "Céramique",                image: "assets/img/univers-objets.jpg" },
    { id: "jarres-turquoise", univers: "objets-de-decoration", nom: "Jarres en céramique turquoise", par: "Céramique émaillée",       image: "assets/img/ambiance-printemps.jpg" },
    { id: "crabe-raye",       univers: "objets-de-decoration", nom: "Crabe rayé",                  par: "Les Curiosités de Fred",   image: "assets/img/insta-5.jpg" },

    /* Linge & étoffes */
    { id: "linge-brode",      univers: "linge-et-etoffes", nom: "Linge de table brodé",            par: "Lin et coton",             image: "assets/img/univers-linge.jpg" },
    { id: "coussins-plaids",  univers: "linge-et-etoffes", nom: "Coussins brodés et plaids",       par: "Linge de maison",          image: "assets/img/insta-4.jpg" },
    { id: "plaid-chocolat",   univers: "linge-et-etoffes", nom: "Plaid chocolat",                  par: "Linge de maison",          image: "assets/img/insta-3.jpg" }
  ]
};
