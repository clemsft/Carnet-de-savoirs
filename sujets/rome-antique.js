/* ===================================================================
   SUJET — La Rome antique
   ===================================================================
   Douze siècles qui ont façonné l'Occident.
   Domaine : Histoire
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'rome-antique',
    titre: 'La <em>Rome</em> antique',
    domaines: ['Histoire'],
    tags: ['rome', 'antiquité', 'république', 'empire', 'césar', 'droit'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['empire-byzantin', 'paris-geographie', 'pyramides-egypte', 'napoleon'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Douze siècles d'histoire continue, depuis une petite bourgade latine au bord du Tibre jusqu'à un empire qui s'étend de l'Écosse au Sahara. Comprendre comment Rome a inventé un modèle politique, juridique et urbain qui structure encore l'Occident moderne.`,

  points_cles: [
    `La tradition fixe la **fondation de Rome au 21 avril 753 av. J.-C.** par Romulus, sur les collines bordant le Tibre. L\'archéologie confirme un peuplement dès le Xᵉ siècle av. J.-C.`,
    `En **509 av. J.-C.**, les Romains chassent le roi étrusque **Tarquin le Superbe** et fondent la **République** : un régime mixte combinant Sénat, magistrats et assemblées populaires.`,
    `Rome conquiert l\'Italie en trois siècles, puis affronte **Carthage** lors des trois **guerres puniques** (264-146 av. J.-C.) — victoire qui ouvre la domination méditerranéenne.`,
    `En **27 av. J.-C.**, **Auguste** instaure l\'**Empire** sans abolir formellement la République. La *Pax Romana* assure deux siècles de prospérité relative sur trois continents.`,
    `Au IIᵉ siècle, sous **Trajan**, l\'Empire atteint son extension maximale : **5 millions de km²** et près de **60 millions d\'habitants**, de la Bretagne à la Mésopotamie.`,
    `En **476 ap. J.-C.**, le dernier empereur d\'Occident, Romulus Augustule, est déposé. Mais l\'Empire continue en Orient pendant mille ans — c\'est l\'**Empire byzantin** ([[empire-byzantin]]).`,
    `L\'héritage est immense : **droit civil** (toujours fondement des codes européens), **latin** (langue mère des langues romanes), urbanisme (aqueducs, routes, plan en damier), institutions politiques (sénat, république, citoyenneté).`
  ],

  carte_mentale: {
    central: 'rome',
    noeuds: [
      { id: 'rome', label: 'Rome antique', description: '753 av. J.-C. — 476 ap. J.-C. en Occident. Douze siècles de continuité institutionnelle.' },
      { id: 'fondation', label: 'Fondation légendaire', description: 'Romulus et Rémus, la louve, le rapt des Sabines. Mythologie nationale puissante.' },
      { id: 'royaute', label: 'Royauté', description: 'Sept rois traditionnels, de **753 à 509 av. J.-C.**. Influence étrusque profonde sur la cité.' },
      { id: 'republique', label: 'République', description: '509-27 av. J.-C. Régime mixte : Sénat, consuls, tribuns, assemblées populaires.' },
      { id: 'expansion', label: 'Expansion', description: 'Conquête de l\'Italie, victoire sur Carthage, soumission du bassin méditerranéen.' },
      { id: 'empire', label: 'Empire', description: '27 av. J.-C. — 476 ap. J.-C. en Occident. *Imperium romanum* sur trois continents.' },
      { id: 'civilisation', label: 'Civilisation matérielle', description: 'Aqueducs, routes, thermes, amphithéâtres, urbanisme. Un mode de vie standardisé sur tout l\'empire.' },
      { id: 'declin', label: 'Déclin et chute', description: 'Crises du IIIᵉ siècle, invasions barbares, division de 395, chute de l\'Occident en 476.' },
      { id: 'heritage', label: 'Héritage', description: 'Droit, langue, religion (christianisme), institutions politiques, urbanisme.' },

      // Sous-niveau république
      { id: 'senat', label: 'Sénat', description: '**Senatus Populusque Romanus** : SPQR. Assemblée des anciens magistrats. Cœur du pouvoir aristocratique pendant cinq siècles.', parent: 'republique' },
      { id: 'consuls', label: 'Consuls', description: 'Deux magistrats suprêmes, élus pour un an, disposant chacun d\'un droit de veto sur l\'autre. Conçu pour **empêcher la tyrannie**.', parent: 'republique' },

      // Sous-niveau expansion
      { id: 'punique', label: 'Guerres puniques', description: 'Trois conflits contre **Carthage** (264-241, 218-201, 149-146 av. J.-C.). Hannibal et ses éléphants franchissent les Alpes en 218.', parent: 'expansion' },
      { id: 'cesar', label: 'Jules César', description: 'Conquête des Gaules **58-51 av. J.-C.**. Franchit le **Rubicon** en 49 av. J.-C. Assassiné aux Ides de mars 44 av. J.-C.', parent: 'expansion' },

      // Sous-niveau empire
      { id: 'auguste', label: 'Auguste', description: 'Petit-neveu de César. Premier empereur (**27 av. J.-C. — 14 ap. J.-C.**). Instaure le *Principat* — empire déguisé en république.', parent: 'empire' },
      { id: 'pax', label: 'Pax Romana', description: 'Deux siècles de paix relative (**27 av. J.-C. — 180 ap. J.-C.**). Prospérité, urbanisation, romanisation des provinces.', parent: 'empire' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Une <em>bourgade</em> qui devient empire',
      contenu_md:
`Tout commence sur sept collines, au bord d\'un fleuve, à un endroit que rien ne désigne particulièrement. La tradition romaine fixe la fondation au **21 avril 753 avant Jésus-Christ** — date à laquelle, selon la légende, **Romulus** trace au soc de la charrue le sillon sacré qui délimite la cité. Son frère **Rémus** franchit le sillon par défi : Romulus le tue. La ville naît dans le sang fraternel.

L\'archéologie confirme un peuplement nettement antérieur, dès le **Xᵉ siècle av. J.-C.** — des huttes de bergers latins sur le Palatin. Mais la mythologie compte autant que les faits : pendant douze siècles, les Romains se penseront comme [descendants de Romulus]{accent}, héritiers d\'une mission divine.

De cette obscure bourgade, ils bâtiront en mille ans la plus grande puissance que l\'Occident ait jamais connue — un empire de cinq millions de km², soixante millions de sujets, qui s\'étend de l\'Écosse au Sahara, du Portugal à l\'Euphrate.`
    },

    {
      type: 'encadre',
      label: 'Trois régimes successifs',
      contenu_md: `L\'histoire de Rome se découpe naturellement en **trois grandes périodes** : la [Royauté]{accent} (753-509 av. J.-C., sept rois traditionnels, fortement influencée par les Étrusques) ; la [République]{accent} (509-27 av. J.-C., régime aristocratique mixte, qui voit l\'expansion méditerranéenne) ; l\'[Empire]{accent} (27 av. J.-C. — 476 ap. J.-C. en Occident, monarchie déguisée puis affichée, suivie d\'un long déclin). Cette périodisation classique remonte aux historiens romains eux-mêmes.`
    },

    {
      type: 'widget',
      titre: 'Les douze siècles, en jalons',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '753 av. J.-C.', titre: 'Fondation légendaire', description: 'Romulus trace le sillon sacré du Palatin. Date traditionnelle, devenue identité nationale.' },
          { date: '509 av. J.-C.', titre: 'Naissance de la République', description: 'Les Romains chassent **Tarquin le Superbe**, dernier roi étrusque. Création d\'un régime à magistrats annuels. Le mot **rex** (roi) devient une insulte politique pour cinq siècles.' },
          { date: '264-146 av. J.-C.', titre: 'Guerres puniques', description: 'Trois conflits contre **Carthage**. Hannibal franchit les Alpes en 218 av. J.-C. Carthage est détruite en 146 av. J.-C. Rome devient maîtresse de la Méditerranée occidentale.' },
          { date: '58-51 av. J.-C.', titre: 'Conquête de la Gaule', description: '**Jules César** soumet les peuples gaulois. Lutèce, future Paris (voir [[paris-geographie]]), entre dans l\'orbite romaine. Reddition de Vercingétorix à Alésia en 52 av. J.-C.' },
          { date: '44 av. J.-C.', titre: 'Assassinat de César', description: 'Aux **Ides de mars**, César — dictateur à vie — est poignardé en plein Sénat par une conjuration d\'aristocrates républicains. Sa mort déclenche treize ans de guerres civiles.' },
          { date: '27 av. J.-C.', titre: 'Auguste, premier empereur', description: 'Octave, fils adoptif de César, reçoit le titre d\'**Augustus**. Il conserve les apparences de la République mais concentre tous les pouvoirs. Début de la [Pax Romana]{accent}.' },
          { date: '117 ap. J.-C.', titre: 'Extension maximale', description: 'Sous **Trajan**, l\'empire atteint **5 millions de km²**, de l\'Écosse à la Mésopotamie. Près de **60 millions** d\'habitants. Aucun État antérieur n\'a atteint cette échelle.' },
          { date: '212 ap. J.-C.', titre: 'Édit de Caracalla', description: 'L\'empereur **Caracalla** accorde la **citoyenneté romaine à tous les hommes libres** de l\'empire. Aboutissement d\'un long processus de romanisation universelle.' },
          { date: '313 ap. J.-C.', titre: 'Édit de Milan', description: '**Constantin** légalise le christianisme. Religion d\'une minorité persécutée, elle deviendra en moins d\'un siècle la religion d\'État. En 330, Constantin fonde **Constantinople**.' },
          { date: '395 ap. J.-C.', titre: 'Division de l\'empire', description: 'À la mort de **Théodose**, l\'empire est partagé entre ses deux fils. La séparation Occident-Orient devient irréversible.' },
          { date: '476 ap. J.-C.', titre: 'Chute de l\'Occident', description: 'Le chef barbare **Odoacre** dépose **Romulus Augustule**, dernier empereur romain d\'Occident. Mais l\'empire continue en Orient : c\'est [[empire-byzantin]], qui durera encore mille ans.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>République</em>, machine politique',
      contenu_md:
`Quand les Romains chassent leur dernier roi en **509 av. J.-C.**, ils inventent un régime sans précédent dans l\'Antiquité : ni démocratie pure à l\'athénienne, ni monarchie, ni oligarchie tribale. La **République romaine** combine trois éléments — un Sénat aristocratique, des magistrats élus, des assemblées populaires souveraines — selon un équilibre savamment dosé que l\'historien grec **Polybe**, au IIᵉ siècle av. J.-C., qualifiera de *« constitution mixte »*.

Au sommet, les **deux consuls**, élus pour un an, exercent ensemble l\'*imperium* — pouvoir militaire et civil suprême. Chacun dispose d\'un **droit de veto** sur l\'autre. L\'idée est radicale : pour empêcher qu\'un seul homme s\'empare du pouvoir, on en met deux à la tête, qui peuvent se neutraliser mutuellement.

En contrepoids, le **Sénat** — quelques centaines d\'anciens magistrats, à vie — détient l\'autorité morale et financière. Et les **assemblées du peuple** votent les lois, élisent les magistrats, déclarent la guerre. Les **tribuns de la plèbe**, créés en 494 av. J.-C., protègent les plébéiens contre les abus des patriciens, par un droit de veto absolu sur toute décision publique.

Cette **machine institutionnelle** fonctionnera pendant cinq siècles. Elle a inspiré directement les **Pères fondateurs américains** au XVIIIᵉ siècle, et indirectement toutes les républiques modernes — y compris la [[revolution-francaise]], qui mobilise abondamment le vocabulaire et l\'imaginaire romain (Sénat, tribuns, consuls réapparaissent sous Napoléon).`
    },

    {
      type: 'widget',
      titre: 'Les institutions de la République romaine',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Pouvoir exécutif',
            titre: 'Les consuls',
            description: 'Deux magistrats suprêmes, élus pour **un an seulement**. Disposent de l\'*imperium* — commandement militaire et autorité civile. Chacun a un **droit de veto** sur l\'autre. Conçu pour rendre toute dictature techniquement impossible.'
          },
          {
            tag: 'Aristocratie',
            titre: 'Le Sénat',
            description: 'Environ **300 puis 600 sénateurs**, anciens magistrats nommés à vie. Détient l\'autorité morale (*auctoritas*), les finances publiques, la politique étrangère. Cœur du pouvoir réel pendant cinq siècles. Sa devise : **SPQR** (*Senatus Populusque Romanus*).'
          },
          {
            tag: 'Peuple',
            titre: 'Les comices',
            description: 'Assemblées populaires qui votent les **lois**, élisent les magistrats, déclarent la guerre. Plusieurs formats coexistent (centuriates, tributes...). Vote pondéré selon la fortune : la démocratie romaine reste profondément **censitaire**.'
          },
          {
            tag: 'Plèbe',
            titre: 'Les tribuns',
            description: 'Créés en **494 av. J.-C.** après la première sécession de la plèbe. Dix tribuns, élus chaque année, disposent d\'un **veto absolu** sur toute décision publique. Personne sacrée : les agresser, c\'est risquer la mort. Garde-fou plébéien contre les patriciens.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'L\'<em>expansion</em> méditerranéenne',
      contenu_md:
`Au IIIᵉ siècle av. J.-C., Rome contrôle toute l\'Italie péninsulaire. Mais une autre puissance domine la Méditerranée occidentale : **Carthage**, cité phénicienne d\'Afrique du Nord, maîtresse de la Sicile, de la Sardaigne, de l\'Espagne. Le choc est inévitable.

Les **trois guerres puniques** (264-241, 218-201, 149-146 av. J.-C.) sont les plus longues et les plus traumatisantes que Rome ait connues. Lors de la deuxième, **Hannibal** franchit les Alpes en **218 av. J.-C.** avec ses éléphants, écrase les armées romaines à **Cannes** en 216 av. J.-C. (40 000 morts en une journée — record antique), et campe seize ans en Italie. Rome tient bon, change de stratégie, finit par porter la guerre en Afrique : **Scipion l\'Africain** bat Hannibal à **Zama** en 202 av. J.-C. Carthage sera rasée jusqu\'au sol en **146 av. J.-C.**, à l\'issue de la troisième guerre — *« Carthago delenda est »*, répétait Caton.

Désormais sans rival, Rome déferle. La Grèce est annexée la même année 146 av. J.-C. (sac de Corinthe). L\'Espagne, la Gaule transalpine, l\'Asie Mineure tombent au IIᵉ siècle av. J.-C. **Jules César** ajoute toute la **Gaule** entre 58 et 51 av. J.-C. — campagne qui le rend immensément riche, immensément populaire, et qui le mènera à franchir le Rubicon, déclencher la guerre civile, et finalement à sa mort tragique aux Ides de mars 44 av. J.-C.`
    },

    {
      type: 'encadre',
      label: 'Le Rubicon',
      contenu_md: `Le **10 janvier 49 av. J.-C.**, **César** franchit le Rubicon — petit fleuve séparant la Gaule cisalpine de l\'Italie propre. La loi interdit à tout général de pénétrer en Italie en armes : c\'est une déclaration de guerre civile. César aurait prononcé la formule restée célèbre : *« Alea jacta est »* — le sort en est jeté. En cinq ans, il devient dictateur à vie. Cinq ans plus tard, il est assassiné par une **conjuration de républicains** menée par Brutus. *« Tu quoque, fili »* — toi aussi, mon fils. Treize ans de guerres civiles supplémentaires suivront, jusqu\'à ce que son petit-neveu Octave, devenu **Auguste**, instaure l\'Empire en 27 av. J.-C.`
    },

    {
      type: 'texte',
      titre: 'L\'<em>Empire</em> et la civilisation matérielle',
      contenu_md:
`Auguste est un génie politique. Il a tiré les leçons du destin de César : ne jamais s\'appeler roi, ne jamais abolir formellement les institutions républicaines. Il conserve le Sénat, les consuls, les tribuns — vidés de leur substance. Lui-même s\'intitule modestement *princeps* — « premier des citoyens ». Mais il cumule en réalité tous les pouvoirs militaires, religieux, financiers. C\'est le **Principat** : monarchie absolue déguisée en république.

Le système fonctionne pendant deux siècles. La **Pax Romana** (27 av. J.-C. — 180 ap. J.-C.) est l\'une des plus longues périodes de paix relative de l\'histoire mondiale. Les routes commerciales sont sûres, la Méditerranée est romaine — *Mare Nostrum*, **notre mer**. Les provinces se romanisent à un rythme accéléré : forums, thermes, amphithéâtres, aqueducs apparaissent de **Lyon** à **Antioche**, de **Trêves** à **Carthage**.

Cette **civilisation matérielle** est l\'un des chefs-d\'œuvre romains. Les **aqueducs** transportent l\'eau sur des dizaines de kilomètres avec une pente d\'à peine quelques centimètres au kilomètre — précision remarquable. Le **béton romain** (*opus caementicium*), inventé au IIᵉ siècle av. J.-C., permet des voûtes et des coupoles inégalées avant le XIXᵉ siècle. Les **80 000 km de routes** pavées maillent l\'empire — *« tous les chemins mènent à Rome »*. Les **thermes** sont des palais publics gratuits, accueillant des milliers de baigneurs simultanément.

Rome elle-même, au IIᵉ siècle, dépasse **un million d\'habitants** — chiffre qu\'aucune ville européenne ne retrouvera avant Londres au XIXᵉ siècle.`
    },

    {
      type: 'widget',
      titre: 'L\'héritage romain dans le monde moderne',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: 'Le droit civil',
            description: `Le **droit romain**, codifié par Justinien au VIᵉ siècle dans le *Corpus juris civilis* (voir [[empire-byzantin]]), reste à la base de la plupart des systèmes juridiques européens. Le **Code Napoléon** (1804) en est le descendant direct. Distinction entre droit public et droit privé, notion de **personne juridique**, contrat, propriété : tout vient de Rome.`
          },
          {
            titre: 'Les langues romanes',
            description: `Le **latin** parlé (latin vulgaire) a donné naissance au français, à l\'italien, à l\'espagnol, au portugais, au roumain, au catalan, et à des dizaines d\'autres langues. Près de **800 millions** de locuteurs natifs aujourd\'hui. L\'anglais lui-même, par les emprunts médiévaux, est latinisé à plus de 50 %.`
          },
          {
            titre: 'L\'urbanisme classique',
            description: `Plan en damier (*cardo* nord-sud, *decumanus* est-ouest), forum central, aqueducs, égouts (la **Cloaca Maxima** de Rome fonctionne toujours, **2 600 ans** après sa construction). Modèle réutilisé partout — y compris dans les villes nouvelles américaines.`
          },
          {
            titre: 'Le vocabulaire politique',
            description: `Sénat, République, consul, dictateur, candidat (du blanc *candidus* des toges), tribunal, comité, magistrat, vote, suffrage : presque tout le vocabulaire politique moderne vient du latin républicain. Rome a légué un modèle institutionnel — pour le meilleur (constitutions modernes) et le pire (mythologie autoritaire). [[napoleon]] s\'en emparera explicitement : Consulat, Sénat conservateur, aigles des légions reprises sur ses étendards, sacre selon une mise en scène quasi césarienne.`
          },
          {
            titre: 'Le christianisme',
            description: `Religion d\'une minorité persécutée au Iᵉʳ siècle, **religion d\'État** au IVᵉ siècle après l\'édit de Milan (313) et l\'édit de Thessalonique (380). Rome diffuse le christianisme à toute l\'Europe — qu\'elle façonne en profondeur jusqu\'à aujourd\'hui. Le pape, encore aujourd\'hui, porte le titre romain de *Pontifex Maximus*.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>déclin</em> et la fin de l\'Occident',
      contenu_md:
`À partir du IIIᵉ siècle, l\'empire entre en crise. Coups d\'État militaires en cascade — **26 empereurs en 50 ans** entre 235 et 284 ap. J.-C. —, invasions germaniques sur le Rhin et le Danube, peste, inflation, dépeuplement. **Dioclétien** (284-305) stabilise temporairement en divisant le pouvoir entre quatre empereurs (Tétrarchie). **Constantin** (306-337) achève la transformation : capitale déplacée à **Constantinople** (330), christianisme légalisé (313), bureaucratie élargie.

En **395**, à la mort de **Théodose**, l\'empire est partagé entre ses deux fils, **Honorius** à l\'ouest et **Arcadius** à l\'est. La division est officiellement temporaire : elle deviendra définitive. Les deux moitiés ne suivront plus le même destin.

L\'**Occident** s\'effrite rapidement. Les peuples germaniques (Wisigoths, Vandales, Francs, Ostrogoths, Burgondes...) traversent les frontières et s\'installent. Rome elle-même est **pillée en 410** par les Wisigoths d\'Alaric, **puis en 455** par les Vandales. En **476**, le chef barbare **Odoacre** dépose le dernier empereur d\'Occident, un adolescent au nom dérisoire — **Romulus Augustule**. Date symbolique, retenue depuis la Renaissance pour marquer la fin de l\'Antiquité.

Mais l\'empire ne disparaît pas vraiment. À l\'**est**, à Constantinople, il continue. Pendant **mille ans encore**, jusqu\'à la chute de la ville en 1453. C\'est [[empire-byzantin]] — qui se considère lui-même comme « l\'Empire romain » sans interruption.`
    }

  ],

  quiz: [
    {
      type: 'ordre-chrono',
      q: `Remets ces grands événements romains dans l\'ordre chronologique :`,
      items: [
        'Fondation légendaire de Rome par Romulus',
        'Naissance de la République après l\'expulsion des rois étrusques',
        'Auguste instaure l\'Empire',
        'Édit de Milan : Constantin légalise le christianisme',
        'Chute de l\'Empire romain d\'Occident, déposition de Romulus Augustule'
      ],
      explication: `Cinq dates pour douze siècles : la fondation légendaire par Romulus (753 av. J.-C.), la chute du roi étrusque qui donne la République (509 av. J.-C.), l\'instauration de l\'Empire par Auguste (27 av. J.-C.), la légalisation du christianisme par Constantin (313 ap. J.-C.), et la déposition de Romulus Augustule (476 ap. J.-C.).`
    },
    {
      type: 'associer',
      q: `Associe chaque figure romaine à son fait marquant :`,
      paires: [
        { gauche: 'Romulus', droite: 'Fonde Rome en 753 av. J.-C.' },
        { gauche: 'Jules César', droite: 'Franchit le Rubicon en 49 av. J.-C.' },
        { gauche: 'Auguste', droite: 'Premier empereur en 27 av. J.-C.' },
        { gauche: 'Trajan', droite: 'Extension maximale de l\'empire (117 ap. J.-C.)' },
        { gauche: 'Caracalla', droite: 'Étend la citoyenneté à tous les hommes libres (212)' }
      ],
      explication: `De Romulus à Caracalla, cinq figures qui jalonnent l\'histoire romaine. Auguste est le petit-neveu de César ; Trajan porte l\'empire à 5 millions de km² ; Caracalla universalise la citoyenneté en 212.`
    },
    {
      type: 'texte-a-trou',
      q: `Complète cette phrase sur le franchissement du Rubicon :`,
      texte: 'Le 10 janvier {49} av. J.-C., {César} franchit le {Rubicon} et aurait prononcé la formule "Alea jacta est" — le sort en est jeté.',
      explication: `Acte interdit par la loi romaine : tout général entrant en armes en Italie déclare la guerre civile. César deviendra dictateur à vie cinq ans plus tard, puis sera assassiné aux Ides de mars 44 av. J.-C.`
    },
    {
      q: `À quelle date traditionnelle Rome est-elle fondée ?`,
      options: ['1000 av. J.-C.', '753 av. J.-C.', '509 av. J.-C.', '27 av. J.-C.'],
      correcte: 1,
      explication: `Le 21 avril 753 av. J.-C., selon la tradition, Romulus aurait tracé le sillon fondateur. L\'archéologie atteste un peuplement dès le Xᵉ siècle av. J.-C., mais la date légendaire reste fondatrice de l\'identité romaine.`
    },
    {
      q: `Quel événement marque le passage de la Royauté à la République en 509 av. J.-C. ?`,
      options: [
        `L\'assassinat de Jules César`,
        `La chute du roi étrusque Tarquin le Superbe et l\'instauration d\'un régime à deux consuls`,
        `La fondation de Constantinople`,
        `La défaite face à Carthage`
      ],
      correcte: 1,
      explication: `Les Romains chassent Tarquin le Superbe en 509 av. J.-C. et instaurent un régime de magistrats élus pour un an — les consuls. Le mot "rex" (roi) devient une insulte politique pour les cinq siècles à venir.`
    },
    {
      q: `Quelle est la singularité institutionnelle des deux consuls romains ?`,
      options: [
        `Ils sont élus à vie`,
        `Chacun dispose d\'un droit de veto sur l\'autre, ce qui était conçu pour empêcher toute tyrannie`,
        `Ils sont obligatoirement frères`,
        `Ils règnent ensemble sur deux moitiés de l\'empire`
      ],
      correcte: 1,
      explication: `Les deux consuls partagent l\'imperium et peuvent se neutraliser mutuellement par veto. Ce système, élu pour un an seulement, vise à empêcher tout retour à la monarchie.`
    },
    {
      q: `Qui franchit le Rubicon en 49 av. J.-C., déclenchant la guerre civile ?`,
      options: ['Auguste', 'Hannibal', 'Jules César', 'Scipion l\'Africain'],
      correcte: 2,
      explication: `Jules César, à la tête de ses légions de Gaule, franchit le Rubicon le 10 janvier 49 av. J.-C. — geste interdit qui équivaut à une déclaration de guerre civile. Il aurait prononcé la formule "Alea jacta est" — le sort en est jeté.`
    },
    {
      q: `En quelle année Auguste instaure-t-il l\'Empire ?`,
      options: ['44 av. J.-C.', '27 av. J.-C.', '14 ap. J.-C.', '117 ap. J.-C.'],
      correcte: 1,
      explication: `En 27 av. J.-C., Octave reçoit du Sénat le titre d\'Augustus. Il conserve les apparences de la République, mais concentre en réalité tous les pouvoirs. Début de la Pax Romana, qui durera deux siècles.`
    },
    {
      q: `Sous quel empereur l\'Empire romain atteint-il son extension maximale au IIᵉ siècle ?`,
      options: ['Auguste', 'Néron', 'Trajan', 'Constantin'],
      correcte: 2,
      explication: `Sous Trajan (98-117 ap. J.-C.), l\'Empire atteint environ 5 millions de km² — de l\'Écosse à la Mésopotamie — pour près de 60 millions d\'habitants. Aucun État antérieur n\'avait atteint cette échelle.`
    },
    {
      q: `Que prévoit l\'Édit de Caracalla en 212 ap. J.-C. ?`,
      options: [
        `La légalisation du christianisme`,
        `L\'extension de la citoyenneté romaine à tous les hommes libres de l\'empire`,
        `Le déplacement de la capitale à Constantinople`,
        `L\'abolition de l\'esclavage`
      ],
      correcte: 1,
      explication: `L\'empereur Caracalla accorde en 212 la citoyenneté à tous les hommes libres de l\'empire — aboutissement de cinq siècles de romanisation. La citoyenneté, qui avait été un privilège jalousement protégé, devient universelle (parmi les libres).`
    },
    {
      q: `Que se passe-t-il en 476 ap. J.-C. ?`,
      options: [
        `Rome est rasée par les Vandales`,
        `Le dernier empereur romain d\'Occident, Romulus Augustule, est déposé par Odoacre — mais l\'Empire continue en Orient (Byzance) pendant mille ans`,
        `L\'empire est divisé entre Honorius et Arcadius`,
        `Le christianisme devient religion d\'État`
      ],
      correcte: 1,
      explication: `Le chef barbare Odoacre dépose Romulus Augustule en 476. Date traditionnelle de la fin de l\'Antiquité. Mais en Orient, l\'Empire — qui sera appelé byzantin par les historiens modernes — continue jusqu\'en 1453.`
    }
  ]

});
