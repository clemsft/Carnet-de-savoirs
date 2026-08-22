/* ===================================================================
   SUJET — Baudouin IV
   ===================================================================
   Le roi lépreux de Jérusalem (1161-1185), figure tragique et
   politique majeure du royaume franc de Terre sainte.
   Domaine : Histoire
   =================================================================== */

window.CarnetDeSavoirs.register({
  meta: {
    id: 'baudouin-iv',
    titre: '<em>Baudouin IV</em>, le roi lépreux',
    domaines: ['Histoire'],
    tags: ['croisades', 'jérusalem', 'moyen-age', 'saladin', 'montgisard', 'lèpre'],
    difficulte: 2,
    duree_estimee_min: 25,
    prerequis: [],
    lie_a: ['les-templiers'],
    date_creation: '2026-05-26',
    date_maj: '2026-08-18'
  },

  resume: `Roi de Jérusalem à treize ans, mort à vingt-quatre, atteint depuis l'enfance d'une lèpre qui le mutile progressivement — Baudouin IV mène pourtant onze ans durant un royaume franc pris en tenaille par la montée en puissance de Saladin, et remporte à Montgisard l'une des victoires les plus improbables du Moyen Âge.`,

  points_cles: [
    `Fils d'Amaury Iᵉʳ et d'Agnès de Courtenay, Baudouin naît en **1161** dans un royaume de Jérusalem déjà fragilisé par les avancées des musulmans.`,
    `Son maître d'armes, l'historien **Guillaume de Tyr**, décèle la [lèpre]{accent} chez l'enfant : il ne ressent aucune douleur quand ses camarades lui pincent le bras.`,
    `Roi à **13 ans** en 1174, il gouverne d'abord sous la régence de Raymond III de Tripoli.`,
    `En novembre **1177**, à 16 ans, il écrase à **Montgisard** une armée de Saladin cinq fois supérieure — la plus grande victoire militaire de son règne.`,
    `Sa maladie s'aggrave inexorablement : bras droit paralysé vers 1179, cécité vers 1183, il gouverne finalement porté en litière.`,
    `Il meurt en **1185** à 24 ans. Deux ans plus tard, à **Hattin**, le royaume qu'il avait tenu à bout de bras s'effondre en une seule bataille.`
  ],

  carte_mentale: {
    central: 'baudouin-iv',
    noeuds: [
      { id: 'baudouin-iv', label: 'Baudouin IV', description: `Roi lépreux de Jérusalem (1174-1185), dernier grand souverain latin de Terre sainte.` },

      { id: 'enfance', label: 'Enfance et maladie', description: `Détection précoce de la lèpre par Guillaume de Tyr.` },
      { id: 'regne', label: 'Règne', description: `Un enfant-roi devenu chef de guerre.` },
      { id: 'montgisard', label: 'Montgisard', description: `Victoire éclatante contre Saladin en 1177.` },
      { id: 'declin', label: 'Aggravation et fin', description: `La lèpre le mutile, la politique intérieure se déchire.` },
      { id: 'apres', label: `Après Baudouin`, description: `Le royaume s'effondre à Hattin en 1187.` },

      { id: 'amaury', label: 'Amaury Iᵉʳ', description: `Père de Baudouin, roi conquérant qui tente sans succès de s'emparer de l'Égypte fatimide.`, parent: 'enfance' },
      { id: 'agnes', label: 'Agnès de Courtenay', description: `Mère, écartée puis rappelée à la cour, figure influente et controversée.`, parent: 'enfance' },
      { id: 'tyr', label: 'Guillaume de Tyr', description: `Précepteur et chroniqueur — sans lui, nous ne saurions presque rien de Baudouin.`, parent: 'enfance' },

      { id: 'raymond', label: 'Raymond III', description: `Régent de 1174 à 1176. Homme prudent, partisan de la coexistence avec les musulmans.`, parent: 'regne' },
      { id: 'renaud', label: 'Renaud de Châtillon', description: `Rival de Raymond, chef du parti belliciste. Ses provocations enveniment les rapports avec Saladin.`, parent: 'regne' },

      { id: 'saladin', label: 'Saladin', description: `Sultan ayyoubide qui unifie Égypte et Syrie. Adversaire toute la vie de Baudouin.`, parent: 'montgisard' },
      { id: 'ramla', label: 'Bataille de Ramla', description: `Autre nom de Montgisard (25 novembre 1177). 500 chevaliers francs contre 26 000 musulmans.`, parent: 'montgisard' },

      { id: 'sibylle', label: 'Sibylle', description: `Sœur aînée, mariée à Guy de Lusignan — un homme faible et impopulaire.`, parent: 'declin' },
      { id: 'baudouin-v', label: 'Baudouin V', description: `Neveu de Baudouin IV, couronné co-roi à 5 ans en 1183, meurt en 1186.`, parent: 'declin' },

      { id: 'hattin', label: 'Hattin', description: `4 juillet 1187 : l'armée franque est anéantie par Saladin, deux ans après la mort de Baudouin.`, parent: 'apres' }
    ],
    liens: []
  },

  cours: [
    {
      type: 'texte',
      titre: `Un royaume déjà fragile`,
      contenu_md:
`Baudouin IV naît en **1161** dans un royaume de Jérusalem qui a soixante-deux ans — l'âge d'un homme mûr, à l'échelle des principautés médiévales. Fondé en 1099 par la première croisade, l'État franc s'étend en 1161 de la mer Morte à Antioche, mais il est structurellement fragile : trop petit, trop dépendant du soutien européen, entouré de puissances musulmanes qui, longtemps divisées, commencent à s'unifier.

Son père, **Amaury Iᵉʳ**, est un roi énergique qui rêve de conquérir l'Égypte fatimide pour sécuriser le flanc sud du royaume. Il échoue — précisément parce qu'un lieutenant kurde envoyé par le sultan syrien Nur ad-Din, un certain **Saladin**, réussit à prendre le contrôle de l'Égypte avant lui. En 1174, à la mort quasi simultanée de Nur ad-Din et d'Amaury, Saladin devient maître de l'Égypte et se pose en unificateur d'un Islam sunnite décidé à reprendre Jérusalem.

C'est à ce moment précis, à ce carrefour historique, que monte sur le trône un enfant de treize ans dont on sait déjà, secrètement, qu'il est [condamné]{accent}.`
    },

    {
      type: 'texte',
      titre: `<em>Le pincement</em> qui révèle tout`,
      contenu_md:
`Nous devons ce que nous savons de Baudouin à l'un des grands historiens du Moyen Âge, **Guillaume de Tyr**. Précepteur du jeune prince, il consigne dans sa chronique la scène fondatrice — probablement en 1170 ou 1171, alors que Baudouin a 9 ou 10 ans :

*« Alors qu'il jouait avec des enfants de son âge, à qui pincerait le plus fort le bras de l'autre, comme il arrive souvent aux enfants, je remarquai que, tandis que les autres poussaient de grands cris pour se venger de la douleur, lui, seul, endurait comme s'il ne sentait rien, sans manifester par aucun signe qu'il souffrît. »*

L'absence de sensibilité à la douleur est le signe précoce de la **lèpre**, ce que Guillaume identifie immédiatement — la maladie est bien connue en Orient. Il tente d'abord des remèdes. Puis se résout à en avertir Amaury Iᵉʳ. Le père garde le secret, poursuit l'éducation royale de son fils, et meurt trois ans plus tard sans jamais avoir désigné un autre héritier.`
    },

    {
      type: 'encadre',
      label: 'La lèpre au Moyen Âge',
      contenu_md: `La [lèpre]{accent} — infection à *Mycobacterium leprae* — est perçue comme une punition divine autant que comme une contagion. Les lépreux sont ordinairement exclus, cloîtrés dans des léproseries, symboliquement enterrés vivants. Que le roi d'un royaume chrétien fondé sur la Terre sainte en soit atteint est un scandale théologique — et une [énigme politique]{accent} sans précédent.`
    },

    {
      type: 'texte',
      titre: `Le sacre d'un enfant`,
      contenu_md:
`En juillet 1174, Amaury meurt. Baudouin est sacré à treize ans dans l'église du Saint-Sépulcre. Le royaume est officiellement gouverné par un régent : **Raymond III de Tripoli**, cousin éloigné, homme d'expérience, ami arabe autant qu'il pouvait l'être — de ces barons francs qu'on appelait les *poulains*, nés en Orient, connaissant la langue arabe, favorables aux traités et à la coexistence.

Face à Raymond, un parti bien différent : celui des seigneurs venus récemment d'Europe, dont le plus turbulent est **Renaud de Châtillon**, prince d'Outre-Jourdain. Renaud rêve d'expéditions offensives, méprise les trêves, attaque les caravanes musulmanes en toute occasion — plus tard, il déclenchera personnellement la guerre finale en pillant une caravane où voyageait la sœur de Saladin.

Entre ces deux camps, Baudouin grandit. Vers 15 ans, il prend en main les affaires. À 16 ans, on le voit livrer bataille lui-même.`
    },

    {
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: 'Le couronnement du roi lépreux',
      params: {
        image: 'images/baudouin-iv--couronnement.jpg',
        legende: 'Le couronnement de Baudouin IV, miniature d\'un manuscrit de l\'Histoire d\'Outremer de Guillaume de Tyr (XIIIᵉ siècle). Guillaume, son précepteur, est aussi notre source principale. (Domaine public)',
        hotspots: []
      }
    },

    {
      type: 'widget',
      titre: `Chronologie du règne`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1161', titre: 'Naissance', description: `Fils d'Amaury Iᵉʳ et d'Agnès de Courtenay.` },
          { date: 'v. 1170', titre: 'Diagnostic de la lèpre', description: `Guillaume de Tyr identifie la maladie lors d'un jeu d'enfants.` },
          { date: '1174', titre: 'Sacre', description: `Baudouin monte sur le trône à 13 ans, sous la régence de Raymond III.` },
          { date: '1176', titre: 'Prise du pouvoir personnel', description: `À 15 ans, il commence à gouverner directement.` },
          { date: '25 nov. 1177', titre: 'Bataille de Montgisard', description: `À 16 ans, il écrase Saladin près de Ramla.` },
          { date: '1183', titre: 'Cécité, sacre du neveu', description: `Aveugle, il fait couronner son neveu Baudouin V co-roi à 5 ans.` },
          { date: '16 mars 1185', titre: 'Mort', description: `À 24 ans, à Jérusalem.` },
          { date: '4 juil. 1187', titre: 'Hattin', description: `Le royaume qu'il avait sauvé s'effondre en une seule bataille sous le règne de son beau-frère Guy de Lusignan.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `<em>Montgisard</em>, l'improbable victoire`,
      contenu_md:
`Novembre 1177. Saladin, jugeant Baudouin trop faible pour résister, lance depuis l'Égypte une offensive massive vers le nord — environ **26 000 hommes**, dont une cavalerie mamelouke redoutable. Il compte piller le royaume, prendre plusieurs places, terroriser les populations.

Baudouin lève ce qu'il peut : **500 chevaliers**, quelques milliers de fantassins, une poignée de Templiers. Le rapport de forces est d'un contre quinze. Sur le conseil de ses barons, il devrait s'enfermer dans Jérusalem et attendre. Il choisit l'attaque.

Le 25 novembre 1177, à **Montgisard** — près de Ramla, la moderne Ramleh —, il tombe sur l'armée de Saladin dispersée en colonnes de pillage, non préparée à une bataille rangée. La charge des chevaliers francs, menée par le roi malade porté au combat, écrase l'aile centrale musulmane. Saladin ne doit son salut qu'à un dromadaire de fuite. Une immense partie de son armée est massacrée dans la retraite à travers le désert du Sinaï.

Militairement, Montgisard offre au royaume un répit de plusieurs années. Symboliquement, c'est un fait d'armes qui devient légende : le roi lépreux, à 16 ans, l'a fait.`
    },

    {
      type: 'widget',
      titre: `Le rapport de forces à Montgisard`,
      composant: 'SelecteurValeurs',
      params: {
        unite: 'hommes',
        indexInitial: 0,
        options: [
          { label: 'Chevaliers francs', valeur: 500, description: `Cavalerie lourde, épine dorsale de l'armée franque.` },
          { label: 'Fantassins francs', valeur: 4000, description: `Rassemblés en urgence, milices urbaines et sergents.` },
          { label: `Armée de Saladin`, valeur: 26000, description: `Cavalerie mamelouke, mercenaires bédouins, fantassins égyptiens.` }
        ]
      }
    },

    {
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: 'La crise successorale en un coup d\'œil',
      params: {
        image: 'data:image/png;base64,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',
        legende: 'L\'arbre dynastique de Jérusalem entre 1174 et 1187 : tout le drame du royaume tient dans ces flèches.',
        hotspots: []
      }
    },

    {
      type: 'widget',
      composant: 'Prediction',
      titre: 'Avant de lire la suite, engage-toi',
      params: {
        question: 'À quel âge Baudouin IV meurt-il ?',
        min: 15,
        max: 70,
        step: 1,
        reponse: 23,
        unite: 'ans',
        explication: 'Rongé par la lèpre, aveugle et paralysé à la fin, il meurt en mars 1185 à **23 ans** — après avoir tenu son royaume onze ans et battu Saladin en rase campagne.'
      }
    },

    {
      type: 'mini-quiz',
      q: 'Sans remonter dans la page : qui Baudouin IV désigne-t-il pour lui succéder, et pourquoi pas simplement sa sœur Sibylle ?',
      indice: 'Regarde qui il veut ÉVITER de mettre sur le trône.',
      reponse: 'Son **neveu**, le petit Baudouin V — précisément pour court-circuiter le mari de Sibylle, **Guy de Lusignan**, dont il se méfie. Le pari échoue : l\'enfant meurt à 9 ans, Guy devient roi, et Hattin suit un an plus tard.'
    },

    {
      type: 'texte',
      titre: `<em>La lente descente</em> et l'après`,
      contenu_md:
`Après Montgisard, la maladie progresse. Dès 1179, Baudouin perd l'usage de son bras droit — celui qui tenait l'épée. Il continue à commander, à trancher les querelles entre Raymond et Renaud, à livrer bataille en litière. Vers 1183, il devient **aveugle**. Il doit trouver un successeur.

Il fait couronner **Baudouin V**, son neveu de 5 ans, fils de sa sœur Sibylle. Le vrai problème n'est pas l'enfant — c'est l'époux de Sibylle : **Guy de Lusignan**, seigneur poitevin arriviste, opportuniste, militairement médiocre. Baudouin IV le déteste et tente jusqu'au bout de faire annuler le mariage.

Il meurt le **16 mars 1185**, à 24 ans, à Jérusalem. Baudouin V lui succède, mais meurt à son tour un an plus tard, à 9 ans. Sibylle et Guy accèdent au trône. Deux ans après la mort de Baudouin IV, en juillet 1187, Guy de Lusignan mène l'armée franque à la catastrophe de **Hattin** : l'armée est écrasée sous le soleil, la Vraie Croix perdue, et Jérusalem tombe trois mois plus tard.

Le contraste est vertigineux : là où le roi malade avait vaincu l'invincible, le roi valide perd tout en une seule journée. Chez les chroniqueurs contemporains — et chez leurs successeurs jusqu'à aujourd'hui —, Baudouin devient la [figure emblématique]{accent} de la volonté qui compense la faiblesse du corps.`
    }
  ],

  quiz: [
    {
      q: `À quel âge Baudouin IV monte-t-il sur le trône ?`,
      options: [`9 ans`, `13 ans`, `16 ans`, `18 ans`],
      correcte: 1,
      explication: `Il est sacré à 13 ans en 1174 à la mort de son père Amaury Iᵉʳ, sous la régence de Raymond III de Tripoli.`
    },
    {
      q: `Qui détecte la lèpre chez le jeune Baudouin ?`,
      options: [
        `Un médecin arabe`,
        `Sa mère Agnès de Courtenay`,
        `Guillaume de Tyr, son précepteur`,
        `Le patriarche de Jérusalem`
      ],
      correcte: 2,
      explication: `Guillaume de Tyr, son maître et futur chroniqueur, remarque son insensibilité à la douleur lors d'un jeu d'enfants. Il consigne la scène dans son histoire.`
    },
    {
      q: `Quelle bataille Baudouin IV remporte-t-il à 16 ans contre Saladin ?`,
      options: [
        `Hattin`,
        `Ascalon`,
        `Montgisard`,
        `Damiette`
      ],
      correcte: 2,
      explication: `Le 25 novembre 1177, à Montgisard (près de Ramla), 500 chevaliers francs écrasent une armée de Saladin cinq fois supérieure. Victoire spectaculaire du roi lépreux.`
    },
    {
      q: `Qui est Saladin ?`,
      options: [
        `Un empereur byzantin`,
        `Le sultan ayyoubide qui unifie l'Égypte et la Syrie`,
        `Le calife abbasside de Bagdad`,
        `Un croisé rallié à l'islam`
      ],
      correcte: 1,
      explication: `Saladin (Salah ad-Din), officier kurde d'origine, prend le pouvoir en Égypte, unifie la Syrie ayyoubide et devient l'adversaire principal des croisés jusqu'à sa prise de Jérusalem en 1187.`
    },
    {
      q: `À quel âge Baudouin IV meurt-il ?`,
      options: [`19 ans`, `24 ans`, `30 ans`, `35 ans`],
      correcte: 1,
      explication: `Il meurt en mars 1185, à 24 ans, épuisé par la lèpre qui avait progressivement paralysé son corps et l'avait rendu aveugle.`
    },
    {
      q: `Que se passe-t-il en 1187, deux ans après la mort de Baudouin IV ?`,
      options: [
        `Le royaume de Jérusalem se convertit à l'islam`,
        `Le royaume franc est écrasé à Hattin, Jérusalem tombe`,
        `Frédéric Barberousse conquiert la Syrie`,
        `Un nouveau roi lépreux monte sur le trône`
      ],
      correcte: 1,
      explication: `À Hattin, le 4 juillet 1187, Guy de Lusignan mène l'armée franque à une défaite totale. Jérusalem tombe trois mois plus tard aux mains de Saladin.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Royaume de Jérusalem',
      definition: `État chrétien fondé en 1099 par la première croisade. S'étend au maximum de la mer Morte à Antioche. Perd Jérusalem en 1187 après Hattin, subsiste sur la côte jusqu'à la chute d'Acre en 1291.`
    },
    {
      terme: 'Lèpre',
      definition: `Maladie chronique due à *Mycobacterium leprae*, provoquant des lésions cutanées, une insensibilité à la douleur, puis des mutilations. Perçue au Moyen Âge comme une punition divine, elle vaut à ses porteurs une exclusion sociale rigoureuse.`
    },
    {
      terme: 'Guillaume de Tyr',
      definition: `Historien, archevêque de Tyr et précepteur de Baudouin IV. Sa *Chronique* est la source majeure pour l'histoire du royaume franc de Jérusalem au XIIᵉ siècle. Écrit en latin, traduit et continué en français sous le nom de *Roman d'Éracle*.`
    },
    {
      terme: 'Montgisard',
      definition: `Bataille du 25 novembre 1177 où Baudouin IV, avec environ 4 500 hommes, écrase une armée de Saladin d'environ 26 000. Victoire tactique majeure qui offre au royaume franc plusieurs années de répit.`
    },
    {
      terme: 'Saladin',
      definition: `Salah ad-Din Yusuf (v. 1138-1193), sultan ayyoubide d'origine kurde. Unifie l'Égypte, la Syrie et une partie de la Mésopotamie. Reprend Jérusalem aux Francs en 1187 après la victoire de Hattin.`
    },
    {
      terme: 'Poulains',
      definition: `Nom donné aux barons francs nés en Terre sainte, opposés aux nouveaux arrivants d'Europe. Généralement partisans de la coexistence pragmatique avec les puissances musulmanes voisines, contre les tendances jusqu'au-boutistes des croisés récents.`
    },
    {
      terme: 'Hattin',
      definition: `Bataille du 4 juillet 1187 opposant l'armée franque de Guy de Lusignan à celle de Saladin en Galilée. Défaite totale des Francs : capture du roi, perte de la Vraie Croix, chute imminente de Jérusalem. Fin effective du premier royaume latin.`
    }
  ]
});
