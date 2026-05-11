/* ===================================================================
   SUJET — Le sommeil
   ===================================================================
   Un tiers de la vie, longtemps mal compris.
   Domaines : Biologie, Neurosciences
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'le-sommeil',
    titre: 'Le <em>sommeil</em>',
    domaines: ['Biologie', 'Sciences cognitives'],
    tags: ['cerveau', 'rêve', 'cycles', 'mémoire', 'santé'],
    difficulte: 1,
    duree_estimee_min: 25,
    prerequis: [],
    lie_a: ['systeme-immunitaire'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'Comprendre ce que ton cerveau fait pendant qu\'il a l\'air de ne rien faire — et pourquoi un tiers de ta vie est en réalité l\'un des processus biologiques les plus actifs et les moins facultatifs qui soient.',

  points_cles: [
    'Tu passes environ **un tiers de ta vie** à dormir — soit, à 90 ans, **30 ans cumulés**.',
    'Le sommeil n\'est pas un état uniforme : il alterne entre **sommeil lent** (4 stades de plus en plus profonds) et **sommeil paradoxal** (REM), associé aux rêves les plus narratifs.',
    'Une nuit type comporte **4 à 6 cycles** d\'environ 90 minutes, alternant lent et paradoxal.',
    'Pendant le sommeil profond, le cerveau **consolide la mémoire** et le **système glymphatique** évacue les déchets métaboliques accumulés en éveil.',
    'L\'horloge biologique interne (le **noyau suprachiasmatique**) règle ton cycle veille-sommeil sur environ 24 h, calée par la lumière du jour.',
    'La **dette de sommeil** chronique (moins de 6h/nuit régulièrement) est associée à une augmentation des risques cardiovasculaires, métaboliques et cognitifs.',
    'Les besoins varient selon l\'âge : **14-17 h** pour un nourrisson, **9-11 h** pour un enfant, **7-9 h** pour un adulte, ~7 h pour une personne âgée.'
  ],

  carte_mentale: {
    central: 'sommeil',
    noeuds: [
      { id: 'sommeil', label: 'Sommeil', description: 'État physiologique réversible de baisse de la conscience et de la réactivité, structuré en cycles.' },
      { id: 'cycles', label: 'Cycles et stades', description: 'Le sommeil alterne en cycles de ~90 min, mêlant sommeil lent (léger puis profond) et sommeil paradoxal (REM).' },
      { id: 'horloge', label: 'Horloge biologique', description: 'Système interne qui régule veille-sommeil sur ~24h, calé par la lumière.' },
      { id: 'fonctions', label: 'Fonctions du sommeil', description: 'Consolidation mémoire, nettoyage cérébral, régulation hormonale, immunité, croissance.' },
      { id: 'reves', label: 'Les rêves', description: 'Activité mentale du sommeil paradoxal principalement. Encore largement énigmatiques.' },
      { id: 'troubles', label: 'Troubles du sommeil', description: 'Insomnie, apnées, narcolepsie, syndrome des jambes sans repos.' },
      { id: 'dette', label: 'Dette de sommeil', description: 'Accumulation des manques. Effets cognitifs, métaboliques, cardiovasculaires délétères à long terme.' },

      // Cycles
      { id: 'lent-leger', label: 'Lent léger (N1-N2)', description: 'Endormissement et sommeil léger. Le rythme cardiaque ralentit, la température baisse.', parent: 'cycles' },
      { id: 'lent-profond', label: 'Lent profond (N3)', description: 'Le **plus réparateur**. Ondes cérébrales lentes (delta). Le réveil y est difficile et désagréable. C\'est aussi là que le système glymphatique est le plus actif.', parent: 'cycles' },
      { id: 'paradoxal', label: 'Paradoxal (REM)', description: 'Cerveau actif, presque comme à l\'éveil. Mouvements oculaires rapides. Atonie musculaire. **Rêves** les plus narratifs et émotionnels.', parent: 'cycles' },

      // Fonctions
      { id: 'memoire', label: 'Mémoire', description: 'Le sommeil consolide les apprentissages de la journée. Faits, gestes, émotions sont triés et stabilisés.', parent: 'fonctions' },
      { id: 'glymphatique', label: 'Système glymphatique', description: 'Découvert en **2012**. Les espaces entre les neurones se dilatent pendant le sommeil, permettant au liquide céphalo-rachidien de **chasser les déchets**, dont la protéine bêta-amyloïde liée à Alzheimer.', parent: 'fonctions' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Pourquoi <em>dormir</em> ?',
      contenu_md:
`Sur le papier, le sommeil est une absurdité évolutive. Pendant **un tiers** de ta vie, tu es vulnérable, immobile, inconscient. Tu ne peux ni manger, ni te reproduire, ni fuir un prédateur. Pour qu\'une telle « invention » biologique ait été conservée par la sélection naturelle pendant des centaines de millions d\'années — chez tous les vertébrés, les insectes, et même les vers nématodes —, il faut qu\'elle remplisse des fonctions **absolument essentielles**.

Pendant longtemps, on croyait que le sommeil servait simplement à « se reposer ». La recherche des dernières décennies a montré qu\'il fait infiniment plus que cela. C\'est pendant que tu dors que ton cerveau **consolide tes apprentissages**, que tes hormones de croissance se libèrent, que ton [[systeme-immunitaire]] renforce ses défenses, et — découverte récente — que ton cerveau **se nettoie** lui-même de ses déchets métaboliques.

Tu ne dors pas parce que tu es fatigué. Tu es fatigué parce que ton corps doit *faire* des choses qui ne peuvent être faites qu\'endormi.`
    },

    {
      type: 'texte',
      titre: 'Cinq <em>stades</em> alternés en cycles',
      contenu_md:
`Avant le milieu du XXᵉ siècle, on croyait que le sommeil était un état **uniforme** — un long couloir d\'inactivité. L\'invention de l\'**électroencéphalogramme** (EEG) dans les années 1930, puis l\'identification du sommeil paradoxal par **Aserinsky et Kleitman** en **1953**, ont tout changé.

Une nuit normale n\'est pas une longue traversée plate, c\'est une **succession de cycles** d\'environ 90 minutes. Chaque cycle suit le même schéma : tu plonges progressivement vers les stades de sommeil de plus en plus profonds (N1 → N2 → N3), puis tu remontes vers une phase courte de sommeil **paradoxal** (REM) avant de redescendre.

Tu enchaînes typiquement **4 à 6 cycles** par nuit. La répartition n\'est pas équivalente : le **sommeil profond** domine en première partie de nuit, le **sommeil paradoxal** s\'allonge au fil des cycles, prenant des proportions importantes au petit matin. C\'est pourquoi se priver de sommeil en se levant plus tôt sacrifie surtout les rêves.`
    },

    {
      type: 'widget',
      titre: 'Les trois grandes phases d\'un cycle',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: '~50 % du temps total',
            titre: 'Sommeil lent léger (N1-N2)',
            description: 'Endormissement (N1, quelques minutes) puis sommeil léger (N2). Le rythme cardiaque ralentit, la température baisse. Tu y passes la majorité de ta nuit. Réveil facile.'
          },
          {
            tag: '~20 % du temps total',
            titre: 'Sommeil lent profond (N3)',
            description: 'La phase la plus **réparatrice**. Ondes cérébrales lentes et amples (ondes delta). Le réveil y est difficile et confus. Concentré en début de nuit. C\'est là que le **système glymphatique** est le plus actif.'
          },
          {
            tag: '~25 % du temps total',
            titre: 'Sommeil paradoxal (REM)',
            description: 'Cerveau presque aussi actif qu\'à l\'éveil. **Mouvements oculaires rapides** (Rapid Eye Movement). Muscles paralysés (sauf yeux et respiration) — le cerveau « débranche » volontairement les sorties motrices. **Rêves narratifs**. Phases plus longues vers le matin.'
          }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'Pourquoi "paradoxal" ?',
      contenu_md: 'Le **sommeil paradoxal** a été nommé ainsi par **Michel Jouvet** en 1959. Le paradoxe : ton cerveau y est aussi actif qu\'à l\'éveil, ton activité métabolique cérébrale est élevée, tes yeux bougent rapidement — pourtant tu es **plus difficile à réveiller** qu\'en sommeil léger, et tes muscles sont totalement paralysés (atonie). Tout fonctionne comme si tu étais éveillé... sauf que tu ne l\'es pas.'
    },

    {
      type: 'texte',
      titre: 'L\'horloge <em>interne</em>',
      contenu_md:
`Le cycle veille-sommeil est régi par une horloge biologique interne — le [rythme circadien]{accent} (du latin *circa diem*, « environ un jour »). Son chef d\'orchestre est un petit groupe de neurones du cerveau, le **noyau suprachiasmatique**, situé juste au-dessus du chiasma optique.

Il bat sur une période d\'environ **24,2 heures** spontanément. Légèrement plus que 24 h, donc — c\'est pourquoi nous dérivons naturellement vers des heures plus tardives quand nous sommes coupés de tout repère temporel (expériences en grottes, par exemple).

Cette horloge est en permanence **recalée par la lumière**. Des cellules ganglionnaires de la rétine (récemment découvertes : à mélanopsine) signalent au noyau suprachiasmatique l\'éclairement ambiant. La lumière du matin avance la phase ; la lumière du soir la retarde. C\'est pour cette raison que les écrans le soir, qui émettent des longueurs d\'onde courtes (bleues), perturbent l\'endormissement chez nombre de personnes.

Sur ce cycle dépendent l\'**alternance veille-sommeil**, mais aussi la **température corporelle** (minimum vers 4-5 h du matin), la **vigilance**, le métabolisme, et la sécrétion d\'hormones — notamment la **mélatonine**, sécrétée à partir du soir et qui amorce l\'endormissement.`
    },

    {
      type: 'widget',
      titre: 'Combien faut-il dormir ?',
      composant: 'SelecteurValeurs',
      params: {
        unite: 'h',
        indexInitial: 3,
        options: [
          { label: 'Nourrisson (0-1 an)', valeur: '14-17', description: 'Sommeil très fragmenté, sans rythme circadien stable avant ~3 mois. Le sommeil paradoxal y représente près de 50 % du temps total.' },
          { label: 'Enfant (4-12 ans)', valeur: '9-11', description: 'Le sommeil profond est particulièrement abondant, indispensable au développement cérébral et à la croissance.' },
          { label: 'Adolescent (13-18 ans)', valeur: '8-10', description: 'L\'horloge biologique se décale physiologiquement — l\'adolescent a tendance à se coucher et à se lever plus tard. Conflit avec les horaires scolaires.' },
          { label: 'Adulte (18-64 ans)', valeur: '7-9', description: 'Recommandation de la **National Sleep Foundation**. La grande majorité des adultes a besoin de 7-9 h ; en dessous, on est en dette.' },
          { label: 'Personne âgée (65+)', valeur: '7-8', description: 'Sommeil plus fragmenté, plus léger, souvent en deux phases (sieste). Le besoin total ne diminue pas vraiment, mais l\'organisation change.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Ce que le <em>cerveau</em> y fait',
      contenu_md:
`On croyait jadis que le sommeil servait surtout au corps. Les neurosciences contemporaines montrent qu\'il sert avant tout au **cerveau**.

Pendant le sommeil **lent profond**, ton cerveau **consolide tes apprentissages**. Les souvenirs encodés dans l\'hippocampe pendant la journée sont rejoués en accéléré et progressivement transférés vers le cortex pour un stockage à long terme. C\'est pourquoi une nuit après l\'apprentissage améliore la mémorisation — phénomène robuste, mesuré dans des dizaines d\'études.

Pendant le sommeil **paradoxal**, ton cerveau semble plutôt **traiter les émotions** et **explorer des associations** entre concepts. Les rêves, dans cette interprétation, ne sont pas un message à interpréter : ils sont un sous-produit du fonctionnement cérébral en mode « brassage créatif ».

Et puis il y a la découverte la plus surprenante de la dernière décennie : le [système glymphatique]{accent}, identifié en **2012** par l\'équipe de **Maiken Nedergaard**. Pendant le sommeil profond, les espaces entre les neurones se **dilatent** d\'environ 60 %, et le liquide céphalo-rachidien circule alors massivement à travers le tissu cérébral, **emportant les déchets** métaboliques accumulés pendant l\'éveil — y compris la **bêta-amyloïde**, protéine impliquée dans la maladie d\'Alzheimer.

Une nuit de mauvais sommeil laisse littéralement ton cerveau « sale ».`
    },

    {
      type: 'encadre',
      label: 'L\'effet sur la santé',
      contenu_md: 'La **dette de sommeil** chronique (régulièrement moins de 6 h/nuit) est associée à un risque accru de **maladies cardiovasculaires**, de **diabète de type 2**, d\'**obésité**, de **dépression**, et — corrélation tenace, causalité débattue — de **maladie d\'Alzheimer**. Les études montrent qu\'au-delà de **17 heures d\'éveil continu**, les performances cognitives équivalent à celles d\'une personne ayant 0,5 g/l d\'alcool dans le sang. Au-delà de **24 heures**, équivalent 0,8 g/l. La privation de sommeil reste socialement valorisée — elle est pourtant biologiquement comparable à l\'ivresse permanente.'
    },

    {
      type: 'texte',
      titre: 'Et les <em>rêves</em> ?',
      contenu_md:
`Les rêves intriguent depuis l\'aube de l\'humanité. Ils étaient pour les anciens des messages des dieux. Pour Freud, des manifestations refoulées de l\'inconscient. Aujourd\'hui, la science n\'a pas de réponse définitive sur leur fonction — mais quelques pistes solides.

L\'écrasante majorité des rêves narratifs surviennent en **sommeil paradoxal**. Tout le monde rêve plusieurs fois par nuit, même ceux qui « ne rêvent jamais » — la différence est seulement dans la mémoire au réveil. Tu te souviens d\'un rêve **uniquement** si tu te réveilles pendant ou juste après son déroulement.

Plusieurs hypothèses cohabitent : **traitement émotionnel** (les expériences chargées de la journée sont rejouées pour être désamorcées), **simulation de menaces** (entraînement à des situations dangereuses, vestige évolutif utile), **consolidation créative** (associations inattendues entre souvenirs).

Les **cauchemars**, les **rêves lucides** (où tu es conscient de rêver), la **paralysie du sommeil** (tu te réveilles avant que l\'atonie musculaire ait disparu — état glaçant mais inoffensif) sont autant de phénomènes étudiés activement. Aucun n\'a encore trouvé d\'explication unifiée.`
    }

  ],

  quiz: [
    {
      q: 'Quelle est la durée moyenne d\'un cycle de sommeil chez l\'adulte ?',
      options: ['Environ 30 minutes', 'Environ 60 minutes', 'Environ 90 minutes', 'Environ 3 heures'],
      correcte: 2,
      explication: 'Un cycle dure environ 90 minutes et alterne sommeil lent (léger puis profond) et sommeil paradoxal. Une nuit complète compte 4 à 6 cycles.'
    },
    {
      q: 'Pourquoi appelle-t-on le sommeil "paradoxal" ?',
      options: [
        'Parce qu\'il est rare',
        'Parce que le cerveau y est aussi actif qu\'à l\'éveil, alors que le corps est totalement paralysé',
        'Parce qu\'il survient juste avant le réveil',
        'Parce qu\'on n\'y rêve pas'
      ],
      correcte: 1,
      explication: 'Tout fonctionne comme si tu étais éveillé (cerveau actif, métabolisme cérébral élevé, mouvements oculaires rapides), sauf que tu es paralysé (atonie musculaire) et plus difficile à réveiller. Nommé par le neurophysiologiste français Michel Jouvet en 1959.'
    },
    {
      q: 'Quel rôle joue le sommeil profond (N3) dans la mémoire ?',
      options: [
        'Aucun rôle',
        'Il consolide les apprentissages — les souvenirs sont transférés de l\'hippocampe vers le cortex pour un stockage durable',
        'Il efface tous les souvenirs de la journée',
        'Il rend les souvenirs imprécis'
      ],
      correcte: 1,
      explication: 'Pendant le sommeil profond, les souvenirs sont rejoués et progressivement transférés vers le cortex pour le long terme. Une nuit après un apprentissage améliore mesurablement la mémorisation — résultat robuste de la recherche en neurosciences.'
    },
    {
      q: 'Qu\'est-ce que le système glymphatique du cerveau ?',
      options: [
        'Un organe situé près du foie',
        'Un système découvert en 2012 qui, pendant le sommeil profond, évacue les déchets métaboliques du cerveau via le liquide céphalo-rachidien',
        'Un type de neurones',
        'L\'horloge biologique'
      ],
      correcte: 1,
      explication: 'Découvert par Maiken Nedergaard et son équipe en 2012. Pendant le sommeil profond, les espaces entre les neurones se dilatent et le liquide céphalo-rachidien circule à travers, évacuant notamment la bêta-amyloïde liée à Alzheimer. Une nuit blanche laisse littéralement ton cerveau "sale".'
    },
    {
      q: 'Combien d\'heures de sommeil sont recommandées pour un adulte en bonne santé ?',
      options: ['4-6 h', '7-9 h', '10-12 h', '12-14 h'],
      correcte: 1,
      explication: 'Recommandation de la National Sleep Foundation pour les 18-64 ans. La majorité des adultes ont besoin de 7-9 h pour fonctionner de manière optimale.'
    },
    {
      q: 'Sur quelle structure cérébrale repose principalement notre horloge biologique interne ?',
      options: [
        'L\'amygdale',
        'Le noyau suprachiasmatique, dans l\'hypothalamus',
        'Le cervelet',
        'Le corps calleux'
      ],
      correcte: 1,
      explication: 'Le noyau suprachiasmatique, situé juste au-dessus du chiasma optique dans l\'hypothalamus, est le chef d\'orchestre du rythme circadien. Il est recalé en permanence par la lumière transmise depuis la rétine.'
    },
    {
      q: 'Quelle est la conséquence cognitive d\'une nuit blanche complète (24 h sans sommeil) ?',
      options: [
        'Aucune si on a bien mangé',
        'Performances cognitives comparables à celles d\'une personne ayant environ 0,8 g/l d\'alcool dans le sang',
        'Une amélioration temporaire de la concentration',
        'Une plus grande créativité'
      ],
      correcte: 1,
      explication: 'Plusieurs études le confirment : 17 h sans sommeil = ~0,5 g/l d\'alcool en équivalent cognitif ; 24 h = ~0,8 g/l. La privation de sommeil reste socialement banalisée — elle est pourtant biologiquement comparable à l\'ivresse.'
    }
  ]

});
