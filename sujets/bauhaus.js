/* ===================================================================
   SUJET — Le Bauhaus
   ===================================================================
   Une école d'art allemande qui n'a duré que quatorze ans, et qui a
   redessiné la manière dont le monde habite, s'assied, lit, regarde.
   Domaines : Architecture, Arts
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'bauhaus',
    titre: 'Le <em>Bauhaus</em>',
    domaines: ['Architecture', 'Arts'],
    tags: ['design', 'modernite', 'allemagne', 'gropius', 'mies-van-der-rohe', 'klee', 'kandinsky', 'XXe'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['cathedrales-gothiques', 'renaissance-italienne'],
    date_creation: '2026-05-17',
    date_maj: '2026-05-17'
  },

  resume: `Comprendre comment une école d'art allemande fondée à Weimar en 1919 par l'architecte Walter Gropius a, en quatorze années seulement avant d'être fermée par les nazis, redessiné la manière dont nous habitons, nous asseyons, lisons des typographies, accrochons des lampes au-dessus de nos bureaux — au point que la modernité visuelle du XXᵉ siècle est presque entièrement bauhausienne, souvent sans le savoir.`,

  points_cles: [
    `Le **Bauhaus** est fondé à **Weimar le 1ᵉʳ avril 1919** par l'architecte allemand **Walter Gropius**, qui fusionne l'École supérieure des arts plastiques et l'École des arts appliqués de la ville. Le nom signifie *maison du bâtir*.`,
    `Son principe fondateur, énoncé dans le **Manifeste de 1919** : [réunir l'art et l'artisanat]{accent}. Pour Gropius, la séparation entre l'artiste (qui conçoit) et l'artisan (qui fabrique) est une *catastrophe culturelle* — toute production doit allier conception et fabrication.`,
    `La pédagogie est révolutionnaire : un **cours préliminaire** obligatoire de six mois (le *Vorkurs*, dirigé par **Johannes Itten** puis **László Moholy-Nagy**) où l'élève **redécouvre les matériaux et les formes** avant toute spécialisation — couleur, texture, volume, contraste.`,
    `Le corps professoral est exceptionnel : Paul **Klee**, Wassily **Kandinsky**, Lyonel **Feininger**, Oskar **Schlemmer**, Josef et Anni **Albers**, Marcel **Breuer**, Mies **van der Rohe**. Concentration jamais vue d'artistes de premier plan dans un même bâtiment.`,
    `Trois villes successives : **Weimar** (1919-1925, chassée par la municipalité conservatrice), **Dessau** (1925-1932, bâtiment iconique conçu par Gropius), **Berlin** (1932-1933). **Fermée par les nazis** en **avril 1933** pour « art dégénéré ».`,
    `Le style Bauhaus : **géométrie épurée** (cercle, carré, triangle), **absence d'ornement**, **forme dictée par la fonction** (*form follows function*, formule héritée de Sullivan), matériaux modernes (**acier tubulaire**, **verre**, **béton**), couleurs primaires saturées.`,
    `La fermeture provoque une **diaspora massive** vers les États-Unis : Gropius part à **Harvard**, Mies van der Rohe à **l'IIT de Chicago**, Marcel Breuer suit, les Albers fondent le département art de **Black Mountain College**. Le style devient le **Style international**.`,
    `Objets emblématiques nés au Bauhaus : la chaise **Wassily** de Breuer (1925, acier tubulaire), le luminaire de **Wilhelm Wagenfeld** (1924), le berceau de Peter Keler (1922, géométrie pure), les **typographies sans-serif** modernes — héritage qui irrigue le design industriel et graphique mondial du XXᵉ siècle.`
  ],

  carte_mentale: {
    central: 'bauhaus',
    noeuds: [
      { id: 'bauhaus', label: 'Bauhaus', description: 'École allemande d\'art, architecture et design fondée à Weimar en 1919 et fermée par les nazis en 1933. Fusion de l\'art et de l\'artisanat. Berceau du design moderne.' },

      { id: 'contexte', label: 'Contexte 1919', description: 'Allemagne d\'après-guerre, République de Weimar, atmosphère utopique. La société à rebâtir littéralement et symboliquement.' },
      { id: 'principes', label: 'Principes', description: 'Réunir art et artisanat, forme suit fonction, géométrie épurée, matériaux modernes, sans ornement, pour tous.' },
      { id: 'pedagogie', label: 'Pédagogie', description: 'Le Vorkurs préliminaire, les ateliers spécialisés où maître artisan et maître artiste enseignent ensemble. Méthode totalement nouvelle.' },
      { id: 'professeurs', label: 'Maîtres', description: 'Klee, Kandinsky, Feininger, Schlemmer, Albers, Breuer, Mies van der Rohe. Concentration d\'artistes de premier plan unique au XXᵉ siècle.' },
      { id: 'lieux', label: 'Trois villes', description: 'Weimar (1919-25), Dessau (1925-32, bâtiment iconique), Berlin (1932-33). Treize ans, trois exils internes.' },
      { id: 'oeuvres', label: 'Objets phares', description: 'Chaise Wassily, luminaire Wagenfeld, berceau Keler, vaisselle TAC, typographies. Quasiment tout ce qu\'on appelle aujourd\'hui « design moderne ».' },
      { id: 'fermeture', label: 'Fermeture & diaspora', description: 'Avril 1933, fermée par les nazis. Diaspora massive vers les États-Unis. Le Bauhaus devient mondial après être mort à Berlin.' },

      // Principes
      { id: 'art-artisanat', label: 'Art + artisanat', description: 'Le Manifeste de 1919 abolit la distinction entre artiste et artisan. *Le but de toute activité plastique est la construction !*', parent: 'principes' },
      { id: 'fonction', label: 'Forme = fonction', description: 'Formule héritée de l\'architecte américain Louis Sullivan (1896). Tout élément d\'un objet doit servir un usage, sinon il doit disparaître.', parent: 'principes' },
      { id: 'geometrie', label: 'Géométrie', description: 'Cercle, carré, triangle : les trois formes pures. Couleurs primaires saturées (rouge, jaune, bleu) leur sont associées par Kandinsky.', parent: 'principes' },

      // Pédagogie
      { id: 'vorkurs', label: 'Le Vorkurs', description: 'Cours préliminaire obligatoire de **six mois** (puis un an). Direction successive : **Itten** (1919-23), **Moholy-Nagy** (1923-28), **Albers** (1928-33). Apprendre à voir avant de produire.', parent: 'pedagogie' },
      { id: 'ateliers', label: 'Ateliers', description: 'Métal, bois, tissage, céramique, peinture murale, scène, photographie, architecture. Chaque atelier est dirigé conjointement par un *maître artisan* et un *maître artiste*.', parent: 'pedagogie' },

      // Maîtres
      { id: 'gropius', label: 'Walter Gropius', description: 'Fondateur et premier directeur (1919-1928). Architecte. Auteur du manifeste fondateur et du bâtiment de Dessau. Part à Harvard en 1937.', parent: 'professeurs' },
      { id: 'klee-kandinsky', label: 'Klee & Kandinsky', description: '**Paul Klee** (1921-31) et **Wassily Kandinsky** (1922-33) y enseignent la peinture et la théorie de la forme. Les deux écrivent leurs grands textes théoriques au Bauhaus.', parent: 'professeurs' },
      { id: 'mies', label: 'Mies van der Rohe', description: 'Troisième et dernier directeur (1930-1933). Architecte. Fameuse formule : *moins, c\'est plus*. Part en 1938 à l\'IIT de Chicago.', parent: 'professeurs' },

      // Trois villes
      { id: 'weimar', label: 'Weimar 1919-1925', description: 'Berceau. Atmosphère utopique et expérimentale, expressionniste sous l\'influence d\'Itten. Tensions avec la municipalité, qui finit par couper les subsides.', parent: 'lieux' },
      { id: 'dessau', label: 'Dessau 1925-1932', description: 'Apogée. Bâtiment iconique conçu par Gropius, classé Unesco en 1996. L\'école devient industrielle, rationnelle, internationale.', parent: 'lieux' },
      { id: 'berlin', label: 'Berlin 1932-1933', description: 'Survie clandestine de quelques mois dans une usine désaffectée, sous Mies van der Rohe. Fermée par la Gestapo le 11 avril 1933.', parent: 'lieux' },

      // Objets phares
      { id: 'wassily', label: 'Chaise Wassily', description: 'Conçue par **Marcel Breuer** en **1925**, inspirée par les guidons de bicyclette. Premier fauteuil en **acier tubulaire** courbé. Toujours produite aujourd\'hui par Knoll.', parent: 'oeuvres' },
      { id: 'wagenfeld', label: 'Lampe Wagenfeld', description: 'Conçue par **Wilhelm Wagenfeld** en **1924** comme exercice d\'atelier. Pied de verre, abat-jour en opaline, géométrie de cercle pur. Icône absolue du design moderne.', parent: 'oeuvres' },

      // Fermeture
      { id: 'nazis', label: 'Fermeture nazie', description: '11 avril 1933, deux mois après l\'arrivée de Hitler au pouvoir. Le Bauhaus est qualifié d\'**« art dégénéré »** (Entartete Kunst), comme l\'expressionnisme et l\'abstraction en général.', parent: 'fermeture' },
      { id: 'diaspora', label: 'Diaspora américaine', description: 'Gropius à Harvard (1937), Mies à l\'IIT de Chicago (1938), Albers à Black Mountain College puis Yale. Le Style international qui en sort dominera l\'architecture du XXᵉ siècle.', parent: 'fermeture' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Une <em>école</em> dans une Allemagne brisée`,
      contenu_md:
`Avril **1919**. L'Allemagne a perdu la Première Guerre mondiale six mois plus tôt. Le Kaiser a abdiqué, l'empire allemand n'existe plus, une jeune République s'invente péniblement dans la ville de **Weimar** — d'où son nom de *République de Weimar*. Le pays est ruiné, humilié par le traité de Versailles, traversé de tentatives révolutionnaires. Dans ce chaos, un architecte de trente-six ans, **Walter Gropius**, accepte la direction d'une école d'art en faillite que la nouvelle République veut relancer : il en fusionne deux (l'École supérieure des arts plastiques et l'École des arts appliqués) et la baptise [Staatliches Bauhaus]{accent} — l'École d'État du bâtir.

Le **Manifeste fondateur**, qu'il rédige en avril 1919, s'ouvre par une phrase fameuse : *« Le but ultime de toute activité plastique est la construction. »* La couverture, gravée sur bois par **Lyonel Feininger**, représente une cathédrale à trois flèches : médiévale dans son inspiration (le *Bauhütte*, l'atelier des cathédrales gothiques — voir [[cathedrales-gothiques]]), résolument moderne dans son trait. Le programme tient en une formule : **abolir la séparation entre l'artiste et l'artisan**. Que sculpteur, peintre, tisserand, ébéniste, architecte, typographe, photographe travaillent ensemble dans une même école, dans un même bâtiment, sous une même devise. C'est radical en 1919, où l'académisme du XIXᵉ siècle règne encore partout.

Gropius n'a pas de programme esthétique préétabli. Il a une **méthode pédagogique** et une **conviction sociale** : l'art doit redescendre vers les objets de la vie quotidienne, pour tous, et il doit le faire en passant par la **fabrication concrète**. Le reste — la géométrie épurée, les chaises en acier, les typographies sans-serif que nous appelons aujourd'hui "Bauhaus" — surgira de cette méthode dans les années 1920, sans avoir été initialement prévu.`
    },

    {
      type: 'widget',
      composant: 'Frise',
      titre: 'Les quatorze années du Bauhaus',
      params: {
        evenements: [
          { date: '1919', titre: 'Fondation à Weimar', description: '**Walter Gropius** est nommé directeur. Publication du *Manifeste*. L\'école compte une centaine d\'élèves la première année.' },
          { date: '1922', titre: 'Klee et Kandinsky', description: '**Paul Klee** arrive en 1921, **Wassily Kandinsky** en 1922. Le Bauhaus devient le pôle de référence européen pour l\'**abstraction picturale**.' },
          { date: '1923', titre: 'Premier bilan & tournant', description: 'Grande **exposition à Weimar** : 15 000 visiteurs. **Moholy-Nagy** remplace Itten au Vorkurs : l\'école s\'oriente vers la **fonctionnalité industrielle**, abandonne l\'expressionnisme.' },
          { date: '1925', titre: 'Déménagement à Dessau', description: 'La municipalité conservatrice de Weimar coupe les subsides. Le maire socialiste de **Dessau** (Anhalt) propose un terrain. Gropius conçoit le bâtiment iconique, achevé en 1926.' },
          { date: '1928', titre: 'Démission de Gropius', description: 'Gropius part pour se consacrer à sa pratique d\'architecte. Lui succède **Hannes Meyer**, un Suisse marxiste qui radicalise le Bauhaus vers une *architecture sociale*.' },
          { date: '1930', titre: 'Mies van der Rohe', description: 'Meyer est démis sous pression politique. **Mies van der Rohe** prend la direction, dépolitise l\'école, rétablit la rigueur académique. Trois ans seulement.' },
          { date: '1932', titre: 'Exil à Berlin', description: 'Les nazis prennent la majorité à Dessau et ferment l\'école. Mies tente de la rouvrir dans une **usine désaffectée à Berlin-Steglitz** comme institut privé.' },
          { date: '1933', titre: 'Fermeture définitive', description: 'Deux mois après l\'arrivée de Hitler au pouvoir, la **Gestapo** investit le bâtiment de Berlin le **11 avril 1933**. Mies dissout l\'école quelques mois plus tard.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `<em>Art</em> et artisanat réunis`,
      contenu_md:
`L'idée fondatrice du Bauhaus, telle que Gropius la formule dans le Manifeste de 1919, est une **réaction historique** à une situation très précise : depuis la Renaissance italienne — voir [[renaissance-italienne]] — l'Occident a séparé l'**artiste**, intellectuel honorable manipulant des concepts (la beauté, l'imitation de la nature, l'expression du génie), de l'**artisan**, manuel inférieur fabriquant des objets utiles. Au XIXᵉ siècle, cette séparation s'aggrave avec la révolution industrielle : la production de masse, mécanique, anonyme, produit des objets de mauvaise qualité ; en réaction, le mouvement *Arts and Crafts* anglais autour de **William Morris** (années 1860) cherche à restaurer le travail artisanal. Mais il échoue à toucher autre chose qu'une élite riche : ses objets restent trop chers pour le peuple.

Gropius propose une voie nouvelle, qui synthétise ces deux héritages. Il accepte l'industrie — pas question de revenir aux ateliers médiévaux — mais il veut que l'art y entre. **L'artiste doit comprendre la fabrication**, et l'artisan doit accéder à la formation esthétique. C'est pourquoi, dans chaque atelier du Bauhaus, deux maîtres enseignent conjointement : un **maître artisan** (*Werkmeister*) qui maîtrise la technique du matériau (forge, ébénisterie, tissage, poterie), et un **maître artiste** (*Formmeister*) qui maîtrise la composition, la couleur, le sens. L'élève apprend des deux. À la fin de son cursus, il est ni l'un ni l'autre : il est l'**artiste-artisan moderne**, capable de **concevoir et fabriquer** des objets pour la production industrielle.

Cette ambition est neuve. Elle ne sera pas comprise immédiatement par tous : les premières années à Weimar, sous l'influence du peintre suisse **Johannes Itten**, le Bauhaus garde une coloration mystique et expressionniste — l'élève médite, jeûne, dessine à l'aveugle pour libérer son intuition. C'est en **1923**, au moment du tournant qui amène **László Moholy-Nagy** à la place d'Itten, que le Bauhaus rationalise sa démarche et s'oriente vers la **fonctionnalité industrielle** qui le rendra mondialement célèbre.`
    },

    {
      type: 'encadre',
      label: 'La formule fondatrice',
      contenu_md: `*"Architectes, sculpteurs, peintres, nous devons tous retourner à l'artisanat ! Car il n'y a pas d'**art professionnel**. Il n'y a pas de différence essentielle entre l'artiste et l'artisan."* — [Walter Gropius]{accent}, **Manifeste du Bauhaus**, avril 1919. Ce paragraphe, écrit en six lignes denses dans un texte d'à peine deux pages, contient tout le programme. Il sera décliné en dix ans dans des centaines d'objets, d'expositions, de bâtiments — et en cent ans dans le design industriel mondial.`
    },

    {
      type: 'widget',
      composant: 'GrilleCartes',
      titre: 'Quatre principes du design Bauhaus',
      params: {
        cartes: [
          { tag: 'Principe 1', titre: 'Forme = fonction', description: 'Formule héritée de l\'architecte américain **Louis Sullivan** (1896). Tout élément d\'un objet doit servir un usage clair. **Décor superflu = trahison**. Un fauteuil n\'a besoin d\'aucune dorure pour bien porter un corps.' },
          { tag: 'Principe 2', titre: 'Géométrie pure', description: 'Cercle, carré, triangle : les trois formes premières. Couleurs primaires saturées (rouge, jaune, bleu) leur sont associées par Kandinsky (cercle = bleu, carré = rouge, triangle = jaune).' },
          { tag: 'Principe 3', titre: 'Matériaux modernes', description: '**Acier tubulaire**, **verre**, **béton armé**, **contreplaqué**. Matériaux industriels qu\'on n\'utilisait jamais en mobilier domestique. Les Bauhaus les rendent légitimes — et beaux.' },
          { tag: 'Principe 4', titre: 'Pour tous', description: 'Le design Bauhaus se veut **reproductible industriellement**, donc **bon marché**, donc accessible. C\'est la rupture avec *Arts and Crafts* : l\'élégance n\'est plus réservée aux riches.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le <em>Vorkurs</em> : tout commence par les matériaux`,
      contenu_md:
`L'innovation pédagogique la plus durable du Bauhaus est le [Vorkurs]{accent} — le **cours préliminaire**. Pendant les six premiers mois (puis un an à partir de 1925), chaque nouvel élève, quel que soit son projet d'orientation, suit cet enseignement obligatoire. L'objectif n'est pas d'apprendre une technique. C'est, plus fondamentalement, d'**apprendre à voir** : qu'est-ce qu'une couleur ? Une texture ? Un volume ? Un contraste de matériaux ? Comment l'œil perçoit-il une forme géométrique simple selon son orientation ? Comment le métal *sonne-t-il* visuellement à côté du tissu ?

Trois directeurs successifs incarnent trois philosophies du Vorkurs. Le premier, **Johannes Itten** (1919-1923), est un peintre suisse mystique, adepte du **mazdaznan** (un syncrétisme oriental). Il fait jeûner ses élèves, leur fait dessiner les yeux fermés "à l'écoute de leur souffle", étudie en profondeur les **contrastes de couleurs**. Méthode controversée, féconde mais incompatible avec l'industrie : Gropius le pousse vers la sortie en 1923.

Lui succède **László Moholy-Nagy** (1923-1928), un Hongrois rationaliste et photographe, qui transforme le Vorkurs en laboratoire d'expérimentation **objective** : photographie, photogramme, sculpture lumineuse, étude systématique des **propriétés tactiles et structurelles** des matériaux. C'est l'âge d'or du Bauhaus comme école de design industriel.

Le troisième, **Josef Albers** (1928-1933), un ancien élève devenu maître, prolonge Moholy-Nagy avec une rigueur ascétique. Il fera émigrer la méthode aux États-Unis (Black Mountain College, puis Yale) où elle structurera l'enseignement du design américain pendant tout le XXᵉ siècle. Son grand livre, *Interaction of Color* (1963), reste l'une des analyses les plus profondes jamais écrites sur la perception chromatique.`
    },

    {
      type: 'widget',
      composant: 'ListeMethodes',
      titre: 'Les maîtres et leurs ateliers',
      params: {
        methodes: [
          { titre: 'Walter Gropius — Architecture', description: 'Fondateur et premier directeur (**1919-1928**). Architecte. Bâtiment de Dessau (1926). Part à Harvard en 1937, y forme deux générations d\'architectes américains.' },
          { titre: 'Paul Klee — Peinture & théorie de la forme', description: 'Au Bauhaus de **1921 à 1931**. Y écrit ses cours, publiés en 1925 sous le titre *Pädagogisches Skizzenbuch* : analyse fondatrice de la **ligne**, du **plan**, du **mouvement** dans l\'image.' },
          { titre: 'Wassily Kandinsky — Peinture murale & théorie', description: 'Au Bauhaus de **1922 à 1933**. Publie *Punkt und Linie zu Fläche* (Point, ligne, plan) en 1926 — l\'un des textes les plus influents de l\'**abstraction** au XXᵉ siècle.' },
          { titre: 'Marcel Breuer — Mobilier', description: 'Élève (1920-1924) puis maître de l\'atelier mobilier. Invente la **chaise en acier tubulaire** en 1925, inspirée par les guidons de bicyclette Adler. Émigre, suit Gropius à Harvard.' },
          { titre: 'László Moholy-Nagy — Vorkurs & métal', description: 'Au Bauhaus de **1923 à 1928**. Photographe, théoricien. Transforme le Vorkurs en laboratoire d\'expérimentation industrielle. Fonde le **New Bauhaus** à Chicago en 1937.' },
          { titre: 'Mies van der Rohe — Architecture', description: 'Troisième et dernier directeur (**1930-1933**). Auteur de la formule *Less is More*. Émigre à l\'**IIT de Chicago** en 1938, y conçoit le campus le plus radicalement moderne de l\'époque.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `<em>Dessau</em> et le bâtiment iconique`,
      contenu_md:
`En **1925**, après six ans à Weimar et des conflits incessants avec la municipalité conservatrice, le Bauhaus déménage à **Dessau**, ville industrielle du land d'Anhalt dirigée par un maire socialiste qui voit dans l'école un outil de modernisation. Gropius conçoit personnellement le **nouveau bâtiment**, achevé en **décembre 1926**. C'est, selon les mots de l'historien de l'architecture Reyner Banham, *« le premier bâtiment achevé qui formule entièrement le langage de l'architecture moderne »*.

Ce que Gropius y déploie est nouveau : pas de façade principale, pas de hiérarchie d'entrée monumentale. Trois corps de bâtiments articulés en plan asymétrique (ateliers, salles de cours, foyer-cantine, résidence des étudiants) reliés par une passerelle vitrée. Les **façades sont entièrement de verre** sur des structures porteuses internes en béton — innovation technique radicale qu'on appellera plus tard le **mur-rideau**. La couleur primaire (jaune, rouge, bleu) ne décore que les portes intérieures et les sous-faces de poutres. Les ateliers sont éclairés par la lumière du nord, la résidence des étudiants par celle du sud. Tout y est **fonctionnel jusqu'à la radicalité**, et précisément pour cela d'une beauté inédite.

Le bâtiment de Dessau devient immédiatement célèbre dans toute l'Europe. Il est inscrit au **patrimoine mondial de l'Unesco** en **1996** avec les *Maisons des maîtres* (sept villas où vivaient les enseignants, conçues elles aussi par Gropius). C'est dans ce bâtiment, entre 1926 et 1932, que se conçoivent et se fabriquent la quasi-totalité des **objets emblématiques** du Bauhaus : chaise Wassily, vaisselle TAC, lampes Wagenfeld, tapis d'Anni Albers, typographies de Herbert Bayer.`
    },

    {
      type: 'widget',
      composant: 'SelecteurValeurs',
      titre: 'Objets Bauhaus iconiques',
      params: {
        options: [
          { label: 'Chaise Wassily', valeur: '1925', description: 'Conçue par **Marcel Breuer** dans l\'atelier mobilier de Dessau. Première chaise en **acier tubulaire** courbé. Inspirée — c\'est documenté — par les guidons de bicyclette **Adler** sur lesquelles Breuer venait d\'apprendre à rouler. Toujours produite par Knoll.' },
          { label: 'Lampe Wagenfeld', valeur: '1924', description: 'Conçue par **Wilhelm Wagenfeld**, étudiant au Vorkurs, comme exercice d\'atelier de métal. Pied en verre, abat-jour en opaline, géométrie de cercle pur. Devenue icône absolue du design moderne. Réédition contemporaine chez Tecnolumen.' },
          { label: 'Berceau Keler', valeur: '1922', description: '**Peter Keler**, étudiant, conçoit un berceau qui décompose la forme en **trois éléments géométriques primaires** : un triangle vertical, un cercle au sol, des sphères de couleur primaire sur les côtés. Application directe des cours de Kandinsky.' },
          { label: 'Vaisselle TAC', valeur: '1969', description: '**Walter Gropius** conçoit cette vaisselle pour la marque allemande **Rosenthal** vers la fin de sa vie. Toutes les pièces géométriques pures : la théière est un cylindre, la tasse une demi-sphère. Vendue par millions.' },
          { label: 'Typographie Universal', valeur: '1925', description: '**Herbert Bayer**, directeur de l\'atelier de typographie, conçoit la fonte **Universal** : entièrement en **bas de casse**, sans-serif, géométrique. Argument : les majuscules sont redondantes, on peut s\'en passer. Ancêtre de toutes les fontes sans-serif modernes.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `La <em>fermeture</em> nazie et la diaspora`,
      contenu_md:
`En septembre **1931**, les **nazis** obtiennent la majorité au conseil municipal de Dessau. Leur premier acte concret est de **fermer le Bauhaus** : pour Hitler, l'architecture moderne, l'art abstrait, le mobilier d'acier sont l'incarnation du *Kulturbolschewismus* — bolchevisme culturel. Mies van der Rohe, alors directeur, tente l'impossible : il déménage l'école à **Berlin-Steglitz** dans une usine de téléphones désaffectée, dépolitise tout ce qu'il peut, expulse les étudiants communistes, en fait un institut privé sans subvention publique. Cela ne sauve rien. Deux mois après l'arrivée de Hitler au pouvoir, **le 11 avril 1933**, la Gestapo investit le bâtiment, arrête plusieurs étudiants, scelle les portes. Mies prononce officiellement la dissolution de l'école quelques mois plus tard. Quatorze années. Plus que tout ce que la plupart des écoles d'art ont produit en deux siècles.

Mais c'est ici que le Bauhaus connaît son second acte. **Tous les professeurs émigrent**, presque sans exception. **Walter Gropius** part pour Londres, puis pour **Harvard** en 1937 où il dirige le département d'architecture pendant quinze ans — il forme là deux générations d'architectes américains, dont Philip Johnson et I.M. Pei. **Mies van der Rohe** part pour l'**IIT de Chicago** en 1938 où il conçoit le campus le plus radicalement moderne d'Amérique. **Marcel Breuer** suit Gropius à Harvard. **László Moholy-Nagy** fonde le **New Bauhaus** à Chicago en 1937. **Josef et Anni Albers** s'installent à **Black Mountain College** en Caroline du Nord, l'école d'avant-garde la plus influente des années 1940-1950 ; Josef passe ensuite à **Yale** où il dirigera le département de design jusqu'en 1958. **Paul Klee** et **Wassily Kandinsky**, plus âgés, restent en Europe (Klee meurt en 1940 en Suisse, Kandinsky en 1944 à Paris) mais leur enseignement irrigue toute l'abstraction américaine via leurs anciens élèves.

Le **Style international**, qui domine l'architecture mondiale entre 1945 et 1975 — gratte-ciel de verre, plans ouverts, géométrie pure, sans ornement —, est largement le Bauhaus exporté. Quasiment chaque immeuble de bureau d'après-guerre dans le monde, chaque chaise Eames, chaque typographie sans-serif, chaque appartement en plan libre, descend d'une école allemande qui a duré quatorze ans et fermé sous la pression des chemises brunes.`
    },

    {
      type: 'encadre',
      label: 'La leçon historique',
      contenu_md: `Le Bauhaus est l'une des plus belles démonstrations qu'**une école de quelques dizaines d'élèves**, dirigée pendant quatorze ans par une poignée d'enseignants exceptionnels, peut **redessiner le monde matériel** d'un siècle entier. Aucun budget colossal, aucune armée derrière. Une méthode, une exigence, des objets fabriqués un à un dans des ateliers. Et un siècle plus tard, ta chaise, ta lampe, ton appartement, ta typographie sont bauhausiens, que tu le saches ou non.`
    }

  ],

  quiz: [
    {
      q: `Quand et par qui le Bauhaus est-il fondé ?`,
      options: [
        `À Berlin en 1933 par Mies van der Rohe`,
        `À Weimar en 1919 par Walter Gropius`,
        `À Munich en 1909 par Paul Klee`,
        `À Dessau en 1925 par Wassily Kandinsky`
      ],
      correcte: 1,
      explication: `Le Bauhaus est fondé à **Weimar** le **1ᵉʳ avril 1919** par l'architecte allemand **Walter Gropius**, qui fusionne l'École supérieure des arts plastiques et l'École des arts appliqués de la ville sous le nom de *Staatliches Bauhaus* (École d'État du bâtir). C'est l'année de la fondation de la République de Weimar, dans une Allemagne d'après-guerre en pleine reconstruction politique et symbolique. L'école déménagera ensuite à Dessau (1925) puis Berlin (1932) avant d'être fermée par les nazis en 1933.`
    },
    {
      q: `Quelle est l'idée fondatrice du Bauhaus selon le Manifeste de Gropius (1919) ?`,
      options: [
        `Restaurer la peinture académique du XIXᵉ siècle`,
        `Abolir la séparation entre l'artiste et l'artisan`,
        `Promouvoir uniquement l'art abstrait`,
        `Former exclusivement des architectes`
      ],
      correcte: 1,
      explication: `Le Manifeste de 1919 énonce comme principe central l'**abolition de la séparation entre l'artiste** (qui conçoit, intellectuel) **et l'artisan** (qui fabrique, manuel) — séparation que Gropius considère comme une "catastrophe culturelle" héritée de la Renaissance. Au Bauhaus, chaque atelier est dirigé conjointement par un *maître artisan* (qui transmet la technique du matériau) et un *maître artiste* (qui transmet la composition et la couleur). L'élève apprend les deux, et sort capable à la fois de concevoir et de fabriquer pour la production industrielle.`
    },
    {
      q: `Qu'est-ce que le Vorkurs ?`,
      options: [
        `Un atelier de menuiserie réservé aux étudiants avancés`,
        `Le cours préliminaire obligatoire de six mois à un an, où l'élève apprend à voir les matériaux, les couleurs et les formes avant toute spécialisation`,
        `Un examen final qui ferme le cursus`,
        `Le nom du bâtiment principal de Dessau`
      ],
      correcte: 1,
      explication: `Le **Vorkurs** est l'innovation pédagogique la plus durable du Bauhaus : un **cours préliminaire obligatoire** que chaque nouvel élève suit pendant les six premiers mois (puis un an), quel que soit son projet d'orientation. L'objectif n'est pas une technique mais une **réeducation de la perception** : couleur, texture, volume, contraste de matériaux. Trois directeurs successifs l'incarnent : **Johannes Itten** (1919-23, approche mystique), **László Moholy-Nagy** (1923-28, expérimentation industrielle), **Josef Albers** (1928-33, rigueur ascétique). Le Vorkurs est exporté aux États-Unis par Albers et structurera l'enseignement du design américain au XXᵉ siècle.`
    },
    {
      q: `Quelles sont les trois villes successives du Bauhaus ?`,
      options: [
        `Berlin, Munich, Hambourg`,
        `Weimar, Dessau, Berlin`,
        `Cologne, Francfort, Stuttgart`,
        `Vienne, Prague, Budapest`
      ],
      correcte: 1,
      explication: `Le Bauhaus a connu **trois villes** successives en quatorze ans : **Weimar** (1919-1925, fondation, chassé par la municipalité conservatrice), **Dessau** (1925-1932, apogée, bâtiment iconique conçu par Gropius, classé Unesco en 1996), et **Berlin** (1932-1933, survie clandestine de quelques mois dans une usine désaffectée, sous Mies van der Rohe). L'école est fermée le **11 avril 1933** par la Gestapo, deux mois après l'arrivée de Hitler au pouvoir, pour "art dégénéré" (*Entartete Kunst*).`
    },
    {
      q: `Qui invente la chaise en acier tubulaire au Bauhaus, et en quelle année ?`,
      options: [
        `Walter Gropius en 1919`,
        `Marcel Breuer en 1925, inspiré par les guidons de bicyclette`,
        `Mies van der Rohe en 1933`,
        `Paul Klee en 1922`
      ],
      correcte: 1,
      explication: `**Marcel Breuer**, alors âgé de 23 ans, conçoit en **1925** dans l'atelier mobilier de Dessau la première chaise en **acier tubulaire courbé** — connue aujourd'hui sous le nom de **chaise Wassily** (en hommage à Kandinsky qui en avait reçu une pour son bureau). Le procédé est inspiré directement, et de façon documentée, par les guidons de bicyclette **Adler** sur lesquelles Breuer venait d'apprendre à rouler. C'est l'un des objets les plus copiés du XXᵉ siècle. Il est toujours produit aujourd'hui par la firme américaine Knoll.`
    },
    {
      q: `Pourquoi le Bauhaus est-il fermé en 1933 ?`,
      options: [
        `Faillite financière et désertion des étudiants`,
        `Décision personnelle de Mies van der Rohe`,
        `Pression nazie : l'école est qualifiée d'« art dégénéré » deux mois après l'arrivée de Hitler au pouvoir`,
        `Incendie accidentel du bâtiment de Dessau`
      ],
      correcte: 2,
      explication: `Le Bauhaus est fermé sous **pression nazie**. Dès 1931, les nazis obtiennent la majorité au conseil municipal de Dessau et ferment le bâtiment principal. Mies van der Rohe tente de sauver l'école en la transférant à Berlin comme institut privé, en dépolitisant tout, mais cela ne suffit pas. Le **11 avril 1933**, deux mois après l'accession de Hitler à la chancellerie, la **Gestapo investit le bâtiment** de Berlin-Steglitz, arrête plusieurs étudiants, scelle les portes. Le Bauhaus est qualifié d'**« art dégénéré »** (*Entartete Kunst*), comme l'expressionnisme et l'abstraction en général.`
    },
    {
      q: `Quel impact a eu la fermeture du Bauhaus sur le monde anglo-saxon ?`,
      options: [
        `Aucun — l'école est restée allemande`,
        `Les anciens professeurs ont émigré massivement aux États-Unis : Gropius à Harvard, Mies à l'IIT de Chicago, Albers à Black Mountain puis Yale, Moholy-Nagy fonde le New Bauhaus à Chicago. Le Style international en sort.`,
        `Le Bauhaus est devenu un musée immédiatement`,
        `Il a inspiré le surréalisme français`
      ],
      correcte: 1,
      explication: `La fermeture déclenche une **diaspora massive** vers les États-Unis. **Walter Gropius** part à **Harvard** (1937), **Mies van der Rohe** à l'**IIT de Chicago** (1938), **Marcel Breuer** suit Gropius à Harvard, **László Moholy-Nagy** fonde le **New Bauhaus** à Chicago en 1937, **Josef et Anni Albers** s'installent à **Black Mountain College** puis Josef passe à **Yale**. Ces enseignants forment deux générations d'architectes, designers et artistes américains. Le **Style international**, qui domine l'architecture mondiale entre 1945 et 1975 (gratte-ciel de verre, plans ouverts, géométrie pure), est largement le Bauhaus exporté.`
    },
    {
      q: `Quels matériaux modernes le Bauhaus rend-il légitimes en mobilier domestique ?`,
      options: [
        `Le marbre et l'or`,
        `L'acier tubulaire, le verre, le béton armé, le contreplaqué`,
        `L'argile non cuite et le crin de cheval`,
        `Le bronze martelé et la dorure à la feuille`
      ],
      correcte: 1,
      explication: `Le Bauhaus introduit en mobilier domestique des **matériaux industriels** qui n'étaient utilisés que dans l'architecture ou l'usine : **acier tubulaire** (chaise Wassily de Breuer), **verre** (lampe Wagenfeld), **béton armé** (façades du bâtiment de Dessau), **contreplaqué** (mobilier Aalto influencé par le Bauhaus). C'est une rupture esthétique majeure : avant le Bauhaus, le mobilier "noble" était en bois précieux ouvré ; après, les meubles d'acier brut deviennent symbole de modernité élégante. Le principe : ces matériaux sont **reproductibles industriellement**, donc **bon marché**, donc rendent l'élégance accessible à tous — ambition sociale au cœur du projet.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Bauhaus',
      definition: `École allemande d'art, architecture et design fondée à **Weimar** le 1ᵉʳ avril **1919** par **Walter Gropius**, et fermée par les nazis à Berlin le 11 avril **1933**. Le nom signifie *maison du bâtir*. Quatorze années qui ont redessiné le mobilier, l'architecture et la typographie du XXᵉ siècle.`
    },
    {
      terme: 'Walter Gropius',
      definition: `Architecte allemand (1883-1969). **Fondateur et premier directeur du Bauhaus** (1919-1928). Auteur du *Manifeste* fondateur et du bâtiment iconique de Dessau (1926). Émigre aux États-Unis en 1937, dirige le département d'architecture de **Harvard** jusqu'en 1952. Forme deux générations d'architectes américains.`
    },
    {
      terme: 'Manifeste du Bauhaus',
      definition: `Texte fondateur écrit par **Walter Gropius** en avril 1919. Énonce comme principe central l'**abolition de la séparation entre l'artiste et l'artisan**. La couverture, gravée par **Lyonel Feininger**, représente une cathédrale gothique stylisée — référence aux ateliers de bâtisseurs médiévaux (*Bauhütte*).`
    },
    {
      terme: 'Vorkurs',
      definition: `**Cours préliminaire obligatoire** suivi par tout nouvel élève du Bauhaus pendant six mois (puis un an). Objectif : apprendre à **voir les matériaux, couleurs et formes** avant toute spécialisation. Trois directeurs successifs : **Johannes Itten** (1919-23, approche mystique), **László Moholy-Nagy** (1923-28, expérimentation industrielle), **Josef Albers** (1928-33, rigueur ascétique).`
    },
    {
      terme: 'Forme suit fonction',
      definition: `Principe esthétique exprimé par l'architecte américain **Louis Sullivan** en 1896 (*"form follows function"*) et adopté par le Bauhaus : tout élément d'un objet ou d'un bâtiment doit servir un **usage clair**, sinon il doit disparaître. **Décor superflu** considéré comme trahison. Inspire le minimalisme moderne.`
    },
    {
      terme: 'Marcel Breuer',
      definition: `Hongrois (1902-1981). Élève (1920-1924) puis maître de l'**atelier mobilier** du Bauhaus. Invente en **1925** la **chaise en acier tubulaire** (dite *Wassily*), inspirée par les guidons de bicyclette. Émigre aux États-Unis en 1937, suit Gropius à **Harvard**, devient l'un des architectes majeurs du Style international.`
    },
    {
      terme: 'Mies van der Rohe',
      definition: `Architecte allemand (1886-1969). **Troisième et dernier directeur** du Bauhaus (1930-1933). Auteur de la formule fameuse **« Less is More »**. Conçoit le pavillon de Barcelone (1929) et le Seagram Building de New York (1958). Émigre à l'**IIT de Chicago** en 1938 où il conçoit le campus le plus radical de l'Amérique moderne.`
    },
    {
      terme: 'Style international',
      definition: `Mouvement architectural qui domine la planète entre **1945 et 1975** : gratte-ciel de verre, façades en mur-rideau, plans ouverts, géométrie pure, **absence d'ornement**. Issu directement du Bauhaus exporté aux États-Unis par Gropius, Mies, Breuer. Quasiment chaque immeuble de bureaux d'après-guerre dans le monde en descend.`
    },
    {
      terme: 'Chaise Wassily',
      definition: `Première chaise en **acier tubulaire** courbé, conçue par **Marcel Breuer** en **1925** dans l'atelier mobilier de Dessau. Nommée d'après **Wassily Kandinsky** qui en avait reçu une pour son bureau. Inspirée par les guidons de bicyclette Adler. Toujours produite par la firme américaine **Knoll** — l'un des objets les plus copiés du XXᵉ siècle.`
    },
    {
      terme: 'Black Mountain College',
      definition: `École expérimentale d'arts libéraux en Caroline du Nord (1933-1957). Refuge américain de plusieurs anciens du Bauhaus dès 1933, notamment **Josef et Anni Albers**. École d'avant-garde la plus influente des années 1940-1950 — y enseignent ou étudient Cage, Cunningham, Rauschenberg, De Kooning. Prolonge la méthode Bauhaus dans l'Amérique d'après-guerre.`
    }
  ]

});
