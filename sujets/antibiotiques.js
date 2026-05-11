/* ===================================================================
   SUJET — Antibiotiques et résistance bactérienne
   ===================================================================
   Un siècle d'arme miracle, et déjà la fin annoncée.
   Domaines : Médecine, Microbiologie
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'antibiotiques',
    titre: `Les <em>antibiotiques</em> et la résistance bactérienne`,
    domaines: ['Médecine', 'Microbiologie'],
    tags: ['fleming', 'pénicilline', 'résistance', 'oms', 'phages', 'évolution'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['systeme-immunitaire', 'evolution-darwin', 'effet-placebo'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Comprendre l'arme thérapeutique la plus puissante du XXᵉ siècle — sa découverte par accident, ses mécanismes moléculaires, et la menace montante de son obsolescence par sélection naturelle accélérée chez les bactéries.`,

  points_cles: [
    `**Alexander Fleming** découvre la **pénicilline** par hasard en **1928** en remarquant qu'une moisissure (*Penicillium notatum*) tue les staphylocoques d'une boîte de Petri oubliée.`,
    `La production industrielle de pénicilline, mise au point par **Florey** et **Chain** pendant la Seconde Guerre mondiale, sauve des centaines de milliers de vies dès **1944-1945**. Nobel partagé en **1945**.`,
    `Un antibiotique attaque une **cible spécifique des bactéries** absente chez l'humain : paroi cellulaire (pénicillines), synthèse des protéines (tétracyclines, macrolides), réplication de l'ADN (quinolones), métabolisme (sulfamides).`,
    `Les antibiotiques ne fonctionnent **pas** contre les virus — d'où l'inutilité de la pénicilline contre la grippe, le rhume ou la COVID-19. Mauvaise compréhension qui a alimenté la sur-prescription.`,
    `La **résistance** est une conséquence directe de la sélection naturelle : sous pression antibiotique, les bactéries porteuses de mutations résistantes survivent et se multiplient. Mécanisme exemplaire d'[[evolution-darwin]].`,
    `L'**OMS** classe la résistance antimicrobienne parmi les **dix plus grandes menaces** pour la santé mondiale. On estime à environ **1,3 million de décès directs** par an en 2019, et **4,9 millions** de décès associés.`,
    `Aucune nouvelle classe d'antibiotique n'a été commercialisée depuis les années **1980**. Les pipelines de R&D sont quasiment à sec — modèle économique brisé.`,
    `Pistes alternatives : **phagothérapie** (utilisation de virus tueurs de bactéries), **peptides antimicrobiens**, vaccins préventifs, manipulation du microbiote.`
  ],

  carte_mentale: {
    central: 'antibiotiques',
    noeuds: [
      { id: 'antibiotiques', label: 'Antibiotiques', description: `Molécules tuant ou inhibant la croissance des bactéries en exploitant des cibles spécifiques absentes chez l'humain.` },
      { id: 'histoire', label: 'Histoire', description: `De la découverte fortuite de Fleming en 1928 à la production industrielle de masse pendant la Seconde Guerre mondiale.` },
      { id: 'mecanismes', label: 'Mécanismes d\'action', description: `Quatre grandes cibles : paroi cellulaire, ribosome, ADN, métabolisme.` },
      { id: 'resistance', label: 'Résistance', description: `Sélection naturelle accélérée : les bactéries porteuses de mutations résistantes survivent et prolifèrent.` },
      { id: 'menace', label: 'Crise sanitaire', description: `L'OMS classe la résistance antimicrobienne parmi les dix premières menaces sanitaires mondiales.` },
      { id: 'alternatives', label: 'Alternatives', description: `Phages, peptides antimicrobiens, vaccins, modulation du microbiote.` },

      // Histoire
      { id: 'fleming', label: 'Fleming (1928)', description: `Découverte fortuite de la pénicilline dans une boîte oubliée contaminée par *Penicillium notatum*.`, parent: 'histoire' },
      { id: 'florey-chain', label: 'Florey & Chain', description: `À Oxford, isolent la pénicilline en quantité utilisable. Production industrielle américaine pendant la guerre. **Nobel 1945** partagé avec Fleming.`, parent: 'histoire' },
      { id: 'age-or', label: 'Âge d\'or (1940-1980)', description: `Découverte successive des grandes classes : streptomycine, tétracyclines, macrolides, quinolones. Plus aucune nouvelle classe depuis ~1980.`, parent: 'histoire' },

      // Mécanismes
      { id: 'paroi', label: 'Paroi bactérienne', description: `Cible des **pénicillines** et **céphalosporines**. La bactérie ne peut plus reconstruire sa paroi pendant la division et éclate.`, parent: 'mecanismes' },
      { id: 'ribosome', label: 'Synthèse protéique', description: `Cible des **tétracyclines**, **macrolides**, **aminosides**. Bloquent le ribosome bactérien (différent du nôtre).`, parent: 'mecanismes' },
      { id: 'adn-cible', label: 'ADN bactérien', description: `Cible des **quinolones** (inhibent l'ADN gyrase) et **rifampicine** (inhibe la transcription).`, parent: 'mecanismes' },

      // Résistance
      { id: 'mutations', label: 'Mutations', description: `Modifications aléatoires de l'[[adn-genetique]] bactérien qui rendent la cible insensible à l'antibiotique.`, parent: 'resistance' },
      { id: 'plasmides', label: 'Plasmides', description: `Petits ADN circulaires échangés entre bactéries même d'espèces différentes — **transmission horizontale** des gènes de résistance.`, parent: 'resistance' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Un <em>hasard</em>, septembre 1928`,
      contenu_md:
`En septembre **1928**, **Alexander Fleming**, bactériologiste écossais du St Mary's Hospital de Londres, rentre de vacances. Avant son départ, il avait laissé sur sa paillasse plusieurs boîtes de Petri contenant des cultures de **staphylocoques**. À son retour, il les inspecte et constate l'inattendu : une des boîtes est contaminée par une moisissure verte. Autour de cette moisissure, les colonies de staphylocoques ont **disparu**.

Fleming nomme la substance responsable la *penicillin*, du nom du champignon **Penicillium notatum** qu'il identifie. Il publie en 1929. La communauté scientifique n'y prête guère attention — Fleming ne parvient pas à isoler la molécule en quantité suffisante, et la pénicilline reste pendant **plus d'une décennie** une curiosité de laboratoire.

C'est en **1939-1941**, à Oxford, qu'une équipe dirigée par **Howard Florey** et **Ernst Chain** met au point les méthodes de purification et de production en quantité. Leur premier essai clinique en 1941 — sur un policier mourant d'une septicémie — démontre une amélioration spectaculaire, hélas suivie d'une rechute fatale faute de pénicilline disponible. Mais la preuve est faite.

La Seconde Guerre mondiale accélère tout. L'industrie pharmaceutique américaine, mobilisée, lance la production de masse. Au moment du **débarquement de Normandie en juin 1944**, les blessés alliés sont les premiers de l'histoire à bénéficier d'antibiotiques systématiques. Le taux de mortalité par infection post-opératoire **s'effondre**. Fleming, Florey et Chain reçoivent le **Nobel de médecine 1945**.

Une nouvelle ère commence.`
    },

    {
      type: 'texte',
      titre: `Quatre <em>familles</em> de cibles`,
      contenu_md:
`Un antibiotique efficace doit faire mal aux bactéries sans faire mal à toi. Le principe central est de cibler une [structure ou un mécanisme spécifique des bactéries]{accent} — quelque chose que les cellules humaines ne possèdent pas, ou possèdent sous une forme assez différente.

Les bactéries en ont plusieurs. Elles ont une **paroi cellulaire** rigide en peptidoglycane que nos cellules n'ont pas. Elles ont des **ribosomes** légèrement différents des nôtres (sous-unités 70S contre 80S). Elles ont leur propre machinerie de **réplication** et de **transcription** de l'ADN. Elles ont des voies métaboliques (comme la synthèse de l'acide folique) que nous suppléons par notre alimentation et qu'elles doivent fabriquer elles-mêmes.

Chacune de ces différences est exploitée par une famille d'antibiotiques. C'est pourquoi un même antibiotique peut être actif contre des dizaines d'espèces bactériennes différentes (large spectre) ou au contraire ne viser qu'un type précis (spectre étroit).

À noter : les antibiotiques ne fonctionnent **pas du tout** contre les virus. Un virus n'a ni paroi, ni ribosome propre, ni métabolisme — il détourne la machinerie de ta cellule. Prescrire une pénicilline pour une grippe ou un rhume n'a aucun effet médical, mais participe à la pression de sélection sur les bactéries opportunistes de l'organisme. C'est une cause majeure de **mauvais usage** historique.`
    },

    {
      type: 'widget',
      titre: `Les grandes familles d'antibiotiques`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Paroi',
            titre: 'Bêta-lactamines',
            description: `**Pénicillines**, **céphalosporines**, carbapénèmes. Bloquent la synthèse de la **paroi** en peptidoglycane. La bactérie en cours de division éclate sous la pression osmotique. Famille découverte en premier (Fleming).`
          },
          {
            tag: 'Ribosome',
            titre: 'Macrolides & tétracyclines',
            description: `**Érythromycine**, **azithromycine**, **doxycycline**. Bloquent les **ribosomes** bactériens (70S), empêchant la synthèse des protéines. Notre ribosome 80S est suffisamment différent pour être épargné.`
          },
          {
            tag: 'ADN',
            titre: 'Quinolones',
            description: `**Ciprofloxacine**, **lévofloxacine**. Inhibent l'**ADN gyrase** bactérienne, indispensable à la réplication. Très large spectre, mais effets secondaires non négligeables (tendinopathies notamment).`
          },
          {
            tag: 'Métabolisme',
            titre: 'Sulfamides',
            description: `**Bactrim** et apparentés. Bloquent la synthèse de l'**acide folique** chez les bactéries, qui doivent le fabriquer (alors que nous l'obtenons par l'alimentation). Première famille d'antibiotiques de synthèse, années 1930.`
          }
        ]
      }
    },

    {
      type: 'encadre',
      label: `Antibiotique n'est pas désinfectant`,
      contenu_md: `Un **antibiotique** agit à l'intérieur du corps, par voie générale (sang) ou locale (peau, oreille), en exploitant une **cible biologique** spécifique des bactéries. Un **antiseptique** ou **désinfectant** (eau de Javel, alcool, peroxyde d'hydrogène) agit par destruction chimique non spécifique — il tue les bactéries mais détruirait aussi tes propres cellules. C'est pourquoi on utilise les uns à l'intérieur du corps, les autres seulement à l'extérieur ou sur des surfaces inertes.`
    },

    {
      type: 'texte',
      titre: `Le <em>retour</em> de la sélection naturelle`,
      contenu_md:
`Dès **1945**, dans son discours de réception du Nobel, **Fleming** prononce une prophétie remarquable. Si l'on utilise la pénicilline « à des doses non létales ou de manière déraisonnable », prévient-il, on **éduquera les microbes à résister**. La prédiction est précise : Fleming voit déjà à l'œuvre ce que [[evolution-darwin]] avait formalisé un siècle plus tôt.

Le mécanisme est d'une logique implacable. Dans une population de milliards de bactéries, quelques individus portent — par hasard, par mutation — une résistance à un antibiotique donné. En l'absence de cet antibiotique, ils n'ont aucun avantage : ils représentent une minorité noyée dans la masse. Mais dès que l'antibiotique est administré, tous les sensibles meurent et les résistants survivent. Ils se multiplient sans concurrence. En quelques jours, la population entière est résistante.

Pire : les bactéries peuvent **s'échanger des gènes** de résistance, même entre espèces différentes, par l'intermédiaire de petits ADN circulaires appelés [plasmides]{accent}. C'est ce qu'on appelle le **transfert horizontal**. Une bactérie qui développe une résistance peut la transmettre à ses voisines comme on partagerait une recette. C'est radicalement plus rapide que l'évolution classique par descendance.

Les conséquences sanitaires sont dramatiques. Des bactéries autrefois banales — staphylocoques, *Escherichia coli*, gonocoques, **tuberculose** — deviennent multi-résistantes. Une infection urinaire ou une plaie post-opératoire peuvent redevenir mortelles, comme avant 1928.`
    },

    {
      type: 'widget',
      titre: `Comment une bactérie résiste`,
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: 'Modifier la cible',
            description: `Une mutation change la forme de la protéine ciblée par l'antibiotique. La molécule ne peut plus s'y fixer. C'est par exemple le cas de la **méthicilline-résistance** des staphylocoques (*MRSA*), qui modifient la cible des bêta-lactamines.`
          },
          {
            titre: 'Détruire la molécule',
            description: `La bactérie produit une **enzyme** qui dégrade l'antibiotique avant qu'il agisse. Les **bêta-lactamases** cassent la structure de la pénicilline. Pour contourner cela, on associe des inhibiteurs de ces enzymes — comme l'**acide clavulanique** dans l'Augmentin.`
          },
          {
            titre: 'Expulser la molécule',
            description: `Des **pompes** d'efflux dans la membrane bactérienne rejettent activement l'antibiotique hors de la cellule. Très efficace contre les tétracyclines et les quinolones. Mécanisme souvent porté par plasmide.`
          },
          {
            titre: 'Empêcher l\'entrée',
            description: `Modification des **porines** (canaux d'entrée) de la paroi extérieure des bactéries Gram négatives, qui ne laissent plus passer la molécule. Mécanisme particulièrement gênant chez *Pseudomonas aeruginosa* et *Acinetobacter*.`
          },
          {
            titre: 'Voies métaboliques alternatives',
            description: `Quand un antibiotique bloque une voie métabolique, certaines bactéries développent une **voie de contournement** par un autre chemin biochimique. Exemple : résistance aux sulfamides via une enzyme alternative non sensible.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Une <em>crise</em> mondiale annoncée`,
      contenu_md:
`En **2014**, le rapport britannique commandité par le Premier ministre — le *O'Neill Review on Antimicrobial Resistance* — estime qu'à l'horizon **2050**, la résistance pourrait causer **10 millions de morts par an** dans le monde, soit plus que le cancer. Le chiffre est extrapolé et discuté, mais l'ordre de grandeur a alerté.

L'**Organisation mondiale de la santé** classe officiellement la **résistance antimicrobienne** parmi les **dix plus grandes menaces** pour la santé mondiale. Une étude publiée dans *The Lancet* en 2022 estime qu'en **2019**, environ **1,3 million de décès** ont été directement causés par la résistance, et **4,9 millions** y ont été associés.

Les causes du problème sont multiples et bien identifiées. **Sur-prescription** chez l'humain : encore aujourd'hui, dans de nombreux pays, des antibiotiques sont prescrits pour des **infections virales** où ils ne servent à rien. **Usage massif en élevage** : dans certains systèmes intensifs, des antibiotiques sont administrés en routine à titre préventif ou pour favoriser la croissance — pratique interdite dans l'UE depuis 2006 mais persistante ailleurs. **Vente sans ordonnance** dans plusieurs régions du monde. **Mauvaise observance** : un traitement interrompu trop tôt sélectionne les bactéries les plus résistantes.

À cela s'ajoute un problème industriel. Aucune **nouvelle classe** d'antibiotique n'a été commercialisée depuis les années **1980**. Les antibiotiques sont peu rentables : un patient les prend pendant 7 ou 14 jours, à la différence des traitements chroniques. Les laboratoires ont massivement déserté ce domaine de la R&D. Les pipelines sont quasi à sec.`
    },

    {
      type: 'widget',
      titre: `Chronologie d'une révolution médicale et de son érosion`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1928', titre: 'Fleming', description: `**Découverte fortuite** de la pénicilline à l'hôpital St Mary's de Londres. La portée n'est pas immédiatement comprise.` },
          { date: '1932-1935', titre: 'Sulfamides', description: `**Gerhard Domagk** découvre que le **Prontosil** soigne les infections streptococciques. **Nobel 1939** (qu'il ne pourra accepter qu'en 1947 — interdit par le régime nazi).` },
          { date: '1941-1945', titre: 'Production industrielle', description: `**Florey et Chain** à Oxford, puis les industriels américains, produisent la pénicilline en masse pour la guerre. Le débarquement de **juin 1944** marque le tournant.` },
          { date: '1944', titre: 'Streptomycine', description: `**Selman Waksman** isole un antibiotique efficace contre la **tuberculose**. Nobel 1952.` },
          { date: '1945', titre: 'Avertissement de Fleming', description: `Dans son **discours Nobel**, Fleming prédit que l'usage déraisonnable engendrera des résistances.` },
          { date: '1947', titre: 'Premières résistances', description: `Apparition rapide de souches résistantes de staphylocoques à la pénicilline. Confirmation immédiate de la prédiction.` },
          { date: '1950-1970', titre: 'Âge d\'or', description: `Découverte successive : tétracyclines, macrolides, glycopeptides, quinolones... toutes les grandes classes encore utilisées aujourd'hui.` },
          { date: '~1980', titre: 'Fin de l\'innovation', description: `Plus aucune nouvelle **classe** d'antibiotique commercialisée. Pipeline industriel en panne. Modèle économique brisé.` },
          { date: '2014', titre: 'Rapport O\'Neill', description: `Projection : **10 millions de morts par an** d'ici 2050 si rien ne change. Le Royaume-Uni alerte les G7/G20.` },
          { date: '2019', titre: 'Décompte global', description: `Étude du *Lancet* (2022) : ~1,3 million de décès directement attribués à la résistance en 2019. Sur le même ordre que la tuberculose.` }
        ]
      }
    },

    {
      type: 'encadre',
      label: `Le bon usage personnel`,
      contenu_md: `Quelques règles simples qui font la différence à l'échelle individuelle. **Un** : ne jamais demander d'antibiotique pour une infection virale (rhume, grippe, plupart des angines, bronchites simples) — ils ne servent à rien et participent à la sélection des résistances. **Deux** : si un antibiotique est prescrit, suivre la **durée prescrite intégralement**, même si on se sent mieux après deux jours. Un traitement interrompu trop tôt élimine les bactéries sensibles et laisse prospérer les résistantes. **Trois** : ne jamais "se servir" dans un reste d'antibiotique d'un précédent traitement. **Quatre** : les vaccinations préviennent les infections — un humain vacciné est un humain qui n'aura pas besoin d'antibiotique. Voir [[systeme-immunitaire]] pour la mécanique.`
    },

    {
      type: 'texte',
      titre: `Les <em>phages</em>, vieille idée redécouverte`,
      contenu_md:
`Bien avant la pénicilline, un médecin franco-canadien — **Félix d'Hérelle** — avait découvert en **1917** au pasteur de Paris des **virus qui tuent les bactéries**. Il les baptisa **bactériophages** (« mangeurs de bactéries »), abrégés en *phages*. L'idée d'utiliser un virus comme arme thérapeutique a été poursuivie pendant les années 1920-1930, notamment en **Géorgie soviétique** (Tbilissi) où un institut entier — l'**Institut Eliava**, fondé en 1923 — y est consacré.

Mais l'arrivée triomphante des antibiotiques a éclipsé la phagothérapie en Occident. Les phages, vivants, instables, spécifiques d'une bactérie unique, étaient industriellement plus complexes à produire que les antibiotiques chimiques. La technique a survécu surtout dans l'ex-bloc soviétique.

Aujourd'hui, devant l'impasse antibiotique, la phagothérapie est massivement [redécouverte]{accent}. Chaque phage est spécifique d'une espèce bactérienne précise — ce qui évite le problème de "destruction collatérale" du microbiote intestinal causé par les antibiotiques à large spectre. Les phages **coévoluent** avec leurs proies : quand une bactérie devient résistante à un phage, on peut souvent sélectionner un autre phage qui contourne la résistance. Plusieurs essais cliniques sont en cours en Europe et aux États-Unis.

D'autres pistes sont explorées : **peptides antimicrobiens** naturels (présents dans la peau des grenouilles, par exemple), **anticorps monoclonaux** anti-bactériens, **CRISPR** programmé pour tuer sélectivement certaines bactéries. Aucune ne remplace encore les antibiotiques à l'échelle clinique, mais l'arsenal commence à s'élargir.`
    }

  ],

  quiz: [
    {
      q: `Qui a découvert la pénicilline et en quelle année ?`,
      options: [
        `Louis Pasteur, 1885`,
        `Alexander Fleming, 1928`,
        `Florey et Chain, 1941`,
        `Selman Waksman, 1944`
      ],
      correcte: 1,
      explication: `Fleming remarque en septembre 1928, par hasard, qu'une moisissure (Penicillium notatum) tue les staphylocoques d'une boîte de Petri oubliée. Il faut attendre Florey et Chain à Oxford pour la production industrielle (1941). Tous trois reçoivent le Nobel en 1945.`
    },
    {
      q: `Les antibiotiques sont-ils efficaces contre les virus (grippe, rhume, COVID...) ?`,
      options: [
        `Oui, ils tuent aussi les virus`,
        `Non, ils ne fonctionnent que contre les bactéries`,
        `Oui, mais seulement à forte dose`,
        `Seulement contre certains virus comme la grippe`
      ],
      correcte: 1,
      explication: `Les antibiotiques ciblent des structures bactériennes (paroi, ribosome 70S, ADN gyrase, etc.) que les virus n'ont pas. Ils sont donc parfaitement inutiles contre les infections virales. La prescription inutile d'antibiotiques pour des infections virales a été l'une des causes majeures de la pression de sélection ayant engendré les résistances.`
    },
    {
      q: `Sur quelle cible cellulaire agit la pénicilline ?`,
      options: [
        `Le noyau bactérien`,
        `La paroi cellulaire des bactéries`,
        `Le ribosome bactérien`,
        `L'ADN bactérien`
      ],
      correcte: 1,
      explication: `Les pénicillines (et plus largement les bêta-lactamines) bloquent la synthèse du peptidoglycane qui forme la paroi des bactéries. Sans paroi solide, la bactérie en cours de division éclate sous la pression osmotique. Nos cellules n'ont pas de paroi : pas d'effet sur l'humain.`
    },
    {
      q: `Comment apparaît une résistance aux antibiotiques dans une population bactérienne ?`,
      options: [
        `Les bactéries apprennent à s'adapter au cours de leur vie`,
        `Par sélection naturelle : sous pression antibiotique, les bactéries porteuses de mutations résistantes survivent et se multiplient`,
        `Par invocation spontanée d'une nouvelle protéine`,
        `Seulement chez les bactéries génétiquement modifiées`
      ],
      correcte: 1,
      explication: `C'est un cas exemplaire de sélection darwinienne accélérée. Les mutations résistantes existent déjà à très faible fréquence dans toute population bactérienne ; l'antibiotique tue les sensibles et laisse prospérer les résistants. Phénomène prédit par Fleming dès 1945, observé dès 1947.`
    },
    {
      q: `Qu'est-ce qu'un plasmide dans le contexte de la résistance bactérienne ?`,
      options: [
        `Une protéine de la paroi`,
        `Un petit ADN circulaire échangeable entre bactéries, qui peut porter des gènes de résistance`,
        `Un virus bactérien`,
        `Un antibiotique de synthèse`
      ],
      correcte: 1,
      explication: `Les plasmides sont des petits cercles d'ADN distincts du chromosome principal. Les bactéries peuvent se les transmettre les unes aux autres, même entre espèces différentes — c'est le transfert horizontal. C'est ce qui rend la diffusion des résistances particulièrement rapide.`
    },
    {
      q: `Pourquoi est-il important de finir un traitement antibiotique même si l'on se sent mieux ?`,
      options: [
        `Pour des raisons légales`,
        `Pour éliminer aussi les bactéries les plus résistantes au traitement, qui mettent plus de temps à mourir — sinon ce sont elles qui repeuplent`,
        `Pour s'assurer que la fièvre revient`,
        `Aucune raison particulière`
      ],
      correcte: 1,
      explication: `Un traitement interrompu trop tôt tue les bactéries les plus sensibles et laisse survivre les plus résistantes, qui peuvent ensuite repeupler. C'est une cause majeure de sélection de souches résistantes à l'échelle individuelle puis collective.`
    },
    {
      q: `Combien de décès directs sont attribués à la résistance antimicrobienne dans le monde en 2019, selon l'étude publiée dans The Lancet en 2022 ?`,
      options: [
        `Environ 10 000`,
        `Environ 100 000`,
        `Environ 1,3 million`,
        `Environ 50 millions`
      ],
      correcte: 2,
      explication: `Étude majeure du Lancet publiée en 2022 : ~1,3 million de décès directement attribués à la résistance en 2019, et ~4,9 millions de décès associés. C'est sur le même ordre que la tuberculose. L'OMS classe la résistance antimicrobienne parmi les dix plus grandes menaces sanitaires mondiales.`
    },
    {
      q: `Qu'est-ce que la phagothérapie ?`,
      options: [
        `Une thérapie par lumière`,
        `Un traitement utilisant des bactériophages (virus tueurs de bactéries) au lieu d'antibiotiques chimiques`,
        `Une homéopathie spécialisée`,
        `Un nouveau type de vaccin`
      ],
      correcte: 1,
      explication: `Les bactériophages (ou "phages") sont des virus qui n'infectent que les bactéries. Découverts par Félix d'Hérelle en 1917, longtemps utilisés en Géorgie soviétique (Institut Eliava), aujourd'hui redécouverts en Occident face à l'impasse antibiotique. Chaque phage est très spécifique d'une espèce bactérienne, ce qui évite la destruction collatérale du microbiote.`
    }
  ]

});
