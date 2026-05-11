/* ===================================================================
   SUJET — L'écriture cunéiforme
   ===================================================================
   La première écriture de l'histoire humaine.
   Domaines : Histoire, Linguistique
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'ecriture-cuneiforme',
    titre: 'L\'écriture <em>cunéiforme</em>',
    domaines: ['Histoire', 'Arts'],
    tags: ['mésopotamie', 'sumer', 'écriture', 'antiquité', 'archéologie'],
    difficulte: 2,
    duree_estimee_min: 25,
    prerequis: [],
    lie_a: ['empire-byzantin', 'paris-geographie', 'pyramides-egypte'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'Comprendre l\'invention qui a fait basculer l\'humanité dans l\'histoire — l\'écriture cunéiforme, née en Mésopotamie il y a 5 300 ans, déchiffrée seulement il y a deux siècles, et qui a porté pendant trois millénaires la pensée de quinze civilisations.',

  points_cles: [
    'L\'**écriture cunéiforme** est l\'une des **plus anciennes écritures connues**, apparue vers **3300 av. J.-C.** en Mésopotamie (actuel Irak).',
    'Son nom vient du latin *cuneus* (« coin ») : ses signes sont formés de petits **traits en forme de clous**, imprimés dans l\'argile fraîche avec un calame en roseau.',
    'Inventée à l\'origine pour la **comptabilité** (stocks de céréales, têtes de bétail), elle a peu à peu intégré l\'expression du langage parlé.',
    'Elle a servi à écrire au moins **15 langues** sans parenté entre elles : sumérien, akkadien, babylonien, assyrien, hittite, élamite, vieux perse, ougaritique...',
    'Le texte cunéiforme le plus célèbre est l\'**Épopée de Gilgamesh** (IIᵉ millénaire av. J.-C.), plus ancienne œuvre littéraire connue de l\'humanité.',
    'Le **déchiffrement** est l\'œuvre du XIXᵉ siècle : Henry Rawlinson, escaladant la falaise de Behistun en Iran, copia une inscription trilingue qui servit de pierre de Rosette cunéiforme.',
    'Plus de **500 000 tablettes** ont été retrouvées à ce jour. La très grande majorité reste encore non publiée et non traduite.'
  ],

  carte_mentale: {
    central: 'cuneiforme',
    noeuds: [
      { id: 'cuneiforme', label: 'Cunéiforme', description: 'Système d\'écriture inventé en Mésopotamie vers 3300 av. J.-C., utilisé pendant ~3 000 ans.' },
      { id: 'naissance', label: 'Naissance comptable', description: 'L\'écriture émerge des besoins administratifs des temples de Sumer : compter les biens, les hommes, les troupeaux.' },
      { id: 'support', label: 'Argile et calame', description: 'Tablettes d\'argile humide, gravées au calame de roseau, puis séchées au soleil ou cuites.' },
      { id: 'evolution', label: 'Évolution du système', description: 'De pictogrammes concrets à des signes abstraits, puis phonétiques. Trois millénaires d\'adaptation.' },
      { id: 'langues', label: 'Multilinguisme', description: 'Adoptée par les peuples successifs de la région pour écrire des langues sans parenté entre elles.' },
      { id: 'corpus', label: 'Textes', description: 'Comptes, codes de lois, poésie, prières, traités diplomatiques, épopées.' },
      { id: 'dechiffrement', label: 'Déchiffrement', description: 'Une énigme de deux siècles de recherche, résolue au milieu du XIXᵉ siècle.' },

      // Évolution
      { id: 'pictogramme', label: 'Pictogrammes (-3300)', description: 'Premiers signes : des **dessins** stylisés représentant directement l\'objet (poisson, étoile, blé).', parent: 'evolution' },
      { id: 'logogramme', label: 'Logogrammes', description: 'Chaque signe représente un **mot** entier. Plus rapide à tracer mais nombreux à mémoriser.', parent: 'evolution' },
      { id: 'syllabaire', label: 'Phonétisation', description: 'Vers -2700, des signes commencent à représenter des **sons** (syllabes), permettant d\'écrire n\'importe quel mot, même les noms propres étrangers.', parent: 'evolution' },

      // Corpus
      { id: 'gilgamesh', label: 'Gilgamesh', description: 'Épopée du IIᵉ millénaire. Première œuvre littéraire connue. Évoque l\'amitié, la quête d\'immortalité, et un déluge antérieur à celui de la Bible.', parent: 'corpus' },
      { id: 'hammurabi', label: 'Code d\'Hammurabi', description: '**1750 av. J.-C.** Stèle gravée de 282 lois babyloniennes. *« Œil pour œil, dent pour dent »*. Aujourd\'hui au Louvre.', parent: 'corpus' },
      { id: 'archives', label: 'Archives royales', description: 'Mari, Ebla, Ninive, El-Amarna : **dizaines de milliers** de tablettes administratives et diplomatiques retrouvées intactes.', parent: 'corpus' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Le seuil de l\'<em>histoire</em>',
      contenu_md:
`Les historiens distinguent traditionnellement la **préhistoire** de l\'**histoire** par un seul critère : l\'apparition de l\'écriture. C\'est elle qui transforme une société orale, où la mémoire est portée par les vivants, en une société qui peut transmettre une pensée précise à travers les générations et les distances.

Ce seuil a été franchi pour la première fois, à notre connaissance, vers **3300 avant notre ère** — il y a 5 300 ans — dans le sud de la Mésopotamie, en pays de Sumer (l\'actuel Irak du sud). Là, dans les grandes cités-temples d\'**Ourouk**, **Ur** ou **Lagash**, des scribes ont commencé à imprimer dans des galettes d\'argile fraîche des signes destinés à durer.

Cette première écriture est **cunéiforme** — du latin *cuneus*, le coin. Ses signes sont en effet faits de petites empreintes triangulaires, formées par la pression d\'un calame de roseau taillé en biseau dans l\'argile humide. Elle se présente partout sous le même aspect : ces formes en clous, parfois élégantes, parfois griffues, alignées en lignes horizontales sur des tablettes de quelques centimètres.`
    },

    {
      type: 'texte',
      titre: 'Une écriture née de la <em>comptabilité</em>',
      contenu_md:
`Contrairement au mythe romantique du poète qui invente l\'écriture pour fixer la beauté du monde, les premières tablettes cunéiformes sont parfaitement prosaïques : ce sont des **bordereaux comptables**.

Les temples sumériens étaient d\'immenses centres de redistribution agricole : ils collectaient les céréales des paysans, géraient les troupeaux, payaient les artisans, distribuaient des rations. Pour suivre tout cela, il fallait **compter et mémoriser** des transactions par milliers. Avant l\'écriture, on utilisait depuis le néolithique des [calculi]{accent} — petites figurines d\'argile dont chacune représentait une unité (un mouton, une mesure de grain). Les premiers signes cunéiformes sont vraisemblablement des dessins de ces figurines, désormais imprimés sur des tablettes plates.

Pendant plusieurs siècles, l\'écriture ne sert presque qu\'à cela : *« 36 boisseaux d\'orge livrés au temple par Untel »*. Les littéraires viendront plus tard.`
    },

    {
      type: 'encadre',
      label: 'Pictogramme à coin',
      contenu_md: 'Les tout premiers signes étaient des **pictogrammes** — des dessins stylisés (un poisson, une étoile, un épi). Mais comme on les imprimait dans de l\'argile fraîche au calame, la courbe naturelle a été progressivement remplacée par des **traits droits**, plus rapides à exécuter. Au fil des siècles, les dessins originels deviennent méconnaissables, transformés en assemblages géométriques de coins. C\'est la **forme** matérielle qui a discipliné le signe.'
    },

    {
      type: 'widget',
      titre: 'L\'évolution sur trois millénaires',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '~3300 av. J.-C.', titre: 'Premières tablettes', description: 'À **Ourouk**, premières tablettes pictographiques. Inventaires du temple. La société sumérienne est dans un boom démographique et urbain.' },
          { date: '~2700 av. J.-C.', titre: 'Phonétisation', description: 'Les signes commencent à représenter des **sons** plutôt que des choses. L\'écriture peut désormais transcrire n\'importe quelle parole.' },
          { date: '~2400 av. J.-C.', titre: 'Premiers textes littéraires', description: 'Hymnes, mythes, listes lexicales. Le cunéiforme dépasse définitivement la comptabilité.' },
          { date: '~2334 av. J.-C.', titre: 'Akkadiens', description: 'Sargon d\'Akkad fonde le premier empire connu. Le cunéiforme s\'**adapte à l\'akkadien**, langue sémitique sans parenté avec le sumérien — premier exemple d\'écriture multilingue.' },
          { date: '~1750 av. J.-C.', titre: 'Code d\'Hammurabi', description: 'Le célèbre code juridique babylonien est gravé sur une stèle de basalte de 2,25 m. Aujourd\'hui exposée au **Louvre** à Paris (voir [[paris-geographie]]).' },
          { date: '~1200 av. J.-C.', titre: 'Apogée hittite et assyrienne', description: 'Le cunéiforme est l\'écriture diplomatique de tout le **Proche-Orient**. Les archives d\'**El-Amarna** (Égypte) sont rédigées en akkadien cunéiforme par des chancelleries égyptiennes.' },
          { date: '~600 av. J.-C.', titre: 'Empire néo-babylonien', description: 'Apogée intellectuel : astronomes babyloniens cataloguent les étoiles, calculent éclipses et phases planétaires sur des tablettes. Pythagore et les Grecs leur doivent beaucoup.' },
          { date: '~75 ap. J.-C.', titre: 'Dernière tablette connue', description: 'À Babylone, sous domination parthe : la dernière tablette cunéiforme datée. Le système, vieux de **3 400 ans**, s\'éteint silencieusement. Il faudra **18 siècles** pour le redéchiffrer.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Une écriture, <em>quinze langues</em>',
      contenu_md:
`Le cunéiforme a la particularité d\'avoir été utilisé par des peuples successifs pour écrire des langues **sans parenté entre elles**. Le système n\'est pas attaché à une langue particulière : c\'est un **outil graphique** que chaque civilisation a adapté.

Le **sumérien** (langue isolée, sans parenté connue) en est l\'usage premier. Vers 2300 av. J.-C., l\'**akkadien** (langue sémitique, cousin de l\'arabe et de l\'hébreu) s\'en empare. Les **Babyloniens** et les **Assyriens** l\'utilisent pour leurs propres dialectes akkadiens. Les **Hittites** d\'Anatolie l\'adoptent pour écrire leur langue indo-européenne. Les **Élamites** d\'Iran, les **Hourrites**, les **Ougaritiens** font de même. Vers 500 av. J.-C., même les **Perses achéménides** adaptent un cunéiforme simplifié pour écrire leur langue.

Lire le cunéiforme demande donc de savoir laquelle des **quinze langues connues** s\'écrit sur la tablette qu\'on étudie. Les scribes antiques étaient souvent **multilingues** : un Hittite cultivé pouvait lire le sumérien, l\'akkadien, et le hittite — comme un humaniste de la Renaissance lisait latin, grec et hébreu.`
    },

    {
      type: 'widget',
      titre: 'Trois corpus majeurs',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Littérature',
            titre: 'Épopée de Gilgamesh',
            description: '**Plus ancienne œuvre littéraire** connue de l\'humanité (versions à partir du IIIᵉ millénaire). Le roi Gilgamesh d\'Ourouk part en quête d\'immortalité après la mort de son ami Enkidu. Contient un récit de **déluge** antérieur de mille ans à celui de la Bible.'
          },
          {
            tag: 'Droit',
            titre: 'Code d\'Hammurabi',
            description: '**1750 av. J.-C.** Stèle de basalte gravée de **282 lois** par le roi de Babylone. Premier code juridique structuré conservé. Peines codifiées selon la classe sociale. *« Œil pour œil »* y figure littéralement.'
          },
          {
            tag: 'Diplomatie',
            titre: 'Lettres d\'El-Amarna',
            description: 'Découvertes en Égypte en 1887 : **400 tablettes** correspondance diplomatique XIVᵉ siècle av. J.-C. entre les pharaons et leurs vassaux/alliés du Proche-Orient. Toutes en **akkadien cunéiforme**, lingua franca de l\'époque.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>déchiffrement</em>',
      contenu_md:
`Vers 75 de notre ère, à Babylone sous domination parthe, un dernier scribe grave une dernière tablette astronomique. Personne, ensuite, ne sait plus lire le cunéiforme. Pendant **dix-huit siècles**, ces signes restent indéchiffrables — leur sens, perdu.

Le déchiffrement est l\'œuvre du XIXᵉ siècle. La clé est en Perse, sur une falaise abrupte près du village de **Behistun**, où le roi **Darius Iᵉʳ** avait fait graver vers 520 av. J.-C. un récit de ses victoires en **trois langues** : vieux perse, élamite, akkadien — toutes trois en cunéiforme.

En **1835**, l\'officier britannique **Henry Rawlinson** entreprend l\'escalade de cette falaise pour copier l\'inscription. Il y travaille pendant des années, suspendu dans le vide. À partir des **noms royaux** identifiables dans la version perse (qui était la plus simple, avec moins de signes), il reconstruit petit à petit l\'alphabet cunéiforme perse, puis sert de pont vers les autres écritures.

Behistun joue pour le cunéiforme le rôle qu\'avait joué la **pierre de Rosette** pour les hiéroglyphes : un texte trilingue qui sert de pont entre l\'inconnu et le connu. En 1857, le déchiffrement de l\'akkadien est officiellement validé par la Royal Asiatic Society.`
    },

    {
      type: 'encadre',
      label: 'Le travail continue',
      contenu_md: 'On a déjà retrouvé plus de **500 000 tablettes** cunéiformes dans les fouilles du Proche-Orient. Une grande partie n\'a **jamais été lue** — les spécialistes du domaine sont peu nombreux, et beaucoup de tablettes attendent dans les réserves des musées. Les progrès récents en imagerie 3D et en intelligence artificielle (modèles entraînés à reconnaître les signes) accélèrent considérablement le travail. Régulièrement, une tablette enfin déchiffrée révèle une recette de cuisine, un poème d\'amour, une plainte d\'écolier — ou un témoignage scientifique vieux de quatre mille ans.'
    },

    {
      type: 'texte',
      titre: 'Pourquoi cela <em>compte</em>',
      contenu_md:
`L\'écriture cunéiforme n\'est pas qu\'une curiosité d\'antiquaires. C\'est elle qui a permis à des sociétés de **se transmettre à elles-mêmes** au-delà de la durée d\'une vie humaine. Sans elle, pas de **droit codifié**, pas de **transmission scientifique** stable, pas d\'**administration** complexe possible.

Les Babyloniens ont accumulé sur tablettes pendant des siècles des **observations astronomiques** d\'une précision telle qu\'elles ont nourri toute l\'astronomie grecque, puis arabe, puis européenne. Les bases mathématiques (système sexagésimal, division du cercle en 360° et de l\'heure en 60 minutes — héritage babylonien direct) viennent de là. Le concept même d\'**archive** est mésopotamien.

Quand Mehmet II prend Constantinople en 1453 (revoir [[empire-byzantin]]), c\'est aussi l\'aboutissement d\'une chaîne de transmission qui passe par les bibliothèques arabes, l\'Antiquité grecque, et — au commencement — quelques scribes sumériens qui imprimaient des coins dans l\'argile pour compter des sacs d\'orge.`
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'L\'écriture cunéiforme a été inventée par des poètes pour fixer la beauté du monde.',
      reponse: false,
      explication: 'Faux. Contrairement au mythe romantique, les premières tablettes sont parfaitement prosaïques : des bordereaux comptables. Les temples sumériens géraient stocks de céréales, troupeaux, rations — pour cela, il fallait noter durablement des transactions. La littérature viendra plus tard, vers 2400 av. J.-C.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces étapes de l\'écriture cunéiforme dans l\'ordre chronologique :',
      items: [
        'Premières tablettes pictographiques à Ourouk',
        'Phonétisation : les signes représentent des sons',
        'Code d\'Hammurabi gravé sur stèle',
        'Dernière tablette cunéiforme connue, à Babylone'
      ],
      explication: 'Plus de trois mille ans d\'évolution : naissance comptable à Ourouk, phonétisation qui permet d\'écrire n\'importe quelle parole, codification du droit babylonien, puis extinction silencieuse vers 75 ap. J.-C. — il faudra 18 siècles pour redéchiffrer le système.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète cette phrase sur l\'origine du nom :',
      texte: 'Le mot "cunéiforme" vient du latin {cuneus} qui signifie {coin}, car les signes sont formés en pressant un {calame} de roseau biseauté dans l\'argile fraîche.',
      explication: 'Cette technique produit ces petites empreintes triangulaires en forme de clous, caractéristiques. La forme des signes a été disciplinée par le support matériel : difficile de tracer des courbes au calame dans l\'argile.'
    },
    {
      q: 'Vers quelle date apparaît l\'écriture cunéiforme ?',
      options: ['~10 000 av. J.-C.', '~3300 av. J.-C.', '~1000 av. J.-C.', '~500 av. J.-C.'],
      correcte: 1,
      explication: 'Vers 3300 av. J.-C., dans le sud de la Mésopotamie (cité d\'Ourouk principalement). C\'est l\'une des plus anciennes écritures connues de l\'humanité, contemporaine ou légèrement antérieure aux hiéroglyphes égyptiens.'
    },
    {
      q: 'Pourquoi appelle-t-on cette écriture "cunéiforme" ?',
      options: [
        'Parce qu\'elle vient du Proche-Orient',
        'Parce que ses signes sont composés de petits traits en forme de coin (cuneus en latin), imprimés dans l\'argile',
        'Parce qu\'elle s\'écrit en colonnes',
        'Parce qu\'elle décrit les biens des temples'
      ],
      correcte: 1,
      explication: 'Le mot latin "cuneus" signifie "coin". Les signes étaient formés en pressant un calame de roseau biseauté dans l\'argile fraîche, ce qui produisait ces petites marques triangulaires caractéristiques.'
    },
    {
      q: 'Quel était l\'usage initial principal de l\'écriture cunéiforme ?',
      options: [
        'Écrire des poèmes',
        'Communiquer entre rois',
        'La comptabilité administrative des temples (stocks de céréales, troupeaux, rations)',
        'Préserver les rites religieux'
      ],
      correcte: 2,
      explication: 'Les premières tablettes sont des bordereaux comptables très prosaïques. C\'est pour gérer la complexité économique des grands temples sumériens qu\'on a inventé un moyen de noter durablement des transactions.'
    },
    {
      q: 'Combien de langues différentes ont-elles été écrites en cunéiforme ?',
      options: ['Une seule, le sumérien', '3 ou 4', 'Au moins 15, sans parenté entre elles', 'Toutes les langues anciennes du monde'],
      correcte: 2,
      explication: 'Le cunéiforme est un système graphique, pas une langue. Il a été adapté à au moins 15 langues très différentes : sumérien, akkadien, babylonien, assyrien, hittite, élamite, ougaritique, vieux perse... C\'est l\'une des écritures les plus polyvalentes jamais utilisées.'
    },
    {
      q: 'Qu\'est-ce que l\'Épopée de Gilgamesh ?',
      options: [
        'Un code juridique babylonien',
        'La plus ancienne œuvre littéraire connue de l\'humanité, racontant la quête d\'immortalité d\'un roi sumérien après la mort de son ami',
        'Un traité de mathématiques',
        'Le récit de la fondation de Babylone'
      ],
      correcte: 1,
      explication: 'Composé en plusieurs versions au cours du IIᵉ millénaire av. J.-C., ce poème suit le roi Gilgamesh d\'Ourouk dans sa quête d\'immortalité après la mort de son ami Enkidu. Il contient notamment un récit de déluge nettement antérieur à celui de la Bible.'
    },
    {
      q: 'Comment l\'écriture cunéiforme a-t-elle été déchiffrée au XIXᵉ siècle ?',
      options: [
        'Grâce à un dictionnaire babylonien retrouvé',
        'Grâce à l\'inscription trilingue de Behistun (vieux perse, élamite, akkadien) gravée sur une falaise par Darius Iᵉʳ',
        'Par calcul automatique',
        'Par interprétation libre des prêtres locaux'
      ],
      correcte: 1,
      explication: 'L\'inscription de Behistun, copiée par Henry Rawlinson au prix d\'années d\'escalade dangereuse, a joué pour le cunéiforme le rôle qu\'a joué la pierre de Rosette pour les hiéroglyphes : un texte trilingue offrant une clé de déchiffrement.'
    },
    {
      q: 'Quelle est l\'une des grandes contributions des Mésopotamiens à notre vie quotidienne moderne ?',
      options: [
        'L\'invention de la roue',
        'Le système sexagésimal (60), qui régit encore notre division des minutes (60), heures (24), et du cercle (360°)',
        'Le calendrier solaire',
        'L\'agriculture intensive'
      ],
      correcte: 1,
      explication: 'Les mathématiques babyloniennes utilisaient une base 60. C\'est de là que vient notre division du cercle en 360 degrés, de l\'heure en 60 minutes, de la minute en 60 secondes — héritage indirect mais quotidien de leur culture savante, transmise par les Grecs.'
    }
  ]

});
