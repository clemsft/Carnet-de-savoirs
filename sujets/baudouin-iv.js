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
    date_maj: '2026-05-26'
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
