/* ===================================================================
   SUJET — Le droit
   ===================================================================
   Comment l'humanité a inventé puis affiné les règles qu'elle se
   donne — du Code d'Hammurabi aux droits humains universels.
   Domaine : Droit
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'droit',
    titre: 'Le <em>droit</em>',
    domaines: ['Droit'],
    tags: ['hammurabi', 'droit-romain', 'common-law', 'code-civil', 'droits-humains', 'separation-pouvoirs'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['rome-antique', 'revolution-francaise', 'capitalisme'],
    date_creation: '2026-05-17',
    date_maj: '2026-05-17'
  },

  resume: `Comprendre comment l'humanité a inventé, codifié et perfectionné les règles qu'elle se donne pour vivre ensemble — depuis le Code d'Hammurabi gravé sur une stèle de basalte en -1750 jusqu'aux droits humains universels du XXᵉ siècle, en passant par la fondation jumelle du droit romain et de la common law anglaise qui structurent encore aujourd'hui la quasi-totalité des systèmes juridiques mondiaux.`,

  points_cles: [
    `Le **droit** est l'ensemble des règles juridiques qui régissent une société donnée — règles dotées d'une **force obligatoire** garantie par la coercition étatique. Il se distingue de la morale (norme intérieure), de l'éthique (réflexion sur la morale) et de la coutume (norme sans sanction officielle).`,
    `La plus ancienne codification écrite conservée est le **Code d'Hammurabi**, gravé en akkadien sur une stèle de basalte de 2,25 m vers **-1750** à Babylone. 282 lois sur la propriété, le mariage, la responsabilité, les peines. Visible aujourd'hui au Louvre.`,
    `Le **droit romain** se développe sur **mille ans** (de la Loi des XII Tables en -451 au Corpus juris civilis de Justinien en 534). Voir [[rome-antique]]. Distingue **droit privé** (relations entre particuliers) et **droit public** (organisation de l'État). Influence toute l'Europe continentale.`,
    `Deux grandes **familles juridiques** dominent le monde contemporain : le **droit civil** (héritier du droit romain, codifié, basé sur des textes écrits — Europe continentale, Amérique latine, Afrique francophone, Japon) et la **common law** (basée sur la **jurisprudence**, héritière de l'Angleterre médiévale — Royaume-Uni, États-Unis, Canada, Australie, Inde).`,
    `Le **Code civil** français de **1804** (dit *Code Napoléon*) est le **modèle** des codifications modernes : structure logique, langage clair, principes généraux. Adopté ou imité par des dizaines d'États dans le monde, du Québec à la Louisiane en passant par l'Égypte.`,
    `La **séparation des pouvoirs** — exécutif, législatif, judiciaire — est théorisée par **Montesquieu** dans ***De l'esprit des lois*** (**1748**). C'est le principe structurant des constitutions démocratiques modernes : *« Pour qu'on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrête le pouvoir. »*`,
    `Les **droits humains universels** sont proclamés dans la **Déclaration universelle des droits de l'homme** adoptée par l'**ONU** le **10 décembre 1948**, héritière directe de la Déclaration française de 1789 (voir [[revolution-francaise]]) et de la Déclaration américaine de 1776. 30 articles. Première fois qu'un texte juridique prétend à une portée *universelle*.`,
    `Le **droit international** structure les rapports entre États (traités, ONU, CIJ, CPI). Distinct du **droit national** par sa source (le consentement des États, pas la loi d'un parlement) et son exécution (pas de police mondiale — repose sur les engagements volontaires et les sanctions).`
  ],

  carte_mentale: {
    central: 'droit',
    noeuds: [
      { id: 'droit', label: 'Droit', description: 'Ensemble des règles juridiques régissant une société, dotées d\'une force obligatoire garantie par la coercition publique. Se distingue de la morale, de l\'éthique et de la coutume par cette sanction.' },

      { id: 'origines', label: 'Origines anciennes', description: 'Du Code d\'Hammurabi (-1750) aux Tables de la Loi mosaïque et aux premiers droits codifiés. Naissance avec les premières cités-États.' },
      { id: 'romain', label: 'Droit romain', description: 'Mille ans d\'élaboration, des XII Tables (-451) au Corpus juris civilis de Justinien (534). Distinction droit privé/public. Matrice du droit continental européen.' },
      { id: 'familles', label: 'Familles juridiques', description: 'Deux grandes familles : droit civil (codifié, Europe continentale) et common law (jurisprudentielle, anglo-saxonne). Plus le droit musulman, le droit chinois, les droits traditionnels.' },
      { id: 'modernite', label: 'Modernité', description: 'XVIIIᵉ-XIXᵉ siècles : codifications, séparation des pouvoirs, droits naturels. Le Code Napoléon (1804) devient modèle mondial.' },
      { id: 'droits-humains', label: 'Droits humains', description: 'Universalisation au XXᵉ siècle. Déclaration universelle (1948), conventions internationales, juridictions supranationales (CEDH, CPI).' },
      { id: 'branches', label: 'Branches du droit', description: 'Droit civil, droit pénal, droit constitutionnel, droit administratif, droit commercial, droit international. Chaque branche a ses textes, ses juridictions, ses spécialistes.' },

      // Origines
      { id: 'hammurabi', label: 'Code d\'Hammurabi', description: '**-1750 Babylone**. Stèle de basalte de 2,25 m, 282 lois en akkadien cunéiforme. Loi du talion (œil pour œil), distinctions sociales explicites, prix réglementés. Au Louvre depuis 1902.', parent: 'origines' },
      { id: 'mosaique', label: 'Loi mosaïque', description: 'Les **Dix Commandements** et le **droit du Pentateuque** (Lévitique, Deutéronome). Vers -1200. Mélange de prescriptions religieuses, morales et juridiques. Une des matrices du droit occidental.', parent: 'origines' },

      // Droit romain
      { id: 'xii-tables', label: 'Loi des XII Tables', description: '**-451**. Première codification du droit romain. Tables de bronze affichées au forum. Fin du monopole patricien sur la connaissance du droit. Voir [[rome-antique]].', parent: 'romain' },
      { id: 'justinien', label: 'Corpus juris civilis', description: '**528-534**. Compilation immense ordonnée par l\'empereur **Justinien I** à Constantinople. *Institutes*, *Digeste*, *Code*. Synthétise mille ans de jurisprudence romaine. Texte fondateur du droit civil européen.', parent: 'romain' },

      // Familles juridiques
      { id: 'droit-civil', label: 'Droit civil', description: 'Héritier du droit romain. Basé sur des **codes** écrits, des principes généraux organisés. Europe continentale, Amérique latine, Afrique francophone, Japon. ~60 % des États du monde.', parent: 'familles' },
      { id: 'common-law', label: 'Common law', description: 'Origine **anglaise médiévale** (XIIᵉ siècle, sous Henri II). Basée sur la **jurisprudence** : les décisions de justice antérieures créent le droit (*stare decisis*). Royaume-Uni, USA, Canada, Australie, Inde. ~30 % des États.', parent: 'familles' },
      { id: 'autres-familles', label: 'Autres familles', description: 'Droit musulman (charia, fondé sur le Coran et la sunna), droit chinois (mélange socialiste, romain et confucéen), droit hindou, droits traditionnels d\'Afrique et d\'Océanie.', parent: 'familles' },

      // Modernité
      { id: 'code-napoleon', label: 'Code Napoléon', description: '**1804**. **2281 articles** rédigés en quatre ans par quatre juristes sous la direction de Napoléon. Modèle de clarté, de logique, de langage. Adopté ou imité par des dizaines d\'États dans le monde.', parent: 'modernite' },
      { id: 'montesquieu', label: 'Séparation des pouvoirs', description: 'Théorisée par **Montesquieu** dans *De l\'esprit des lois* (**1748**). Distinction des trois pouvoirs : législatif (faire la loi), exécutif (l\'appliquer), judiciaire (juger en cas de conflit).', parent: 'modernite' },

      // Droits humains
      { id: 'declaration-1789', label: 'Déclaration de 1789', description: 'Déclaration des droits de l\'homme et du citoyen, votée par l\'Assemblée nationale française le **26 août 1789**. 17 articles fondateurs. Texte référence pour 200 ans de luttes démocratiques. Voir [[revolution-francaise]].', parent: 'droits-humains' },
      { id: 'declaration-1948', label: 'Déclaration universelle 1948', description: 'Adoptée par l\'**ONU** le **10 décembre 1948** à Paris. **30 articles**. Première fois qu\'un texte juridique se proclame *universel*. Rédigée notamment par **René Cassin**, **Eleanor Roosevelt**, **Charles Malik**.', parent: 'droits-humains' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Une <em>règle</em> obligatoire`,
      contenu_md:
`Toute société humaine produit des normes — des règles qui disent ce qu'on doit faire ou ne pas faire. Mais toutes les normes ne sont pas du **droit**. La règle qui dit qu'il ne faut pas mentir est **morale**. Celle qui dit que les hommes mangent à droite des femmes dans le repas familial est **coutumière**. Celle qui dit qu'on doit présenter ses papiers d'identité lors d'un contrôle de police est **juridique**.

La différence ? Le droit possède une **force obligatoire garantie par l'État** : si vous transgressez une règle juridique, l'État peut user de la **coercition** — amende, prison, saisie — pour vous y contraindre ou vous punir. Aucune morale, aucune coutume n'a cette capacité. C'est ce **monopole de la violence légitime**, comme l'a appelé Max Weber, qui fait la singularité du droit.

Cette définition simple cache une question abyssale : **pourquoi les humains obéissent-ils au droit** ? Trois grandes familles de réponses ont été données par la philosophie politique :

(1) **Hobbes** (*Léviathan*, 1651) : par peur. Sans État pour faire respecter le droit, la vie est *« solitaire, pauvre, méchante, brutale et brève »*. L'humain renonce à sa liberté naturelle contre la sécurité.

(2) **Rousseau** (*Du contrat social*, 1762) : par adhésion à la **volonté générale**. Le citoyen est libre quand il obéit à la loi qu'il s'est lui-même donnée à travers ses représentants.

(3) **Hart** (*The Concept of Law*, 1961) : par acceptation **interne** d'une règle de reconnaissance. Les juristes professionnels acceptent que telle source est *la* source légitime de droit (la Constitution, le Parlement), et cette acceptation se diffuse dans la société.

Aucune de ces théories n'épuise la question, mais ensemble elles cernent ce qu'est le droit : pas seulement une menace de sanction (Hobbes), pas seulement une légitimité démocratique (Rousseau), pas seulement une convention professionnelle (Hart), mais un **mélange des trois** qui se reformule à chaque époque.`
    },

    {
      type: 'widget',
      composant: 'Frise',
      titre: 'Grandes étapes du droit dans l\'histoire',
      params: {
        evenements: [
          { date: '-1750', titre: 'Code d\'Hammurabi', description: 'Stèle de basalte gravée à Babylone par le roi **Hammurabi**. 282 lois sur la propriété, le mariage, la responsabilité. Plus ancienne codification conservée intégralement. Découverte en 1901 à Suse, au Louvre depuis 1902.' },
          { date: '-451', titre: 'Loi des XII Tables', description: 'Première codification du droit romain, gravée sur 12 tables de bronze au forum. Fin du monopole patricien sur la connaissance du droit. Point de départ de mille ans d\'élaboration du droit romain.' },
          { date: '533', titre: 'Corpus juris civilis', description: 'Compilation immense ordonnée par l\'empereur **Justinien I** à Constantinople. **Institutes**, **Digeste**, **Code**. Synthèse de mille ans de jurisprudence romaine. Texte fondateur du droit civil européen.' },
          { date: '1100', titre: 'Common law anglaise', description: 'Sous **Henri II** d\'Angleterre, naissance d\'une "loi commune" à tout le royaume, fondée sur la **jurisprudence** des cours royales itinérantes — alternative au droit romain qui structure le continent.' },
          { date: '1215', titre: 'Magna Carta', description: 'Le roi **Jean sans Terre** est contraint par les barons anglais à signer la *Grande Charte*, premier texte qui limite explicitement le pouvoir royal et garantit certaines libertés.' },
          { date: '1748', titre: 'L\'esprit des lois', description: '**Montesquieu** publie *De l\'esprit des lois*, théorisation de la **séparation des trois pouvoirs** comme garantie contre la tyrannie. Influence directe sur les constitutions américaine et française.' },
          { date: '1789', titre: 'Déclaration des droits', description: 'L\'Assemblée nationale française vote la **Déclaration des droits de l\'homme et du citoyen** (17 articles). Modèle référent pour 200 ans de luttes démocratiques. Voir [[revolution-francaise]].' },
          { date: '1804', titre: 'Code Napoléon', description: 'Promulgation du **Code civil** français : **2281 articles** organisant les rapports privés (personnes, biens, contrats, successions). Adopté ou imité par des dizaines d\'États dans le monde.' },
          { date: '1948', titre: 'Déclaration universelle des droits de l\'homme', description: 'Adoptée par l\'**ONU** le 10 décembre à Paris. 30 articles. Première fois qu\'un texte juridique se proclame universel. Rédigée notamment par René Cassin et Eleanor Roosevelt.' },
          { date: '2002', titre: 'Cour pénale internationale', description: 'Entrée en vigueur du **Statut de Rome** et création de la **CPI**. Juridiction permanente compétente pour les crimes les plus graves (génocide, crimes contre l\'humanité, crimes de guerre).' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le <em>droit romain</em>, matrice européenne`,
      contenu_md:
`Aucun système juridique n'a eu autant d'influence dans l'histoire que le droit romain. Il se construit sur **mille ans** — de la Loi des XII Tables en **-451** à la compilation de Justinien en **534** — et il structure aujourd'hui encore la moitié des systèmes juridiques du monde.

À ses débuts, le droit romain est une affaire **religieuse et patricienne**. Les *pontifes* connaissent les formules sacrées qui permettent d'agir en justice (les *legis actiones*) et ils les gardent secrètes. Les plébéiens, en grève, obtiennent en -451 la **mise par écrit** du droit sur les XII Tables exposées au forum. C'est une **révolution démocratique** : le droit devient accessible, opposable, contestable.

Ensuite, pendant presque mille ans, des juristes professionnels — les *jurisconsultes* — élaborent par leurs avis (*responsa*) un droit immensément raffiné. Ils inventent presque toutes les notions juridiques qui structurent encore notre pensée :
- La distinction entre **droit privé** (rapports entre particuliers) et **droit public** (organisation de l'État)
- La **propriété** comme droit absolu (*usus*, *fructus*, *abusus* — usage, jouissance, disposition)
- Les **contrats** comme accords créateurs d'obligations
- Le **mariage** civil distinct du mariage religieux
- La **représentation** (un mandataire peut agir pour un mandant)
- La **succession** testamentaire et la **réserve héréditaire**
- L'**équité** comme correctif de la rigueur de la loi

En **534**, l'empereur **Justinien I**, qui règne à Constantinople sur ce qui reste de l'empire romain ([[empire-byzantin]]), ordonne à une commission de **compiler tout le droit antérieur**. En quatre ans seulement, la commission produit le ***Corpus juris civilis*** ("Corpus du droit civil"), en quatre parties :
- Les **Institutes** : manuel pour étudiants
- Le **Digeste** : extraits des plus grands jurisconsultes (50 livres)
- Le **Code** : compilation des constitutions impériales
- Les **Novelles** : nouvelles lois de Justinien

Ce corpus est **redécouvert en Italie au XIᵉ siècle** par l'**école de Bologne** et devient la base de tout l'enseignement juridique européen pour 800 ans. Quand Napoléon ordonne en 1800 la rédaction d'un Code civil français, ses rédacteurs s'inspirent **massivement** du droit romain. Le code allemand de 1900 fait de même. C'est ainsi qu'une langue morte (le latin juridique) structure encore en 2026 la vie quotidienne de plus de **trois milliards d'humains**.`
    },

    {
      type: 'widget',
      composant: 'GrilleCartes',
      titre: 'Deux grandes familles juridiques modernes',
      params: {
        cartes: [
          { tag: '~60 % des États', titre: 'Droit civil', description: 'Héritier direct du **droit romain**. Basé sur des **codes écrits** organisés en grandes parties (personnes, biens, contrats, etc.). Principes généraux abstraits. Europe continentale, Amérique latine, Afrique francophone, Japon, Russie, Turquie.' },
          { tag: '~30 % des États', titre: 'Common law', description: 'Née en **Angleterre médiévale** sous Henri II (XIIᵉ siècle). Basée sur la **jurisprudence** : les décisions de justice antérieures lient les juges suivants (***stare decisis***). Royaume-Uni, États-Unis, Canada (sauf Québec), Australie, Inde, Nouvelle-Zélande.' },
          { tag: 'Spécifique', titre: 'Droit musulman', description: 'Fondé sur la **charia** (loi religieuse), elle-même issue du **Coran**, de la **sunna** (tradition prophétique), de l\'**ijma\'** (consensus des savants) et du **qiyas** (raisonnement par analogie). Coexiste avec le droit civil ou la common law dans la plupart des États musulmans.' },
          { tag: 'Hybrides', titre: 'Systèmes mixtes', description: '**Québec, Louisiane, Écosse, Afrique du Sud, Israël** combinent droit civil et common law. **Chine** mélange tradition confucéenne, droit socialiste hérité de l\'URSS, et inspiration récente du droit civil européen. **Inde** combine common law et droits personnels religieux (hindou, musulman, etc.).' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `La <em>common law</em>, alternative anglo-saxonne`,
      contenu_md:
`Pendant que le continent européen redécouvre et applique le droit romain à partir du XIIᵉ siècle, l'**Angleterre** suit un chemin radicalement différent. La conquête normande de **1066** y a installé un État centralisé exceptionnellement précoce. Le roi **Henri II Plantagenêt** (règne 1154-1189) organise des **cours royales itinérantes** qui parcourent le pays et qui jugent selon une **loi commune** à tout le royaume — d'où le nom *common law*.

Le principe fondateur est révolutionnaire : **les décisions antérieures lient les juges suivants**. Si une cour a décidé une question hier, la même cour (ou une inférieure) doit décider de la même manière aujourd'hui dans un cas semblable. C'est la règle dite ***stare decisis*** (rester sur ce qui a été décidé). Conséquence : le droit n'est **pas dans un livre**, il est dans l'**ensemble des décisions** accumulées au fil des siècles. Pour connaître le droit anglais, il faut connaître les *cases* (les affaires jugées).

Cela donne à la common law des traits très différents du droit continental :
- **Pragmatique** : on raisonne par analogie avec des cas concrets, pas par déduction à partir de principes abstraits.
- **Évolutif** : le droit change quand un juge décide différemment dans un cas-clé qui devient un *landmark case*.
- **Centré sur la procédure** : *Remedies precede rights* (les remèdes précèdent les droits) — on définit d'abord les actions en justice disponibles, ce qui détermine ensuite quels droits existent.
- **Aristocratique en quelque sorte** : les juges, recrutés parmi les barristers d'élite, ont un pouvoir créateur considérable.

La **Magna Carta** de **1215**, arrachée par les barons anglais au roi Jean sans Terre, ajoute un trait majeur : la limitation du pouvoir royal par le droit. C'est l'embryon de ce qu'on appellera plus tard l'**État de droit** (*rule of law*) — l'idée que même le souverain est soumis à la loi.

L'Angleterre exporte la common law dans son empire colonial. C'est pourquoi les **États-Unis** (sauf la Louisiane), le **Canada** (sauf le Québec), l'**Australie**, la **Nouvelle-Zélande**, l'**Inde**, et tout un ensemble de pays anglophones, fonctionnent encore aujourd'hui en common law. Le **Royaume-Uni** lui-même, paradoxalement, n'a toujours **pas de constitution écrite** au sens continental : ses règles fondamentales sont dispersées dans des textes, des conventions et des décisions de justice.`
    },

    {
      type: 'encadre',
      label: 'Code vs cas',
      contenu_md: `Pour comprendre la différence entre droit civil et common law, imaginez un litige : *peut-on être indemnisé du préjudice causé par la chute d'une enseigne de magasin* ? **Droit civil français** : le juge applique l'article 1242 du Code civil sur la responsabilité des choses dont on a la garde — il déduit la solution du **principe général écrit**. **Common law américaine** : le juge cherche s'il existe un *case* antérieur de même type, et applique le précédent. Si pas de précédent, il en crée un. Deux méthodes opposées de raisonnement juridique pour arriver souvent à des résultats équivalents.`
    },

    {
      type: 'texte',
      titre: `<em>Montesquieu</em> et la séparation des pouvoirs`,
      contenu_md:
`Au XVIIIᵉ siècle, alors que l'Europe vit encore sous des monarchies absolues, un magistrat bordelais — **Charles-Louis de Secondat, baron de Montesquieu** (1689-1755) — publie en **1748**, à l'âge de 59 ans, l'œuvre qui va structurer les démocraties modernes : ***De l'esprit des lois***.

L'idée centrale est apparemment simple, en réalité révolutionnaire. Montesquieu observe qu'il existe **trois pouvoirs** distincts dans tout État :
- Le **pouvoir législatif** : celui qui fait les lois
- Le **pouvoir exécutif** : celui qui les applique et gouverne
- Le **pouvoir judiciaire** : celui qui juge en cas de conflit

Dans une **monarchie absolue**, ces trois pouvoirs sont concentrés dans les mêmes mains (celles du roi). Conséquence inévitable selon Montesquieu : **tyrannie**. Si le roi peut à la fois faire la loi, l'appliquer comme il veut, et juger ses propres affaires, rien ne le retient.

La solution : **séparer les trois pouvoirs** dans des institutions distinctes. Que le parlement fasse la loi mais ne juge pas. Que le gouvernement applique la loi mais ne la fasse pas. Que les juges jugent mais ne légifèrent pas. Phrase fameuse : *« Pour qu'on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrête le pouvoir. »*

Cette théorie a une influence **stupéfiante** sur l'histoire politique. **Les pères fondateurs américains** la lisent en détail dans les années 1780 et structurent la **Constitution des États-Unis** de 1787 selon ses principes : Congress (législatif), President (exécutif), Supreme Court (judiciaire), avec un système de *checks and balances* (poids et contrepoids) entre les trois. La **Déclaration des droits de l'homme** française de 1789 inscrit aussi la séparation des pouvoirs comme principe constitutionnel : *« Toute société dans laquelle la garantie des droits n'est pas assurée, ni la séparation des pouvoirs déterminée, n'a point de constitution »* (article 16). Voir [[revolution-francaise]].

Aujourd'hui, **toute démocratie qui se respecte** prétend appliquer la séparation des pouvoirs — même si la pratique varie : régimes parlementaires (Royaume-Uni, France post-1958 partiellement, Allemagne) où exécutif et législatif sont entrelacés, régimes présidentiels (USA, Brésil) où la séparation est plus stricte, régimes hybrides ou autoritaires qui en affichent les formes sans en respecter le fond.`
    },

    {
      type: 'widget',
      composant: 'SelecteurValeurs',
      titre: 'Quatre grandes branches du droit, en France',
      params: {
        options: [
          { label: 'Droit civil', valeur: 'Code civil 1804', description: 'Relations privées entre personnes : personnes (naissance, mariage, divorce, décès), biens (propriété), obligations (contrats, responsabilité), successions. **2281 articles** dans le code original. Fondement : le **Code Napoléon**.' },
          { label: 'Droit pénal', valeur: 'Code pénal 1810/1994', description: 'Infractions et peines. **Crimes** (jugés en cour d\'assises), **délits** (en correctionnelle), **contraventions** (police). Principes : présomption d\'innocence, **non-rétroactivité**, **légalité** (pas de peine sans loi).' },
          { label: 'Droit constitutionnel', valeur: 'Constitution 1958', description: 'Organisation des pouvoirs publics. La **Constitution de la Vᵉ République** + le **bloc de constitutionnalité** (Déclaration de 1789, préambule de 1946, Charte de l\'environnement 2004). Garantissait par le **Conseil constitutionnel**.' },
          { label: 'Droit administratif', valeur: 'Surtout jurisprudentiel', description: 'Rapports entre l\'administration et les administrés. Pas de code unique : **création prétorienne** du **Conseil d\'État** au XIXᵉ siècle. Arrêts emblématiques : *Blanco* (1873), *Cadot* (1889), *Nicolo* (1989). Spécificité française admirée et imitée.' },
          { label: 'Droit international', valeur: 'Traités + coutume', description: 'Règles entre **États**. Sources : traités, coutume internationale, principes généraux du droit. Pas de législateur mondial, pas de police mondiale. Repose sur le **consentement** des États et leurs **engagements volontaires**. Cour internationale de Justice (CIJ) à La Haye.' },
          { label: 'Droits humains', valeur: 'DUDH 1948 + CEDH 1950', description: 'Droits universels reconnus à tous les humains du seul fait de leur humanité. **DUDH** (texte fondateur), **CEDH** (texte européen contraignant), conventions de l\'ONU. Juridictions : **CEDH** (Strasbourg), **CPI** (La Haye).' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Les <em>droits humains</em> comme aboutissement`,
      contenu_md:
`L'idée que tout humain, par le seul fait d'être humain, dispose de **droits inaliénables** est une **idée moderne**. Elle n'existe pas chez les Grecs (qui acceptaient l'esclavage comme naturel), ni dans la Bible (qui distingue les juifs et les "nations"), ni dans le droit romain (qui distingue les citoyens, les pérégrins, les esclaves). Elle apparaît au XVIIᵉ et XVIIIᵉ siècles dans la pensée des Lumières — **Locke**, **Rousseau**, **Voltaire**, **Diderot** —, qui théorisent l'existence de **droits naturels** précédant et limitant le droit positif (les lois écrites).

Trois grands textes inaugurent la traduction juridique de cette idée :

(1) La **Déclaration d'indépendance américaine** (**1776**) : *« Nous tenons pour évidentes par elles-mêmes les vérités suivantes : tous les hommes sont créés égaux ; ils sont dotés par leur Créateur de certains droits inaliénables ; parmi ces droits se trouvent la vie, la liberté et la recherche du bonheur. »*

(2) La **Déclaration des droits de l'homme et du citoyen** française (**26 août 1789**) : 17 articles qui proclament la **liberté**, l'**égalité**, la **propriété**, la **sûreté**, la **résistance à l'oppression**, la **séparation des pouvoirs**, la **présomption d'innocence**, la **liberté d'opinion** et de **culte**.

(3) La **Déclaration universelle des droits de l'homme** (**10 décembre 1948**) : adoptée par l'Assemblée générale de l'ONU à Paris, **réuni à l'unanimité** des votants (48 voix pour, 0 contre, 8 abstentions — bloc soviétique, Arabie saoudite, Afrique du Sud). **30 articles**. Rédigée principalement par **René Cassin** (France), **Eleanor Roosevelt** (USA), **Charles Malik** (Liban), **P.C. Chang** (Chine). C'est la **première fois** qu'un texte juridique se proclame **universellement applicable** — pas limité à un peuple, une race, une religion, une nation.

La DUDH n'est techniquement pas contraignante en elle-même, mais elle a engendré des **traités internationaux** qui le sont : le **Pacte international sur les droits civils et politiques** (1966), le **Pacte international sur les droits économiques, sociaux et culturels** (1966), la **Convention européenne des droits de l'homme** (1950, contraignante pour 46 États européens via la Cour de Strasbourg).

L'**universalité** des droits humains reste contestée : certains États (Chine, Singapour, monde arabe) y voient une importation occidentale et plaident pour des "valeurs asiatiques" ou "islamiques" alternatives. D'autres pointent l'**hypocrisie** : les pays qui ont rédigé la DUDH (France, USA, Royaume-Uni) avaient encore des empires coloniaux quand ils proclamaient l'égalité universelle. Ces critiques restent vivantes, mais le **cadre normatif universel** est désormais le langage de référence des disputes politiques internationales — y compris quand on le viole, on le viole *en feignant de le respecter*. Ce simple fait est sans précédent dans l'histoire du droit.`
    }

  ],

  quiz: [
    {
      q: `Qu'est-ce qui distingue le droit de la morale et de la coutume ?`,
      options: [
        `Le droit est écrit, la morale et la coutume ne le sont jamais`,
        `Le droit possède une force obligatoire garantie par la coercition étatique, contrairement à la morale et la coutume`,
        `Le droit est plus ancien que la morale`,
        `Le droit s'applique uniquement aux États, la morale aux individus`
      ],
      correcte: 1,
      explication: `La singularité du droit, c'est sa **force obligatoire** garantie par l'État. Si tu transgresses une règle juridique, l'État peut user de la **coercition** (amende, prison, saisie de biens) pour t'y contraindre. Aucune morale, aucune coutume n'a cette capacité. Comme l'a écrit *Max Weber*, l'État détient le **monopole de la violence légitime** — et c'est cette violence-là, juridiquement encadrée, qui distingue le droit des autres normes sociales. La morale dit ce qu'il *faut faire* mais ne peut pas y contraindre ; la coutume est suivie par habitude ; le droit, lui, *peut être imposé* par la force.`
    },
    {
      q: `Quelle est la plus ancienne codification écrite du droit conservée intégralement ?`,
      options: [
        `La Loi des XII Tables romaine (-451)`,
        `Le Code d'Hammurabi babylonien (~-1750), stèle au Louvre`,
        `Les Dix Commandements`,
        `Le Code Napoléon (1804)`
      ],
      correcte: 1,
      explication: `Le **Code d'Hammurabi**, gravé en akkadien cunéiforme sur une **stèle de basalte** de 2,25 m vers **-1750** par le roi babylonien **Hammurabi**, est la plus ancienne codification écrite **conservée intégralement** de l'humanité. **282 lois** sur la propriété, le mariage, la responsabilité civile et pénale, les peines. Le célèbre **principe du talion** ("œil pour œil") y figure. Découvert en **1901-1902** à Suse (Iran) par l'archéologue français Jacques de Morgan, il est conservé au **Louvre** depuis 1902. Des codes antérieurs existent (code d'Ur-Nammu vers -2050) mais nous n'en avons que des fragments.`
    },
    {
      q: `Quelle est la différence centrale entre droit civil et common law ?`,
      options: [
        `Le droit civil est plus récent que la common law`,
        `Le droit civil est basé sur des codes écrits (héritage romain), la common law sur la jurisprudence (décisions antérieures qui lient les juges suivants)`,
        `Le droit civil concerne les contrats, la common law concerne les crimes`,
        `Le droit civil est plus sévère`
      ],
      correcte: 1,
      explication: `C'est la **différence méthodologique fondamentale** entre les deux grandes familles juridiques. Le **droit civil** (Europe continentale, Amérique latine, Japon…) raisonne par **déduction** à partir de **principes généraux** organisés dans des **codes écrits** (Code civil français, BGB allemand, etc.) — héritage direct du droit romain via Justinien. La **common law** (Royaume-Uni, USA, Canada, Australie, Inde…) raisonne par **analogie** à partir de **décisions de justice antérieures** : la règle dite *stare decisis* impose aux juges de suivre les précédents. Pour connaître le droit anglais, il faut connaître les *cases*. Pour connaître le droit français, il faut lire le Code. Deux méthodes opposées qui arrivent souvent à des résultats équivalents.`
    },
    {
      q: `Pourquoi le Corpus juris civilis de Justinien (534) est-il important ?`,
      options: [
        `Il fonde le droit byzantin local`,
        `Il compile mille ans de droit romain en un seul ouvrage qui sera redécouvert au XIᵉ siècle et structurera l'enseignement juridique européen pendant 800 ans`,
        `Il abolit l'esclavage`,
        `Il invente la common law`
      ],
      correcte: 1,
      explication: `En **528-534**, l'empereur **Justinien I** ordonne à une commission de **compiler en un seul ouvrage** tout le droit romain antérieur — c'est-à-dire **mille ans** de jurisprudence et de législation. Le résultat, le ***Corpus juris civilis*** ("Corpus du droit civil"), comprend les *Institutes* (manuel pour étudiants), le *Digeste* (extraits des plus grands jurisconsultes en 50 livres), le *Code* (constitutions impériales) et les *Novelles* (lois nouvelles de Justinien). Ce corpus est **redécouvert en Italie au XIᵉ siècle** par l'**école de Bologne** qui en fait la base de l'enseignement juridique européen — pour **800 ans**. Quand on rédige le Code civil français en 1804 ou le BGB allemand en 1900, on s'inspire massivement du Corpus de Justinien. C'est ainsi que des textes du VIᵉ siècle structurent encore aujourd'hui la vie juridique de plus de trois milliards d'humains.`
    },
    {
      q: `Qui théorise la séparation des pouvoirs, et dans quel ouvrage ?`,
      options: [
        `Rousseau dans Du contrat social (1762)`,
        `Montesquieu dans De l'esprit des lois (1748)`,
        `Hobbes dans Léviathan (1651)`,
        `Locke dans le Second Traité du gouvernement civil (1689)`
      ],
      correcte: 1,
      explication: `**Charles-Louis de Secondat, baron de Montesquieu** (1689-1755), magistrat bordelais, publie en **1748** son chef-d'œuvre ***De l'esprit des lois***. Il y théorise la séparation des **trois pouvoirs** — législatif, exécutif, judiciaire — comme **garantie nécessaire** contre la tyrannie : *« Pour qu'on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrête le pouvoir. »* Cette théorie a une influence directe sur la **Constitution américaine de 1787** (Congress / President / Supreme Court) et sur la **Déclaration française de 1789** (article 16 : *Toute société dans laquelle la garantie des droits n'est pas assurée, ni la séparation des pouvoirs déterminée, n'a point de constitution*). Locke avait déjà parlé d'une séparation à deux pouvoirs (législatif et exécutif), mais c'est Montesquieu qui structure la théorie classique des trois pouvoirs.`
    },
    {
      q: `Quand et où est adoptée la Déclaration universelle des droits de l'homme ?`,
      options: [
        `À Genève en 1949 par la Société des Nations`,
        `À Paris le 10 décembre 1948 par l'Assemblée générale de l'ONU`,
        `À Versailles en 1919 lors du traité de paix`,
        `À New York en 1945 lors de la fondation de l'ONU`
      ],
      correcte: 1,
      explication: `La **Déclaration universelle des droits de l'homme** est adoptée le **10 décembre 1948** au palais de Chaillot à **Paris** par l'**Assemblée générale de l'ONU**. **48 États** votent pour, **0 contre**, **8 abstentions** (le bloc soviétique, l'Arabie saoudite, l'Afrique du Sud). **30 articles**. Elle a été rédigée principalement par **René Cassin** (France, juriste, prix Nobel de la paix 1968), **Eleanor Roosevelt** (États-Unis, présidente de la commission), **Charles Malik** (Liban, diplomate), **P.C. Chang** (Chine, philosophe). C'est la **première fois** dans l'histoire du droit qu'un texte se proclame **universellement applicable** — non limité à un peuple, une religion, une nation. Le 10 décembre est désormais la **Journée internationale des droits de l'homme**.`
    },
    {
      q: `Qu'est-ce que la règle stare decisis dans la common law ?`,
      options: [
        `L'obligation pour le juge d'attendre dix jours avant de rendre son verdict`,
        `La règle selon laquelle les décisions de justice antérieures lient les juges suivants dans des cas semblables`,
        `Le principe selon lequel le roi est au-dessus de la loi`,
        `L'interdiction de juger sans jury`
      ],
      correcte: 1,
      explication: `***Stare decisis*** (du latin *stare decisis et non quieta movere*, "rester sur ce qui a été décidé et ne pas troubler ce qui est tranquille") est le **principe fondamental** de la common law. Quand une **cour supérieure** a tranché une question juridique dans un cas, les **cours inférieures** sont tenues de suivre la même solution dans des cas semblables ultérieurs. Conséquence : le droit anglo-saxon **n'est pas dans un livre** mais dans l'**ensemble accumulé des décisions de justice** (les *cases*). Pour connaître le droit, il faut connaître les précédents. Ce principe donne aux **juges** un pouvoir créateur considérable et explique le prestige immense de la magistrature dans le monde anglo-saxon. Le précédent peut être renversé par une cour suprême (*overruling*), mais c'est rare et toujours retentissant — comme *Brown v. Board of Education* (1954) qui renverse *Plessy v. Ferguson* (1896) sur la ségrégation raciale aux États-Unis.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Droit',
      definition: `Ensemble des **règles juridiques** régissant une société donnée, dotées d'une **force obligatoire** garantie par la coercition étatique. Se distingue de la morale, de l'éthique et de la coutume par cette **sanction publique**. Détient ce que *Max Weber* appelle le **monopole de la violence légitime**.`
    },
    {
      terme: 'Code d\'Hammurabi',
      definition: `Plus ancienne **codification écrite intégralement conservée** du droit : 282 lois gravées en akkadien cunéiforme sur une **stèle de basalte** de 2,25 m par le roi **Hammurabi** de Babylone vers **-1750**. Inclut le célèbre **principe du talion**. Découverte en 1901-1902 à Suse, conservée au **Louvre** depuis 1902.`
    },
    {
      terme: 'Droit romain',
      definition: `Système juridique élaboré à Rome sur **mille ans** — de la Loi des XII Tables (-451) au *Corpus juris civilis* de Justinien (534). Distingue **droit privé** et **droit public**, fonde les notions modernes de propriété, contrat, responsabilité, succession. **Matrice du droit civil** européen et de tous ses descendants.`
    },
    {
      terme: 'Corpus juris civilis',
      definition: `**Compilation monumentale** du droit romain ordonnée par l'empereur **Justinien I** à Constantinople, **528-534**. Quatre parties : *Institutes*, *Digeste*, *Code*, *Novelles*. **Redécouvert en Italie au XIᵉ siècle**, base de l'enseignement juridique européen pendant 800 ans, fondement du droit civil moderne.`
    },
    {
      terme: 'Common law',
      definition: `Famille juridique née en **Angleterre médiévale** sous **Henri II** (XIIᵉ siècle). Basée sur la **jurisprudence** : les décisions de justice antérieures lient les juges suivants (***stare decisis***). Royaume-Uni, États-Unis, Canada (sauf Québec), Australie, Inde, Nouvelle-Zélande. ~30 % des États du monde.`
    },
    {
      terme: 'Droit civil',
      definition: `Famille juridique héritière du **droit romain** via Justinien. Basée sur des **codes écrits** organisés en grandes parties (personnes, biens, contrats, etc.), avec des **principes généraux abstraits**. Europe continentale, Amérique latine, Afrique francophone, Japon, Russie, Turquie. ~60 % des États.`
    },
    {
      terme: 'Code civil (Code Napoléon)',
      definition: `**Code civil français** promulgué en **1804** par **Napoléon Bonaparte**. **2281 articles** rédigés en quatre ans par quatre juristes. Modèle de clarté, de logique, de langage. Adopté ou imité par **des dizaines d'États** dans le monde (Belgique, Pays-Bas, Italie, Espagne, Portugal, Égypte, Louisiane, Québec…).`
    },
    {
      terme: 'Séparation des pouvoirs',
      definition: `Principe théorisé par **Montesquieu** dans ***De l'esprit des lois*** (**1748**). Sépare les **trois pouvoirs** — **législatif** (faire la loi), **exécutif** (l'appliquer), **judiciaire** (juger) — dans des institutions distinctes pour empêcher la tyrannie. Inscrit à l'article 16 de la Déclaration de 1789, fondement de toutes les démocraties modernes.`
    },
    {
      terme: 'Stare decisis',
      definition: `Principe fondamental de la **common law** : "rester sur ce qui a été décidé". Les décisions de justice antérieures **lient les juges suivants** dans des cas semblables. Conséquence : le droit anglo-saxon n'est pas dans un livre mais dans l'**ensemble accumulé des décisions** (*cases*). Donne aux juges un pouvoir créateur considérable.`
    },
    {
      terme: 'Déclaration universelle des droits de l\'homme',
      definition: `Adoptée par l'**Assemblée générale de l'ONU** à Paris le **10 décembre 1948**. **30 articles**. **Première fois** qu'un texte juridique se proclame **universellement applicable**. Rédigée notamment par **René Cassin**, **Eleanor Roosevelt**, **Charles Malik**, **P.C. Chang**. Pas contraignante en elle-même, mais a engendré des traités contraignants (Pactes de 1966, CEDH 1950).`
    }
  ]

});
