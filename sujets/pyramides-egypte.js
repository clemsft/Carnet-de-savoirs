/* ===================================================================
   SUJET — Les pyramides d'Égypte
   ===================================================================
   De la mastaba à Khéops : trois siècles d'ingénierie sacrée.
   Domaines : Histoire, Architecture
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'pyramides-egypte',
    titre: 'Les <em>pyramides d\'Égypte</em>',
    domaines: ['Histoire', 'Architecture'],
    tags: ['antiquité', 'égypte', 'gizeh', 'khéops', 'hiéroglyphes', 'pharaon'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['ecriture-cuneiforme', 'rome-antique', 'cathedrales-gothiques'],
    date_creation: '2026-05-12',
    date_maj: '2026-05-12'
  },

  resume: 'Comprendre l\'aventure architecturale la plus spectaculaire de l\'Antiquité — comment, en moins de deux siècles, les Égyptiens sont passés du simple tertre funéraire à la Grande Pyramide de Khéops, monument de 2,3 millions de blocs aligné à 0,06° près sur le nord vrai.',

  points_cles: [
    'Les **pyramides** sont des **tombeaux pharaoniques** conçus pour assurer le voyage du roi vers l\'au-delà et la survie de son **ka** (force vitale).',
    'Leur forme est l\'aboutissement d\'une **évolution rapide** : mastaba plate, puis pyramide à degrés de Djoser (~2650 av. J.-C.), puis pyramide rhomboïdale et pyramide rouge de Snéfrou, enfin la pyramide lisse de **Khéops à Gizeh** (~2560 av. J.-C.).',
    'La **Grande Pyramide de Khéops** est colossale : **2,3 millions de blocs**, environ **6 millions de tonnes**, **146 mètres** de hauteur initiale, alignée sur le **nord vrai** à **±0,06°** près.',
    'Les bâtisseurs n\'étaient **pas des esclaves** mais des **paysans rémunérés**, mobilisés pendant la crue annuelle du Nil — quand leurs champs étaient inondés.',
    'Les **techniques** restent débattues : rampes droites, rampes enveloppantes, contrepoids, ou traîneaux glissant sur du sable mouillé. Les **papyrus de Merer** (découverts à Ouadi el-Jarf en 2013) documentent le transport des blocs de calcaire depuis les carrières de **Tourah**.',
    'Le déchiffrement des **hiéroglyphes** par **Champollion en 1822** — grâce à la pierre de Rosette ramenée par l\'expédition d\'Égypte de Bonaparte — a rendu sa voix à cette civilisation oubliée.',
    'La mission **ScanPyramids** a détecté en **2017**, par muographie cosmique, une **grande cavité inconnue** d\'une trentaine de mètres au-dessus de la grande galerie : la pyramide n\'a pas livré tous ses secrets.'
  ],

  carte_mentale: {
    central: 'pyramide',
    noeuds: [
      { id: 'pyramide', label: 'Pyramide', description: 'Monument funéraire pharaonique de l\'Ancien Empire (~2700–2200 av. J.-C.), aboutissement d\'une recherche architecturale de la forme parfaite.' },
      { id: 'evolution', label: 'Évolution', description: 'En moins de deux siècles, l\'architecture passe du tertre rectangulaire à la pyramide lisse de 146 m.' },
      { id: 'fonction', label: 'Fonction sacrée', description: 'Tombeau et machine à éternité : la pyramide assure le passage du pharaon vers l\'au-delà et la survie de son **ka**.' },
      { id: 'gizeh', label: 'Plateau de Gizeh', description: 'Trois pyramides célèbres : Khéops, Khéphren, Mykérinos. Le complexe le plus visité du monde antique.' },
      { id: 'construction', label: 'Construction', description: 'Hypothèses techniques multiples — rampes, traîneaux, contrepoids — et organisation sociale fascinante.' },
      { id: 'chantier', label: 'Chantier humain', description: 'Des **paysans** (non des esclaves) mobilisés pendant la crue du Nil, logés et nourris par l\'État pharaonique.' },
      { id: 'redecouverte', label: 'Redécouverte moderne', description: 'De Bonaparte à ScanPyramids : deux siècles d\'égyptologie et de muographie cosmique.' },

      // Évolution
      { id: 'mastaba', label: 'Mastaba', description: 'Tertre rectangulaire en briques crues, premier type de tombeau monumental égyptien.', parent: 'evolution' },
      { id: 'djoser', label: 'Djoser (degrés)', description: '**~2650 av. J.-C.** Première pyramide. Six mastabas empilées par **Imhotep** à Saqqara. La pierre remplace la brique.', parent: 'evolution' },
      { id: 'rhomboidale', label: 'Rhomboïdale', description: 'Snéfrou, ~2600 av. J.-C. La pente change à mi-hauteur — l\'angle initial s\'avère instable, on rectifie en cours de chantier.', parent: 'evolution' },
      { id: 'rouge', label: 'Pyramide rouge', description: 'Toujours Snéfrou. Première pyramide **véritablement lisse** réussie. Modèle direct de Khéops.', parent: 'evolution' },
      { id: 'kheops', label: 'Khéops', description: 'La Grande Pyramide. 146 m, 2,3 M de blocs, alignée à ±0,06° du nord vrai. Construite vers 2560 av. J.-C.', parent: 'evolution' },

      // Construction
      { id: 'rampes', label: 'Rampes', description: 'Droites, latérales, ou enveloppantes — le débat reste ouvert. Chaque hypothèse pose ses propres problèmes mécaniques.', parent: 'construction' },
      { id: 'merer', label: 'Papyrus de Merer', description: '**Découverts en 2013** à Ouadi el-Jarf : journal de bord d\'un chef d\'équipe transportant les blocs de calcaire de **Tourah** vers Gizeh par voie d\'eau.', parent: 'construction' },

      // Redécouverte
      { id: 'champollion', label: 'Champollion 1822', description: 'Déchiffrement des **hiéroglyphes** grâce à la pierre de Rosette. Naissance de l\'égyptologie scientifique.', parent: 'redecouverte' },
      { id: 'scanpyramids', label: 'ScanPyramids 2017', description: 'Détection par **muons cosmiques** d\'une grande cavité inconnue au-dessus de la grande galerie de Khéops.', parent: 'redecouverte' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Une <em>obsession</em> de la forme pure',
      contenu_md:
`Quand on imagine l\'Égypte ancienne, la pyramide s\'impose comme son icône immédiate. Elle est pourtant l\'aboutissement d\'une recherche architecturale **très brève dans le temps** : à peine **un siècle et demi** sépare la première pyramide à degrés des trois géantes de Gizeh. C\'est l\'élan d\'une dynastie — la **IVᵉ dynastie de l\'Ancien Empire** — qui pousse à son extrême l\'idée d\'un tombeau royal monumental.

Avant la pyramide existait la [mastaba]{accent} : un tertre rectangulaire en briques crues, surmontant la chambre funéraire enterrée. Robuste, mais sans verticalité, sans ambition cosmique. Vers **2650 av. J.-C.**, l\'architecte **Imhotep** — premier nom propre d\'architecte connu de l\'histoire — empile six mastabas de tailles décroissantes pour le pharaon **Djoser**. Naît à Saqqara la première pyramide, à degrés, en pierre de taille. L\'Égypte vient d\'inventer la **construction monumentale en pierre**.

Trois générations plus tard, le pharaon **Snéfrou** construit successivement *trois* pyramides — un cas unique. La pyramide rhomboïdale change sa pente à mi-hauteur (l\'angle initial s\'est avéré dangereux). La pyramide rouge, juste à côté, est la première **véritablement lisse** à tenir debout. Son fils, **Khéops**, n\'aura plus qu\'à parfaire le modèle. À Gizeh.`
    },

    {
      type: 'widget',
      titre: 'L\'évolution architecturale, du tertre à la perfection',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '~3000 av. J.-C.', titre: 'Mastabas', description: 'Tertres funéraires rectangulaires en **briques crues**, surmontant la chambre funéraire enterrée. Premier type de tombeau monumental.' },
          { date: '~2650 av. J.-C.', titre: 'Pyramide à degrés de Djoser', description: 'À **Saqqara**. L\'architecte **Imhotep** empile six mastabas de pierre — 60 m de haut. Premier monument de pierre de taille de l\'histoire.' },
          { date: '~2600 av. J.-C.', titre: 'Pyramide rhomboïdale', description: 'Snéfrou. À mi-hauteur, l\'angle passe de **54°** à **43°** : les bâtisseurs corrigent en urgence une instabilité détectée pendant le chantier.' },
          { date: '~2590 av. J.-C.', titre: 'Pyramide rouge', description: 'Toujours Snéfrou, juste à côté. Premier monument à présenter dès l\'origine la **forme lisse parfaite**. Modèle direct du chantier de Gizeh.' },
          { date: '~2560 av. J.-C.', titre: 'Grande Pyramide de Khéops', description: 'À **Gizeh**. **146 m**, **2,3 millions de blocs**, alignée sur le nord vrai à **±0,06°**. Reste pendant **3 800 ans** le plus haut monument du monde.' },
          { date: '~2530 av. J.-C.', titre: 'Khéphren et Mykérinos', description: 'Les deux pyramides voisines de Gizeh, achevant le complexe. Khéphren conserve aujourd\'hui un peu de son revêtement de calcaire blanc, au sommet.' },
          { date: '~2200 av. J.-C.', titre: 'Fin de l\'âge des pyramides', description: 'L\'effondrement de l\'Ancien Empire interrompt la construction de monuments géants. Les pharaons du Moyen Empire en construiront encore, mais plus petites et en briques crues.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Une <em>machine</em> à éternité',
      contenu_md:
`Pourquoi cette débauche d\'efforts pour un seul mort ? La pyramide n\'est pas un tombeau ordinaire — c\'est un **dispositif religieux**. Le [pharaon]{accent} égyptien n\'est pas qu\'un roi : il est l\'incarnation terrestre d\'Horus, le pont entre les dieux et les hommes. Sa mort n\'est qu\'un passage, à condition que le voyage vers l\'au-delà soit correctement équipé.

L\'Égyptien pense que chaque être humain est composé de plusieurs principes : le corps, mais aussi le **ba** (l\'âme individuelle), et surtout le **ka** — sorte de force vitale, double immatériel du défunt. Pour survivre éternellement, le **ka** a besoin que le **corps physique soit préservé** (d\'où la momification) et qu\'il dispose d\'**offrandes**, de **provisions**, de **textes magiques** pour guider sa route.

La pyramide est l\'enveloppe protectrice de tout cela. Sa **forme triangulaire** elle-même, pointée vers le ciel, est probablement une **rampe symbolique** vers le soleil — Rê — auquel le pharaon est censé rejoindre. C\'est de l\'architecture comme **prière en pierre** : un objet conçu pour durer plus longtemps que toutes les choses humaines, parce que ce qu\'il porte doit échapper au temps.`
    },

    {
      type: 'widget',
      titre: 'Comparer les grandes pyramides',
      composant: 'SelecteurValeurs',
      params: {
        unite: 'm de hauteur',
        indexInitial: 4,
        options: [
          { label: 'Djoser (à degrés)', valeur: 62, description: 'Saqqara, ~2650 av. J.-C. Six mastabas empilées par Imhotep. Première pyramide de pierre.' },
          { label: 'Rhomboïdale', valeur: 105, description: 'Snéfrou, ~2600 av. J.-C. La pente change à mi-hauteur. Échec partiel devenu monument singulier.' },
          { label: 'Pyramide rouge', valeur: 105, description: 'Snéfrou, ~2590 av. J.-C. Première pyramide lisse réussie. Prototype direct de Khéops.' },
          { label: 'Mykérinos', valeur: 65, description: 'Gizeh, ~2510 av. J.-C. La plus petite des trois pyramides de Gizeh, mais la plus richement décorée à l\'intérieur.' },
          { label: 'Khéops', valeur: 146, description: 'Gizeh, ~2560 av. J.-C. La Grande Pyramide. Reste 3 800 ans le plus haut monument du monde, jusqu\'à la cathédrale de Lincoln en 1311.' },
          { label: 'Khéphren', valeur: 143, description: 'Gizeh, ~2540 av. J.-C. Légèrement plus basse que Khéops mais bâtie sur un terrain plus élevé — elle paraît plus haute.' }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'Khéops en chiffres',
      contenu_md: '**2,3 millions de blocs** de calcaire et de granit, pesant en moyenne **2,5 tonnes** chacun. **6 millions de tonnes** au total. **146 mètres** de hauteur initiale (137 m aujourd\'hui, le pyramidion ayant disparu). Base carrée de **230 mètres** de côté, avec moins de **20 cm d\'écart** entre les quatre côtés. Quatre faces alignées sur les quatre points cardinaux à **±0,06°** près — une précision astronomique. Tout cela en **20 à 25 ans** de chantier.'
    },

    {
      type: 'widget',
      titre: 'Les trois pyramides de Gizeh',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: '~2560 av. J.-C.',
            titre: 'Khéops',
            description: 'La **Grande Pyramide**. 146 m à l\'origine, 2,3 millions de blocs. Reste pendant 3 800 ans le plus haut monument du monde. Renferme trois chambres connues (chambre du roi, chambre de la reine, chambre souterraine inachevée) et la spectaculaire **grande galerie** de 47 m de long. Une cavité inconnue de 30 m a été détectée en 2017.'
          },
          {
            tag: '~2540 av. J.-C.',
            titre: 'Khéphren',
            description: 'Fils de Khéops. 143 m à l\'origine, bâtie sur un terrain plus élevé : elle paraît dominer Khéops. Conserve au sommet **une partie de son revêtement** de calcaire blanc poli de Tourah. Le **Grand Sphinx** est traditionnellement associé à son complexe funéraire.'
          },
          {
            tag: '~2510 av. J.-C.',
            titre: 'Mykérinos',
            description: 'Petit-fils de Khéops. La plus petite des trois (65 m) mais la plus richement parée : ses 16 premières assises étaient revêtues de **granit rose d\'Assouan**. À l\'intérieur, des sarcophages magnifiquement ornés — l\'un d\'eux a été perdu dans un naufrage au large du Portugal en 1838.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>mystère technique</em>',
      contenu_md:
`Comment a-t-on construit Khéops ? La question hante les ingénieurs depuis Hérodote, et — chose remarquable — **aucune réponse définitive** n\'existe encore. Les Égyptiens n\'ont laissé aucun manuel de chantier, aucune coupe technique. Tout ce que l\'on sait, on le déduit des **traces matérielles** : carrières, rampes inachevées, outils, ostraca.

Le premier mystère est le **transport**. Les blocs de calcaire fin du revêtement viennent de **Tourah**, sur la rive opposée du Nil. Les blocs de **granit** de la chambre du roi viennent de **Assouan**, à **800 km** au sud. Le bloc de granit le plus lourd de la chambre du roi pèse **80 tonnes**. Comment l\'a-t-on déplacé ?

La découverte la plus récente est celle des [papyrus de Merer]{accent}, mis au jour en **2013** par une mission franco-égyptienne à Ouadi el-Jarf, sur la mer Rouge. Ce sont les **plus anciens papyrus inscrits** au monde — 4 500 ans. Ils contiennent le **journal de bord** d\'un chef d\'équipe nommé **Merer**, sous Khéops. Merer y note le transport, par bateau, de blocs de calcaire de Tourah jusqu\'au chantier de Gizeh. C\'est la première description directe, par un témoin, du transport des matériaux de la Grande Pyramide.

Pour le hissage sur le chantier, les hypothèses s\'affrontent. Une **rampe droite** d\'1,5 km serait nécessaire — colossale et invraisemblable. Une **rampe enveloppante** en spirale autour de la pyramide pose de gros problèmes d\'angles aux arêtes. Une représentation murale égyptienne montre des ouvriers tirant un colosse sur un **traîneau**, tandis qu\'un homme verse de l\'eau devant les patins — expériences récentes confirmées : du **sable mouillé** réduit la friction de **moitié**. La vérité est probablement une combinaison de techniques.`
    },

    {
      type: 'widget',
      titre: 'Quatre hypothèses sur la construction',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          { titre: 'La rampe droite', description: 'Une longue rampe perpendiculaire à une face, en briques crues. **Avantage** : géométrie simple. **Problème** : pour atteindre 146 m, elle devrait mesurer 1,5 km de long et représenter un volume comparable à celui de la pyramide elle-même.' },
          { titre: 'La rampe enveloppante', description: 'Une rampe en spirale autour de la pyramide, plus compacte. **Avantage** : volume réduit. **Problème** : empêche de vérifier l\'alignement diagonal des arêtes, et les virages à 90° aux angles sont mécaniquement difficiles avec des charges lourdes.' },
          { titre: 'La rampe intérieure', description: 'Hypothèse de l\'architecte **Jean-Pierre Houdin** : une rampe interne en spirale, construite dans l\'épaisseur de la pyramide au fur et à mesure. Compatible avec certaines anomalies thermiques détectées par drone. Pas encore validée.' },
          { titre: 'Traîneaux sur sable mouillé', description: 'Une fresque de la tombe de Djéhoutyhotep (XIIᵉ dynastie) montre 172 hommes tirant un colosse sur un traîneau ; un personnage verse de l\'**eau** devant les patins. Les expériences modernes confirment : **mouiller le sable** réduit la friction de **50 %**.' },
          { titre: 'Transport fluvial', description: 'Le **Nil et ses canaux** jouent un rôle décisif. Les **papyrus de Merer** (2013) documentent le transport des blocs de calcaire de Tourah jusqu\'à des bassins creusés au pied même du plateau de Gizeh. Les blocs n\'ont à franchir par voie terrestre que les derniers centaines de mètres.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>chantier humain</em>',
      contenu_md:
`La légende veut que les pyramides aient été bâties par des **esclaves** sous le fouet — c\'est l\'image qu\'a popularisée Hérodote au Vᵉ siècle av. J.-C., et plus tard Hollywood. **Elle est fausse.**

Les fouilles menées depuis 1990 par l\'archéologue **Mark Lehner** sur le plateau de Gizeh ont mis au jour, à 400 m au sud de la pyramide de Mykérinos, une **véritable ville ouvrière** : ateliers, dortoirs, boulangeries collectives produisant des milliers de pains par jour, cimetières des ouvriers. Les **inscriptions** retrouvées (graffitis d\'équipes, listes administratives) montrent que les bâtisseurs étaient des **paysans rémunérés**, organisés en équipes (« les amis de Khéops », « la troupe des vigoureux »), nourris en bière, pain et viande.

Le rythme du chantier coïncidait avec celui de la **crue annuelle du Nil**. De juillet à octobre, les champs étaient inondés, le travail agricole impossible. C\'est précisément à cette saison que la corvée pyramidale mobilisait les paysans — sous forme d\'**impôt en travail**. Le reste de l\'année, ils retournaient à leurs cultures. Ce système a permis à l\'État pharaonique de mobiliser une **main-d\'œuvre massive sans casser l\'économie agricole**.

On estime qu\'il y a eu **20 000 à 30 000 personnes** sur le chantier de Khéops aux moments de pointe — soit un effectif comparable à celui des plus grandes cathédrales gothiques quand elles étaient en construction. Comme pour ces dernières, c\'est l\'**organisation logistique** (voir [[cathedrales-gothiques]]) qui frappe l\'historien autant que la prouesse technique.`
    },

    {
      type: 'texte',
      titre: 'Chambres, corridors, et la <em>cavité de 2017</em>',
      contenu_md:
`L\'intérieur de Khéops est étonnamment vide pour un monument de cette taille. On y trouve trois chambres connues : la **chambre du roi**, garnie d\'un sarcophage de granit (mais vide à sa découverte — pillage très ancien) ; la **chambre de la reine**, plus petite, qui n\'a probablement jamais abrité de reine ; et une chambre souterraine **inachevée**, creusée dans le roc sous la pyramide.

L\'élément le plus spectaculaire est la **grande galerie** : un couloir incliné à 26°, **47 m de long**, **8,5 m de haut**, aux parois en encorbellement parfait. Personne ne sait précisément à quoi elle servait : trésor royal ? Manœuvre des blocs bouchant la chambre ? Chemin rituel ?

En **2017**, la mission internationale [ScanPyramids]{accent}, dirigée par l\'institut HIP de Paris, annonce une découverte majeure. En plaçant des **détecteurs de muons cosmiques** dans et autour de la pyramide pendant des mois, l\'équipe a cartographié la **densité interne** du monument — les muons traversent la pierre, mais moins bien que le vide. Résultat : une **vaste cavité d\'au moins 30 m de long** existe juste au-dessus de la grande galerie. Personne n\'y est encore entré. Sa nature exacte (chambre intentionnelle ? structure de soulagement des contraintes ?) reste débattue.

Quatre mille cinq cents ans après sa construction, Khéops continue de dissimuler des secrets — et d\'absorber le meilleur de notre technologie pour les arracher.`
    },

    {
      type: 'texte',
      titre: 'De <em>Bonaparte</em> à Champollion',
      contenu_md:
`Pendant des siècles, les pyramides ont fasciné l\'Europe sans qu\'on sache rien des civilisations qui les avaient bâties. Les [hiéroglyphes]{accent} couvrant tant de monuments restaient muets — on les croyait des symboles purement religieux, sans valeur phonétique.

L\'**expédition d\'Égypte de Bonaparte** (1798–1801) change tout. Le futur empereur emmène avec lui **167 savants** — mathématiciens, ingénieurs, naturalistes, dessinateurs — pour relever les monuments antiques. Le résultat, l\'immense *Description de l\'Égypte* publiée en 23 volumes, déclenche en Europe une véritable **égyptomanie**. Les architectes copient les pylônes, les mobilier rivalise de sphinx, Mozart compose la *Flûte enchantée*. Le XIXᵉ siècle vivra dans la fascination du Nil.

Surtout, en 1799, des soldats français découvrent près de Rosette, dans le Delta, une stèle de basalte gravée en **trois écritures** : hiéroglyphique, démotique, et grecque. C\'est la **pierre de Rosette**. Saisie par les Anglais après leur victoire, elle finit au British Museum, mais des copies circulent en Europe.

C\'est un linguiste français, **Jean-François Champollion**, qui en perce le mystère. En **septembre 1822**, après des années d\'efforts (et la rivalité féroce du Britannique Thomas Young), il comprend que les hiéroglyphes mêlent des **signes phonétiques** (qui notent des sons) et des **signes idéographiques** (qui désignent des choses). Il s\'écrie *« Je tiens l\'affaire ! »* et s\'évanouit. Trois mille ans d\'oubli viennent de se rompre. Les pierres de Gizeh ont retrouvé leur voix — comme, à la même époque, les tablettes mésopotamiennes retrouveront la leur (voir [[ecriture-cuneiforme]]).`
    },

    {
      type: 'encadre',
      label: 'Ce qu\'il faut retenir',
      contenu_md: 'Les pyramides ne sont pas des objets isolés mais le **produit final d\'une recherche architecturale rapide**, la projection terrestre d\'une **théologie du voyage royal vers l\'au-delà**, et le **plus grand chantier civil de l\'Antiquité**. Elles cumulent une **prouesse technique** (alignement à 0,06°, transport de blocs de 80 tonnes sur 800 km) et une **prouesse logistique** (mobilisation rémunérée de dizaines de milliers de paysans hors saison agricole). Et après quarante-cinq siècles, on continue d\'y faire des découvertes.'
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Les pyramides d\'Égypte ont été construites par des esclaves contraints sous le fouet.',
      reponse: false,
      explication: 'Faux. C\'est une légende propagée par Hérodote puis par Hollywood. Les fouilles de la ville ouvrière de Gizeh (Mark Lehner, depuis 1990) ont révélé que les bâtisseurs étaient des paysans rémunérés, organisés en équipes nommées, mobilisés pendant la crue du Nil quand le travail agricole était impossible.'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'La Grande Pyramide de Khéops est alignée sur le nord vrai avec une précision de moins de 0,1°.',
      reponse: true,
      explication: 'Vrai. L\'alignement des quatre faces sur les points cardinaux atteint une précision de ±0,06°. Pour des bâtisseurs sans boussole magnétique (le nord magnétique n\'a pas été utilisé), il fallait recourir à l\'observation astronomique — probablement la culmination d\'étoiles circumpolaires.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces étapes de l\'évolution architecturale dans l\'ordre :',
      items: [
        'Mastaba en briques crues',
        'Pyramide à degrés de Djoser',
        'Pyramide rhomboïdale de Snéfrou',
        'Pyramide lisse de Khéops à Gizeh'
      ],
      explication: 'Quatre étapes en moins de deux siècles : le tertre rectangulaire, puis l\'empilement de mastabas par Imhotep pour Djoser, puis l\'expérimentation par Snéfrou (la rhomboïdale corrige un angle instable en cours de chantier), enfin l\'aboutissement parfait de Khéops à Gizeh — 146 m de hauteur.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète cette phrase sur la mécanique du chantier :',
      texte: 'Les bâtisseurs des pyramides étaient des {paysans} mobilisés pendant la {crue} annuelle du Nil, quand leurs champs étaient inondés. Les blocs étaient transportés sur des {traîneaux}, parfois sur du sable mouillé pour réduire la friction.',
      explication: 'Le calendrier du chantier épousait celui du fleuve : trois mois de crue annuelle libéraient des dizaines de milliers de bras agricoles. Les expériences modernes confirment qu\'humidifier le sable devant un traîneau réduit la friction de moitié — exactement ce que représente une fresque égyptienne célèbre.'
    },
    {
      type: 'associer',
      q: 'Associe chaque pharaon à sa pyramide :',
      paires: [
        { gauche: 'Djoser', droite: 'Pyramide à degrés de Saqqara' },
        { gauche: 'Snéfrou', droite: 'Pyramide rhomboïdale et pyramide rouge' },
        { gauche: 'Khéops', droite: 'Grande Pyramide de Gizeh' },
        { gauche: 'Khéphren', droite: 'Pyramide associée au Grand Sphinx' }
      ],
      explication: 'Djoser ouvre la voie avec Imhotep vers 2650 av. J.-C. Son arrière-petit-fils Snéfrou expérimente : trois pyramides à son nom, dont la rhomboïdale et la rouge. Son fils Khéops réalise la Grande Pyramide. Son petit-fils Khéphren bâtit la deuxième de Gizeh, traditionnellement associée au Sphinx.'
    },
    {
      type: 'associer',
      q: 'Associe chaque élément à sa fonction ou caractéristique :',
      paires: [
        { gauche: 'Ka', droite: 'Force vitale du défunt à préserver' },
        { gauche: 'Grande galerie', droite: 'Couloir de 47 m en encorbellement' },
        { gauche: 'Papyrus de Merer', droite: 'Journal du transport des blocs depuis Tourah' },
        { gauche: 'ScanPyramids', droite: 'Détection muonique d\'une cavité en 2017' }
      ],
      explication: 'Quatre clés pour comprendre Khéops : la théologie du ka justifie le tombeau ; la grande galerie est sa pièce architecturale la plus virtuose ; les papyrus de Merer (découverts en 2013) éclairent la logistique ; ScanPyramids prolonge la recherche par muographie cosmique.'
    },
    {
      q: 'Qui est l\'architecte de la première pyramide, celle à degrés de Djoser ?',
      options: ['Hérodote', 'Imhotep', 'Champollion', 'Khéops lui-même'],
      correcte: 1,
      explication: 'Imhotep, vers 2650 av. J.-C. C\'est le premier nom propre d\'architecte conservé dans l\'histoire humaine. Il fut tellement vénéré qu\'il a été divinisé un millénaire après sa mort.'
    },
    {
      q: 'Combien de blocs constituent approximativement la Grande Pyramide de Khéops ?',
      options: ['~100 000', '~500 000', '~2,3 millions', '~10 millions'],
      correcte: 2,
      explication: 'Environ 2,3 millions de blocs, d\'un poids moyen de 2,5 tonnes — soit environ 6 millions de tonnes au total. La pyramide atteignait 146 m de hauteur à l\'origine (137 m aujourd\'hui).'
    },
    {
      q: 'Qu\'est-ce que les papyrus de Merer, découverts en 2013 ?',
      options: [
        'Un traité de médecine pharaonique',
        'Le journal de bord d\'un chef d\'équipe documentant le transport de blocs de calcaire vers Khéops',
        'Le testament de Toutânkhamon',
        'Une liste des pharaons de l\'Ancien Empire'
      ],
      correcte: 1,
      explication: 'Ces papyrus, mis au jour à Ouadi el-Jarf sur la mer Rouge, sont les plus anciens textes inscrits du monde (4 500 ans). Ils décrivent l\'acheminement de blocs de calcaire depuis les carrières de Tourah jusqu\'au chantier de Gizeh — première description directe du transport des matériaux par un témoin contemporain.'
    },
    {
      q: 'Pourquoi le chantier des pyramides mobilisait-il principalement de la main-d\'œuvre pendant la crue du Nil ?',
      options: [
        'Parce qu\'on faisait flotter les blocs sur l\'eau pour les amener',
        'Parce que les paysans étaient libres de leurs champs alors inondés, et pouvaient être mobilisés sans casser l\'économie agricole',
        'Parce que les dieux égyptiens l\'exigeaient',
        'Parce que c\'était la saison la plus fraîche'
      ],
      correcte: 1,
      explication: 'L\'État pharaonique a su synchroniser le chantier avec la crue annuelle (juillet–octobre) : les paysans, dont les terres étaient inondées, fournissaient l\'impôt en travail. À la décrue, ils retournaient cultiver. C\'est un système de mobilisation rotative remarquable.'
    },
    {
      q: 'Quel évènement déclenche le déchiffrement des hiéroglyphes en 1822 ?',
      options: [
        'La découverte du tombeau de Toutânkhamon',
        'La traduction par Champollion de la pierre de Rosette, stèle trilingue rapportée par l\'expédition d\'Égypte de Bonaparte',
        'L\'ouverture d\'une chambre secrète à Khéops',
        'Un manuscrit retrouvé à Alexandrie'
      ],
      correcte: 1,
      explication: 'La pierre de Rosette (1799) porte le même texte en trois écritures : hiéroglyphique, démotique et grecque. Champollion comprend en septembre 1822 que les hiéroglyphes mêlent signes phonétiques et idéographiques — un pont vers les langues antiques équivalent à ce que Behistun fut au cunéiforme.'
    },
    {
      q: 'Qu\'a révélé la mission ScanPyramids en 2017 ?',
      options: [
        'Que Khéops était plus grande qu\'on ne le pensait',
        'Une vaste cavité d\'au moins 30 m juste au-dessus de la grande galerie, détectée par muographie cosmique',
        'Des fresques inédites dans la chambre du roi',
        'Le sarcophage manquant de Khéops'
      ],
      correcte: 1,
      explication: 'En plaçant des détecteurs de muons cosmiques autour et dans la pyramide, l\'équipe internationale a cartographié la densité interne du monument. Une zone notablement moins dense — donc creuse — d\'une trentaine de mètres a été identifiée. Sa nature exacte (chambre intentionnelle ? structure de décharge ?) reste à explorer.'
    },
    {
      q: 'Quelle est la fonction religieuse principale d\'une pyramide ?',
      options: [
        'Servir d\'observatoire astronomique',
        'Abriter le tombeau du pharaon et tout ce que son ka requiert pour son voyage vers l\'au-delà',
        'Stocker les céréales du royaume',
        'Marquer les frontières de l\'Égypte'
      ],
      correcte: 1,
      explication: 'La pyramide est avant tout un dispositif funéraire et religieux : elle protège la momie, héberge les offrandes, abrite les textes magiques nécessaires au voyage du défunt. Sa forme triangulaire pointée vers le ciel est une rampe symbolique vers le soleil — Rê — que rejoint le pharaon.'
    }
  ],

  vocabulaire: [
    {
      terme: 'Pyramide',
      definition: `**Tombeau pharaonique** monumental de l'Ancien Empire égyptien (~2700-2200 av. J.-C.). Dispositif religieux destiné à assurer le voyage du roi vers l'au-delà : sa **forme triangulaire** pointée vers le ciel figure une rampe symbolique vers le soleil Rê.`
    },
    {
      terme: 'Mastaba',
      definition: `**Tertre funéraire** rectangulaire en briques crues surmontant la chambre enterrée, ancêtre direct de la pyramide. Imhotep en empile six de tailles décroissantes vers 2650 av. J.-C. pour le pharaon Djoser — naissance de la pyramide à degrés.`
    },
    {
      terme: 'Ka',
      definition: `**Force vitale** ou *double immatériel* du défunt dans la religion égyptienne. Pour survivre éternellement, il a besoin que le corps soit préservé (momification), qu'il dispose d'offrandes et de textes magiques. Toute l'architecture pyramidale est conçue pour le servir.`
    },
    {
      terme: 'Pharaon',
      definition: `**Roi de l'Égypte ancienne**, considéré comme l'incarnation terrestre d'Horus et pont entre les dieux et les hommes. Sa mort n'est qu'un passage, à condition que le voyage vers l'au-delà soit correctement équipé — d'où la débauche d'efforts pour son tombeau.`
    },
    {
      terme: 'Hiéroglyphes',
      definition: `Écriture sacrée égyptienne, mêlant **signes phonétiques** (qui notent des sons) et **signes idéographiques** (qui désignent des choses). Restée muette pendant deux millénaires, déchiffrée en **1822** par **Jean-François Champollion** grâce à la pierre de Rosette.`
    },
    {
      terme: 'Pierre de Rosette',
      definition: `Stèle de basalte gravée en **trois écritures** (hiéroglyphique, démotique, grecque), découverte en 1799 près de Rosette dans le Delta par l'expédition d'Égypte de Bonaparte. Clé du déchiffrement des hiéroglyphes par Champollion.`
    },
    {
      terme: 'Papyrus de Merer',
      definition: `**Plus anciens papyrus inscrits du monde** (~4 500 ans), découverts en 2013 à Ouadi el-Jarf. Journal de bord d'un chef d'équipe sous Khéops documentant le transport par bateau des blocs de calcaire de **Tourah** vers Gizeh — première description directe de la logistique pyramidale.`
    },
    {
      terme: 'Imhotep',
      definition: `**Premier nom d'architecte** conservé dans l'histoire humaine. Vers 2650 av. J.-C., il conçoit pour le pharaon **Djoser** la première pyramide à degrés de Saqqara, première construction monumentale en pierre de taille. Divinisé un millénaire plus tard.`
    },
    {
      terme: 'Muographie',
      definition: `Technique d'**imagerie par muons cosmiques**, particules subatomiques qui traversent la matière. Permet de cartographier la **densité interne** de gros objets — pyramides, volcans, réacteurs. La mission **ScanPyramids** a détecté ainsi une grande cavité inconnue dans Khéops en 2017.`
    },
    {
      terme: 'Crue du Nil',
      definition: `Inondation annuelle du fleuve (juillet-octobre) qui fertilise les terres et rythme toute l'économie égyptienne antique. Pendant ces mois, les champs étant submergés, les **paysans** étaient mobilisés sur les chantiers pharaoniques — main-d'œuvre rémunérée sans casser l'agriculture.`
    }
  ]

});
