/* ===================================================================
   SUJET — L'évolution des espèces
   ===================================================================
   La grande théorie unificatrice de la biologie.
   Domaine : Biologie
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'evolution-darwin',
    titre: `L'<em>évolution</em> des espèces`,
    domaines: ['Biologie'],
    tags: ['darwin', 'sélection naturelle', 'espèces', 'génétique', 'fossiles'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['adn-genetique', 'systeme-immunitaire', 'antibiotiques'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Comprendre l'idée la plus puissante de toute la biologie : pourquoi les êtres vivants sont si admirablement adaptés à leur milieu, et pourquoi ils changent — sans qu'aucun horloger ne les façonne — au fil des générations.`,

  points_cles: [
    `**Charles Darwin** publie *L'Origine des espèces* le **24 novembre 1859**, après plus de vingt ans d'hésitation. La première édition (1 250 exemplaires) est épuisée en un jour.`,
    `La **sélection naturelle** repose sur trois ingrédients : **variation** entre individus, **hérédité** des traits, **différence de reproduction** liée à ces traits. Aucun "but", aucun plan.`,
    `La théorie a été formulée **indépendamment** par **Alfred Russel Wallace** en 1858 ; les deux hommes la présentent conjointement à la **Linnean Society** de Londres avant publication.`,
    `Au XXᵉ siècle, la **synthèse néo-darwinienne** unit Darwin et la génétique de **Mendel** : les variations sont des mutations de l'**ADN**, transmises selon les lois de l'hérédité.`,
    `Quatre grands moteurs évolutifs : **sélection naturelle**, **dérive génétique** (hasard sur les petites populations), **mutations**, **flux de gènes** entre populations.`,
    `Les évidences sont multiples et convergentes : **fossiles** (séries transitionnelles), **anatomie comparée** (homologies), **biogéographie** (les îles Galápagos), **génétique** (arbre du vivant à partir de l'ADN), **observation directe** (bactéries, pinsons de Darwin, virus).`,
    `L'évolution n'a **pas de direction** : ni vers la complexité, ni vers l'humain. Elle est un processus opportuniste, court-termiste, qui ne sait pas ce qu'elle "fait".`,
    `Depuis le **séquençage ADN** systématique, l'arbre du vivant a été redessiné en profondeur : les bactéries, archées et eucaryotes forment les trois grands domaines, et certaines branches ont été permutées par rapport à la classification linnéenne.`
  ],

  carte_mentale: {
    central: 'evolution',
    noeuds: [
      { id: 'evolution', label: 'Évolution', description: `Changement des populations d'êtres vivants au fil des générations, à l'origine de la diversité du vivant.` },
      { id: 'darwin', label: 'Darwin & Wallace', description: `Les deux co-découvreurs de la théorie de la **sélection naturelle**, formulée indépendamment puis présentée conjointement en 1858.` },
      { id: 'mecanismes', label: 'Mécanismes', description: `Les forces motrices de l'évolution : sélection, dérive, mutations, flux de gènes.` },
      { id: 'speciation', label: 'Spéciation', description: `Comment une population se scinde en deux espèces incapables de se reproduire entre elles.` },
      { id: 'evidences', label: 'Évidences', description: `Les indices qui ont confirmé puis raffiné la théorie : fossiles, anatomie, génétique, biogéographie, observation.` },
      { id: 'neo-darwinisme', label: 'Néo-darwinisme', description: `Synthèse moderne unissant la sélection darwinienne et la génétique mendélienne puis moléculaire.` },
      { id: 'malentendus', label: 'Malentendus courants', description: `Idées fausses persistantes : "évolution = progrès", "le plus fort survit", "l'humain descend du singe".` },

      // Mécanismes
      { id: 'selection', label: 'Sélection naturelle', description: `Les individus mieux adaptés à leur milieu laissent plus de descendants. Sur des générations, leurs traits se répandent.`, parent: 'mecanismes' },
      { id: 'derive', label: 'Dérive génétique', description: `Variations aléatoires de fréquence des gènes, surtout marquées dans les petites populations. Pas adaptatives.`, parent: 'mecanismes' },
      { id: 'mutations', label: 'Mutations', description: `Source de toute variation : modifications aléatoires de l'[[adn-genetique]] lors de la réplication.`, parent: 'mecanismes' },
      { id: 'flux', label: 'Flux de gènes', description: `Échanges de matériel génétique entre populations par migration et reproduction.`, parent: 'mecanismes' },

      // Évidences
      { id: 'fossiles', label: 'Fossiles', description: `Séries transitionnelles : *Tiktaalik* (poisson-tétrapode), *Archaeopteryx* (dinosaure-oiseau), *Lucy* (hominidé bipède).`, parent: 'evidences' },
      { id: 'galapagos', label: 'Galápagos', description: `Les **pinsons de Darwin** : une même espèce ancestrale a donné 15 espèces différentes selon les îles et les ressources.`, parent: 'evidences' },
      { id: 'genetique', label: 'Génétique comparée', description: `L'ADN permet de reconstruire l'arbre du vivant. Humain et chimpanzé partagent **98,8 %** de leur ADN.`, parent: 'evidences' },

      // Spéciation
      { id: 'allopatrique', label: 'Allopatrique', description: `Séparation géographique (île, montagne, rivière). Le cas le plus commun.`, parent: 'speciation' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Une <em>idée</em> qui change tout`,
      contenu_md:
`Pourquoi un colibri a-t-il un long bec courbé qui s'ajuste parfaitement aux fleurs qu'il butine ? Pourquoi un ours polaire est-il blanc ? Pourquoi nos yeux fonctionnent-ils si bien ? Pendant des siècles, la réponse a paru évidente : parce qu'un créateur les a faits ainsi. La **complexité adaptée** des êtres vivants semblait l'argument le plus puissant en faveur d'une conception intentionnelle.

**Charles Darwin** propose, en **1859**, une réponse vertigineuse : tout cela peut s'expliquer sans aucun horloger, par un mécanisme purement mécanique — la [sélection naturelle]{accent}. À condition que trois ingrédients soient réunis, n'importe quelle forme d'adaptation peut émerger d'elle-même, par accumulation de petits avantages sur de très longues durées.

Les trois ingrédients sont d'une simplicité confondante :

1. Les individus d'une espèce **varient** entre eux (taille, couleur, comportement, résistance aux maladies...).
2. Une partie de ces variations est **héréditaire** — transmise des parents aux enfants.
3. Certaines variations confèrent un **avantage reproductif** dans le milieu donné : leurs porteurs laissent en moyenne plus de descendants.

Conséquence inéluctable : sur des générations, les variations avantageuses deviennent plus fréquentes dans la population. Sur des milliers de générations, ce mécanisme aveugle peut sculpter un œil, un cerveau, un système immunitaire complet.`
    },

    {
      type: 'texte',
      titre: `Darwin, le <em>Beagle</em> et vingt ans de doute`,
      contenu_md:
`Darwin n'est pas un théoricien isolé. C'est un jeune naturaliste passionné quand il embarque, en **1831**, à bord du **HMS Beagle** pour un tour du monde qui durera **cinq ans**. Le navire fait escale en Amérique du Sud, aux îles **Galápagos**, en Australie. Darwin collectionne des spécimens, observe la diversité biologique, et accumule les questions.

C'est aux Galápagos surtout — un archipel volcanique perdu dans le Pacifique, à 1 000 km des côtes équatoriennes — qu'il fait des observations décisives. Sur chaque île vit une variante différente d'une même famille de **pinsons**. Toutes très proches, mais aux becs subtilement adaptés à des régimes alimentaires distincts : graines dures, insectes, cactus. Comme si une espèce ancestrale unique, arrivée jadis du continent, avait *rayonné* en plusieurs formes sur des îles isolées.

De retour en Angleterre, Darwin construit méthodiquement sa théorie. Mais il hésite **plus de vingt ans** à publier — conscient du choc qu'elle causera. Il rassemble des montagnes de preuves, élève des pigeons pour observer la sélection artificielle, correspond avec des dizaines de spécialistes.

Le déclic survient en **juin 1858** : une lettre lui arrive d'Asie. Un jeune naturaliste, **Alfred Russel Wallace**, lui décrit exactement la même théorie, formulée indépendamment à partir de ses observations en Indonésie. Darwin se résout à publier. Les deux hommes présentent conjointement leurs travaux à la Linnean Society en juillet 1858 ; *L'Origine des espèces* paraît le **24 novembre 1859**.`
    },

    {
      type: 'widget',
      titre: `Repères chronologiques`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1809', titre: 'Lamarck', description: `**Jean-Baptiste de Lamarck** propose la première vraie théorie de l'évolution : les organismes se transforment au fil des générations, par hérédité des caractères **acquis** durant la vie. La mécanique est fausse, mais l'intuition pionnière.` },
          { date: '1831-1836', titre: 'Voyage du Beagle', description: `Darwin parcourt le monde pendant 5 ans. Observations décisives aux **Galápagos** sur les pinsons et les tortues.` },
          { date: '1858', titre: 'Lettre de Wallace', description: `**Alfred Russel Wallace** envoie à Darwin une théorie identique, conçue indépendamment. Présentation conjointe à la **Linnean Society** en juillet.` },
          { date: '1859', titre: `L'Origine des espèces`, description: `Publication le **24 novembre**. L'édition initiale est épuisée en un jour. Le livre déclenche un débat scientifique et religieux mondial.` },
          { date: '1865', titre: 'Mendel', description: `**Gregor Mendel** publie ses lois de l'hérédité sur des plants de pois. Ignoré pendant 35 ans, redécouvert en 1900.` },
          { date: '1930-1950', titre: 'Synthèse néo-darwinienne', description: `**Fisher**, **Haldane**, **Wright**, **Dobzhansky**, **Mayr** unissent Darwin et Mendel : les variations sont des mutations génétiques transmises selon les lois mendéliennes.` },
          { date: '1953', titre: `Structure de l'[[adn-genetique]]`, description: `Watson et Crick découvrent la structure en double hélice. Le **substrat moléculaire** des mutations et de l'hérédité est identifié.` },
          { date: '1973', titre: `"Rien en biologie n'a de sens..."`, description: `**Theodosius Dobzhansky** publie un essai célèbre dont le titre résume tout : « Rien en biologie n'a de sens, sinon à la lumière de l'évolution. »` },
          { date: '2010', titre: 'Génome de Néandertal', description: `**Svante Pääbo** (Nobel 2022) séquence l'ADN de Néandertal. Confirme que *Homo sapiens* a hybridé avec d'autres lignées humaines : 1-2 % du génome des Européens et Asiatiques est d'origine néandertalienne.` }
        ]
      }
    },

    {
      type: 'encadre',
      label: `Ce que Darwin n'a pas dit`,
      contenu_md: `Trois idées fausses tenaces. **Un** : Darwin n'a jamais dit que « **l'humain descend du singe** » — il a dit que l'humain et les singes actuels descendent d'un **ancêtre commun**, c'est différent. **Deux** : la formule « **survie du plus fort** » n'est pas de Darwin (elle est du philosophe Herbert Spencer) et trahit la théorie : ce n'est pas le « plus fort » qui survit, c'est le mieux **adapté** à son milieu — un microbe peut être plus adapté qu'un éléphant. **Trois** : l'évolution n'a **pas de direction** ni de but. Elle ne progresse pas vers la complexité ou l'intelligence ; elle produit ce qui se reproduit, point.`
    },

    {
      type: 'widget',
      titre: `Les quatre moteurs de l'évolution`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Adaptatif',
            titre: 'Sélection naturelle',
            description: `Les individus mieux adaptés laissent plus de descendants. Le seul mécanisme qui **construit des adaptations** complexes (œil, vol, intelligence). Lent, aveugle, opportuniste.`
          },
          {
            tag: 'Aléatoire',
            titre: 'Dérive génétique',
            description: `Variations aléatoires de fréquence des gènes d'une génération à l'autre, surtout dans les **petites populations**. Peut fixer des traits neutres, voire légèrement défavorables. Très important dans les goulots d'étranglement (espèces en danger).`
          },
          {
            tag: 'Source',
            titre: 'Mutations',
            description: `Modifications aléatoires de l'ADN lors de la réplication. La plupart sont neutres, certaines délétères, **très rarement bénéfiques**. Sans mutations, aucune variation nouvelle ne pourrait apparaître.`
          },
          {
            tag: 'Mélange',
            titre: 'Flux de gènes',
            description: `Échanges génétiques entre populations par migration et reproduction. Tend à **homogénéiser** les populations connectées. À l'inverse, son interruption favorise la divergence et la **spéciation**.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Naissance d'une <em>espèce</em>`,
      contenu_md:
`Comment passe-t-on d'une seule espèce à deux ? Le processus s'appelle [spéciation]{accent} et il est, par définition, lent — souvent **des centaines de milliers à des millions d'années**. Mais on en a parfois observé en direct.

Le scénario classique est la **spéciation allopatrique** : une barrière géographique (un océan, une chaîne de montagnes, un grand fleuve) sépare une population en deux groupes qui ne peuvent plus échanger de gènes. Chaque groupe évolue alors indépendamment, soumis à des pressions de sélection et à des dérives propres. Avec le temps, les différences s'accumulent. Au bout d'un certain seuil, même si la barrière disparaît, les deux groupes ne peuvent plus se reproduire fertilement entre eux : ils sont devenus deux espèces distinctes.

C'est exactement ce qu'a vu Darwin aux **Galápagos** : une espèce ancestrale de pinson, arrivée probablement d'Amérique du Sud, s'est dispersée sur des îles isolées les unes des autres par des dizaines de kilomètres d'océan. Sur chaque île, les pinsons ont divergé : ceux d'une île ont développé un bec robuste pour casser les graines dures, ceux d'une autre un bec fin pour saisir les insectes, ceux d'une troisième un bec long et pointu pour fouiller les fleurs de cactus. **15 espèces** distinctes aujourd'hui.

Le processus peut aussi être **sympatrique** (sans séparation géographique, par divergence écologique), ou résulter d'événements brutaux — duplication du génome chez les plantes, par exemple.`
    },

    {
      type: 'texte',
      titre: `Les <em>évidences</em>, convergentes`,
      contenu_md:
`Aucune théorie scientifique ne peut être tenue pour acquise sans preuves. Celles de l'évolution sont multiples, indépendantes, et convergent toutes vers la même conclusion.

**Les fossiles.** Le registre paléontologique montre une succession claire : pas de mammifères avant 200 millions d'années, pas de fleurs avant 140 millions d'années, pas d'humains modernes avant 300 000 ans. Surtout, on a découvert des **formes transitionnelles** prédites par la théorie : *Tiktaalik* (un poisson aux ébauches de pattes, 375 millions d'années) entre poissons et amphibiens ; *Archaeopteryx* (un petit dinosaure à plumes, 150 millions d'années) entre dinosaures et oiseaux ; *Lucy* et la longue série des hominidés bipèdes.

**L'anatomie comparée.** Le bras de l'humain, l'aile de la chauve-souris, la nageoire de la baleine, la patte du cheval ont tous le **même plan osseux** (humérus, radius, cubitus, carpe...). Réutilisation d'un plan ancestral, modifié pour des fonctions différentes : c'est exactement ce que prédit la descendance commune.

**La biogéographie.** L'Australie, isolée pendant 80 millions d'années, abrite une faune unique de **marsupiaux** (kangourous, koalas, diables de Tasmanie) qui ont rayonné en l'absence de mammifères placentaires. Coïncidence improbable, conséquence directe de l'isolement géologique.

**La génétique.** Depuis le séquençage ADN, on peut **reconstruire l'arbre du vivant** à partir des similitudes génétiques. L'arbre obtenu coïncide largement avec celui qu'on avait dessiné par l'anatomie — confirmation forte. L'humain et le chimpanzé partagent **98,8 %** de leur ADN ; nous partageons même environ **60 %** de gènes communs avec une banane.

**L'observation directe.** L'évolution rapide est mesurable de notre vivant. Les bactéries qui développent une résistance aux [[antibiotiques]] en quelques années en sont l'illustration la plus pressante. Les pinsons des Galápagos, dont les becs changent mesurablement à chaque sécheresse, étudiés sur **40 ans** par Peter et Rosemary Grant.`
    },

    {
      type: 'widget',
      titre: `Quelques distances génétiques avec l'humain`,
      composant: 'SelecteurValeurs',
      params: {
        unite: '% ADN partagé',
        indexInitial: 1,
        options: [
          { label: 'Chimpanzé', valeur: '98,8', description: `Notre plus proche parent vivant. Séparation il y a environ **6 à 7 millions d'années**. Différences génétiques étonnamment minces pour des cerveaux et comportements aussi distincts.` },
          { label: 'Gorille', valeur: '98,4', description: `Le gorille s'est séparé de notre lignée il y a ~10 millions d'années, peu avant la séparation chimpanzé-humain.` },
          { label: 'Souris', valeur: '~85', description: `Mammifère placentaire comme nous. Ancêtre commun il y a ~80 millions d'années. Très utilisée en recherche biomédicale pour cette raison.` },
          { label: 'Poulet', valeur: '~65', description: `Reptile/oiseau, ancêtre commun avec les mammifères il y a ~310 millions d'années.` },
          { label: 'Drosophile', valeur: '~60', description: `Mouche du vinaigre. Pour 75 % des gènes liés à des maladies humaines, on trouve un équivalent fonctionnel chez la drosophile.` },
          { label: 'Banane', valeur: '~60', description: `Beaucoup de gènes très fondamentaux (métabolisme, réplication, etc.) sont communs à tout le vivant cellulaire.` },
          { label: `E. coli`, valeur: '~7-10', description: `Bactérie de notre intestin. Les ressemblances les plus profondes : ribosomes, ATP, code génétique universel — tout indique un ancêtre commun.` }
        ]
      }
    },

    {
      type: 'encadre',
      label: `L'évolution, à l'œuvre sous nos yeux`,
      contenu_md: `On entend parfois : « si l'évolution était vraie, on la verrait se produire ». On la voit. Les **résistances bactériennes** apparaissent en quelques années dans les hôpitaux (voir [[antibiotiques]]). Le **système immunitaire** lui-même fonctionne par sélection darwinienne accélérée à l'échelle d'une infection (voir [[systeme-immunitaire]]). Les **pinsons de Darwin** changent de bec en réponse aux sécheresses, mesurablement, à chaque génération. Les **virus** mutent sous nos yeux : la grippe saisonnière est suivie en temps réel par l'OMS pour suivre l'évolution des souches. L'évolution n'est pas une hypothèse pour le lointain — c'est une réalité quotidienne.`
    },

    {
      type: 'texte',
      titre: `Le <em>néo-darwinisme</em> et ses extensions`,
      contenu_md:
`Darwin n'avait pas accès aux gènes. Il savait que les caractères se transmettaient — il ne savait pas *comment*. Au XXᵉ siècle, l'union de sa théorie et de la **génétique mendélienne** donne naissance à ce qu'on appelle la **synthèse néo-darwinienne** ou **théorie synthétique de l'évolution**. Formalisée entre les années 1930 et 1950 par **Fisher**, **Haldane**, **Wright**, **Dobzhansky**, **Mayr** et d'autres.

L'idée clé : les variations darwiniennes sont des **mutations de l'ADN**, qui modifient les gènes, qui se transmettent selon les lois de Mendel. La sélection naturelle agit alors sur la fréquence des allèles (variantes d'un gène) dans une population. La **génétique des populations** devient ainsi une discipline mathématique précise, dont les équations prédisent comment une mutation favorable se répand.

Avec le **séquençage** systématique de l'ADN depuis les années 1990, la théorie a été enrichie : on a découvert le rôle massif de l'**ADN non codant**, de la **régulation des gènes**, des **transferts horizontaux** chez les bactéries, et de phénomènes comme l'**hybridation** entre espèces voisines (notre génome contient 1 à 2 % d'ADN néandertalien).

Aujourd'hui, l'évolution n'est plus discutée dans son principe — elle est **le cadre unificateur** de toute la biologie moderne. Comme l'a écrit Dobzhansky en 1973 dans une formule restée célèbre : « **Rien en biologie n'a de sens, sinon à la lumière de l'évolution.** »`
    }

  ],

  quiz: [
    {
      type: 'associer',
      q: 'Associe chaque concept à son auteur principal :',
      paires: [
        { gauche: 'Sélection naturelle', droite: 'Charles Darwin' },
        { gauche: 'Lois de l\'hérédité (génétique)', droite: 'Gregor Mendel' },
        { gauche: 'Hérédité des caractères acquis', droite: 'Jean-Baptiste de Lamarck' },
        { gauche: 'Synthèse moderne (génétique + sélection)', droite: 'Theodosius Dobzhansky' }
      ],
      explication: 'La théorie évolutionniste s\'est construite par étapes : Lamarck (transformisme avant Darwin), Darwin (mécanisme de sélection naturelle, 1859), Mendel (lois de l\'hérédité, redécouvertes en 1900), puis la synthèse néo-darwinienne du XXᵉ siècle qui fusionne génétique et sélection.'
    },
    {
      q: `En quelle année Darwin publie-t-il L'Origine des espèces ?`,
      options: [`1809`, `1831`, `1859`, `1900`],
      correcte: 2,
      explication: `Le livre paraît le 24 novembre 1859, après plus de vingt ans de travail méticuleux. La première édition (1 250 exemplaires) est épuisée en un jour. Darwin avait initialement prévu d'écrire un ouvrage encore plus volumineux, mais la lettre de Wallace l'a poussé à publier rapidement.`
    },
    {
      q: `Quels sont les trois ingrédients nécessaires à la sélection naturelle ?`,
      options: [
        `Force, vitesse, intelligence`,
        `Variation entre individus, hérédité des traits, différence de reproduction selon ces traits`,
        `Mutation, climat, prédation`,
        `Reproduction sexuée, longue vie, environnement stable`
      ],
      correcte: 1,
      explication: `Ces trois conditions, si elles sont réunies, suffisent à enclencher une dérive cumulative des populations. C'est l'argument logique central de Darwin : aucun élément surnaturel n'est nécessaire pour expliquer l'adaptation des êtres vivants à leur milieu.`
    },
    {
      q: `Qui a formulé indépendamment la théorie de la sélection naturelle en même temps que Darwin ?`,
      options: [
        `Gregor Mendel`,
        `Alfred Russel Wallace`,
        `Jean-Baptiste de Lamarck`,
        `Louis Pasteur`
      ],
      correcte: 1,
      explication: `Wallace, alors en Indonésie, envoie en 1858 à Darwin un manuscrit décrivant essentiellement la même théorie. Les deux hommes présentent conjointement leurs travaux à la Linnean Society de Londres en juillet 1858 ; Darwin publie L'Origine des espèces l'année suivante.`
    },
    {
      q: `Quel est le rôle des mutations dans l'évolution ?`,
      options: [
        `Elles dirigent l'évolution vers la complexité`,
        `Elles sont toujours nuisibles`,
        `Elles sont la source aléatoire de toute variation génétique nouvelle`,
        `Elles n'existent pas chez les espèces stables`
      ],
      correcte: 2,
      explication: `Les mutations sont des modifications aléatoires de l'ADN. La plupart sont neutres, certaines délétères, très rarement bénéfiques. Mais sans elles, aucune variation nouvelle ne pourrait apparaître — elles fournissent le "matériau brut" sur lequel la sélection agit ensuite.`
    },
    {
      q: `Qu'est-ce qui distingue la "sélection naturelle" de la "dérive génétique" ?`,
      options: [
        `Aucune différence`,
        `La sélection favorise les traits avantageux ; la dérive est un changement aléatoire de fréquence des gènes, surtout marqué dans les petites populations`,
        `La sélection est rapide, la dérive est lente`,
        `La sélection touche les animaux, la dérive les plantes`
      ],
      correcte: 1,
      explication: `La sélection naturelle est non-aléatoire (elle "favorise" statistiquement les traits adaptatifs) ; la dérive est purement aléatoire et peut fixer des traits neutres voire défavorables, surtout quand la population est petite (goulots d'étranglement, fondateurs).`
    },
    {
      q: `Quel pourcentage de leur ADN un humain et un chimpanzé partagent-ils environ ?`,
      options: [
        `Environ 50 %`,
        `Environ 75 %`,
        `Environ 98,8 %`,
        `100 % (ils sont la même espèce)`
      ],
      correcte: 2,
      explication: `Environ 98,8 % — une proximité génétique remarquable. Les chimpanzés sont nos plus proches parents vivants ; notre lignée s'est séparée de la leur il y a environ 6 à 7 millions d'années. Les différences anatomiques et comportementales considérables tiennent à un nombre relativement modeste de gènes (notamment de régulation).`
    },
    {
      q: `Qu'est-ce qu'une "spéciation allopatrique" ?`,
      options: [
        `La disparition d'une espèce`,
        `La formation d'une nouvelle espèce par séparation géographique de deux populations qui divergent ensuite indépendamment`,
        `Une hybridation entre deux espèces`,
        `Une mutation génétique majeure`
      ],
      correcte: 1,
      explication: `Le scénario classique : une barrière géographique (océan, montagne, etc.) sépare une population en deux ; chaque groupe évolue indépendamment ; au bout d'un certain temps, ils ne peuvent plus se reproduire fertilement entre eux. C'est ainsi qu'ont divergé les pinsons des Galápagos.`
    },
    {
      q: `Pourquoi dit-on que l'évolution n'a pas de "but" ?`,
      options: [
        `Parce qu'elle est très lente`,
        `Parce que c'est un processus aveugle qui produit ce qui se reproduit, sans direction vers la complexité, l'intelligence ou autre`,
        `Parce qu'elle est aléatoire`,
        `Parce qu'on ne peut pas l'observer`
      ],
      correcte: 1,
      explication: `L'évolution n'est ni dirigée ni intentionnelle. Elle ne "vise" pas la complexité ou l'humain. Elle fait simplement que les traits favorisant la reproduction deviennent plus fréquents. Penser qu'elle "progresse" est l'un des malentendus les plus répandus — et trompeurs — sur la théorie.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Sélection naturelle',
      definition: `Mécanisme évolutif central proposé par *Darwin* : les individus mieux **adaptés** à leur milieu laissent en moyenne plus de descendants, faisant croître la fréquence de leurs traits dans la population sur des générations. Aveugle, sans but.`
    },
    {
      terme: 'Adaptation',
      definition: `Caractère héréditaire qui **améliore les chances** de survie et de reproduction d'un organisme dans son environnement. Produit, et non cause, de la sélection naturelle — l'œil, le vol, la photosynthèse en sont des exemples spectaculaires.`
    },
    {
      terme: 'Mutation',
      definition: `**Modification aléatoire** de la séquence d'ADN lors de la réplication. Source unique de variation génétique nouvelle. Presque toujours neutre ou délétère, très rarement bénéfique — mais c'est ce résidu rare qui alimente toute l'évolution.`
    },
    {
      terme: 'Dérive génétique',
      definition: `**Changement aléatoire** de la fréquence des allèles dans une population au fil des générations, indépendamment de tout avantage adaptatif. Effet dominant dans les **petites populations** et lors des goulots d'étranglement.`
    },
    {
      terme: 'Spéciation',
      definition: `Processus par lequel une population se scinde en **deux espèces distinctes** incapables de se reproduire fertilement entre elles. Le scénario le plus courant est *allopatrique* : isolement géographique, puis divergence indépendante.`
    },
    {
      terme: 'Ancêtre commun',
      definition: `Population ou organisme ancestral dont descendent **plusieurs lignées** actuelles. Concept fondateur de la phylogénie darwinienne : humains et chimpanzés partagent un ancêtre commun il y a 6-7 millions d'années — ils ne descendent pas l'un de l'autre.`
    },
    {
      terme: 'Homologie',
      definition: `Similitude entre structures héritée d'un **ancêtre commun** (bras humain, aile de chauve-souris, nageoire de baleine : même plan osseux). Preuve anatomique majeure de la descendance commune. À distinguer de l'*analogie*, ressemblance par convergence.`
    },
    {
      terme: 'Synthèse néo-darwinienne',
      definition: `Cadre théorique formalisé dans les années **1930-1950** par *Fisher*, *Haldane*, *Mayr*, *Dobzhansky* : unit la sélection darwinienne et la génétique mendélienne. Les variations sont des mutations de gènes, transmises selon les lois de l'hérédité.`
    },
    {
      terme: 'Phylogénie',
      definition: `**Arbre généalogique** des espèces, reconstruit aujourd'hui à partir des similarités d'ADN. Trois grands domaines à la racine du vivant : **bactéries**, **archées**, **eucaryotes**. Outil unificateur de toute la biologie comparée.`
    },
    {
      terme: 'Pinsons de Darwin',
      definition: `Quinze espèces d'oiseaux endémiques des îles **Galápagos**, descendantes d'une espèce ancestrale unique. Leurs becs spécialisés (graines, insectes, cactus) sont le cas d'école de la [radiation adaptative]{accent} et de la spéciation allopatrique.`
    }
  ]

});
