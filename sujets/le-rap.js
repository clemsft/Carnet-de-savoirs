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
    date_maj: '2026-05-13'
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
          { date: '1979', titre: `Premier tube : *Rapper's Delight*`, description: `**Sugarhill Gang** grave un morceau de **14 minutes** sur la basse de *Good Times* de Chic. Le rap quitte les block parties new-yorkaises et entre à la radio. Premier million de disques vendus.` },
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
  ]

});
