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
     - nom / par : titre et sous-titre affichés sous la photo.
     - image : chemin de la photo (format portrait 4:5 conseillé, 1200 px de haut).
       Laisser "" tant que la photo n'est pas prête : une cigale colorée s'affiche à la place.
     - couleur : couleur de la cigale de remplacement (terra, cobalt, ocre, olive).
     - coupDeCoeur : 1, 2, 3… = l'objet apparaît aussi sur la page d'accueil, dans cet ordre.
     Détails affichés seulement dans le volet « Se renseigner » (laisser de côté ce qui ne sert pas) :
     - description : 1 ou 2 phrases.
     - formats : tailles ou modèles, séparés par « · ».
     - coloris : teintes, séparées par « · ».
     - tarif : prix TTC.
     - formatsTarifs : à la place de formats + tarif, quand chaque format a son prix.
     Carte « Nouvelles pièces en chemin » (photo à venir, sans lien) :
       { attente: true, univers: "id-de-l-univers" }
       La couleur de fond alterne toute seule (vert sapin, terracotta, mimosa, sable).
  */
  pieces: [
    /* Noël */
    { id: "creche-resine",    univers: "noel", nom: "Crèche complète en résine",   par: "Aspect bois blanchi & détails dorés", image: "assets/img/creche-resine.jpg", coupDeCoeur: 5,
      formats: "Ensemble complet (7 pièces)", tarif: "109 €",
      description: "Crèche en résine à l'aspect bois sculpté, rehaussée de touches dorées. Réunit Marie, Joseph, l'enfant Jésus, l'ange et les trois Rois mages." },
    { id: "sapin-perles",     univers: "noel", nom: "Suspension sapin en perles",  par: "Brodé à la main",                     image: "assets/img/sapin-perles.jpg",
      coloris: "Vert sapin · Rouge", tarif: "6 € pièce",
      description: "Suspension en forme de sapin, entièrement brodée à la main de perles et de sequins dorés." },
    { id: "assiette-noel",    univers: "noel", nom: "Assiette de Noël en porcelaine", par: "Motif poinsettias & baies d'hiver", image: "assets/img/assiette-noel.jpg",
      tarif: "13 € pièce",
      description: "Assiette en porcelaine décorée de fleurs de Noël et de baies d'hiver sur fond vert olive, pour égayer les tables de fêtes." },
    { id: "tige-clarkia",     univers: "noel", nom: "Tige de 3 fleurs Clarkia",    par: "Tissu rouge & liseré doré",           image: "assets/img/tige-clarkia.jpg",
      tarif: "22 € la tige",
      description: "Tige garnie de trois fleurs Clarkia en tissu rouge profond bordé d'un fil doré, idéale en centre de table ou en vase." },
    { id: "bougie-cloche",    univers: "noel", nom: "Bougie sous cloche",          par: "Verre doré & ruban velours bordeaux", image: "assets/img/bougie-cloche.jpg",
      formatsTarifs: "Petit modèle (32 €) · Grand modèle (47 €)",
      description: "Bougie dans un contenant doré sous cloche en verre transparent, habillée d'un ruban en velours bordeaux." },
    { id: "bougie-velours",   univers: "noel", nom: "Bougie velours brodée",       par: "Velours vert sapin & perles dorées",  image: "assets/img/bougie-velours.jpg",
      formatsTarifs: "Petit modèle, 3 mèches (32 €) · Grand modèle, 4 mèches (42 €)",
      description: "Bougie habillée de velours vert sapin et brodée de sapins en perles dorées, facile à réutiliser ensuite en photophore." },
    { id: "gouttes-led",      univers: "noel", nom: "Gouttes lumineuses LED",      par: "Verre mercurisé doré · 3 formats",    image: "assets/img/gouttes-led.jpg",
      formatsTarifs: "Petit modèle (12 €) · Moyen modèle (17 €) · Grand modèle (22 €)",
      description: "Gouttes lumineuses en verre doré effet mercurisé, éclairées par LED. À poser seules ou en trio." },
    { id: "noel-sapin",       univers: "noel", nom: "Sapin doré",                  par: "Décoration de table",                 image: "assets/img/obj-noel-sapin.jpg" },
    { id: "noel-seau",        univers: "noel", nom: "Seau à champagne doré",       par: "Tables de fête",                      image: "assets/img/obj-noel-seau.jpg" },

    /* Arts de la table */
    { id: "verres-piano",     univers: "arts-de-la-table", nom: "Verres Piano",              par: "Véritable cristallin · Eau & Vin", image: "assets/img/verres-piano.jpg",
      formats: "Verre à eau · Verre à vin", tarif: "9 € pièce",
      description: "Verres à eau et à vin en véritable cristallin, à la silhouette fine et intemporelle." },
    { id: "plat-poisson",     univers: "arts-de-la-table", nom: "Plat ovale Poisson",        par: "Céramique blanche en relief",      image: "assets/img/plat-poisson.jpg", coupDeCoeur: 3,
      tarif: "42 €",
      description: "Grand plat de service ovale en céramique émaillée blanche, délicatement sculpté d'un motif poisson en relief." },
    { id: "carafe-verre",     univers: "arts-de-la-table", nom: "Carafe en verre recyclé",   par: "Verre côtelé teinté olive",        image: "assets/img/carafe-verre-recycle.jpg", coupDeCoeur: 4,
      formatsTarifs: "Petit modèle (28 €) · Grand modèle (32 €)",
      description: "Pichet en verre recyclé côtelé à col festonné, aussi juste en carafe à table qu'en vase de saison." },
    { attente: true, univers: "arts-de-la-table" },
    { attente: true, univers: "arts-de-la-table" },

    /* Matières & lumières */
    { id: "radassier",        univers: "matieres-et-lumieres", nom: "Radassier, banc du début XIXᵉ", par: "Pièce ancienne, région d'Avignon", image: "assets/img/cc-radassier.jpg", coupDeCoeur: 1,
      formats: "Pièce unique", tarif: "800 €",
      description: "Authentique radassier provençal du début du XIXᵉ siècle, chiné en région d'Avignon. Structure en bois patiné et assise paillée." },
    { id: "suspension",       univers: "matieres-et-lumieres", nom: "Suspension en verre et cristal", par: "Fait main",                     image: "assets/img/cc-suspension.jpg", coupDeCoeur: 2,
      tarif: "595 €",
      description: "Suspension en verre et cristal façonnée à la main, dont les pampilles captent et diffusent la lumière avec douceur." },
    { id: "broderies",        univers: "matieres-et-lumieres", nom: "Broderies à la main",           par: "Daniela Belfiore",                 image: "", couleur: "olive" },
    { attente: true, univers: "matieres-et-lumieres" },

    /* Couleurs du Sud */
    { id: "cyanotypes",       univers: "couleurs-du-sud", nom: "Cyanotypes",           par: "Artiste de La Cadière",       image: "assets/img/cc-cyanotypes.jpg",
      formats: "Plusieurs tirages et formats disponibles en boutique",
      description: "Tirages originaux réalisés par une artiste de La Cadière-d'Azur. Chaque pièce est singulière : précisez vos envies dans votre message, Lucie vous enverra les modèles disponibles en boutique." },
    { id: "drap-haomy",       univers: "couleurs-du-sud", nom: "Drap de plage",        par: "Haomy",                       image: "assets/img/cc-drap-haomy.jpg" },
    { attente: true, univers: "couleurs-du-sud" },
    { attente: true, univers: "couleurs-du-sud" },
    { id: "costa-nova",       univers: "couleurs-du-sud", nom: "Vaisselle en grès",    par: "Costa Nova",                  image: "", couleur: "terra" },
    { id: "pas-dans-la-mer",  univers: "couleurs-du-sud", nom: "Créations",            par: "Gwenaëlle, Pas dans la mer",  image: "", couleur: "cobalt" },

    /* Objets de décoration */
    { id: "vase-sculptural",  univers: "objets-de-decoration", nom: "Vase sculptural ajouré",        par: "Céramique",          image: "assets/img/univers-objets.jpg" },
    { id: "jarres-turquoise", univers: "objets-de-decoration", nom: "Jarres en céramique turquoise", par: "Céramique émaillée", image: "assets/img/ambiance-printemps.jpg" },
    { attente: true, univers: "objets-de-decoration" },

    /* Linge & étoffes */
    { id: "plaid-chocolat",   univers: "linge-et-etoffes", nom: "Plaid chocolat",                   par: "Linge de maison",     image: "assets/img/insta-3.jpg" },
    { id: "plaid-ganache-gold", univers: "linge-et-etoffes", nom: "Plaid Ganache ou Gold",          par: "130 × 180 cm",        image: "assets/img/plaid-ganache-gold.jpg",
      coloris: "Ganache · Gold", tarif: "59 €",
      description: "Plaid doux et enveloppant au format généreux (130 × 180 cm), décliné en teintes chaudes ganache et gold." },
    { id: "plaid-tartan",     univers: "linge-et-etoffes", nom: "Plaid Brun & Écru ou Tartan Kaki", par: "130 × 170 cm · Frangé", image: "assets/img/plaid-tartan-brun-kaki.jpg",
      coloris: "Brun & écru · Tartan kaki", tarif: "89 €",
      description: "Plaid épais et moelleux à franges (130 × 170 cm), décliné en carreaux brun et écru ou tartan kaki pour réchauffer un canapé ou un bout de lit." },
    { id: "linge-brode",      univers: "linge-et-etoffes", nom: "Linge de table brodé",             par: "Lin et coton",        image: "assets/img/univers-linge.jpg" },
    { id: "coussins-plaids",  univers: "linge-et-etoffes", nom: "Coussins brodés et plaids",        par: "Linge de maison",     image: "assets/img/insta-4.jpg" }
  ]
};
