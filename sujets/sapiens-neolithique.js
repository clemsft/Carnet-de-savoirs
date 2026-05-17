/* ===================================================================
   SUJET — Sapiens et la révolution néolithique
   ===================================================================
   300 000 ans d'Homo sapiens, du fossile marocain de Jebel Irhoud
   aux premières cités d'Uruk — avec, au milieu, le moment décisif où
   l'humanité cesse de chasser pour planter.
   Domaines : Histoire, Biologie
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'sapiens-neolithique',
    titre: '<em>Sapiens</em> et la révolution néolithique',
    domaines: ['Histoire', 'Biologie'],
    tags: ['prehistoire', 'sapiens', 'neandertal', 'neolithique', 'agriculture', 'sedentarisation', 'gobekli-tepe'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['evolution-darwin', 'ecriture-cuneiforme', 'pyramides-egypte'],
    date_creation: '2026-05-17',
    date_maj: '2026-05-17'
  },

  resume: `Suivre l'aventure d'**Homo sapiens** depuis son apparition en Afrique il y a 300 000 ans jusqu'au moment décisif où, vers -10 000, certains groupes humains cessent de chasser pour planter du blé, dresser des chèvres, bâtir des villages et inventer — par accident, ou peut-être par rituel — la société, la cité, l'État.`,

  points_cles: [
    `*Homo sapiens* apparaît en Afrique il y a environ **300 000 ans** (fossiles de **Jebel Irhoud**, Maroc, datés 2017). Notre espèce sort d'Afrique par vagues successives, la principale autour de **-70 000**, et peuple toute la planète habitable en 65 000 ans.`,
    `Plusieurs espèces humaines coexistent longtemps avec nous : ***Homo neanderthalensis*** en Europe et Asie de l'Ouest, **Denisoviens** en Asie, ***Homo floresiensis*** (le "hobbit") sur l'île indonésienne de **Florès**. Les non-Africains contemporains portent encore **1 à 4 % d'ADN néandertalien** — preuve d'hybridations répétées.`,
    `Une [révolution cognitive]{accent} se produit vers **-70 000** à **-40 000** : art figuratif (Chauvet -36 000, Lascaux -17 000), sépultures rituelles, ornements corporels, langage symbolique abstrait. Ces outils mentaux distinguent *sapiens* de toutes les autres espèces humaines.`,
    `La **révolution néolithique** commence vers **-10 000** dans le **Croissant fertile** (Levant, Mésopotamie, Anatolie). Les humains y domestiquent par sélection progressive le **blé**, l'**orge**, la **lentille**, puis la **chèvre**, le **mouton**, le **porc**, le **bovin**.`,
    `La **sédentarisation** précède parfois l'agriculture. **Göbekli Tepe** (Turquie, daté **-9500**) montre un sanctuaire mégalithique en cercles bâti par des **chasseurs-cueilleurs encore nomades**. C'est peut-être le rituel qui sédentarise, pas le grain.`,
    `Paradoxe documenté : l'agriculture **dégrade d'abord la qualité de vie**. Régime monotone (pauvre en protéines, riche en glucides), travail plus pénible, hauteur moyenne qui chute, premières **épidémies** liées à la promiscuité avec le bétail. Mais elle nourrit **dix à cent fois plus de monde par hectare**.`,
    `Densité humaine accrue = **spécialisation** : on ne peut plus être tous chasseurs. Apparaissent artisans, potiers, tisserands, prêtres, soldats, scribes. Cinq mille ans plus tard naissent les premières cités (**Uruk**, Sumer, **-3500**), puis l'**écriture** — voir [[ecriture-cuneiforme]].`,
    `Le Néolithique se diffuse de façon **non-linéaire** : **foyers indépendants** ont été identifiés en Chine (riz et millet, vers **-7000**), Méso-Amérique (maïs, courge, haricot, vers **-5000**), Andes (pomme de terre, vers **-4500**), Nouvelle-Guinée (taro, vers **-7000**). Pas un seul Néolithique : plusieurs, parallèles.`
  ],

  carte_mentale: {
    central: 'sapiens',
    noeuds: [
      { id: 'sapiens', label: 'Homo sapiens', description: 'Notre espèce. Apparue en Afrique il y a 300 000 ans, devenue unique espèce humaine il y a ~30 000 ans, et seule à transformer son environnement à grande échelle.' },

      { id: 'origines', label: 'Origines africaines', description: 'Jebel Irhoud (Maroc, -300 000), Omo Kibish (Éthiopie, -195 000). Apparition probablement panafricaine plutôt que d\'un foyer unique.' },
      { id: 'sorties', label: 'Sorties d\'Afrique', description: 'Plusieurs vagues. La principale, vers -70 000, peuple tout l\'Eurasie, l\'Australie (-65 000), puis les Amériques (-15 000).' },
      { id: 'cousins', label: 'Cousins humains', description: 'Néandertaliens en Europe, Denisoviens en Asie, Homo floresiensis à Florès, Homo naledi en Afrique du Sud. Coexistence de quatre à cinq espèces humaines pendant l\'essentiel de notre histoire.' },
      { id: 'cognitive', label: 'Révolution cognitive', description: 'Art figuratif, sépultures, ornements, abstraction symbolique. Émerge vers -70 000 à -40 000. Tournant qui sépare sapiens du reste.' },
      { id: 'neolithique', label: 'Révolution néolithique', description: '-10 000. Domestication des plantes et animaux. Sédentarisation. Naissance des villages, puis des cités, puis des États.' },
      { id: 'civilisations', label: 'Premières civilisations', description: 'Uruk en Sumer (-3500), Égypte (-3100), Indus (-3000), Chine (-2000), Méso-Amérique (-1500). Voir [[ecriture-cuneiforme]] et [[pyramides-egypte]].' },

      // Cousins
      { id: 'neandertal', label: 'Néandertal', description: '*Homo neanderthalensis*. Apparaît -400 000 en Europe, s\'éteint -40 000. Cerveau plus gros que le nôtre. Hybridation avec sapiens : 1-4 % d\'ADN dans les non-Africains.', parent: 'cousins' },
      { id: 'denisovien', label: 'Denisoviens', description: 'Connus depuis 2010 par une phalange découverte en Sibérie. ADN extrait sans squelette complet : a permis d\'identifier une troisième humanité. Présents en Asie pendant des centaines de milliers d\'années.', parent: 'cousins' },
      { id: 'floresiensis', label: 'Homo floresiensis', description: 'Le "hobbit". Découvert à Florès en 2003. Taille adulte ~1m, cerveau ~400 cm³. Espèce naine probablement issue d\'un isolement insulaire. Coexiste avec sapiens jusqu\'à -50 000.', parent: 'cousins' },

      // Révolution cognitive
      { id: 'art', label: 'Art préhistorique', description: 'Premières figurines (Hohle Fels, -35 000), peintures rupestres (El Castillo -41 000, Chauvet -36 000, Lascaux -17 000). L\'humain commence à représenter le monde.', parent: 'cognitive' },
      { id: 'sepulture', label: 'Sépultures rituelles', description: 'Premières sépultures ornées : Sungir en Russie (-30 000), corps couverts de milliers de perles. Sens du sacré, de la mort, du don.', parent: 'cognitive' },

      // Néolithique
      { id: 'croissant', label: 'Croissant fertile', description: 'Arc allant du Levant méditerranéen à la Mésopotamie. Berceau de l\'agriculture vers -10 000. Domestication du blé, orge, mouton, chèvre.', parent: 'neolithique' },
      { id: 'gobekli', label: 'Göbekli Tepe', description: 'Sanctuaire de cercles mégalithiques en Anatolie sud-est, daté -9500. Bâti par des chasseurs-cueilleurs encore nomades. Plus ancien temple connu de l\'humanité.', parent: 'neolithique' },
      { id: 'domestication', label: 'Domestication', description: 'Sélection progressive de plantes et animaux moins anxieux, plus productifs, plus dépendants de l\'humain. Pluri-millénaire : du jeune mouflon au mouton, du téosinte au maïs.', parent: 'neolithique' },
      { id: 'foyers', label: 'Foyers indépendants', description: 'Chine (riz, -7000), Nouvelle-Guinée (taro, -7000), Méso-Amérique (maïs, -5000), Andes (pomme de terre, -4500), Afrique sub-saharienne (sorgho, -4000). Néolithiques parallèles.', parent: 'neolithique' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Une <em>nouvelle</em> espèce parmi d'autres`,
      contenu_md:
`Il y a trois cent mille ans, dans une grotte du Maroc actuel — le site de [Jebel Irhoud]{accent} —, vit un groupe d'humains qui ressemble aux humains contemporains. Front haut, mâchoire reculée, menton fin. Ce ne sont pas encore tout à fait nous : leur boîte crânienne est un peu plus allongée, les arcades sourcilières plus marquées. Mais ce sont les plus anciens fossiles connus de notre espèce, *Homo sapiens*, datés en **2017** par luminescence sur les silex chauffés à proximité. L'apparition de notre espèce, longtemps située autour de -200 000 ans en Afrique de l'Est, est donc plus ancienne — et probablement plus **panafricaine** que strictement éthiopienne.

Mais *sapiens* n'est pas seul. À cette époque, plusieurs espèces humaines se partagent la planète. En Europe et au Proche-Orient vivent les [Néandertaliens]{accent}, *Homo neanderthalensis*, présents depuis -400 000 ans, adaptés au froid glaciaire, au cerveau légèrement **plus volumineux** que le nôtre. En Asie centrale et orientale vivent les **Denisoviens**, une humanité dont on ignorait l'existence jusqu'en 2010 — date à laquelle l'ADN extrait d'une simple phalange découverte dans une grotte sibérienne a révélé qu'il s'agissait ni de néandertaliens, ni de sapiens, ni d'aucune humanité connue. Sur l'île indonésienne de **Florès**, enfin, vit jusqu'à -50 000 *Homo floresiensis*, un humain nain d'à peine un mètre, isolé sur son île pendant des centaines de millénaires.

L'image courante d'une humanité unique, descendant de Néandertal qui descendrait d'Erectus, est fausse. C'est une **arborescence** : pendant l'essentiel de notre histoire, **quatre ou cinq espèces humaines coexistent**. *Sapiens* finit par être la seule, mais cela n'avait rien d'évident.`
    },

    {
      type: 'widget',
      composant: 'Frise',
      titre: 'Chronologie de Sapiens',
      params: {
        evenements: [
          { date: '-300 000', titre: 'Jebel Irhoud', description: 'Plus anciens fossiles connus d\'*Homo sapiens*, au **Maroc**. Datation 2017. Renvoie l\'apparition de notre espèce **100 000 ans plus tôt** que ce qu\'on pensait.' },
          { date: '-195 000', titre: 'Omo Kibish', description: 'Fossiles d\'**Éthiopie**. Longtemps considérés comme les plus anciens *sapiens*. Crâne plus moderne que Jebel Irhoud.' },
          { date: '-70 000', titre: 'Sortie d\'Afrique majeure', description: 'Vague principale d\'expansion hors d\'Afrique, après une vague antérieure (-120 000) restée limitée au Levant. Tous les non-Africains actuels descendent de ce groupe.' },
          { date: '-65 000', titre: 'Arrivée en Australie', description: '*Sapiens* traverse les détroits indonésiens (probablement en radeaux) et atteint le continent australien. Coïncide avec l\'extinction de la mégafaune locale.' },
          { date: '-41 000', titre: 'Art rupestre', description: 'Peintures de la grotte d\'**El Castillo** en Espagne, datées -41 000 — pourraient être néandertaliennes. Chauvet (-36 000), Hohle Fels (figurine, -35 000), Lascaux (-17 000) suivent.' },
          { date: '-30 000', titre: 'Sépultures de Sungir', description: 'En Russie. Adultes et enfants ensevelis couverts de **milliers de perles d\'ivoire**, ornements élaborés. Témoignage d\'une stratification sociale précoce.' },
          { date: '-15 000', titre: 'Peuplement des Amériques', description: 'Premiers humains à passer en Amérique via la **Béringie** (alors émergée). Atteignent l\'extrémité sud du continent en quelques millénaires.' },
          { date: '-10 000', titre: 'Révolution néolithique', description: 'Dans le **Croissant fertile** : premières domestications (blé, orge, mouton, chèvre). La sédentarisation commence.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `La <em>révolution cognitive</em>`,
      contenu_md:
`Pendant longtemps, *Homo sapiens* ressemble physiquement à *sapiens* mais ne se distingue guère, dans ses outils, du néandertalien. Et puis quelque chose se passe. Vers **-70 000 à -40 000**, dans le registre archéologique, surgissent presque simultanément l'**art figuratif**, les **sépultures ornées**, les **ornements corporels** (colliers de coquillages, perles d'ivoire), les outils en os fins et précis, le commerce à longue distance (silex transportés sur des centaines de kilomètres), et — c'est l'hypothèse défendue par l'historien **Yuval Noah Harari** dans *Sapiens* — une forme nouvelle de langage : la capacité de parler de choses qui n'existent pas, de mythes, d'esprits, de tribus imaginaires.

Pourquoi cette accélération, et pourquoi à ce moment ? On l'ignore. Une mutation génétique du langage, une pression environnementale (l'**hiver volcanique de Toba**, vers -74 000), un effet de seuil démographique : plusieurs hypothèses circulent, aucune n'emporte définitivement la conviction. Mais les conséquences sont massives : *sapiens* devient capable de **coopérer en grands groupes** d'inconnus, ce qu'aucune autre espèce ne fait. Cinq cents individus chassent ensemble parce qu'ils croient à la même histoire fondatrice — mythe du clan, totem, ancêtre commun. Le mammouth, lui, n'a plus aucune chance.

Les autres humanités s'éteignent. Les néandertaliens disparaissent **vers -40 000**, peut-être après une longue cohabitation parfois pacifique (avec hybridations) et parfois conflictuelle. Les Denisoviens, vers la même date. *Floresiensis* tient un peu plus longtemps sur son île, jusqu'à **-50 000**. Au début du Néolithique, *sapiens* est la **seule espèce humaine** restante. C'est une situation inédite : il n'y avait jamais eu, depuis l'apparition du genre *Homo* il y a deux millions d'années, qu'**une seule humanité sur Terre**.`
    },

    {
      type: 'widget',
      composant: 'GrilleCartes',
      titre: 'Quatre humanités contemporaines',
      params: {
        cartes: [
          { tag: 'Afrique → monde', titre: 'Homo sapiens', description: 'Notre espèce. Apparue il y a 300 000 ans. Crâne arrondi, front haut, menton. Seule à avoir construit une **culture symbolique** explosive. Aujourd\'hui, 8 milliards d\'individus.' },
          { tag: 'Europe / Asie ouest', titre: 'Néandertaliens', description: 'Adaptés au froid glaciaire, robustes, cerveau légèrement plus gros que le nôtre. Maîtrisaient le feu, soignaient leurs blessés, peut-être enterraient leurs morts. Éteints vers -40 000.' },
          { tag: 'Asie', titre: 'Denisoviens', description: 'Cousins des néandertaliens. **Connus seulement depuis 2010**, par génomique. Quasiment aucun fossile complet. Ont laissé jusqu\'à **6 % d\'ADN chez les Mélanésiens et Aborigènes australiens** actuels.' },
          { tag: 'Florès, Indonésie', titre: 'Homo floresiensis', description: 'Le "hobbit". Découvert en 2003. Adulte d\'environ **1 m, cerveau de 400 cm³**, dérivé probable d\'*Homo erectus* nanifié par isolement insulaire. Maîtrisait les outils de pierre. Éteint vers -50 000.' }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'Le Néolithique',
      contenu_md: `Le mot, forgé par le préhistorien anglais **John Lubbock** en **1865**, signifie "pierre nouvelle" (*neos lithos*) — par opposition au Paléolithique, "pierre ancienne". Mais le Néolithique n'est pas seulement une nouvelle façon de tailler la pierre : c'est, comme l'a écrit le préhistorien australien **Gordon Childe** dans les années 1930, une [révolution]{accent} aussi profonde que la révolution industrielle moderne. En quelques millénaires, *sapiens* passe d'un mode de vie qu'il pratiquait depuis 290 000 ans (chasse-cueillette nomade) à un mode de vie radicalement nouveau : agriculture, sédentarisation, villages, animaux dressés. Et ce changement, une fois entamé, devient irréversible.`
    },

    {
      type: 'texte',
      titre: `Le <em>Croissant fertile</em> et Göbekli Tepe`,
      contenu_md:
`Vers **-12 000**, la dernière période glaciaire s'achève. Le climat se réchauffe, les pluies reviennent, certaines régions du globe deviennent particulièrement favorables : le **Croissant fertile**, vaste arc qui part du Levant méditerranéen actuel (Israël, Liban, Syrie), traverse l'Anatolie et descend vers la Mésopotamie (Irak), concentre une diversité exceptionnelle d'espèces végétales et animales potentiellement domesticables — y poussent à l'état sauvage le **blé**, l'**orge**, le **pois**, la **lentille** ; y vivent les ancêtres sauvages du **mouton**, de la **chèvre**, du **porc**, du **bovin**.

Pendant deux à trois millénaires, des groupes humains commencent à cultiver ces plantes (en sélectionnant, sans le savoir explicitement, les épis qui ne se brisent pas tout seuls) et à parquer ces animaux (en gardant les plus dociles, qui se reproduisent en captivité). C'est lent, progressif, parfois réversible. Le **blé** moderne a perdu — par sélection humaine — la capacité de semer lui-même ses graines : il a besoin de nous pour se reproduire. Nous avons aussi besoin de lui. Co-évolution.

Mais le site qui a le plus bouleversé la compréhension de cette période, c'est [Göbekli Tepe]{accent}, un sanctuaire mégalithique en cercles découvert en **1994** par l'archéologue allemand **Klaus Schmidt** au sud-est de la Turquie. Daté **-9500**, soit **6 000 ans avant Stonehenge**, il est composé de piliers de calcaire de cinq mètres et de plusieurs tonnes, sculptés d'animaux. Or — c'est le point décisif — à cette date, les habitants de la région sont encore des **chasseurs-cueilleurs nomades**. Aucune trace d'agriculture, aucune habitation permanente. Il a donc fallu qu'une coopération massive s'organise *avant* la sédentarisation pour bâtir un tel sanctuaire. Hypothèse : c'est le **rituel** qui a fixé les groupes au sol, et l'agriculture qui en a découlé pour nourrir les bâtisseurs et pèlerins. Le sacré aurait précédé le grain.`
    },

    {
      type: 'widget',
      composant: 'Frise',
      titre: 'Les foyers néolithiques mondiaux',
      params: {
        evenements: [
          { date: '-10 000', titre: 'Croissant fertile', description: '**Levant, Mésopotamie, Anatolie**. Blé engrain, blé amidonnier, orge, pois, lentille. Mouton, chèvre. Foyer le plus précoce et le mieux documenté.' },
          { date: '-9500', titre: 'Göbekli Tepe', description: 'Sanctuaire mégalithique en Anatolie. Bâti **par des chasseurs-cueilleurs** encore nomades. Le rituel précède la sédentarisation.' },
          { date: '-7000', titre: 'Chine', description: '**Yangzi** : domestication du **riz**. **Fleuve Jaune** : domestication du **millet**. Foyer entièrement indépendant du Croissant fertile.' },
          { date: '-7000', titre: 'Nouvelle-Guinée', description: 'Domestication du **taro** et de la **canne à sucre** dans les hauts plateaux. Foyer longtemps sous-estimé par l\'archéologie.' },
          { date: '-5000', titre: 'Méso-Amérique', description: 'Vallée de Tehuacán, Mexique. Domestication du **maïs** (à partir du téosinte, une herbe à minuscules épis), de la **courge**, du **haricot**. La "triade" mésoaméricaine.' },
          { date: '-4500', titre: 'Andes', description: 'Hauts plateaux du Pérou et de Bolivie. Domestication de la **pomme de terre**, du **quinoa**, du **lama**, de l\'**alpaga**.' },
          { date: '-4000', titre: 'Afrique sub-saharienne', description: 'Sahel ouest-africain : **sorgho**, **mil**. Foyer plus récent, partiellement influencé par le Croissant fertile via l\'Égypte.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le <em>paradoxe</em> du Néolithique`,
      contenu_md:
`Le grand paradoxe documenté par les paléopathologistes depuis les années 1980 est le suivant : **passer à l'agriculture détériore d'abord la condition humaine**. Les squelettes néolithiques des premiers millénaires montrent une **chute de la taille moyenne** (l'homme du Mésolithique européen mesurait environ 1,72 m, celui du Néolithique précoce 1,65 m, et il faudra attendre le XXᵉ siècle pour retrouver les standards mésolithiques), un **régime appauvri** (carences en protéines, dépendance à un ou deux glucides, dents abîmées par les bouillies sucrées), un **travail plus pénible** (les femmes néolithiques ont des articulations de bassin et de genoux usées par le port répété de meules), et une **mortalité accrue par les épidémies** — la cohabitation étroite avec le bétail a fait passer aux humains la rougeole, la variole, la grippe, la tuberculose.

Alors pourquoi diable l'humanité s'est-elle laissée prendre à ce piège ? Plusieurs réponses, complémentaires. D'abord, l'agriculture nourrit **dix à cent fois plus de monde par hectare** : les groupes agriculteurs supplantent démographiquement les chasseurs-cueilleurs, même si chaque individu agriculteur vit moins bien. Ensuite, le processus a été **progressif** sur des millénaires — aucune génération n'a vu l'effondrement, juste un léger glissement par rapport à ses parents. Enfin, et c'est l'argument de Harari, le grain a "domestiqué" l'humain autant que l'humain a domestiqué le grain : le piège, une fois posé, ne pouvait plus être déposé. Revenir à la chasse aurait demandé d'abandonner les structures, les hiérarchies, les religions, les enfants en surnombre que l'agriculture avait engendrés.`
    },

    {
      type: 'widget',
      composant: 'SelecteurValeurs',
      titre: 'Plantes et animaux domestiqués, par foyer',
      params: {
        options: [
          { label: 'Croissant fertile', valeur: '-10 000', description: 'Blé engrain et amidonnier, orge, pois, lentille, lin. Mouton, chèvre, porc, bovin (aurochs domestiqué).' },
          { label: 'Chine', valeur: '-7 000', description: 'Riz (Yangzi), millet (fleuve Jaune), soja. Porc (domesticité indépendante), poulet, ver à soie.' },
          { label: 'Nouvelle-Guinée', valeur: '-7 000', description: 'Taro, canne à sucre, banane, igname. Aucun grand animal domestiqué (la faune locale ne s\'y prête pas).' },
          { label: 'Méso-Amérique', valeur: '-5 000', description: 'Maïs (issu du téosinte), courge, haricot, piment, cacao, agave. Dindon. Aucun grand bétail.' },
          { label: 'Andes', valeur: '-4 500', description: 'Pomme de terre, quinoa, manioc, coca. Lama, alpaga, cobaye. Seul foyer pré-colombien à grand mammifère domestique.' },
          { label: 'Afrique sub-saharienne', valeur: '-4 000', description: 'Sorgho, mil, igname, fonio, palmier à huile. Ânesse (Égypte voisine). Bovin africain domestiqué localement.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Vers les <em>premières cités</em>`,
      contenu_md:
`Une fois la sédentarisation acquise et l'agriculture en place, la suite s'enchaîne assez vite à l'échelle de la préhistoire. Cinq mille ans environ séparent les premiers villages néolithiques (Jéricho, Çatal Hüyük, vers **-9000** à **-7000**) des premières **cités** dignes de ce nom. Le terme apparaît avec **Uruk**, dans le sud de la Mésopotamie actuelle (Irak), vers **-3500 à -3100**. Uruk compte alors **40 000 à 80 000 habitants** — la plus grande agglomération de la planète à cette époque —, des temples massifs, une bureaucratie naissante, une stratification sociale claire, des **rois**.

C'est à Uruk, vers **-3300**, que naît l'**écriture cunéiforme** — d'abord comme système de comptabilité, pour suivre les stocks de grain et les redevances, avant de devenir un véhicule de littérature et de droit. Voir [[ecriture-cuneiforme]] pour cette aventure. Au même moment, en Égypte, le pharaon **Narmer** unifie les royaumes du Nord et du Sud (-3100), donnant naissance à la civilisation pharaonique des pyramides — voir [[pyramides-egypte]]. Vers **-3000** naît la civilisation de l'**Indus** (Mohenjo-Daro, Harappa). Vers **-2000**, les premières dynasties chinoises sur le fleuve Jaune.

En quelques millénaires, à partir de communautés humaines qui pendant 290 000 ans avaient été des groupes de chasseurs-cueilleurs de quelques dizaines d'individus, surgit le **modèle de la civilisation urbaine** : cité, hiérarchie, état, écriture, religion organisée, armée. Tout ce que nous prendrons ensuite pour le cours normal de l'histoire humaine n'a en réalité que **cinq mille ans**, sur les 300 000 que dure l'aventure de *sapiens*. Et tout cela découle, directement ou indirectement, de la décision — étrange et longue à mûrir — de planter du blé.`
    },

    {
      type: 'encadre',
      label: 'L\'échelle',
      contenu_md: `Si on ramène les **300 000 ans** d'*Homo sapiens* à une **journée de 24 heures**, l'agriculture apparaît à **23 h 12** (il y a 12 000 ans), les premières cités à **23 h 36** (il y a 6 000 ans), l'Empire romain à **23 h 56**, la révolution industrielle à **23 h 59 min 25 s**, et la naissance d'Internet à **23 h 59 min 59 s**. Tout ce que nous appelons "histoire" tient dans les vingt dernières minutes. Tout le reste est préhistoire.`
    }

  ],

  quiz: [
    {
      q: `Où ont été découverts les plus anciens fossiles connus d'Homo sapiens ?`,
      options: [
        `Omo Kibish, en Éthiopie, datés -195 000`,
        `Jebel Irhoud, au Maroc, datés -300 000`,
        `Olduvai, en Tanzanie, datés -1 800 000`,
        `Cro-Magnon, en France, datés -30 000`
      ],
      correcte: 1,
      explication: `Pendant longtemps, on a considéré les fossiles d'Omo Kibish (Éthiopie, -195 000 ans) comme les plus anciens *Homo sapiens*. Mais la **redatation en 2017** des restes humains de **Jebel Irhoud** au Maroc a fait reculer l'apparition de notre espèce à **-300 000 ans**. Cela suggère une émergence panafricaine plutôt qu'un foyer unique en Afrique de l'Est. Les fossiles présentent un crâne déjà très moderne (front haut, menton, mâchoire reculée) mais avec une boîte crânienne encore un peu allongée.`
    },
    {
      q: `Quels pourcentages d'ADN ancien portent les humains contemporains hors d'Afrique ?`,
      options: [
        `Aucun : sapiens et néandertaliens ne se sont jamais croisés`,
        `1 à 4 % d'ADN néandertalien chez tous les non-Africains, et jusqu'à 6 % d'ADN denisovien chez certains Asiatiques et Mélanésiens`,
        `Environ 50 %, comme tous les croisements génétiques`,
        `Plus de 90 %, car néandertaliens et sapiens étaient quasi identiques`
      ],
      correcte: 1,
      explication: `Les comparaisons génomiques (depuis le séquençage du génome néandertalien en 2010) montrent que **tous les humains non africains portent 1 à 4 % d'ADN néandertalien**, traces des hybridations qui ont eu lieu au Proche-Orient lors de la sortie d'Afrique vers -70 000. Les **Mélanésiens et Aborigènes australiens** portent en outre **3 à 6 % d'ADN denisovien**, dont les apports semblent avoir eu lieu plus tard et plus à l'est. Les Africains, eux, sont très peu enrichis (les vagues hybrides étant restées hors d'Afrique), ce qui en fait paradoxalement les humains les plus "purement sapiens" génétiquement.`
    },
    {
      q: `Qu'est-ce qui fait la singularité de Göbekli Tepe ?`,
      options: [
        `Il s'agit de la plus ancienne ville connue, datée -9500`,
        `C'est le plus ancien sanctuaire mégalithique connu, daté -9500, construit par des chasseurs-cueilleurs encore nomades`,
        `C'est le premier site où on a trouvé des traces d'agriculture du blé`,
        `Il s'agit du plus ancien tombeau royal connu`
      ],
      correcte: 1,
      explication: `Göbekli Tepe, découvert en 1994 en Anatolie sud-est, est composé de cercles de piliers de calcaire de plusieurs tonnes, sculptés d'animaux, daté **-9500** — soit **6 000 ans avant Stonehenge**. Sa singularité décisive : il a été bâti par des **chasseurs-cueilleurs encore nomades**, sans agriculture ni habitations permanentes attestées à proximité. Cela inverse l'idée reçue selon laquelle la sédentarisation aurait permis le rituel : ici, c'est probablement le **rituel** qui a fixé les groupes au sol, et l'agriculture qui a suivi pour nourrir les bâtisseurs et pèlerins.`
    },
    {
      q: `Pourquoi parle-t-on de plusieurs foyers néolithiques plutôt que d'un seul ?`,
      options: [
        `Parce que l'agriculture du Croissant fertile s'est diffusée partout par migration`,
        `Parce qu'au moins six régions du monde (Croissant fertile, Chine, Nouvelle-Guinée, Méso-Amérique, Andes, Afrique sub-saharienne) ont domestiqué indépendamment des plantes et animaux locaux`,
        `Parce que l'agriculture est apparue en même temps dans toutes les civilisations`,
        `Parce que les archéologues n'arrivent pas à dater précisément le Croissant fertile`
      ],
      correcte: 1,
      explication: `Les preuves archéologiques et génétiques montrent que la révolution néolithique n'est **pas un événement unique** qui se serait diffusé depuis le Proche-Orient. Au moins **six foyers indépendants** ont été identifiés : Croissant fertile (-10 000, blé/orge/mouton), Chine (-7000, riz/millet), Nouvelle-Guinée (-7000, taro), Méso-Amérique (-5000, maïs), Andes (-4500, pomme de terre/lama), Afrique sub-saharienne (-4000, sorgho/mil). Chaque foyer a domestiqué la flore et la faune disponibles localement. Le Néolithique est un phénomène **convergent** plus que diffusionniste.`
    },
    {
      q: `Quel paradoxe documentent les paléopathologistes au début du Néolithique ?`,
      options: [
        `Les agriculteurs vivent mieux, plus longtemps et plus heureux que les chasseurs-cueilleurs`,
        `Les premiers agriculteurs ont une taille moyenne plus petite, un régime appauvri, davantage d'épidémies et un travail plus pénible que les chasseurs-cueilleurs`,
        `Les agriculteurs perdent immédiatement la capacité de chasser`,
        `Le climat s'est dégradé d'un coup, obligeant à passer à l'agriculture`
      ],
      correcte: 1,
      explication: `C'est l'un des résultats les plus contre-intuitifs de l'archéologie du Néolithique : passer à l'agriculture **dégrade d'abord la condition humaine**. Les squelettes montrent une **chute de la taille moyenne** (environ -7 cm entre Mésolithique et Néolithique européens), un régime monotone et carencé, des dents abîmées, une mortalité accrue par les **épidémies** transmises par les animaux domestiqués. Mais l'agriculture nourrit dix à cent fois plus de monde par hectare : les agriculteurs supplantent démographiquement les chasseurs-cueilleurs, même en vivant moins bien individuellement. Le piège, une fois posé, ne se referme plus.`
    },
    {
      q: `Quand et où apparaissent les premières grandes cités au sens strict ?`,
      options: [
        `À Jéricho, vers -9000`,
        `À Çatal Hüyük, vers -7000`,
        `À Uruk, en Mésopotamie, vers -3500 à -3100`,
        `À Athènes, vers -500`
      ],
      correcte: 2,
      explication: `Jéricho et Çatal Hüyük sont effectivement des **villages néolithiques très anciens et très peuplés**, mais on parle de "premières cités" pour désigner des agglomérations comptant **plusieurs dizaines de milliers d'habitants**, avec une **bureaucratie organisée, des temples monumentaux, une royauté, une écriture**. Le premier exemple documenté est **Uruk**, au sud de la Mésopotamie, vers **-3500 à -3100**. Elle compte alors 40 000 à 80 000 habitants — taille inédite à l'époque — et voit naître l'écriture cunéiforme.`
    },
    {
      q: `Combien d'espèces humaines coexistent avec Homo sapiens il y a 70 000 ans ?`,
      options: [
        `Aucune, sapiens est seul depuis l'origine`,
        `Une seule, Néandertal`,
        `Au moins quatre : Néandertal, Denisoviens, Homo floresiensis, et probablement Homo luzonensis aux Philippines`,
        `Vingt-trois espèces différentes`
      ],
      correcte: 2,
      explication: `Il y a 70 000 ans, *Homo sapiens* n'est pas seul. **Néandertal** est encore présent en Europe et au Proche-Orient (jusqu'à -40 000), les **Denisoviens** occupent une grande partie de l'Asie (connus depuis 2010 par ADN), ***Homo floresiensis*** — le "hobbit" — vit sur l'île de Florès jusqu'à -50 000, et plus récemment encore (2019) a été décrit ***Homo luzonensis*** aux Philippines, d'âge similaire. C'est seulement vers **-30 000** que *sapiens* devient la **seule humanité** survivante — situation totalement inédite dans l'histoire du genre *Homo*.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Homo sapiens',
      definition: `Notre espèce. Apparue en **Afrique** il y a environ **300 000 ans** (fossiles de *Jebel Irhoud*, Maroc, datés en 2017). Caractérisée par un crâne arrondi, un front haut, un menton, et — surtout — une culture symbolique explosive après -70 000 ans (art, sépultures rituelles, langage abstrait).`
    },
    {
      terme: 'Néandertal',
      definition: `*Homo neanderthalensis*. Espèce humaine européenne et ouest-asiatique apparue il y a **400 000 ans**, éteinte vers **-40 000**. Cerveau légèrement plus volumineux que le nôtre, robuste, adaptée au froid glaciaire. **Hybridations** avec sapiens documentées : 1 à 4 % d'ADN néandertalien chez tous les non-Africains contemporains.`
    },
    {
      terme: 'Denisoviens',
      definition: `Humanité asiatique cousine des néandertaliens. **Connue seulement depuis 2010** par séquençage d'ADN extrait d'une simple phalange trouvée en Sibérie. Jusqu'à **6 % d'ADN denisovien** chez les Mélanésiens et Aborigènes australiens. Quasiment aucun fossile complet — identité reconstruite par génomique pure.`
    },
    {
      terme: 'Révolution cognitive',
      definition: `Saut culturel observé chez *Homo sapiens* entre **-70 000** et **-40 000** : apparition de l'**art figuratif**, des **sépultures ornées**, des **ornements corporels**, du **commerce à longue distance**, et probablement d'un **langage symbolique abstrait** permettant de coopérer en grands groupes d'inconnus liés par un mythe commun.`
    },
    {
      terme: 'Néolithique',
      definition: `Période archéologique commençant vers **-10 000** dans le **Croissant fertile**, marquée par la **domestication des plantes et des animaux**, la **sédentarisation**, l'apparition des **villages permanents** et de la **poterie**. Termes forgés par *John Lubbock* en 1865. Rupture aussi profonde dans l'histoire humaine que la révolution industrielle moderne.`
    },
    {
      terme: 'Croissant fertile',
      definition: `Vaste arc géographique allant du **Levant méditerranéen** (Israël, Liban, Syrie actuels) à la **Mésopotamie** (Irak) en passant par l'**Anatolie** (Turquie). Berceau le plus précoce de l'agriculture vers **-10 000**, grâce à une concentration exceptionnelle d'espèces potentiellement domesticables (blé, orge, mouton, chèvre, porc, bovin).`
    },
    {
      terme: 'Domestication',
      definition: `Processus pluri-millénaire de **sélection humaine** de plantes et d'animaux pour des caractères favorables : épis qui ne se brisent pas tout seuls, animaux dociles se reproduisant en captivité, fruits plus gros. **Co-évolution** : l'humain transforme l'espèce domestiquée, qui en retour devient dépendante de l'humain (le blé moderne ne sème plus seul).`
    },
    {
      terme: 'Sédentarisation',
      definition: `Passage d'un mode de vie nomade à un habitat **permanent** au même endroit. Souvent associée à l'agriculture, mais le cas de **Göbekli Tepe** (Anatolie, -9500) suggère qu'elle peut être motivée d'abord par le **rituel collectif**, l'agriculture suivant pour nourrir les bâtisseurs.`
    },
    {
      terme: 'Göbekli Tepe',
      definition: `Sanctuaire de cercles mégalithiques découvert en **1994** par *Klaus Schmidt* au sud-est de la Turquie. Daté **-9500**, soit **6 000 ans avant Stonehenge**. Piliers de calcaire de cinq mètres, plusieurs tonnes, sculptés d'animaux. **Construit par des chasseurs-cueilleurs nomades** — inverse la chronologie supposée entre sédentarisation et rituel.`
    },
    {
      terme: 'Foyers néolithiques',
      definition: `Régions du monde ayant développé **indépendamment** une agriculture à partir des espèces locales. Au moins six identifiés : **Croissant fertile** (-10 000), **Chine** (-7000, riz et millet), **Nouvelle-Guinée** (-7000, taro), **Méso-Amérique** (-5000, maïs), **Andes** (-4500, pomme de terre), **Afrique sub-saharienne** (-4000, sorgho). Le Néolithique est convergent, pas diffusionniste.`
    }
  ]

});
