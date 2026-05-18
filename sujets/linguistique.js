/* ===================================================================
   SUJET — La linguistique
   ===================================================================
   Les langues du monde : familles, évolution, structure.
   De Pāṇini à Chomsky, l'humanité essaie de comprendre comment
   elle parle.
   Domaine : Linguistique
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'linguistique',
    titre: 'La <em>linguistique</em>',
    domaines: ['Linguistique'],
    tags: ['langues', 'indo-europeen', 'saussure', 'chomsky', 'familles', 'evolution', 'phonologie', 'syntaxe'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['ecriture-cuneiforme', 'sapiens-neolithique', 'epopee'],
    date_creation: '2026-05-17',
    date_maj: '2026-05-17'
  },

  resume: `Comprendre comment les linguistes ont classé les ~7000 langues parlées par l'humanité en grandes familles génétiques, reconstruit des langues mortes que personne n'a jamais entendues parler (comme l'indo-européen commun), et tenté depuis Saussure et Chomsky de saisir la grammaire profonde qui rend possible le langage humain.`,

  points_cles: [
    `On compte aujourd'hui environ **7 000 langues parlées** dans le monde — mais ce nombre diminue rapidement : une langue **disparaît tous les 14 jours** en moyenne, et **50 %** auront disparu d'ici 2100.`,
    `Les langues sont regroupées en **familles** par parenté généalogique. Les plus grandes : **indo-européenne** (~3,3 Md de locuteurs : du français au hindi en passant par l'anglais, l'allemand, le russe), **sino-tibétaine** (~1,4 Md), **niger-congo** (~600 M, Afrique sub-saharienne), **afro-asiatique** (~500 M, arabe, hébreu, berbère).`,
    `La **linguistique historique** est née en **1786** quand le philologue britannique **William Jones**, à Calcutta, identifie la **parenté entre sanskrit, grec et latin** — et postule l'existence d'une langue-mère commune disparue, le **proto-indo-européen**, reconstituée depuis par comparaison.`,
    `Le ***Cours de linguistique générale*** de **Ferdinand de Saussure** (publié à titre posthume en **1916**) fonde la **linguistique structurale moderne** : la langue comme système de signes (signifiant/signifié), la distinction langue/parole, le caractère arbitraire du signe.`,
    `**Noam Chomsky** propose en **1957** la **grammaire générative** : tous les humains possèdent une **structure linguistique innée** ("grammaire universelle") qui rendrait possible l'acquisition de n'importe quelle langue par un enfant en quelques années.`,
    `Toute langue a quatre niveaux d'analyse : **phonologie** (les sons), **morphologie** (la formation des mots), **syntaxe** (la combinaison des mots), **sémantique** (le sens). La **pragmatique** s'ajoute pour étudier le langage en contexte.`,
    `Les langues les plus parlées comme **langues maternelles** : **chinois mandarin** (~940 M), **espagnol** (~485 M), **anglais** (~390 M), **hindi** (~345 M), **arabe** (~290 M, en additionnant les variétés). En **langue seconde**, l'anglais domine largement (~1,1 Md de locuteurs supplémentaires).`,
    `Le **langage humain** est, à notre connaissance, **unique dans la nature**. Ni les chants d'oiseaux, ni la danse des abeilles, ni les vocalisations des grands singes ne possèdent les trois traits combinés qui le définissent : **récursivité**, **double articulation**, et **déplacement** (parler de ce qui n'est pas là).`
  ],

  carte_mentale: {
    central: 'linguistique',
    noeuds: [
      { id: 'linguistique', label: 'Linguistique', description: 'Étude scientifique du langage humain : ses structures, ses familles, son évolution, ses universaux. Discipline carrefour entre sciences humaines, biologie, informatique.' },

      { id: 'familles', label: 'Familles de langues', description: 'Les 7000 langues du monde sont groupées en quelques grandes familles génétiques — descendantes d\'une langue-mère commune disparue, parfois reconstituée par comparaison.' },
      { id: 'histoire', label: 'Histoire de la discipline', description: 'De Pāṇini (~-500) à Chomsky, en passant par les comparatistes du XIXᵉ siècle et Saussure (1916).' },
      { id: 'niveaux', label: 'Niveaux d\'analyse', description: 'Toute langue a une phonologie (sons), morphologie (mots), syntaxe (phrases), sémantique (sens), pragmatique (usage en contexte).' },
      { id: 'specificite', label: 'Spécificité humaine', description: 'Le langage humain est unique : récursivité, double articulation, déplacement. Aucun système de communication animal connu ne combine ces trois traits.' },
      { id: 'sociolinguistique', label: 'Sociolinguistique', description: 'Étude des rapports entre langue et société : variations dialectales, prestige, contacts de langues, créoles, mort des langues.' },

      // Familles
      { id: 'indo-europeen', label: 'Indo-européen', description: 'Plus de **3,3 milliards de locuteurs**. Du français au hindi, en passant par l\'anglais, l\'allemand, le russe, le persan. La famille la plus étudiée et la mieux reconstituée.', parent: 'familles' },
      { id: 'sino-tibetain', label: 'Sino-tibétain', description: '~1,4 milliard de locuteurs. Chinois mandarin, cantonais, tibétain, birman. Famille tonale, peu étudiée jusqu\'à récemment.', parent: 'familles' },
      { id: 'niger-congo', label: 'Niger-Congo', description: '~600 millions de locuteurs en Afrique sub-saharienne. Langues bantoues (swahili, zoulou), yoruba, wolof, mandingue. Plus grande famille en nombre de langues (~1500).', parent: 'familles' },
      { id: 'afro-asiatique', label: 'Afro-asiatique', description: '~500 millions de locuteurs. Arabe, hébreu, amharique, berbère, ancien égyptien. Origine probable au Sahel ou en Afrique de l\'Est il y a ~10 000 ans.', parent: 'familles' },

      // Histoire
      { id: 'panini', label: 'Pāṇini', description: 'Grammairien indien vers **-500**. Compose l\'***Ashtadhyayi***, grammaire du sanskrit en 3959 règles formelles. La première grammaire générative connue — Chomsky lui-même le cite comme précurseur.', parent: 'histoire' },
      { id: 'jones', label: 'William Jones', description: '**1786, Calcutta**. Découvre la parenté du sanskrit avec le grec et le latin. Postule l\'existence d\'une langue-mère commune, le **proto-indo-européen**. Fonde la linguistique historique comparée.', parent: 'histoire' },
      { id: 'saussure', label: 'Ferdinand de Saussure', description: '**Cours de linguistique générale** (1916, posthume). Fonde la **linguistique structurale** : la langue comme système de signes, signifiant/signifié, valeur différentielle, synchronie vs diachronie.', parent: 'histoire' },
      { id: 'chomsky', label: 'Noam Chomsky', description: '**Structures syntaxiques** (1957). Propose la **grammaire générative** : structure linguistique innée chez tous les humains. Sa "grammaire universelle" reste contestée mais structure la discipline.', parent: 'histoire' },

      // Niveaux d'analyse
      { id: 'phonologie', label: 'Phonologie', description: 'Étude des **sons** d\'une langue et de leur fonction. Chaque langue distingue ses **phonèmes** (sons signifiants). Le français a ~36 phonèmes, le hawaïen ~13, le !xóõ (Botswana) plus de **140**, dont les fameux clics.', parent: 'niveaux' },
      { id: 'syntaxe', label: 'Syntaxe', description: 'Étude des règles qui combinent les mots en phrases. Pourquoi *"Le chat dort"* est correct et *"Chat dort le"* ne l\'est pas. La syntaxe est ce qui fait dire à Chomsky qu\'il y a une grammaire universelle.', parent: 'niveaux' },
      { id: 'semantique', label: 'Sémantique', description: 'Étude du **sens**. Comment les mots et les phrases réfèrent au monde, comment les significations se composent et se transforment.', parent: 'niveaux' },

      // Spécificité
      { id: 'recursivite', label: 'Récursivité', description: 'Capacité à **emboîter** des phrases dans des phrases : *"Je sais que tu penses que je crois que…"*. Aucun système animal connu ne le fait. Hypothèse de Chomsky : c\'est LA spécificité du langage humain.', parent: 'specificite' },
      { id: 'double-articulation', label: 'Double articulation', description: 'Concept d\'**André Martinet** (1960). Un nombre fini de **phonèmes** se combine en un nombre infini de **monèmes** (unités de sens). Permet une économie radicale : ~30 sons produisent des millions de mots.', parent: 'specificite' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `<em>Sept mille</em> langues, et combien d'humanités ?`,
      contenu_md:
`Quand on parle "les langues du monde", on imagine vite quelques dizaines : anglais, chinois, espagnol, français, arabe, swahili… En réalité, l'humanité parle aujourd'hui **environ 7 000 langues différentes** — chiffre approximatif car la frontière entre une "langue" et un "dialecte" est plus politique que linguistique. Le proverbe linguistique connu : *« une langue, c'est un dialecte avec une armée et une marine »* (attribué à Max Weinreich).

Ces 7 000 langues ne sont pas réparties uniformément. **96 % d'entre elles sont parlées par seulement 4 % de l'humanité**. Quelques dizaines de langues dominantes — anglais, mandarin, espagnol, hindi, arabe, français, portugais, russe — totalisent la quasi-totalité des locuteurs. Le reste, ce sont **6 950 langues** majoritairement parlées par **moins de 10 000 personnes** chacune, souvent par des communautés autochtones, et qui **disparaissent** au rythme alarmant d'**une langue tous les 14 jours**. L'UNESCO estime que **50 % des langues actuelles** auront disparu **avant 2100**.

Une langue qui meurt, ce n'est pas seulement un vocabulaire qui s'éteint : c'est une **manière de découper le monde** qui s'efface. Le pirahã d'Amazonie n'a pas de mot pour les nombres au-delà de "un, deux, beaucoup". Le yupik du Pacifique distingue cinquante mots pour différentes formes de glace marine. Le guugu yimithirr d'Australie n'utilise pas "gauche/droite" mais uniquement les **points cardinaux absolus** : "ta jambe nord", "la pomme à l'est". Chaque langue est une **expérience cognitive distincte** sur le monde — c'est ce que les linguistes appellent l'**hypothèse de Sapir-Whorf**, qui reste partiellement débattue mais largement validée dans ses formes modérées.`
    },

    {
      type: 'widget',
      composant: 'Frise',
      titre: 'Histoire de la linguistique',
      params: {
        evenements: [
          { date: '~-500', titre: 'Pāṇini', description: 'Le grammairien indien **Pāṇini** compose en sanskrit l\'***Ashtadhyayi***, **grammaire formelle** du sanskrit en 3959 règles. La première description scientifique d\'une langue, à laquelle Chomsky se référera plus de 2 400 ans plus tard.' },
          { date: '~-300', titre: 'Grammairiens grecs', description: 'À Alexandrie, **Aristarque de Samothrace** puis **Denys le Thrace** fondent la grammaire grecque. Distinction des **parties du discours** (nom, verbe, etc.) qui structure encore les manuels scolaires aujourd\'hui.' },
          { date: '1786', titre: 'William Jones', description: 'À Calcutta, le philologue britannique **William Jones** identifie la **parenté entre sanskrit, grec et latin**. Postule l\'existence d\'une langue-mère commune perdue. Naissance de la **linguistique historique comparée**.' },
          { date: '1816', titre: 'Franz Bopp', description: 'Le linguiste allemand publie sur les **systèmes de conjugaison** du sanskrit, grec, latin et persan. Premier travail comparatif systématique. Fonde la méthode comparative moderne.' },
          { date: '1916', titre: 'Saussure (Cours)', description: 'Publication posthume du ***Cours de linguistique générale*** de **Ferdinand de Saussure** par ses élèves, à partir de leurs notes. Fonde la **linguistique structurale** moderne.' },
          { date: '1957', titre: 'Chomsky', description: 'Publication des ***Structures syntaxiques*** par **Noam Chomsky** au MIT. Propose la **grammaire générative** et la notion de **grammaire universelle** innée. Révolution dans la discipline.' },
          { date: '1960', titre: 'André Martinet', description: '***Éléments de linguistique générale***. Formalise la **double articulation** comme propriété définitoire du langage humain.' },
          { date: '2002', titre: 'Hauser, Chomsky, Fitch', description: 'Article célèbre dans *Science* affirmant que la **récursivité** est l\'unique vraie spécificité du langage humain par rapport aux systèmes de communication animaux. Débat majeur encore vivant.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Les grandes <em>familles</em> de langues`,
      contenu_md:
`L'apport décisif de la linguistique du XIXᵉ siècle a été de montrer que les langues qui se ressemblent — comme le français et l'italien — ne se ressemblent pas par hasard, mais parce qu'elles descendent d'une **langue-mère commune disparue**. La méthode : comparer systématiquement des mots de "vocabulaire fondamental" (parties du corps, chiffres, parenté, eau, soleil…) qui changent peu, et identifier des **correspondances régulières**.

Exemple célèbre du proto-indo-européen :

Le mot pour "père" : *pater* (latin), *πατήρ* (grec ancien *patēr*), *vater* (allemand), *father* (anglais), *पितृ* (sanskrit *pitr*), *padre* (espagnol), *père* (français). Variations multiples mais **un même squelette consonantique reconstitutible**. Sur ces correspondances régulières — pas seulement pour "père" mais pour des centaines de mots —, les linguistes ont **reconstruit** une langue parlée il y a environ **6 000 ans**, probablement dans les steppes pontiques au nord de la mer Noire (hypothèse "kourgane" d'archéologie + linguistique). Cette langue, le **proto-indo-européen**, n'a laissé aucun document écrit. Personne ne l'a jamais entendue. Mais on en a reconstitué les **phonèmes**, la **grammaire**, et même quelques poèmes courts.

La famille indo-européenne descend de cette langue-mère et compte aujourd'hui **plus de 3,3 milliards de locuteurs**. Elle inclut le sanskrit et ses descendants (hindi, bengali, ourdou…), le grec, le latin et ses descendants (français, espagnol, italien, portugais, roumain), les langues germaniques (allemand, anglais, néerlandais, suédois…), les langues slaves (russe, polonais, tchèque…), les langues celtiques (irlandais, gallois, breton), les langues iraniennes (persan, pachto, kurde), l'arménien, l'albanais.

Les autres grandes familles, par décroissance de locuteurs :
- **Sino-tibétaine** (~1,4 Md) : chinois mandarin, cantonais, hakka, tibétain, birman. Famille tonale.
- **Niger-Congo** (~600 M) : langues bantoues (swahili, zoulou, kikongo…), yoruba, wolof, mandingue. **La plus diverse en nombre de langues** (~1500).
- **Afro-asiatique** (~500 M) : arabe, hébreu, amharique, berbère, ancien égyptien.
- **Austronésienne** (~400 M) : tagalog, malais, indonésien, javanais, hawaïen, maori. **Diffusion incroyable** depuis Taïwan jusqu'à Madagascar à l'ouest et à l'île de Pâques à l'est.
- **Dravidienne** (~250 M) : tamoul, télougou, kannada, malayalam. Parlée dans le sud de l'Inde, **antérieure** aux invasions indo-européennes.
- **Turcique** (~200 M) : turc, azéri, ouzbek, kazakh, kirghize.

Quelques langues sont **isolées** — sans famille connue : le **basque** (Pays basque), le **japonais** et le **coréen** (la parenté entre les deux reste débattue), le **sumérien** (Mésopotamie antique, voir [[ecriture-cuneiforme]]), l'**aïnou** (Japon du Nord).`
    },

    {
      type: 'widget',
      composant: 'SelecteurValeurs',
      titre: 'Top 10 des langues par locuteurs maternels',
      params: {
        unite: 'locuteurs natifs',
        options: [
          { label: 'Chinois mandarin', valeur: '~940 M', description: 'Famille **sino-tibétaine**. Tonal (4 tons + un ton neutre). Écriture logographique : chaque caractère représente un mot (~3000 d\'usage courant, ~50 000 au total).' },
          { label: 'Espagnol', valeur: '~485 M', description: 'Famille **indo-européenne**, branche romane. Langue d\'État de **20 pays** (Espagne + Amérique latine + Guinée équatoriale). Issu du latin parlé d\'Hispanie.' },
          { label: 'Anglais', valeur: '~390 M (natifs)', description: 'Famille **indo-européenne**, branche germanique. Mais **+ 1,1 milliard** en langue seconde, soit **~1,5 milliard de locuteurs au total**. Langue mondiale de fait.' },
          { label: 'Hindi', valeur: '~345 M', description: 'Famille **indo-européenne**, branche indo-aryenne. Officiel en Inde (avec l\'anglais). Très proche de l\'ourdou parlé au Pakistan — c\'est essentiellement la même langue avec deux écritures différentes (devanāgarī vs arabe-perse).' },
          { label: 'Arabe (cumul)', valeur: '~290 M', description: 'Famille **afro-asiatique**, branche sémitique. **Arabe standard** (classique du Coran + moderne pour médias et écrits) coexiste avec **dialectes locaux** très différents (marocain vs égyptien vs irakien) souvent mutuellement inintelligibles à l\'oral.' },
          { label: 'Bengali', valeur: '~265 M', description: 'Famille **indo-européenne**, branche indo-aryenne. Parlé au Bangladesh et au Bengale-Occidental indien. Langue de **Rabindranath Tagore**, premier non-Européen prix Nobel de littérature (1913).' },
          { label: 'Portugais', valeur: '~235 M', description: 'Famille **indo-européenne**, branche romane. **Brésil** concentre 80 % des locuteurs natifs. Plus le Portugal, l\'Angola, le Mozambique, le Cap-Vert, Macao.' },
          { label: 'Russe', valeur: '~150 M', description: 'Famille **indo-européenne**, branche slave. Cyrillique. Langue officielle de Russie + langue véhiculaire dans l\'ex-URSS.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `<em>Saussure</em> et la révolution structurale`,
      contenu_md:
`Pendant le XIXᵉ siècle, la linguistique se construit autour d'un projet : reconstituer les langues-mères du passé, retracer l'évolution historique des langues, classer les familles. C'est passionnant, mais ça reste **diachronique** — orienté vers le temps.

Le tournant arrive avec **Ferdinand de Saussure** (1857-1913), professeur à l'université de Genève. De 1907 à 1911, il donne trois cycles de cours de "linguistique générale" qui révolutionnent la discipline. Saussure ne publie rien lui-même de ces cours, et meurt en 1913 sans les avoir mis en forme. **Ses élèves Charles Bally et Albert Sechehaye** rassemblent leurs notes et celles de leurs camarades, et publient en **1916** le *Cours de linguistique générale*. C'est l'un des livres les plus influents du XXᵉ siècle.

Saussure pose **trois grandes distinctions structurelles** :

(1) Le **signe linguistique** est composé d'un [signifiant]{accent} (l'image sonore : la séquence de sons /a-r-b-r/) et d'un [signifié]{accent} (le concept : *l'idée d'arbre*). La relation entre les deux est **arbitraire** : rien dans /arbr/ ne ressemble à un arbre. C'est ce qui explique que la même chose s'appelle *tree* en anglais, *Baum* en allemand, *árbol* en espagnol, *木* en chinois.

(2) Distinction entre **langue** (le système abstrait partagé par toute une communauté) et **parole** (l'acte concret par lequel un locuteur particulier utilise la langue dans un moment particulier). La linguistique étudie la langue, pas la parole.

(3) Distinction entre **synchronie** (la langue à un moment donné, vue comme un système) et **diachronie** (l'évolution de la langue dans le temps). Saussure plaide pour la primauté de la **synchronie** : pour comprendre comment une langue fonctionne, il faut d'abord la voir comme un système cohérent à un instant donné, pas comme un produit historique.

Cette approche fonde le **structuralisme**, qui dépasse largement la linguistique : Claude Lévi-Strauss l'applique à l'anthropologie dans les années 1950, Roland Barthes à l'analyse littéraire, Jacques Lacan à la psychanalyse, Michel Foucault à l'histoire des sciences humaines. Le XXᵉ siècle des sciences humaines françaises est **structuraliste**, donc en dette envers Saussure.`
    },

    {
      type: 'encadre',
      label: 'L\'arbitraire du signe',
      contenu_md: `Rien dans la séquence sonore /chat/ ne ressemble à un chat. Rien dans /sat/ (sanskrit *biṣa*), /cat/ (anglais), /Katze/ (allemand), /mao/ (chinois 猫) non plus. Toute langue assigne **arbitrairement** un signifiant à un signifié, et c'est cette arbitrarité qui fait le langage **conventionnel** plutôt que naturel. Conséquence : le langage humain n'est **pas un système de cris** réflexes ou imitatifs — c'est un système de symboles. Saussure y voit la propriété fondatrice de toute culture humaine.`
    },

    {
      type: 'texte',
      titre: `<em>Chomsky</em> et la grammaire universelle`,
      contenu_md:
`Saussure avait fondé la linguistique du XXᵉ siècle. **Noam Chomsky** la refonde en 1957, à 28 ans, avec un livre court mais explosif : ***Syntactic Structures***.

Chomsky est étudiant en linguistique au MIT. Il observe une chose troublante : **un enfant apprend à parler une langue extraordinairement complexe en quelques années**, à partir d'un nombre limité d'exemples (souvent fragmentaires et grammaticalement incorrects, ceux que ses parents prononcent), et **sans correction systématique**. Or, aucun système d'intelligence artificielle de l'époque n'arrive à reproduire cet exploit. **Comment l'enfant fait-il ?**

La réponse de Chomsky : l'enfant ne **part pas de zéro**. Il possède dès la naissance un **dispositif d'acquisition du langage** (*Language Acquisition Device*, LAD), une **grammaire universelle** innée câblée dans le cerveau humain par l'évolution. Cette grammaire universelle contient les **principes communs à toutes les langues** humaines possibles : la phrase a un sujet, un verbe et un complément ; on peut emboîter des subordonnées ; on peut faire des questions et des négations. Ce que l'enfant doit apprendre, ce ne sont **pas les principes**, mais les **paramètres locaux** : dans ma langue, le sujet vient-il avant ou après le verbe ? Y a-t-il des articles définis ? Les noms ont-ils un genre ?

Cette hypothèse — que le langage est en grande partie **biologique** — était scandaleuse en 1957, à une époque où la psychologie dominante (le **behaviorisme** de Skinner) prétendait que tout comportement humain, y compris le langage, s'expliquait par conditionnement. Chomsky publie en 1959 une **recension assassine** du livre de Skinner *Verbal Behavior*, qui marque la fin du behaviorisme et la naissance de la **psychologie cognitive**.

La théorie de Chomsky a évolué considérablement depuis 1957 — *Aspects of the Theory of Syntax* (1965), *Lectures on Government and Binding* (1981), le programme **minimaliste** (1995). En 2002, dans un article célèbre cosigné avec **Marc Hauser** et **Tecumseh Fitch** dans *Science*, Chomsky propose même que la **seule** vraie spécificité du langage humain par rapport aux autres systèmes de communication animaux soit la **récursivité** : la capacité d'**emboîter** une phrase dans une phrase, sans limite théorique.

La théorie reste **contestée** — notamment par les linguistes fonctionnalistes qui pensent que le langage émerge de l'usage plus que d'un câblage biologique. Mais elle a structuré tout le débat depuis 70 ans.`
    },

    {
      type: 'widget',
      composant: 'ListeMethodes',
      titre: 'Quatre niveaux d\'analyse de toute langue',
      params: {
        methodes: [
          { titre: 'Phonologie', description: 'Étude des **sons** signifiants d\'une langue (les **phonèmes**). Le français a ~36 phonèmes ; le hawaïen ~13 (a-e-i-o-u + 8 consonnes) ; le !xóõ du Botswana plus de **140** dont les fameux **clics** absorbés des langues khoïsanes. Chaque langue choisit son inventaire.' },
          { titre: 'Morphologie', description: 'Étude de la **formation des mots**. Le français combine : *re-* + *garder* = *regarder* ; *chant-* + *-eur* = *chanteur*. Certaines langues (**agglutinantes** comme le turc, le finnois, le japonais) construisent des mots très longs en empilant les morphèmes : turc *evlerimde* = *dans mes maisons*.' },
          { titre: 'Syntaxe', description: 'Étude des règles qui combinent les mots en **phrases**. Ordre canonique : SVO (sujet-verbe-objet, français, anglais, chinois), SOV (japonais, hindi, turc), VSO (irlandais, arabe). **80 %** des langues sont SVO ou SOV.' },
          { titre: 'Sémantique', description: 'Étude du **sens**. Comment les mots et les phrases réfèrent au monde, comment les significations se composent (le sens de *"chat blanc"* dépend de *"chat"* + *"blanc"*), comment les ambiguïtés se résolvent (*"j\'ai vu un homme avec un télescope"*).' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Ce qui rend le <em>langage humain</em> unique`,
      contenu_md:
`Beaucoup d'espèces communiquent. Les abeilles **dansent** pour indiquer la direction et la distance d'une source de nectar. Les chants des baleines portent sur des centaines de kilomètres. Les vervet africains ont des cris d'alarme distincts pour "léopard" (montez à l'arbre), "aigle" (cachez-vous au sol), "serpent" (regardez vos pieds). Les grands singes — chimpanzés, bonobos, gorilles — ont été entraînés à utiliser des centaines de signes ou de symboles dans des expériences de laboratoire.

Pourtant, **le langage humain reste sans équivalent connu** dans la nature. Trois propriétés combinées le distinguent :

(1) [Récursivité]{accent} : un humain peut emboîter des phrases dans des phrases, sans limite théorique : *"Je sais que tu penses que je crois que tu mens"*. Aucun système animal connu ne le fait. Chomsky, Hauser et Fitch (2002) en font la propriété définitoire du langage humain — proposition controversée.

(2) [Double articulation]{accent} (concept d'**André Martinet**, 1960) : un nombre fini de **phonèmes** (~30 dans la plupart des langues) se combine pour produire un nombre infini de **monèmes** (unités de sens). Économie radicale : un humain qui maîtrise une trentaine de sons peut former des **millions de mots**, alors qu'aucun système animal n'a cette structure à deux étages.

(3) [Déplacement]{accent} (concept de **Charles Hockett**, 1960) : le langage humain permet de parler de ce qui n'est **pas là** — l'absent, l'imaginaire, le futur, le contrefactuel. *"Hier, j'ai vu un dragon ailé"* est une phrase parfaitement formée même si rien de tel n'a eu lieu. Aucun système animal n'a cette capacité à se détacher de l'ici-et-maintenant.

Les trois ensemble — récursivité, double articulation, déplacement — donnent au langage humain son **pouvoir infini**. Combinés à la **transmission culturelle** (l'enfant apprend la langue de sa communauté, pas un répertoire génétiquement câblé), ils font du langage la propriété cognitive sans doute la plus distinctive de notre espèce, *Homo sapiens* — celle qui a permis l'art, le mythe, la science, l'écriture ([[ecriture-cuneiforme]]), l'épopée ([[epopee]]) et les civilisations.`
    },

    {
      type: 'encadre',
      label: 'La mort des langues',
      contenu_md: `Sur les ~7 000 langues parlées aujourd'hui, **la moitié auront disparu d'ici 2100**. Une langue meurt quand son dernier locuteur natif s'éteint sans avoir transmis. Causes principales : **urbanisation**, **scolarisation en langue dominante**, **stigmatisation sociale**, **politiques d'État** explicitement assimilationnistes. La diversité linguistique mondiale s'effondre **dix fois plus vite que la diversité biologique** — c'est l'une des grandes extinctions silencieuses du XXIᵉ siècle. Des initiatives existent : enregistrement, documentation, écoles d'immersion, dictionnaires. Le **gallois**, le **breton**, le **māori** se sont **stabilisés ou redéveloppés** grâce à des politiques volontaristes.`
    }

  ],

  quiz: [
    {
      q: `Combien de langues sont parlées dans le monde aujourd'hui, et quelle est leur tendance ?`,
      options: [
        `Environ 500, en augmentation`,
        `Environ 7 000, en diminution rapide (une langue disparaît tous les 14 jours en moyenne)`,
        `Environ 50 000, stable`,
        `Environ 200, en augmentation grâce à internet`
      ],
      correcte: 1,
      explication: `On compte aujourd'hui **environ 7 000 langues** parlées dans le monde, mais ce nombre **diminue rapidement** : selon l'UNESCO, une langue disparaît **tous les 14 jours** en moyenne, et **50 %** d'entre elles auront disparu d'ici 2100. La répartition est par ailleurs très inégale : 96 % des langues sont parlées par seulement 4 % de l'humanité, et la quasi-totalité des locuteurs se concentre sur quelques dizaines de "grandes" langues (mandarin, espagnol, anglais, hindi, arabe…). Une langue qui meurt, c'est une cosmovision unique qui disparaît avec ses derniers locuteurs.`
    },
    {
      q: `Qu'est-ce que le proto-indo-européen ?`,
      options: [
        `Une langue antique dont les manuscrits ont été retrouvés à Pompéi`,
        `Une langue-mère reconstruite par comparaison, jamais directement attestée, parlée il y a ~6 000 ans, ancêtre commune du français, anglais, hindi, grec, etc.`,
        `Une variante moderne du grec ancien`,
        `Une langue artificielle créée au XIXᵉ siècle`
      ],
      correcte: 1,
      explication: `Le **proto-indo-européen** est une **langue-mère reconstituée**, parlée il y a environ **6 000 ans** probablement dans les **steppes pontiques** au nord de la mer Noire. Elle n'a **laissé aucun document écrit** — personne ne l'a jamais entendue parler. Mais en comparant systématiquement les correspondances régulières entre ses descendantes (latin, grec, sanskrit, slaves, germaniques, celtiques, iraniennes, arménien, albanais), les linguistes ont **reconstruit** sa phonologie, sa grammaire, son vocabulaire. La méthode a été initiée par **William Jones** en 1786, formalisée par Bopp, Rask et les comparatistes du XIXᵉ siècle. C'est une des grandes prouesses intellectuelles de la linguistique historique.`
    },
    {
      q: `Que distingue Saussure dans le signe linguistique ?`,
      options: [
        `Le mot écrit et le mot parlé`,
        `Le signifiant (image sonore) et le signifié (concept) — leur relation étant arbitraire`,
        `Le sens littéral et le sens figuré`,
        `La langue ancienne et la langue moderne`
      ],
      correcte: 1,
      explication: `**Ferdinand de Saussure**, dans le ***Cours de linguistique générale*** (1916), définit le **signe linguistique** comme l'union de deux faces inséparables : le **signifiant** (l'image sonore, la chaîne phonique /a-r-b-r/) et le **signifié** (le concept mental, l'idée d'arbre). La relation entre les deux est **arbitraire** — c'est-à-dire conventionnelle : rien dans la sonorité ne ressemble à un arbre, et c'est pourquoi la même chose s'appelle *tree*, *Baum*, *árbol*, *木*, selon les langues. Cette arbitrarité est ce qui rend le langage humain **symbolique** et non naturel — propriété fondatrice de toute la culture humaine.`
    },
    {
      q: `Quelle est la thèse centrale de Chomsky en 1957 ?`,
      options: [
        `Le langage est entièrement appris par imitation`,
        `Le langage humain repose sur une grammaire universelle innée câblée dans le cerveau`,
        `Toutes les langues descendent d'une langue-mère unique apparue il y a 100 000 ans`,
        `Les langues n'ont aucune structure commune`
      ],
      correcte: 1,
      explication: `Dans ***Syntactic Structures*** (1957), **Noam Chomsky** propose que tous les humains naissent avec une **structure linguistique innée** qu'il appelle la **grammaire universelle**, câblée dans le cerveau par l'évolution. Cette grammaire universelle contient les **principes communs** à toutes les langues humaines possibles ; ce que l'enfant apprend, ce sont seulement les **paramètres** spécifiques à sa langue maternelle. Cette hypothèse explique pourquoi tous les enfants normaux acquièrent une langue extraordinairement complexe **en quelques années**, à partir d'exemples fragmentaires, sans correction systématique — ce qu'aucun modèle d'apprentissage purement statistique ne reproduit. La thèse a structuré tout le débat linguistique depuis 70 ans, même si elle reste contestée.`
    },
    {
      q: `Combien de phonèmes y a-t-il en français, et quelle est la fourchette mondiale ?`,
      options: [
        `Tous les humains utilisent les mêmes 26 phonèmes — alphabet universel`,
        `Le français en a ~36, mais on va de ~11 (rotokas, Papouasie) à plus de 140 (!xóõ, Botswana, avec ses clics)`,
        `Le français en a 26, comme toutes les langues européennes`,
        `Le français en a plus de 100`
      ],
      correcte: 1,
      explication: `Le **français** a environ **36 phonèmes** (les sons distinctifs qui peuvent changer le sens d'un mot), répartis en voyelles, consonnes et semi-consonnes. Mais ce nombre varie considérablement entre langues : le **rotokas** parlé en Papouasie-Nouvelle-Guinée n'a que **11 phonèmes** ; le **hawaïen** en a 13 ; le **!xóõ** du Botswana plus de **140**, en partie grâce à ses fameux **clics** (sons consonantiques produits par succion, hérités des langues khoïsanes ancestrales). Chaque langue choisit librement son inventaire phonologique dans l'espace de ce que l'appareil phonatoire humain peut produire. Cette variabilité montre que les phonèmes sont des **conventions culturelles**, pas une donnée biologique fixe.`
    },
    {
      q: `Qu'est-ce que la "double articulation" du langage selon André Martinet ?`,
      options: [
        `Le fait que les humains parlent deux langues différentes en moyenne`,
        `Un nombre fini de phonèmes se combine en un nombre infini de monèmes (unités de sens) — économie radicale unique au langage humain`,
        `La distinction entre parole et chant`,
        `L'écart entre langue écrite et langue parlée`
      ],
      correcte: 1,
      explication: `Concept formalisé par **André Martinet** dans ***Éléments de linguistique générale*** (1960). La double articulation décrit le fait qu'une langue humaine fonctionne sur **deux niveaux superposés** : (1) un **inventaire fini de phonèmes** (~30 dans la plupart des langues) dépourvus de sens en eux-mêmes, qui (2) se combinent pour produire un **nombre infini de monèmes** (unités de sens). Cette structure à deux étages permet une **économie radicale** : un humain qui maîtrise une trentaine de sons peut former des **millions de mots** et un nombre infini de phrases. **Aucun système de communication animal connu** n'a cette structure — c'est l'une des trois propriétés (avec la récursivité et le déplacement) qui rendent le langage humain unique.`
    },
    {
      q: `Quelle est la position de Chomsky sur ce qui rend le langage humain unique par rapport aux animaux ?`,
      options: [
        `Le langage humain n'est pas unique, juste plus développé`,
        `Selon son article avec Hauser et Fitch en 2002, la récursivité — la capacité d'emboîter des phrases dans des phrases — serait LA spécificité humaine`,
        `Le langage humain est unique parce qu'il utilise des cordes vocales`,
        `Le langage humain est unique parce qu'il s'écrit`
      ],
      correcte: 1,
      explication: `Dans un article célèbre publié dans ***Science*** en 2002, **Marc Hauser, Noam Chomsky et Tecumseh Fitch** proposent que **la seule vraie spécificité du langage humain** par rapport aux systèmes de communication animaux soit la **récursivité** — la capacité à **emboîter** des phrases dans des phrases sans limite théorique : *"Je sais que tu penses que je crois que…"*. Aucun système animal connu ne le fait. Cette thèse "minimaliste" reste très **débattue** : certains linguistes (notamment Daniel Everett, à propos du **pirahã** d'Amazonie) prétendent avoir trouvé des langues humaines sans récursivité, ce qui invaliderait l'hypothèse. Le débat reste vivant.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Linguistique',
      definition: `Étude **scientifique** du langage humain : ses structures (phonologie, morphologie, syntaxe, sémantique), ses familles, son évolution, ses universaux. Discipline carrefour entre sciences humaines, biologie cognitive et informatique. Fondée comme science moderne au XIXᵉ siècle.`
    },
    {
      terme: 'Famille de langues',
      definition: `Ensemble de langues descendant d'une **langue-mère commune** disparue, identifiée par comparaison systématique des correspondances régulières de vocabulaire et de grammaire. Plus grandes familles : **indo-européenne** (~3,3 Md), **sino-tibétaine** (~1,4 Md), **niger-congo** (~600 M), **afro-asiatique** (~500 M).`
    },
    {
      terme: 'Proto-indo-européen',
      definition: `**Langue-mère reconstituée** par comparaison, parlée il y a ~6 000 ans probablement dans les steppes pontiques. **Jamais attestée par écrit** — entièrement reconstruite à partir des correspondances entre ses descendantes (latin, grec, sanskrit, slave, germanique, etc.). Une des grandes prouesses de la linguistique historique.`
    },
    {
      terme: 'Signe linguistique',
      definition: `Unité de base de la langue selon **Saussure** (1916). Composé d'un **signifiant** (image sonore : la séquence /a-r-b-r/) et d'un **signifié** (concept : *l'idée d'arbre*). La relation entre les deux est **arbitraire** — purement conventionnelle, sans ressemblance entre son et chose.`
    },
    {
      terme: 'Grammaire universelle',
      definition: `Hypothèse de **Noam Chomsky** (1957) : tous les humains naissent avec une **structure linguistique innée** câblée dans le cerveau, contenant les **principes communs** à toutes les langues humaines possibles. L'enfant n'apprend que les **paramètres locaux** spécifiques à sa langue maternelle. Explique l'acquisition rapide du langage par les enfants ; reste contestée.`
    },
    {
      terme: 'Phonème',
      definition: `**Plus petite unité sonore distinctive** d'une langue donnée — son qui, échangé contre un autre, peut changer le sens d'un mot (*pas* vs *bas* en français, différenciés par /p/ vs /b/). Le français a ~36 phonèmes, le hawaïen ~13, le !xóõ plus de 140 (avec ses clics). Chaque langue choisit son inventaire.`
    },
    {
      terme: 'Double articulation',
      definition: `Concept d'**André Martinet** (1960). Le langage humain fonctionne sur **deux niveaux** : un nombre fini de **phonèmes** (~30) sans sens en eux-mêmes se combinent pour former un nombre infini de **monèmes** (unités de sens). Économie radicale unique au langage humain — aucun système animal n'a cette structure à deux étages.`
    },
    {
      terme: 'Récursivité',
      definition: `Capacité d'**emboîter** une phrase dans une phrase, sans limite théorique : *"Je sais que tu penses que je crois que tu mens"*. Selon **Hauser, Chomsky, Fitch (2002)**, ce serait **LA propriété définitoire** qui distingue le langage humain de tous les systèmes de communication animaux connus. Thèse contestée.`
    },
    {
      terme: 'Synchronie / diachronie',
      definition: `Distinction de **Saussure**. La **synchronie** étudie la langue à un moment donné comme un **système** cohérent (l'état du français en 2026). La **diachronie** étudie l'**évolution** de la langue dans le temps (comment le latin a donné le français). Saussure plaide pour la primauté de la synchronie pour comprendre comment une langue fonctionne.`
    },
    {
      terme: 'Sociolinguistique',
      definition: `Branche de la linguistique qui étudie les **rapports entre langue et société** : variations dialectales, sociolectes (variations selon classe sociale), prestige linguistique, contacts de langues, créoles, **mort des langues**. Pionnier : *William Labov* à partir des années 1960 (étude des variations à New York).`
    }
  ]

});
