/* ===================================================================
   SUJET — L'IA générative
   ===================================================================
   La rupture technologique des années 2020.
   Domaine : Informatique
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'ia-generative',
    titre: 'L\'<em>IA générative</em>',
    domaines: ['Informatique'],
    tags: ['intelligence artificielle', 'transformer', 'llm', 'chatgpt', 'claude'],
    difficulte: 3,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['monnaies-numeriques', 'detroit-de-taiwan', 'infini-mathematiques', 'conquete-spatiale-moderne', 'nombres-premiers', 'histoire-internet'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'En cinq ans, des modèles capables de produire du texte, du code, des images et désormais des vidéos plausibles ont submergé l\'économie numérique. Comprendre comment les transformers fonctionnent, pourquoi 2017 fut une rupture, et où en est la course mondiale en 2026.',

  points_cles: [
    'L\'**IA générative** est une famille de modèles capables de produire du texte, du code, des images, du son ou de la vidéo en réponse à une instruction.',
    'Le tournant technologique majeur date de **2017** avec l\'invention des **Transformers** par des chercheurs de Google.',
    'Les **grands modèles de langage** (LLM) sont entraînés sur des corpus massifs (Wikipedia, livres, code, web) et apprennent à prédire le mot suivant.',
    '**ChatGPT**, lancé fin **novembre 2022**, atteint **100 millions d\'utilisateurs** en deux mois — l\'adoption la plus rapide de toute l\'histoire des produits numériques.',
    'En 2026, les modèles de pointe (**GPT-5.5**, **Claude Opus 4.7**, **Gemini 3 Pro**) résolvent plus de **80 %** des problèmes de programmation du benchmark SWE-bench.',
    'L\'écosystème compte des modèles **propriétaires** (OpenAI, Anthropic, Google) et des modèles **open source** (Llama, DeepSeek, Qwen, Mistral) qui suivent à 6-12 mois.',
    'Toute la chaîne dépend de **GPU spécialisés** (Nvidia) fabriqués chez **TSMC** — un goulot d\'étranglement géopolitique majeur.'
  ],

  carte_mentale: {
    central: 'ia-gen',
    noeuds: [
      { id: 'ia-gen', label: 'IA générative', description: 'Famille de modèles d\'IA capables de produire du contenu original — texte, code, image, audio, vidéo.' },
      { id: 'transformer', label: 'Transformers', description: 'L\'architecture neuronale (2017) qui rend tout cela possible. Repose sur le mécanisme d\'**attention**.' },
      { id: 'llm', label: 'Grands modèles de langage', description: '**LLM** = Large Language Models. Entraînés à prédire le mot suivant sur des téraoctets de texte.' },
      { id: 'modeles', label: 'Modèles 2026', description: 'GPT-5.5, Claude Opus 4.7, Gemini 3 Pro... L\'état de l\'art change en quelques mois.' },
      { id: 'multimodal', label: 'Multimodalité', description: 'Au-delà du texte : image, audio, vidéo. Les modèles de pointe traitent désormais plusieurs modalités à la fois.' },
      { id: 'usages', label: 'Usages', description: 'Coding, recherche, écriture, traduction, support client, science, éducation.' },
      { id: 'enjeux', label: 'Enjeux', description: 'Hallucinations, droits d\'auteur, marché du travail, énergie, souveraineté, sécurité.' },
      { id: 'matériel', label: 'Le hardware', description: 'GPU Nvidia, fonderies TSMC, électricité massive : l\'IA repose sur une chaîne physique très concentrée.' },

      // LLM
      { id: 'pretrain', label: 'Pré-entraînement', description: 'Apprendre à prédire le mot suivant sur d\'immenses corpus. Coûte des **dizaines à centaines de millions** de dollars par modèle.', parent: 'llm' },
      { id: 'rlhf', label: 'RLHF', description: '[Reinforcement Learning from Human Feedback]{accent} : ajuster le modèle aux préférences humaines avec des annotateurs.', parent: 'llm' },
      { id: 'parametres', label: 'Paramètres', description: 'Les "neurones" du modèle. GPT-3 : **175 milliards**. Modèles 2026 : souvent un trillion ou plus, en architecture **MoE** (mixture of experts).', parent: 'llm' },

      // Modèles
      { id: 'gpt', label: 'OpenAI', description: 'Pionnier grand public avec ChatGPT. Modèle phare en 2026 : **GPT-5.5**.', parent: 'modeles' },
      { id: 'claude', label: 'Anthropic', description: 'Fondé par d\'anciens d\'OpenAI, axé sur la sécurité. **Claude Opus 4.7** domine plusieurs benchmarks de code en 2026.', parent: 'modeles' },
      { id: 'gemini', label: 'Google', description: '**Gemini 3 Pro** excelle en multimodalité et en raisonnement, avec un contexte de **2 millions de tokens**.', parent: 'modeles' },
      { id: 'open', label: 'Open source', description: '**Llama** (Meta), **DeepSeek**, **Qwen** (Alibaba), **Mistral** : modèles librement accessibles, performances proches des leaders propriétaires.', parent: 'modeles' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Le <em>moment</em> 2017',
      contenu_md:
`L\'IA existe comme champ de recherche depuis les années 1950. Pendant des décennies, ses progrès ont été poussifs, ponctués de plusieurs « hivers » — périodes de désenchantement et de coupes budgétaires.

Tout change en **juin 2017**. Huit chercheurs de Google publient un article au titre étrange : *« Attention Is All You Need ».* Ils y décrivent une nouvelle architecture de réseau de neurones, baptisée [Transformer]{accent}.

L\'idée centrale est le **mécanisme d\'attention** : à chaque mot d\'une phrase, le modèle apprend à regarder **tous les autres mots** simultanément, et à pondérer dynamiquement leur importance pour comprendre le contexte. Cela paraît simple. Cela va tout changer.

Avant Transformer, traiter une longue séquence de texte était lent et imprécis. Avec Transformer, on peut paralléliser massivement le calcul, et le modèle « comprend » des contextes longs sans perdre l\'information. C\'est l\'invention qui rendra possible **tout** ce qui suit.`
    },

    {
      type: 'encadre',
      label: 'Une publication à 1 milliard $',
      contenu_md: 'L\'article *Attention Is All You Need* est resté en libre accès. Tous les concurrents de Google s\'en sont saisis. **OpenAI** notamment, qui a immédiatement bâti GPT (Generative **P**re-trained **T**ransformer) sur cette base. Avec le recul, c\'est sans doute l\'une des publications scientifiques **les plus précieuses** des cinquante dernières années — Google a inventé la technologie qui a fait émerger ses concurrents les plus sérieux.'
    },

    {
      type: 'texte',
      titre: 'Comment apprend un <em>LLM</em>',
      contenu_md:
`Un grand modèle de langage (**LLM**, *Large Language Model*) apprend par une tâche d\'une simplicité confondante : **prédire le mot suivant**.

On lui montre des milliards de phrases issues du web, de livres, de code, de Wikipédia, et on l\'entraîne à compléter chaque texte mot par mot. Pour bien le faire, le modèle doit implicitement apprendre la grammaire, les faits du monde, les enchaînements logiques, le contexte culturel, les structures argumentatives.

C\'est le **pré-entraînement**. Il dure des semaines ou des mois sur des milliers de **GPU spécialisés**. Pour les modèles de pointe en 2026, le coût atteint **plusieurs centaines de millions de dollars** par session d\'entraînement.

Vient ensuite le **post-entraînement** : on présente au modèle des paires (question / bonne réponse) annotées par des humains, pour le rendre utile, sûr et conforme aux usages voulus. C\'est la phase de **RLHF** — *Reinforcement Learning from Human Feedback*. C\'est ce qui transforme un GPT-3 brut, prédicateur de mots, en un assistant comme ChatGPT.`
    },

    {
      type: 'widget',
      titre: 'L\'évolution explosive de la taille des modèles',
      composant: 'SelecteurValeurs',
      params: {
        unite: 'milliards de paramètres',
        indexInitial: 0,
        options: [
          { label: 'GPT-2 (2019)', valeur: 1.5, description: 'Le modèle qu\'OpenAI a d\'abord refusé de publier "par peur" de son potentiel. Avec le recul, modeste.' },
          { label: 'GPT-3 (2020)', valeur: 175, description: 'Saut majeur. Premier modèle où apparaissent les capacités émergentes — il sait écrire des poèmes, du code, des arguments, sans avoir été spécifiquement entraîné pour.' },
          { label: 'GPT-4 (2023)', valeur: 1700, description: 'OpenAI ne publie plus la taille officielle. Estimé autour de **1,7 trillion** de paramètres en architecture MoE.' },
          { label: 'Modèles 2026', valeur: 5000, description: 'Les modèles de pointe atteindraient plusieurs trillions de paramètres, presque toujours en **MoE** (seule une fraction est active à chaque inférence).' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'L\'<em>onde de choc</em> de ChatGPT',
      contenu_md:
`Le **30 novembre 2022**, OpenAI met en ligne **ChatGPT** — interface conversationnelle gratuite construite autour de GPT-3.5. Personne, à l\'intérieur même d\'OpenAI, n\'avait anticipé ce qui allait suivre.

En **cinq jours**, ChatGPT atteint un million d\'utilisateurs. En **deux mois**, **100 millions**. C\'est l\'adoption la plus rapide de toute l\'histoire des produits numériques — devançant TikTok, Instagram, Facebook.

Soudain, le grand public découvre qu\'une intelligence artificielle peut répondre à des questions complexes, écrire un email, débugger du code, traduire, rédiger un essai, expliquer une notion, raisonner — du moins en apparence. Les écoles paniquent. Google déclare l\'**état d\'urgence interne**. Les valorisations des entreprises d\'IA explosent. La course est officiellement lancée.`
    },

    {
      type: 'widget',
      composant: 'Frise',
      params: {
        evenements: [
          { date: 'Juin 2017', titre: 'Attention Is All You Need', description: 'Google publie l\'architecture Transformer. Aucune fanfare médiatique — juste un article technique.' },
          { date: 'Juin 2018', titre: 'GPT-1', description: 'OpenAI publie le premier "Generative Pre-trained Transformer". 117 millions de paramètres.' },
          { date: 'Mai 2020', titre: 'GPT-3', description: 'Saut quantitatif. Premières capacités émergentes spectaculaires (écriture, code, raisonnement de base).' },
          { date: '2021', titre: 'GitHub Copilot', description: 'Premier assistant de code intégré à un IDE, basé sur GPT-3. Les développeurs découvrent l\'IA au quotidien.' },
          { date: 'Janv. 2022', titre: 'DALL·E 2 et Midjourney', description: 'L\'IA **générative d\'images** explose dans le grand public.' },
          { date: '30 nov. 2022', titre: 'ChatGPT', description: 'Lancé presque par hasard. **100 millions d\'utilisateurs en deux mois**.' },
          { date: 'Mars 2023', titre: 'GPT-4', description: 'Première démo véritablement multimodale (texte + image). Saut qualitatif considérable.' },
          { date: 'Févr. 2024', titre: 'Sora et la vidéo IA', description: 'OpenAI dévoile Sora : premiers clips vidéo générés à partir de texte avec un réalisme troublant.' },
          { date: '2025', titre: 'Modèles raisonnants', description: 'Les modèles "thinking" (qui prennent du temps pour raisonner) bondissent en performance sur les maths et le code.' },
          { date: '2026', titre: 'Course frontière', description: 'GPT-5.5, Claude Opus 4.7, Gemini 3 Pro se disputent la tête. **L\'open source** (Llama, DeepSeek, Qwen) suit à quelques mois.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'L\'<em>écosystème</em> de 2026',
      contenu_md:
`Quatre familles dominent en 2026.`
    },

    {
      type: 'widget',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Pionnier grand public',
            titre: 'OpenAI',
            description: 'Lancé ChatGPT. Modèle phare 2026 : **GPT-5.5**. Partenaire stratégique de Microsoft. Atteint plus de **800 millions** d\'utilisateurs hebdomadaires.'
          },
          {
            tag: 'Sécurité IA',
            titre: 'Anthropic',
            description: 'Fondé par d\'anciens chercheurs d\'OpenAI inquiets des risques. **Claude Opus 4.7** domine plusieurs benchmarks de code et de raisonnement. Très adopté en entreprise.'
          },
          {
            tag: 'Géant intégré',
            titre: 'Google DeepMind',
            description: '**Gemini 3 Pro** : multimodalité avancée (vidéo, audio, image, texte), contexte de **2 millions de tokens**. Distribué dans les produits Google (Search, Workspace).'
          },
          {
            tag: 'Open weights',
            titre: 'Open source',
            description: 'Modèles librement téléchargeables. **Llama** (Meta), **DeepSeek** et **Qwen** (Chine), **Mistral** (France). Ils suivent les modèles propriétaires à 6-12 mois.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Ce que les modèles savent <em>vraiment</em> faire',
      contenu_md:
`Au-delà de l\'effet Wow!, où en est-on concrètement en 2026 ?

**Code** : sur le benchmark **SWE-bench Verified** (problèmes réels d\'ingénierie logicielle), les meilleurs modèles dépassent **80 %** de réussite. Un développeur senior y atteint généralement 70-75 %. Cursor, Claude Code, GitHub Copilot sont devenus des outils standards.

**Raisonnement scientifique** : sur le benchmark **GPQA Diamond** (questions de niveau doctorat en physique, biologie, chimie), Gemini 3 Pro atteint **91,9 %**. Un humain expert dans son domaine y est typiquement à 65-75 %.

**Multimodalité** : compréhension d\'images, lecture de documents complexes, analyse de graphiques scientifiques. La génération vidéo (Sora, Veo) commence à produire des clips de **qualité cinéma** sur des scènes courtes.

**Mais** : les modèles **hallucinent** encore — affirment avec confiance des informations fausses. Ils sont sensibles à la formulation des questions. Et ils restent fragiles face à des problèmes vraiment nouveaux, hors distribution d\'entraînement.`
    },

    {
      type: 'encadre',
      label: 'Limites importantes',
      contenu_md: 'Un LLM **n\'a pas de modèle du monde** au sens fort. Il prédit du texte plausible. Quand il « raisonne », c\'est en générant des étapes intermédiaires plausibles — souvent justes, parfois dangereusement fausses sans que sa confiance baisse. Pour des décisions critiques (médecine, droit, finance), une **vérification humaine** reste nécessaire.'
    },

    {
      type: 'texte',
      titre: 'La <em>chaîne physique</em> derrière la magie',
      contenu_md:
`On l\'oublie facilement : derrière chaque réponse de ChatGPT, il y a une chaîne **matérielle** très concrète.

Les modèles tournent sur des **GPU** spécialisés — surtout les puces Nvidia H100 et leurs successeurs B200, qui se vendent autour de **30 000 à 40 000 dollars pièce**. Un seul centre d\'entraînement de pointe en compte **des dizaines de milliers**.

Ces GPU sont fabriqués par **TSMC**, à Taïwan, à plus de 90 % pour les nœuds avancés. Ils consomment massivement : un seul cluster d\'entraînement consomme désormais autant qu\'**une ville moyenne**. Microsoft, Google, Meta, Amazon investissent chacun **plus de 80 milliards $** par an en infrastructure IA.

C\'est ce qui rend la dépendance à TSMC si stratégique — et pourquoi le [détroit de Taïwan]{accent} est devenu, indirectement, un sujet d\'IA. *([[detroit-de-taiwan]])*`
    },

    {
      type: 'encadre',
      label: 'Les enjeux ouverts',
      contenu_md: 'L\'**impact sur le marché du travail** (programmation, rédaction, support, design) est en train de se déployer, sans qu\'on en mesure encore l\'ampleur. Le **droit d\'auteur** des données d\'entraînement fait l\'objet de procès massifs. La **désinformation** automatisée à grande échelle inquiète les démocraties. Et la question philosophique reste : ce sont des machines très bonnes à imiter l\'intelligence — mais sont-elles **vraiment** intelligentes ? Le débat est ouvert et probablement insoluble en l\'état actuel des outils conceptuels.'
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Les grands modèles de langage "comprennent" le sens des mots de la même manière qu\'un humain.',
      reponse: false,
      explication: 'Un LLM n\'a pas de modèle du monde au sens fort : il prédit du texte plausible à partir de régularités statistiques apprises sur d\'énormes corpus. Quand il "raisonne", c\'est en générant des étapes plausibles — souvent justes, parfois dangereusement fausses sans baisse de confiance.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces jalons de l\'IA générative dans l\'ordre chronologique :',
      items: [
        'Article "Attention Is All You Need" (Transformers)',
        'Publication de GPT-3',
        'Lancement de ChatGPT',
        'Sortie de GPT-4'
      ],
      explication: 'Transformers (juin 2017) → GPT-3 (mai 2020) → ChatGPT (30 novembre 2022) → GPT-4 (mars 2023). Chaque étape a marqué un saut quantitatif ou qualitatif majeur.'
    },
    {
      type: 'associer',
      q: 'Associe chaque modèle d\'IA à son laboratoire :',
      paires: [
        { gauche: 'GPT', droite: 'OpenAI' },
        { gauche: 'Claude', droite: 'Anthropic' },
        { gauche: 'Gemini', droite: 'Google' },
        { gauche: 'Llama', droite: 'Meta' }
      ],
      explication: 'OpenAI produit la série GPT, Anthropic la famille Claude, Google DeepMind la famille Gemini, et Meta publie Llama (open source). Ces quatre acteurs structurent la course frontière en 2026.'
    },
    {
      q: 'Quelle est l\'innovation technologique majeure de 2017 qui a rendu possible l\'IA générative moderne ?',
      options: [
        'Les réseaux de neurones convolutifs',
        'L\'architecture Transformer, basée sur le mécanisme d\'attention',
        'La technologie GPU',
        'L\'apprentissage par renforcement'
      ],
      correcte: 1,
      explication: 'L\'article "Attention Is All You Need" publié par Google en juin 2017 introduit l\'architecture Transformer. Toutes les IA génératives modernes (GPT, Claude, Gemini, etc.) en descendent.'
    },
    {
      q: 'Sur quelle tâche un grand modèle de langage est-il principalement entraîné ?',
      options: [
        'Reconnaître des images',
        'Prédire le mot suivant dans un texte',
        'Calculer des équations',
        'Traduire des langues étrangères'
      ],
      correcte: 1,
      explication: 'Le pré-entraînement consiste à prédire le mot (token) suivant sur d\'immenses corpus textuels. C\'est cette tâche apparemment simple, à très grande échelle, qui fait émerger l\'essentiel des capacités des LLM.'
    },
    {
      q: 'Combien de temps a-t-il fallu à ChatGPT pour atteindre 100 millions d\'utilisateurs ?',
      options: ['Six mois', 'Un an', 'Deux mois', 'Quatre ans'],
      correcte: 2,
      explication: 'Lancé fin novembre 2022, ChatGPT a atteint 100 millions d\'utilisateurs début février 2023 — l\'adoption la plus rapide de l\'histoire des produits numériques (TikTok avait mis 9 mois, Instagram plus de 2 ans).'
    },
    {
      q: 'Que signifie "RLHF" dans le contexte de l\'entraînement des LLM ?',
      options: [
        'Random Linear Hierarchical Function',
        'Reinforcement Learning from Human Feedback — apprentissage par renforcement à partir de retours humains',
        'Reduced Latency Hosting Framework',
        'Recurrent Layer Hidden Filter'
      ],
      correcte: 1,
      explication: 'C\'est la phase de post-entraînement durant laquelle des annotateurs humains classent les réponses du modèle pour aligner ses comportements sur les préférences humaines. C\'est ce qui transforme un prédicteur de texte brut en un assistant utile et sûr.'
    },
    {
      q: 'Pourquoi dit-on que les LLM "hallucinent" ?',
      options: [
        'Ils consomment trop d\'énergie',
        'Ils peuvent affirmer avec confiance des informations factuellement fausses',
        'Ils voient des images quand on leur parle',
        'Ils confondent les langues'
      ],
      correcte: 1,
      explication: 'Une hallucination dans le jargon IA désigne une affirmation factuellement fausse présentée avec confiance par le modèle. C\'est l\'une des limites fondamentales actuelles : un LLM optimise pour la plausibilité textuelle, pas pour la vérité.'
    },
    {
      q: 'Quelle entreprise détient un quasi-monopole sur les puces utilisées pour l\'entraînement des grands modèles d\'IA ?',
      options: ['Intel', 'AMD', 'Nvidia', 'Apple'],
      correcte: 2,
      explication: 'Nvidia domine massivement le marché des GPU dédiés à l\'IA (H100, B200, etc.). Ces puces sont fabriquées chez TSMC à Taïwan — d\'où la dimension géopolitique majeure du sujet.'
    },
    {
      q: 'Que désigne le terme "multimodalité" pour les IA récentes ?',
      options: [
        'L\'utilisation de plusieurs serveurs',
        'La capacité d\'un même modèle à traiter plusieurs types de données : texte, image, audio, vidéo',
        'L\'utilisation de plusieurs langues',
        'Une approche par vote entre plusieurs modèles'
      ],
      correcte: 1,
      explication: 'Les modèles de pointe en 2026 (GPT-5.5, Claude Opus 4.7, Gemini 3 Pro) ne se limitent plus au texte : ils comprennent images, audio, et de plus en plus la vidéo. C\'est l\'une des frontières actives du domaine.'
    },
    {
      q: 'Quelle est la principale différence entre un modèle "propriétaire" et un modèle "open source" ?',
      options: [
        'Le premier est payant, le second gratuit',
        'Le premier est plus performant',
        'Les poids du modèle (les paramètres entraînés) sont publiés et téléchargeables pour l\'open source, propriété privée pour les premiers',
        'Le premier fonctionne en ligne, le second en local'
      ],
      correcte: 2,
      explication: 'Pour les modèles open source (Llama, DeepSeek, Mistral, Qwen), les poids du modèle sont publiquement téléchargeables — on peut les exécuter chez soi, les modifier, les fine-tuner. Les modèles propriétaires (GPT-5.5, Claude, Gemini) ne sont accessibles qu\'à travers une API contrôlée par leur éditeur.'
    }
  ],

  vocabulaire: [
    {
      terme: 'Transformer',
      definition: `Architecture de réseau de neurones introduite par Google en **2017** (article *Attention Is All You Need*). Repose sur le **mécanisme d'attention** qui permet à chaque mot de pondérer dynamiquement l'importance de tous les autres. Socle technique de toute l'IA générative moderne.`
    },
    {
      terme: 'Mécanisme d\'attention',
      definition: `Opération qui permet à un modèle de pondérer, pour chaque élément d'une séquence, l'importance relative de **tous les autres éléments** simultanément. Remplace les architectures séquentielles antérieures et autorise une parallélisation massive du calcul.`
    },
    {
      terme: 'LLM',
      definition: `*Large Language Model* — grand modèle de langage entraîné à **prédire le mot suivant** sur des téraoctets de texte. Acquiert implicitement grammaire, faits du monde, raisonnement et structures argumentatives par cette tâche unique massivement répétée.`
    },
    {
      terme: 'Pré-entraînement',
      definition: `Première phase d'apprentissage d'un LLM, durant laquelle le modèle ingère des corpus massifs (web, livres, code) pour apprendre à prédire le token suivant. Coûte des **dizaines à centaines de millions** de dollars en calcul GPU.`
    },
    {
      terme: 'RLHF',
      definition: `*Reinforcement Learning from Human Feedback* : post-entraînement qui ajuste un modèle brut aux préférences humaines via des annotateurs classant ses réponses. Transforme un prédicteur de texte en **assistant** utile, sûr et aligné.`
    },
    {
      terme: 'Hallucination',
      definition: `Production par un LLM d'une **affirmation factuellement fausse** présentée avec confiance. Conséquence structurelle d'un modèle optimisé pour la *plausibilité textuelle* plutôt que pour la vérité — limite fondamentale du paradigme actuel.`
    },
    {
      terme: 'Multimodalité',
      definition: `Capacité d'un même modèle à traiter et générer **plusieurs types de données** : texte, image, audio, vidéo. Frontière active de la recherche en 2026, où la génération vidéo (Sora, Veo) commence à atteindre une qualité cinéma.`
    },
    {
      terme: 'Mixture of Experts (MoE)',
      definition: `Architecture où le modèle est composé de plusieurs sous-réseaux *experts* spécialisés, dont seule une **fraction est activée** à chaque inférence. Permet d'atteindre des trillions de paramètres en gardant un coût d'exécution maîtrisé.`
    },
    {
      terme: 'Paramètres',
      definition: `Les **"neurones" entraînés** d'un modèle, dont les valeurs encodent ce qu'il a appris. GPT-3 en comptait 175 milliards ; les modèles de pointe 2026 dépassent souvent le trillion, presque toujours en architecture MoE.`
    },
    {
      terme: 'Open weights',
      definition: `Désigne un modèle dont les **poids entraînés sont publiquement téléchargeables** (Llama, DeepSeek, Qwen, Mistral). Permet exécution locale, modification et fine-tuning, par opposition aux modèles propriétaires accessibles uniquement via API contrôlée.`
    }
  ]

});
