/* ===================================================================
   SUJET — Le Big Bang
   ===================================================================
   L'histoire d'un univers qui se déploie depuis 13,8 milliards d'années.
   Domaines : Cosmologie, Astrophysique
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'big-bang',
    titre: `Le <em>Big Bang</em>`,
    domaines: ['Astrophysique'],
    tags: ['univers', 'hubble', 'inflation', 'matière noire', 'fond diffus'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['theorie-relativite', 'trous-noirs', 'mecanique-quantique'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Le Big Bang n'est pas une explosion dans l'espace mais une **expansion** de l'espace lui-même. Depuis ~13,8 milliards d'années, l'univers se dilate et refroidit. Une histoire reconstituée pas à pas par Hubble, Penzias, Wilson, et les satellites COBE, WMAP, Planck.`,

  points_cles: [
    `Le Big Bang désigne la **phase initiale chaude et dense** de l'univers, il y a environ **13,8 milliards d'années** — pas une explosion dans l'espace, mais l'expansion de l'espace lui-même.`,
    `En **1929**, **Edwin Hubble** observe que toutes les galaxies lointaines s'éloignent de nous, et d'autant plus vite qu'elles sont loin : la **loi de Hubble-Lemaître**.`,
    `En **1965**, **Penzias et Wilson** détectent par hasard le **fond diffus cosmologique** — un rayonnement résiduel à *2,7 K* qui remplit tout le ciel, vestige direct de l'univers chaud. Prix Nobel 1978.`,
    `La **nucléosynthèse primordiale** explique pourquoi l'univers est composé d'environ **75 % d'hydrogène** et **25 % d'hélium** : ces proportions se sont fixées dans les **trois premières minutes**.`,
    `L'**inflation cosmique**, proposée en 1980 par Alan Guth, postule une phase d'expansion exponentielle dans les **10⁻³² premières secondes**, qui résout plusieurs énigmes du modèle standard.`,
    `Le bilan énergétique de l'univers actuel est troublant : **5 %** seulement de matière ordinaire, **27 %** de [matière noire]{accent} (invisible mais gravitationnellement détectable), **68 %** d'**énergie noire** (responsable de l'expansion accélérée).`,
    `En **1998**, deux équipes indépendantes découvrent que l'expansion **s'accélère** au lieu de ralentir. Prix Nobel 2011. L'énergie noire reste l'une des plus grandes énigmes de la physique.`
  ],

  carte_mentale: {
    central: 'bigbang',
    noeuds: [
      { id: 'bigbang', label: 'Big Bang', description: `Modèle standard de la cosmologie : un univers en expansion depuis ~13,8 Gda, refroidissant depuis un état initial dense et chaud.` },
      { id: 'observations', label: 'Trois piliers observationnels', description: `Expansion de Hubble, fond diffus cosmologique, abondances des éléments légers.` },
      { id: 'phases', label: `Phases de l'univers`, description: `De la singularité initiale à la formation des galaxies, en passant par l'inflation, le découplage matière-rayonnement et l'âge sombre.` },
      { id: 'composition', label: 'Composition actuelle', description: `5 % matière ordinaire, 27 % matière noire, 68 % énergie noire. La majorité du contenu cosmique est invisible.` },
      { id: 'mysteres', label: 'Énigmes ouvertes', description: `Nature de la matière noire et de l'énergie noire. Avant le Big Bang ? Multivers ?` },

      // Observations
      { id: 'hubble', label: 'Hubble (1929)', description: `Les galaxies s'éloignent : *v = H·d*. La constante de Hubble *H₀ ≈ 70 km/s/Mpc* — toujours débattue à quelques %.`, parent: 'observations' },
      { id: 'cmb', label: 'Fond diffus (1965)', description: `Penzias et Wilson détectent un rayonnement micro-onde à **2,7 K**, isotrope. C'est l'écho refroidi du plasma primordial.`, parent: 'observations' },
      { id: 'nucleosynthese', label: 'Nucléosynthèse', description: `Calcul théorique des abondances H, He, Li produits dans les premières minutes. Concorde à 1 % près avec les observations.`, parent: 'observations' },

      // Phases
      { id: 'inflation', label: 'Inflation (10⁻³² s)', description: `Expansion exponentielle qui agrandit l'univers d'un facteur ~10²⁶ en une fraction infinitésimale de seconde.`, parent: 'phases' },
      { id: 'plasma', label: 'Plasma primordial', description: `Pendant **380 000 ans**, l'univers est trop chaud pour que les électrons restent liés aux noyaux : la lumière est piégée.`, parent: 'phases' },
      { id: 'recombinaison', label: 'Recombinaison', description: `Vers 380 000 ans, la température descend sous 3 000 K. Les premiers atomes neutres se forment, l'univers devient **transparent**.`, parent: 'phases' },
      { id: 'agesombre', label: 'Âge sombre', description: `Entre la recombinaison et la formation des premières étoiles (~100 à 400 millions d'années), aucune source lumineuse n'éclaire l'univers.`, parent: 'phases' },
      { id: 'galaxies', label: 'Galaxies', description: `Les premières étoiles puis galaxies se forment par effondrement gravitationnel des surdensités issues de l'inflation.`, parent: 'phases' },

      // Composition
      { id: 'matierenoire', label: 'Matière noire', description: `Invisible mais détectable par ses effets gravitationnels sur la rotation des galaxies et le lentillage. Nature inconnue (WIMPs ? axions ?).`, parent: 'composition' },
      { id: 'energienoire', label: 'Énergie noire', description: `Composante qui accélère l'expansion depuis ~5 Gda. Pourrait correspondre à la **constante cosmologique** d'Einstein.`, parent: 'composition' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Une <em>idée</em> qui n'allait pas de soi`,
      contenu_md:
`Pendant la majeure partie de l'histoire humaine, on a cru l'univers **éternel** et statique. Aristote, Newton, Einstein lui-même — au point qu'Einstein avait introduit en 1917 une **constante cosmologique** dans ses équations uniquement pour permettre un univers stable. Il appellera plus tard ce choix *« la plus grande bêtise de [sa] vie »*.

C'est un prêtre belge, **Georges Lemaître**, qui en 1927 propose le premier que l'univers est en **expansion**, partant d'un *« atome primitif »*. Quelques années plus tard, Edwin Hubble observe les galaxies lointaines depuis l'observatoire du mont Wilson et confirme : elles s'éloignent toutes de nous, et d'autant plus vite qu'elles sont distantes.

Le nom *Big Bang* est d'ailleurs **moqueur** : c'est l'astronome **Fred Hoyle**, partisan d'un univers stationnaire et adversaire de la théorie, qui l'invente en 1949 lors d'une émission radio de la BBC pour ridiculiser ses concurrents. Le mot est resté.`
    },

    {
      type: 'encadre',
      label: `Ce que le Big Bang n'est pas`,
      contenu_md: `Trois confusions répandues à dissiper. **Un**, ce n'est pas une explosion dans un espace préexistant : c'est l'**espace lui-même** qui se dilate, en tout point à la fois. **Deux**, il n'y a pas de centre — l'expansion n'a pas eu lieu à un endroit particulier. **Trois**, on ne sait pas ce qui s'est passé *avant* la première fraction de seconde, ni si la question a même un sens : la [relativité générale]{accent} (voir [[theorie-relativite]]) cesse d'être valable à ces énergies extrêmes.`
    },

    {
      type: 'texte',
      titre: `Trois <em>piliers</em> qui rendent la théorie incontournable`,
      contenu_md:
`Le modèle du Big Bang ne s'est pas imposé sur un coup d'éclat, mais par l'accumulation de **trois preuves** indépendantes qui pointent toutes vers le même scénario.

Le premier pilier, c'est la **fuite des galaxies** observée par Hubble en 1929. Toutes les galaxies suffisamment lointaines s'éloignent de la Voie lactée, à une vitesse proportionnelle à leur distance. C'est exactement ce qu'on attend si l'espace est en expansion uniforme.

Le deuxième pilier, ce sont les **abondances cosmiques**. Si l'univers a commencé chaud et dense, les premières minutes ont dû produire des proportions très précises d'hydrogène (~75 %), d'hélium (~25 %), de deutérium (traces) et de lithium (traces). Or, c'est exactement ce qu'on mesure dans les nuages de gaz les plus anciens.

Le troisième pilier — le plus spectaculaire — c'est le **fond diffus cosmologique**, découvert par hasard en 1965 par Arno Penzias et Robert Wilson aux Bell Labs. Cherchant à éliminer un bruit parasite dans leur antenne, ils tombent sur un signal **uniforme**, présent dans toutes les directions, à une température de **2,7 K** au-dessus du zéro absolu. C'est le rayonnement résiduel de l'univers primordial, refroidi par l'expansion. Prédit dès 1948 par Alpher et Herman.`
    },

    {
      type: 'widget',
      titre: `Une chronologie cosmique`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '10⁻³⁶ — 10⁻³² s', titre: 'Inflation', description: `L'univers double de taille des dizaines de fois en une fraction de seconde. Sa taille passe de subatomique à macroscopique. Les fluctuations quantiques deviennent les germes des futures galaxies.` },
          { date: '~3 minutes', titre: 'Nucléosynthèse', description: `Protons et neutrons fusionnent en noyaux d'hélium. Les proportions d'hydrogène (75 %) et d'hélium (25 %) se figent et ne bougeront plus jusqu'aux premières étoiles.` },
          { date: '380 000 ans', titre: 'Recombinaison', description: `La température descend sous **3 000 K**. Les électrons se lient enfin aux noyaux : l'univers devient **transparent**. La lumière émise alors est le **fond diffus cosmologique** observé aujourd'hui à 2,7 K.` },
          { date: '~100 — 400 millions d\'années', titre: 'Premières étoiles', description: `Les surdensités s'effondrent gravitationnellement. Naissance des premières étoiles (population III), très massives et pauvres en métaux.` },
          { date: '~1 milliard d\'années', titre: 'Premières galaxies', description: `Le télescope **James Webb** (depuis 2022) en observe certaines à plus de **13 milliards d'années-lumière** — bien plus tôt et plus matures que prévu.` },
          { date: '~9 milliards d\'années', titre: 'Naissance du Soleil', description: `Notre étoile et son système planétaire se forment, dans un disque de gaz enrichi en éléments lourds par les générations d'étoiles précédentes.` },
          { date: '~13,8 Gda (aujourd\'hui)', titre: 'Expansion accélérée', description: `Depuis ~5 Gda, l'expansion s'accélère sous l'effet de l'**énergie noire**. Les galaxies lointaines s'éloignent de plus en plus vite.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `L'<em>inflation</em>, ou pourquoi l'univers est si étrangement régulier`,
      contenu_md:
`Dans les années 1970, un problème embarrasse les cosmologistes. Le fond diffus cosmologique est **trop uniforme** — sa température est la même partout, à un cent millième près. Or, des régions situées de part et d'autre du ciel n'ont jamais pu être en contact (la lumière n'a pas eu le temps de les relier dans l'âge de l'univers). Comment ont-elles pu s'accorder sur une température commune ?

En **1980**, le jeune physicien **Alan Guth** propose une solution audacieuse : juste après le Big Bang, l'univers aurait connu une phase d'**expansion exponentielle** — plus vite que la lumière apparente, ce que la relativité générale autorise pour l'espace lui-même. En une fraction infinitésimale de seconde (entre 10⁻³⁶ et 10⁻³² s), l'univers se serait dilaté d'un facteur d'environ **10²⁶**.

Ce mécanisme explique trois choses d'un coup : la **régularité** du fond diffus (l'univers entier vient d'une région minuscule autrefois en équilibre thermique), la **platitude** de la géométrie cosmique, et les **fluctuations primordiales** issues de la mécanique quantique (voir [[mecanique-quantique]]), qui deviendront les graines des galaxies. L'inflation n'est pas encore une certitude — son moteur exact reste inconnu — mais le scénario est devenu la pierre angulaire du modèle cosmologique standard.`
    },

    {
      type: 'widget',
      titre: `Composition de l'univers — d'où viennent ces chiffres ?`,
      composant: 'SelecteurValeurs',
      params: {
        unite: '%',
        indexInitial: 0,
        options: [
          { label: `Matière ordinaire`, valeur: 5, description: `Tout ce qui est fait d'atomes : étoiles, planètes, gaz interstellaire, toi-même. Une fraction étonnamment maigre du total.` },
          { label: `Matière noire`, valeur: 27, description: `Invisible aux télescopes, mais ses effets gravitationnels sont incontournables : courbes de rotation des galaxies, lentillage gravitationnel, structure à grande échelle. Sa nature reste inconnue.` },
          { label: `Énergie noire`, valeur: 68, description: `Composante mystérieuse qui accélère l'expansion cosmique. Pourrait être la constante cosmologique d'Einstein, ou un champ dynamique encore non identifié.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Matière noire, énergie noire : les <em>95 %</em> manquants`,
      contenu_md:
`Tout le contenu de l'univers que nous voyons — galaxies, étoiles, planètes, nuages de gaz, êtres vivants — ne représente que **5 %** du bilan total. Les 95 % restants se répartissent en deux catégories également énigmatiques.

La [matière noire]{accent}, postulée dès 1933 par Fritz Zwicky, représente environ **27 %** du contenu cosmique. On ne la voit pas, mais on la *sent* gravitationnellement : sans elle, les galaxies tourneraient trop vite pour rester cohérentes, et les structures à grande échelle ne se seraient jamais formées. Aucune particule connue ne correspond — les recherches portent sur des hypothèses comme les WIMPs, les axions, ou les neutrinos stériles.

L'[énergie noire]{accent} est encore plus étrange. En **1998**, deux équipes (Riess-Schmidt et Perlmutter) analysent des supernovas de type Ia, et découvrent que l'expansion de l'univers **s'accélère** au lieu de ralentir. Quelque chose agit comme une **antigravité** à grande échelle. C'est peut-être la constante cosmologique qu'Einstein avait introduite puis rejetée — ou bien quelque chose de plus subtil que personne n'a encore élucidé. Prix Nobel 2011.

Comprendre ce que sont réellement ces deux composantes est probablement la question la plus pressante de la cosmologie contemporaine.`
    },

    {
      type: 'encadre',
      label: `Avant le Big Bang ?`,
      contenu_md: `Question récurrente, sans réponse définitive. La relativité générale prédit une **singularité** au temps zéro, mais à cette échelle d'énergie, elle cède la place à des effets de gravité quantique qu'aucune théorie n'a encore unifiée. Plusieurs hypothèses s'affrontent : multivers où notre Big Bang est un parmi tant d'autres ; rebond cosmique d'un univers précédent en contraction ; émergence à partir d'une fluctuation quantique du vide. Aucune n'est testable aujourd'hui. La frontière entre science et spéculation est ici particulièrement fine.`
    },

    {
      type: 'widget',
      titre: `Les sondes du ciel primordial`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          { tag: '1989-1993', titre: 'COBE', description: `Premier satellite à mesurer le spectre du **fond diffus** avec haute précision. Confirme la nature thermique parfaite à 2,725 K et détecte ses premières anisotropies. Prix Nobel 2006.` },
          { tag: '2001-2010', titre: 'WMAP', description: `Cartographie fine des variations de température du fond diffus à grande échelle. Mesure l'âge de l'univers à **13,7 Gda** et fixe les paramètres cosmologiques avec une précision sans précédent.` },
          { tag: '2009-2013', titre: 'Planck (ESA)', description: `Cartographie ultra-précise du fond diffus. Affine l'âge à **13,8 Gda**, mesure la part de matière noire et d'énergie noire, contraint les modèles d'inflation.` },
          { tag: '2022-…', titre: 'James Webb', description: `Observation des **premières galaxies** dans l'infrarouge. Détecte des galaxies massives bien plus tôt qu'attendu, posant question sur la rapidité de formation cosmique.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Une <em>histoire</em> qui n'est pas finie`,
      contenu_md:
`Le modèle du Big Bang n'est pas un récit clos. Trois fronts restent en chantier.

Le premier, c'est la **tension de Hubble**. Les mesures de la constante d'expansion *H₀* obtenues par deux méthodes — celles fondées sur le fond diffus cosmologique (Planck) et celles fondées sur les supernovas et les céphéides — donnent des valeurs différentes (~67 vs ~73 km/s/Mpc), avec un écart qui dépasse les marges d'erreur. Soit une des deux méthodes a un biais inconnu, soit notre modèle cosmologique a un défaut.

Le deuxième front, c'est la **nature de la matière et de l'énergie noires**. Aucune expérience directe n'a encore détecté une particule de matière noire. Et l'énergie noire reste descriptive plus qu'expliquée.

Le troisième, c'est l'**unification avec la mécanique quantique**. À l'instant initial, la densité d'énergie est si extrême que la relativité générale et la quantique doivent être pensées ensemble — une [gravité quantique]{accent} (voir [[mecanique-quantique]]) qu'aucune théorie consensuelle n'a encore livrée. Les premiers instants du Big Bang restent, à proprement parler, hors de portée de la physique actuelle.`
    }

  ],

  quiz: [
    {
      q: `Qu'est-ce que le Big Bang, au sens du modèle cosmologique standard ?`,
      options: [
        `Une explosion qui a eu lieu en un point précis de l'espace`,
        `La phase initiale chaude et dense de l'univers, marquée par l'**expansion de l'espace lui-même**, depuis ~13,8 milliards d'années`,
        `La naissance des premières étoiles`,
        `Une éruption solaire géante`
      ],
      correcte: 1,
      explication: `Le Big Bang n'est pas une explosion dans l'espace : c'est l'expansion de l'espace lui-même, qui ne possède ni centre ni "extérieur". L'univers a commencé extrêmement chaud et dense, puis s'est dilaté et refroidi.`
    },
    {
      q: `Qu'a découvert Edwin Hubble en 1929 ?`,
      options: [
        `Une nouvelle planète au-delà de Neptune`,
        `Que les galaxies lointaines s'éloignent de nous, et d'autant plus vite qu'elles sont distantes — preuve directe de l'expansion`,
        `Le rayonnement de fond cosmologique`,
        `Les anneaux de Saturne`
      ],
      correcte: 1,
      explication: `Cette loi *v = H·d*, désormais appelée loi de Hubble-Lemaître, a fourni le premier argument observationnel direct en faveur d'un univers en expansion.`
    },
    {
      q: `Qu'est-ce que le fond diffus cosmologique ?`,
      options: [
        `Le bruit de fond des télescopes terrestres`,
        `Un rayonnement micro-onde uniforme à 2,7 K qui remplit tout le ciel, vestige du plasma primordial 380 000 ans après le Big Bang`,
        `La lumière des galaxies les plus proches`,
        `Une émission radio des trous noirs`
      ],
      correcte: 1,
      explication: `Découvert par Penzias et Wilson en 1965, ce rayonnement est l'écho refroidi du moment où l'univers est devenu transparent. C'est l'une des preuves observationnelles les plus solides du modèle.`
    },
    {
      q: `Pourquoi l'univers est-il composé d'environ 75 % d'hydrogène et 25 % d'hélium ?`,
      options: [
        `Parce que les étoiles produisent ces proportions`,
        `Parce que la nucléosynthèse primordiale, dans les trois premières minutes après le Big Bang, a figé ces proportions`,
        `Par pur hasard`,
        `Parce que l'hélium est plus léger`
      ],
      correcte: 1,
      explication: `La théorie prédit ces proportions à partir des conditions de température et de densité des premières minutes. L'accord avec les observations (à 1 % près) est l'un des trois piliers du modèle du Big Bang.`
    },
    {
      q: `Qu'est-ce que l'inflation cosmique ?`,
      options: [
        `Une hausse continue de la taille de l'univers depuis toujours`,
        `Une phase d'expansion **exponentielle** dans les 10⁻³² premières secondes, postulée par Alan Guth en 1980 pour expliquer la régularité du fond diffus et la platitude de l'univers`,
        `Une accélération économique`,
        `Le ralentissement actuel de l'expansion`
      ],
      correcte: 1,
      explication: `En une fraction infinitésimale de seconde, l'univers se serait dilaté d'un facteur ~10²⁶. Ce scénario explique élégamment plusieurs énigmes du modèle standard, dont l'extraordinaire uniformité du fond diffus.`
    },
    {
      q: `Quelle est la composition énergétique de l'univers actuel ?`,
      options: [
        `100 % de matière ordinaire`,
        `50 % matière, 50 % rayonnement`,
        `Environ 5 % matière ordinaire, 27 % matière noire, 68 % énergie noire`,
        `Inconnue à ce jour`
      ],
      correcte: 2,
      explication: `Les mesures du satellite Planck ont fixé ces proportions avec précision. La matière visible (étoiles, gaz, vous-même) ne représente qu'une infime fraction du total cosmique.`
    },
    {
      q: `Qu'ont découvert les équipes de Perlmutter, Riess et Schmidt en 1998 ?`,
      options: [
        `Une nouvelle planète`,
        `Que l'expansion de l'univers **s'accélère** au lieu de ralentir, en analysant les supernovas de type Ia — découverte attribuée à l'énergie noire`,
        `Que l'univers va s'effondrer`,
        `Que la gravité varie dans le temps`
      ],
      correcte: 1,
      explication: `On s'attendait à un ralentissement (la gravité aurait dû freiner l'expansion). Au contraire, elle s'accélère depuis ~5 milliards d'années. Cette accélération est attribuée à une composante baptisée énergie noire. Prix Nobel 2011.`
    },
    {
      q: `Pourquoi l'univers est-il devenu transparent vers 380 000 ans après le Big Bang ?`,
      options: [
        `Parce que les premières étoiles se sont allumées`,
        `Parce que la température est descendue sous ~3 000 K : les électrons se sont liés aux noyaux, libérant la lumière qui était auparavant constamment diffusée par le plasma`,
        `Parce que la matière noire s'est dispersée`,
        `Parce que les trous noirs ont absorbé l'opacité`
      ],
      correcte: 1,
      explication: `C'est l'événement de **recombinaison**. Avant lui, l'univers ressemblait à un brouillard ionisé opaque. Après, la lumière a pu voyager librement — et c'est cette lumière, refroidie par l'expansion à 2,7 K, qui constitue aujourd'hui le fond diffus cosmologique.`
    }
  ]

});
