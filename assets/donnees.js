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
     Détails affichés seulement dans le volet « Se renseigner » (laisser de côté ce qui ne sert pas) :
     - description : 1 ou 2 phrases.
     - formats : tailles ou modèles, séparés par « · ».
     - modeles / coloris / motifs / senteurs : variantes, séparées par « · ».
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
    { id: "verres-bord-dore", univers: ["arts-de-la-table", "noel"], nom: "Série de verres à bord doré", par: "Verre fin & liseré doré · 3 formats", image: "assets/img/Serie de verre bord dore.jpeg",
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
    { id: "bougies-torsadees-led", univers: "matieres-et-lumieres", nom: "Paire de bougies torsadées LED", par: "Véritable paraffine crème · La paire", image: "assets/img/Bougie torsadée.jpeg",
      tarif: "14 € la paire",
      description: "Paire de bougies LED torsadées en véritable paraffine crème, à flamme vacillante chaleureuse. Fonctionne avec 2 piles AAA (LR03) par bougie." },
    { id: "bougie-parfumee", univers: "matieres-et-lumieres", nom: "Bougie parfumée", par: "La Bastide des Senteurs · Cire végétale & parfums de Grasse", image: "assets/img/Bougie parfumée.jpeg",
      senteurs: "Basilic menthe · Figue de Provence · Velours musqué · Feuille de tomate · Oud d'Orient · Nuage de coton · Cachemire & Soie · Escale marine · Fleur d'oranger · Massif des Alpilles", tarif: "39 €",
      description: "Bougie parfumée coulée en cire végétale avec mèche en coton et parfums de Grasse (La Bastide des Senteurs, Saint-Rémy-de-Provence). Présentée dans un verre noir orné d'un médaillon doré et livrée dans son coffret, déclinée en dix senteurs." },
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
