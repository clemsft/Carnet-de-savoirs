/* ===================================================================
   SUJET — Le détroit de Taïwan
   ===================================================================
   La fracture géopolitique la plus dangereuse du monde.
   Domaine : Géopolitique
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'detroit-de-taiwan',
    titre: 'Le <em>détroit de Taïwan</em>',
    domaines: ['Géopolitique'],
    tags: ['chine', 'taiwan', 'usa', 'tsmc', 'semi-conducteurs'],
    difficulte: 3,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['ia-generative'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'Pourquoi un détroit de 180 km au large de la Chine est devenu le point de bascule possible de la géopolitique du XXIᵉ siècle. Une histoire d\'héritages historiques, de semi-conducteurs, et d\'une rivalité sino-américaine qui se cristallise sur 23 millions d\'habitants.',

  points_cles: [
    'Le **détroit de Taïwan** sépare l\'île de Taïwan de la Chine continentale, sur une largeur de **130 à 180 km**.',
    'Taïwan est administrée depuis **1949** par la République de Chine (ROC), réfugiée là après sa défaite dans la guerre civile chinoise face aux communistes de Mao.',
    'La **République populaire de Chine** considère Taïwan comme une province rebelle et prévoit, à terme, sa **réunification** — par la paix ou la force.',
    'Taïwan abrite **TSMC**, qui fabrique **plus de 90 %** des semi-conducteurs les plus avancés au monde — d\'où la notion de [bouclier de silicium]{accent}.',
    'Les États-Unis pratiquent une **ambiguïté stratégique** : ils ne reconnaissent pas formellement Taïwan, mais s\'engagent à fournir des armes pour sa défense.',
    'Depuis l\'élection en 2024 du président **Lai Ching-te**, les exercices militaires chinois autour de Taïwan se sont **multipliés** (en moyenne 300+ incursions/mois en zone ADIZ).',
    'Une **guerre** ou même un **blocus** y aurait des conséquences mondiales : on estime à **10 000 milliards $** le coût économique global d\'un conflit ouvert.'
  ],

  carte_mentale: {
    central: 'taiwan',
    noeuds: [
      { id: 'taiwan', label: 'Détroit de Taïwan', description: 'Bras de mer de 180 km au cœur de la rivalité sino-américaine.' },
      { id: 'histoire', label: 'Héritage historique', description: 'Une île, plusieurs colonisations, une guerre civile non terminée.' },
      { id: 'tsmc', label: 'TSMC et les puces', description: 'Le géant taïwanais qui fabrique l\'essentiel des semi-conducteurs avancés mondiaux.' },
      { id: 'pression', label: 'Pression chinoise', description: 'Exercices militaires, intrusions dans l\'ADIZ, guerre informationnelle, pression économique.' },
      { id: 'usa', label: 'Position américaine', description: 'Ambiguïté stratégique, ventes d\'armes, garanties implicites.' },
      { id: 'scenarios', label: 'Scénarios', description: 'Statu quo, blocus, débarquement, négociation : plusieurs voies possibles, aucune simple.' },
      { id: 'cout', label: 'Coût mondial', description: 'Un conflit pourrait coûter à l\'économie mondiale jusqu\'à **10 000 milliards $**, soit ~10 % du PIB mondial.' },

      // Histoire
      { id: '1949', label: '1949 : la fuite du KMT', description: 'Tchang Kaï-chek, vaincu par Mao, se réfugie à Taïwan avec 1,2 million de partisans. La République de Chine s\'installe sur l\'île.', parent: 'histoire' },
      { id: '1979', label: '1979 : reconnaissance de Pékin', description: 'Les États-Unis transfèrent leur reconnaissance diplomatique de Taïpei à Pékin. **Taïwan perd** son statut diplomatique mais conserve un soutien implicite.', parent: 'histoire' },
      { id: '1996', label: '1996 : crise des missiles', description: 'Pékin tire des missiles près de Taïwan pour intimider lors d\'une élection. Les États-Unis envoient deux porte-avions. **Première crise majeure** post-guerre froide.', parent: 'histoire' },
      { id: '2024', label: '2024 : élection de Lai', description: 'Lai Ching-te (DPP, indépendantiste) devient président. Pékin le qualifie de "séparatiste". Les exercices militaires chinois s\'intensifient.', parent: 'histoire' },

      // TSMC
      { id: 'foundry', label: 'Fonderie n°1', description: '**TSMC contrôle 70 %** du marché mondial de la fonderie de semi-conducteurs et **90+ %** de l\'avancé.', parent: 'tsmc' },
      { id: 'arizona', label: 'Délocalisation USA', description: 'Sous pression américaine, TSMC investit **100 milliards $** dans des fabs en Arizona. Mais le cœur reste à Taïwan.', parent: 'tsmc' },
      { id: 'shield', label: 'Bouclier de silicium', description: 'Théorie selon laquelle TSMC est si stratégique pour l\'économie mondiale qu\'aucune puissance ne peut accepter de le voir détruit ou capturé.', parent: 'tsmc' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Une <em>île</em>, deux Chines, une question',
      contenu_md:
`Taïwan est une île d\'environ 36 000 km² (un peu plus que la Belgique) située à **130-180 km** des côtes chinoises. Elle compte **23 millions d\'habitants**, parle majoritairement le mandarin, possède un PIB par habitant supérieur à celui de la Corée du Sud ou du Japon. Démocratie multipartite vibrante depuis les années 1990, elle est l\'**une des économies les plus avancées d\'Asie**.

Et pourtant, **Taïwan n\'est pas reconnue par l\'ONU**. Elle ne dispose de relations diplomatiques officielles qu\'avec une douzaine de petits pays. Officiellement, pour la quasi-totalité du monde, elle n\'existe pas en tant qu\'État.

D\'où vient cette anomalie ? D\'une **guerre civile** qui n\'a jamais été officiellement terminée — celle qui, en 1949, a opposé les **communistes** de Mao Zedong et les **nationalistes** de Tchang Kaï-chek. Les communistes ont gagné le continent. Les nationalistes se sont réfugiés à Taïwan, emportant avec eux le drapeau, la trésorerie, et la prétention à représenter la Chine légitime.

Soixante-dix ans plus tard, le différend n\'est toujours pas résolu.`
    },

    {
      type: 'widget',
      titre: 'Soixante-quinze ans de tensions',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1949', titre: 'Fuite du Kuomintang', description: 'Tchang Kaï-chek, vaincu par les communistes, se replie à Taïwan avec **1,2 million** de partisans. La République de Chine se proclame en exil.' },
          { date: '1971', titre: 'L\'ONU bascule', description: 'L\'Assemblée générale transfère le siège de la Chine de Taïpei à Pékin. **Taïwan perd** son statut international.' },
          { date: '1979', titre: 'Reconnaissance américaine de Pékin', description: 'Washington transfère sa reconnaissance diplomatique. Le **Taiwan Relations Act** de la même année maintient toutefois ventes d\'armes et soutien implicite.' },
          { date: '1996', titre: 'Crise des missiles', description: 'Pékin tire des missiles à proximité de l\'île pour intimider l\'élection présidentielle. Les **États-Unis** déploient deux porte-avions. Première grande alerte.' },
          { date: '2008-2016', titre: 'Détente du Kuomintang', description: 'Le KMT revient au pouvoir à Taïpei et cherche un rapprochement économique avec Pékin. Les tensions baissent temporairement.' },
          { date: '2016-2024', titre: 'Tsai Ing-wen au pouvoir', description: 'Le **DPP** (parti pro-souveraineté) gagne la présidence. Pékin coupe les contacts officiels et durcit le ton.' },
          { date: 'Mai 2024', titre: 'Lai Ching-te président', description: 'Le DPP enchaîne. Pékin qualifie Lai de **"séparatiste"** et intensifie les manœuvres militaires.' },
          { date: '2025-2026', titre: 'Nouveau régime de pression', description: 'Exercices simulant un blocus, **300+ incursions ADIZ par mois** en moyenne. Le terme officiel passe de "s\'opposer à l\'indépendance" à **"écraser l\'indépendance"**.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'L\'<em>ambiguïté stratégique</em> américaine',
      contenu_md:
`Officiellement, les États-Unis adoptent depuis 1979 une politique dite [d\'ambiguïté stratégique]{accent}. Elle consiste à **ne jamais préciser** ce que Washington ferait en cas d\'invasion chinoise — ni promettre une intervention militaire, ni l\'exclure.

L\'objectif est double : **dissuader** la Chine de tenter quoi que ce soit (par la peur d\'une riposte américaine), tout en **dissuadant** Taïwan de proclamer formellement son indépendance (par la crainte d\'être abandonnée). Marcher sur le fil.

Concrètement, le **Taiwan Relations Act** de 1979 oblige les États-Unis à fournir à Taïwan des armes défensives. Les ventes ont massivement augmenté ces dernières années — le dernier paquet majeur, **11 milliards $**, a été approuvé fin 2025.

Le président Trump a déclaré début 2026 ne pas croire que la Chine envisageait une invasion à court terme. Mais les analyses militaires américaines pointent **2027-2030** comme une fenêtre où Pékin disposerait des capacités requises pour réussir une opération amphibie majeure.`
    },

    {
      type: 'encadre',
      label: 'Pourquoi cette ambiguïté ?',
      contenu_md: 'Une garantie explicite de défense pousserait Taïwan à proclamer son indépendance, et provoquerait une **réaction militaire chinoise immédiate**. Une absence totale de garantie signalerait à Pékin que la voie est libre. L\'ambiguïté maintient les deux parties dans l\'incertitude, et donc dans le statu quo. Elle fonctionne depuis 45 ans. Tout le défi est de savoir **combien de temps elle peut encore tenir**.'
    },

    {
      type: 'texte',
      titre: 'Le <em>bouclier de silicium</em>',
      contenu_md:
`Pourquoi un détroit en mer de Chine intéresse-t-il Bruxelles, Berlin, Washington ou Tokyo ? Une raison principale, en trois lettres : **TSMC**.

Taiwan Semiconductor Manufacturing Company, fondée en 1987 à Hsinchu par Morris Chang, est le **plus grand fabricant de puces** au monde. Ses chiffres en 2025-2026 sont éloquents :
- **70 %** du marché mondial de la fonderie de semi-conducteurs
- **plus de 90 %** des puces les plus avancées (≤ 5 nm)
- fournisseur principal d\'**Apple**, **Nvidia**, **AMD**, **Qualcomm**
- **35 %** des microcontrôleurs automobiles mondiaux

Sans les puces de TSMC, plus d\'iPhones nouveaux. Plus de cartes graphiques pour entraîner GPT et Claude. Plus de voitures. La civilisation numérique mondiale dépend d\'un seul site, dans une seule ville, sur une île que la Chine revendique.

C\'est ce que les analystes appellent le [bouclier de silicium]{accent} : l\'idée que la concentration industrielle de Taïwan rend une invasion, ou même une destruction, **impensable** — pour la Chine elle-même qui dépend des puces, et pour le reste du monde qui ne peut tolérer une telle perturbation.`
    },

    {
      type: 'widget',
      titre: 'Quelques chiffres qui éclairent l\'enjeu',
      composant: 'SelecteurValeurs',
      params: {
        unite: '',
        indexInitial: 0,
        options: [
          { label: 'Distance Chine-Taïwan', valeur: '180 km', description: 'Moins large que la Manche au plus serré (33 km). Mais nettement plus que pour un débarquement classique : Normandie 1944 = 160 km depuis l\'Angleterre.' },
          { label: 'Population Taïwan', valeur: '23 M', description: 'Habitants. Démocratie active. PIB par habitant ~33 000 $.' },
          { label: 'Part TSMC dans la fonderie', valeur: '70%', description: 'Du marché mondial des semi-conducteurs sous-traités. Et **plus de 90 %** des nœuds avancés.' },
          { label: 'Incursions ADIZ', valeur: '300+/mois', description: 'Moyenne mensuelle des incursions militaires chinoises dans la zone d\'identification de défense aérienne taïwanaise depuis 2024.' },
          { label: 'Coût mondial conflit', valeur: '10 000 Mds $', description: 'Selon l\'Institute for Economics and Peace : impact estimé d\'un conflit ouvert sur l\'économie globale. Soit ~10 % du PIB mondial.' },
          { label: 'Coût d\'un blocus', valeur: '2 700 Mds $', description: 'Même sans guerre, un blocus chinois prolongé coûterait des trillions à l\'économie mondiale.' },
          { label: 'Budget militaire chinois 2026', valeur: '278 Mds $', description: '+7 % par rapport à 2025. Le plus gros budget militaire mondial après celui des États-Unis.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Les <em>leviers</em> chinois',
      contenu_md: 'La Chine ne se limite pas aux exercices militaires. Sa stratégie de pression sur Taïwan combine quatre dimensions, déployées simultanément :'
    },

    {
      type: 'widget',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: 'Pression militaire (zone grise)',
            description: 'Incursions massives dans l\'ADIZ taïwanaise (300+ par mois en moyenne en 2024-2026), franchissements de la **ligne médiane** du détroit, exercices simulant un **blocus** ou un débarquement, patrouilles de garde-côtes autour des îles éloignées comme **Kinmen**.'
          },
          {
            titre: 'Isolement diplomatique',
            description: 'Pression continue sur les pays tiers pour qu\'ils rompent leurs liens diplomatiques avec Taïpei. **Onze pays seulement** reconnaissent encore officiellement Taïwan. Exclusion systématique des organisations internationales (OMS, OACI...).'
          },
          {
            titre: 'Pression économique',
            description: 'Embargos ciblés (ananas, sable de construction, produits alimentaires) selon les épisodes politiques. Recrutement d\'ingénieurs taïwanais. Rachats discrets dans certains secteurs. La Chine reste le **premier partenaire commercial** de Taïwan, paradoxalement.'
          },
          {
            titre: 'Guerre informationnelle',
            description: 'Désinformation sur les réseaux sociaux, financement de candidats favorables au rapprochement, ingérence électorale, cyberattaques sur infrastructures critiques. Taïwan est l\'un des pays les plus ciblés au monde par les **cyberattaques**.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Les <em>scénarios</em>',
      contenu_md:
`Que peut-il se passer dans la décennie qui vient ? Les analystes en débattent activement.

**Scénario 1 — Statu quo prolongé.** Le plus probable à court terme. La Chine continue la pression sans franchir le seuil. Taïwan se réarme massivement. Les États-Unis maintiennent leur ambiguïté. Le coût d\'une action militaire reste trop élevé pour Pékin.

**Scénario 2 — Blocus.** Pékin tente d\'étrangler économiquement Taïwan sans débarquement direct. Stratégie testée lors d\'exercices comme **« Justice Mission 2025 »**. Avantages : pas d\'invasion à proprement parler, donc seuil de réponse occidentale plus flou. Risques : escalade rapide, perte économique mondiale immédiate.

**Scénario 3 — Opération militaire.** Débarquement amphibie ou prise d\'îles éloignées (Kinmen, Matsu). Probablement la fenêtre **2027-2030** si elle survient. Coût humain et économique colossal, dont une partie pour la Chine elle-même.

**Scénario 4 — Solution négociée.** Forme de coexistence acceptée par les deux parties. Très peu vraisemblable dans le climat actuel — les opinions publiques de chaque côté sont devenues largement irréconciliables.`
    },

    {
      type: 'encadre',
      label: 'Pourquoi cela nous concerne tous',
      contenu_md: 'Un conflit dans le détroit toucherait : la **disponibilité mondiale** des semi-conducteurs (donc voitures, électronique grand public, IA — voir [[ia-generative]]), les **routes commerciales** asiatiques (50 % du fret mondial passe par les détroits adjacents), les **alliances stratégiques** (intervention possible des USA, du Japon, peut-être de l\'Australie), et probablement les **prix de l\'énergie** mondiale dans les semaines suivantes. Le détroit de Taïwan n\'est pas une affaire régionale. C\'est probablement le sujet géopolitique le plus systémique du moment.'
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Taïwan est officiellement reconnue par l\'ONU comme un État membre.',
      reponse: false,
      explication: 'Taïwan a perdu son siège à l\'ONU en 1971 lorsque l\'Assemblée générale a transféré la représentation de la Chine de Taïpei à Pékin. Seule une douzaine de petits pays maintiennent aujourd\'hui des relations diplomatiques officielles avec Taïpei.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces dates clés du dossier taïwanais dans l\'ordre :',
      items: [
        'Fuite du Kuomintang à Taïwan',
        'L\'ONU transfère le siège de la Chine de Taïpei à Pékin',
        'Les États-Unis reconnaissent diplomatiquement la RPC',
        'Visite de Nancy Pelosi à Taïpei'
      ],
      explication: '1949 (séparation Tchang Kaï-chek/Mao) → 1971 (ROC remplacée par RPC à l\'ONU) → 1979 (Washington reconnaît Pékin et adopte le Taiwan Relations Act) → 2022 (visite très tendue de la speaker Pelosi).'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète :',
      texte: 'L\'entreprise {TSMC}, basée à Taïwan, fabrique plus de {90}% des semi-conducteurs les plus avancés au monde — d\'où la notion de bouclier de silicium.',
      explication: 'Cette concentration extrême de la fabrication des puces avancées (≤ 5 nm) chez TSMC est la base du concept de "bouclier de silicium" : tout choc à Taïwan paralyserait l\'économie numérique mondiale.'
    },
    {
      q: 'Quelle est l\'origine historique de la séparation entre Taïwan et la Chine continentale ?',
      options: [
        'Un traité international signé en 1900',
        'La fuite à Taïwan en 1949 du gouvernement nationaliste de Tchang Kaï-chek, vaincu par les communistes de Mao',
        'L\'occupation japonaise jamais terminée',
        'Une décision de l\'ONU en 1971'
      ],
      correcte: 1,
      explication: 'En 1949, après leur défaite dans la guerre civile chinoise, les nationalistes du Kuomintang se replient à Taïwan avec environ 1,2 million de partisans. Ils y maintiennent la "République de Chine", tandis que Mao fonde sur le continent la "République populaire de Chine".'
    },
    {
      q: 'Que signifie l\'"ambiguïté stratégique" pratiquée par les États-Unis vis-à-vis de Taïwan ?',
      options: [
        'Reconnaître Taïwan officiellement comme État indépendant',
        'Ne jamais préciser publiquement si les États-Unis interviendraient militairement en cas d\'invasion chinoise',
        'Imposer des sanctions économiques à la Chine',
        'Ne pas vendre d\'armes à Taïwan'
      ],
      correcte: 1,
      explication: 'Cette politique vise à dissuader simultanément la Chine d\'attaquer (par crainte d\'une intervention) et Taïwan de proclamer formellement l\'indépendance (par crainte d\'être abandonnée). En vigueur depuis 1979.'
    },
    {
      q: 'Quelle est la part mondiale de TSMC dans la fabrication des puces les plus avancées (≤ 5 nm) ?',
      options: ['Environ 30 %', 'Environ 50 %', 'Plus de 90 %', 'Près de 100 %'],
      correcte: 2,
      explication: 'TSMC produit plus de 90 % des semi-conducteurs avancés mondiaux. Cette concentration extrême est la base du concept de "bouclier de silicium" : tout choc à Taïwan paralyserait l\'économie numérique mondiale.'
    },
    {
      q: 'Pourquoi parle-t-on d\'un "bouclier de silicium" pour Taïwan ?',
      options: [
        'Taïwan dispose d\'une arme secrète à base de silicium',
        'L\'industrie des semi-conducteurs taïwanaise est si critique pour l\'économie mondiale qu\'aucune puissance ne peut accepter sa destruction ou sa capture',
        'Les défenseurs taïwanais utilisent du silicium dans leurs blindages',
        'Une muraille géologique sépare Taïwan de la Chine'
      ],
      correcte: 1,
      explication: 'L\'idée est que la dépendance mondiale (incluant la Chine elle-même) à TSMC rend une invasion économiquement intolérable, et donc improbable. C\'est une dissuasion par interdépendance économique. Elle est cependant débattue.'
    },
    {
      q: 'Combien de pays reconnaissent encore officiellement Taïwan en 2026 ?',
      options: ['Plus de 100', 'Environ 50', 'Une douzaine', 'Aucun'],
      correcte: 2,
      explication: 'Seule une douzaine de petits pays (essentiellement en Amérique centrale et en Océanie) maintiennent des relations diplomatiques officielles avec Taïpei. La Chine met une pression continue pour réduire ce nombre.'
    },
    {
      q: 'Selon l\'Institute for Economics and Peace, à combien est estimé le coût d\'un conflit ouvert dans le détroit de Taïwan pour l\'économie mondiale ?',
      options: ['100 milliards $', '1 000 milliards $', '10 000 milliards $', '100 000 milliards $'],
      correcte: 2,
      explication: 'Environ 10 000 milliards $ — soit près de 10 % du PIB mondial. Bien plus que le coût total cumulé de la guerre en Ukraine. Même un simple blocus aurait un coût estimé à 2 700 milliards $.'
    },
    {
      q: 'Quels types d\'actions la Chine mène-t-elle régulièrement autour de Taïwan dans le cadre de la "guerre des zones grises" ?',
      options: [
        'Des bombardements ciblés',
        'Des incursions massives dans la zone d\'identification aérienne (ADIZ), des exercices simulant des blocus, des patrouilles autour des îles éloignées',
        'L\'envoi de troupes au sol',
        'Aucune, juste des protestations diplomatiques'
      ],
      correcte: 1,
      explication: '"Zone grise" : actions agressives sans franchir le seuil du conflit ouvert. En 2024-2026, plus de 300 incursions ADIZ par mois en moyenne, exercices "Justice Mission" simulant un blocus, patrouilles de garde-côtes autour de Kinmen et Pratas.'
    },
    {
      q: 'Quelle évolution majeure dans la rhétorique chinoise apparaît dans le rapport gouvernemental annuel 2026 ?',
      options: [
        'L\'ouverture à la négociation',
        'Le passage de "s\'opposer à l\'indépendance de Taïwan" à "écraser l\'indépendance de Taïwan"',
        'L\'abandon des revendications territoriales',
        'Un nouveau plan de développement économique commun'
      ],
      correcte: 1,
      explication: 'Le rapport gouvernemental annuel chinois de 2026 a remplacé "oppose Taiwan independence" par "crack down on Taiwan independence" (écraser). Durcissement rhétorique qui reflète la pression croissante depuis l\'élection de Lai Ching-te.'
    }
  ]

});
