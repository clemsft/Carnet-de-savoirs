/* ===================================================================
   SUJET — Les Templiers
   ===================================================================
   Ordre religieux-militaire du XIIᵉ-XIVᵉ siècle, de la protection
   des pèlerins à Jérusalem à la dissolution par Philippe le Bel.
   Domaine : Histoire
   =================================================================== */

window.CarnetDeSavoirs.register({
  meta: {
    id: 'les-templiers',
    titre: `L'ordre des <em>Templiers</em>`,
    domaines: ['Histoire'],
    tags: ['croisades', 'moyen-age', 'ordre militaire', 'jérusalem', 'philippe le bel', 'jacques de molay'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['cathedrales-gothiques', 'empire-byzantin'],
    date_creation: '2026-05-26',
    date_maj: '2026-05-26'
  },

  resume: `Fondé en 1119 pour protéger les pèlerins de Terre sainte, l'ordre du Temple devient en deux siècles la première puissance financière d'Europe — avant d'être brutalement dissous en 1312 par le roi de France et le pape, dans un procès qui fascine encore.`,

  points_cles: [
    `L'ordre du **Temple** est fondé à Jérusalem en **1119** par **Hugues de Payns** pour protéger les pèlerins sur les routes de Terre sainte.`,
    `Approuvé par le concile de Troyes en 1129, il reçoit une règle inspirée par **Bernard de Clairvaux**, qui en fait des *moines-soldats*.`,
    `Sa spécificité : combiner **vœux monastiques** (pauvreté, chasteté, obéissance) et vocation **militaire** — une nouveauté radicale dans le christianisme.`,
    `Progressivement, l'Ordre devient une véritable **banque internationale** : dépôts, transferts par lettres de change, prêts aux rois — dont le roi de France.`,
    `Le **13 octobre 1307**, Philippe le Bel fait arrêter les Templiers du royaume dans une opération synchronisée d'une ampleur inédite.`,
    `Après un procès marqué par la torture et les aveux rétractés, l'Ordre est dissous par le pape Clément V au concile de Vienne en **1312**. Jacques de Molay meurt sur le bûcher en **1314**.`
  ],

  carte_mentale: {
    central: 'les-templiers',
    noeuds: [
      { id: 'les-templiers', label: 'Les Templiers', description: `Ordre religieux et militaire (1119-1312) né des Croisades, dissous par Philippe le Bel.` },

      { id: 'origines', label: 'Origines', description: `Terre sainte, protection des pèlerins, statut monastique.` },
      { id: 'organisation', label: 'Organisation', description: `Hiérarchie stricte : chevaliers, sergents, chapelains, frères de métier.` },
      { id: 'puissance', label: 'Puissance', description: `Réseau européen de commanderies, immenses ressources foncières et financières.` },
      { id: 'finance', label: 'Innovations financières', description: `Ancêtres de la banque moderne — dépôts, virements, lettres de change.` },
      { id: 'chute', label: 'Procès et chute', description: `Arrestation-éclair de 1307, procès, dissolution en 1312, bûcher en 1314.` },
      { id: 'legende', label: 'Légende noire', description: `Trésor perdu, malédictions, mystères — un capital symbolique inépuisable.` },

      { id: 'hugues-payns', label: 'Hugues de Payns', description: `Fondateur, premier grand-maître, chevalier champenois.`, parent: 'origines' },
      { id: 'bernard', label: 'Bernard de Clairvaux', description: `Rédige la *Louange à la nouvelle milice* qui justifie théologiquement le moine-soldat.`, parent: 'origines' },
      { id: 'troyes', label: 'Concile de Troyes (1129)', description: `Reconnaissance officielle, adoption de la règle latine.`, parent: 'origines' },

      { id: 'grand-maitre', label: 'Grand-maître', description: `Élu à vie, siège à Jérusalem puis Acre puis Chypre.`, parent: 'organisation' },
      { id: 'commanderies', label: 'Commanderies', description: `Environ 9 000 établissements dans toute l'Europe — colonne vertébrale du réseau.`, parent: 'organisation' },

      { id: 'lettres-change', label: `Lettres de change`, description: `Un pèlerin dépose à Paris, retire à Jérusalem — sans transporter d'or.`, parent: 'finance' },
      { id: 'tresor-royal', label: 'Trésor royal', description: `Le trésor de la couronne de France est longtemps gardé au Temple de Paris.`, parent: 'finance' },

      { id: 'philippe-le-bel', label: 'Philippe le Bel', description: `Roi de France endetté auprès de l'Ordre — moteur politique et financier du procès.`, parent: 'chute' },
      { id: 'clement-v', label: 'Clément V', description: `Pape installé en Avignon, cède aux pressions du roi et dissout l'Ordre.`, parent: 'chute' },
      { id: 'jacques-molay', label: 'Jacques de Molay', description: `Dernier grand-maître. Brûlé vif à Paris le 18 mars 1314 sur l'île aux Juifs.`, parent: 'chute' }
    ],
    liens: []
  },

  cours: [
    {
      type: 'texte',
      titre: `La naissance d'une <em>idée neuve</em>`,
      contenu_md:
`Vingt ans après la prise de Jérusalem par la première croisade (1099), les routes de Terre sainte restent extrêmement dangereuses. Les pèlerins qui débarquent à Jaffa doivent traverser des zones tenues par les brigands et les seigneurs musulmans hostiles. En **1119**, neuf chevaliers menés par le champenois **Hugues de Payns** proposent au roi de Jérusalem Baudouin II de se consacrer à leur protection. Le roi les installe dans une aile de son palais, sur l'emplacement supposé du **Temple de Salomon** — d'où leur nom.

Neuf hommes pour sécuriser un royaume : le projet paraît insensé. Mais l'idée qu'ils incarnent est en avance sur son temps. Jusqu'alors, la doctrine chrétienne considère la violence armée comme incompatible avec l'état religieux. Un moine ne peut pas verser le sang. Or ces neuf-là veulent être à la fois **moines** et **combattants**.

Il faut toute l'autorité théologique de **Bernard de Clairvaux**, chef du monachisme cistercien, pour lever l'obstacle. Dans son traité *De laude novae militiae* (« Éloge de la nouvelle milice »), il pose que le meurtre d'un ennemi de la foi n'est pas un péché mais un service rendu à Dieu — un *malicide*, non un *homicide*. Le concile de Troyes en **1129** entérine la formule et donne à l'Ordre sa règle.`
    },

    {
      type: 'widget',
      titre: `Chronologie de l'Ordre`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1119', titre: 'Fondation', description: `Hugues de Payns et huit compagnons se mettent au service de la protection des pèlerins à Jérusalem.` },
          { date: '1129', titre: 'Concile de Troyes', description: `L'Ordre reçoit sa règle et une reconnaissance officielle de l'Église. Adhésions massives en Europe.` },
          { date: '1187', titre: 'Bataille de Hattin', description: `Défaite catastrophique face à [Saladin]{accent} : l'Ordre perd sa cavalerie et Jérusalem tombe.` },
          { date: '1191', titre: 'Repli sur Acre', description: `Après la troisième croisade, Acre devient le nouveau siège de l'Ordre en Terre sainte.` },
          { date: '1291', titre: `Chute d'Acre`, description: `Dernière place franche perdue. L'Ordre se replie à Chypre puis en Occident.` },
          { date: '1307', titre: 'Arrestation-éclair', description: `Le 13 octobre, Philippe le Bel fait arrêter tous les Templiers de France dans une opération sans précédent.` },
          { date: '1312', titre: 'Dissolution', description: `Le concile de Vienne, sous pression royale, dissout l'Ordre. Ses biens reviennent aux Hospitaliers.` },
          { date: '1314', titre: 'Bûcher de Jacques de Molay', description: `Le dernier grand-maître est brûlé sur l'île aux Juifs, au cœur de Paris. Il aurait maudit le roi et le pape.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `L'invention d'une banque internationale`,
      contenu_md:
`Le vrai génie des Templiers n'est pas militaire — c'est **logistique et financier**. Pour soutenir la Terre sainte, il fallait faire circuler des sommes considérables entre l'Europe et l'Orient. Transporter de l'or par bateau ou par caravane, c'était l'exposer au vol, au naufrage, à la piraterie.

Les Templiers inventent — ou plutôt systématisent — la [lettre de change]{accent}. Un pèlerin remet ses écus au Temple de Paris. Il reçoit un document scellé. Arrivé à Acre ou à Jérusalem, il présente ce document au Temple local, qui lui verse la contrevaleur, moins une commission. L'or, lui, n'a jamais bougé — seule l'écriture comptable circule. C'est déjà la banque moderne.

Rapidement, les rois eux-mêmes utilisent leurs services. Le **trésor royal de France** est gardé au Temple de Paris jusqu'en 1295. Les rois d'Angleterre, d'Aragon, du Portugal empruntent. Les Templiers gèrent la fiscalité pontificale. Ils sont, à la fin du XIIIᵉ siècle, la **première puissance financière d'Occident**.`
    },

    {
      type: 'encadre',
      label: 'Un chiffre',
      contenu_md: `Au sommet de leur puissance, les Templiers gèrent environ **9 000 commanderies** en Europe et en Terre sainte, comptent près de **15 000 frères**, et possèdent une flotte de guerre et de commerce qui rivalise avec celle de Venise.`
    },

    {
      type: 'widget',
      titre: `L'organisation interne`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          { tag: 'Élite combattante', titre: 'Chevaliers', description: `Issus de la noblesse, ils portent le **manteau blanc à croix rouge**. Trois destriers, un écuyer, l'armement complet. Ils forment la charge de choc.` },
          { tag: 'Combattants', titre: 'Sergents', description: `Roturiers d'origine, en manteau brun ou noir. Cavalerie légère et infanterie. Numériquement majoritaires sur le champ de bataille.` },
          { tag: 'Religieux', titre: 'Chapelains', description: `Prêtres de l'Ordre. Assurent la vie sacramentelle, dépendent directement du grand-maître, non de l'évêque local.` },
          { tag: 'Économie', titre: 'Frères de métier', description: `Artisans, agriculteurs, marchands, marins. Font vivre le vaste patrimoine foncier et commercial de l'Ordre.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le vendredi 13 octobre 1307`,
      contenu_md:
`Philippe IV le Bel, roi de France, est aux abois financièrement. Ses guerres contre la Flandre l'ont ruiné. Il a déjà spolié les banquiers italiens et expulsé les Juifs pour saisir leurs biens. Restent les Templiers — leurs coffres, leurs terres, et l'humiliation d'être leur débiteur.

L'opération est préparée dans le plus grand secret par **Guillaume de Nogaret**, garde des Sceaux. Des ordres cachetés partent aux baillis et sénéchaux du royaume, à ouvrir simultanément à l'aube du **13 octobre 1307**. Ce matin-là, en quelques heures, plusieurs milliers de Templiers de France sont arrêtés dans leurs commanderies. C'est la première opération de police d'envergure nationale de l'histoire européenne.

Les accusations sont graves : *reniement du Christ*, *idolâtrie* (l'énigmatique *Baphomet*), *sodomie*, *hérésie*. La torture arrache les aveux voulus. Le grand-maître **Jacques de Molay** avoue puis se rétracte — plusieurs fois. En **1312**, le pape **Clément V**, installé à Avignon et politiquement inféodé au roi, prononce la dissolution de l'Ordre au concile de Vienne. Le 18 mars **1314**, Molay est brûlé vif à Paris. La légende veut qu'il ait cité le roi et le pape à comparaître devant Dieu — les deux hommes meurent dans l'année.`
    },

    {
      type: 'texte',
      titre: `La postérité : entre histoire et mythologie`,
      contenu_md:
`Aucun ordre médiéval n'a autant nourri l'imagination moderne. Dès le XVIIIᵉ siècle, les **francs-maçons** revendiquent une filiation templière, aussi documentée qu'imaginaire. Au XIXᵉ siècle, romanciers et occultistes multiplient les hypothèses : un *trésor* caché à Gisors, à Rennes-le-Château, en Écosse. Des *secrets ésotériques* rapportés d'Orient. Une *survivance clandestine* de l'Ordre.

Le XXᵉ siècle industrialise le mythe : Umberto Eco (*Le Pendule de Foucault*), Dan Brown (*Da Vinci Code*), des dizaines de jeux vidéo (*Assassin's Creed*) et de séries entretiennent l'idée d'un ordre secret qui n'aurait jamais cessé d'exister.

Les historiens contemporains, à commencer par **Alain Demurger**, ont patiemment démonté la plupart de ces constructions. Il reste que les Templiers occupent une place singulière : dernier grand ordre monastique *anéanti par le pouvoir civil*, ils incarnent une **injustice fondatrice** dont Balzac disait qu'elle a fait basculer l'Europe médiévale dans la modernité — celle des États contre les corps intermédiaires.`
    }
  ],

  quiz: [
    {
      q: `En quelle année l'ordre du Temple est-il fondé ?`,
      options: [`1099`, `1119`, `1129`, `1187`],
      correcte: 1,
      explication: `Hugues de Payns et huit compagnons fondent l'Ordre à Jérusalem en 1119, vingt ans après la prise de la ville par la première croisade.`
    },
    {
      q: `Quel théologien rédige le texte qui justifie l'idée du moine-soldat ?`,
      options: [
        `Thomas d'Aquin`,
        `Bernard de Clairvaux`,
        `Pierre Abélard`,
        `Anselme de Cantorbéry`
      ],
      correcte: 1,
      explication: `Bernard de Clairvaux, dans son *De laude novae militiae* (« Éloge de la nouvelle milice »), légitime la vocation militaire de l'Ordre — pierre angulaire de sa reconnaissance en 1129.`
    },
    {
      q: `Quelle innovation financière les Templiers systématisent-ils ?`,
      options: [
        `L'assurance maritime`,
        `La lettre de change`,
        `La monnaie de papier`,
        `Le prêt hypothécaire`
      ],
      correcte: 1,
      explication: `La lettre de change permet à un pèlerin de déposer son or à Paris et de le retirer à Jérusalem — sans transporter le métal, en toute sécurité. Ancêtre du virement bancaire.`
    },
    {
      q: `Quelle bataille marque en 1187 un désastre militaire décisif pour l'Ordre ?`,
      options: [
        `Bataille de Hattin`,
        `Bataille de Montgisard`,
        `Bataille de Nicopolis`,
        `Bataille des Cornes de Hattin`
      ],
      correcte: 0,
      explication: `À Hattin, Saladin écrase l'armée franque et fait prisonnier le roi de Jérusalem. Les Templiers survivants sont massacrés. Jérusalem tombe quelques semaines plus tard.`
    },
    {
      q: `Qui ordonne l'arrestation des Templiers de France en 1307 ?`,
      options: [
        `Le pape Boniface VIII`,
        `L'empereur Frédéric II`,
        `Philippe IV le Bel`,
        `Saint Louis`
      ],
      correcte: 2,
      explication: `Philippe le Bel, endetté et jaloux de leur puissance financière, orchestre l'opération dans le plus grand secret via son garde des Sceaux Guillaume de Nogaret.`
    },
    {
      q: `Qui est le dernier grand-maître de l'Ordre, brûlé à Paris en 1314 ?`,
      options: [
        `Hugues de Payns`,
        `Guillaume de Beaujeu`,
        `Jacques de Molay`,
        `Gérard de Ridefort`
      ],
      correcte: 2,
      explication: `Jacques de Molay est brûlé sur l'île aux Juifs à Paris en mars 1314. La tradition rapporte qu'il aurait cité Philippe le Bel et Clément V devant le tribunal de Dieu — les deux hommes meurent effectivement dans l'année.`
    },
    {
      q: `Quel pape prononce la dissolution officielle de l'Ordre au concile de Vienne en 1312 ?`,
      options: [`Boniface VIII`, `Clément V`, `Jean XXII`, `Benoît XI`],
      correcte: 1,
      explication: `Clément V, installé en Avignon et politiquement dépendant du roi de France, cède à la pression et dissout l'Ordre au concile de Vienne en 1312.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Ordre du Temple',
      definition: `Ordre religieux-militaire chrétien fondé en 1119 à Jérusalem. Combine vœux monastiques et vocation combattante. Dissous en 1312 par le pape Clément V sous pression de Philippe le Bel.`
    },
    {
      terme: 'Commanderie',
      definition: `Établissement de base de l'Ordre : ferme fortifiée, chapelle, dortoir, dépendances agricoles. Environ **9 000** en Europe et en Orient au sommet de la puissance templière.`
    },
    {
      terme: 'Moine-soldat',
      definition: `Nouveauté théologique du XIIᵉ siècle légitimée par [Bernard de Clairvaux]{accent} : religieux tenu par les vœux monastiques (pauvreté, chasteté, obéissance) mais autorisé à combattre pour la foi. Modèle repris par les Hospitaliers et les Teutoniques.`
    },
    {
      terme: 'Lettre de change',
      definition: `Instrument financier qui permet de transférer une valeur d'un lieu à un autre sans déplacement physique de monnaie. Systématisé par les Templiers pour sécuriser les paiements des pèlerins entre l'Europe et la Terre sainte. Ancêtre du virement bancaire.`
    },
    {
      terme: 'Grand-maître',
      definition: `Chef élu à vie de l'Ordre. Siège à Jérusalem, puis à Acre après 1187, enfin à Chypre après 1291. Autorité militaire, spirituelle et diplomatique.`
    },
    {
      terme: 'Bataille de Hattin',
      definition: `Défaite décisive infligée par **Saladin** aux armées franques le 4 juillet **1187**. Perte de la Vraie Croix, chute imminente de Jérusalem, effondrement militaire des ordres.`
    },
    {
      terme: 'Baphomet',
      definition: `Idole prétendument adorée par les Templiers selon les accusations du procès de 1307. Origine du mot obscure (déformation de « Mahomet » ?). Sa réalité n'est étayée par aucune source antérieure aux aveux extorqués sous torture.`
    },
    {
      terme: 'Jacques de Molay',
      definition: `Vingt-troisième et dernier grand-maître (1292-1314). Brûlé vif à Paris. Sa figure a nourri toute la légende noire de la chute de l'Ordre et, par ricochet, toutes les théories complotistes modernes.`
    }
  ]
});
