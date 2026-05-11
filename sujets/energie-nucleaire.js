/* ===================================================================
   SUJET — L'énergie nucléaire
   ===================================================================
   Quand E = mc² devient électricité, bombe ou rêve solaire.
   Domaines : Physique, Énergie
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'energie-nucleaire',
    titre: `L'<em>énergie nucléaire</em>`,
    domaines: ['Physique'],
    tags: ['fission', 'fusion', 'uranium', 'tchernobyl', 'iter', 'climat'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['theorie-relativite', 'mecanique-quantique', 'changement-climatique'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Comprendre comment quelques grammes de matière convertis en énergie selon E = mc² alimentent à la fois les centrales électriques, les armes les plus destructrices jamais conçues, et le rêve d'une énergie illimitée par fusion. Une histoire scientifique, politique et morale du XXᵉ siècle.`,

  points_cles: [
    `L'énergie nucléaire repose sur la conversion d'une infime fraction de **masse en énergie** selon **E = mc²** — *un gramme libère environ 25 millions de kWh*, soit dix millions de fois plus qu'un gramme de charbon.`,
    `La **fission** consiste à casser un noyau lourd (typiquement l'**uranium 235**) en fragments plus légers. C'est le principe de toutes les **440 centrales** en service dans le monde.`,
    `La **fusion** consiste à l'inverse à assembler des noyaux légers (deutérium + tritium → hélium) — c'est le mécanisme qui alimente le Soleil et toutes les étoiles.`,
    `Le **projet Manhattan** (1942-1945) a mené à la première bombe (Trinity, 16 juillet 1945) puis aux frappes de **Hiroshima et Nagasaki** (6 et 9 août 1945). Inauguration brutale de l'âge nucléaire.`,
    `La catastrophe de **Tchernobyl** (26 avril 1986) reste l'accident nucléaire civil le plus grave de l'histoire. **Fukushima** (11 mars 2011) suit après un tsunami géant. Ces deux événements remodèlent durablement le rapport mondial à l'atome.`,
    `**ITER**, en construction à Cadarache (Provence), est l'expérience internationale qui doit démontrer la faisabilité scientifique de la fusion contrôlée. Premier plasma reporté à **2034**, fusion D-T à **partir de 2039**.`,
    `Face au [changement climatique]{accent}, le nucléaire revient en grâce : il émet *environ 12 g CO₂/kWh* sur tout son cycle de vie, contre ~820 pour le charbon. Le débat se réinvente.`
  ],

  carte_mentale: {
    central: 'nucleaire',
    noeuds: [
      { id: 'nucleaire', label: 'Énergie nucléaire', description: `Exploitation des transformations de noyaux atomiques pour produire de l'énergie — civile ou militaire.` },
      { id: 'principe', label: 'Principe physique', description: `Conversion d'une fraction de masse en énergie selon E = mc². Liée à l'énergie de liaison nucléaire.` },
      { id: 'fission', label: 'Fission', description: `Cassure d'un noyau lourd. Base de toutes les centrales actuelles et des bombes A.` },
      { id: 'fusion', label: 'Fusion', description: `Assemblage de noyaux légers. Énergie des étoiles, espoir d'une électricité propre et abondante.` },
      { id: 'histoire', label: 'Histoire', description: `De Becquerel (1896) à Manhattan, Tchernobyl, Fukushima, ITER.` },
      { id: 'debat', label: 'Débat contemporain', description: `Climat, déchets, prolifération, coût : le nucléaire entre rejet et renaissance.` },

      // Fission
      { id: 'u235', label: 'Uranium 235', description: `Isotope fissile (0,7 % de l'uranium naturel). Sa fission dégage **200 MeV** par noyau et libère 2-3 neutrons qui peuvent en déclencher d'autres.`, parent: 'fission' },
      { id: 'reaction-chaine', label: 'Réaction en chaîne', description: `Si chaque fission déclenche en moyenne une fission supplémentaire, la réaction s'auto-entretient. Contrôlée dans un réacteur, divergente dans une bombe.`, parent: 'fission' },
      { id: 'reacteur', label: 'Réacteur', description: `Combustible enrichi (~4 % U-235), modérateur (eau, graphite), barres de contrôle (cadmium, bore), caloporteur (eau pressurisée le plus souvent).`, parent: 'fission' },

      // Fusion
      { id: 'soleil', label: 'Au cœur du Soleil', description: `Chaîne proton-proton : 4 protons → 1 noyau d'hélium-4, à **15 millions de degrés** et 250 milliards d'atmosphères. 4,3 millions de tonnes converties en énergie chaque seconde.`, parent: 'fusion' },
      { id: 'iter', label: 'ITER', description: `Tokamak géant à Cadarache. Plasma de deutérium-tritium chauffé à **150 millions de °C**, confiné par des champs magnétiques supraconducteurs.`, parent: 'fusion' },
      { id: 'ignition', label: 'Ignition au NIF', description: `Décembre 2022, en Californie : le **NIF** atteint pour la première fois un gain net (plus d'énergie produite par la fusion que livrée au combustible) par confinement inertiel laser.`, parent: 'fusion' },

      // Histoire
      { id: 'manhattan', label: 'Manhattan', description: `Projet secret américain (1942-1945). 130 000 personnes mobilisées, 2 milliards de dollars de l'époque. Aboutit à Trinity, Hiroshima, Nagasaki.`, parent: 'histoire' },
      { id: 'tchernobyl', label: 'Tchernobyl (1986)', description: `Réacteur n°4 de la centrale ukrainienne. Test mal conduit, défauts de conception du RBMK. Cœur fondu, panache radioactif sur l'Europe.`, parent: 'histoire' },
      { id: 'fukushima', label: 'Fukushima (2011)', description: `Tsunami de 14 mètres après le séisme du Tōhoku. Trois cœurs en fusion, 165 000 personnes évacuées. Sortie du nucléaire décrétée par l'Allemagne dans la foulée.`, parent: 'histoire' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `D'<em>Einstein</em> à la centrale`,
      contenu_md:
`Toute l'énergie nucléaire tient dans une équation que tu connais déjà : **E = mc²** (voir [[theorie-relativite]]). Quand un noyau atomique se transforme, sa masse finale est très légèrement **inférieure** à sa masse initiale. Cette différence — quelques millièmes pour les réactions les plus efficaces — est convertie en énergie selon le facteur *c²*, gigantesque (environ 9·10¹⁶ m²/s²).

L'effet est spectaculaire : un seul gramme de matière converti intégralement représenterait environ **25 millions de kWh**, soit la consommation électrique annuelle d'environ 4 000 foyers français. Dans la pratique, on ne convertit qu'une infime fraction (moins d'un millième pour la fission, environ 0,7 % pour la fusion solaire). Cela suffit pour qu'**un gramme d'uranium fissionné libère autant d'énergie que la combustion de trois tonnes de charbon**.

Toute la suite de l'histoire — civile, militaire, philosophique — découle de cette densité énergétique extraordinaire.`
    },

    {
      type: 'widget',
      titre: `L'équivalence masse-énergie`,
      composant: 'Equation',
      params: {
        tex: 'E = \\Delta m \\cdot c^2',
        legende: `Forme appliquée aux réactions nucléaires : l'énergie libérée *E* est la différence de masse *Δm* entre l'état initial et final, multipliée par le carré de la vitesse de la lumière. Pour une fission d'U-235, Δm représente environ 0,09 % de la masse initiale.`,
        affichage: 'block'
      }
    },

    {
      type: 'texte',
      titre: `Casser ou <em>assembler</em> : deux chemins`,
      contenu_md:
`Les noyaux atomiques se rangent sur une courbe — la **courbe d'énergie de liaison** — qui culmine vers le fer 56. C'est cette courbe qui dicte tout : on libère de l'énergie soit en **cassant** un noyau plus lourd que le fer, soit en **fusionnant** deux noyaux plus légers.

La [fission]{accent} concerne donc les noyaux lourds, en pratique surtout l'**uranium 235** et le **plutonium 239**. Quand un neutron lent percute un atome d'U-235, le noyau se déforme, oscille, puis se scinde en deux fragments plus légers (typiquement krypton + baryum), libérant *environ 200 MeV* d'énergie cinétique et **2 à 3 neutrons** supplémentaires. Ces neutrons peuvent alors déclencher d'autres fissions : c'est la **réaction en chaîne**.

La [fusion]{accent} concerne les noyaux légers. La voie la plus accessible techniquement consiste à fusionner deux isotopes d'hydrogène — **deutérium** (un proton + un neutron) et **tritium** (un proton + deux neutrons) — pour former un noyau d'hélium et un neutron énergétique. La réaction libère environ *17,6 MeV* par fusion, davantage par unité de masse que la fission, sans déchets radioactifs à très longue durée.

Le problème, c'est que les noyaux se repoussent électriquement. Pour les rapprocher assez pour que la force nucléaire forte les capture, il faut leur communiquer une énergie cinétique colossale — autrement dit, les chauffer à des températures que la nature n'atteint qu'au cœur des étoiles.`
    },

    {
      type: 'encadre',
      label: `Pourquoi le Soleil tient`,
      contenu_md: `Au centre du Soleil règnent **15 millions de degrés** et des pressions de 250 milliards d'atmosphères. Là, par effet tunnel quantique (voir [[mecanique-quantique]]), les protons fusionnent malgré la répulsion. Chaque seconde, le Soleil convertit *4,3 millions de tonnes* de matière en énergie. Et il fait cela depuis **4,6 milliards d'années** sans s'épuiser — il a encore environ 5 milliards d'années devant lui. Toute notre civilisation thermodynamique vit, directement ou indirectement, de cette fusion.`
    },

    {
      type: 'widget',
      titre: `Histoire et impacts`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1896', titre: 'Radioactivité', description: `Henri Becquerel découvre par hasard la radioactivité de l'uranium. Marie et Pierre Curie identifient le polonium puis le radium en 1898.` },
          { date: '1938', titre: 'Fission découverte', description: `À Berlin, **Otto Hahn** et Fritz Strassmann observent l'apparition de baryum après bombardement d'uranium par des neutrons. Lise Meitner et son neveu Otto Frisch interprètent : le noyau d'uranium se **scinde**.` },
          { date: '1942', titre: 'Première réaction en chaîne', description: `Sous les gradins du stade de Chicago, **Enrico Fermi** allume la première réaction nucléaire contrôlée. Naissance du projet Manhattan.` },
          { date: '1945', titre: 'Hiroshima, Nagasaki', description: `Trinity (16 juillet, Nouveau-Mexique). Hiroshima (6 août, 80 000 morts immédiats). Nagasaki (9 août). Capitulation japonaise (15 août). Le monde entre dans l'âge nucléaire.` },
          { date: '1954', titre: 'Première centrale', description: `Obninsk, URSS : la première centrale nucléaire civile au monde injecte de l'électricité sur le réseau.` },
          { date: '1979', titre: 'Three Mile Island', description: `Fusion partielle du cœur du réacteur n°2, Pennsylvanie. Pas de victimes, mais le moratoire sur les nouvelles constructions américaines durera plus de trente ans.` },
          { date: '26 avril 1986', titre: 'Tchernobyl', description: `Lors d'un test, le réacteur n°4 (RBMK) diverge en quelques secondes. Explosion, incendie du modérateur graphite, panache radioactif sur l'Europe. 30 morts immédiats, des milliers de cancers à long terme.` },
          { date: '11 mars 2011', titre: 'Fukushima', description: `Séisme de magnitude 9,1 puis tsunami de 14 mètres. Trois cœurs en fusion à la centrale de Fukushima Daiichi. 165 000 personnes évacuées.` },
          { date: '2022', titre: 'Ignition au NIF', description: `Au laboratoire Lawrence Livermore (Californie), la fusion par confinement laser produit pour la première fois plus d'énergie que reçue par le combustible. Étape symbolique majeure.` },
          { date: '2034 (prévu)', titre: 'Premier plasma ITER', description: `À Cadarache (France), le tokamak international ITER doit démarrer ses essais avec hydrogène simple, puis passer au mélange D-T vers 2039.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Manhattan et l'<em>ombre</em> portée`,
      contenu_md:
`Quand la fission est découverte à Berlin en 1938, le monde plonge déjà dans la guerre. Des physiciens européens en exil — **Leó Szilárd**, Eugene Wigner, **Albert Einstein** — convainquent Roosevelt d'agir. La lettre d'Einstein (août 1939) alertant sur la possibilité d'une bombe allemande déclenche le **projet Manhattan**, dirigé scientifiquement par **Robert Oppenheimer** à Los Alamos.

Trois ans plus tard, le 16 juillet 1945 à 5h29, l'essai *Trinity* en plein désert du Nouveau-Mexique illumine la nuit à 300 km à la ronde. Oppenheimer cite le **Bhagavad-Gîtā** : *« Je suis devenu la mort, le destructeur des mondes »*.

Trois semaines après, **Hiroshima** est rasée par une bombe à uranium (environ 80 000 morts dans la seconde, autant dans les mois suivants), puis **Nagasaki** par une bombe au plutonium. Le Japon capitule six jours plus tard. La guerre froide qui s'ouvre tournera pendant quarante ans autour de la menace d'une **destruction mutuelle assurée**, par des arsenaux qui culmineront à plus de **70 000 ogives** dans les années 1980.

L'arme nucléaire ne disparaîtra plus. Neuf pays en possèdent aujourd'hui. Le traité de **non-prolifération** (1968) limite la diffusion sans la stopper. Le rapport de l'humanité à l'atome reste durablement marqué par cette inauguration violente.`
    },

    {
      type: 'widget',
      titre: `Quatre accidents civils majeurs`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          { tag: '1957', titre: 'Kyshtym (URSS)', description: `Explosion d'un réservoir de déchets liquides au complexe militaire Mayak. Tenu secret pendant 30 ans. Contamination de 23 000 km², 270 000 personnes exposées.` },
          { tag: '1979', titre: 'Three Mile Island', description: `Fusion partielle du cœur du réacteur n°2 (Pennsylvanie). Pas de mort attribuable, mais point d'arrêt durable du nucléaire américain.` },
          { tag: '1986', titre: 'Tchernobyl', description: `Le pire accident civil. Réacteur RBMK, conception défectueuse + test mal conduit. **30 morts immédiats**, milliers de cancers thyroïdiens, **zone d'exclusion** de 2 600 km² toujours active.` },
          { tag: '2011', titre: 'Fukushima', description: `Tsunami suite au séisme du Tōhoku. Trois cœurs fondent (réacteurs 1, 2, 3). Pas de mort par radiation aiguë, mais 165 000 déplacés, traumatisme nucléaire mondial.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `<em>Tchernobyl</em>, <em>Fukushima</em> : deux chocs, deux leçons`,
      contenu_md:
`**Tchernobyl** (26 avril 1986) est un accident d'origine technique et organisationnelle. Lors d'un test mal conçu, la puissance du réacteur n°4 grimpe brutalement. Le modérateur graphite et les défauts de conception du RBMK soviétique transforment l'incident en explosion. Le toit du réacteur saute, le graphite s'enflamme, un panache radioactif s'élève sur l'Europe pendant dix jours. Les liquidateurs — 600 000 personnes — paieront un lourd tribut.

**Fukushima** (11 mars 2011) est un accident d'origine naturelle. Un séisme de magnitude 9,1 au large du Tōhoku déclenche un tsunami qui submerge la digue de la centrale Daiichi. L'alimentation électrique de secours est noyée, les pompes de refroidissement s'arrêtent. Trois cœurs entrent en fusion en quelques jours. Pas de mort par radiation aiguë, mais 165 000 personnes évacuées, dont beaucoup ne rentreront jamais.

Les conséquences politiques sont massives. L'**Allemagne** décide en quelques semaines de sortir du nucléaire — programme achevé en 2023. Le **Japon** met à l'arrêt l'ensemble de son parc et n'en a relancé qu'une douzaine de réacteurs depuis. La **Belgique**, la **Suisse**, l'**Espagne** ferment progressivement. La France maintient son parc mais reporte ses projets. La filière mondiale stagne pendant une décennie.`
    },

    {
      type: 'encadre',
      label: `Une comparaison brutale`,
      contenu_md: `Selon les chiffres de l'OMS et de l'ONU, la **pollution atmosphérique** liée aux énergies fossiles tue environ **7 millions de personnes par an** dans le monde. À titre de comparaison, tous accidents nucléaires civils confondus depuis 1954 totalisent quelques milliers de morts directes et indirectes attribuables. La mesure du risque dépend donc moins de la dangerosité intrinsèque que de notre capacité à percevoir un risque concentré et soudain plutôt qu'un risque diffus et chronique.`
    },

    {
      type: 'texte',
      titre: `Le <em>retour</em>, à l'épreuve du climat`,
      contenu_md:
`Vingt ans après le creux post-Fukushima, le nucléaire connaît un regain d'intérêt sans précédent. La raison principale tient en deux mots : [changement climatique]{accent} (voir [[changement-climatique]]). Sur le cycle de vie complet, le nucléaire émet environ **12 g de CO₂ par kWh** produit, contre 820 pour le charbon, 490 pour le gaz, 41 pour le solaire photovoltaïque et 11 pour l'éolien terrestre. À production équivalente, c'est l'une des sources les moins carbonées au monde.

Cette logique pousse plusieurs pays à relancer des programmes : la **France** annonce en 2022 la construction de **6 EPR2** supplémentaires d'ici 2040. Le **Royaume-Uni**, la **Pologne**, les **Pays-Bas**, la **Tchéquie**, la **Corée du Sud** annoncent de nouveaux réacteurs. Les États-Unis financent les premiers **SMR** (Small Modular Reactors), réacteurs de petite taille produits en série. Même le Japon réautorise progressivement ses centrales.

Les défis restent immenses : coûts de construction qui dérivent (l'EPR de Flamanville est passé de 3,3 à 13,2 milliards d'euros), gestion des **déchets** à très longue durée de vie (stockage géologique profond à Cigéo, en France), accidents toujours possibles, prolifération militaire. Le débat n'est pas clos — il s'est seulement déplacé : le nucléaire est désormais évalué non plus contre l'utopie d'un monde sans risque, mais contre l'urgence d'un monde sans CO₂.`
    },

    {
      type: 'widget',
      titre: `Pourquoi la fusion est-elle si difficile ?`,
      composant: 'ListeMethodes',
      params: {
        methodes: [
          { titre: `Chauffer à 150 millions de degrés`, description: `Soit **dix fois la température du cœur du Soleil**. À cette température, la matière devient un plasma — un gaz totalement ionisé qu'aucun matériau ne peut contenir physiquement.` },
          { titre: `Confiner le plasma`, description: `Deux approches concurrentes : le **confinement magnétique** (tokamaks comme ITER, où un champ magnétique en forme de tore enferme le plasma) et le **confinement inertiel** (lasers ultra-puissants qui compriment une cible, comme au NIF).` },
          { titre: `Tenir le triple produit`, description: `Il faut maintenir simultanément **densité × température × temps** au-dessus d'un seuil critique (critère de Lawson). Aucune machine n'avait franchi ce seuil avec gain net jusqu'au NIF en 2022.` },
          { titre: `Produire le tritium`, description: `Le tritium n'existe pas naturellement (demi-vie 12 ans). Il faudra le fabriquer **in situ** en bombardant du lithium avec les neutrons issus de la fusion. Le défi industriel reste ouvert.` },
          { titre: `Résister aux neutrons`, description: `Les neutrons rapides (14 MeV) issus de la fusion D-T endommagent les matériaux de la chambre. Trouver des alliages capables de tenir des décennies est un programme de recherche à part entière.` }
        ]
      }
    }

  ],

  quiz: [
    {
      q: `Quelle équation justifie le caractère extraordinairement dense de l'énergie nucléaire ?`,
      options: [
        `F = ma`,
        `E = mc² : une infime fraction de masse convertie libère une énergie colossale, car c² est gigantesque`,
        `PV = nRT`,
        `E = hν`
      ],
      correcte: 1,
      explication: `L'équivalence masse-énergie d'Einstein (1905) signifie qu'1 gramme de matière correspond à ~25 millions de kWh. Dans une fission d'U-235, environ 0,09 % de la masse se convertit en énergie — d'où la densité énergétique exceptionnelle.`
    },
    {
      q: `Quelle est la différence entre fission et fusion nucléaires ?`,
      options: [
        `La fission est artificielle, la fusion est naturelle`,
        `La fission casse un noyau lourd (ex. uranium 235) ; la fusion assemble deux noyaux légers (ex. deutérium + tritium)`,
        `La fission produit du carbone, la fusion non`,
        `Il n'y a aucune différence physique`
      ],
      correcte: 1,
      explication: `Les deux processus libèrent de l'énergie parce que la masse finale est inférieure à la masse initiale. La fission concerne les noyaux plus lourds que le fer, la fusion les plus légers. Le Soleil tire son énergie de la fusion ; toutes nos centrales actuelles, de la fission.`
    },
    {
      q: `Qu'est-ce qu'une réaction en chaîne dans un réacteur à fission ?`,
      options: [
        `Une succession de désintégrations radioactives spontanées`,
        `Chaque fission libère 2 à 3 neutrons qui peuvent déclencher d'autres fissions ; si en moyenne une fission par génération est déclenchée, la réaction s'auto-entretient`,
        `Une chaîne de transformations chimiques`,
        `Un cycle thermodynamique fermé`
      ],
      correcte: 1,
      explication: `Dans un réacteur, des barres de contrôle absorbent l'excédent de neutrons pour maintenir exactement une fission par génération (régime critique). Dans une bombe, on cherche au contraire la divergence rapide (supercritique).`
    },
    {
      q: `Quel événement marque la première utilisation militaire de l'arme nucléaire ?`,
      options: [
        `Tchernobyl en 1986`,
        `Hiroshima et Nagasaki en août 1945, au terme du projet Manhattan`,
        `Le test Trinity en 1945`,
        `La crise de Cuba en 1962`
      ],
      correcte: 1,
      explication: `Le 6 août 1945, "Little Boy" est larguée sur Hiroshima (~80 000 morts immédiats). Le 9 août, "Fat Man" sur Nagasaki. Le Japon capitule le 15 août. Trinity (16 juillet 1945) était l'essai préalable.`
    },
    {
      q: `Quelle est la cause directe de la catastrophe de Tchernobyl en avril 1986 ?`,
      options: [
        `Un tsunami géant`,
        `Un test mal conduit combiné aux défauts de conception du réacteur RBMK soviétique, qui a divergé en quelques secondes`,
        `Une attaque terroriste`,
        `Une erreur de calcul du combustible`
      ],
      correcte: 1,
      explication: `Le test du réacteur n°4 a fait chuter la puissance au plus bas, puis le redémarrage en présence de "poison" xénon a déstabilisé le cœur. La conception du RBMK (coefficient de vide positif) a transformé l'incident en explosion. Le toit du bâtiment a sauté et le graphite a brûlé pendant dix jours.`
    },
    {
      q: `Qu'est-ce qu'ITER ?`,
      options: [
        `Une centrale nucléaire commerciale française`,
        `Une expérience internationale de fusion contrôlée construite à Cadarache, qui doit démontrer la faisabilité scientifique de la fusion D-T à grande échelle`,
        `Un satellite d'observation du Soleil`,
        `Un sous-marin nucléaire de nouvelle génération`
      ],
      correcte: 1,
      explication: `ITER (International Thermonuclear Experimental Reactor) est un tokamak géant en construction dans le sud de la France. Premier plasma reporté à 2034, fusion deutérium-tritium attendue à partir de 2039. C'est l'étape précédant la fusion commerciale (DEMO, ~2050).`
    },
    {
      q: `Pourquoi le nucléaire est-il aujourd'hui réévalué dans le débat climatique ?`,
      options: [
        `Parce qu'il est devenu moins cher que toutes les autres énergies`,
        `Parce qu'il émet environ 12 g CO₂/kWh sur tout son cycle de vie, contre ~820 pour le charbon — l'une des sources les moins carbonées`,
        `Parce qu'il ne produit plus de déchets`,
        `Parce que les accidents sont devenus impossibles`
      ],
      correcte: 1,
      explication: `Face à l'urgence climatique, plusieurs pays relancent leurs programmes nucléaires (France, Royaume-Uni, Pologne, Corée du Sud…). Les défis (coût, déchets, prolifération) restent réels, mais le calcul s'est déplacé : le nucléaire est évalué contre l'urgence carbone, plus seulement contre le risque d'accident.`
    },
    {
      q: `Quelle a été la première étape symbolique de la fusion contrôlée à gain net ?`,
      options: [
        `Le démarrage d'ITER`,
        `L'expérience du NIF (Lawrence Livermore, Californie) en décembre 2022, où la fusion par confinement laser a produit plus d'énergie que reçue par le combustible`,
        `La mise en service de Flamanville 3`,
        `L'arrêt définitif de Tchernobyl`
      ],
      correcte: 1,
      explication: `En décembre 2022, le NIF a obtenu pour la première fois un gain net énergétique (Q > 1) sur la cible, par confinement inertiel laser. Étape symbolique majeure, même si le bilan global incluant les lasers reste très déficitaire. ITER vise une voie complémentaire (confinement magnétique).`
    }
  ]

});
