/* ===================================================================
   SUJET — Le rap
   ===================================================================
   Une musique née le 11 août 1973 dans le Bronx, qui en cinquante ans
   est devenue la première musique populaire mondiale.
   Domaine : Musique
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'le-rap',
    titre: 'Le <em>rap</em>',
    domaines: ['Musique'],
    tags: ['bronx', 'flow', 'sample', 'hip-hop', 'freestyle', 'mc-solaar', 'kendrick'],
    difficulte: 1,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['jazz', 'paris-geographie'],
    date_creation: '2026-05-13',
    date_maj: '2026-08-18'
  },

  resume: `Comprendre une musique née le 11 août 1973 dans une soirée donnée par DJ Kool Herc à l'ouest du Bronx, devenue en cinquante ans la première musique populaire mondiale — fondée sur la parole scandée d'un MC sur un [breakbeat]{accent}, héritière directe des traditions afro-américaines du blues et du jazz, et nouveau langage des marges urbaines de New York à Paris en passant par Atlanta.`,

  points_cles: [
    `Le rap naît le **11 août 1973** au **1520 Sedgwick Avenue**, dans le **Bronx**, lors d'une soirée donnée par **DJ Kool Herc** : il y invente la technique du **breakbeat** en bouclant les passages purement rythmiques de disques funk sur deux platines.`,
    `Le rap est l'un des **quatre piliers** du **hip-hop**, mouvement culturel global : **MCing** (rap), **DJing** (platinisme), **breakdance** (danse au sol), **graffiti** (peinture urbaine).`,
    `**Sugarhill Gang** grave en **1979** *Rapper's Delight*, premier tube rap commercial ; **Grandmaster Flash** code la grammaire du DJ ; **Run-DMC** puis **Public Enemy** font basculer le rap dans les années 1980 vers une musique adulte, politique, à diffusion mondiale.`,
    `Les années 1990 sont l'**âge d'or** du rap américain, marqué par la **rivalité East Coast / West Coast** : **Wu-Tang Clan**, **Nas**, **Notorious B.I.G.** d'un côté ; **N.W.A.**, **Dr. Dre**, **Snoop Dogg**, **2Pac** de l'autre — rivalité qui culmine en 1996-1997 avec l'assassinat des deux figures phares.`,
    `Le rap repose sur trois techniques : le [flow]{accent} (manière dont la voix épouse le tempo), les **rimes** (assonance, rime multisyllabique, rime interne) et la **production** (sampling de disques anciens, boom-bap, plus tard trap).`,
    `Le **rap français** émerge à la fin des années 1980 (Suprême NTM, IAM) et s'impose en **1991** avec **MC Solaar** (*Bouge de là*), avant la génération **Booba**-**Kery James** des années 2000 et l'éclatement contemporain (PNL, Damso, Orelsan, Aya Nakamura).`,
    `À partir de **2010**, la **trap d'Atlanta** (Migos, Future) impose un nouveau standard rythmique mondial (charleston en triolets, basses 808) ; **Kendrick Lamar** signe en **2015** avec *To Pimp a Butterfly* l'album rap le plus salué de la critique depuis vingt ans, **Prix Pulitzer de musique** en 2018.`,
    `Le rap reste, partout où il se parle, une **voix des marges** : témoignage des **quartiers**, **banlieues**, ghettos ; en conflit récurrent avec les institutions (procès, censures, polices) ; et porte-parole d'une **génération** plus que d'un style.`
  ],

  carte_mentale: {
    central: 'rap',
    noeuds: [
      { id: 'rap', label: 'Rap', description: 'Musique née le 11 août 1973 dans le Bronx. Parole scandée sur un breakbeat — premier des quatre piliers du hip-hop.' },

      { id: 'naissance', label: 'Naissance', description: 'Bronx 1973, soirée Kool Herc, invention du breakbeat. Filiation directe avec les traditions afro-américaines — voir [[jazz]].' },
      { id: 'pionniers', label: 'Pionniers', description: 'Sugarhill Gang, Grandmaster Flash, Afrika Bambaataa, Run-DMC, Public Enemy. Codification du langage entre 1979 et 1988.' },
      { id: 'techniques', label: 'Techniques', description: 'Flow, débit, rimes (assonance, multisyllabique), beats, sample, production — la grammaire interne du rap.' },
      { id: 'ecoles-us', label: 'Écoles US', description: 'Âge d\'or des années 1990, rivalité East Coast / West Coast, puis explosion sudiste à partir des années 2000.' },
      { id: 'rap-fr', label: 'Rap français', description: 'Né fin années 1980, mature en 1991 avec MC Solaar. Musique des [[paris-geographie]] et des banlieues françaises.' },
      { id: 'politique', label: 'Dimension politique', description: 'Voix des banlieues, témoignage social, conflits récurrents avec institutions et police. De Public Enemy à Kery James.' },
      { id: 'courants', label: 'Courants récents', description: 'Trap d\'Atlanta, drill, mumble rap, renaissance conceptuelle avec Kendrick Lamar.' },

      // Naissance
      { id: 'kool-herc', label: 'Kool Herc', description: 'DJ jamaïcain installé dans le Bronx. Le 11 août 1973, il anime la fête d\'anniversaire de sa sœur et y joue pour la première fois en boucle les **breaks** des disques funk.', parent: 'naissance' },
      { id: 'quatre-piliers', label: '4 piliers du hip-hop', description: 'MCing (rap), DJing (platines), breakdance (danse au sol), graffiti (peinture urbaine). Le rap n\'est qu\'**un quart** d\'un mouvement culturel plus large.', parent: 'naissance' },
      { id: 'breakbeat', label: 'Breakbeat', description: 'Passage purement rythmique d\'un disque funk (souvent quelques mesures de batterie nue) bouclé sur deux platines pour en faire la base du morceau.', parent: 'naissance' },

      // Pionniers
      { id: 'sugarhill', label: 'Sugarhill Gang', description: '*Rapper\'s Delight* (1979) : premier tube rap commercial, 14 minutes sur la basse de *Good Times* de Chic. Le rap quitte les block parties pour la radio.', parent: 'pionniers' },
      { id: 'flash', label: 'Grandmaster Flash', description: 'Codifie la technique du DJ : **scratch**, **cueing**, **backspin**. *The Message* (1982) impose le rap comme parole sociale.', parent: 'pionniers' },
      { id: 'run-pe', label: 'Run-DMC & Public Enemy', description: 'Run-DMC (1984) impose le rap au grand public (*Walk This Way* avec Aerosmith). Public Enemy (1988) en fait une arme politique avec *It Takes a Nation of Millions*.', parent: 'pionniers' },

      // Écoles US
      { id: 'east-coast', label: 'East Coast', description: 'New York. **Wu-Tang Clan**, **Nas** (*Illmatic*, 1994), **Notorious B.I.G.**, Mobb Deep. Rimes denses, samples soul-jazz, boom-bap.', parent: 'ecoles-us' },
      { id: 'west-coast', label: 'West Coast', description: 'Los Angeles, Compton. **N.W.A.** (*Straight Outta Compton*, 1988), **Dr. Dre** (*The Chronic*, 1992), **Snoop Dogg**, **2Pac**. Son G-funk synthétique.', parent: 'ecoles-us' },
      { id: 'south', label: 'Sud / Atlanta', description: 'OutKast (dès 1994), puis explosion **trap** dans les années 2000-2010 : T.I., Gucci Mane, **Future**, **Migos**. Atlanta devient capitale rap mondiale.', parent: 'ecoles-us' },

      // Rap français
      { id: 'pionniers-fr', label: 'Pionniers FR', description: '**Suprême NTM** (Saint-Denis), **IAM** (Marseille), **Assassin** (Paris). Première vague militante des années 1988-1995.', parent: 'rap-fr' },
      { id: 'mc-solaar', label: 'MC Solaar', description: '*Qui sème le vent récolte le tempo* (1991). Premier tube rap français grand public. Rimes lettrées, samples jazz, voix posée.', parent: 'rap-fr' },
      { id: 'rap-fr-2000', label: 'Génération 2000-2020', description: '**Booba**, **Kery James**, **Rohff**, puis **PNL**, **Damso**, **Orelsan**, **Nekfeu**. Le rap devient la première musique écoutée en France.', parent: 'rap-fr' },

      // Techniques
      { id: 'flow', label: 'Flow', description: 'Manière dont la voix épouse le tempo : placement des syllabes, accents, respirations. Signature personnelle du rappeur, aussi reconnaissable qu\'un timbre.', parent: 'techniques' },
      { id: 'sample', label: 'Sample', description: 'Emprunter quelques mesures d\'un disque ancien (souvent jazz, funk, soul) pour en faire la base d\'un nouveau morceau. Voir [[jazz]] pour la dette esthétique.', parent: 'techniques' },
      { id: 'rimes', label: 'Rimes', description: 'Du couplet en rimes plates des débuts à la **rime multisyllabique** (Eminem, Nas) et à la **rime interne** : la sophistication grandit avec le genre.', parent: 'techniques' },

      // Courants récents
      { id: 'trap', label: 'Trap', description: 'Né à Atlanta vers 2003. Charleston en triolets, basses 808, tempos lents. Standard rythmique mondial depuis 2015.', parent: 'courants' },
      { id: 'kendrick', label: 'Kendrick Lamar', description: '*good kid, m.A.A.d city* (2012), *To Pimp a Butterfly* (2015), *DAMN.* (2017). **Pulitzer de musique 2018**. Renaissance conceptuelle du rap.', parent: 'courants' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Une <em>fête d'anniversaire</em> dans le Bronx`,
      contenu_md:
`Pour comprendre le rap, il faut commencer par une date précise : le **11 août 1973**, dans la salle commune d'un immeuble du **1520 Sedgwick Avenue**, à l'ouest du **Bronx**. Une jeune fille y fête ses seize ans ; son grand frère, **DJ Kool Herc** — un Jamaïcain de dix-huit ans —, est aux platines. Il joue ce soir-là des disques funk de **James Brown**, des **Incredible Bongo Band**, mais avec une astuce nouvelle : il a deux exemplaires du même disque, et chaque fois qu'il atteint le **break** (le passage purement rythmique, où les instruments mélodiques se taisent et où ne reste que la batterie), il bascule sur la deuxième platine pour rejouer ce même break, et ainsi de suite. La piste de danse explose. Le [breakbeat]{accent} vient de naître.

Cette nuit-là, dans une ville en faillite, où des immeubles entiers brûlent par négligence des propriétaires, où la municipalité a déserté les quartiers noirs et portoricains du Bronx, une poignée d'adolescents inventent une musique. Elle n'a pas encore de nom. On l'appellera **hip-hop**. Le rap n'en est qu'**une partie** — sa partie verbale.

Dans les mois qui suivent, autour de Kool Herc se forment d'autres DJs : **Grandmaster Flash**, virtuose technicien des platines ; **Afrika Bambaataa**, ancien chef de gang qui fonde la **Zulu Nation** pour canaliser l'énergie de la rue dans la musique et la danse plutôt que dans la violence. Devant les DJs, des **MCs** (*masters of ceremony*) prennent le micro pour chauffer le public, lancer des rimes simples, présenter le DJ. Ces MCs deviendront, sans qu'on s'en rende compte, le centre de gravité de la musique. Le rap est né — au sens premier : la **parole scandée sur un beat**.`
    },

    {
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: 'Un des pères fondateurs',
      params: {
        image: 'images/le-rap--grandmaster-flash.jpg',
        legende: 'Grandmaster Flash, pionnier du DJing hip-hop : ses techniques de mix (backspin, punch phrasing) transforment deux platines en instrument. (Photo Wikimedia Commons, licence Creative Commons — crédit selon le fichier)',
        hotspots: []
      }
    },

    {
      type: 'encadre',
      label: 'Les quatre piliers',
      contenu_md: `Le rap n'existe pas seul. Il est l'un des **quatre piliers** du **hip-hop**, mouvement culturel né dans le Bronx au début des années 1970 : le **MCing** (rapper), le [DJing]{accent} (platinisme), le **breakdance** (danse au sol acrobatique) et le **graffiti** (peinture sur murs et rames de métro). Les quatre partagent une même origine sociale, une même esthétique du recyclage et du défi, et se nourrissent réciproquement. Le rap est devenu mondial ; les trois autres piliers restent associés à la culture hip-hop comme à son écosystème natal.`
    },

    {
      type: 'widget',
      titre: `Cinquante ans en quelques étapes`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '11 août 1973', titre: `Naissance dans le Bronx`, description: `**DJ Kool Herc** anime l'anniversaire de sa sœur au 1520 Sedgwick Avenue. Première utilisation publique du **breakbeat** sur deux platines. Date fondatrice du hip-hop.` },
          { date: '1979', titre: `Premier tube : « Rapper's Delight »`, description: `**Sugarhill Gang** grave un morceau de **14 minutes** sur la basse de *Good Times* de Chic. Le rap quitte les block parties new-yorkaises et entre à la radio. Premier million de disques vendus.` },
          { date: '1982', titre: `Le rap devient politique`, description: `**Grandmaster Flash & the Furious Five** publient *The Message* : *« Don't push me 'cause I'm close to the edge. »* Premier rap qui décrit explicitement la misère urbaine et la violence du ghetto. Le rap se découvre une **vocation de témoignage**.` },
          { date: '1988', titre: `Public Enemy et N.W.A.`, description: `Public Enemy (*It Takes a Nation of Millions*) à l'Est, N.W.A. (*Straight Outta Compton*) à l'Ouest. Le rap devient une **musique adulte**, politique d'un côté, brutale et gangsta de l'autre. Diffusion mondiale.` },
          { date: '1991', titre: `MC Solaar lance le rap français`, description: `*Qui sème le vent récolte le tempo* : premier album rap français vraiment grand public, samples jazz, rimes lettrées. La même année, IAM et NTM s'imposent. Le rap français est né, à dix-huit ans du rap américain.` },
          { date: '1993-1996', titre: `Âge d'or et guerre des côtes`, description: `**Wu-Tang Clan** (1993), **Nas** *Illmatic* (1994), **Notorious B.I.G.** (1994), **2Pac** *All Eyez on Me* (1996). La rivalité **East Coast / West Coast** s'envenime. 2Pac est tué à Las Vegas en septembre 1996, Biggie à Los Angeles en mars 1997. Les meurtres restent non résolus.` },
          { date: 'Années 2000', titre: `Eminem, Jay-Z, le Sud monte`, description: `**Eminem** (*The Marshall Mathers LP*, 2000) impose un rappeur blanc au sommet. **Jay-Z** devient une entreprise. **OutKast** depuis Atlanta gagne le Grammy de l'album de l'année (2004) — le Sud prend la tête.` },
          { date: 'Vers 2010-2015', titre: `Trap, drill, mumble rap`, description: `**Future**, **Migos**, **Young Thug** imposent depuis Atlanta la **trap** : charleston en triolets, basses 808, voix saturées d'auto-tune. La **drill** naît à Chicago avec Chief Keef puis se mondialise (Londres, Paris).` },
          { date: '2015-2018', titre: `Kendrick Lamar, Pulitzer`, description: `*To Pimp a Butterfly* (2015) : album-fleuve, héritage jazz et funk assumé, considéré comme le sommet rap de la décennie. *DAMN.* (2017) reçoit en **2018 le Prix Pulitzer de musique**, première récompense de ce prestige pour un rappeur.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le <em>langage interne</em> du rap`,
      contenu_md:
`Trois techniques fondent le rap. La première est le [flow]{accent} : la manière dont la voix du rappeur épouse le tempo. C'est l'équivalent rythmique de ce que serait, en chant, le timbre — une **signature personnelle** aussi reconnaissable que possible. Le flow d'**Eminem** n'a rien à voir avec celui de **Snoop Dogg**, celui de **Damso** rien à voir avec celui de **MC Solaar**. Le flow joue sur la **densité syllabique** (combien de syllabes par mesure), sur les **accents** (où la voix appuie), sur les **respirations**, sur le **placement** légèrement en avance ou en retard sur la pulsation. Bien tenir un flow rapide est, techniquement, aussi exigeant qu'un solo de bebop — la filiation avec [[jazz]] n'est pas qu'historique.

La deuxième technique est la **rime**. Le rap des débuts (Sugarhill Gang, Run-DMC) se contentait de **rimes plates** en fin de vers. Très vite, sous l'influence de poètes comme **Rakim** dès la fin des années 1980, puis avec **Nas**, **Big Pun**, **Eminem**, **Kendrick Lamar** en français Booba et Nekfeu, la rime s'enrichit : **rime multisyllabique** (deux ou trois syllabes qui riment ensemble), **rime interne** (rimes en plein milieu d'un vers), **assonance** (rimes sur les voyelles seules). Un grand couplet de rap contemporain est, sur le plan strictement formel, un objet de poésie dense.

La troisième technique est la **production** — le travail sur le **beat**. Aux origines, le DJ bouclait simplement un break. Très vite est venu l'art du [sample]{accent} : emprunter quelques mesures d'un disque ancien — un riff de **James Brown**, un piano de **jazz** des années 1960, une voix soul — pour en faire la base d'un morceau neuf. Les grands producteurs sont devenus des **archéologues musicaux** : **DJ Premier**, **Pete Rock**, **J Dilla** dans les années 1990 ; **Dr. Dre** sur la côte ouest avec une production live plus que samplée ; aujourd'hui **Metro Boomin**, **Mike Will Made It**, **Hit-Boy**. Le **boom-bap** des années 1990 (kick lourd, snare claquant) a cédé la place vers 2010 à la **trap** (kick 808, charleston en triolets) — mais l'idée centrale reste la même : sculpter quelques secondes de matière sonore pour porter une voix.`
    },

    {
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: 'Le flow, visualisé',
      params: {
        image: 'data:image/png;base64,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',
        legende: 'Trois manières de poser les syllabes sur la même mesure : le flow est la signature rythmique d\'un rappeur.',
        hotspots: []
      }
    },

    {
      type: 'widget',
      titre: `Trois techniques fondatrices`,
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: `Le flow`,
            description: `La manière dont la voix épouse le tempo : densité syllabique, accents, respirations, placement légèrement en avance ou en retard. **Signature personnelle** d'un rappeur, aussi reconnaissable qu'un timbre. Les flows légendaires : la lenteur menaçante de Biggie, la mitraille de Twista, la mélopée de PNL.`
          },
          {
            titre: `Les rimes`,
            description: `Du couplet en rimes plates des pionniers à la **rime multisyllabique** (Rakim, Eminem, Nas) et à la **rime interne** (Big Pun, Black Thought, Nekfeu en français), la sophistication poétique grandit avec le genre. La rime est ce qui rapproche le rap d'une **tradition orale lettrée**.`
          },
          {
            titre: `Le sample`,
            description: `Emprunter quelques mesures d'un disque ancien — jazz, funk, soul, parfois cinéma ou jazz vocal — pour en faire la base d'un morceau neuf. Voir [[jazz]] pour la dette esthétique : le rap recycle, transforme, cite — exactement comme un soliste de jazz reprend un standard.`
          },
          {
            titre: `La production`,
            description: `L'art de construire le beat. **Boom-bap** des années 1990 (DJ Premier, Pete Rock, J Dilla), **G-funk** de Dr. Dre sur la côte ouest, **trap** d'Atlanta depuis 2005 (Metro Boomin, Mike Will Made It). Le producteur est devenu aussi crucial que le rappeur — parfois plus.`
          }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'Boom-bap vs trap',
      contenu_md: `Deux grammaires rythmiques structurent le rap : le [boom-bap]{accent} des années 1985-2005 — **kick** lourd sur le 1, **snare** claquant sur le 3, charleston droit, samples soul-jazz découpés à la main — et la [trap]{accent} née à Atlanta vers 2003 — kicks **808** profonds et longs, **charleston en triolets** rapides, snares clappés, tempos lents (~70 BPM mais doublés). Le passage de l'un à l'autre, vers 2010-2015, est probablement la plus grande révolution sonore du rap depuis sa naissance.`
    },

    {
      type: 'widget',
      titre: `Quatre grandes écoles américaines`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: `New York — 1979-2000`,
            titre: `East Coast`,
            description: `Le berceau. Rimes denses, samples soul-jazz, **boom-bap**. **Wu-Tang Clan** (Staten Island, 1993), **Nas** (Queens, *Illmatic* 1994), **Notorious B.I.G.** (Brooklyn), **Jay-Z**, Mobb Deep, Nas. Texture sombre, écriture lettrée, héritage direct de Public Enemy.`
          },
          {
            tag: `Los Angeles — 1988-2000`,
            titre: `West Coast`,
            description: `**N.W.A.** (Compton, 1988) ouvre la voie. **Dr. Dre** code le son **G-funk** sur *The Chronic* (1992) — synthés mélancoliques, basse profonde. **Snoop Dogg**, **2Pac**, Warren G, Ice Cube. Plus mélodique, plus produit. Gangsta rap.`
          },
          {
            tag: `Atlanta — 1994-aujourd'hui`,
            titre: `Le Sud`,
            description: `**OutKast** ouvre la brèche dès 1994. Puis explosion de la **trap** : T.I., **Gucci Mane**, **Future**, **Migos**, Young Thug, 21 Savage, Lil Baby. Atlanta est devenue la capitale **mondiale** du rap depuis 2010, dépassant New York et Los Angeles.`
          },
          {
            tag: `Chicago / partout — 2012-`,
            titre: `Drill et au-delà`,
            description: `Née à Chicago avec **Chief Keef** (2012), la **drill** s'est mondialisée : Londres (Headie One), Brooklyn (Pop Smoke), Paris (Gazo). Tempos plus rapides, basses massives, paroles brutes. Le rap n'a plus de centre : il est partout simultanément.`
          }
        ]
      }
    },

    {
      type: 'widget',
      composant: 'Prediction',
      titre: 'Retour aux origines',
      params: {
        question: 'En quelle année a lieu la block party fondatrice de DJ Kool Herc dans le Bronx ?',
        min: 1950,
        max: 2000,
        step: 1,
        reponse: 1973,
        unite: '',
        explication: '**1973**, au 1520 Sedgwick Avenue. Cinquante ans plus tard, le genre né dans cette fête d\'anniversaire est la musique la plus écoutée du monde.'
      }
    },

    {
      type: 'texte',
      titre: `La <em>guerre des côtes</em> et l'âge d'or des années 1990`,
      contenu_md:
`Les **années 1990** sont à l'histoire du rap ce que sont les années 1950 à l'histoire du jazz : un **âge d'or** que les nostalgiques tiennent pour insurpassable. C'est aussi sa décennie la plus violente.

Sur la **côte est**, à New York, une génération de **virtuoses lyriques** émerge : **Nas** publie en 1994 *Illmatic*, qu'on tient pour l'album rap parfait — neuf morceaux, quarante minutes, écriture de chirurgien, production de Pete Rock, DJ Premier, Q-Tip et Large Professor. La même année, **Notorious B.I.G.** sort *Ready to Die*. Le **Wu-Tang Clan**, neuf rappeurs d'un coup, publie *Enter the Wu-Tang* fin 1993 — une mythologie kung-fu greffée sur un boom-bap sombre, signée RZA. C'est l'époque où l'écriture rap atteint un raffinement comparable, sur son terrain propre, à n'importe quelle poésie contemporaine.

Sur la **côte ouest**, **Dr. Dre** publie en 1992 *The Chronic*, qui invente le son [G-funk]{accent} : synthés mélancoliques, basses lourdes, atmosphères ensoleillées et menaçantes. Il y présente un jeune rappeur de Long Beach, **Snoop Dogg**, dont le flow nonchalant fascine. Surtout, il s'allie à **2Pac**, libéré de prison en 1995 et signé chez Death Row Records. *All Eyez on Me* (1996), double album de Pac, est l'un des plus gros succès commerciaux de l'histoire du rap.

C'est dans ce contexte qu'éclate la **guerre des côtes**, mélange de rivalité musicale, de querelle d'ego entre Sean « Puffy » Combs (Bad Boy, New York) et Suge Knight (Death Row, Los Angeles), et de violence de rue qui contamine l'industrie. **2Pac** est abattu à Las Vegas en **septembre 1996**, six mois après *All Eyez on Me*. **Notorious B.I.G.** est abattu à **Los Angeles** en **mars 1997**, deux semaines avant la sortie de son deuxième album, *Life After Death*. Les deux meurtres restent **non élucidés**. Le rap perd ses deux figures de proue à 25 et 24 ans.`
    },

    {
      type: 'widget',
      titre: `Le rap français — quelques repères chiffrés`,
      composant: 'SelecteurValeurs',
      params: {
        unite: '',
        indexInitial: 1,
        options: [
          { label: '1991', valeur: 'MC Solaar', description: 'Sortie de Bouge de là puis de l\'album Qui sème le vent récolte le tempo. Premier succès rap grand public en France, samples jazz, rimes lettrées posées sur voix calme.' },
          { label: '1995', valeur: 'NTM & IAM', description: 'Suprême NTM (Paris/Saint-Denis) publie Paris sous les bombes ; IAM (Marseille) publie L\'École du micro d\'argent en 1997. Deux groupes qui imposent un rap français militant, ancré dans les banlieues.' },
          { label: '2002', valeur: 'Booba', description: 'Sortie de Temps mort, premier album solo. Booba (ex-Lunatic) impose un rap plus brut, individualiste, qui domine la décennie 2000-2010. Référence quasi unanime des rappeurs français suivants.' },
          { label: '2016', valeur: 'PNL', description: 'Sortie de Le Monde Chico. Les frères de Corbeil-Essonnes inventent un rap mélancolique, auto-tuné, atmosphérique. Tournent le dos aux médias. Disque de diamant sans promotion.' },
          { label: '2020', valeur: 'Aya Nakamura', description: 'Sans être rappeuse au sens strict, elle est la chanteuse francophone la plus écoutée au monde. Symbole de la francophonie post-rap, héritière directe de la culture hip-hop urbaine française.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le rap <em>français</em>, ou la traduction d'une banlieue`,
      contenu_md:
`Le rap traverse l'Atlantique au milieu des années 1980. À **Paris**, le premier diffuseur est l'émission *H.I.P. H.O.P.* de Sidney sur TF1 (1984), puis Radio Nova. Mais c'est la fin de la décennie qui voit naître le rap français proprement dit : **Suprême NTM** (Joey Starr et Kool Shen, de Saint-Denis), **IAM** (Akhenaton et Shurik'n, de Marseille), **Assassin** (Paris), **Ministère AMER** (Sarcelles). Une génération qui transpose dans la **banlieue** française la grammaire du rap américain, mais avec une langue propre, des références propres, une géographie propre. Sur le rôle de Paris et de sa banlieue dans cette histoire, voir [[paris-geographie]].

**1991** est l'année charnière. **MC Solaar** publie *Qui sème le vent récolte le tempo* — premier album rap français à toucher le grand public, porté par *Bouge de là* puis *Caroline*. Son flow posé, son écriture lettrée, ses samples jazz (Serge Gainsbourg, Hubert Laws, Lalo Schifrin) le distinguent : il fait du rap une musique acceptable pour les médias mainstream. La même année, NTM et IAM s'imposent dans leur registre plus dur. Trois figures, trois esthétiques : le rap français a sa première trinité.

Dans les années 2000, **Booba** (Boulogne-Billancourt, ancien de **Lunatic**) impose un rap plus brut, individualiste, qui domine la décennie. **Kery James** (ex-Mafia K'1 Fry) prolonge la veine politique. **Rohff**, **Sefyu**, **Médine** s'imposent. Puis vient une **génération éclatée** dans les années 2010 : **PNL** (Corbeil-Essonnes) invente un rap mélancolique auto-tuné qui ignore les médias et fait disque de diamant ; **Damso** (Bruxelles) impose un rap froid et lettré ; **Orelsan** atteint un statut transgénérationnel ; **Nekfeu**, **Vald**, **Jul**, **Lomepal** habitent des registres distincts. Le rap est désormais, **en France**, la première musique écoutée toutes générations confondues.`
    },

    {
      type: 'encadre',
      label: 'Voix des marges',
      contenu_md: `Partout où il se parle, le rap reste une [voix des marges]{accent}. Témoignage des quartiers pauvres, des **banlieues** françaises, des **inner cities** américaines, des cités de Marseille, des estates de Londres. Il n'est presque jamais en bons termes avec les **institutions** : censures, procès (NTM en 1996, Médine régulièrement, ad nauseam aux États-Unis), refus des médias, controverses politiques récurrentes. Cette tension est une **constante structurelle** : tout rap d'État serait une contradiction dans les termes. Comme le jazz à ses débuts, le rap est d'abord la musique de ceux que la société dominante refuse d'entendre — et c'est précisément pour cela qu'il a réussi à parler au monde entier.`
    },

    {
      type: 'texte',
      titre: `<em>Trap</em>, drill, et le sacre de Kendrick`,
      contenu_md:
`Vers **2005-2010**, depuis **Atlanta**, une nouvelle grammaire rythmique émerge : la **trap**. Le mot vient du nom donné aux maisons de revente de drogue (*trap houses*). Le son est immédiatement reconnaissable : **kicks 808** profonds et longs, **charleston en triolets** très rapides (cinq, six, sept frappes par temps), snares clappés, tempos lents (~70 BPM mais perçus doubles). Les pionniers sont **T.I.** (*Trap Muzik*, 2003), **Gucci Mane**, puis **Future** et surtout **Migos**, dont le tube *Versace* (2013) impose le flow triplé au monde entier. Vers 2015, la trap est devenue le **standard rythmique mondial** : du rap français à la K-pop, tout passe par sa grammaire.

En parallèle naît à **Chicago** la [drill]{accent}, sous-genre plus dur et plus rapide, avec **Chief Keef** en figure de proue (*I Don't Like*, 2012). La drill se mondialise : Londres (Headie One, Digga D), Brooklyn (Pop Smoke, tué à 20 ans en 2020), Paris (Gazo, Freeze Corleone). Le rap n'a plus de centre — il est devenu **simultanément partout**.

Au sommet de cette décennie 2010, une figure se détache : **Kendrick Lamar**, de **Compton** (Californie). Trois albums vertigineux : *good kid, m.A.A.d city* (2012, récit autobiographique d'une enfance dans la violence), *To Pimp a Butterfly* (2015, fresque jazz-funk-spoken-word sur la condition noire américaine), *DAMN.* (2017, méditation morale resserrée). Ce dernier reçoit en **2018** le **Prix Pulitzer de musique** — première récompense de ce prestige attribuée à un album rap, geste de reconnaissance institutionnelle longtemps inimaginable. Kendrick devient, sans concurrent sérieux, la voix la plus écoutée de sa génération. Le rap, cinquante ans après Kool Herc, a accompli son passage : de musique de fête de quartier à art majeur, étudié, primé, mondialisé — sans pourtant rien perdre de sa puissance de témoignage initial.`
    },

    {
      type: 'mini-quiz',
      q: 'Boom-bap et trap : quelle est la différence rythmique fondamentale ?',
      indice: 'Réécoute mentalement la grille de flow vue plus haut.',
      reponse: 'Le **boom-bap** (années 1990, ~90 BPM) : caisse claire carrée sur les temps 2 et 4, échantillons de soul-funk. La **trap** (Atlanta, années 2010) : basses 808, tempo lent mais hi-hats en **triolets** ultra-rapides — c\'est ce débit ternaire qui change tout le flow.'
    },

    {
      type: 'texte',
      titre: `Ce que <em>le rap</em> nous dit`,
      contenu_md:
`En **cinquante ans**, le rap a parcouru le chemin que le jazz avait mis presque autant à parcourir : musique de fête de quartier, puis musique adulte et politique, puis musique mondiale, puis art reconnu par les institutions les plus conservatrices (Pulitzer, Lincoln Center, Académie française pour Booba en 2025). Aucune autre musique populaire du XXᵉ siècle n'a connu une **diffusion aussi rapide** ni une **réinvention aussi continue**.

Ce qui demeure, par-dessus les écoles, les pays, les générations, c'est un **art de la parole** scandée sur un **rythme**. Le rappeur n'est ni un chanteur ni un poète — il est précisément l'**hybride** des deux. Il écrit comme un poète (rimes denses, métaphores, références), il performe comme un chanteur (timbre, présence scénique, rapport au tempo). Et il le fait sur une **matière sonore** — le beat — qui est elle-même un art, conçu par un producteur dont le travail est aussi central que celui du MC.

Le rap est aussi, partout, une **voix générationnelle**. Il a porté la parole des Noirs américains, puis celle des banlieues françaises, puis celle de la jeunesse mondialisée. Il dit la rue, l'argent, la famille, la violence, l'amour, la mort, la spiritualité parfois (Kendrick, Kanye), avec un mélange de **réalisme cru** et de **stylisation poétique** qui n'appartient qu'à lui. À cinquante ans, le rap est devenu trop massif pour qu'on en parle d'une voix univoque : il est désormais ce qu'a été la chanson au XXᵉ siècle, ce qu'a été le roman au XIXᵉ — un **continent culturel** entier, dans lequel chacun peut entrer par sa porte. Reste, en son centre, la même magie qu'à la soirée du 11 août 1973 : un beat qui tourne, une voix qui prend le micro, et quelque chose qui n'existait pas la veille.`
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: `Vrai ou faux ?`,
      affirmation: `Le rap et le hip-hop sont strictement synonymes : tout rappeur fait du hip-hop, et toute musique hip-hop est du rap.`,
      reponse: false,
      explication: `Le rap est l'**un des quatre piliers** du hip-hop, mouvement culturel global né dans le Bronx au début des années 1970. Les trois autres piliers sont le DJing (platinisme), le breakdance (danse au sol) et le graffiti (peinture urbaine). Un breakdancer ou un graffeur fait du hip-hop sans faire de rap. À l'inverse, le rap est devenu mondial alors que les trois autres piliers sont restés plus confidentiels.`
    },
    {
      type: 'associer',
      q: `Associe chaque rappeur ou groupe à sa contribution principale :`,
      paires: [
        { gauche: 'DJ Kool Herc', droite: 'Invention du breakbeat dans le Bronx' },
        { gauche: 'Sugarhill Gang', droite: 'Premier tube rap commercial (Rapper\'s Delight)' },
        { gauche: 'Public Enemy', droite: 'Rap politique militant de la fin des années 1980' },
        { gauche: 'Dr. Dre', droite: 'Son G-funk de la côte ouest' },
        { gauche: 'MC Solaar', droite: 'Premier succès grand public du rap français' },
        { gauche: 'Kendrick Lamar', droite: 'Pulitzer de musique 2018' }
      ],
      explication: `Kool Herc invente le breakbeat lors de la soirée du 11 août 1973. Sugarhill Gang publie Rapper's Delight en 1979. Public Enemy fait basculer le rap dans la militance avec It Takes a Nation of Millions en 1988. Dr. Dre code le son G-funk sur The Chronic (1992) à Los Angeles. MC Solaar impose le rap français au grand public en 1991. Kendrick Lamar reçoit en 2018 le Pulitzer de musique pour DAMN. — première fois pour un rappeur.`
    },
    {
      type: 'ordre-chrono',
      q: `Remets ces événements de l'histoire du rap dans l'ordre chronologique :`,
      items: [
        'Invention du breakbeat par DJ Kool Herc dans le Bronx',
        'Premier tube rap commercial avec Rapper\'s Delight',
        'Rap politique militant avec Public Enemy et N.W.A.',
        'Premier album grand public du rap français avec MC Solaar',
        'Guerre des côtes et assassinats de 2Pac et Notorious B.I.G.',
        'Explosion mondiale de la trap depuis Atlanta',
        'Prix Pulitzer pour Kendrick Lamar'
      ],
      explication: `Le rap traverse cinq décennies : Kool Herc en 1973, Sugarhill Gang en 1979, Public Enemy / N.W.A. en 1988, MC Solaar en 1991, guerre des côtes en 1996-1997, trap dominante vers 2010-2015, Pulitzer de Kendrick en 2018. Chaque étape ouvre un nouvel horizon : geste fondateur, succès commercial, militance, mondialisation, tragédie, renouvellement esthétique, consécration institutionnelle.`
    },
    {
      type: 'texte-a-trou',
      q: `Complète :`,
      texte: `Le rap naît le 11 août 1973 dans le {Bronx}, lors d'une soirée donnée par {Kool Herc} qui y invente la technique du {breakbeat}. Il est l'un des quatre piliers du {hip-hop}, avec le DJing, le breakdance et le graffiti.`,
      explication: `Le 11 août 1973, au 1520 Sedgwick Avenue dans le Bronx, DJ Kool Herc anime l'anniversaire de sa sœur et boucle pour la première fois en public les passages purement rythmiques (breaks) des disques funk sur deux platines. Cette soirée est considérée comme l'acte fondateur du hip-hop, dont le rap n'est qu'un des quatre piliers.`
    },
    {
      q: `Quelle est la rivalité géographique majeure qui structure le rap américain des années 1990 ?`,
      options: [
        `New York / Atlanta`,
        `East Coast / West Coast (New York contre Los Angeles)`,
        `Chicago / Detroit`,
        `Miami / Houston`
      ],
      correcte: 1,
      explication: `Les années 1990 sont marquées par la rivalité East Coast / West Coast, opposant les rappeurs new-yorkais (Notorious B.I.G., Nas, Wu-Tang Clan, Jay-Z) signés notamment chez Bad Boy de Sean Combs, aux rappeurs de Los Angeles (2Pac, Snoop Dogg, Dr. Dre) signés chez Death Row de Suge Knight. Cette rivalité culmine avec les assassinats de 2Pac (1996) et Biggie (1997), restés non élucidés.`
    },
    {
      q: `Qu'est-ce que le flow dans le rap ?`,
      options: [
        `Le tempo du morceau`,
        `La manière dont la voix du rappeur épouse le tempo : densité syllabique, accents, respirations, placement`,
        `Le nom du beat`,
        `Une danse hip-hop`
      ],
      correcte: 1,
      explication: `Le flow est la manière dont la voix du rappeur épouse le tempo : combien de syllabes par mesure, où la voix appuie, où elle respire, comment elle se place légèrement en avance ou en retard sur la pulsation. C'est la signature personnelle d'un rappeur, aussi reconnaissable qu'un timbre vocal. Le flow d'Eminem n'a rien à voir avec celui de Snoop Dogg ; celui de Damso rien à voir avec celui de MC Solaar.`
    },
    {
      q: `Qu'est-ce qu'un sample dans le rap ?`,
      options: [
        `Un morceau gratuit offert pour faire connaître un rappeur`,
        `Quelques mesures empruntées à un disque ancien (souvent jazz, funk, soul) utilisées comme base d'un nouveau morceau`,
        `Un échantillon de drogue mentionné dans un texte`,
        `Une démo non publiée`
      ],
      correcte: 1,
      explication: `Le sample est l'art d'emprunter quelques mesures d'un disque ancien — souvent jazz, funk ou soul — pour en faire la base d'un morceau neuf. C'est la technique centrale de la production rap, qui rapproche le rappeur d'un archéologue musical. Le sampling rapproche le rap des traditions afro-américaines : comme le jazz reprend un standard, le rap recycle, transforme et cite.`
    },
    {
      q: `Quelle est l'année charnière du rap français ?`,
      options: [
        `1973, comme aux États-Unis`,
        `1984, avec l'émission H.I.P. H.O.P. de Sidney sur TF1`,
        `1991, avec MC Solaar et l'émergence de NTM et IAM`,
        `2002, avec Booba`
      ],
      correcte: 2,
      explication: `1991 est l'année charnière du rap français : MC Solaar publie Qui sème le vent récolte le tempo, premier album rap français vraiment grand public, et la même année Suprême NTM et IAM s'imposent. L'émission de Sidney en 1984 a préparé le terrain, et Booba en 2002 ouvre une autre époque, mais 1991 reste la date de naissance publique du rap français adulte.`
    },
    {
      q: `Qu'est-ce qui caractérise la trap, sous-genre dominant du rap depuis 2010 ?`,
      options: [
        `Des tempos rapides et des samples soul-jazz typiques de New York`,
        `Des kicks 808 profonds, une charleston en triolets rapides, des tempos lents — son né à Atlanta`,
        `Des arrangements orchestraux et des choeurs gospel`,
        `Un retour aux platines et au scratch des années 1980`
      ],
      correcte: 1,
      explication: `La trap, née à Atlanta vers 2003 (T.I., Gucci Mane) et popularisée par Future et Migos vers 2013, se caractérise par des kicks 808 profonds et longs, une charleston en triolets très rapides (cinq à sept frappes par temps), des snares clappés, et des tempos lents (~70 BPM mais perçus doubles). Elle est devenue depuis 2015 le standard rythmique mondial : du rap français à la K-pop.`
    },
    {
      q: `Pourquoi Kendrick Lamar occupe-t-il une place exceptionnelle dans le rap contemporain ?`,
      options: [
        `Il est le rappeur le plus vendu de l'histoire`,
        `Il est le premier rappeur à avoir reçu le Prix Pulitzer de musique (en 2018 pour DAMN.)`,
        `Il est le fondateur du label Def Jam`,
        `Il a inventé la trap`
      ],
      correcte: 1,
      explication: `Kendrick Lamar a reçu en 2018 le Prix Pulitzer de musique pour son album DAMN. (2017) — première fois qu'un rappeur reçoit cette récompense de très haut prestige, longtemps réservée à la musique classique contemporaine. Avec good kid, m.A.A.d city (2012), To Pimp a Butterfly (2015) et DAMN., il s'est imposé comme la voix la plus écoutée de sa génération et le symbole de la maturité institutionnelle du rap.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Hip-hop',
      definition: `Mouvement culturel global né dans le **Bronx** au début des années 1970, structuré autour de **quatre piliers** : MCing (rap), DJing (platinisme), breakdance (danse au sol) et graffiti. Le rap n'en est qu'une composante — sa partie verbale.`
    },
    {
      terme: 'Breakbeat',
      definition: `Passage purement rythmique d'un disque funk — quelques mesures de batterie nue — **bouclé sur deux platines** pour servir de base à un morceau. Inventé par **DJ Kool Herc** le 11 août 1973 lors de la soirée fondatrice du hip-hop.`
    },
    {
      terme: 'MC',
      definition: `*Master of ceremony*. À l'origine, animateur qui prend le micro pour chauffer le public et présenter le DJ. Devient progressivement le **centre de gravité** de la musique : c'est le rappeur lui-même, auteur et interprète des couplets.`
    },
    {
      terme: 'Flow',
      definition: `Manière dont la voix du rappeur **épouse le tempo** : densité syllabique, accents, respirations, placement en avance ou en retard sur la pulsation. Signature personnelle d'un rappeur, aussi reconnaissable qu'un timbre vocal.`
    },
    {
      terme: 'Sample',
      definition: `Quelques mesures **empruntées à un disque ancien** (jazz, funk, soul) utilisées comme base d'un morceau neuf. Technique centrale de la production rap qui fait du producteur un *archéologue musical* — héritage direct de la pratique jazz de la citation.`
    },
    {
      terme: 'Boom-bap',
      definition: `Grammaire rythmique du rap des années **1985-2005** : **kick** lourd sur le 1, **snare** claquant sur le 3, charleston droit, samples soul-jazz découpés à la main. Son emblématique de l'âge d'or new-yorkais (DJ Premier, Pete Rock, J Dilla).`
    },
    {
      terme: 'Trap',
      definition: `Sous-genre né à **Atlanta** vers 2003 et devenu standard rythmique mondial depuis 2015. Reconnaissable à ses **kicks 808** profonds et longs, sa **charleston en triolets** rapides, ses snares clappés, ses tempos lents perçus doubles.`
    },
    {
      terme: 'G-funk',
      definition: `Son **West Coast** codé par **Dr. Dre** sur *The Chronic* (1992) : synthés mélancoliques tenus, basses lourdes, atmosphères ensoleillées et menaçantes. Bande-son du gangsta rap californien de Snoop Dogg à 2Pac.`
    },
    {
      terme: 'Rime multisyllabique',
      definition: `Rime qui porte sur **plusieurs syllabes consécutives** plutôt que sur la seule syllabe finale. Sophistication apparue avec **Rakim** à la fin des années 1980, perfectionnée par Nas, Eminem, Big Pun ; en français par Booba, Nekfeu, Damso.`
    },
    {
      terme: 'Drill',
      definition: `Sous-genre né à **Chicago** en 2012 avec **Chief Keef**, mondialisé à Londres (Headie One), Brooklyn (Pop Smoke) et Paris (Gazo). Plus dur et plus rapide que la trap, basses massives, paroles brutes liées à la violence des rues.`
    }
  ]

});
