/* ===================================================================
   SUJET — La théorie des cordes
   ===================================================================
   Tentative d'unification de la relativité générale et de la
   mécanique quantique. Cordes vibrantes, dimensions cachées,
   théorie M — et le procès qu'on lui fait depuis vingt ans.
   Domaines : Physique, Astrophysique
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'theorie-des-cordes',
    titre: 'La <em>théorie des cordes</em>',
    domaines: ['Physique', 'Astrophysique'],
    tags: ['unification', 'dimensions', 'supersymétrie', 'théorie M', 'gravité quantique', 'witten'],
    difficulte: 3,
    duree_estimee_min: 40,
    prerequis: [],
    lie_a: ['mecanique-quantique', 'theorie-relativite', 'trous-noirs', 'big-bang'],
    date_creation: '2026-05-12',
    date_maj: '2026-05-12'
  },

  resume: 'Comprendre l\'ambition la plus folle de la physique théorique du XXᵉ siècle : remplacer les particules ponctuelles par de minuscules cordes vibrantes, dont les modes d\'oscillation engendreraient toutes les forces et toutes les particules — y compris la gravité. Un programme magnifique, mathématiquement profond, et toujours sans preuve expérimentale.',

  points_cles: [
    'La **relativité générale** (gravité) et la **mécanique quantique** (matière) sont **incompatibles** aux échelles extrêmes — trous noirs, premiers instants du Big Bang. La théorie des cordes est l\'une des tentatives les plus abouties pour les unifier.',
    'L\'idée centrale : les particules ne sont **pas ponctuelles** mais des [cordes]{accent} vibrantes d\'environ **10⁻³⁵ m** (longueur de Planck). Chaque mode de vibration correspond à une particule différente.',
    'Le **graviton** — particule médiatrice de la gravité — apparaît **naturellement** dans le spectre des vibrations. C\'est l\'argument le plus fort en faveur de la théorie.',
    'Il existe **cinq théories de supercordes** cohérentes (Type I, IIA, IIB, hétérotique O, hétérotique E). En 1995, Witten montre qu\'elles ne sont que **cinq facettes** d\'une théorie unique en 11 dimensions : la [théorie M]{accent}.',
    'La théorie exige **6 ou 7 dimensions supplémentaires**, compactifiées dans des géométries microscopiques appelées **variétés de Calabi-Yau**.',
    'Problème majeur : on dénombre environ **10⁵⁰⁰ vacua** possibles — le « **paysage** » des cordes. Difficile d\'en déduire des prédictions uniques et testables.',
    'La théorie est **vivement critiquée** (Smolin, Hossenfelder, Glashow) pour son **manque de prédictions vérifiables**, au point d\'être qualifiée de « philosophie ». Mais elle a produit des retombées mathématiques majeures et des outils comme la **dualité AdS/CFT**.'
  ],

  carte_mentale: {
    central: 'cordes',
    noeuds: [
      { id: 'cordes', label: 'Théorie des cordes', description: 'Cadre théorique où les briques élémentaires de l\'univers sont de minuscules cordes vibrantes, et non des particules ponctuelles.' },

      { id: 'probleme', label: 'Le problème de fond', description: 'Relativité générale et mécanique quantique se contredisent dès qu\'on les confronte aux trous noirs ou au Big Bang.' },
      { id: 'idee', label: 'L\'idée centrale', description: 'Une corde de longueur ~10⁻³⁵ m, et chaque mode de vibration engendre une particule différente.' },
      { id: 'histoire', label: 'Histoire', description: 'Veneziano (1968), première révolution (1984), deuxième révolution (1995) — puis trente ans de doutes.' },
      { id: 'cinq', label: 'Cinq supercordes + M', description: 'Cinq théories cohérentes, unifiées en 1995 par Witten en une [théorie M]{accent} à 11 dimensions.' },
      { id: 'dimensions', label: 'Dimensions cachées', description: 'Six ou sept dimensions supplémentaires, compactifiées en variétés de Calabi-Yau.' },
      { id: 'critiques', label: 'Critiques', description: 'Smolin, Hossenfelder, Glashow : absence de prédictions testables, ressemblance à de la philosophie.' },
      { id: 'retombees', label: 'Retombées', description: 'Mathématiques, dualités holographiques, correspondance AdS/CFT — utiles même si la théorie elle-même reste hypothétique.' },

      // Histoire — sous-niveau
      { id: 'veneziano', label: 'Veneziano (1968)', description: 'Découverte fortuite d\'une formule qui s\'avère décrire des cordes — alors qu\'on cherchait à modéliser la force forte.', parent: 'histoire' },
      { id: 'rev1', label: '1ʳᵉ révolution (1984)', description: 'Schwarz et Green montrent que la théorie est mathématiquement cohérente. Ruée des théoriciens.', parent: 'histoire' },
      { id: 'rev2', label: '2ᵉ révolution (1995)', description: 'Witten propose la [théorie M]{accent} qui unifie les cinq supercordes via un réseau de dualités.', parent: 'histoire' },

      // Idée — sous-niveau
      { id: 'graviton', label: 'Le graviton émerge', description: 'Un mode de vibration de la corde fermée a exactement les propriétés du graviton — la particule de la gravité.', parent: 'idee' },
      { id: 'dualite-cp', label: 'Dualité corde-particule', description: 'À basse énergie, une corde apparaît comme une particule ponctuelle. La théorie contient le modèle standard comme limite.', parent: 'idee' },

      // Cinq supercordes
      { id: 'type-i', label: 'Type I', description: 'Cordes ouvertes et fermées, groupe de symétrie SO(32).', parent: 'cinq' },
      { id: 'type-iia', label: 'Type IIA', description: 'Cordes fermées, fermions non chiraux.', parent: 'cinq' },
      { id: 'type-iib', label: 'Type IIB', description: 'Cordes fermées, fermions chiraux.', parent: 'cinq' },
      { id: 'het-o', label: 'Hétérotique SO(32)', description: 'Hybride : modes gauches bosoniques (26D), modes droits supersymétriques (10D).', parent: 'cinq' },
      { id: 'het-e', label: 'Hétérotique E8×E8', description: 'Groupe de jauge E8×E8 — longtemps favorite pour reproduire le modèle standard.', parent: 'cinq' },

      // Critiques — sous-niveau
      { id: 'paysage', label: 'Paysage 10⁵⁰⁰', description: 'Le nombre de géométries de compactification possibles explose. La théorie peut tout « expliquer » — donc rien prédire.', parent: 'critiques' },
      { id: 'glashow', label: '« Philosophie » (Glashow)', description: 'Sheldon Glashow, Nobel 1979, reproche aux théoriciens des cordes d\'avoir quitté le terrain expérimental.', parent: 'critiques' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Deux théories qui ne se parlent pas',
      contenu_md:
`Le XXᵉ siècle a légué à la physique deux édifices monumentaux. D\'un côté, la [[mecanique-quantique]] : elle décrit avec une précision sans équivalent ce qui se passe à l\'échelle des atomes, des particules, des champs. De l\'autre, la [[theorie-relativite]] générale d\'Einstein : elle décrit la gravité comme une **courbure de l\'espace-temps**, et a triomphé partout où on l\'a testée — orbites planétaires, ondes gravitationnelles, GPS.

Les deux théories sont vérifiées avec une précision ahurissante. Et pourtant, **elles sont incompatibles**.

Pris séparément, chacun joue dans son domaine sans rencontrer l\'autre. La mécanique quantique règne dans l\'infiniment petit, la relativité générale dans l\'infiniment grand et massif. Mais il existe des situations où **les deux régimes se chevauchent** — au cœur des [[trous-noirs]], et dans les premiers instants du [[big-bang]]. Là, les équations conjuguées ne donnent plus de réponse cohérente : elles produisent des **infinis** non renormalisables, des probabilités supérieures à 1, des divergences mathématiques que personne ne sait apprivoiser.

Trouver une **gravité quantique** — un cadre unique qui contienne les deux comme cas limites — est sans doute le problème ouvert le plus important de la physique théorique. La [théorie des cordes]{accent} est, depuis quarante ans, la candidate la plus étudiée.`
    },

    {
      type: 'encadre',
      label: 'Le mur de Planck',
      contenu_md: 'À des distances de l\'ordre de la **longueur de Planck**, ~10⁻³⁵ m, les fluctuations quantiques de l\'espace-temps deviennent du même ordre que l\'espace-temps lui-même. La géométrie cesse d\'avoir un sens classique. C\'est là que la relativité générale et la mécanique quantique entrent **frontalement en collision** — et c\'est précisément à cette échelle que les cordes sont censées exister.'
    },

    {
      type: 'texte',
      titre: 'L\'idée centrale : remplacer le point par la <em>corde</em>',
      contenu_md:
`L\'intuition fondatrice est étonnamment simple. La théorie quantique des champs traite les particules — électron, photon, quark — comme des **points sans dimension**. Cette idéalisation marche bien à basse énergie, mais elle produit ces infamants infinis quand on la pousse à l\'extrême.

Et si la particule n\'était pas un point, mais une [corde]{accent} ? Un objet à une dimension, de longueur extraordinairement petite — de l\'ordre de la longueur de Planck. Une corde, comme celle d\'un violon, peut vibrer selon **différents modes**. Et l\'idée géniale est la suivante :

*Chaque mode de vibration de la corde correspond à une particule différente.*

Une vibration donne l\'électron. Une autre, le photon. Une troisième, le quark up. Toutes les particules connues du modèle standard ne seraient ainsi que des **harmoniques** d\'un même objet fondamental. L\'univers entier serait composé d\'une seule sorte de brique — la corde — qui chante des notes différentes selon comment elle vibre.

Cette image possède une élégance redoutable. Et elle résout d\'un coup le problème des infinis : un objet étendu interagit plus « doucement » qu\'un point, et les divergences disparaissent.`
    },

    {
      type: 'widget',
      titre: 'L\'action de Nambu-Goto : la corde la plus simple',
      composant: 'Equation',
      params: {
        tex: 'S = -T \\int d^2\\sigma \\, \\sqrt{-\\det(h_{\\alpha\\beta})}',
        legende: 'Action de Nambu-Goto. T est la tension de la corde, h_αβ la métrique induite sur la « feuille d\'univers » que la corde balaie dans l\'espace-temps. Une corde minimise l\'aire de cette feuille — exactement comme une particule classique minimise la longueur de sa ligne d\'univers.',
        affichage: 'block'
      }
    },

    {
      type: 'texte',
      contenu_md:
`Mathématiquement, on remplace donc la **ligne d\'univers** d\'une particule (une courbe à 1 dimension) par la **feuille d\'univers** d\'une corde (une surface à 2 dimensions). L\'extension de l\'objet le rend plus régulier — c\'est tout le miracle.

Un argument décisif émerge dès les premières années : parmi les modes de vibration d\'une **corde fermée**, l\'un d\'eux possède exactement les propriétés théoriques attendues du **graviton** — la particule médiatrice de la gravité. Là où la théorie quantique des champs peine à incorporer la gravité, les cordes la produisent **gratuitement**. C\'est l\'argument que les théoriciens des cordes répètent depuis quarante ans, et il reste impressionnant.`
    },

    {
      type: 'widget',
      titre: 'Une histoire en deux révolutions',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1968', titre: 'L\'accident Veneziano', description: 'Le jeune **Gabriele Veneziano**, au CERN, cherche à modéliser les interactions de la **force forte**. Il découvre par hasard qu\'une fonction mathématique (la fonction bêta d\'Euler) reproduit les données. On comprendra peu après que cette formule **décrit en réalité des cordes**. La théorie des cordes naît donc *à côté* de son sujet initial — la force forte, qui sera mieux décrite par la **chromodynamique quantique**.' },
          { date: '1974', titre: 'Le graviton', description: 'Scherk et Schwarz remarquent que l\'un des modes de vibration de la corde fermée se comporte exactement comme un **graviton**. La théorie change de vocation : elle n\'est plus une théorie de la force forte, mais une candidate à la **gravité quantique**.' },
          { date: '1984', titre: 'Première révolution', description: '**Schwarz et Green** démontrent que la théorie est **mathématiquement cohérente** (annulation des anomalies). Toute une génération de physiciens bascule sur le sujet en quelques mois. C\'est la **première révolution des supercordes**.' },
          { date: '1985', titre: 'Calabi-Yau', description: 'Candelas, Horowitz, Strominger et Witten proposent que les **6 dimensions supplémentaires** soient compactifiées dans des géométries appelées **variétés de Calabi-Yau** — un outil mathématique qui devient central.' },
          { date: '1995', titre: 'Deuxième révolution — Théorie M', description: '**Edward Witten**, à Strings 1995, propose que les cinq théories de supercordes ne soient que **cinq facettes** d\'une théorie unique à **11 dimensions** : la [théorie M]{accent}. L\'enthousiasme atteint un sommet historique.' },
          { date: '1997', titre: 'AdS/CFT', description: '**Maldacena** découvre une correspondance entre une théorie des cordes dans un espace à courbure négative et une théorie de jauge ordinaire à sa frontière. La **dualité holographique** devient l\'outil le plus fécond issu des cordes — utilisée en physique des plasmas, des supraconducteurs, des trous noirs.' },
          { date: '2006', titre: 'Les critiques publient', description: 'Lee Smolin (*Rien ne va plus en physique*) et Peter Woit (*Not Even Wrong*) publient deux livres qui contestent frontalement la domination de la théorie des cordes. Le débat sort des cercles académiques.' },
          { date: '2026', titre: 'Statut actuel', description: 'Aucune prédiction expérimentale décisive en quarante ans. Le sujet attire toujours des esprits brillants pour ses retombées mathématiques et son rôle en gravité holographique — mais son ambition originelle d\'unification reste **hors de portée**.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Les <em>cinq théories</em> de supercordes — et la théorie M',
      contenu_md:
`Dans les années 1980, alors que l\'enthousiasme est à son comble, un problème embarrassant apparaît : il n\'existe pas **une** théorie des cordes, mais **cinq**. Toutes mathématiquement cohérentes, toutes vivant en **10 dimensions**, toutes nécessitant la **supersymétrie** — d\'où le nom de **supercordes**.

Une théorie « unique » qui se présenterait sous cinq formes différentes est philosophiquement gênante. Que choisir ? Et pourquoi cinq ?

La réponse arrive en 1995, lors d\'une conférence à l\'Université de Californie du Sud. **Edward Witten** annonce que les cinq théories ne sont pas indépendantes : elles sont reliées entre elles par un réseau de **dualités** mathématiques, et toutes émergent comme **limites différentes** d\'une seule théorie sous-jacente, qu\'il appelle [théorie M]{accent}. Cette théorie M vit en **11 dimensions**, pas 10 — une de plus que les cordes. Et personne ne sait précisément ce que représente le « M ».

Cette unification déclenche la **deuxième révolution des supercordes**. Brian Greene publie *L\'Univers élégant* en 1999. La théorie devient brièvement célèbre auprès du grand public. Puis le doute s\'installe.`
    },

    {
      type: 'widget',
      titre: 'Les cinq théories de supercordes',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          { tag: '10D', titre: 'Type I', description: 'La seule à mélanger **cordes ouvertes et fermées**. Groupe de jauge SO(32). Décrit naturellement des interactions de type Yang-Mills.' },
          { tag: '10D', titre: 'Type IIA', description: 'Uniquement des **cordes fermées**, à fermions **non chiraux**. Sa limite à basse énergie est la supergravité IIA. La théorie M en 11D s\'y réduit par compactification d\'une dimension.' },
          { tag: '10D', titre: 'Type IIB', description: 'Cordes fermées, fermions **chiraux**. Joue un rôle central dans la correspondance **AdS/CFT** découverte par Maldacena.' },
          { tag: '10D', titre: 'Hétérotique SO(32)', description: 'Une **hybride** astucieuse : les modes gauches sont bosoniques (vivant en 26D), les modes droits sont supersymétriques (10D). Groupe de jauge SO(32).' },
          { tag: '10D', titre: 'Hétérotique E8 × E8', description: 'Même construction hybride, mais avec le groupe **E8 × E8** — longtemps considérée comme la candidate la plus prometteuse pour reproduire le modèle standard de la physique des particules.' }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'Pourquoi 10 dimensions ?',
      contenu_md: 'La théorie n\'est mathématiquement cohérente — invariance conforme préservée au niveau quantique — que dans un nombre **précis** de dimensions d\'espace-temps. Pour la corde bosonique nue, c\'est **26**. En ajoutant la **supersymétrie** (la « super » dans supercordes, qui apparie bosons et fermions), ce nombre tombe à **10**. La théorie M, qui les unifie toutes, exige **11 dimensions**. Ces nombres ne sont pas postulés : ils tombent des équations.'
    },

    {
      type: 'texte',
      titre: 'Où sont passées les dimensions supplémentaires ?',
      contenu_md:
`Si la théorie des cordes vit en 10 dimensions et la théorie M en 11, où sont passées les six ou sept dimensions qu\'on ne voit pas ? Nous percevons trois dimensions d\'espace et une de temps. Pas davantage.

La réponse standard est celle de la **compactification**. Les dimensions supplémentaires existent, mais elles sont **enroulées sur elles-mêmes** à des échelles si petites — typiquement la longueur de Planck — qu\'aucune expérience accessible ne peut les détecter. L\'analogie classique est celle d\'un câble électrique vu de très loin : il paraît unidimensionnel, mais de près, on découvre qu\'il a aussi une dimension circulaire (sa circonférence).

La géométrie précise dans laquelle ces six [dimensions supplémentaires]{accent} sont compactifiées détermine **quelles particules** et **quelles forces** apparaissent dans le monde à 4 dimensions qu\'on observe. Les théoriciens ont identifié une classe particulière de géométries compatibles avec la supersymétrie : les **variétés de Calabi-Yau**. Ce sont des objets mathématiques d\'une beauté extraordinaire, et leur étude a permis des avancées majeures en géométrie algébrique — au point que des mathématiciens « purs » s\'y sont mis sans se soucier de la physique.

Le problème, c\'est qu\'on dénombre une infinité de variétés de Calabi-Yau possibles. Le nombre d\'**univers cohérents** ainsi générés explose.`
    },

    {
      type: 'widget',
      titre: 'Les ordres de grandeur impliqués',
      composant: 'SelecteurValeurs',
      params: {
        unite: '',
        options: [
          { label: 'Longueur de Planck', valeur: '~10⁻³⁵ m', description: 'Taille typique d\'une corde — soit 10²⁰ fois plus petite qu\'un proton.' },
          { label: 'Énergie de Planck', valeur: '~10¹⁹ GeV', description: 'Énergie nécessaire pour sonder l\'échelle des cordes. Un collisionneur capable de l\'atteindre devrait faire la taille de la Voie lactée.' },
          { label: 'LHC actuel', valeur: '~10⁴ GeV', description: 'Énergie maximale du collisionneur le plus puissant jamais construit — 15 ordres de grandeur en dessous de l\'échelle des cordes.' },
          { label: 'Vacua du paysage', valeur: '~10⁵⁰⁰', description: 'Nombre estimé de géométries de compactification possibles. Largement plus que le nombre d\'atomes dans l\'univers observable (~10⁸⁰).' },
          { label: 'Dimensions de la théorie M', valeur: '11', description: 'Dont 4 visibles (3 d\'espace + 1 de temps) et 7 compactifiées à l\'échelle de Planck.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>paysage</em> — quand l\'élégance se retourne',
      contenu_md:
`Voilà donc le problème central. La théorie n\'a pas une, ni dix, ni un million de solutions possibles : elle en a environ **10⁵⁰⁰**. C\'est ce que les théoriciens appellent le **paysage des cordes**.

Chacun de ces 10⁵⁰⁰ « vacua » correspond à une façon différente de compactifier les dimensions supplémentaires, et chacun produit une physique différente — d\'autres particules, d\'autres constantes, d\'autres forces. Comment savoir lequel décrit *notre* univers ?

Une partie des théoriciens (Leonard Susskind notamment) propose l\'**explication anthropique** : tous les vacua existeraient, chacun dans son propre univers (un **multivers**), et nous habitons celui dont les constantes permettent l\'existence d\'observateurs. C\'est une réponse cohérente, mais qui rebute beaucoup de physiciens : une théorie qui « explique » tout en disant *« voilà tous les univers possibles, et nous sommes dans l\'un d\'eux »* ne prédit, au sens classique du terme, **plus rien du tout**.

C\'est sur ce point précis que se concentrent les critiques.`
    },

    {
      type: 'widget',
      titre: 'Les principales critiques — et les réponses des partisans',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          { titre: 'Absence de prédiction testable', description: 'En quarante ans, la théorie des cordes n\'a produit **aucune prédiction expérimentale** qui la distinguerait du modèle standard. **Lee Smolin** (*Rien ne va plus en physique*, 2006) et **Peter Woit** (*Not Even Wrong*) en font le procès central. Les partisans répondent que les énergies requises (10¹⁹ GeV) sont **inaccessibles** par construction — argument que les détracteurs jugent commode mais peu scientifique.' },
          { titre: 'Le paysage est un aveu d\'impuissance', description: '**Sabine Hossenfelder** souligne qu\'une théorie compatible avec 10⁵⁰⁰ univers possibles n\'est pas une théorie au sens de Popper. Si elle peut tout accommoder, elle ne falsifie rien. La réponse anthropique, pour ses critiques, déplace le problème sans le résoudre.' },
          { titre: '« C\'est de la philosophie » (Glashow)', description: '**Sheldon Glashow**, Nobel 1979 et co-architecte du modèle standard, considère que la théorie des cordes a quitté le terrain de la physique pour celui de la **métaphysique**. Il l\'exclut en partie de son département à Harvard. Les théoriciens des cordes répondent que la beauté mathématique et la **cohérence interne** sont des guides légitimes — Einstein lui-même les invoquait.' },
          { titre: 'Capture sociologique', description: 'Smolin reproche à la communauté d\'avoir **monopolisé les postes** de physique théorique dans les grandes universités américaines pendant trois décennies, étouffant les approches alternatives (gravité quantique à boucles, ensembles causaux, géométrie non commutative). Le débat reste vif.' },
          { titre: 'Les retombées sont bien réelles', description: 'Même ses adversaires reconnaissent que la théorie a produit des outils précieux : mathématiques nouvelles (symétrie miroir, géométrie énumérative), **dualité AdS/CFT** appliquée aux plasmas de quarks-gluons et aux supraconducteurs, compréhension fine de l\'**entropie des trous noirs** (revoir [[trous-noirs]]) et de certains aspects du [[big-bang]] primordial. Une théorie peut être féconde mathématiquement sans être vraie physiquement.' }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'AdS/CFT — la retombée la plus marquante',
      contenu_md: 'En 1997, **Juan Maldacena** découvre que certaines théories des cordes définies dans un espace courbé (**anti-de Sitter**) sont mathématiquement équivalentes à des théories de champs ordinaires définies sur la frontière de cet espace (**théorie conforme des champs**). C\'est la **correspondance AdS/CFT**, ou **dualité holographique**. Elle est aujourd\'hui utilisée bien au-delà des cordes — pour étudier les plasmas de quarks-gluons au RHIC, modéliser des supraconducteurs exotiques, comprendre l\'évaporation des trous noirs. Même si la théorie des cordes elle-même ne décrit pas le monde, ce qu\'elle nous a appris sur les **dualités** entre théories transformera durablement la physique théorique.'
    },

    {
      type: 'texte',
      titre: 'Où en est-on en 2026 ?',
      contenu_md:
`La théorie des cordes occupe aujourd\'hui une position étrange. Elle reste l\'un des programmes les plus actifs de la physique théorique, mais son ambition initiale — décrire **notre** univers, prédire **nos** particules, unifier **nos** forces — s\'est largement déplacée. On parle désormais plus volontiers de « théorie M », de « gravité holographique », de « dualités » — autant de manières de continuer le travail sans s\'engager sur la promesse impossible.

Les retombées sont indéniables. Des pans entiers des mathématiques ont été révolutionnés : symétrie miroir, géométrie énumérative, théorie des nœuds. La correspondance AdS/CFT est devenue un outil de calcul standard. La compréhension microscopique de l\'**entropie de Bekenstein-Hawking** des trous noirs — prédite par Hawking dans les années 1970, expliquée combinatoirement par Strominger et Vafa en 1996 dans le cadre des cordes — est l\'un des résultats les plus profonds de la physique théorique moderne.

Mais la promesse initiale — *trouver la théorie unique qui réunit Einstein et Bohr* — reste ouverte. Quarante ans après la première révolution, aucune expérience n\'a confirmé une seule prédiction spécifique des cordes. Aucune particule supersymétrique n\'a été détectée au LHC, malgré les attentes. La supersymétrie, qui est au cœur du programme, voit son espace de paramètres se réduire chaque année.

L\'histoire de la théorie des cordes — son ascension fulgurante, sa domination, sa contestation, son repli partiel — est devenue un cas d\'école pour les philosophes des sciences. Elle pose une question fondamentale : *jusqu\'à quel point une théorie peut-elle rester scientifique sans confrontation expérimentale ?* La réponse ne fait pas consensus, et ne le fera sans doute pas avant longtemps.`
    },

    {
      type: 'encadre',
      label: 'L\'honnêteté intellectuelle',
      contenu_md: 'On peut admirer la profondeur mathématique de la théorie des cordes, reconnaître ses retombées spectaculaires en mathématiques et en physique holographique, et **en même temps** constater qu\'elle n\'a pas livré ce qu\'elle promettait : une théorie unifiée, prédictive, falsifiable. Les deux affirmations sont compatibles. La science avance aussi en regardant lucidement les programmes qui n\'ont pas tenu — pour comprendre comment, et pourquoi.'
    }

  ],

  quiz: [
    {
      q: 'Quel est le problème de fond qui motive la théorie des cordes ?',
      options: [
        'Expliquer la masse de l\'électron',
        'Réconcilier la relativité générale et la mécanique quantique, incompatibles aux échelles des trous noirs et du Big Bang',
        'Construire un meilleur laser',
        'Prédire la météo à long terme'
      ],
      correcte: 1,
      explication: 'Les deux théories fondamentales de la physique du XXᵉ siècle sont chacune vérifiées avec une précision extrême, mais elles deviennent mutuellement incohérentes aux énergies extrêmes. Trouver une gravité quantique unifiée est le problème ouvert le plus important de la physique théorique.'
    },
    {
      q: 'Quelle est l\'idée centrale de la théorie des cordes ?',
      options: [
        'Que toutes les particules sont en réalité des trous noirs miniatures',
        'Que les particules ne sont pas ponctuelles mais des cordes vibrantes, dont chaque mode de vibration correspond à une particule différente',
        'Que l\'espace-temps est discret comme un échiquier',
        'Que seule la gravité existe et que le reste est illusion'
      ],
      correcte: 1,
      explication: 'L\'objet fondamental n\'est plus le point mais une corde à une dimension, de taille de l\'ordre de la longueur de Planck (10⁻³⁵ m). Ses différents modes de vibration engendrent les différentes particules — comme les harmoniques d\'un instrument de musique.'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Le graviton — particule médiatrice de la gravité — apparaît naturellement comme l\'un des modes de vibration d\'une corde fermée.',
      reponse: true,
      explication: 'C\'est l\'un des arguments les plus forts en faveur de la théorie. Là où la théorie quantique des champs peine à incorporer la gravité, les cordes la produisent gratuitement. Cet argument est ce qui a fait basculer la communauté en 1974 (Scherk et Schwarz).'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'La théorie des cordes a été confirmée expérimentalement par la détection de particules supersymétriques au LHC.',
      reponse: false,
      explication: 'Aucune particule supersymétrique n\'a été détectée à ce jour, et plus généralement aucune prédiction spécifique de la théorie des cordes n\'a été vérifiée expérimentalement. C\'est l\'objet central des critiques formulées par Smolin, Woit, Hossenfelder et Glashow.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces jalons de l\'histoire de la théorie des cordes dans l\'ordre chronologique :',
      items: [
        'Veneziano découvre par hasard une formule qui décrit en réalité des cordes — en cherchant à modéliser la force forte',
        'Première révolution des supercordes : Schwarz et Green démontrent la cohérence mathématique de la théorie',
        'Deuxième révolution : Witten propose la théorie M qui unifie les cinq théories de supercordes en 11 dimensions',
        'Smolin et Woit publient leurs critiques sur le manque de prédictions testables'
      ],
      explication: 'Veneziano (1968) — première révolution Schwarz/Green (1984) — deuxième révolution Witten (1995) — vague de critiques publiques (2006). Le sujet est passé de la marginalité à la domination, puis a vu cette domination contestée.'
    },
    {
      q: 'Combien de théories de supercordes mathématiquement cohérentes existent ?',
      options: [
        'Une seule, dès le départ',
        'Trois',
        'Cinq, ce qui a longtemps été un problème embarrassant — résolu en 1995 par la théorie M qui les unifie en 11 dimensions',
        'Une infinité'
      ],
      correcte: 2,
      explication: 'Type I, IIA, IIB, hétérotique SO(32) et hétérotique E8×E8 — toutes cohérentes en 10 dimensions. Witten a montré en 1995 que ces cinq théories sont en réalité cinq facettes d\'une théorie unique sous-jacente à 11 dimensions, baptisée théorie M.'
    },
    {
      q: 'Qu\'est-ce qu\'une variété de Calabi-Yau dans le contexte de la théorie des cordes ?',
      options: [
        'Le nom d\'une particule prédite mais non détectée',
        'Une classe de géométries dans lesquelles les 6 dimensions supplémentaires de la théorie sont compactifiées',
        'L\'équation qui régit la dynamique des cordes',
        'Un télescope dédié à la recherche des cordes cosmiques'
      ],
      correcte: 1,
      explication: 'Les dimensions supplémentaires sont supposées enroulées à l\'échelle de Planck dans des géométries précises. Les variétés de Calabi-Yau, étudiées par Candelas, Horowitz, Strominger et Witten en 1985, sont les plus pertinentes car elles préservent la supersymétrie.'
    },
    {
      q: 'Pourquoi le « paysage » des cordes (~10⁵⁰⁰ vacua) pose-t-il un problème scientifique ?',
      options: [
        'Parce que 10⁵⁰⁰ est un nombre trop grand pour les ordinateurs',
        'Parce qu\'une théorie compatible avec autant d\'univers possibles peut difficilement faire des prédictions uniques et falsifiables — au sens de Popper',
        'Parce qu\'elle prédit des particules trop lourdes',
        'Parce qu\'elle contredit la relativité restreinte'
      ],
      correcte: 1,
      explication: 'Si la théorie admet 10⁵⁰⁰ solutions possibles décrivant chacune un univers différent, comment prédire quelque chose de spécifique sur le nôtre ? L\'explication anthropique (multivers) sauve la cohérence, mais au prix de la prédictibilité — ce qui constitue le cœur des critiques de Hossenfelder et de Smolin.'
    },
    {
      q: 'Qui a proposé la théorie M en 1995 ?',
      options: [
        'Albert Einstein',
        'Edward Witten',
        'Stephen Hawking',
        'Richard Feynman'
      ],
      correcte: 1,
      explication: 'Lors de la conférence Strings 1995, Edward Witten (Médaille Fields 1990) a proposé que les cinq théories de supercordes soient unifiées comme des limites différentes d\'une même théorie à 11 dimensions — la théorie M. Cette annonce a déclenché la deuxième révolution des supercordes.'
    },
    {
      q: 'Qu\'est-ce que la correspondance AdS/CFT ?',
      options: [
        'Un nouveau type d\'accélérateur de particules',
        'Une dualité, découverte par Maldacena en 1997, entre une théorie des cordes dans un espace courbé et une théorie de champs ordinaire sur sa frontière — l\'une des retombées les plus utilisées de la théorie des cordes',
        'Le nom officiel de la théorie M',
        'Un manifeste politique de physiciens'
      ],
      correcte: 1,
      explication: 'C\'est une dualité holographique : un système gravitationnel à d dimensions est équivalent à une théorie de jauge à (d-1) dimensions vivant sur sa frontière. Elle est aujourd\'hui utilisée bien au-delà des cordes — plasma de quarks-gluons, supraconducteurs exotiques, étude des trous noirs. Une retombée majeure même si la théorie des cordes elle-même restait fausse.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète la phrase suivante :',
      texte: 'Selon la théorie, les cordes ont une taille de l\'ordre de la longueur de {Planck}, soit environ 10⁻³⁵ mètres — ce qui rend leur observation directe impossible avec toute technologie envisageable.',
      explication: 'La longueur de Planck (~10⁻³⁵ m) est l\'échelle naturelle de la gravité quantique. C\'est aussi l\'échelle des cordes — et précisément ce qui rend leur détection expérimentale hors de portée, puisque les énergies nécessaires (~10¹⁹ GeV) sont 15 ordres de grandeur au-dessus du LHC.'
    },
    {
      type: 'associer',
      q: 'Associe chaque physicien à sa contribution à l\'histoire des cordes :',
      paires: [
        { gauche: 'Veneziano', droite: 'Découverte fortuite (1968)' },
        { gauche: 'Schwarz & Green', droite: 'Première révolution (1984)' },
        { gauche: 'Witten', droite: 'Théorie M (1995)' },
        { gauche: 'Maldacena', droite: 'Correspondance AdS/CFT' },
        { gauche: 'Smolin', droite: 'Rien ne va plus en physique' },
        { gauche: 'Glashow', droite: '« C\'est de la philosophie »' }
      ],
      explication: 'L\'histoire de la théorie est jalonnée par ces figures : Veneziano l\'invente sans le savoir, Schwarz et Green la rendent crédible, Witten l\'unifie, Maldacena en extrait son outil le plus utile, Smolin la conteste publiquement, Glashow la juge sortie du domaine scientifique.'
    },
    {
      q: 'Comment résumer honnêtement le statut actuel (2026) de la théorie des cordes ?',
      options: [
        'Elle a été confirmée et constitue la théorie unifiée de la physique',
        'Elle est abandonnée par toute la communauté',
        'Elle reste mathématiquement profonde et a produit des retombées majeures (AdS/CFT, mathématiques nouvelles, entropie des trous noirs), mais aucune prédiction expérimentale ne l\'a confirmée et son ambition unificatrice initiale reste hors de portée',
        'Elle n\'a jamais existé scientifiquement'
      ],
      correcte: 2,
      explication: 'C\'est la position lucide. La théorie n\'a pas tenu sa promesse d\'unification prédictive, mais ses retombées mathématiques et conceptuelles (AdS/CFT notamment) sont indéniables. Reconnaître cela demande un peu d\'honnêteté intellectuelle de part et d\'autre du débat.'
    }
  ]

});
