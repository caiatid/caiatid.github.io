/* ============================================================
   PROJETS — ajouter un projet = ajouter un bloc dans ce tableau.
   media : image | gallery | youtube (16:9) | youtube-vertical (9:16) | vertical-grid
   ============================================================ */
window.PROJECTS = [
  {
    id: "bouss",
    title: "PORTRAIT - Bouss",
    short: "BOUSS",
    categories: ["Éditorial"],
    year: "2025",
    cover: "assets/img/bouss-cover.webp",
    subtitle: "Portrait de l'artiste Bouss, rédigé en s'appropriant les codes et la ligne éditoriale du média urbain Raplume.",
    overview: "Rédaction du portrait de l'artiste Bouss en reprenant la ligne éditoriale du média urbain Raplume. L'objectif : reproduire fidèlement leur ton direct, authentique et passionné, de la structure narrative au choix du vocabulaire, pour maîtriser les codes du journalisme web spécialisé.",
    missions: ["Rédaction Web", "Analyse éditoriale", "Copywriting", "Culture urbaine"],
    team: "CAIATI Dorian",
    tools: ["InDesign", "Photoshop"],
    role: "J'ai pris en charge l'intégralité du portrait, de la recherche documentaire à la rédaction finale. Après avoir décortiqué l'ADN de Raplume (champ lexical, accroches, rythme), j'ai rédigé un article alliant rigueur journalistique et ton urbain pour mettre en lumière le parcours de l'artiste.",
    media: [
      {
        type: "gallery",
        images: [
          { src: "assets/img/portrait-bouss-1.webp", alt: "Portrait de Bouss — Page 1" },
          { src: "assets/img/portrait-bouss-2.webp", alt: "Portrait de Bouss — Page 2" },
          { src: "assets/img/portrait-bouss-3.webp", alt: "Portrait de Bouss — Page 3" },
          { src: "assets/img/portrait-bouss-4.webp", alt: "Portrait de Bouss — Page 4" }
        ]
      }
    ]
  },

  {
    id: "romanens-academy",
    title: "PUB - Romanen's Academy",
    short: "ROMANEN'S ACADEMY",
    categories: ["Vidéo"],
    year: "2025",
    cover: "assets/img/romanens-cover.webp",
    subtitle: "Réalisation d'un spot publicitaire audiovisuel en équipe et montage individuel.",
    overview: "Réalisation d'un spot publicitaire nécessitant une préparation technique rigoureuse (plan au sol, éclairage softboxes/LED, règle des 180°). Après un tournage en équipe, chaque membre a réalisé son propre montage individuel en H264 (1920×1080p).",
    missions: ["Réalisation audiovisuelle", "Écriture du découpage technique", "Scripting", "Suivi des raccords", "Assistance plateau", "Montage vidéo individuel"],
    team: "CAIATI Dorian et co-équipiers",
    tools: ["Premiere Pro", "After Effects"],
    role: "En tant que scripte, j'ai assuré le suivi du script, de la shotlist, des raccords et du timing sur le plateau. En post-production, j'ai réalisé intégralement ma propre version du montage, de la synchronisation son jusqu'à l'export final.",
    media: [
      { type: "youtube", id: "IaX_YIsn4-c", title: "Pub Romanen's Academy" }
    ]
  },

  {
    id: "la-mure",
    title: "AFFICHE - La Mure",
    short: "LA MURE",
    categories: ["Graphisme"],
    year: "2025",
    cover: "assets/img/la-mure-cover.webp",
    subtitle: "Affiche vectorielle illustrant les paysages et l'histoire industrielle de La Mure.",
    overview: "Affiche vectorielle dédiée à La Mure et aux symboles de la Matheysine. Elle retrace l'histoire du Petit Train (ancien train minier devenu touristique) entouré des paysages locaux : le barrage de Monteynard et le mont Obiou en arrière-plan, le tout rythmé par le contraste entre le rouge du train et les tons froids de la montagne.",
    missions: ["Design graphique", "Illustration vectorielle", "Composition visuelle"],
    team: "CAIATI Dorian",
    tools: ["Illustrator", "InDesign"],
    role: "J'ai conçu l'affiche de A à Z, de la recherche graphique à la vectorisation finale. Le défi principal a été d'équilibrer la fidélité des éléments patrimoniaux avec une direction artistique rétro-moderne, en travaillant les contrastes de couleurs pour une lecture immédiate.",
    media: [
      { type: "image", src: "assets/img/la-mure-1.webp", alt: "Affiche vectorielle La Mure" }
    ]
  },

  {
    id: "newsletter-mmi",
    title: "NEWSLETTER - UGA / MMI",
    short: "NEWSLETTER",
    categories: ["Éditorial", "Graphisme"],
    year: "2026",
    cover: "assets/img/newsletter-cover.webp",
    subtitle: "Rédaction de la lettre d'information officielle du département MMI pour guider les futurs étudiants.",
    overview: "Conception et rédaction de la newsletter officielle du département MMI de l'IUT 1 de Grenoble (janvier 2026). Pensée selon les codes de l'inbound marketing, elle guide les futurs bacheliers à travers les temps forts de l'orientation (JPO, salons Tech & Web, Parcoursup) avec une lecture fluide et hiérarchisée.",
    missions: ["Rédaction Web", "Analyse éditoriale", "Copywriting", "Stratégie de communication"],
    team: "CAIATI Dorian et co-équipiers",
    tools: ["InDesign", "Photoshop", "Figma"],
    role: "En tant que rédacteur et concepteur, j'ai structuré la ligne éditoriale et rédigé l'ensemble des contenus avec un ton informatif, dynamique et accessible, adapté à la cible étudiante.",
    media: [
      {
        type: "gallery",
        images: [
          { src: "assets/img/newsletter-1.webp", alt: "Newsletter UGA MMI - Partie 1" },
          { src: "assets/img/newsletter-2.webp", alt: "Newsletter UGA MMI - Partie 2" },
          { src: "assets/img/newsletter-3.webp", alt: "Newsletter UGA MMI - Partie 3" }
        ]
      }
    ]
  },

  {
    id: "coeur-de-fer",
    title: "DOCUMENTAIRE - Cœur de Fer",
    short: "CŒUR DE FER",
    categories: ["Vidéo"],
    year: "2026",
    cover: "assets/img/coeur-de-fer-cover.webp",
    subtitle: "Immersion au cœur de la passion et du partage à travers le portrait de Charly, joueur passionné de pétanque à Jarrie.",
    overview: "Court documentaire centré sur Charly, 55 ans, licencié au club « Les Amis de la Pétanque » à Jarrie. Au-delà de la technique, le film explore la convivialité et la transmission à travers une narration alternant plans larges, gros plans sur les gestes et interviews intimistes.",
    missions: ["Réalisation audiovisuelle", "Écriture documentaire", "Cadrage", "Découpage technique et Storyboard"],
    team: "CAIATI Dorian, DUCAS Lenny, RAMBAUD Lola, PEREIRA ALVES Guilherme",
    tools: ["Premiere Pro", "After Effects"],
    role: "En tant que réalisateur, j'ai piloté la conception artistique et technique du film : écriture du synopsis, storyboard, coordination de l'équipe sur le terrain et direction des cadrages pour servir l'émotion du portrait.",
    media: [
      {
        type: "gallery",
        images: [
          { src: "assets/img/coeur-de-fer-1.webp", alt: "Dossier de production Cœur de Fer 1" },
          { src: "assets/img/coeur-de-fer-2.webp", alt: "Dossier de production Cœur de Fer 2" },
          { src: "assets/img/coeur-de-fer-3.webp", alt: "Dossier de production Cœur de Fer 3" },
          { src: "assets/img/coeur-de-fer-4.webp", alt: "Dossier de production Cœur de Fer 4" },
          { src: "assets/img/coeur-de-fer-5.webp", alt: "Dossier de production Cœur de Fer 5" },
          { src: "assets/img/coeur-de-fer-6.webp", alt: "Dossier de production Cœur de Fer 6" }
        ]
      },
      { type: "youtube", id: "Y5VC7igOVxc", title: "Cœur de Fer" }
    ]
  },

  /*
  {
    id: "tableaux-de-mamie",
    title: "SITE WEB - Les Tableaux de Mamie",
    short: "LES TABLEAUX DE MAMIE",
    categories: ["Web"],
    year: "2026",
    cover: "assets/img/tableaux-cover.webp",
    subtitle: "Conception et développement d'une plateforme e-commerce et d'une galerie artistique en ligne dédiée aux peintures de ma grand-mère.",
    overview: "Ce projet consistait à concevoir et développer une plateforme e-commerce dynamique. L'objectif principal était de structurer un catalogue de produits complet, d'intégrer des pages web multi-formats (Accueil, Boutique, Contact, Panier) en HTML/CSS et d'assurer la gestion dynamique des données textuelles via un script PHP relié à un serveur distant.",
    missions: ["Développement E-commerce", "Intégration Front-End", "Logique PHP & MySQL", "Conception de Galerie Artistique"],
    team: "CAIATI Dorian",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "PhpStorm"],
    role: "En tant que concepteur et développeur, j'ai réalisé l'intégralité du site : de la création de la galerie interactive pour exposer les tableaux jusqu'à l'intégration des pages de la boutique. J'ai structuré le design, développé la logique dynamique en PHP pour l'affichage des œuvres, et géré l'hébergement complet de la plateforme sur le serveur de production.",
    media: [
      { type: "image", src: "assets/img/tableaux-full.webp", alt: "Capture complète du site Les Tableaux de Mamie" }
    ]
  },
  */

  {
    id: "motion-petanque",
    title: "MOTION DESIGN - Pétanque",
    short: "MOTION PÉTANQUE",
    categories: ["Motion"],
    year: "2026",
    cover: "assets/img/motion-cover.webp",
    subtitle: "Animation 2D vectorielle basée sur les principes fondamentaux du mouvement.",
    overview: "Animation 2D vectorielle de moins de 10 secondes réalisée autour de la pétanque (arrivée d'une boule OBUT près du cochonnet). L'enjeu était d'appliquer les 12 principes fondamentaux de l'animation (Disney) pour donner à la boule un vrai poids, une inertie et une physique crédible.",
    missions: ["Illustration vectorielle", "Animation 2D (After Effects)", "Motion Design", "Courbes de vitesse (F9)"],
    team: "CAIATI Dorian",
    tools: ["Illustrator", "After Effects"],
    role: "Projet réalisé de A à Z : illustration des assets vectoriels sur Illustrator puis animation sur After Effects. J'ai particulièrement travaillé les courbes de vitesse (lissage F9, Slow in / Slow out), l'anticipation, le follow through après l'impact et un décor discrètement animé pour la profondeur.",
    media: [
      { type: "youtube", id: "6ItzcWnweWc", title: "Motion Pétanque" }
    ]
  },

  {
    id: "canal-du-moulin",
    title: "REPORTAGE - Canal du Moulin",
    short: "CANAL DU MOULIN",
    categories: ["Vidéo"],
    year: "2026",
    cover: "assets/img/canal-cover.webp",
    subtitle: "Reportage vidéo double format sur une urgence écologique locale.",
    overview: "Reportage vidéo double format (16:9 web et 9:16 réseaux sociaux) inspiré du média Brut, sur l'assèchement brutal du canal du Moulin à Vizille (sécheresse et travaux hydroélectriques). Construit à partir d'un dossier de production complet et de l'interview de Didier Loriche (président de l'AAPPMA), il sensibilise à la fragilité des cours d'eau.",
    missions: ["Production Audiovisuelle", "Scénarisation (Dossier de production)", "Cadrage (Smartphone)", "Montage vidéo (16:9)", "Storytelling journalistique"],
    team: "CAIATI Dorian, DUCAS Lenny",
    tools: ["Premiere Pro", "After Effects"],
    role: "En tant que co-réalisateur, j'ai co-écrit le dossier de production, contacté l'intervenant et assuré le cadrage sur le terrain (interview et B-roll). En post-production, j'ai monté intégralement la version 16:9 : accroche forte, rythme de l'interview, sous-titrage complet et habillage graphique informatif.",
    media: [
      {
        type: "gallery",
        images: [
          { src: "assets/img/canal-dossier-1.webp", alt: "Dossier Canal du Moulin 1" },
          { src: "assets/img/canal-dossier-2.webp", alt: "Dossier Canal du Moulin 2" },
          { src: "assets/img/canal-dossier-3.webp", alt: "Dossier Canal du Moulin 3" },
          { src: "assets/img/canal-dossier-4.webp", alt: "Dossier Canal du Moulin 4" }
        ]
      },
      { type: "youtube", id: "nY97vfy1t54", title: "Reportage 16:9" },
      { type: "youtube-vertical", id: "UcTUY-bbiYQ", title: "Reportage 9:16" }
    ]
  },

  {
    id: "multimedialpes",
    title: "FESTIVAL - Multimédi'Alpes 2027",
    short: "MULTIMÉDI'ALPES",
    categories: ["Vidéo", "Graphisme", "Éditorial"],
    year: "2026",
    cover: "assets/img/multimedialpes-cover.webp",
    subtitle: "Campagne de communication 360° : stratégie éditoriale, identité visuelle et production audiovisuelle.",
    overview: "Dans le cadre de la SAE 3.02, notre équipe a conçu en 3 semaines l'intégralité de la communication de l'édition 2027 du festival Multimédi'Alpes (BUT MMI Grenoble). L'objectif : mobiliser les étudiants pour le dépôt de projets, attirer les professionnels et faire rayonner l'événement au sein de l'UGA à travers une stratégie plurimédia complète mêlant guide éditorial, direction artistique et campagne vidéo.",
    missions: ["Stratégie de communication & Guide éditorial", "Identité visuelle (Logo, Affiche, Merch)", "Campagne vidéo (6 capsules 9:16)", "Bande-annonce promotionnelle (16:9)"],
    team: "CAIATI Dorian, DIALLO PEREZ Khadija, DUCAS Lenny, KALMANI Soukayna",
    tools: ["Premiere Pro", "After Effects", "Illustrator", "InDesign", "Photoshop", "Figma"],
    role: "Au sein de l'équipe, j'ai participé à la conception de la stratégie et de l'identité visuelle, et je me suis particulièrement chargé du montage de 4 des 6 capsules verticales (9:16) de la campagne.",
    media: [
      {
        type: "gallery",
        images: [
          { src: "assets/img/multimedialpes-logo.webp", alt: "Logo Multimédi'Alpes" },
          { src: "assets/img/multimedialpes-couleurs.webp", alt: "Palette de couleurs" },
          { src: "assets/img/multimedialpes-affiche.webp", alt: "Affiche officielle Multimédi'Alpes" },
          { src: "assets/img/multimedialpes-cover.webp", alt: "Mockup abribus Multimédi'Alpes" },
          { src: "assets/img/multimedialpes-merch-1.webp", alt: "Merchandising T-shirts et casquette" },
          { src: "assets/img/multimedialpes-merch-2.webp", alt: "Merchandising chaussettes et tote bag" }
        ]
      },
      { type: "youtube", id: "XNixO_l2U_8", title: "Multimédi'Alpes 2027 — Bande-annonce officielle" },
      {
        type: "vertical-grid",
        videos: [
          { id: "Mv4abdKIcOw", title: "Épisode 1 : C'est quoi le festival ?" },
          { id: "6AfdZAPnapU", title: "Épisode 2 : Déposez vos projets" },
          { id: "es5TMV9ympo", title: "Épisode 3 : Réserve ta place" },
          { id: "5XF3QBMLYfQ", title: "Épisode 4 : Le vote du public" }
        ]
      }
    ]
  },

  {
    id: "book-mannequinat",
    title: "SITE WEB - Book Mannequinat",
    short: "BOOK MANNEQUINAT",
    categories: ["Web"],
    year: "2026",
    cover: "assets/img/book-cover.webp",
    subtitle: "Conception et intégration d'un book photo éditorial en ligne en HTML, CSS et JavaScript vanilla.",
    overview: "Ce projet consistait à concevoir et coder de zéro un portfolio éditorial dédié au mannequinat pour mettre en valeur une série de portraits réalisés en shooting extérieur. L'enjeu principal était d'allier une esthétique minimaliste proche des agences de mode à des contraintes techniques strictes : code léger sans framework, responsive design soigné, typographies locales et optimisation poussée des images en WebP pour garantir un chargement rapide.",
    missions: ["Intégration Front-End", "Direction artistique éditoriale", "Responsive Design", "Optimisation des performances (WebP)"],
    team: "CAIATI Dorian",
    tools: ["HTML", "CSS", "JavaScript", "PhpStorm"],
    role: "J'ai pris en charge l'intégralité du projet : de la direction artistique (mise en page éditoriale, hiérarchie typographique, mise en valeur des photographies) jusqu'au développement front-end complet en HTML, CSS et JavaScript vanilla, avec une attention particulière portée à la fluidité sur mobile et au poids final du site.",
    media: [
      {
        type: "gallery",
        images: [
          { src: "assets/img/book-1.webp", alt: "Galerie photo éditoriale — partie 1" },
          { src: "assets/img/book-2.webp", alt: "Galerie photo éditoriale — partie 2" },
          { src: "assets/img/book-3.webp", alt: "Section mensurations et convertisseur d'unités" },
          { src: "assets/img/book-4.webp", alt: "Section Booking et contact" }
        ]
      }
    ]
  }
];