/* ===================================================================
   SUJET — L'Arctique
   ===================================================================
   Une calotte qui fond, un océan qui s'ouvre, des puissances qui se positionnent.
   Domaines : Géopolitique + Sciences de la Terre
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'arctique',
    titre: 'L\'<em>Arctique</em>',
    domaines: ['Géopolitique', 'Sciences de la Terre'],
    tags: ['banquise', 'route maritime', 'pétrole', 'russie', 'chine', 'changement climatique'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['changement-climatique', 'detroit-de-taiwan', 'megafeux'],
    date_creation: '2026-05-12',
    date_maj: '2026-05-12'
  },

  resume: 'Un océan gelé qui se transforme en autoroute commerciale. Une région qui se réchauffe quatre fois plus vite que le reste du globe. Et huit pays — plus la Chine — qui se disputent ses routes, ses hydrocarbures et ses terres rares. Bienvenue dans la géopolitique du Grand Nord.',

  points_cles: [
    'L\'**océan Arctique** est le plus petit des cinq océans (~14 millions de km²), recouvert par une [banquise]{accent} dont l\'extension estivale a fondu de **plus de 40 %** depuis 1979.',
    'L\'Arctique se réchauffe **environ quatre fois plus vite** que la moyenne mondiale — phénomène connu sous le nom d\'**amplification arctique**.',
    'La fonte ouvre deux routes maritimes stratégiques : la **route maritime du Nord** (Russie) et le **passage du Nord-Ouest** (Canada), qui raccourcissent le trajet Asie-Europe de **~40 %**.',
    'Le sous-sol arctique contiendrait **90 milliards de barils** de pétrole et **30 %** du gaz naturel mondial non encore découvert, ainsi que des terres rares et des métaux stratégiques.',
    'Le **Conseil de l\'Arctique** réunit **8 États membres** (Russie, USA, Canada, Norvège, Danemark, Islande, Suède, Finlande) et six peuples autochtones observateurs.',
    'La Russie a planté son drapeau au pôle Nord en **2007** et concentre aujourd\'hui la plus forte présence militaire de la région — déclenchant une montée en puissance de la réponse **OTAN**.',
    'La Chine, qui se qualifie officiellement d\'**[État proche de l\'Arctique]{accent}** depuis 2018, investit massivement dans la région via sa "route polaire de la soie".'
  ],

  carte_mentale: {
    central: 'arctique',
    noeuds: [
      { id: 'arctique', label: 'Arctique', description: 'Région circumpolaire centrée sur l\'océan Arctique, à la croisée du climat et de la géopolitique.' },

      // Niveau 1
      { id: 'geographie', label: 'Géographie', description: 'Un océan central, des banquises saisonnières et continentales, un pôle magnétique en mouvement.' },
      { id: 'climat', label: 'Fonte accélérée', description: 'Réchauffement environ 4 fois plus rapide que la moyenne mondiale ; océan possiblement libre de glace en été d\'ici 2050.' },
      { id: 'routes', label: 'Nouvelles routes', description: 'L\'effacement de la banquise ouvre des passages maritimes qui raccourcissent les trajets Asie-Europe de ~40 %.' },
      { id: 'ressources', label: 'Ressources convoitées', description: 'Pétrole, gaz, terres rares, halieutique : sous la glace, des gisements stratégiques.' },
      { id: 'acteurs', label: 'Acteurs et tensions', description: 'Les 8 États arctiques, la Chine "proche de l\'Arctique", l\'OTAN, les peuples autochtones.' },

      // Niveau 2 — géographie
      { id: 'ocean', label: 'Océan Arctique', description: '~14 millions de km², le plus petit des cinq océans. Profondeur moyenne ~1 200 m.', parent: 'geographie' },
      { id: 'banquise', label: 'Banquise', description: 'Glace de **mer** flottante, formée par congélation de l\'eau salée. Variation saisonnière forte.', parent: 'geographie' },
      { id: 'inlandsis', label: 'Glace continentale', description: 'Glace **sur terre**, comme l\'inlandsis du Groenland (~1,7 million de km²). Sa fonte fait monter le niveau des mers.', parent: 'geographie' },
      { id: 'pole-mag', label: 'Pôle Nord magnétique', description: 'Distinct du pôle géographique. Se déplace actuellement vers la Sibérie à plus de **50 km/an**.', parent: 'geographie' },

      // Niveau 2 — routes
      { id: 'nord-russe', label: 'Route maritime du Nord', description: 'Le long des côtes sibériennes. Contrôlée par la Russie. ~3,8 millions de tonnes en 2024, objectif 200 Mt d\'ici 2035.', parent: 'routes' },
      { id: 'nord-ouest', label: 'Passage du Nord-Ouest', description: 'À travers l\'archipel arctique canadien. Le Canada revendique des eaux intérieures ; les USA parlent de détroit international.', parent: 'routes' },

      // Niveau 2 — acteurs
      { id: 'conseil', label: 'Conseil de l\'Arctique', description: 'Forum intergouvernemental, 8 membres + 6 organisations autochtones observatrices permanentes.', parent: 'acteurs' },
      { id: 'russie', label: 'Russie', description: '~53 % du littoral arctique. Réouverture de bases soviétiques, brise-glaces nucléaires, missiles hypersoniques.', parent: 'acteurs' },
      { id: 'chine', label: 'Chine', description: 'Statut d\'"État proche de l\'Arctique" (2018). Investissements miniers, brise-glaces, "route polaire de la soie".', parent: 'acteurs' },
      { id: 'otan', label: 'OTAN', description: 'Adhésion de la Finlande (2023) et de la Suède (2024) : 7 des 8 États arctiques sont désormais alliés.', parent: 'acteurs' },
      { id: 'autochtones', label: 'Peuples autochtones', description: '~400 000 personnes : Inuits, Sames, Nenets, Tchouktches, Aléoutes... Première ligne du dérèglement climatique.', parent: 'acteurs' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Un <em>océan</em> au sommet du monde',
      contenu_md:
`L\'Arctique n\'est pas un continent. C\'est un **océan** — le plus petit des cinq — entouré par les côtes de huit États : Russie, États-Unis (Alaska), Canada, Danemark (Groenland), Norvège, Islande, Suède, Finlande. Une mer de **14 millions de km²**, dont la majeure partie est recouverte, au moins en hiver, par la [banquise]{accent}.

Distinction essentielle : la **banquise** est de la glace de mer, flottante, formée par la congélation de l\'eau salée. Sa fonte ne fait pas monter le niveau des océans (principe d\'Archimède). À l\'inverse, la **glace continentale** — comme l\'**inlandsis du Groenland**, vaste de 1,7 million de km² — repose sur la terre ferme : sa fonte, elle, **élève le niveau marin mondial**.

Au centre de la région, le **pôle Nord géographique** : un point dans l\'océan, sous la glace. À ne pas confondre avec le **pôle Nord magnétique**, qui se déplace actuellement vers la Sibérie à un rythme remarquable — **plus de 50 km par an** depuis le début des années 2000.`
    },

    {
      type: 'texte',
      titre: 'L\'<em>amplification arctique</em>',
      contenu_md:
`Si le réchauffement climatique global est aujourd\'hui d\'environ **+1,3 °C** par rapport à l\'ère préindustrielle, l\'Arctique, lui, s\'est réchauffé d\'environ **+4 °C**. Soit **quatre fois plus vite** que la moyenne mondiale. Ce phénomène, baptisé [amplification arctique]{accent}, tient à une boucle de rétroaction redoutable.

La glace blanche **réfléchit** ~80 % du rayonnement solaire (haut albédo). Quand elle fond, elle découvre une eau sombre qui en **absorbe** ~90 %. L\'océan se réchauffe, fait fondre plus de glace, qui découvre plus d\'eau sombre, et ainsi de suite. C\'est l\'archétype d\'une **boucle de rétroaction positive** — voir [[changement-climatique]] pour le cadre général.

Conséquence : l\'extension estivale de la banquise a chuté de **plus de 40 %** depuis le début des observations satellites en 1979. Les modèles climatiques convergent désormais sur une prédiction qui aurait paru impensable il y a vingt ans : un océan Arctique **libre de glace** en été d\'ici **2050**, voire dès **2035** selon les scénarios les plus pessimistes.`
    },

    {
      type: 'widget',
      titre: 'Faites varier la température estivale pour visualiser l\'état de la banquise',
      composant: 'CurseurParametrique',
      params: {
        label: 'Anomalie de température estivale',
        min: 0,
        max: 6,
        step: 0.1,
        valeurInitiale: 1.3,
        unite: '°C',
        degradePiste: '#5b8def 0%, #5b8def 30%, #ffb86c 30%, #ffb86c 60%, #ff6b35 60%, #ff6b35 100%',
        seuils: [
          {
            jusqua: 1.8,
            titre: 'Banquise étendue',
            description: 'Régime climatique du XXᵉ siècle. Extension estivale supérieure à **6 millions de km²**. Routes maritimes praticables seulement quelques semaines.',
            couleur: '#5b8def'
          },
          {
            jusqua: 3.5,
            titre: 'Banquise réduite (état actuel)',
            description: 'Régime des années 2020. Extension estivale **~4 millions de km²**, en baisse continue. La route maritime du Nord ouvre 4-5 mois par an.',
            couleur: '#7ec9a8'
          },
          {
            jusqua: 5,
            titre: 'Été sans glace',
            description: 'Scénario projeté entre 2035 et 2050. **Moins d\'1 million de km²** restant en septembre. Navigation transarctique directe possible plusieurs mois par an.',
            couleur: '#ffb86c'
          },
          {
            jusqua: Infinity,
            titre: 'Arctique transformé',
            description: 'Scénario fin de siècle si rien ne change. **Disparition quasi totale** de la banquise en été. Effets en cascade sur le climat des moyennes latitudes et l\'inlandsis du Groenland.',
            couleur: '#ff6b35'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Des <em>routes</em> qui s\'ouvrent',
      contenu_md:
`Pour un cargo entre Shanghai et Rotterdam, la voie classique passe par **Singapour, Suez, Gibraltar** : environ **21 000 km** et 35 jours de mer. La même traversée par la **route maritime du Nord**, le long des côtes sibériennes, ne fait plus que **13 000 km** et une vingtaine de jours. Soit **un raccourci de ~40 %**.

La fonte estivale ouvre deux passages :
- La [route maritime du Nord]{accent}, longeant la Sibérie, contrôlée par la **Russie**. Trafic en explosion : ~3,8 millions de tonnes en 2024, objectif officiel de **200 Mt en 2035**.
- Le [passage du Nord-Ouest]{accent}, à travers l\'archipel arctique canadien. Praticable seulement quelques semaines par an, mais en croissance.

Mais ces routes ne sont pas neutres. La Russie considère la route du Nord comme des **eaux intérieures** : passage payant, autorisation préalable, pilote russe obligatoire. Le Canada applique le même raisonnement au Nord-Ouest. Les **États-Unis** récusent cette lecture : pour Washington, il s\'agit de **détroits internationaux** où s\'applique le droit de passage libre. Un parallèle géopolitique s\'esquisse avec d\'autres choke points — voir [[detroit-de-taiwan]] sur la logique des passages stratégiques.`
    },

    {
      type: 'widget',
      titre: 'Routes, ressources, peuples : ce que cache la banquise',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          { tag: '~13 000 km', titre: 'Route du Nord (Russie)', description: 'Le long de la Sibérie. **40 % plus court** que la voie de Suez pour relier l\'Asie à l\'Europe. Contrôlée par Rosatom et la flotte de brise-glaces russe.' },
          { tag: 'Quelques semaines/an', titre: 'Passage du Nord-Ouest (Canada)', description: 'À travers l\'archipel canadien. Statut juridique disputé entre Ottawa (eaux intérieures) et Washington (détroit international).' },
          { tag: '90 Mds de barils', titre: 'Pétrole sous l\'Arctique', description: 'Selon l\'**USGS**, environ **13 %** des réserves mondiales non découvertes de pétrole se trouveraient dans la région.' },
          { tag: '30 %', titre: 'Gaz naturel mondial', description: 'Part estimée des réserves mondiales **non découvertes** de gaz naturel localisées dans le sous-sol arctique. Russie et Norvège en tête de l\'exploitation.' },
          { tag: 'Terres rares', titre: 'Minéraux stratégiques', description: 'Le **Groenland** abrite l\'un des plus gros gisements connus de terres rares hors de Chine. Lithium, cobalt et uranium attisent les convoitises.' },
          { tag: '~400 000', titre: 'Peuples autochtones', description: '**Inuits** (Canada, Groenland, Alaska), **Sames** (Scandinavie), **Nenets** et **Tchouktches** (Russie). Habitants ancestraux, en première ligne du dérèglement.' }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'Pétrole, gaz, terres rares',
      contenu_md: 'Selon l\'**United States Geological Survey** (USGS, 2008), le sous-sol arctique contiendrait environ **90 milliards de barils** de pétrole et **30 % du gaz naturel mondial non encore découvert**, ainsi que des minerais critiques pour la transition énergétique : terres rares, cuivre, nickel, lithium, uranium. **Paradoxe** : c\'est la fonte de l\'Arctique — provoquée par la combustion d\'hydrocarbures — qui rend ces nouveaux hydrocarbures accessibles à l\'exploitation. La région, en se réchauffant, alimente sa propre transformation.'
    },

    {
      type: 'texte',
      titre: 'Les <em>acteurs</em> et leurs revendications',
      contenu_md:
`Huit États bordent l\'Arctique et siègent au [Conseil de l\'Arctique]{accent}, créé en 1996 : Russie, États-Unis, Canada, Norvège, Danemark, Islande, Suède, Finlande. Six organisations représentant les peuples autochtones y disposent du statut d\'**observateurs permanents**. Pendant deux décennies, le Conseil a été célébré comme un modèle de coopération arctique — démilitarisé, scientifique, consensuel.

L\'invasion de l\'Ukraine en 2022 a tout changé. Les sept membres occidentaux ont **suspendu** leur participation aux travaux impliquant la Russie. La coopération scientifique s\'est effondrée. Et l\'adhésion de la **Finlande** (2023) puis de la **Suède** (2024) à l\'**OTAN** signifie désormais que **sept des huit** États arctiques sont membres de l\'Alliance. Seule la Russie reste de l\'autre côté.

Au-delà des 8, un acteur ne cesse de grandir : la **Chine**. Sans aucune frontière arctique, elle s\'est auto-qualifiée d\'**État proche de l\'Arctique** dans un livre blanc de 2018. Elle a construit trois brise-glaces, investit dans des mines au Groenland, des ports en Islande, et a lancé une "**route polaire de la soie**" prolongeant ses Nouvelles Routes de la Soie vers le Nord.`
    },

    {
      type: 'widget',
      titre: 'Sélectionnez un acteur pour comprendre sa stratégie',
      composant: 'SelecteurValeurs',
      params: {
        unite: '',
        indexInitial: 0,
        options: [
          { label: 'Russie', valeur: '~53 % du littoral', description: 'Le plus long rivage arctique. Réouverture de bases soviétiques (50+ depuis 2007), plus grande flotte mondiale de brise-glaces nucléaires (~7 en service), missiles hypersoniques en zone arctique. Plante son drapeau au pôle en 2007.' },
          { label: 'États-Unis', valeur: 'Alaska', description: 'Présence via l\'Alaska, base de Thulé au Groenland. Long retard d\'investissement (2 brise-glaces lourds seulement). Stratégie arctique relancée sous Biden, durcie sous Trump avec déclarations sur le Groenland.' },
          { label: 'Canada', valeur: 'Passage du NW', description: 'Revendique le passage du Nord-Ouest comme eaux intérieures. Investissement militaire récent dans le Nord (NORAD modernisé, nouveaux patrouilleurs).' },
          { label: 'Norvège', valeur: 'Svalbard', description: 'Membre fondateur de l\'OTAN. Souveraineté sur le Svalbard depuis 1920, mais avec un régime particulier qui autorise la présence d\'autres signataires (dont la Russie).' },
          { label: 'Danemark / Groenland', valeur: '1,7 M km²', description: 'Le Groenland est autonome mais rattaché au Danemark. Population de ~57 000 habitants, ressources minières immenses. Convoité, indépendantiste, courtisé.' },
          { label: 'Chine', valeur: '"État proche"', description: 'Statut auto-déclaré en 2018. Route polaire de la soie, investissements miniers, scientifiques, brise-glaces (Xuelong 1 et 2). Pas riveraine, mais omniprésente.' },
          { label: 'Peuples autochtones', valeur: '~400 000', description: 'Inuits, Sames, Nenets, Tchouktches, Aléoutes... Six organisations observatrices au Conseil. Premiers affectés par la fonte. Voix souvent négligée dans les calculs géopolitiques.' }
        ]
      }
    },

    {
      type: 'widget',
      titre: 'Les jalons du dégel géopolitique',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1920', titre: 'Traité du Svalbard', description: 'L\'archipel norvégien devient une zone à souveraineté limitée : la Norvège y est souveraine, mais les autres signataires peuvent y exploiter des ressources. Première convention arctique majeure.' },
          { date: '1996', titre: 'Création du Conseil de l\'Arctique', description: 'Forum intergouvernemental réunissant les **8 États** arctiques et 6 organisations autochtones. Modèle de coopération non militaire pendant 25 ans.' },
          { date: '2007', titre: 'Drapeau russe au pôle Nord', description: 'Un mini-submersible russe plante un **drapeau en titane** sur le fond marin au pôle Nord, à 4 261 m de profondeur. Signal politique mondial — le grand jeu arctique reprend.' },
          { date: '2013', titre: 'Premier transit commercial transarctique', description: 'Un cargo chinois (Yong Sheng) franchit la **route maritime du Nord** : Dalian-Rotterdam en 33 jours au lieu de 48 par Suez. Démonstration commerciale.' },
          { date: '2018', titre: '"État proche de l\'Arctique"', description: 'La **Chine** publie son livre blanc arctique. Lance la "route polaire de la soie". Officialisation d\'une présence assumée à 5 000 km de ses frontières.' },
          { date: '2022', titre: 'Suspension de la coopération', description: 'Après l\'invasion de l\'Ukraine, les **7 membres** occidentaux du Conseil de l\'Arctique gèlent leur coopération avec la Russie. Fin du modèle consensuel.' },
          { date: '2023-2024', titre: 'OTAN : Finlande et Suède', description: 'L\'adhésion successive des deux pays scandinaves porte à **7 sur 8** le nombre d\'États arctiques membres de l\'Alliance. La Russie est seule au nord.' },
          { date: '2025-2026', titre: 'Trump et le Groenland', description: 'Le président américain relance publiquement la **revendication d\'achat** du Groenland. Crise diplomatique avec Copenhague. Symbole de la nouvelle valeur stratégique de l\'Arctique.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le poids des <em>peuples autochtones</em>',
      contenu_md:
`Avant d\'être un théâtre géopolitique, l\'Arctique est habité. Environ **400 000 autochtones** y vivent : **Inuits** (Canada, Groenland, Alaska), **Sames** (Scandinavie, Russie), **Nenets**, **Tchouktches**, **Aléoutes**, **Yupik** et d\'autres. Ils sont arrivés bien avant les drapeaux et les concessions minières.

Leur situation est paradoxale : ils sont à la fois **premières victimes** du dérèglement (effondrement des routes de glace, déstabilisation de la chasse et de la pêche traditionnelles, fonte du permafrost qui détruit les habitations) et **acteurs reconnus** sur la scène internationale via leurs représentations au Conseil de l\'Arctique.

La fonte du **permafrost** — sol gelé en permanence — pose un double problème. D\'abord humain et infrastructurel : routes, pipelines, bâtiments construits sur ce sol perdent leur fondation. Ensuite climatique : le permafrost contient environ deux fois plus de carbone que l\'atmosphère terrestre, sous forme de méthane piégé. Sa fonte libère ce méthane, **accélérant le réchauffement** — une boucle de rétroaction comparable à celle, plus visible, des [[megafeux]] dans les forêts boréales.`
    },

    {
      type: 'encadre',
      label: 'Pourquoi c\'est un dossier majeur',
      contenu_md: 'L\'Arctique concentre les trois grandes lignes de force du XXIᵉ siècle : le **changement climatique** (foyer le plus rapide), les **rivalités stratégiques** (Russie / OTAN / Chine), et la **course aux ressources** (hydrocarbures, terres rares, minéraux critiques). Sa transformation est l\'**un des indicateurs les plus directs** de l\'état du climat mondial, et l\'un des terrains où s\'écrit la prochaine carte du pouvoir. Pour la première fois depuis la fin de la guerre froide, le grand Nord redevient un théâtre — et cette fois, dégelé.'
    }

  ],

  quiz: [
    {
      q: 'L\'Arctique se réchauffe à quelle vitesse par rapport à la moyenne mondiale ?',
      options: [
        'À la même vitesse',
        'Environ deux fois plus vite',
        'Environ quatre fois plus vite',
        'Environ dix fois plus vite'
      ],
      correcte: 2,
      explication: 'C\'est l\'"amplification arctique" : environ +4 °C en Arctique pour ~+1,3 °C globalement, soit un rythme quadruple. Principal moteur : la boucle de rétroaction albédo (la glace blanche réfléchissante laisse place à une eau sombre absorbante).'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'La fonte de la banquise arctique fait monter directement le niveau des océans.',
      reponse: false,
      explication: 'Faux. La banquise est de la glace de mer flottante : sa fonte ne change pas le niveau marin (principe d\'Archimède). En revanche, la fonte de la glace **continentale** — comme l\'inlandsis du Groenland — fait bien monter les océans.'
    },
    {
      q: 'Combien d\'États sont membres du Conseil de l\'Arctique ?',
      options: ['5', '8', '12', '20'],
      correcte: 1,
      explication: 'Huit : Russie, États-Unis, Canada, Norvège, Danemark (via le Groenland), Islande, Suède, Finlande. Six organisations représentant les peuples autochtones y siègent comme observateurs permanents.'
    },
    {
      q: 'De combien la route maritime du Nord raccourcit-elle le trajet Asie-Europe par rapport à la voie de Suez ?',
      options: ['10 %', '40 %', '60 %', '80 %'],
      correcte: 1,
      explication: 'Environ 40 % : ~13 000 km au lieu de ~21 000 km pour relier Shanghai à Rotterdam. C\'est l\'un des principaux enjeux économiques de l\'ouverture de l\'Arctique.'
    },
    {
      q: 'Quelle part des réserves mondiales non découvertes de gaz naturel se trouverait dans l\'Arctique selon l\'USGS ?',
      options: ['10 %', '20 %', '30 %', '50 %'],
      correcte: 2,
      explication: 'Environ 30 % du gaz naturel non encore découvert au monde, ainsi que ~13 % du pétrole non découvert (soit 90 milliards de barils). Russie et Norvège dominent l\'exploitation actuelle.'
    },
    {
      q: 'En 2007, quel événement symbolique marque le retour des tensions en Arctique ?',
      options: [
        'L\'ouverture officielle du passage du Nord-Ouest',
        'La Russie plante un drapeau en titane sur le fond marin au pôle Nord',
        'La création du Conseil de l\'Arctique',
        'L\'adhésion du Canada à l\'OTAN'
      ],
      correcte: 1,
      explication: 'En 2007, un mini-submersible russe a déposé un drapeau en titane à 4 261 m de profondeur au pôle Nord. Geste hautement politique : la Russie revendique l\'extension de son plateau continental — et donc des droits sur d\'immenses zones arctiques.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète :',
      texte: 'La Chine, qui n\'a aucune frontière arctique, se qualifie officiellement depuis {2018} d\'"État {proche} de l\'Arctique" pour justifier sa présence croissante dans la région.',
      explication: 'Dans son livre blanc arctique de 2018, Pékin a forgé cette expression — qui n\'a aucune base juridique formelle — pour légitimer ses investissements miniers, ses brise-glaces et sa "route polaire de la soie" à plusieurs milliers de kilomètres de ses côtes.'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Depuis l\'adhésion de la Finlande et de la Suède, sept des huit États arctiques sont membres de l\'OTAN.',
      reponse: true,
      explication: 'Vrai. La Finlande a rejoint l\'OTAN en 2023 et la Suède en 2024. Avec les États-Unis, le Canada, le Danemark, la Norvège et l\'Islande, sept des huit États arctiques sont désormais alliés. Seule la Russie reste hors de l\'Alliance.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets dans l\'ordre les étapes du "dégel géopolitique" de l\'Arctique :',
      items: [
        'Création du Conseil de l\'Arctique',
        'La Russie plante son drapeau au pôle Nord',
        'Premier transit commercial transarctique par la route du Nord',
        'La Chine se déclare "État proche de l\'Arctique"',
        'Suspension de la coopération du Conseil après l\'invasion de l\'Ukraine',
        'Adhésion de la Finlande et de la Suède à l\'OTAN'
      ],
      explication: '1996 (création du Conseil), 2007 (drapeau russe au pôle), 2013 (cargo Yong Sheng par la route du Nord), 2018 (livre blanc arctique chinois), 2022 (gel de la coopération avec Moscou), 2023-2024 (élargissement OTAN). Une accélération nette depuis 2007.'
    },
    {
      type: 'associer',
      q: 'Associe chaque acteur à sa revendication ou son atout principal dans l\'Arctique :',
      paires: [
        { gauche: 'Russie', droite: 'Contrôle de la route maritime du Nord et plus grande flotte de brise-glaces nucléaires' },
        { gauche: 'Canada', droite: 'Revendique le passage du Nord-Ouest comme eaux intérieures' },
        { gauche: 'Danemark', droite: 'Souveraineté sur le Groenland et ses gisements de terres rares' },
        { gauche: 'Chine', droite: 'Statut auto-déclaré d\'"État proche de l\'Arctique" et route polaire de la soie' },
        { gauche: 'Norvège', droite: 'Souveraineté particulière sur l\'archipel du Svalbard depuis 1920' }
      ],
      explication: 'Chaque puissance pose sa pièce sur l\'échiquier arctique : la Russie via la maîtrise des routes et des brise-glaces, le Canada et le Danemark via leur souveraineté contestée, la Norvège via le régime singulier du Svalbard, la Chine via une posture sans territoire mais avec capital.'
    },
    {
      q: 'Quel est le principal mécanisme physique responsable de "l\'amplification arctique" ?',
      options: [
        'La proximité du Soleil',
        'La boucle de rétroaction de l\'albédo : la glace réfléchit le soleil, l\'eau sombre l\'absorbe',
        'Les éruptions volcaniques sous-marines',
        'La rotation accélérée de la Terre'
      ],
      correcte: 1,
      explication: 'La glace blanche réfléchit ~80 % du rayonnement solaire (haut albédo). Quand elle fond, l\'eau sombre exposée en absorbe ~90 %. L\'océan se réchauffe, fait fondre plus de glace : boucle de rétroaction positive qui auto-amplifie le réchauffement local.'
    },
    {
      q: 'À quelle horizon le scénario "majoritaire" prévoit-il un océan Arctique libre de glace en été ?',
      options: ['Avant 2030', 'Vers 2050', 'Vers 2100', 'Jamais avant 2200'],
      correcte: 1,
      explication: 'Les modèles convergent autour de 2050 pour un océan Arctique pratiquement libre de glace en septembre, voire dès 2035 dans les scénarios les plus pessimistes. C\'est une trajectoire que les climatologues qualifient eux-mêmes de stupéfiante par rapport aux projections d\'il y a vingt ans.'
    },
    {
      q: 'Quel peuple autochtone est principalement présent au Canada, au Groenland et en Alaska ?',
      options: ['Les Sames', 'Les Nenets', 'Les Inuits', 'Les Tchouktches'],
      correcte: 2,
      explication: 'Les Inuits couvrent l\'arc Canada-Groenland-Alaska. Les Sames vivent en Scandinavie (et un peu en Russie), les Nenets et les Tchouktches en Russie sibérienne. Ces peuples sont représentés au Conseil de l\'Arctique via six organisations observatrices.'
    }
  ]

});
