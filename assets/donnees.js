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

  /* ---------- Nuancier « La Sardine » (25 émaux, fait main à Cassis) ----------
     Les pastilles du volet « Se renseigner » des objets qui ont un champ nuancier.
     Dans chaque objet : nuancier: { "Teinte": "assets/img/photo.jpeg" } relie une teinte à sa photo,
     "Teinte": true = la teinte se voit sur la photo principale. Les autres teintes restent au choix. */
  nuancier: [
    ["Chambray", "#7C8FA6"], ["Bleu canard", "#1B4B72"], ["Lagon", "#5BB5B0"], ["Ciel", "#7998B5"], ["Pomme", "#A3C454"],
    ["Herbe", "#3F7035"], ["Hollywood", "#2E7368"], ["Réglisse", "#1E1918"], ["Ficelle", "#B4A48E"], ["Bronze", "#745A32"],
    ["Absinthe", "#C7AD36"], ["Daim", "#C98744"], ["Ocre doré", "#9E6234"], ["Corail", "#D63F26"], ["Pêche", "#EDA892"],
    ["Framboise", "#D94354"], ["Rouge", "#D41C1C"], ["Orange", "#E65117"], ["Jaune", "#ECC01B"], ["Griotte", "#781E1E"],
    ["Goyave", "#E8742B"], ["Terracotta", "#C34A2C"], ["Blanc", "#EAE2D3"], ["Green curry", "#8B8C3B"], ["Indigo", "#232963"]
  ],
  atelierNuancier: "Chaque pièce est façonnée à la main à Cassis par l'atelier La Sardine, puis cuite deux fois : d'abord la terre, ensuite l'émail coloré. Toute la gamme existe dans les 25 coloris du nuancier, en boutique selon stock ou sur commande. Travail artisanal oblige, les dimensions sont données à titre indicatif.",

  /* ---------- Les objets ----------
     Pour ajouter un objet : copier un bloc { ... }, changer les textes.
     - univers : l'id d'un univers ci-dessus, ou son nom tel qu'écrit ci-dessus.
       Plusieurs univers : une liste, ex. univers: ["Arts de la table", "Noël"].
       L'objet apparaît une seule fois dans « Tout », et dans chacun de ses univers.
     - nom / par : titre et sous-titre affichés sous la photo.
     - image : photo principale, celle de la grille (portrait 4:5 conseillé, 1200 px de haut).
       Le nom du fichier s'écrit exactement comme dans le dossier assets/img/ :
       majuscules, espaces et accents compris (ex. "assets/img/Vase Écume bleu.jpg").
       Laisser "" tant que la photo n'est pas prête : une cigale colorée s'affiche à la place.
     - images : photos supplémentaires (facultatif), ex. images: ["assets/img/vase-2.jpg", "assets/img/vase-3.jpg"].
       Elles apparaissent en petites vignettes dans le volet « Se renseigner ».
       Avec un libellé : { src: "assets/img/carnet-lune-noir.jpeg", legende: "Lune noire" }.
       Un clic sur la vignette écrit « Modèle souhaité : Lune noire » dans le message.
       Pour une simple vue (intérieur, détail) : ajouter variante: false.
       La photo principale peut aussi s'écrire ainsi : image: { src: "…", legende: "…" }.
     - couleur : couleur de la cigale de remplacement (terra, cobalt, ocre, olive).
     - coupDeCoeur : 1, 2, 3… = l'objet apparaît aussi sur la page d'accueil, dans cet ordre.
     - cadeau : true = badge « Idée cadeau » avec un petit nœud rouge (sur la carte et dans le volet).
       Pour un autre libellé : cadeau: "Idée cadeau · Secret Santa".
     Détails affichés seulement dans le volet « Se renseigner » (laisser de côté ce qui ne sert pas) :
     - description : 1 ou 2 phrases.
     - formats : tailles ou modèles, séparés par « · ».
     - modeles / coloris / motifs / senteurs : variantes, séparées par « · ».
     - camaieux : camaïeux de couleurs, séparés par « · ».
     - tarif : prix TTC, affiché aussi sous la carte dans la grille (ex. "À partir de 30 €").
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
    { id: "bougies-dorees-led", univers: "noel", nom: "Paire de bougies dorées LED", par: "Finition dorée texturée · La paire", image: "assets/img/bougies doré led.jpeg",
      tarif: "16 € la paire",
      description: "Paire de grands cierges LED à finition dorée texturée et flamme vacillante. Fonctionne avec 2 piles AAA (LR03) par bougie." },
    { id: "sapin-metal-rouge", univers: "noel", nom: "Sapin décoratif en métal rouge et bois", par: "Métal rouge & bois brut · 2 hauteurs", image: "assets/img/Sapin metal rouge.jpeg",
      formatsTarifs: "Petit modèle, 46 cm (14 €) · Grand modèle, 60 cm (22 €)",
      description: "Sapin décoratif à poser composé d'une silhouette étoilée en métal rouge montée sur une branche et un rondin de bois naturel avec écorce. À disposer seul ou en duo sur une console, un buffet ou près du sapin." },
    { id: "sapin-metal-dore", univers: "noel", nom: "Sapin décoratif en métal doré et perles", par: "Métal doré ajouré, perles & nœud en velours · 2 hauteurs", image: "assets/img/Sapin metal dore.jpeg",
      formatsTarifs: "Petit modèle, 27 cm (39 €) · Grand modèle, 45 cm (69 €)",
      description: "Sapin à poser en métal doré ajouré façon feuillage, parsemé de petites perles nacrées et corail, et surmonté d'une étoile soulignée d'un nœud en velours bordeaux. Une pièce délicate qui capte la lumière sur une table de fête ou une console." },
    { id: "cloche-ange", univers: "noel", nom: "Cloche Ange", par: "Finition pailletée, battant en bois & corde en jute", image: "assets/img/Cloche Ange.jpeg",
      coloris: "Blanc · Doré", tarif: "13 € l'unité",
      description: "Cloche décorative en forme d'ange habillée d'un fini pailleté, dotée d'un battant en bois et d'une attache en corde de jute tressée. À suspendre dans le sapin ou à poser sur une table de fête." },
    { id: "renne-pliable", univers: "noel", nom: "Suspension renne pliable", par: "Papier alvéolé · Pliable à plat", image: "assets/img/Suspension renne pliable.jpeg",
      coloris: "Blanc · Camel", tarif: "6 € l'unité",
      description: "Suspension de Noël en papier alvéolé en forme de renne, qui se déploie en volume et se replie à plat après les fêtes pour se ranger facilement. Disponible en blanc ou camel." },
    { id: "mug-noel-verre", univers: "noel", nom: "Mug de Noël en verre", par: "Verre transparent & figurine intérieure · 4 modèles", cadeau: "Idée cadeau · Secret Santa",
      image: { src: "assets/img/Mug de Noël.jpeg", legende: "Les 4 modèles", variante: false },
      images: [
        { src: "assets/img/Mug sapin.jpeg",             legende: "Modèle Sapin",             variante: "Sapin" },
        { src: "assets/img/Mug couronne.jpeg",          legende: "Modèle Couronne",          variante: "Couronne" },
        { src: "assets/img/Mug Bambi.jpeg",             legende: "Modèle Bambi",             variante: "Bambi" },
        { src: "assets/img/Mug bonhomme de neige.jpeg", legende: "Modèle Bonhomme de neige", variante: "Bonhomme de neige" }
      ],
      modeles: "Sapin · Couronne · Bambi · Bonhomme de neige", tarif: "9 € l'unité",
      description: "Mug en verre transparent à anse colorée abritant une figurine de Noël en verre modelé (sapin étoilé, couronne au ruban rouge, faon ou bonhomme de neige). Une attention originale à petit prix, idéale pour un Secret Santa ou un chocolat chaud d'hiver." },
    { id: "boule-baroque", univers: "noel", nom: "Boule de Noël baroque", par: "Arabesques ajourées & paillettes dorées · L'unité", image: "assets/img/Boule de Noël baroque.jpeg",
      tarif: "2 € l'unité",
      description: "Boule de Noël ajourée aux volutes baroques habillée de paillettes dorées, qui laisse filtrer la lumière des guirlandes du sapin. Vendue à l'unité." },

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
    { id: "verres-bord-dore", univers: ["arts-de-la-table", "noel"], cadeau: true, nom: "Série de verres à bord doré", par: "Verre fin & liseré doré · 3 formats", image: "assets/img/Serie de verre bord dore.jpeg",
      formatsTarifs: "Gobelet (11 €) · Flûte à champagne (12 €) · Verre à vin (13 €)",
      description: "Verres transparents soulignés d'un fin liseré doré sur le buvant. Vendus à l'unité en trois formats pour habiller aussi bien une table de fête qu'un dîner d'été." },
    { id: "riviera", univers: "arts-de-la-table", nom: "Collection en grès émaillé « Riviera »", par: "Grès émaillé craquelé & extérieur noir mat",
      image: { src: "assets/img/vaisselle-riviera-ensemble.jpeg", legende: "Assiettes, bols et mug", variante: false },
      images: [
        { src: "assets/img/vaisselle-riviera-assiettes.jpeg", legende: "Les 3 formats d'assiettes", variante: false },
        { src: "assets/img/vaisselle-riviera-service.jpeg",   legende: "Plat ovale de service & saladier", variante: false }
      ],
      formatsTarifs: "Assiette à pain (11 €) · Assiette à dessert (15 €) · Assiette plate (17,50 €) · Mug (14 €) · Bol à pied PM (15 €) · Bol à pied GM (17 €) · Saladier (47 €) · Plat ovale de service (60 €)",
      description: "Collection en grès émaillé turquoise à l'effet craquelé, associant assiettes, mug, bols sur pied et pièces de service à l'extérieur noir mat. Pièces vendues à l'unité pour composer sa table." },
    { id: "couverts-salade-acacia", univers: "arts-de-la-table", nom: "Couverts à salade en acacia", par: "Bois d'acacia · La paire", image: "assets/img/Couverts salade acacia.jpeg",
      tarif: "17 € la paire",
      description: "Paire de couverts à salade plats en bois d'acacia naturel, aux lignes épurées et chaleureuses. Légers et agréables en main pour le service à table." },
    { id: "couteaux-steak", univers: "arts-de-la-table", nom: "Couteaux à steak", par: "Manche en bois naturel & lame dentelée", image: "assets/img/Couteaux à steak.jpeg",
      tarif: "8 € pièce",
      description: "Couteau de table à lame dentelée en acier inoxydable et manche galbé en bois naturel riveté. Vendu à l'unité pour composer son service." },
    { id: "couteau-beurre", univers: "arts-de-la-table", nom: "Couteau à beurre en bois d'acacia", par: "Manche en acacia & lame inox", image: "assets/img/Couteaux beurre bois.jpeg",
      tarif: "8 € pièce",
      description: "Petit couteau tartineur à lame ronde en acier inoxydable et manche tourné en bois d'acacia chaleureux. Vendu à l'unité." },
    { id: "dome-cake", univers: "arts-de-la-table", nom: "Dôme à cake", par: "Plateau en bois foncé, cloche en verre & anse en cuir", image: "assets/img/Dome à cak.jpeg",
      tarif: "49 €",
      description: "Plat à cake rectangulaire en bois foncé surmonté d'une cloche en verre transparent à poignée en cuir naturel. Une pièce sobre et élégante pour présenter et conserver pâtisseries ou fromages." },
    { id: "coupelle-piment", univers: "arts-de-la-table", nom: "Coupelle piment", par: "Céramique émaillée · Passe au four", image: "assets/img/Coupelle piment.jpeg",
      coloris: "Aubergine · Curry · Rhubarbe", tarif: "12 € pièce",
      description: "Coupelle en céramique émaillée en forme de piment, résistante au four. Idéale pour servir des tapas, des condiments ou de petites préparations chaudes." },
    { id: "pot-miel", univers: "arts-de-la-table", nom: "Pot à miel en verre", par: "Verre côtelé & cuillère assortie", image: "assets/img/Pot à miel.jpeg",
      tarif: "16 €",
      description: "Pot à miel en verre transparent côtelé façon ruche, livré avec sa cuillère à miel en verre et son couvercle surmonté d'une petite abeille." },
    { id: "theiere-bleue", univers: "arts-de-la-table", nom: "Théière en grès bleu mat (75 cl)", par: "Grès bleu mat, couvercle en bois & filtre inox · 75 cl",
      image: { src: "assets/img/Théière bleu mat.jpeg", legende: "Vue fermée", variante: false },
      images: [ { src: "assets/img/Théière bleu mat ouverte.jpeg", legende: "Vue ouverte avec filtre inox", variante: false } ],
      tarif: "30 €",
      description: "Théière en grès bleu profond au fini mat, coiffée d'un couvercle en bois naturel et équipée d'un filtre amovible en acier inoxydable pour le thé en vrac. Contenance 75 cl." },
    { id: "theiere-verte", univers: "arts-de-la-table", nom: "Théière en grès vert (1 L)", par: "Grès vert mat, couvercle en céramique & filtre inox · 1 L",
      image: { src: "assets/img/Théière verte.jpeg", legende: "Vue fermée", variante: false },
      images: [ { src: "assets/img/Théière verte ouverte.jpeg", legende: "Vue ouverte avec filtre inox", variante: false } ],
      tarif: "32 €",
      description: "Grande théière en grès vert mat aux lignes droites, dotée d'un couvercle en céramique claire et d'un filtre amovible en acier inoxydable intégré. Contenance 1 L." },
    { id: "carafe-rayures", univers: "arts-de-la-table", nom: "Carafe en céramique à rayures", par: "Céramique émaillée craquelée · Rayures brunes & ocre", image: "assets/img/carafe lignes.jpeg", coupDeCoeur: 6,
      tarif: "54 €",
      description: "Carafe généreuse en céramique émaillée à l'effet craquelé et finement moucheté, rythmée de rayures verticales brunes et ocre peintes à la main. Aussi belle sur une table d'été que détournée en vase." },
    { id: "poissons-dori", univers: "arts-de-la-table", nom: "Collection « Dori », poissons en grès émaillé", par: "Grès émaillé bleu profond & vert céladon · 4 formats", image: "assets/img/Poisson en grès.jpeg",
      formatsTarifs: "Plat de service (41 €) · Plat de service long (49 €) · Coupelle ronde (17 €) · Coupelle longue (15 €)",
      description: "Série de plats et coupelles en forme de poisson en grès émaillé, mêlant un bord vert céladon à un cœur bleu outremer intense. Déclinée en quatre formats à associer pour les apéritifs et les grandes tablées d'été." },
    { id: "vaisselle-brisa", univers: "arts-de-la-table", nom: "Vaisselle en grès, gamme « Brisa »", par: "Grès émaillé crème & bordure bleu océan · 4 pièces", image: "assets/img/Vaisselle en grès. Gamme BRISA.jpeg",
      formatsTarifs: "Carafe (44 €) · Mug (14 €) · Petite assiette (17,50 €) · Coupelle (16 €)",
      description: "Collection de vaisselle en grès émaillé blanc cassé au fini brillant, soulignée sur le bord d'un émail réactif bleu océan aux nuances fondues. Pièces vendues à l'unité pour composer son service." },
    { id: "coquetiers", univers: ["noel", "arts-de-la-table"], nom: "Ensemble de 4 coquetiers", par: "Céramique motif feuillage · Coffret cadeau", cadeau: true,
      image: { src: "assets/img/Ensemble de 4 coquetiers. 1.jpeg", legende: "Présentation avec coffret cadeau", variante: false },
      images: [ { src: "assets/img/Ensemble de 4 coquetiers. 2.jpeg", legende: "Vue rapprochée des 4 coquetiers", variante: false } ],
      tarif: "16 € le coffret de 4",
      description: "Coffret cadeau réunissant quatre coquetiers en céramique sculptée façon feuilles de chou (deux vert céladon et deux blanc cassé), livrés dans leur boîte rayée dorée nouée d'un ruban en raphia. Une attention prête à offrir pour les fêtes ou les petits-déjeuners du dimanche." },
    { id: "beurrier-eau", univers: "arts-de-la-table", nom: "Beurrier à eau en grès", par: "Grès émaillé · Conservation naturelle · 2 coloris",
      image: { src: "assets/img/Beurrier à eau en grès.jpeg", legende: "Les 2 coloris", variante: false },
      images: [
        { src: "assets/img/Beurrier à eau en grès vert.jpeg",  legende: "Coloris Vert",  variante: "Vert" },
        { src: "assets/img/Beurrier à eau en grès blanc.jpeg", legende: "Coloris Blanc", variante: "Blanc" }
      ],
      coloris: "Vert · Blanc", tarif: "30 € l'unité",
      description: "Beurrier conservateur traditionnel à eau en grès émaillé, orné de l'inscription BEURRE en relief, qui permet de conserver le beurre tendre et frais à température ambiante. Disponible en vert olive ou blanc moucheté." },
    { id: "couverts-vitoria", univers: "arts-de-la-table", nom: "Couverts « Vitoria Transparente »", par: "Manches transparents facettés & virole ciselée · Lave-vaisselle", image: "assets/img/couverts VITORIA TRANSPARENTE.jpeg",
      formatsTarifs: "Fourchette (16 €) · Cuillère à soupe (16 €) · Couteau (16 €) · Cuillère à café (14 €)",
      description: "Modèle intemporel de la boutique : couverts en acier inoxydable de la gamme Vitoria Transparente, mariant un manche facetté translucide à une bague ciselée d'inspiration classique. Compatibles avec le lave-vaisselle et vendus à l'unité pour composer son service." },
    { id: "couverts-service-vitoria", univers: "arts-de-la-table", nom: "Couverts de service « Vitoria Transparente »", par: "Acier inoxydable, virole ciselée & manche transparent · 5 pièces", image: "assets/img/Couverts à service VITORIA TRANSPARENTE.jpeg",
      formatsTarifs: "Couteau à beurre (14 €) · Couteau à fromage (18 €) · Couteau à gâteaux (30 €) · Cuillère à salade (28 €) · Pelle à tarte (39 €)",
      description: "Couverts de service assortis de la gamme Vitoria Transparente, dotés du même manche facetté transparent et d'une bague ciselée. Cinq pièces vendues à l'unité pour le service du beurre, des fromages, des salades ou des desserts (compatibles lave-vaisselle)." },
    { id: "serviette-monza", univers: "arts-de-la-table", nom: "Serviette / set de table « Monza »", par: "Lin et coton · Double usage · 36 × 48 cm", image: "assets/img/MONZA Serviette set de table.jpeg",
      coloris: "Blanc · Gold", tarif: "8 € pièce",
      description: "Pièce polyvalente de la gamme Monza tissée en lin et coton (36 × 48 cm), pensée pour se glisser aussi bien en serviette de table généreuse qu'en set individuel. Sa bordure contrastée tissée souligne la finesse du grain, en version blanc lumineux ou gold naturel." },
    { id: "nappe-monza", univers: "arts-de-la-table", nom: "Nappe « Monza »", par: "Lin et coton · 160 × 250 cm · 2 coloris", image: "assets/img/Nappe MONZA.jpeg",
      coloris: "Blanc · Gold", tarif: "105 €",
      description: "Grande nappe assortie de la gamme Monza en lin et coton (160 × 250 cm), encadrée sur tout son pourtour d'un large galon tissé. Son tombé souple et texturé habille les grandes tablées d'une élégance naturelle et sans apprêt, déclinée en blanc ou en gold." },
    { id: "tablier-japonais", univers: "arts-de-la-table", nom: "Tablier japonais en toile texturée", par: "Toile épaisse texturée · Bretelles croisées · 6 coloris",
      image: { src: "assets/img/Tablier japonais naturel.jpeg", legende: "Coloris Naturel", variante: "Naturel" },
      images: [
        { src: "assets/img/Tablier japonais Encre kaki.jpeg",        legende: "Coloris Kaki & Encre",            variante: false },
        { src: "assets/img/Tablier japonais ganache.jpeg",           legende: "Coloris Terre brûlée, Encre & Kaki", variante: false },
        { src: "assets/img/Tablier japonais terre brulee gold.jpeg", legende: "Coloris Ganache & Gold",          variante: false }
      ],
      coloris: "Naturel · Encre · Kaki · Terre brûlée · Gold · Ganache", tarif: "42 €",
      description: "Tablier japonais en toile épaisse et souple à larges bretelles croisées dans le dos, qui s'enfile d'un geste sans lien à nouer. Doté d'une poche plaquée profonde sur le devant, il accompagne la cuisine, le jardin ou l'atelier dans six teintes sourdes et intemporelles." },
    { id: "serviettes-papier", univers: ["arts-de-la-table", "noel"], nom: "Serviettes en papier illustrées", par: "Papier imprimé · 10 motifs au choix · Le paquet",
      image: { src: "assets/img/WhatsApp Image 2026-11-27 at 10.17.34.jpeg", legende: "Sélection de motifs, baies d'églantier au premier plan", variante: false },
      images: [
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.17.35.jpeg",     legende: "Baies d'églantier" },
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.17.34 (2).jpeg", legende: "Champagne & feux d'artifice" },
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.17.34 (1).jpeg", legende: "Happy New Year" },
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.17.35 (1).jpeg", legende: "Couronne de Noël" },
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.17.35 (2).jpeg", legende: "Sapin étoilé doré" },
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.17.35 (7).jpeg", legende: "Feuillage taupe" },
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.17.35 (6).jpeg", legende: "Jardin fleuri & oiseau" },
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.17.35 (5).jpeg", legende: "Grandes feuilles vert sauge" },
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.17.35 (4).jpeg", legende: "Poisson bleu" },
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.17.35 (3).jpeg", legende: "Homard rouge" }
      ],
      modeles: "Baies d'églantier · Champagne & feux d'artifice · Happy New Year · Couronne de Noël · Sapin étoilé doré · Feuillage taupe · Jardin fleuri & oiseau · Grandes feuilles vert sauge · Poisson bleu · Homard rouge", tarif: "5 € le paquet",
      description: "Collection de serviettes en papier illustrées aux motifs festifs, botaniques ou marins : couronne de houx, sapin étoilé doré, réveillon, feuillages délicats, fleurs sauvages, poisson ou homard. Une touche graphique et soignée pour dresser une table de fête comme un déjeuner d'été." },

    /* Collection « La Sardine » (fait main à Cassis) : nuancier des 25 coloris.
       nuancier : la teinte et sa photo ; les autres teintes restent sélectionnables (en boutique selon stock ou sur commande). */
    { id: "sardine-tasse-cafe", univers: "arts-de-la-table", nom: "Tasse à café « La Sardine »", par: "Céramique faite main à Cassis · Double cuisson · 25 coloris",
      image: { src: "assets/img/Couverture TC la sardine.jpeg", legende: "Teintes chaudes et naturelles", variante: false },
      images: [ { src: "assets/img/WhatsApp Image 2026-11-27 at 10.26.50.jpeg", legende: "Teintes bleues et vertes", variante: false } ],
      nuancier: {
        "Chambray": "assets/img/TC Couleur chambray.jpeg", "Bleu canard": "assets/img/TC Couleur Bleu canard.jpeg", "Lagon": "assets/img/Lagon.jpeg",
        "Ciel": "assets/img/TC couleur ciel.jpeg", "Pomme": "assets/img/TC couleur Pomme.jpeg", "Herbe": "assets/img/TC couleur herbe.jpeg",
        "Hollywood": "assets/img/TC couleur Hollywood.jpeg", "Réglisse": "assets/img/TC couleur Réglisse.jpeg", "Ficelle": "assets/img/TC couleur Ficelle.jpeg",
        "Bronze": "assets/img/TC couleur Bronze.jpeg", "Absinthe": "assets/img/TC couleur Absinthe.jpeg", "Daim": "assets/img/TC couleur Daim.jpeg",
        "Ocre doré": "assets/img/TC couleur Ocre doré.jpeg", "Corail": "assets/img/TC couleur Corail.jpeg", "Pêche": "assets/img/TC couleur Pêche.jpeg",
        "Framboise": "assets/img/TC couleur Framboise.jpeg", "Rouge": "assets/img/TC couleur Rouge.jpeg", "Orange": "assets/img/TC couleur Orange.jpeg",
        "Jaune": "assets/img/TC couleur Jaune.jpeg"
      },
      tarif: "12 € pièce",
      description: "Tasse à café sans anse façonnée à la main à Cassis par l'atelier La Sardine. Sa ligne pure, soulignée d'un fin liseré de terre brute sur le buvant, se décline dans une palette vibrante de 25 émaux pour twister l'heure du café." },
    { id: "sardine-ramequin", univers: "arts-de-la-table", nom: "Ramequin « La Sardine »", par: "Céramique faite main à Cassis · Double cuisson · 25 coloris",
      image: { src: "assets/img/Couverture Ramequins la Sardine.jpeg", legende: "Trio Griotte, Goyave & Terracotta", variante: false },
      nuancier: { "Griotte": "assets/img/Ramequin couleur Griotte.jpeg", "Goyave": "assets/img/Ramequin couleur Goyave.jpeg", "Terracotta": "assets/img/Ramequin couleur Terracotta.jpeg" },
      tarif: "18 € l'unité",
      description: "Ramequin évasé façonné à la main à Cassis par La Sardine. Sa silhouette nette et lumineuse accompagne aussi bien les mises en bouche de l'apéritif que les sauces, condiments ou desserts individuels." },
    { id: "sardine-bol-the", univers: "arts-de-la-table", nom: "Bol à thé « La Sardine »", par: "Céramique faite main à Cassis · Double cuisson · 25 coloris",
      image: { src: "assets/img/Couverture Bol à thé.jpeg", legende: "Duo Blanc & Green curry", variante: false },
      nuancier: { "Blanc": "assets/img/Bol à thé blanc.jpeg", "Green curry": "assets/img/Bol à thé green curry.jpeg" },
      tarif: "18 € l'unité",
      description: "Bol à thé monté sur un délicat petit pied, façonné à la main à Cassis par La Sardine. Agréable au creux des mains et rehaussé d'un fin filet de terre brute sur le bord, il accueille thés, infusions, bouillons ou desserts." },
    { id: "sardine-assiette-creuse", univers: "arts-de-la-table", nom: "Assiette creuse « La Sardine »", par: "Céramique faite main à Cassis · Double cuisson · 25 coloris",
      image: { src: "assets/img/Assiette creuse 28€. Couleur indigo.jpeg", legende: "Duo Lagon & Indigo", variante: false },
      nuancier: { "Indigo": true, "Lagon": true },
      tarif: "28 € l'unité",
      description: "Assiette creuse façonnée à la main à Cassis par La Sardine. Son galbe généreux et intemporel, souligné d'un léger trait de terre brute sur le marli, met en valeur pâtes, plats mijotés ou salades composées." },
    { id: "sardine-huilier", univers: "arts-de-la-table", nom: "Huilier en céramique « La Sardine »", par: "Céramique faite main à Cassis · Bec verseur inox · 3 tailles & 25 coloris",
      image: { src: "assets/img/WhatsApp Image 2026-11-27 at 10.56.04.jpeg", legende: "GM en Herbe, PM en Chambray, BB en Pêche", variante: false },
      nuancier: { "Herbe": true, "Chambray": true, "Pêche": true },
      formatsTarifs: "Format BB (25 €) · Petit modèle PM (29 €) · Grand modèle GM (35 €)", tarif: "À partir de 25 €",
      description: "Huilier conique façonné à la main à Cassis par La Sardine, équipé d'un bouchon en liège et d'un bec verseur en acier inoxydable. Décliné en trois tailles (BB, PM et GM) pour apporter une note méditerranéenne de la cuisine jusqu'à la table." },
    { id: "sardine-saladier", univers: "arts-de-la-table", nom: "Saladier en céramique « La Sardine »", par: "Céramique faite main à Cassis · Double cuisson · 2 tailles & 25 coloris",
      image: { src: "assets/img/WhatsApp Image 2026-11-27 at 10.58.43.jpeg", legende: "GM en Blanc, PM en Absinthe", variante: false },
      nuancier: { "Blanc": true, "Absinthe": true },
      formatsTarifs: "Petit modèle PM, Ø 19 × H. 11 cm (45 €) · Grand modèle GM, Ø 24 × H. 14 cm (60 €)", tarif: "À partir de 45 €",
      description: "Saladier généreux sur petit pied façonné à la main à Cassis par La Sardine, rythmé de fines stries de tournage intérieures et bordé d'un liseré de terre brute. Proposé en deux formats (PM et GM)." },
    { id: "sardine-bol-dejeuner", univers: "arts-de-la-table", nom: "Grand bol déjeuner « La Sardine »", par: "Céramique faite main à Cassis · Ø 14 × H. 8,5 cm · 25 coloris",
      image: { src: "assets/img/WhatsApp Image 2026-11-27 at 11.01.06.jpeg", legende: "Duo Ficelle & Herbe", variante: false },
      nuancier: { "Ficelle": true, "Herbe": true },
      tarif: "19 € l'unité",
      description: "Grand bol déjeuner (environ Ø 14 × H. 8,5 cm) façonné à la main à Cassis par La Sardine. Sa contenance généreuse et ses lignes pures en font le compagnon idéal du petit-déjeuner comme d'un velouté du soir." },
    { id: "sardine-saladier-conique", univers: "arts-de-la-table", nom: "Saladier conique « La Sardine »", par: "Céramique faite main à Cassis · Ø 22 × H. 9 cm · 25 coloris",
      image: { src: "assets/img/WhatsApp Image 2026-11-27 at 11.03.01 (1).jpeg", legende: "Duo Ficelle & Lagon, de profil", variante: false },
      nuancier: { "Ficelle": true, "Lagon": "assets/img/WhatsApp Image 2026-11-27 at 11.03.01.jpeg" },
      tarif: "46 € l'unité",
      description: "Saladier à la silhouette conique évasée (environ Ø 22 × H. 9 cm) façonné à la main à Cassis par La Sardine. Ses stries de tournage intérieures captent la lumière et subliment les salades et plats à partager." },
    { id: "sardine-plat-gratin", univers: "arts-de-la-table", nom: "Plat à gratin / saladier « La Sardine »", par: "Céramique faite main à Cassis · Passe au four · 2 tailles & 25 coloris",
      image: { src: "assets/img/WhatsApp Image 2026-11-27 at 11.05.38 (1).jpeg", legende: "PM en Bleu canard, GM en Orange, de profil", variante: false },
      nuancier: { "Bleu canard": true, "Orange": "assets/img/WhatsApp Image 2026-11-27 at 11.05.38.jpeg" },
      formatsTarifs: "Petit modèle PM, Ø 22 × H. 7 cm (50 €) · Grand modèle GM, Ø 26 × H. 8 cm (60 €)", tarif: "À partir de 50 €",
      description: "Pièce polyvalente façonnée à la main à Cassis par La Sardine, conçue pour passer directement du four à la table, aussi bien comme plat à gratin que comme saladier de service. Disponible en deux formats (PM et GM)." },
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
    { id: "racine-teck", univers: "matieres-et-lumieres", nom: "Coupe en racine de teck", par: "Bois brut · Pièce unique", image: "assets/img/Racine de tek.jpeg",
      formats: "Pièce unique", tarif: "149 €",
      description: "Grande coupe sculptée dans une racine de teck naturelle, aux courbes organiques et au veinage chaleureux. Une pièce unique qui habille une table ou une console à elle seule." },
    { id: "lampe-zigzag", univers: "matieres-et-lumieres", nom: "Lampe « Zigzag » terracotta", par: "Métal mat terracotta", image: "assets/img/Lampe zigzag.jpeg",
      tarif: "89 €",
      description: "Lampe à poser en métal mat couleur terracotta, au pied ondulé plein de caractère et à l'abat-jour coupole. Diffuse une lumière douce et chaleureuse le soir venu." },
    { id: "bougeoir-marbre", univers: "matieres-et-lumieres", nom: "Bougeoir en marbre", par: "Marbre naturel · Volumes géométriques", image: "assets/img/Bougeoir en marbre.jpeg",
      formatsTarifs: "Petit modèle, marbre terre (47 €) · Grand modèle, marbre blanc (49 €)",
      description: "Bougeoir sculptural composé de formes géométriques empilées en marbre naturel veiné. À poser seul ou en duo sur une table, une cheminée ou une console." },
    { id: "bougies-torsadees-led", univers: ["matieres-et-lumieres", "noel"], cadeau: true, nom: "Paire de bougies torsadées LED", par: "Véritable paraffine crème · La paire", image: "assets/img/Bougie torsadée.jpeg",
      tarif: "14 € la paire",
      description: "Paire de bougies LED torsadées en véritable paraffine crème, à flamme vacillante chaleureuse. Fonctionne avec 2 piles AAA (LR03) par bougie." },
    { id: "bougie-parfumee", univers: ["matieres-et-lumieres", "noel"], cadeau: true, nom: "Bougie parfumée", par: "La Bastide des Senteurs · Cire végétale & parfums de Grasse", image: "assets/img/Bougie parfumée.jpeg",
      senteurs: "Basilic menthe · Figue de Provence · Velours musqué · Feuille de tomate · Oud d'Orient · Nuage de coton · Cachemire & Soie · Escale marine · Fleur d'oranger · Massif des Alpilles", tarif: "39 €",
      description: "Bougie parfumée coulée en cire végétale avec mèche en coton et parfums de Grasse (La Bastide des Senteurs, Saint-Rémy-de-Provence). Présentée dans un verre noir orné d'un médaillon doré et livrée dans son coffret, déclinée en dix senteurs." },
    { id: "bougies-chandelles-colorees", univers: "matieres-et-lumieres", nom: "Bougies chandelles colorées", par: "Cire légèrement givrée · Mèche coton · Palette de teintes",
      image: { src: "assets/img/WhatsApp Image 2026-11-27 at 10.20.41 (1).jpeg", legende: "Camaïeu naturel, sable & camel", variante: "Tons naturels & camel" },
      images: [
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.20.41 (2).jpeg", legende: "Camaïeu anthracite, gris & ardoise",   variante: "Anthracite & ardoise" },
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.20.41 (3).jpeg", legende: "Camaïeu bordeaux & ocre",              variante: "Bordeaux & ocre" },
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.20.41 (4).jpeg", legende: "Camaïeu rose poudré, mauve & orange", variante: "Rose & orange" },
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.20.41 (5).jpeg", legende: "Camaïeu bleu cobalt & bleu grisé",    variante: "Bleu cobalt & grisé" },
        { src: "assets/img/WhatsApp Image 2026-11-27 at 10.20.41.jpeg",     legende: "Camaïeu vert sauge, forêt & anis",     variante: "Vert sauge & forêt" }
      ],
      camaieux: "Tons naturels & camel · Anthracite & ardoise · Bordeaux & ocre · Rose & orange · Bleu cobalt & grisé · Vert sauge & forêt", tarif: "2,90 € pièce",
      description: "Bougies chandelles effilées à la cire légèrement givrée et aux longues mèches en coton tressé, déclinées dans une riche palette de teintes sourdes ou solaires. Vendues à l'unité pour composer des harmonies de couleurs sur mesure au fil des saisons." },
    { id: "bougies-chandelles-nacrees", univers: ["matieres-et-lumieres", "noel"], nom: "Bougies chandelles nacrées", par: "Cire scintillante nacrée · Mèche coton · 5 coloris", image: "assets/img/WhatsApp Image 2026-11-27 at 10.20.57.jpeg",
      coloris: "Champagne · Or bronze · Argent · Rouge carmin · Vert sapin", tarif: "3,80 € pièce",
      description: "Bougies chandelles effilées habillées d'un fini nacré subtilement scintillant et dotées d'une mèche en coton tressé. Déclinées en cinq nuances festives, champagne, or bronze, argent, rouge carmin et vert sapin, pour réchauffer une table de réveillon ou illuminer un bougeoir. Vendues à l'unité." },
    { attente: true, univers: "matieres-et-lumieres" },

    /* Couleurs du Sud */
    { id: "cyanotypes",       univers: "couleurs-du-sud", nom: "Cyanotypes",           par: "Artiste de La Cadière",       image: "assets/img/cc-cyanotypes.jpg",
      formats: "Plusieurs tirages et formats disponibles en boutique",
      description: "Tirages originaux réalisés par un artiste de La Cadière-d'Azur. Chaque pièce est singulière : précisez vos envies dans votre message, Lucie vous enverra les modèles disponibles en boutique." },
    { id: "costa-nova",       univers: "couleurs-du-sud", nom: "Vaisselle en grès",    par: "Costa Nova",                  image: "", couleur: "terra" },
    { id: "pas-dans-la-mer",  univers: "couleurs-du-sud", nom: "Créations",            par: "Gwenaëlle, Pas dans la mer",  image: "", couleur: "cobalt" },
    { id: "carnets-ghana", univers: "couleurs-du-sud", nom: "Carnets en tissu du Ghana", par: "Tissu du Ghana & élastique · 4 motifs",
      image: { src: "assets/img/carnet-ghana-jaune.jpeg", legende: "Vagues jaune & brun" },
      images: [
        { src: "assets/img/carnet-ghana-rose-orange.jpeg",   legende: "Géométrique rose & orange" },
        { src: "assets/img/carnet-ghana-fuchsia-jaune.jpeg", legende: "Triangles fuchsia & jaune" },
        { src: "assets/img/carnet-ghana-vert.jpeg",          legende: "Végétal vert & bordeaux" },
        { src: "assets/img/carnet-ghana-interieur.jpeg",     legende: "Vue intérieure, pages lignées datables", variante: false }
      ],
      motifs: "Vagues jaune & brun · Géométrique rose & orange · Triangles fuchsia & jaune · Végétal vert & bordeaux", tarif: "21 € l'unité",
      description: "Carnet habillé d'un tissu du Ghana aux motifs graphiques et lumineux, maintenu par un élastique noir. Intérieur à pages lignées datables, décliné en quatre imprimés." },
    { attente: true, univers: "couleurs-du-sud" },
    { attente: true, univers: "couleurs-du-sud" },

    /* Objets de décoration */
    { id: "vase-sculptural",  univers: "objets-de-decoration", nom: "Vase sculptural ajouré",        par: "Céramique",          image: "assets/img/univers-objets.jpg" },
    { id: "carnet-velours-floral", univers: "objets-de-decoration", nom: "Carnet velours imprimé floral", par: "Velours imprimé & fermeture élastique", image: "assets/img/Carnet velours floral.jpeg",
      coloris: "Pêche & bordeaux · Bleu paon", tarif: "15 € pièce",
      description: "Carnet habillé de velours doux à imprimé floral, maintenu par un élastique assorti. Un bel objet du quotidien ou une petite idée cadeau." },
    { id: "carnet-velours-cotele", univers: "objets-de-decoration", nom: "Carnet en velours côtelé", par: "Velours côtelé · 5 coloris", image: "assets/img/Carnet en velours côtelé.jpeg",
      coloris: "Ocre · Chocolat · Vert sauge · Écru · Vieux rose", tarif: "15 € pièce",
      description: "Carnet recouvert de velours côtelé à fermeture élastique, décliné en cinq teintes douces et chaleureuses." },
    { id: "carnet-velours-leopard", univers: "objets-de-decoration", nom: "Carnet velours imprimé léopard", par: "Velours imprimé & fermeture élastique", image: "assets/img/Carnet velours leopard.jpeg",
      coloris: "Taupe · Ocre", tarif: "15 € pièce",
      description: "Carnet en velours imprimé léopard à fermeture élastique, décliné en deux nuances pour accompagner vos notes du quotidien." },
    { id: "carnets-illustres", univers: "objets-de-decoration", nom: "Carnets illustrés", par: "Couverture souple · 5 motifs au choix",
      image: { src: "assets/img/carnet-soleil-bleu.jpeg", legende: "Soleil bleu nuit" },
      images: [
        { src: "assets/img/carnet-corail-rose.jpeg",    legende: "Corail rose" },
        { src: "assets/img/carnet-soleils-corail.jpeg", legende: "Soleils corail" },
        { src: "assets/img/carnet-lune-noir.jpeg",      legende: "Lune noire" },
        { src: "assets/img/carnet-oeil-ecru.jpeg",      legende: "Œil & lune écru" },
        { src: "assets/img/carnet-interieur.jpeg",      legende: "Vue intérieure, pages lignées", variante: false }
      ],
      motifs: "Soleil bleu nuit · Corail rose · Soleils corail · Lune noire · Œil & lune écru", tarif: "9 € l'unité",
      description: "Carnet souple à pages lignées, décliné en cinq couvertures illustrées aux motifs solaires et marins (soleil doré, corail, lune étoilée)." },
    { id: "vase-anneaux", univers: "objets-de-decoration", nom: "Vase en grès à anneaux", par: "Grès texturé écru · 1 ou 2 anneaux", image: "assets/img/Vase en grès 1 ou 2 anneaux. 16€ 1 anneau 20€ 2 anneaux.jpeg",
      formatsTarifs: "Modèle 1 anneau (16 €) · Modèle 2 anneaux (20 €)",
      description: "Vase sculptural en grès écru à la finition légèrement texturée, ajouré d'un ou deux anneaux superposés. À disposer seul ou en duo, vide ou accompagné de quelques tiges séchées." },
    { id: "vase-gres-blanc-34", univers: "objets-de-decoration", nom: "Vase en grès blanc texturé (34 cm)", par: "Grès blanc mat texturé · H. 34 cm", image: "assets/img/Vase 34cm grès blanc.jpeg",
      tarif: "58 €",
      description: "Grand vase ovoïde de 34 cm en grès blanc mat, délicatement strié et texturé, terminé par un petit col resserré. Une silhouette sobre et lumineuse qui met en valeur quelques branches séchées ou se suffit à elle-même." },
    { id: "vase-gres-beige-61", univers: "objets-de-decoration", nom: "Grand vase sculptural en grès beige rosé (61 cm)", par: "Grès mat beige rosé · H. 61 cm", image: "assets/img/Vase 61cl grès beige.jpeg",
      tarif: "85 €",
      description: "Vase sculptural de 61 cm en grès mat beige rosé, façonné en double volume à la taille pincée. Une pièce maîtresse au toucher minéral qui structure l'espace au sol comme sur un buffet bas." },
    { id: "vase-verre-34", univers: "objets-de-decoration", nom: "Vase en verre transparent (34 cm)", par: "Verre transparent · Ligne épurée · H. 34 cm", image: "assets/img/Vase 34cm en verre.jpeg",
      tarif: "59 €",
      description: "Grand vase en verre transparent aux lignes épurées, mêlant volume généreux et col droit délicat. Intemporel et lumineux, idéal pour accueillir de grands bouquets ou des feuillages élancés." },
    { id: "vase-gres-sable-28", univers: "objets-de-decoration", nom: "Vase en grès sablé à empreintes florales (28 cm)", par: "Grès sablé & motifs botaniques · H. 28 cm", image: "assets/img/Vase 28cl en grès sablé.jpeg",
      tarif: "64 €",
      description: "Vase de 28 cm sur piédouche en grès brut à l'aspect sablé, orné d'empreintes florales brunes inspirées des herbiers sauvages et d'un col évasé." },
    { id: "oiseau-terre-cuite", univers: "objets-de-decoration", nom: "Oiseau en terre cuite sur pied métal", par: "Terre cuite émaillée craquelée & pattes en métal · 4 coloris",
      image: { src: "assets/img/Oiseau en terre cuite sur pied métal.jpeg", legende: "Les 4 coloris", variante: false },
      images: [
        { src: "assets/img/Oiseau en terre cuite gris.jpeg",  legende: "Coloris Gris",  variante: "Gris" },
        { src: "assets/img/Oiseau en terre cuite bleu.jpeg",  legende: "Coloris Bleu",  variante: "Bleu" },
        { src: "assets/img/Oiseau en terre cuite vert.jpeg",  legende: "Coloris Vert",  variante: "Vert" },
        { src: "assets/img/Oiseau en terre cuite blanc.jpeg", legende: "Coloris Blanc", variante: "Blanc" }
      ],
      coloris: "Gris · Bleu · Vert · Blanc", tarif: "9 € l'unité",
      description: "Figurine décorative d'oiseau en terre cuite émaillée à l'effet craquelé et patiné, montée sur de fines pattes en métal blanchi. Déclinée en quatre teintes douces (gris, bleu céladon, vert et blanc cassé) à poser sur une étagère, un bureau ou une table." },
    { id: "pot-kalaari", univers: "objets-de-decoration", nom: "Pot en terre avec couvercle « Kalaari »", par: "Terre cuite peinte à la main · Motifs graphiques", image: "assets/img/Pot en terre avec couvercle.jpeg",
      tarif: "59 €",
      description: "Pot ventru en terre cuite patinée et son couvercle assorti, décorés à la main de motifs géométriques ocre rouge, écru et noir. Une pièce artisanale de caractère à poser sur un buffet, une console ou une étagère." },
    { id: "bougeoir-altesse", univers: "objets-de-decoration", nom: "Bougeoir « Altesse » en verre", par: "Verre transparent moulé · H. 30 cm ou 35 cm", image: "assets/img/Bougeoir ALTESSE.jpeg",
      formatsTarifs: "Petit modèle, H. 30 cm (30 €) · Grand modèle, H. 35 cm (35 €)", tarif: "À partir de 30 €",
      description: "Bougeoir élancé en verre transparent moulé de la ligne Altesse, au fût finement côtelé ponctué de bagues et d'une sphère travaillée. Ses deux hauteurs permettent de composer des jeux de rythme et de capter la lumière de la flamme sur une table de fête ou une console." },
    { id: "bougeoir-coins", univers: "objets-de-decoration", nom: "Bougeoir « Coins » en verre soufflé", par: "Verre soufflé & pastilles fumées · H. 22 cm ou 27 cm",
      image: { src: "assets/img/Bougeoir coins.jpeg", legende: "Duo grand et petit modèle", variante: false },
      images: [
        { src: "assets/img/Bougeoir coins GM.jpeg", legende: "Grand modèle, H. 27 cm", variante: "Grand modèle, H. 27 cm (68 €)" },
        { src: "assets/img/Bougeoir coins PM.jpeg", legende: "Petit modèle, H. 22 cm", variante: "Petit modèle, H. 22 cm (56 €)" }
      ],
      formatsTarifs: "Petit modèle, H. 22 cm (56 €) · Grand modèle, H. 27 cm (68 €)", tarif: "À partir de 56 €",
      description: "Bougeoir sculptural en verre soufflé composé d'une grappe de disques organiques translucides et fumés aux reflets gris anthracite et céladon, surmontée d'une large coupelle pour bougie pilier. Décliné en deux hauteurs, à exposer seul ou en duo architectural." },
    { attente: true, univers: "objets-de-decoration" },

    /* Linge & étoffes */
    { id: "plaid-chocolat",   univers: "linge-et-etoffes", nom: "Plaid chocolat",                   par: "Linge de maison",     image: "assets/img/insta-3.jpg" },
    { id: "plaid-ganache-gold", univers: "linge-et-etoffes", nom: "Plaid Ganache ou Gold",          par: "130 × 180 cm",        image: "assets/img/plaid-ganache-gold.jpg",
      coloris: "Ganache · Gold", tarif: "59 €",
      description: "Plaid doux et enveloppant au format généreux (130 × 180 cm), décliné en teintes chaudes ganache et gold." },
    { id: "plaid-tartan",     univers: "linge-et-etoffes", nom: "Plaid Brun & Écru ou Tartan Kaki", par: "130 × 170 cm · Frangé", image: "assets/img/plaid-tartan-brun-kaki.jpg",
      coloris: "Brun & écru · Tartan kaki", tarif: "89 €",
      description: "Plaid épais et moelleux à franges (130 × 170 cm), décliné en carreaux brun et écru ou tartan kaki pour réchauffer un canapé ou un bout de lit." },
    { id: "coussin-pompons", univers: "linge-et-etoffes", nom: "Coussin carré brodé avec pompons", par: "Velours taupe & broderie florale", image: "assets/img/Coussin carré pompons.jpeg",
      tarif: "85 €",
      description: "Coussin carré en velours taupe orné d'une riche broderie florale en relief et souligné de pompons aux quatre coins. Une pièce textile travaillée qui apporte du caractère et de la douceur à un canapé ou un lit." },
    { id: "coussin-tigre", univers: "linge-et-etoffes", nom: "Coussin velours Tigre", par: "Velours vert sauge & broderie", image: "assets/img/Coussin vert tigre.jpeg",
      tarif: "59 €",
      description: "Coussin carré en velours vert sauge, brodé de deux tigres aux reflets cuivrés et noirs. Une pièce graphique qui apporte du relief à un canapé ou un fauteuil." },
    { id: "coussin-terracotta", univers: "linge-et-etoffes", nom: "Coussin velours terracotta", par: "Velours terracotta · Broderie félin", image: "assets/img/coussin terracotta T.L.jpeg",
      modeles: "Tigre · Léopard", tarif: "59 €",
      description: "Coussin carré en velours terracotta, brodé en relief d'un motif tigre ou léopard noir et rosé. Chaleureux et singulier, seul ou en duo." },
    { id: "trousse-leopard", univers: "linge-et-etoffes", nom: "Trousse velours imprimé léopard", par: "Velours imprimé & zip doré · 3 coloris", image: "assets/img/Trousse leopard.jpeg",
      coloris: "Ocre · Terracotta · Taupe", tarif: "18 € pièce",
      description: "Trousse souple en velours imprimé léopard à fermeture éclair dorée, déclinée en trois nuances chaleureuses pour glisser l'essentiel dans un sac ou une valise." },
    { id: "trousse-birdy", univers: "linge-et-etoffes", nom: "Trousse « Birdy »", par: "Velours fleuri & oiseaux · 4 coloris", image: "assets/img/Trousse Birdy.jpeg",
      coloris: "Sable · Pêche · Taupe · Jaune moutarde", tarif: "18 € l'unité",
      description: "Trousse en velours doux à imprimé oiseaux et fleurs, finition zip doré. Quatre coloris lumineux à collectionner ou à offrir." },
    { id: "panier-invites", univers: "linge-et-etoffes", nom: "Panier invités", par: "6 serviettes 30 × 30 cm · 4 coloris", image: "assets/img/Panier invités.jpeg",
      coloris: "Blanc · Beige · Ocre · Taupe", tarif: "14 € l'unité",
      description: "Panier souple en éponge et rebord nid d'abeille blanc, garni de six serviettes d'invités individuelles (30 × 30 cm). Une attention simple et soignée pour recevoir dans la salle de bain." }
  ]
};
