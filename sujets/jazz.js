/* ===================================================================
   SUJET — Le jazz
   ===================================================================
   Une musique née dans le delta du Mississippi, qui a réinventé en un
   siècle l'idée même de musicien.
   Domaine : Musique
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'jazz',
    titre: 'Le <em>jazz</em>',
    domaines: ['Musique'],
    tags: ['nouvelle-orléans', 'improvisation', 'bebop', 'swing', 'miles davis', 'coltrane'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['paris-geographie', 'le-rap'],
    date_creation: '2026-05-12',
    date_maj: '2026-05-12'
  },

  resume: `Comprendre une musique née vers 1900 dans les rues de La Nouvelle-Orléans du croisement du blues, du ragtime et des chants de travail afro-américains, qui en un siècle réinvente l'idée même de musicien — par la place inédite qu'elle accorde à l'[improvisation]{accent} et par la succession vertigineuse de ses révolutions stylistiques, du swing au free jazz.`,

  points_cles: [
    `Le jazz naît vers **1900-1917** à **La Nouvelle-Orléans**, au croisement du **blues**, du **ragtime** et des **work songs** afro-américains, dans une ville créole où coexistent traditions européennes et héritages africains.`,
    `Son principe central est l'**improvisation** : le musicien de jazz ne se contente pas d'interpréter une partition, il **invente sa partie** en temps réel, sur une trame harmonique partagée — le **standard**.`,
    `La formation type évolue : du **combo** (3 à 7 musiciens) de La Nouvelle-Orléans au **big band** (12 à 20) de l'ère swing, puis retour au combo serré (quartet, quintet) à partir du **bebop** des années 1940.`,
    `**Louis Armstrong** (1901-1971) invente dans les années 1920 le rôle moderne du **soliste** : la voix individuelle qui s'élève au-dessus du collectif et y impose sa marque.`,
    `Les années 1930-1940 sont celles du **swing** : grandes formations dansantes orchestrées par **Duke Ellington** et **Count Basie**, et le jazz devient brièvement la musique populaire majoritaire aux États-Unis.`,
    `Le **bebop** (Charlie **Parker**, Dizzy **Gillespie**, Thelonious **Monk**, vers 1945) brise la fonction dansante et fait du jazz une **musique de concert** harmoniquement complexe, à tempo rapide, pour musiciens virtuoses.`,
    `**Miles Davis** traverse trois révolutions : le **cool jazz** (*Birth of the Cool*, 1949), le **jazz modal** (*Kind of Blue*, 1959), puis le **jazz-rock fusion** (*Bitches Brew*, 1970) — il est le seul musicien à avoir lancé ainsi plusieurs écoles successives.`,
    `Le **free jazz** d'**Ornette Coleman** et **Albert Ayler** abolit dans les années 1960 les dernières contraintes (grilles d'accords, mesure régulière) ; **Wynton Marsalis** lance dans les années 1980 une **renaissance néo-traditionnelle** qui réinscrit le jazz dans son héritage classique.`
  ],

  carte_mentale: {
    central: 'jazz',
    noeuds: [
      { id: 'jazz', label: 'Jazz', description: 'Musique afro-américaine née vers 1900 à La Nouvelle-Orléans. Fondée sur l\'improvisation collective puis individuelle.' },
      { id: 'racines', label: 'Racines', description: 'Trois traditions afro-américaines : blues, ragtime, work songs. Plus l\'héritage européen des fanfares et de l\'harmonie tonale.' },
      { id: 'principes', label: 'Principes', description: 'Improvisation, swing (la pulsation flottante), standards (le répertoire partagé), call-and-response (l\'appel-réponse hérité d\'Afrique).' },
      { id: 'styles', label: 'Styles', description: 'Une succession vertigineuse d\'écoles en moins d\'un siècle. Chaque décennie ou presque réinvente le langage.' },
      { id: 'formations', label: 'Formations', description: 'Du petit combo polyphonique de La Nouvelle-Orléans au big band swing, retour au quartet/quintet à partir du bebop.' },
      { id: 'diffusion', label: 'Diffusion', description: 'Né au Sud des États-Unis, le jazz remonte à Chicago puis New York, traverse l\'Atlantique et s\'installe à [[paris-geographie]] dès les **années folles**.' },

      // Racines
      { id: 'blues', label: 'Blues', description: 'Forme à 12 mesures, **blue notes** (tierce et septième abaissées), chant plaintif issu des champs de coton du Delta du Mississippi.', parent: 'racines' },
      { id: 'ragtime', label: 'Ragtime', description: 'Musique pour piano à rythme **syncopé**, popularisée par **Scott Joplin** (*Maple Leaf Rag*, 1899). Plus écrit qu\'improvisé.', parent: 'racines' },
      { id: 'worksongs', label: 'Work songs', description: 'Chants de travail des esclaves puis ouvriers, à structure d\'**appel-réponse** héritée d\'Afrique de l\'Ouest.', parent: 'racines' },

      // Styles
      { id: 'no-jazz', label: 'New Orleans jazz', description: 'Vers 1910-1925. **Improvisation collective polyphonique** : cornet, clarinette, trombone s\'entrelacent. Louis Armstrong, King Oliver, Jelly Roll Morton.', parent: 'styles' },
      { id: 'swing', label: 'Swing', description: 'Années 1930-1940. Big bands dansants. **Duke Ellington**, **Count Basie**, Benny Goodman. Le jazz devient la pop music dominante.', parent: 'styles' },
      { id: 'bebop', label: 'Bebop', description: 'Vers 1945. Petits combos, tempo rapide, harmonie complexe. **Charlie Parker**, **Dizzy Gillespie**, **Thelonious Monk**. Le jazz quitte la piste de danse pour la salle de concert.', parent: 'styles' },
      { id: 'cool-modal', label: 'Cool & modal', description: 'Années 1950-1960. Réaction au feu bebop : sons feutrés, tempos modérés. Puis improvisation sur **modes** plutôt que sur grilles. **Miles Davis**, **John Coltrane**.', parent: 'styles' },
      { id: 'free', label: 'Free jazz', description: 'Années 1960. Abolition des grilles, des mesures, parfois de la tonalité. **Ornette Coleman**, **Albert Ayler**, Cecil Taylor, Coltrane tardif.', parent: 'styles' },
      { id: 'fusion', label: 'Fusion', description: 'Fin des années 1960. Croisement avec le rock et le funk : guitare électrique, claviers, rythmes binaires. **Miles électrique**, **Weather Report**, Herbie Hancock.', parent: 'styles' },
      { id: 'neo', label: 'Néo-classique', description: 'Années 1980. **Wynton Marsalis** mène un retour assumé à la tradition acoustique (bebop, swing) contre la fusion. Institutionnalisation du jazz comme musique classique américaine.', parent: 'styles' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Une musique née d\'<em>un carrefour</em>',
      contenu_md:
`Pour comprendre le jazz, il faut d'abord regarder **La Nouvelle-Orléans** vers 1900. Ancienne colonie française et espagnole, vendue par Napoléon en 1803, c'est la ville la plus créole d'Amérique du Nord : on y croise des Noirs descendants d'esclaves, des **Créoles de couleur** francophones qui ont reçu une éducation musicale européenne, des Cubains, des Cajuns, des Italiens, des Allemands. Une ville portuaire, polyglotte, où l'on danse dans les rues le dimanche.

Sur ce terreau unique convergent **trois traditions afro-américaines**. Le **blues**, né dans les champs de coton du Mississippi : une forme à douze mesures, une voix plaintive, et ces fameuses [blue notes]{accent} — tierce et septième légèrement abaissées qui donnent au blues sa couleur indéfinissable, mi-majeure mi-mineure. Le **ragtime**, popularisé par **Scott Joplin** dès les années 1890 : une musique pour piano où la main droite **syncope** systématiquement (accentue les temps faibles) tandis que la main gauche tient le rythme régulier. Les **work songs** enfin, ces chants de travail hérités d'Afrique de l'Ouest, structurés en **appel-réponse** entre un meneur et un chœur.

À ces trois sources s'ajoute l'héritage européen, transmis notamment par les **fanfares militaires** que les anciens soldats noirs réinvestissent après la Guerre de Sécession : trompettes, clarinettes, trombones, soubassophones. L'instrumentation du jazz primitif est née.`
    },

    {
      type: 'encadre',
      label: 'Ce qui fait le jazz',
      contenu_md: `Une définition de travail : le jazz est une musique afro-américaine fondée sur l'[improvisation]{accent} d'un soliste (ou de plusieurs) sur une **trame harmonique partagée** — le **standard** — animée par une pulsation rythmique souple appelée **swing**. Tous les styles qu'on rangera sous ce nom partagent ces traits, même quand ils paraissent s'opposer.`
    },

    {
      type: 'widget',
      titre: `Un siècle d'écoles successives`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '~1900-1917', titre: `Naissance à La Nouvelle-Orléans`, description: `Croisement du blues, du ragtime et des work songs dans les rues, les bals et les bordels du quartier de **Storyville**. Premiers groupes structurés autour du cornettiste **Buddy Bolden**, puis **King Oliver**.` },
          { date: '1917', titre: `Premier enregistrement`, description: `L'**Original Dixieland Jass Band** (blanc, ironie de l'histoire) grave à New York les premiers disques étiquetés *jazz*. Storyville ferme la même année — les musiciens migrent vers le Nord.` },
          { date: '1925-1928', titre: `Armstrong invente le soliste`, description: `Les enregistrements des ***Hot Five*** et ***Hot Seven*** de **Louis Armstrong** font basculer le jazz : la polyphonie collective laisse place à l'**improvisation soliste**. L'individu prend le pas sur le groupe.` },
          { date: '1930-1945', titre: `L'ère du swing`, description: `Les **big bands** dominent : **Duke Ellington** au Cotton Club, **Count Basie** à Kansas City, Benny Goodman, Glenn Miller. Le jazz est la **pop music** majoritaire aux États-Unis. Les bals attirent des milliers de danseurs.` },
          { date: '~1945', titre: `Révolution bebop`, description: `Au Minton's Playhouse de Harlem, **Charlie Parker**, **Dizzy Gillespie** et **Thelonious Monk** inventent un jazz volontairement difficile : tempos vertigineux, harmonies enrichies, fini les danseurs. Le musicien de jazz devient un artiste de concert.` },
          { date: '1949 / 1959', titre: `Cool puis modal — Miles Davis`, description: `*Birth of the Cool* (1949) : sonorités feutrées, arrangements écrits, réaction au feu bebop. *Kind of Blue* (1959) : improvisation sur des **modes** au lieu de grilles d'accords. C'est l'album de jazz le plus vendu de l'histoire.` },
          { date: '1959-1965', titre: `Coltrane et le free jazz`, description: `**John Coltrane** pousse l'improvisation à ses limites (*Giant Steps*, *A Love Supreme*). **Ornette Coleman** (*Free Jazz*, 1960) et **Albert Ayler** abolissent grilles, tonalité, mesure régulière. Musique de rupture, politique autant qu'esthétique.` },
          { date: '~1969-1975', titre: `Fusion électrique`, description: `**Miles Davis** branche son trompette dans une wah-wah (*Bitches Brew*, 1970). Naissance du **jazz-rock** : **Weather Report**, Herbie Hancock, Mahavishnu Orchestra. Le jazz absorbe le rock et le funk.` },
          { date: 'Années 1980', titre: `Renaissance néo-classique`, description: `**Wynton Marsalis** mène un retour à la tradition acoustique (bebop, swing) et fait entrer le jazz au **Lincoln Center**. Le jazz s'institutionnalise comme **musique classique américaine**, au prix d'un débat sur son académisation.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le principe central : l'<em>improvisation</em>`,
      contenu_md:
`Voici ce qui sépare un musicien de jazz d'un musicien classique : devant une feuille où sont écrits une mélodie et une suite d'**accords** — par exemple les 32 mesures de *Body and Soul* ou les 12 mesures d'un blues — il n'exécute pas une partition fixée. Il **invente sa partie** en temps réel, en respectant la structure harmonique mais en composant librement les notes qu'il joue. Chaque solo est unique, jamais rejoué identique.

Ce principe d'improvisation n'est pas une absence de règle : c'est un **art profondément codifié**. Le soliste doit connaître par cœur la grille d'accords, sentir le tempo et la pulsation des autres musiciens, écouter ce qu'ils jouent pour leur répondre, citer parfois la mélodie originale ou un autre standard, gérer la dramaturgie de son solo (commencer simple, monter en intensité, retomber). Un grand solo de jazz est une **composition spontanée** d'une complexité que la partition écrite peinerait à capturer.

Cette pratique a une conséquence considérable : le jazz est l'une des rares musiques où l'**interprète** est aussi un **créateur**. Le soliste de jazz n'est pas un exécutant ; il est l'auteur de ce qu'il joue. C'est ce qui explique l'attention quasi religieuse portée aux solos historiques (le solo d'Armstrong sur *West End Blues*, celui de Coleman Hawkins sur *Body and Soul*, ceux de Coltrane sur *A Love Supreme*) — qu'on étudie comme on étudie les fugues de Bach.`
    },

    {
      type: 'widget',
      titre: `Techniques d'improvisation`,
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: `Improviser sur la grille`,
            description: `Le soliste joue sur une **grille d'accords** prédéfinie — par exemple les 32 mesures d'un standard comme *Autumn Leaves*. À chaque accord correspond une **gamme** ou un ensemble de notes appropriées. Le défi : naviguer ces changements harmoniques sans perdre le fil mélodique. C'est le langage du **bebop**.`
          },
          {
            titre: `Improviser sur des modes`,
            description: `Innovation de **Miles Davis** sur *Kind of Blue* (1959) : remplacer la grille rapide par un ou deux **modes** (gammes étendues) tenus sur de longs passages. Le morceau *So What* repose ainsi sur deux modes seulement. L'improvisateur dispose d'un espace plus libre pour les couleurs mélodiques. C'est le **jazz modal**.`
          },
          {
            titre: `Le call-and-response`,
            description: `Héritage direct des **work songs** africaines : un soliste lance une phrase, un autre (ou la section) lui répond. Très présent dans le swing des big bands, où les sections d'anches et de cuivres dialoguent. Reste central dans tout le jazz, jusqu'au free.`
          },
          {
            titre: `Le free`,
            description: `À partir d'**Ornette Coleman** (1960), abandon assumé de la grille d'accords et parfois de la mesure régulière. Les musiciens improvisent sur des **motifs**, des **atmosphères**, des contours mélodiques libres. L'oreille collective remplace la structure écrite. Forme la plus exigeante — et la plus controversée.`
          }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'Le standard',
      contenu_md: `Un [standard]{accent} est un morceau du répertoire commun que tout musicien de jazz est censé connaître : *Body and Soul*, *Autumn Leaves*, *All the Things You Are*, *Summertime*. La plupart viennent des **comédies musicales de Broadway** des années 1920-1940. Le standard fournit la **grille d'accords** et la mélodie de départ ; le reste est laissé à l'invention du musicien. C'est le langage commun grâce auquel deux jazzmen qui ne se sont jamais rencontrés peuvent monter sur scène ensemble et jouer.`
    },

    {
      type: 'widget',
      titre: `Trois grandes formations de jazz`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: `New Orleans / Dixieland`,
            titre: `Le combo polyphonique`,
            description: `5 à 7 musiciens. À l'avant, trois souffleurs improvisent **collectivement** : le **cornet** (mélodie principale), la **clarinette** (contrechant aigu, broderies), le **trombone** (contrechant grave). Derrière, la section rythmique : **banjo** ou guitare, **tuba** ou contrebasse, batterie, parfois piano. Pas encore de soliste dominant — la magie est dans l'entrelacement.`
          },
          {
            tag: `Swing`,
            titre: `Le big band`,
            description: `12 à 20 musiciens, structurés en **sections** : 4 à 5 anches (saxophones, clarinette), 3 à 4 trompettes, 3 à 4 trombones, une section rythmique (piano, guitare, contrebasse, batterie). Tout est **arrangé par écrit**, les solos individuels s'insèrent dans des moments précis. Le format dansant des années 1930-1940 — Ellington, Basie, Goodman.`
          },
          {
            tag: `Bebop et au-delà`,
            titre: `Le petit combo`,
            description: `**Quartet** ou **quintet** : un ou deux souffleurs (saxophone, trompette) plus la section rythmique (piano, contrebasse, batterie). Format inventé par le bebop, dominant depuis. Chaque musicien y a un espace solo prolongé. Le quintet de **Miles Davis** des années 1960 (Hancock, Carter, Williams, Shorter) est le modèle achevé du genre.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le <em>swing</em>, et la révolution <em>bebop</em>`,
      contenu_md:
`Les années **1930-1940** sont, aux États-Unis, l'âge d'or commercial du jazz. Sous le nom de **swing**, il devient la musique de danse majoritaire : on remplit les *ballrooms*, on enregistre des millions de disques, **Benny Goodman** triomphe au Carnegie Hall en 1938. **Duke Ellington** dirige depuis le Cotton Club de Harlem un big band incomparable, écrit des centaines de pièces (*Mood Indigo*, *Take the A Train* — signée Strayhorn), élève le jazz au rang de **musique de concert** sans rien lui faire perdre de sa pulsation. **Count Basie**, à Kansas City, invente un swing plus économe et plus rythmique. C'est l'époque où le jazz colonise aussi l'Europe : à Paris, le **Hot Club de France** de Charles Delaunay, **Django Reinhardt** et **Stéphane Grappelli** inventent un jazz manouche français qui s'imposera au monde entier. *(Voir [[paris-geographie]] pour Saint-Germain-des-Prés et les caves de jazz d'après-guerre.)*

Vers **1945**, dans un petit club de Harlem, le **Minton's Playhouse**, une poignée de jeunes musiciens noirs en a assez du swing. Trop commercial, trop blanc, trop simple. **Charlie Parker** (saxophone alto), **Dizzy Gillespie** (trompette), **Thelonious Monk** (piano), **Kenny Clarke** et **Max Roach** (batterie) inventent une musique délibérément difficile : tempos vertigineux, harmonies enrichies de neuvièmes et de treizièmes, mélodies sinueuses pleines de chromatismes. Plus question de danser dessus.

C'est la révolution **bebop** (le mot vient d'une onomatopée imitant une cellule rythmique typique : *be-bop*). Elle change tout. Le jazz devient une **musique de concert pour musiciens virtuoses**, écoutée assis dans des clubs étroits. Les big bands déclinent, remplacés par des **petits combos** (quartet, quintet). Le musicien de jazz n'est plus un artisan du divertissement mais un **artiste sérieux** — au prix d'une perte définitive du grand public.`
    },

    {
      type: 'widget',
      titre: `Tempos comparés selon les styles (BPM)`,
      composant: 'SelecteurValeurs',
      params: {
        unite: 'BPM',
        indexInitial: 2,
        options: [
          { label: 'Ballade', valeur: 65, description: 'Tempo lent, ample, pour les pièces lyriques (*Body and Soul*, *Round Midnight*). Espace maximal pour l\'expressivité du soliste.' },
          { label: 'Cool', valeur: 110, description: 'Tempo modéré, détendu. Style West Coast des années 1950 (Chet Baker, Gerry Mulligan), *Birth of the Cool* de Miles Davis.' },
          { label: 'Swing médium', valeur: 140, description: 'La pulsation dansante des big bands des années 1930-1940 (Ellington, Basie). Tempo qui fait swinguer un parquet de bal.' },
          { label: 'Bebop', valeur: 220, description: 'Tempo rapide caractéristique du bebop (Parker, Gillespie). À cette vitesse, l\'improvisation devient une démonstration de virtuosité. On ne danse plus.' },
          { label: 'Bebop extrême', valeur: 300, description: 'Au-delà de 280 BPM, on entre dans le territoire des morceaux comme *Cherokee* de Parker ou *Donna Lee*. Quelques mesures par seconde — un exploit moteur autant que mental.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Miles, Coltrane, et les <em>nouvelles libertés</em>`,
      contenu_md:
`Aucun musicien n'a traversé autant de révolutions que **Miles Davis** (1926-1991). Né dans l'Illinois, il monte à New York à 18 ans pour jouer dans l'orchestre de Charlie Parker. Trois fois il bascule le jazz. En **1949**, avec *Birth of the Cool*, il réagit à la fièvre bebop par des arrangements écrits, des tempos modérés, des sonorités feutrées — c'est le **cool jazz**, qui dominera la côte ouest. En **1959**, avec *Kind of Blue* (l'album de jazz le plus vendu de l'histoire), il invente le **jazz modal** : improviser sur de longs modes plutôt que sur des grilles rapides — espace, contemplation, liberté mélodique. En **1970**, avec *Bitches Brew*, il branche sa trompette dans des effets électriques et croise le jazz avec le rock et le funk — c'est la **fusion**.

À ses côtés joue un saxophoniste plus jeune, **John Coltrane** (1926-1967), qui devient le héros tragique du jazz. Coltrane prolonge le bebop dans des marathons harmoniques (*Giant Steps*, 1959), passe au modal avec Miles, puis explore une **spiritualité musicale** inédite (*A Love Supreme*, 1964) avant de basculer, à la fin de sa courte vie, dans l'avant-garde free.

Le **free jazz** précisément, autre rupture, naît avec **Ornette Coleman** (l'album-manifeste *Free Jazz*, 1960) et **Albert Ayler**. Plus de grille d'accords. Plus de mesure régulière. Parfois plus de tonalité. Les musiciens improvisent collectivement, sur des motifs, des cris, des couleurs. Pour beaucoup, c'est trop : on parle d'imposture, de chaos. Pour d'autres, c'est la **libération totale** du musicien noir américain — la musique se politise. Coleman dira simplement : *« Le free jazz est une question d'écoute. »*`
    },

    {
      type: 'encadre',
      label: 'Fusion et néo-classicisme',
      contenu_md: `À la fin des années 1960, Miles électrique ouvre la voie à la **fusion** : **Weather Report** (Wayne Shorter, Joe Zawinul, plus tard Jaco Pastorius), **Herbie Hancock** (*Head Hunters*, 1973), Chick Corea. Le jazz absorbe le rock, le funk, la musique brésilienne ; il branche des guitares électriques et des synthétiseurs. Vingt ans plus tard, à rebours, **Wynton Marsalis** (né 1961), trompettiste virtuose de La Nouvelle-Orléans, lance une **renaissance néo-traditionnelle** : retour au son acoustique, à Ellington, à Parker, à Coltrane des années 1960. Le jazz entre au **Lincoln Center** comme musique classique américaine. Débat ouvert depuis : institutionnalisation salutaire, ou académisme qui tue l'invention ?`
    },

    {
      type: 'texte',
      titre: `Qu'est-ce qui <em>reste</em> ?`,
      contenu_md:
`En un peu plus d'un siècle, le jazz a parcouru un chemin que la musique européenne avait mis cinq cents ans à faire : du collectif populaire à l'avant-garde abstraite, de la danse de salle de bal à la musique de concert pour initiés. Aucune autre tradition musicale n'a connu une telle accélération.

Ce qui demeure, par-dessus la diversité des styles, c'est un **rapport singulier au temps**. Le musicien de jazz ne reproduit pas une pièce écrite : il **fait advenir une œuvre unique** dans le moment même où elle est jouée. Le solo qu'il vient de jouer ne reviendra jamais. Le public n'écoute pas l'interprétation d'une partition ; il assiste à une **création en direct**, fragile, irréversible. Cette expérience — qu'on retrouve dans certaines traditions classiques (l'Inde du Nord, le flamenco) mais avec une telle intensité institutionnelle nulle part ailleurs — est peut-être la **contribution philosophique** la plus profonde du jazz à l'art.

Aujourd'hui le jazz n'est plus la pop music — il l'a été un bref instant historique, dans les années 1930-1940. Il est devenu une **musique savante**, enseignée dans des conservatoires (Berklee, Manhattan School), étudiée à l'université, discutée par des critiques exigeants. Quelque chose s'est perdu — la familiarité du grand public — et quelque chose a été gagné : la reconnaissance pleine d'un patrimoine que les États-Unis revendiquent désormais comme leur **musique classique nationale**. Sa filiation afro-américaine, elle, n'a pas cessé : les standards et les solos de Davis, Hancock ou Coltrane irriguent abondamment, par le sample, la matière sonore du [[le-rap]] depuis les années 1980. Restent les disques, et le miracle reproductible chaque soir, dans un club, quand cinq musiciens posent un standard et inventent ensemble quelque chose qui n'existait pas la veille.`
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: `Vrai ou faux ?`,
      affirmation: `Dans le jazz, l'improvisation signifie que les musiciens jouent au hasard, sans règle ni structure préétablie.`,
      reponse: false,
      explication: `C'est un contresens populaire. L'improvisation jazz est extrêmement codifiée : le soliste joue sur une grille d'accords précise (sauf en free jazz), respecte un tempo, dialogue avec ses partenaires. C'est une composition spontanée, pas un chaos. Seul le free jazz, à partir d'Ornette Coleman en 1960, abolit consciemment les grilles — et même là, des conventions d'écoute collective subsistent.`
    },
    {
      type: 'associer',
      q: `Associe chaque musicien à sa contribution principale :`,
      paires: [
        { gauche: 'Louis Armstrong', droite: 'Invention du soliste moderne' },
        { gauche: 'Duke Ellington', droite: 'Big band swing au Cotton Club' },
        { gauche: 'Charlie Parker', droite: 'Révolution bebop' },
        { gauche: 'Miles Davis', droite: 'Cool, modal, puis fusion' },
        { gauche: 'Ornette Coleman', droite: 'Naissance du free jazz' },
        { gauche: 'Wynton Marsalis', droite: 'Renaissance néo-classique' }
      ],
      explication: `Armstrong fait basculer le jazz du collectif au soliste dans les années 1920 (Hot Five, Hot Seven). Ellington dirige le grand big band du Cotton Club et compose des centaines d'œuvres. Parker, avec Gillespie et Monk, invente le bebop vers 1945. Miles Davis traverse trois écoles successives (Birth of the Cool 1949, Kind of Blue 1959, Bitches Brew 1970). Coleman lance le free jazz avec l'album Free Jazz en 1960. Marsalis lance dans les années 1980 le retour à la tradition acoustique.`
    },
    {
      type: 'ordre-chrono',
      q: `Remets ces styles de jazz dans l'ordre de leur apparition :`,
      items: [
        'Improvisation collective polyphonique de La Nouvelle-Orléans',
        'Big bands dansants du swing',
        'Tempos rapides et harmonies enrichies du bebop',
        'Improvisation modale sur de longs modes étendus',
        'Abolition des grilles d\'accords et de la mesure régulière',
        'Croisement électrique du jazz avec le rock et le funk'
      ],
      explication: `Le jazz traverse en un siècle : New Orleans (1900-1920), swing (1930-1940), bebop (~1945), modal (1959 avec Kind of Blue), free (1960 avec Ornette Coleman), fusion (~1970 avec Bitches Brew). Le néo-classique de Marsalis viendra encore après, dans les années 1980.`
    },
    {
      type: 'texte-a-trou',
      q: `Complète :`,
      texte: `Le jazz naît à {La Nouvelle-Orléans} vers 1900, au croisement du {blues}, du ragtime et des work songs. Son principe central est l'{improvisation} d'un soliste sur la trame harmonique d'un {standard}.`,
      explication: `Trois traditions afro-américaines convergent à La Nouvelle-Orléans dans une ville créole unique : blues du Mississippi, ragtime syncopé de Scott Joplin, work songs hérités d'Afrique. Le jazz se définit par l'improvisation soliste sur la grille d'un standard — pièce du répertoire commun, souvent issue des comédies musicales de Broadway.`
    },
    {
      q: `Où et quand naît le jazz ?`,
      options: [
        `À New York, dans les années 1940`,
        `À Chicago, dans les années 1930`,
        `À La Nouvelle-Orléans, vers 1900-1917`,
        `À Paris, dans les années folles`
      ],
      correcte: 2,
      explication: `Le jazz naît vers 1900-1917 à La Nouvelle-Orléans, ville créole unique aux États-Unis, au croisement du blues, du ragtime et des work songs. Chicago et New York seront les étapes suivantes de sa diffusion après la fermeture du quartier de Storyville en 1917. Paris l'accueillera dans les années folles, mais comme musique d'importation.`
    },
    {
      q: `Quelle révolution Louis Armstrong apporte-t-il au jazz dans les années 1920 ?`,
      options: [
        `Il invente le big band`,
        `Il introduit la guitare électrique`,
        `Il fait passer le jazz du collectif au soliste : l'individu prend le pas sur le groupe`,
        `Il invente le free jazz`
      ],
      correcte: 2,
      explication: `Avec les enregistrements des Hot Five et Hot Seven (1925-1928), Armstrong déplace le centre de gravité du jazz : la polyphonie collective de La Nouvelle-Orléans cède la place à l'improvisation d'un soliste qui s'élève au-dessus du groupe. C'est lui qui invente, en pratique, le rôle moderne du musicien de jazz.`
    },
    {
      q: `Qu'est-ce qui caractérise le bebop par rapport au swing ?`,
      options: [
        `Tempos plus rapides, harmonies enrichies, petits combos, jazz de concert et non plus de danse`,
        `Tempos plus lents, instruments électriques`,
        `Retour à la polyphonie collective de La Nouvelle-Orléans`,
        `Absence totale d'improvisation`
      ],
      correcte: 0,
      explication: `Vers 1945, Parker, Gillespie et Monk inventent au Minton's Playhouse un jazz délibérément difficile : tempos vertigineux (souvent au-delà de 200 BPM), harmonies enrichies, mélodies sinueuses, retour à des petits combos (quartet, quintet). Le jazz quitte la piste de danse pour la salle de concert. C'est une révolution autant esthétique que sociale.`
    },
    {
      q: `Qu'est-ce qu'un standard de jazz ?`,
      options: [
        `Un musicien de jazz très connu`,
        `Un morceau du répertoire commun (souvent issu de Broadway) qui fournit une grille d'accords et une mélodie sur lesquelles les musiciens improvisent`,
        `Une partition qu'il faut jouer exactement comme elle est écrite`,
        `Une marque d'instrument`
      ],
      correcte: 1,
      explication: `Un standard est un morceau partagé par toute la communauté jazz : Body and Soul, Autumn Leaves, All the Things You Are, Summertime. La plupart viennent des comédies musicales de Broadway des années 1920-1940. Le standard fournit la grille et la mélodie ; le reste est inventé. C'est grâce à ce répertoire commun que deux jazzmen qui ne se connaissent pas peuvent jouer ensemble.`
    },
    {
      q: `Pourquoi Miles Davis occupe-t-il une place exceptionnelle dans l'histoire du jazz ?`,
      options: [
        `Il a vendu le plus de disques`,
        `Il a inventé l'improvisation`,
        `Il est le seul musicien à avoir lancé plusieurs écoles successives : cool (1949), modal (1959), fusion (1970)`,
        `Il a refusé de jouer en public`
      ],
      correcte: 2,
      explication: `Miles Davis est unique en ce qu'il a inauguré trois révolutions successives : Birth of the Cool en 1949 (cool jazz, en réaction au bebop), Kind of Blue en 1959 (jazz modal, l'album de jazz le plus vendu de l'histoire), Bitches Brew en 1970 (fusion électrique avec le rock). Aucun autre musicien de jazz n'a entraîné autant de changements de paradigme.`
    },
    {
      q: `Qu'est-ce que le jazz modal, et quel album l'a popularisé ?`,
      options: [
        `Un jazz qui change tout le temps de mode mineur à majeur ; Giant Steps`,
        `Un jazz utilisant exclusivement le mode dorien ; A Love Supreme`,
        `Un jazz où l'on improvise sur de longs modes (gammes étendues) plutôt que sur des grilles d'accords rapides ; Kind of Blue de Miles Davis (1959)`,
        `Un jazz à la mode des années 1980 ; The Majesty of the Blues`
      ],
      correcte: 2,
      explication: `Le jazz modal, popularisé par Miles Davis sur Kind of Blue en 1959, remplace les grilles d'accords rapides du bebop par un ou deux modes tenus sur de longs passages. Le morceau So What ne repose ainsi que sur deux modes. L'improvisateur dispose d'un espace plus libre pour les couleurs mélodiques. C'est l'une des révolutions stylistiques majeures du jazz d'après-guerre.`
    },
    {
      q: `Quelle est la formation type du bebop et du jazz post-bebop ?`,
      options: [
        `Le big band de 15-20 musiciens`,
        `Le petit combo : quartet ou quintet (1 ou 2 souffleurs plus une section rythmique piano-contrebasse-batterie)`,
        `Le trio à cordes`,
        `L'orchestre symphonique`
      ],
      correcte: 1,
      explication: `Le bebop, à partir de 1945, abandonne le big band swing pour le petit combo serré : quartet (un souffleur, piano, contrebasse, batterie) ou quintet (deux souffleurs). Chaque musicien y dispose d'un espace solo prolongé. Le quintet de Miles Davis des années 1960 (Hancock, Carter, Williams, Shorter) est l'exemple parfait du genre.`
    },
    {
      q: `Qu'est-ce qui distingue le free jazz des styles antérieurs ?`,
      options: [
        `Il se joue gratuitement`,
        `Il abandonne la grille d'accords, la mesure régulière, parfois la tonalité — les musiciens improvisent collectivement sur des motifs et des atmosphères`,
        `Il utilise uniquement des instruments acoustiques`,
        `Il est strictement écrit, sans aucune improvisation`
      ],
      correcte: 1,
      explication: `Le free jazz, lancé par Ornette Coleman (Free Jazz, 1960) et Albert Ayler, abolit les contraintes formelles du jazz traditionnel : plus de grille d'accords prédéfinie, plus de mesure régulière obligatoire, parfois plus de tonalité. Les musiciens improvisent collectivement sur des motifs, des cris, des couleurs sonores. C'est la rupture la plus radicale de l'histoire du jazz, esthétique autant que politique.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Improvisation',
      definition: `Pratique centrale du jazz où le musicien **invente sa partie** en temps réel sur la grille harmonique partagée d'un standard. Art profondément codifié, jamais aléatoire : grands solos étudiés comme des œuvres à part entière.`
    },
    {
      terme: 'Standard',
      definition: `Morceau du **répertoire commun** que tout jazzman est censé connaître (*Body and Soul*, *Autumn Leaves*, *Summertime*). Fournit la grille d'accords et la mélodie de départ ; le reste est laissé à l'invention. Langue commune permettant à des musiciens étrangers de jouer ensemble.`
    },
    {
      terme: 'Swing',
      definition: `Deux sens. Au sens strict : la **pulsation rythmique souple et flottante** propre au jazz, où les croches sont jouées de façon inégale. Au sens large : le **style** des big bands dansants des années 1930-1940 (Ellington, Basie, Goodman).`
    },
    {
      terme: 'Blue notes',
      definition: `Notes caractéristiques du blues : **tierce, septième** (parfois quinte) légèrement *abaissées* par rapport à la gamme majeure. Donnent cette couleur indéfinissable, mi-majeure mi-mineure, qui irrigue tout le jazz par-delà ses styles.`
    },
    {
      terme: 'Big band',
      definition: `Grande formation de 12 à 20 musiciens organisée en **sections** (anches, trompettes, trombones, rythmique). Tout est arrangé par écrit, les solos s'insèrent dans des moments précis. Format dominant à l'ère **swing**.`
    },
    {
      terme: 'Bebop',
      definition: `Révolution stylistique de **1945** menée par **Charlie Parker**, **Dizzy Gillespie** et **Thelonious Monk**. Tempos vertigineux, harmonies enrichies, petits combos. Fait basculer le jazz de la **piste de danse** vers la **salle de concert** pour musiciens virtuoses.`
    },
    {
      terme: 'Jazz modal',
      definition: `Approche inaugurée par **Miles Davis** sur *Kind of Blue* (**1959**) : remplacer la grille rapide d'accords par un ou deux **modes** (gammes étendues) tenus sur de longs passages. Offre à l'improvisateur un espace plus libre pour les couleurs mélodiques.`
    },
    {
      terme: 'Free jazz',
      definition: `Rupture portée par **Ornette Coleman** (*Free Jazz*, 1960) et **Albert Ayler** : abolition de la grille d'accords, de la mesure régulière, parfois de la tonalité. Improvisation collective sur des motifs et atmosphères. La plus radicale des mutations du jazz, esthétique et politique.`
    },
    {
      terme: 'Call-and-response',
      definition: `**Appel-réponse** : structure dialogique héritée des *work songs* africaines où un soliste lance une phrase à laquelle un autre (ou un chœur) répond. Reste structurellement présent dans tout le jazz, du swing au free.`
    },
    {
      terme: 'Fusion',
      definition: `Croisement du jazz avec le **rock** et le **funk** inauguré par *Bitches Brew* de **Miles Davis** (1970). Trompette électrique, guitares, claviers, rythmes binaires. Weather Report et Herbie Hancock en sont les figures majeures.`
    }
  ]

});
