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
    date_maj: '2026-05-13'
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
