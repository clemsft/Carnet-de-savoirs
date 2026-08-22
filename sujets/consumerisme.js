/* ===================================================================
   SUJET — Le consumérisme
   ===================================================================
   Société où la consommation devient identité, valeur sociale, finalité.
   Domaines : Économie, Philosophie
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'consumerisme',
    titre: 'Le <em>consumérisme</em>',
    domaines: ['Économie', 'Philosophie'],
    tags: ['publicite', 'desir', 'obsolescence', 'marque', 'bourdieu', 'baudrillard', 'pouvoir-achat'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['capitalisme', 'inflation', 'gastronomie'],
    date_creation: '2026-05-13',
    date_maj: '2026-05-13'
  },

  resume: 'Quand acheter n\'est plus seulement répondre à un besoin mais construire une identité, signaler un rang, combler un manque — alors une société devient consumériste. Comprendre la généalogie, les mécanismes et les critiques d\'un mode de vie devenu si évident qu\'il en paraît naturel.',

  points_cles: [
    'Le **consumérisme** désigne une organisation sociale où la **consommation** dépasse la satisfaction des besoins pour devenir **identité**, valeur de référence et finalité collective.',
    'Sa **genèse moderne** se joue aux **États-Unis dans les années 1920** : production de masse fordiste, crédit à la consommation, naissance de la publicité scientifique.',
    'Quatre mécanismes structurants : la **publicité**, le **crédit**, l\'**obsolescence programmée**, et la **distinction sociale** par les objets.',
    'Pour **Pierre Bourdieu**, consommer trie : chaque achat est un signe de [classe sociale]{accent}. Pour **Jean Baudrillard**, on ne consomme plus des objets mais des **signes** détachés de leur usage.',
    'Critiques majeures : **Galbraith** (effet de dépendance), **École de Francfort** (industrie culturelle), **Vance Packard** (manipulation publicitaire), **décroissance** (limites planétaires).',
    'Au XXIᵉ siècle, le consumérisme migre vers le numérique : **économie de l\'attention**, recommandations algorithmiques, achat compulsif en un clic.',
    'Une **contre-poussée** émerge : sobriété, seconde main, réparation, slow life — interrogeant la possibilité même d\'une société post-consumériste.'
  ],

  carte_mentale: {
    central: 'consumerisme',
    noeuds: [
      { id: 'consumerisme', label: 'Consumérisme', description: 'Société où la **consommation** devient identité, valeur sociale et finalité, au-delà du seul besoin.' },
      { id: 'genese', label: 'Genèse', description: 'Naissance historique du mode de vie consumériste, principalement aux États-Unis au XXᵉ siècle.' },
      { id: 'mecanismes', label: 'Mécanismes', description: 'Les leviers qui entretiennent et amplifient la consommation : publicité, crédit, obsolescence, distinction.' },
      { id: 'penseurs', label: 'Penseurs', description: 'Sociologues et philosophes ayant donné une grille de lecture critique du phénomène.' },
      { id: 'critiques', label: 'Critiques', description: 'Courants intellectuels et politiques qui contestent l\'évidence du modèle consumériste.' },
      { id: 'mutations', label: 'Mutations', description: 'Transformations contemporaines : numérique, attention, écologie, sobriété.' },

      { id: 'ford', label: 'Ford & masse', description: '**Henry Ford** invente la production de masse et double les salaires en 1914 pour créer des consommateurs.', parent: 'genese' },
      { id: 'credit', label: 'Crédit à la conso', description: 'Apparition du **paiement à tempérament** dans l\'Amérique des années 1920 — acheter avant de gagner.', parent: 'genese' },
      { id: 'tv', label: 'TV d\'après-guerre', description: 'La télévision diffuse l\'imagerie consumériste dans chaque foyer occidental dès les années 1950.', parent: 'genese' },

      { id: 'pub', label: 'Publicité', description: 'Industrie du **désir** : créer le besoin avant l\'objet. Bernays, agences de Madison Avenue.', parent: 'mecanismes' },
      { id: 'obsolescence', label: 'Obsolescence', description: 'Programmée (durée de vie limitée) ou **psychologique** (le modèle de l\'an dernier est démodé).', parent: 'mecanismes' },
      { id: 'distinction', label: 'Distinction', description: 'Consommer pour se **distinguer** socialement — la marque, le luxe, le bon goût.', parent: 'mecanismes' },

      { id: 'bourdieu', label: 'Bourdieu', description: '*La Distinction* (1979) : les goûts sont des [marqueurs de classe]{accent}, pas des choix libres.', parent: 'penseurs' },
      { id: 'baudrillard', label: 'Baudrillard', description: '*La Société de consommation* (1970) : on consomme des **signes**, des simulacres, plus que des objets.', parent: 'penseurs' },
      { id: 'galbraith', label: 'Galbraith', description: '*L\'Ère de l\'opulence* (1958) : l\'**effet de dépendance** — la production crée les besoins qu\'elle prétend satisfaire.', parent: 'penseurs' },

      { id: 'francfort', label: 'École de Francfort', description: 'Adorno, Horkheimer, Marcuse : l\'**industrie culturelle** fabrique un consommateur docile.', parent: 'critiques' },
      { id: 'packard', label: 'Vance Packard', description: '*La persuasion clandestine* (1957) : enquête sur la **publicité subliminale** et la psychologie des motivations.', parent: 'critiques' },
      { id: 'decroissance', label: 'Décroissance', description: 'Latouche, Meadows : sortir du paradigme de la croissance face aux **limites planétaires**.', parent: 'critiques' },

      { id: 'attention', label: 'Économie de l\'attention', description: 'Le **temps de cerveau** disponible devient la ressource rare ; les plateformes le capturent.', parent: 'mutations' },
      { id: 'algorithme', label: 'Algorithmes', description: '**Recommandation** personnalisée : Amazon, TikTok, Spotify — un consumérisme prédictif.', parent: 'mutations' },
      { id: 'sobriete', label: 'Sobriété', description: 'Seconde main, réparation, **frugalité** choisie — une contre-poussée en formation.', parent: 'mutations' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Qu\'est-ce que le <em>consumérisme</em> ?',
      contenu_md:
`Acheter du pain quand on a faim, des chaussures quand on a froid — il ne s\'agit pas encore de [consumérisme]{accent}. Le mot désigne quelque chose de plus précis : un **mode de vie**, et même une **organisation sociale**, où la consommation cesse d\'être un simple moyen pour devenir une **fin en soi**.

Dans une société consumériste, ce qu\'on achète dit qui l\'on est. Le téléphone, la voiture, la marque de chaussures, le restaurant fréquenté — tout fonctionne comme un **signe**, un langage social par lequel on signale son rang, ses valeurs, son groupe d\'appartenance. La consommation devient **identité**.

Plus profondément encore, elle devient **valeur** : on juge la santé d\'un pays à sa consommation des ménages, la réussite d\'un individu à son train de vie, l\'épanouissement personnel à la capacité de **s\'offrir** des choses. C\'est cette absorption du sens dans l\'acte d\'acheter qui définit le consumérisme. Il prolonge et radicalise une dynamique propre au [[capitalisme]], sans s\'y confondre.`
    },

    {
      type: 'widget',
      titre: 'Une chronologie de l\'émergence consumériste',
      composant: 'Frise',
      params: {
        evenements: [
          { date: 'Années 1900', titre: 'Taylorisme', description: '**Frederick Taylor** théorise l\'organisation scientifique du travail. Production accélérée, coûts en baisse — il faudra bien écouler la production.' },
          { date: '1908-1914', titre: 'Ford & le 5 dollars', description: 'Le **Model T** sort des chaînes en 1908. En 1914, Ford double les salaires de ses ouvriers à **5 $/jour** : ses propres employés deviennent ses clients.' },
          { date: 'Années 1920', titre: 'Crédit & publicité', description: 'L\'Amérique invente le **crédit à la consommation** moderne et la publicité scientifique. **Edward Bernays**, neveu de Freud, bâtit la persuasion de masse.' },
          { date: '1929-1945', titre: 'Parenthèse', description: 'La crise de 1929 puis la guerre mettent le consumérisme entre parenthèses. Rationnements, épargne forcée, mobilisation industrielle.' },
          { date: 'Années 1950', titre: 'Âge d\'or américain', description: 'Banlieues pavillonnaires, électroménager, **télévision** dans chaque salon. Le rêve consumériste devient norme occidentale, puis mondiale.' },
          { date: '1957-1979', titre: 'Premières critiques', description: 'Vance Packard, Galbraith, Marcuse, Bourdieu, Baudrillard publient en quelques années les grands livres qui dévoilent les ressorts du système.' },
          { date: 'Années 1990-2000', titre: 'Mondialisation', description: 'Délocalisations, baisse des prix, marques globales. Le consumérisme s\'étend à la Chine, l\'Inde, l\'Europe de l\'Est.' },
          { date: 'Années 2010-2020', titre: 'Tournant numérique', description: '**Amazon**, applications mobiles, recommandation algorithmique, achat en un clic. L\'**économie de l\'attention** prolonge le consumérisme.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>genèse américaine</em> des années 1920',
      contenu_md:
`Le consumérisme tel qu\'on le connaît n\'est pas une donnée éternelle. Il a une **date de naissance** assez précise : les **États-Unis des années 1920**.

L\'idée maîtresse vient d\'**Henry Ford**. En 1914, il prend une décision qui sidère les patrons américains : il **double les salaires** de ses ouvriers, à 5 dollars par jour. La raison n\'est pas philanthropique. Ford comprend que produire en masse n\'a aucun sens si personne ne peut acheter. Ses ouvriers doivent pouvoir s\'offrir le **Model T** qu\'ils assemblent. La boucle production-consommation-salaire devient le **cœur** du capitalisme industriel du XXᵉ siècle.

À cela s\'ajoute, dans la même décennie, une innovation décisive : le **crédit à la consommation**. Acheter aujourd\'hui ce qu\'on paiera demain. La voiture, l\'électroménager, plus tard la maison — tout devient accessible *avant* d\'avoir l\'argent. Le **désir** n\'attend plus la disponibilité financière.

La troisième pièce, c\'est la **publicité scientifique**. **Edward Bernays**, neveu de Sigmund Freud, transpose la psychanalyse au marketing : il ne s\'agit plus de vanter un produit, mais de **manipuler les motivations inconscientes** des consommateurs. Sa campagne pour les cigarettes Lucky Strike, présentant la cigarette comme un symbole d\'émancipation féminine, restera un modèle du genre.`
    },

    {
      type: 'encadre',
      label: 'Définition de travail',
      contenu_md: 'Le **consumérisme** désigne un système économique, culturel et identitaire dans lequel l\'**acte de consommer** dépasse la satisfaction des besoins matériels pour devenir un **mode d\'existence** : on consomme pour exister socialement, pour signifier qui l\'on est, pour combler un manque que la consommation elle-même entretient.'
    },

    {
      type: 'widget',
      titre: 'Les quatre mécanismes du consumérisme',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Désirer',
            titre: 'La publicité',
            description: 'L\'industrie du **désir** précède la production. **Bernays** dans les années 1920, Madison Avenue dans les années 1950, marketing digital aujourd\'hui — il s\'agit de créer le besoin avant l\'objet, ou de le réveiller s\'il dort.'
          },
          {
            tag: 'Acheter',
            titre: 'Le crédit',
            description: 'Le **crédit à la consommation**, inventé dans les années 1920, abolit l\'attente. Carte de crédit, paiement en plusieurs fois, *buy now pay later* — le présent achète l\'avenir.'
          },
          {
            tag: 'Renouveler',
            titre: 'L\'obsolescence',
            description: '**Programmée** (durée de vie limitée par conception, comme l\'ampoule du **cartel de Phœbus** en 1924) ou **psychologique** (le modèle de l\'an dernier est démodé). Aucune saturation du marché n\'est jamais permise.'
          },
          {
            tag: 'Signaler',
            titre: 'La distinction',
            description: 'Selon **Bourdieu**, consommer trie. La marque, le luxe, le bon goût sont autant de **signes de classe**. Chaque achat positionne celui qui le fait dans la hiérarchie sociale.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Bourdieu, <em>Baudrillard</em> : consommer, c\'est signifier',
      contenu_md:
`Deux sociologues français ont, à quelques années d\'intervalle, donné la grille de lecture la plus influente du phénomène.

**Pierre Bourdieu**, dans *La Distinction. Critique sociale du jugement* (1979), démontre par une enquête massive que les **goûts** ne sont jamais purement personnels. Le choix d\'un plat, d\'un meuble, d\'un film, d\'un vêtement — tout cela trace des **frontières de classe**. La bourgeoisie cultivée se distingue par l\'opéra, les fromages affinés, le mobilier sobre. Les classes populaires, par le foot, le pot-au-feu, le pratique. La consommation n\'exprime pas l\'individualité : elle **reproduit** la position sociale. Comprendre ce qu\'on mange éclaire d\'ailleurs aussi l\'inverse — voir [[gastronomie]].

**Jean Baudrillard** va plus loin encore dans *La Société de consommation* (1970). Pour lui, dans une société comme la nôtre, on ne consomme plus des **objets**, on consomme des **signes**. La voiture n\'est plus un moyen de transport mais un signe de réussite ; le téléphone, un signe de modernité ; la marque de café, un signe d\'éthique. Les objets sont devenus un **langage**, et ce langage tourne en circuit fermé. Baudrillard parlera plus tard de [simulacre]{accent} : un signe qui ne renvoie plus à rien, qui se réfère uniquement à d\'autres signes.`
    },

    {
      type: 'widget',
      titre: 'Les grandes critiques du consumérisme',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: 'John Kenneth Galbraith — L\'effet de dépendance',
            description: 'Dans *L\'Ère de l\'opulence* (1958), Galbraith dévoile un **paradoxe** : la production ne répond pas à des besoins préexistants, elle les **crée**. Une société qui doit publiciser pour vendre prouve, par là même, que les besoins qu\'elle satisfait ne sont pas autonomes.'
          },
          {
            titre: 'École de Francfort — L\'industrie culturelle',
            description: '**Adorno, Horkheimer, Marcuse** théorisent dans les années 1940-1960 une **industrie culturelle** qui produit films, musiques, divertissements standardisés. Le consommateur, anesthésié, devient incapable de critique. Marcuse parlera de l\'*homme unidimensionnel* (1964).'
          },
          {
            titre: 'Vance Packard — La persuasion clandestine',
            description: 'En 1957, le journaliste américain enquête sur les agences de publicité et révèle leurs techniques inspirées de la psychologie des profondeurs : **publicité subliminale**, motivations cachées, manipulation des angoisses. Best-seller mondial qui fit scandale.'
          },
          {
            titre: 'Décroissance — Les limites planétaires',
            description: 'Depuis les années 1970 (rapport **Meadows**, 1972), une critique **écologique** monte : un consumérisme infini est physiquement impossible sur une planète finie. **Serge Latouche**, **Nicholas Georgescu-Roegen** théorisent la sortie du paradigme productiviste.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le tournant <em>numérique</em> : économie de l\'attention',
      contenu_md:
`Le consumérisme du XXIᵉ siècle ne ressemble plus exactement à celui des années 1950. Sa **scène principale** s\'est déplacée du centre commercial vers l\'écran.

L\'**économie de l\'attention** repose sur un constat simple : dans un monde saturé d\'informations et d\'offres, la ressource rare n\'est plus le bien à acquérir, c\'est le **temps de cerveau disponible**. Les plateformes — TikTok, Instagram, Amazon, YouTube — sont conçues pour **capturer** cette attention, la mesurer, la monétiser. Le scroll infini, les notifications, les recommandations algorithmiques personnalisées sont autant d\'outils d\'**enrôlement**.

L\'**achat compulsif** est démultiplié. Un clic suffit. Plus de friction, plus de distance entre le désir et la transaction. Les **algorithmes de recommandation** d\'Amazon ou de TikTok ne se contentent plus de répondre à des préférences : ils les **anticipent**, voire les **fabriquent**. C\'est un consumérisme **prédictif**, qui sait ce que tu vas vouloir avant toi-même.

Tout cela se déroule dans un contexte économique tendu : pouvoir d\'achat sous pression, retour de l\'[[inflation]] entre 2021 et 2023, défiance envers la monnaie. Paradoxalement, ces difficultés n\'éteignent pas le consumérisme — elles le **déplacent** vers le low cost, la seconde main, la *fast fashion*, qui en sont des variantes plutôt que des alternatives.`
    },

    {
      type: 'widget',
      titre: 'Curseur — quelle place donnes-tu à la consommation dans ton identité ?',
      composant: 'CurseurParametrique',
      params: {
        label: 'Part de l\'identité construite par la consommation',
        min: 0,
        max: 100,
        step: 5,
        valeurInitiale: 50,
        unite: '%',
        degradePiste: '#3aa67c 0%, #3aa67c 25%, #e8c547 25%, #e8c547 60%, #d97757 60%, #d97757 100%',
        seuils: [
          {
            jusqua: 20,
            titre: 'Sobriété assumée',
            description: 'Position proche de la **décroissance** ou du **stoïcisme** contemporain. L\'identité se construit ailleurs : relations, savoirs, pratiques. L\'achat reste un outil, pas un signe.',
            couleur: '#3aa67c'
          },
          {
            jusqua: 50,
            titre: 'Consommation choisie',
            description: 'Tu consommes mais avec **discernement**. Tu sais distinguer le besoin du désir induit. Position courante chez ceux qui ont lu Bourdieu sans en faire un sacerdoce.',
            couleur: '#e8c547'
          },
          {
            jusqua: 80,
            titre: 'Consommation identitaire',
            description: 'La marque, l\'objet, l\'expérience consommée disent qui tu es. C\'est la **position consumériste classique** — celle que les sociologues décrivent comme la norme contemporaine.',
            couleur: '#d97757'
          },
          {
            jusqua: Infinity,
            titre: 'Consumérisme total',
            description: '**Tout** passe par l\'achat : statut, lien social, bien-être, signification. Position que Baudrillard décrirait comme une **immersion dans le simulacre** — consommer des signes sans plus pouvoir s\'arrêter.',
            couleur: '#a64d4d'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Une <em>contre-poussée</em> émergente',
      contenu_md:
`Depuis une vingtaine d\'années, des pratiques **contre-consuméristes** se diffusent. Sobriété volontaire, *slow life*, **réparation** plutôt que remplacement, vêtements d\'occasion, *zéro déchet*, *digital detox*. Ces mouvements restent minoritaires mais structurent un imaginaire alternatif.

Le **droit à la réparation**, soutenu par la Commission européenne à partir de 2020, attaque frontalement l\'obsolescence programmée. Les **indices de réparabilité** affichés sur les appareils électroniques en France depuis 2021 visent à réintroduire la durabilité dans les choix d\'achat.

Une question philosophique reste cependant ouverte : ces alternatives **sortent-elles** vraiment du consumérisme, ou en sont-elles une nouvelle forme — un *consumérisme vert*, un *consumérisme éthique*, où la sobriété devient à son tour un **signe de distinction** ? Bourdieu sourirait : aujourd\'hui, ne pas consommer est aussi devenu une manière de se positionner socialement.`
    },

    {
      type: 'encadre',
      label: 'À retenir',
      contenu_md: 'Le consumérisme n\'est pas une fatalité naturelle mais une **construction historique** datée — années 1920 américaines — qui repose sur quatre piliers : **publicité, crédit, obsolescence, distinction**. Il a été décrit et critiqué par les plus grands sociologues du XXᵉ siècle (Bourdieu, Baudrillard, Galbraith, Marcuse) et fait aujourd\'hui face à une double pression : les **limites planétaires** et la **mutation numérique** qui le prolonge sous d\'autres formes.'
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Le consumérisme est une donnée naturelle des sociétés humaines, présente sous des formes voisines depuis l\'Antiquité.',
      reponse: false,
      explication: 'Non. Le consumérisme moderne est une construction historique datée, qui se cristallise aux États-Unis dans les années 1920 avec la conjonction de la production de masse fordiste, du crédit à la consommation et de la publicité scientifique. Les sociétés pré-industrielles connaissaient le luxe et la distinction, mais pas un système économique où la consommation de masse est le moteur central de l\'activité.'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Pour Jean Baudrillard, dans la société de consommation, on ne consomme plus tant des objets que des signes.',
      reponse: true,
      explication: 'C\'est la thèse centrale de *La Société de consommation* (1970). Pour Baudrillard, les objets fonctionnent comme un langage social : on n\'achète pas une voiture pour se déplacer mais pour signifier sa réussite, pas un téléphone pour téléphoner mais pour signifier sa modernité. Il développera plus tard cette idée dans sa théorie du simulacre.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets dans l\'ordre chronologique ces étapes de l\'émergence et de la critique du consumérisme :',
      items: [
        'Henry Ford double les salaires de ses ouvriers à 5 dollars par jour',
        'Vance Packard publie La persuasion clandestine',
        'Pierre Bourdieu publie La Distinction',
        'Amazon lance son service de livraison en un clic'
      ],
      explication: 'Ford 1914 → Packard 1957 → Bourdieu 1979 → Amazon dans les années 1990-2000. Chaque étape marque une intensification du consumérisme et, en parallèle, des outils intellectuels pour le penser.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète :',
      texte: 'Dans son livre « La Distinction » (1979), {Bourdieu} démontre que les goûts en matière de consommation sont des marqueurs de {classe} sociale, et non de simples préférences individuelles.',
      explication: 'Bourdieu a montré, par une enquête statistique massive, que les choix culturels et alimentaires reproduisent les hiérarchies sociales. Le goût pour l\'opéra, le pot-au-feu ou tel mobilier n\'est pas neutre : il signale et reproduit la position dans l\'espace social.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète :',
      texte: 'On parle d\'obsolescence {programmée} quand un produit est conçu pour avoir une durée de vie volontairement limitée, et d\'obsolescence {psychologique} quand le marketing donne le sentiment qu\'un produit encore fonctionnel est démodé.',
      explication: 'Les deux mécanismes se complètent. L\'obsolescence programmée est souvent illustrée par le cartel de Phœbus (1924), qui limita la durée de vie des ampoules à 1000 heures. L\'obsolescence psychologique, théorisée par Brooks Stevens dans les années 1950, joue sur la mode et le renouvellement des collections.'
    },
    {
      type: 'associer',
      q: 'Associe chaque penseur à son ouvrage critique du consumérisme :',
      paires: [
        { gauche: 'John Kenneth Galbraith', droite: 'L\'Ère de l\'opulence (1958)' },
        { gauche: 'Vance Packard', droite: 'La persuasion clandestine (1957)' },
        { gauche: 'Jean Baudrillard', droite: 'La Société de consommation (1970)' },
        { gauche: 'Pierre Bourdieu', droite: 'La Distinction (1979)' }
      ],
      explication: 'Quatre ouvrages majeurs publiés en une vingtaine d\'années qui forment le canon de la critique du consumérisme. Galbraith dévoile l\'effet de dépendance ; Packard, les techniques publicitaires ; Baudrillard, la consommation comme système de signes ; Bourdieu, sa fonction de reproduction sociale.'
    },
    {
      type: 'associer',
      q: 'Associe chaque mécanisme consumériste à sa fonction principale :',
      paires: [
        { gauche: 'Publicité', droite: 'Faire naître ou réveiller le désir' },
        { gauche: 'Crédit', droite: 'Abolir l\'attente entre désir et achat' },
        { gauche: 'Obsolescence', droite: 'Empêcher la saturation du marché' },
        { gauche: 'Distinction', droite: 'Faire de l\'achat un marqueur social' }
      ],
      explication: 'Les quatre piliers qui se renforcent mutuellement. La publicité éveille le désir, le crédit le rend immédiatement réalisable, l\'obsolescence garantit son renouvellement, la distinction lui donne un sens social. Retirer l\'un de ces piliers fragilise tout l\'édifice.'
    },
    {
      q: 'Quel pays et quelle décennie marquent la naissance du consumérisme moderne ?',
      options: [
        'L\'Angleterre des années 1850, avec la révolution industrielle',
        'Les États-Unis des années 1920, avec Ford, le crédit et la publicité scientifique',
        'L\'Allemagne des années 1880, avec l\'État social bismarckien',
        'La France des années 1960, avec les Trente Glorieuses'
      ],
      correcte: 1,
      explication: 'Le consumérisme tel qu\'on le connaît se cristallise dans les États-Unis des années 1920 : production de masse fordiste, crédit à la consommation, publicité scientifique d\'Edward Bernays, premiers grands magasins modernes. Les autres pays adopteront ce modèle après la Seconde Guerre mondiale.'
    },
    {
      q: 'Qu\'est-ce que l\'effet de dépendance théorisé par Galbraith ?',
      options: [
        'L\'addiction des consommateurs au crédit',
        'Le fait que la production crée les besoins qu\'elle prétend satisfaire, plutôt que de répondre à des besoins préexistants',
        'La dépendance des économies développées aux matières premières des pays du Sud',
        'L\'attachement émotionnel aux marques'
      ],
      correcte: 1,
      explication: 'Dans *L\'Ère de l\'opulence* (1958), Galbraith observe un paradoxe : si les biens produits répondaient à des besoins autonomes, il ne serait pas nécessaire de les publiciser massivement. Le fait même que la publicité soit indispensable prouve que la production fabrique elle-même les besoins qu\'elle prétend satisfaire.'
    },
    {
      q: 'À quoi fait référence l\'expression "économie de l\'attention" ?',
      options: [
        'À l\'épargne de précaution des ménages',
        'Au fait que, dans un monde saturé d\'offres, la ressource rare devient le temps et l\'attention des consommateurs, que les plateformes cherchent à capter',
        'À l\'attention que les banques centrales portent à l\'inflation',
        'À la qualité du service après-vente comme avantage concurrentiel'
      ],
      correcte: 1,
      explication: 'Le concept, théorisé par Herbert Simon dès 1971 et popularisé à l\'ère numérique, désigne le déplacement de la rareté : ce n\'est plus le produit qui manque, c\'est le temps de cerveau pour s\'y intéresser. Les plateformes comme TikTok, Instagram ou YouTube sont conçues pour capturer et monétiser cette attention.'
    },
    {
      q: 'Qui est Edward Bernays, dans l\'histoire du consumérisme ?',
      options: [
        'Un économiste de l\'École de Chicago qui a théorisé le libre marché',
        'Le neveu de Freud, considéré comme le père de la publicité moderne et des relations publiques aux États-Unis dans les années 1920',
        'Un sociologue critique de la consommation, contemporain de Bourdieu',
        'Un ingénieur de Ford qui a conçu la chaîne de montage du Model T'
      ],
      correcte: 1,
      explication: 'Bernays (1891-1995), neveu de Sigmund Freud, a transposé la psychanalyse au marketing dans les années 1920. Sa célèbre campagne pour les cigarettes Lucky Strike, présentant la cigarette comme "torche de la liberté" féminine, reste un cas d\'école de manipulation des motivations inconscientes.'
    },
    {
      q: 'Quelle est la position de la décroissance face au consumérisme ?',
      options: [
        'Elle propose un consumérisme plus éthique et plus écologique, sans remettre en cause le modèle',
        'Elle considère qu\'un consumérisme infini est physiquement impossible sur une planète finie et appelle à une sortie du paradigme productiviste',
        'Elle prône une économie planifiée à la soviétique',
        'Elle défend le retour à l\'agriculture vivrière médiévale'
      ],
      correcte: 1,
      explication: 'Depuis le rapport Meadows (1972) et les travaux de Nicholas Georgescu-Roegen ou Serge Latouche, la décroissance soutient qu\'une croissance matérielle perpétuelle est incompatible avec les limites planétaires. Il ne s\'agit pas de "moins consommer un peu mieux", mais de sortir du paradigme dans lequel la consommation est la finalité de la vie économique et sociale.'
    }
  ],

  vocabulaire: [
    {
      terme: 'Consumérisme',
      definition: `Organisation sociale dans laquelle la **consommation** dépasse la satisfaction des besoins matériels pour devenir [identité]{accent}, valeur de référence et finalité collective. À distinguer du simple acte d'acheter, qui existe dans toute société.`
    },
    {
      terme: 'Effet de dépendance',
      definition: `Concept de *John Kenneth Galbraith* (*L'Ère de l'opulence*, 1958) : dans une économie d'abondance, la production ne répond pas à des besoins préexistants mais **fabrique** elle-même les besoins qu'elle prétend satisfaire, via la publicité.`
    },
    {
      terme: 'Obsolescence programmée',
      definition: `Stratégie industrielle consistant à limiter volontairement la durée de vie d'un produit pour forcer son renouvellement. Le **cartel de Phœbus** (1924), qui plafonna la durée des ampoules à 1000 heures, en est le cas fondateur.`
    },
    {
      terme: 'Obsolescence psychologique',
      definition: `Mécanisme par lequel le marketing rend un produit **démodé** alors qu'il est encore fonctionnel. Théorisée par Brooks Stevens dans les années 1950, elle joue sur la mode, les collections, le sentiment d'être *en retard*.`
    },
    {
      terme: 'Distinction',
      definition: `Concept de *Pierre Bourdieu* (*La Distinction*, 1979) : les goûts et les pratiques de consommation ne sont pas des choix libres mais des [marqueurs de classe]{accent} qui reproduisent les hiérarchies sociales.`
    },
    {
      terme: 'Simulacre',
      definition: `Concept de *Jean Baudrillard* : signe qui ne renvoie plus à une réalité mais uniquement à d'autres signes. Dans la société de consommation, on n'achète plus des objets pour leur usage mais pour ce qu'ils **signifient** dans un système clos.`
    },
    {
      terme: 'Industrie culturelle',
      definition: `Concept de l'**École de Francfort** (Adorno, Horkheimer, 1944) : production standardisée et marchande de films, musiques, divertissements qui anesthésie le sens critique et fabrique un consommateur docile.`
    },
    {
      terme: 'Économie de l\'attention',
      definition: `Cadre d'analyse selon lequel, dans un environnement saturé d'informations, la ressource rare n'est plus le bien à acquérir mais le **temps de cerveau** disponible. Théorisée par *Herbert Simon* (1971), centrale à l'ère des plateformes numériques.`
    },
    {
      terme: 'Décroissance',
      definition: `Courant intellectuel et politique (*Latouche*, *Georgescu-Roegen*, rapport **Meadows** 1972) qui soutient qu'une croissance matérielle infinie est impossible sur une planète finie et appelle à sortir du paradigme productiviste.`
    },
    {
      terme: 'Homme unidimensionnel',
      definition: `Figure théorisée par *Herbert Marcuse* (1964) : individu des sociétés industrielles avancées dont la pensée critique a été dissoute par l'abondance matérielle et le confort consumériste, incapable d'imaginer une alternative au système.`
    }
  ]

});
