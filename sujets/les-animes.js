/* ===================================================================
   SUJET — Les animés japonais
   ===================================================================
   Un art populaire devenu langage mondial, du noir et blanc de Tezuka
   aux fresques de Miyazaki et aux blockbusters de Shinkai.
   Domaine : Arts
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'les-animes',
    titre: 'Les <em>animés</em>',
    domaines: ['Arts'],
    tags: ['japon', 'manga', 'studio-ghibli', 'miyazaki', 'tezuka', 'shonen', 'animation'],
    difficulte: 1,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['gastronomie', 'syndrome-stendhal'],
    date_creation: '2026-05-13',
    date_maj: '2026-08-18'
  },

  resume: `Comprendre l'[animation japonaise]{accent} comme tradition culturelle distincte de l'animation occidentale : un art né dans l'après-guerre autour d'**Osamu Tezuka**, fondé sur une économie d'images, un répertoire visuel codifié et un lien organique avec le **manga**, devenu en soixante ans l'un des principaux exports culturels du Japon.`,

  points_cles: [
    `Le mot **animé** (アニメ) désigne au Japon **toute animation**, occidentale comprise ; hors du Japon, il s'est spécialisé pour nommer l'animation **produite au Japon** comme tradition artistique distincte.`,
    `**Osamu Tezuka** lance en **1963** *Astro Boy* (*Tetsuwan Atomu*), première série animée japonaise diffusée à la télévision, en empruntant à **Disney** son langage tout en imposant une **économie de production** radicale.`,
    `La technique de la *[limited animation]{accent}* — peu de dessins par seconde, plans fixes prolongés, recyclage de cellulos — n'est pas un défaut mais un **choix stylistique** qui façonne durablement l'esthétique du médium.`,
    `Le **Studio Ghibli**, fondé en **1985** par **Hayao Miyazaki** et **Isao Takahata**, élève l'animé au rang de **cinéma d'auteur mondial** : *Mon voisin Totoro* (1988), *Princesse Mononoké* (1997), *Le Voyage de Chihiro* (2001, Oscar 2003).`,
    `L'animé s'organise en **genres marketing** liés au lectorat manga : **shonen** (jeunes garçons), **shojo** (jeunes filles), **seinen** (jeunes adultes), **josei** (femmes adultes), auxquels s'ajoutent **mecha**, **isekai**, **slice of life**.`,
    `Aux côtés de Miyazaki, plusieurs **réalisateurs majeurs** ont marqué le médium : **Hideaki Anno** (*Evangelion*, 1995), **Satoshi Kon** (*Paprika*, 2006), **Mamoru Hosoda**, **Makoto Shinkai** (*Your Name*, 2016).`,
    `La diffusion mondiale passe d'une **réception fragmentée** (Club Dorothée en France dans les années 1980) à un **boom planétaire** porté par **Netflix** et **Crunchyroll** depuis 2015 — l'animé est aujourd'hui un pilier du **soft power** culturel japonais.`
  ],

  carte_mentale: {
    central: 'animes',
    noeuds: [
      { id: 'animes', label: 'Animés', description: 'Animation produite au Japon, tradition culturelle distincte de l\'animation occidentale, organiquement liée au manga.' },
      { id: 'origines', label: 'Origines', description: 'De l\'après-guerre à 1963 : naissance d\'une industrie autour de **Tezuka** et de la télévision.' },
      { id: 'specificites', label: 'Spécificités', description: 'Limited animation, codes visuels (grands yeux, fonds très détaillés), bande-son omniprésente, rapport étroit au manga source.' },
      { id: 'studios', label: 'Studios', description: 'Ghibli, Madhouse, MAPPA, Bones, Trigger — chaque studio cultive une signature visuelle reconnaissable.' },
      { id: 'genres', label: 'Genres', description: 'Catégories marketing héritées du manga : shonen, shojo, seinen, josei, plus des familles thématiques (mecha, isekai, slice of life).' },
      { id: 'realisateurs', label: 'Réalisateurs', description: 'Le médium se structure autour de **figures d\'auteur** identifiables : Miyazaki, Anno, Kon, Hosoda, Shinkai.' },
      { id: 'diffusion-mondiale', label: 'Diffusion mondiale', description: 'Du Club Dorothée des années 1980 au streaming Netflix/Crunchyroll : pilier du **soft power** japonais.' },

      // Origines
      { id: 'tezuka', label: 'Osamu Tezuka', description: 'Père du manga moderne (*Astro Boy*, *Le Roi Léo*), il fonde Mushi Production en 1961 et lance l\'animation TV japonaise en 1963.', parent: 'origines' },
      { id: 'disney-influence', label: 'Influence Disney', description: 'Tezuka admire Disney (les grands yeux ronds viennent de là) mais doit produire **dix fois moins cher** : naissance du compromis fondateur.', parent: 'origines' },

      // Spécificités
      { id: 'limited', label: 'Limited animation', description: 'Économie d\'images : 8 à 12 dessins par seconde contre 24 chez Disney. Plans fixes, recyclage, boucles. Contrainte devenue style.', parent: 'specificites' },
      { id: 'character-design', label: 'Character design', description: 'Codes visuels stylisés : **grands yeux** pour l\'émotion, cheveux colorés, expressions exagérées (gouttes de sueur, veines saillantes).', parent: 'specificites' },

      // Studios
      { id: 'ghibli', label: 'Studio Ghibli', description: '**Miyazaki** et **Takahata**, depuis 1985. *Totoro* (1988), *Mononoké* (1997), *Chihiro* (2001, Oscar 2003). Cinéma d\'auteur planétaire.', parent: 'studios' },
      { id: 'autres-studios', label: 'Madhouse, MAPPA, Bones', description: 'Madhouse (*Perfect Blue*, *Paprika*), MAPPA (*Jujutsu Kaisen*, *L\'Attaque des Titans* finale), Bones, Trigger — l\'industrie au-delà de Ghibli.', parent: 'studios' },

      // Genres
      { id: 'shonen', label: 'Shonen', description: 'Pour jeunes garçons : combats, amitié, dépassement de soi. *Dragon Ball*, *Naruto*, *One Piece*, *Jujutsu Kaisen*. Le segment commercial dominant.', parent: 'genres' },
      { id: 'autres-genres', label: 'Shojo, seinen, isekai…', description: 'Shojo (jeunes filles, romance), seinen (jeunes adultes, plus sombre), isekai (transposition dans un autre monde), mecha (robots géants), slice of life.', parent: 'genres' },

      // Réalisateurs
      { id: 'miyazaki', label: 'Hayao Miyazaki', description: 'Le maître de Ghibli. *Nausicaä* (1984), *Totoro* (1988), *Porco Rosso* (1992), *Mononoké* (1997), *Chihiro* (2001). Pacifisme, écologie, enfance.', parent: 'realisateurs' },
      { id: 'autres-realisateurs', label: 'Anno, Kon, Shinkai', description: '**Anno** (*Evangelion*, 1995, choc générationnel), **Satoshi Kon** (*Perfect Blue*, *Paprika*), **Makoto Shinkai** (*Your Name*, 2016, succès planétaire).', parent: 'realisateurs' },

      // Diffusion
      { id: 'club-dorothee', label: 'Club Dorothée', description: 'France, 1987-1997 : importation massive de séries japonaises (*Goldorak*, *Dragon Ball*, *Les Chevaliers du Zodiaque*). Première génération d\'otakus français.', parent: 'diffusion-mondiale' },
      { id: 'streaming', label: 'Boom streaming', description: 'Depuis ~2015 : **Crunchyroll** et **Netflix** simulcastent les séries japonaises dans le monde. *Demon Slayer* devient en 2020 le plus gros succès cinéma mondial de l\'année.', parent: 'diffusion-mondiale' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Un mot, deux <em>définitions</em>',
      contenu_md:
`Au Japon, le mot **animé** (アニメ, abréviation de *animēshon*) désigne **toute animation**, qu'elle soit produite à Tokyo, à Burbank ou à Paris. Pour un spectateur japonais, *Le Roi Lion* est un animé. Hors du Japon, l'usage s'est inversé : le terme s'est spécialisé pour nommer **l'animation produite au Japon**, perçue comme une tradition esthétique et narrative distincte de l'animation occidentale.

Cette distinction n'est pas qu'un effet de marketing. L'animation japonaise s'est constituée depuis les années 1960 comme un **système autonome** : un mode de production industriel particulier, des codes visuels reconnaissables au premier coup d'œil, un lien organique avec le **manga** dont elle adapte une part majoritaire de ses œuvres, un public segmenté par âge et par sexe à travers des **genres** précis. C'est tout cet écosystème qu'on désigne aujourd'hui sous le nom d'animé.

Il est utile, pour saisir la singularité du médium, de le comparer à son cousin occidental. Disney mise sur l'animation **pleine** (24 images par seconde), des budgets considérables, des films événements espacés. L'animé japonais a inventé un autre régime : la **série télévisée hebdomadaire**, à budget contraint, où la contrainte de production a engendré un **langage** visuel propre.`
    },

    {
      type: 'encadre',
      label: 'À retenir',
      contenu_md: `L'animé désigne hors Japon une **tradition culturelle distincte** de l'animation occidentale, fondée sur trois piliers : un **lien organique avec le manga**, une **économie d'images** (la *limited animation*) devenue style, et une **segmentation en genres** héritée de la presse spécialisée. Ce n'est pas un sous-genre du dessin animé : c'est une **autre voie** historique de l'animation.`
    },

    {
      type: 'widget',
      titre: `Soixante ans d'animation japonaise`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: 'Avant-guerre', titre: `Pionniers oubliés`, description: `Premiers courts métrages d'animation japonais dès les années 1910-1920. La guerre interrompt presque tout. **Toei Animation**, fondée en 1948, prépare le terrain avec quelques longs métrages dans la veine Disney.` },
          { date: '1963', titre: `Astro Boy à la télévision`, description: `**Osamu Tezuka** adapte son manga *Tetsuwan Atomu* en série animée. C'est la **première série hebdomadaire** de l'animation japonaise. Pour tenir le rythme avec un budget dix fois inférieur à Disney, Tezuka invente la *limited animation*. Acte de naissance.` },
          { date: 'Années 1970', titre: `Robots géants et space opera`, description: `Naissance du genre **mecha** avec *Mazinger Z* (1972) puis *Gundam* (1979). En parallèle, *Goldorak* (1975) et *Albator* (1978) déferlent à l'export. L'animé conquiert la France via Antenne 2 dès 1978.` },
          { date: '1984', titre: `Miyazaki signe Nausicaä`, description: `*Nausicaä de la vallée du vent* révèle **Hayao Miyazaki** comme grand auteur. L'année suivante, il fonde avec **Isao Takahata** le **Studio Ghibli**. Le long métrage d'animation japonais entre dans une nouvelle ère.` },
          { date: '1988', titre: `Akira et Totoro`, description: `Année charnière : **Katsuhiro Otomo** sort *Akira*, fresque cyberpunk au budget inédit qui révèle l'animé adulte à l'Occident. La même année, Miyazaki livre *Mon voisin Totoro*. Deux pôles opposés d'une même industrie en pleine maturité.` },
          { date: '1995', titre: `Evangelion bouleverse le genre`, description: `**Hideaki Anno** réalise *Neon Genesis Evangelion* : une série de mechas qui se transforme en méditation existentielle sur la dépression et la solitude. Choc générationnel au Japon, culte mondial. L'animé prouve qu'il peut être **psychanalytique**.` },
          { date: '2001', titre: `Chihiro reçoit l'Oscar`, description: `*Le Voyage de Chihiro* de Miyazaki bat tous les records du box-office japonais puis remporte l'**Oscar du meilleur film d'animation 2003**. Reconnaissance institutionnelle planétaire. Ghibli devient une marque mondiale.` },
          { date: '2016 → aujourd\'hui', titre: `Boom streaming`, description: `**Makoto Shinkai** signe *Your Name* (2016), succès planétaire. Crunchyroll et Netflix simulcastent les séries japonaises dans le monde entier. *Demon Slayer : Mugen Train* devient en 2020 le plus gros succès cinéma mondial de l'année. L'animé est mainstream global.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Tezuka, ou l'<em>invention</em> d'un médium`,
      contenu_md:
`Tout commence avec un seul homme. **Osamu Tezuka** (1928-1989), médecin de formation, est déjà à 35 ans le mangaka le plus célèbre du Japon — il a réinventé après la guerre un manga moderne en s'inspirant des codes du cinéma américain et de **Walt Disney**, dont il a vu *Bambi* plus de cinquante fois. En **1961**, il fonde son propre studio d'animation, Mushi Production, avec un projet précis : adapter son manga *Tetsuwan Atomu* (Astro Boy) en **série hebdomadaire de télévision**.

Le problème est économique. Un épisode de Disney coûte une fortune ; un épisode hebdomadaire japonais doit coûter dix fois moins. La solution de Tezuka tient en une formule : **réduire le nombre de dessins**. Là où Disney peint 24 cellulos par seconde pour un mouvement fluide, Tezuka en utilise **8 à 12**, multiplie les **plans fixes** où seule la bouche bouge, recycle des séquences entières d'un épisode à l'autre, conserve des décors statiques pendant que la caméra panoramique. C'est la *[limited animation]{accent}*, contrainte de production qui devient progressivement une **esthétique** : la valeur d'un plan ne tient plus à la fluidité du mouvement mais à la **composition**, au **silence**, à la **musique**, au **regard**.

Tezuka pose aussi les bases du **système** qui régira l'industrie pendant soixante ans : un manga d'abord publié en magazine, adapté en animé lorsqu'il rencontre un public, qui à son tour relance les ventes du manga. Cette **boucle** manga → animé → produits dérivés est aujourd'hui encore le moteur économique principal du médium. Au point que la consommation d'objets dérivés, comme la [gastronomie]{accent} japonaise dans les bento ou les ramen, accompagne souvent l'expérience visuelle ; voir [[gastronomie]] pour comprendre comment la culture matérielle japonaise s'exporte par capillarité avec ses œuvres animées.`
    },

    {
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: 'De l\'idée à l\'écran : la chaîne de production',
      params: {
        image: 'data:image/png;base64,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',
        legende: 'Le pipeline de production d\'un animé télévisé, hérité du système Tezuka.',
        hotspots: []
      }
    },

    {
      type: 'widget',
      titre: `Techniques caractéristiques de l'animation japonaise`,
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: `La limited animation`,
            description: `Économie radicale d'images : **8 à 12 dessins par seconde** au lieu de 24, plans fixes longs, recyclage de séquences, mouvements de caméra sur images statiques. Inventée pour des raisons budgétaires par **Tezuka** en 1963, elle est devenue un **choix de style** que les studios les mieux dotés (Ghibli, Kyoto Animation) revendiquent et travaillent pour eux-mêmes.`
          },
          {
            titre: `Le character design codifié`,
            description: `Une iconographie immédiatement reconnaissable : **grands yeux** (héritage de Disney via Tezuka, lieu privilégié de l'émotion), cheveux de couleurs vives (signalétique pour distinguer les personnages), **expressions exagérées** codifiées (goutte de sueur, veines saillantes, étoiles dans les yeux). Ces signes forment un véritable **alphabet émotionnel** partagé par tous les studios.`
          },
          {
            titre: `Le soin extrême des fonds`,
            description: `Compensation directe de la *limited animation* : si les personnages bougent peu, les **décors** sont d'une richesse picturale considérable. Les fonds de Ghibli sont peints à la gouache jusqu'aux années 2010 ; ceux de Shinkai photographient le Tokyo réel pour le redessiner avec une précision hyperréaliste. Le **lieu** devient un personnage à part entière.`
          },
          {
            titre: `La bande-son omniprésente`,
            description: `Le son fait l'animé autant que l'image. Compositeurs récurrents (**Joe Hisaishi** pour Miyazaki, **Yoko Kanno** pour *Cowboy Bebop*, **Hiroyuki Sawano** pour *L'Attaque des Titans*), génériques d'ouverture (*openings*) devenus genre à part entière, soin du **bruitage** et des **silences**. La musique compense ce que l'animation économise.`
          }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'Une expérience esthétique',
      contenu_md: `Devant un plan d'**ouverture** de Miyazaki — une prairie qui ondule sous le vent, une enfant qui court vers l'horizon, un thème de Hisaishi — beaucoup de spectateurs éprouvent quelque chose qui s'apparente au [[syndrome-stendhal]] : une **submersion esthétique** qui dépasse l'analyse rationnelle. Ce n'est pas un hasard. La grammaire des animés majeurs repose sur la **durée du plan**, le **silence**, la **musique tenue**, le **soin obsessionnel du décor** — autant de moyens d'imposer au regard une **lenteur méditative** rare au cinéma contemporain.`
    },

    {
      type: 'widget',
      titre: `Quatre studios, quatre signatures`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: `Fondé en 1985`,
            titre: `Studio Ghibli`,
            description: `Le studio de **Hayao Miyazaki** et **Isao Takahata**. Esthétique picturale, thèmes récurrents (enfance, écologie, pacifisme, mémoire), refus de l'animation numérique pure. *Totoro* (1988), *Princesse Mononoké* (1997), *Le Voyage de Chihiro* (2001, Oscar 2003), *Le Vent se lève* (2013). La référence du cinéma d'animation d'auteur.`
          },
          {
            tag: `Fondé en 1972`,
            titre: `Madhouse`,
            description: `Studio des **films d'auteur** plus sombres et adultes. C'est la maison de **Satoshi Kon** (*Perfect Blue*, 1997 ; *Paprika*, 2006), de Yoshiaki Kawajiri, de Mamoru Hosoda à ses débuts. Production séries d'élite (*Death Note*, *Hunter × Hunter* version 2011). Une signature urbaine, psychologique, parfois angoissée.`
          },
          {
            tag: `Fondé en 2011`,
            titre: `MAPPA`,
            description: `Le studio montant de la décennie 2010-2020. *L'Attaque des Titans* (saisons finales), *Jujutsu Kaisen*, *Chainsaw Man*. Esthétique cinétique, sens du mouvement spectaculaire, capacité à enchaîner des productions très exigeantes — au prix de conditions de travail critiquées dans l'industrie.`
          },
          {
            tag: `Fondé en 1998 / 2011`,
            titre: `Bones et Trigger`,
            description: `**Bones** (*Fullmetal Alchemist : Brotherhood*, *My Hero Academia*) cultive un style d'action lisible et précis. **Trigger** (*Kill la Kill*, *Promare*), fondé par d'anciens de Gainax, assume une animation **excessive**, exubérante, presque caricaturale dans ses jaillissements colorés. Deux voies opposées de la modernité.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Les <em>genres</em> et leurs publics`,
      contenu_md:
`L'animé hérite directement de la **segmentation marketing du manga**. Au Japon, chaque magazine vise un lectorat précis, et les séries qu'il publie sont étiquetées en conséquence. Cette taxonomie passe ensuite à l'animation et structure encore aujourd'hui l'offre.

Le **shonen** vise les jeunes garçons (8-18 ans) : combats, amitié, dépassement de soi, montée en puissance progressive. C'est le segment le plus visible à l'export : *Dragon Ball*, *Naruto*, *One Piece*, *My Hero Academia*, *Jujutsu Kaisen*. Le **shojo** s'adresse aux jeunes filles : romance, vie scolaire, sentiments, esthétique souvent plus douce (*Sailor Moon*, *Fruits Basket*, *Nana*). Le **seinen** cible les jeunes adultes masculins avec des récits plus sombres, ambigus, parfois violents (*Berserk*, *Monster*, *Vagabond*). Le **josei** vise les femmes adultes : romance, vie professionnelle, sexualité plus frontale.

À ces quatre piliers démographiques s'ajoutent des **familles thématiques** transverses. Le **mecha** met en scène des robots géants pilotés par des humains (*Gundam*, *Evangelion*). L'**isekai** transpose un héros contemporain dans un monde fantastique parallèle — genre devenu hégémonique dans les années 2010 au point d'être parodié. Le *[slice of life]{accent}* renonce à l'intrigue spectaculaire pour le **détail du quotidien** : une école de musique, une boulangerie, un voyage en train. Le **mahō shōjo** (magical girl, *Sailor Moon*) et le **sport** (*Captain Tsubasa*, *Haikyuu*) complètent un paysage où l'on trouve, en pratique, un genre pour chaque vie possible.`
    },

    {
      type: 'widget',
      titre: `Genres et œuvres emblématiques — explorez par catégorie`,
      composant: 'SelecteurValeurs',
      params: {
        indexInitial: 0,
        options: [
          { label: 'Shonen', valeur: 'Dragon Ball, Naruto, One Piece, JJK', description: 'Pour jeunes garçons. Combats, amitié, dépassement de soi. Tomes hebdomadaires dans le Weekly Shonen Jump. Le segment commercial dominant à l\'export.' },
          { label: 'Shojo', valeur: 'Sailor Moon, Fruits Basket, Nana', description: 'Pour jeunes filles. Romance, vie scolaire, sentiments. Esthétique souvent plus douce, attention portée aux relations interpersonnelles et aux émotions intérieures.' },
          { label: 'Seinen', valeur: 'Berserk, Monster, Vagabond', description: 'Pour jeunes adultes. Récits plus sombres, moralement ambigus, parfois ultra-violents. Densité narrative qui se rapproche du roman ou de la BD européenne adulte.' },
          { label: 'Mecha', valeur: 'Gundam, Evangelion, Code Geass', description: 'Robots géants pilotés par des humains, souvent adolescents. Né avec Mazinger Z (1972), codifié par Gundam (1979), bouleversé par Evangelion (1995).' },
          { label: 'Isekai', valeur: 'SAO, Re:Zero, Mushoku Tensei', description: 'Un héros contemporain est transposé dans un monde fantastique parallèle. Genre hégémonique dans les années 2010, souvent parodié pour son abus de tropes.' },
          { label: 'Slice of life', valeur: 'K-On!, Barakamon, Yuru Camp', description: 'Renoncement à l\'intrigue spectaculaire pour le détail du quotidien : une école de musique, un camping, une école d\'art. Genre méditatif et contemplatif.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Cinq <em>réalisateurs</em> qui ont fait le médium`,
      contenu_md:
`L'animé est, plus que la plupart des autres cinémas industriels, une affaire d'**auteurs identifiables**. Quelques noms reviennent dès qu'on dépasse le simple divertissement de série.

**Hayao Miyazaki** (né 1941) est le maître reconnu du **long métrage** d'animation. Pacifiste, écologiste, féministe à sa manière, il filme des héroïnes enfants qui traversent des mondes en péril sans jamais perdre leur lucidité. *Nausicaä* (1984), *Totoro* (1988), *Porco Rosso* (1992), *Princesse Mononoké* (1997), *Le Voyage de Chihiro* (2001), *Le Vent se lève* (2013) forment un corpus comparable, par sa cohérence, à celui d'un grand réalisateur de cinéma vivant.

**Hideaki Anno** (né 1960) signe en 1995 *Neon Genesis Evangelion*, série de mechas qui dérape en une **méditation existentielle** sur la dépression, l'isolement et la difficulté de communiquer. Choc générationnel au Japon, l'œuvre fait l'objet depuis trente ans d'exégèses sans fin.

**Satoshi Kon** (1963-2010), disparu trop tôt, fut le grand cinéaste du **trouble** : *Perfect Blue* (1997) anticipe le harcèlement numérique, *Millennium Actress* (2001) tisse cinéma et mémoire, *Paprika* (2006) explore les rêves comme territoire partagé. Son influence sur **Christopher Nolan** (*Inception*) est notoire.

**Mamoru Hosoda** (né 1967), longtemps annoncé comme l'héritier de Miyazaki, a construit une œuvre autonome autour de la **famille** et du temps qui passe : *La Traversée du temps* (2006), *Summer Wars* (2009), *Le Garçon et la Bête* (2015).

**Makoto Shinkai** (né 1973) est devenu en une décennie le réalisateur d'animation **commercialement le plus puissant** du Japon. *Your Name* (2016) est un succès planétaire qui dépasse en recettes plusieurs films de Miyazaki. Style reconnaissable entre tous : ciels hyperréalistes, lumière dorée, mélancolie adolescente, récits de rencontres impossibles.`
    },

    {
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: 'Akihabara, la ville-vitrine',
      params: {
        image: 'images/les-animes--akihabara.jpg',
        legende: 'Le quartier d\'Akihabara à Tokyo, épicentre mondial de la culture animé, manga et jeu vidéo. (Photo Wikimedia Commons, licence Creative Commons — crédit selon le fichier)',
        hotspots: []
      }
    },

    {
      type: 'texte',
      titre: `Du <em>Club Dorothée</em> à Netflix`,
      contenu_md:
`La diffusion mondiale de l'animé suit trois grandes vagues. La **première**, dans les années 1970-1980, est passive : les chaînes occidentales achètent des séries japonaises **pas chères** pour remplir leurs grilles enfants. En France, *Goldorak* est diffusé sur Antenne 2 dès 1978 et atteint des audiences délirantes. La décennie suivante, le **Club Dorothée** (TF1, 1987-1997) importe massivement *Dragon Ball*, *Les Chevaliers du Zodiaque*, *Ranma 1/2*, *Cobra*. Toute une génération française découvre l'animation japonaise sans en connaître l'origine ni les codes — souvent dans des versions doublées approximatives et censurées. Aux États-Unis, le phénomène équivalent passe par *Pokémon* (1998) et *Dragon Ball Z* (1996).

La **deuxième vague**, dans les années 1990-2000, est celle de la **reconnaissance critique**. *Akira* (1988) et *Ghost in the Shell* (1995) frappent l'Occident comme **œuvres d'avant-garde**. *Le Voyage de Chihiro* gagne l'Oscar en 2003. L'animé n'est plus seulement un divertissement enfantin mais un **cinéma d'auteur** auquel les festivals s'intéressent.

La **troisième vague**, depuis ~2015, est celle du **streaming global**. **Crunchyroll** (fondé en 2006, racheté par Sony) et **Netflix** simulcastent les séries japonaises **le jour même de leur diffusion** au Japon. Le piratage qui dominait la consommation d'animé hors-Japon s'effondre. *Demon Slayer : Mugen Train* devient en 2020 le **plus gros succès cinéma mondial** de l'année — porté par un public planétaire. L'animé est devenu un pilier reconnu du **soft power** culturel japonais, au même titre que la cuisine, la mode rue ou les jeux vidéo. Le gouvernement japonais en fait, depuis 2007, un **outil diplomatique** explicite via le label *Cool Japan*.`
    }

  ],

  quiz: [
    {
      q: `Qui a réalisé Astro Boy en 1963 et est considéré comme le père de l'animation TV japonaise ?`,
      options: [
        `Hayao Miyazaki`,
        `Osamu Tezuka`,
        `Isao Takahata`,
        `Katsuhiro Otomo`
      ],
      correcte: 1,
      explication: `Osamu Tezuka (1928-1989), déjà mangaka célèbre, fonde Mushi Production en 1961 et lance en 1963 Tetsuwan Atomu (Astro Boy), première série animée japonaise diffusée à la télévision. Pour tenir un budget hebdomadaire dix fois inférieur à Disney, il invente la limited animation. Miyazaki et Takahata viennent après lui, Otomo encore plus tard.`
    },
    {
      type: 'vrai-faux',
      q: `Vrai ou faux ?`,
      affirmation: `Au Japon, le mot animé désigne uniquement l'animation produite au Japon.`,
      reponse: false,
      explication: `C'est l'inverse. Au Japon, animé (アニメ, de animēshon) désigne toute animation, y compris Disney ou Pixar. Le sens restrictif (animation japonaise comme tradition distincte) est un usage occidental, qui s'est imposé à mesure que l'animation japonaise se constituait en système autonome reconnaissable.`
    },
    {
      type: 'ordre-chrono',
      q: `Remets ces œuvres dans l'ordre de leur sortie :`,
      items: [
        `Astro Boy de Tezuka (première série animée TV japonaise)`,
        `Mon voisin Totoro de Miyazaki`,
        `Akira de Katsuhiro Otomo`,
        `Neon Genesis Evangelion de Hideaki Anno`,
        `Le Voyage de Chihiro de Miyazaki`,
        `Your Name de Makoto Shinkai`
      ],
      explication: `Astro Boy ouvre l'ère TV en 1963. Totoro (avril 1988) sort quelques mois avant Akira (juillet 1988). Evangelion arrive en 1995, Chihiro en 2001 (Oscar 2003), Your Name est le grand succès commercial de 2016. Ces six titres balisent les principales étapes de l'animé moderne.`
    },
    {
      q: `Qu'est-ce que la limited animation ?`,
      options: [
        `Une technique d'animation utilisant uniquement le noir et blanc`,
        `Une économie radicale d'images (8-12 par seconde, plans fixes, recyclage) inventée par Tezuka pour produire des séries TV à budget contraint, devenue ensuite un choix de style`,
        `L'animation interdite aux mineurs au Japon`,
        `Une technique d'animation 3D propre à Pixar`
      ],
      correcte: 1,
      explication: `La limited animation est l'invention fondatrice de Tezuka en 1963 : produire de l'animation hebdomadaire à coût réduit en limitant le nombre de dessins par seconde, en multipliant les plans fixes où seule la bouche bouge, en recyclant des séquences. Contrainte économique au départ, elle est devenue progressivement une grammaire visuelle revendiquée — la valeur d'un plan tient à la composition, au silence, à la musique, non à la fluidité du mouvement.`
    },
    {
      type: 'associer',
      q: `Associe chaque réalisateur à une œuvre majeure :`,
      paires: [
        { gauche: 'Hayao Miyazaki', droite: 'Le Voyage de Chihiro' },
        { gauche: 'Hideaki Anno', droite: 'Neon Genesis Evangelion' },
        { gauche: 'Satoshi Kon', droite: 'Paprika' },
        { gauche: 'Makoto Shinkai', droite: 'Your Name' },
        { gauche: 'Katsuhiro Otomo', droite: 'Akira' },
        { gauche: 'Mamoru Hosoda', droite: 'Summer Wars' }
      ],
      explication: `Six signatures majeures : Miyazaki (Ghibli, Oscar 2003 pour Chihiro), Anno (Evangelion 1995, choc générationnel), Kon (Paprika 2006, cinéma du rêve), Shinkai (Your Name 2016, succès planétaire), Otomo (Akira 1988, animé cyberpunk de référence), Hosoda (Summer Wars 2009, famille et virtuel). Chacun a imposé une signature reconnaissable.`
    },
    {
      type: 'texte-a-trou',
      q: `Complète :`,
      texte: `Le Studio {Ghibli}, fondé en 1985 par {Miyazaki} et Takahata, signe Mon voisin {Totoro} en 1988 et Le Voyage de {Chihiro} en 2001, qui remporte l'Oscar du meilleur film d'animation.`,
      explication: `Le Studio Ghibli, fondé en juin 1985 par Hayao Miyazaki et Isao Takahata (avec le producteur Toshio Suzuki), constitue le pôle d'auteur de l'animation japonaise. Mon voisin Totoro (1988) impose son univers ; Le Voyage de Chihiro (2001) reçoit l'Oscar du meilleur film d'animation en 2003 — première reconnaissance institutionnelle planétaire pour l'animé.`
    },
    {
      q: `Quel genre marketing cible spécifiquement les jeunes garçons et regroupe des œuvres comme Dragon Ball, Naruto, One Piece et Jujutsu Kaisen ?`,
      options: [
        `Shojo`,
        `Seinen`,
        `Shonen`,
        `Isekai`
      ],
      correcte: 2,
      explication: `Le shonen vise les jeunes garçons (8-18 ans) et privilégie combats, amitié et dépassement de soi. C'est le segment commercial dominant à l'export. Le shojo cible les jeunes filles, le seinen les jeunes adultes masculins (récits plus sombres), l'isekai est une famille thématique transverse (transposition dans un autre monde).`
    },
    {
      type: 'vrai-faux',
      q: `Vrai ou faux ?`,
      affirmation: `La majorité des séries animées japonaises sont des adaptations d'œuvres préexistantes, le plus souvent des mangas.`,
      reponse: true,
      explication: `Vrai. Le modèle économique fondateur posé par Tezuka repose sur la boucle manga → animé → produits dérivés : le manga teste les histoires en magazine hebdomadaire, l'animation adapte les succès, qui relancent à leur tour les ventes du manga. La majorité écrasante des séries TV japonaises (sans doute plus de 80 %) sont des adaptations — de mangas, mais aussi de light novels et de jeux vidéo.`
    },
    {
      q: `Que désigne la formule cool Japan ?`,
      options: [
        `Le nom d'un studio d'animation rival de Ghibli`,
        `Une politique culturelle du gouvernement japonais, depuis 2007, qui fait des exports culturels (animé, manga, mode, jeux vidéo) un outil de soft power`,
        `Un genre d'animé centré sur les climats froids`,
        `Le surnom donné à la scène techno de Tokyo`
      ],
      correcte: 1,
      explication: `Cool Japan est une politique culturelle officielle lancée par le gouvernement japonais à partir de 2007, qui reconnaît dans les exports culturels — animé, manga, cuisine, mode rue, jeux vidéo — un instrument diplomatique et économique. L'animé y occupe une place centrale, illustrant le passage de l'industrie d'un statut commercial à celui d'un pilier reconnu du soft power national.`
    },
    {
      q: `Quel film a remporté l'Oscar du meilleur film d'animation en 2003 et constitue la première reconnaissance institutionnelle planétaire pour l'animé ?`,
      options: [
        `Akira`,
        `Princesse Mononoké`,
        `Le Voyage de Chihiro`,
        `Your Name`
      ],
      correcte: 2,
      explication: `Le Voyage de Chihiro de Hayao Miyazaki, sorti au Japon en 2001 (où il bat tous les records de box-office), remporte l'Oscar du meilleur film d'animation en 2003. C'est la première fois qu'un film d'animation japonais reçoit cette distinction — moment de bascule pour la reconnaissance critique mondiale du médium. Akira et Mononoké sont antérieurs, Your Name (2016) ne sera pas nominé.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Animé',
      definition: `Hors du Japon, désigne l'**animation produite au Japon** comme tradition artistique distincte de l'animation occidentale. Au Japon (アニメ, abréviation de *animēshon*), le mot désigne en réalité **toute animation**, occidentale comprise.`
    },
    {
      terme: 'Limited animation',
      definition: `Économie radicale d'images inventée par **Tezuka** en 1963 : **8 à 12 dessins par seconde** contre 24 chez Disney, plans fixes prolongés, recyclage de cellulos. Contrainte budgétaire devenue **grammaire visuelle** — la valeur d'un plan tient à la composition, au silence, à la musique.`
    },
    {
      terme: 'Manga',
      definition: `Bande dessinée japonaise, support **majoritaire** des adaptations animées. Le modèle économique fondateur repose sur la boucle *manga → animé → produits dérivés* : le manga teste les histoires en magazine hebdomadaire, l'animé adapte les succès qui relancent ses ventes.`
    },
    {
      terme: 'Shonen',
      definition: `Genre marketing visant les **jeunes garçons** (8-18 ans). Combats, amitié, dépassement de soi, montée en puissance progressive. Segment dominant à l'export : *Dragon Ball*, *Naruto*, *One Piece*, *Jujutsu Kaisen*.`
    },
    {
      terme: 'Seinen',
      definition: `Genre marketing visant les **jeunes adultes masculins**. Récits plus **sombres**, moralement ambigus, parfois ultra-violents. Densité narrative qui se rapproche du roman ou de la BD européenne adulte (*Berserk*, *Monster*, *Vagabond*).`
    },
    {
      terme: 'Mecha',
      definition: `Famille thématique mettant en scène des **robots géants pilotés par des humains**, souvent adolescents. Né avec *Mazinger Z* (1972), codifié par *Gundam* (1979), bouleversé par *Evangelion* (1995) qui en fait une méditation existentielle.`
    },
    {
      terme: 'Isekai',
      definition: `Genre où un héros contemporain est **transposé dans un monde fantastique parallèle**. Devenu hégémonique dans les années 2010 au point d'être largement parodié pour son abus de tropes (*Sword Art Online*, *Re:Zero*, *Mushoku Tensei*).`
    },
    {
      terme: 'Studio Ghibli',
      definition: `Studio fondé en **1985** par **Hayao Miyazaki** et **Isao Takahata**. Pôle d'auteur du long métrage japonais : *Totoro* (1988), *Mononoké* (1997), *Le Voyage de Chihiro* (2001, **Oscar 2003**). Refus de l'animation numérique pure, soin pictural extrême des décors.`
    },
    {
      terme: 'Character design',
      definition: `Iconographie immédiatement reconnaissable de l'animé : **grands yeux** (lieu privilégié de l'émotion, hérité de Disney via Tezuka), cheveux colorés à fonction signalétique, expressions exagérées codifiées (goutte de sueur, veines saillantes). Véritable **alphabet émotionnel** partagé.`
    },
    {
      terme: 'Cool Japan',
      definition: `**Politique culturelle officielle** lancée par le gouvernement japonais à partir de 2007, qui reconnaît dans les exports culturels — animé, manga, cuisine, mode, jeux vidéo — un instrument de **soft power** diplomatique et économique.`
    }
  ]

});
