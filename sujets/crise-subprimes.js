/* ===================================================================
   SUJET — La crise des subprimes
   ===================================================================
   Anatomie de la crise financière mondiale de 2007-2008, de la bulle
   immobilière américaine à la faillite de Lehman Brothers.
   Domaine : Économie
   =================================================================== */

window.CarnetDeSavoirs.register({
  meta: {
    id: 'crise-subprimes',
    titre: 'La crise des <em>subprimes</em>',
    domaines: ['Économie'],
    tags: ['2008', 'lehman brothers', 'titrisation', 'cds', 'crise financière', 'immobilier'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['marches-financiers', 'jerome-kerviel', 'inflation'],
    date_creation: '2026-05-26',
    date_maj: '2026-05-26'
  },

  resume: `Née d'une bulle immobilière américaine et d'une machine financière qui recyclait des prêts risqués en produits notés AAA, la crise des subprimes déclenche à l'automne 2008 la plus grave secousse financière depuis 1929, provoque la faillite de Lehman Brothers et entraîne l'ensemble du système bancaire mondial au bord de l'effondrement.`,

  points_cles: [
    `Les **subprimes** sont des prêts immobiliers accordés à des ménages américains à faible solvabilité, à taux généralement variables et à conditions initiales avantageuses.`,
    `Les banques ne conservent pas ces prêts : elles les [titrisent]{accent} en **MBS** (*Mortgage-Backed Securities*), regroupés puis retranchés en **CDO** (*Collateralized Debt Obligations*).`,
    `Ces produits complexes, notés **AAA** par les agences, se retrouvent partout dans le système financier mondial.`,
    `Quand la Fed remonte ses taux (2004-2006) et que l'immobilier retourne (2006), les défauts explosent et la valeur des MBS s'effondre.`,
    `Le **15 septembre 2008**, la faillite de **Lehman Brothers** provoque un gel total du marché interbancaire — c'est le pic de la crise.`,
    `Les États sauvent leurs banques par des injections massives de capital (TARP aux États-Unis, plans européens). La crise se transforme en **récession mondiale** puis en **crise des dettes souveraines** (2010-2012).`
  ],

  carte_mentale: {
    central: 'crise-subprimes',
    noeuds: [
      { id: 'crise-subprimes', label: 'Crise des subprimes', description: `Crise financière mondiale 2007-2008 née de la titrisation des crédits immobiliers américains à risque.` },

      { id: 'racines', label: 'Racines', description: `Politique monétaire accommodante, bulle immobilière, crédit facile.` },
      { id: 'mecanique', label: 'Mécanique', description: `Chaîne de la titrisation qui transforme des prêts risqués en produits notés AAA.` },
      { id: 'declenchement', label: 'Déclenchement', description: `Retournement de l'immobilier, explosion des défauts.` },
      { id: 'contagion', label: 'Contagion', description: `Du marché des MBS au système bancaire mondial via l'interconnexion.` },
      { id: 'reponse', label: 'Réponse politique', description: `Sauvetages bancaires, injections monétaires, encadrement réglementaire.` },
      { id: 'sequelles', label: 'Séquelles', description: `Récession, chômage, crise des dettes souveraines, montée des populismes.` },

      { id: 'greenspan', label: 'Ère Greenspan', description: `Taux directeurs très bas (2001-2004) après la bulle internet et le 11-Septembre.`, parent: 'racines' },
      { id: 'bulle-immo', label: 'Bulle immobilière', description: `Les prix de l'immobilier américain doublent entre 2000 et 2006. Illusion de richesse et emprunts adossés aux plus-values.`, parent: 'racines' },

      { id: 'subprime', label: 'Prêts subprime', description: `Prêts à ménages à faible score de crédit, à taux variables souvent piégés par des « teasers ».`, parent: 'mecanique' },
      { id: 'titrisation', label: 'Titrisation', description: `Regroupement de milliers de prêts en titres négociables (MBS) revendus à des investisseurs.`, parent: 'mecanique' },
      { id: 'cdo', label: 'CDO', description: `Découpage des MBS en tranches (senior, mezzanine, equity) permettant de créer artificiellement du AAA.`, parent: 'mecanique' },
      { id: 'agences', label: `Agences de notation`, description: `S&P, Moody's, Fitch notent AAA des produits qui ne le méritaient pas — conflit d'intérêts systémique.`, parent: 'mecanique' },

      { id: 'bnp-2007', label: 'BNP, août 2007', description: `Blocage de trois fonds monétaires exposés aux MBS — première alerte européenne.`, parent: 'declenchement' },
      { id: 'bear-stearns', label: 'Bear Stearns', description: `Sauvée en mars 2008 par JPMorgan, avec garantie de la Fed.`, parent: 'declenchement' },

      { id: 'lehman', label: 'Lehman Brothers', description: `Faillite le 15 septembre 2008 — la plus grosse de l'histoire américaine.`, parent: 'contagion' },
      { id: 'aig', label: 'AIG', description: `Assureur systémique sauvé par 182 Mds $ à cause de ses expositions massives en CDS.`, parent: 'contagion' },
      { id: 'cds', label: 'CDS', description: `Contrats d'assurance sur défaut — leur explosion transforme la crise immobilière en crise bancaire globale.`, parent: 'contagion' },

      { id: 'tarp', label: 'TARP', description: `Plan Paulson : 700 Mds $ pour recapitaliser les banques américaines.`, parent: 'reponse' },
      { id: 'qe', label: 'Quantitative easing', description: `Achats massifs d'actifs par la Fed puis la BCE pour inonder le système de liquidités.`, parent: 'reponse' },
      { id: 'dodd-frank', label: 'Dodd-Frank Act', description: `Réforme financière américaine de 2010 : compensation centralisée, règle Volcker, agence CFPB.`, parent: 'reponse' }
    ],
    liens: []
  },

  cours: [
    {
      type: 'texte',
      titre: `Le terreau : argent facile et rêve immobilier`,
      contenu_md:
`Pour comprendre 2008, il faut remonter à 2001. Après l'éclatement de la bulle internet et les attentats du 11 septembre, la Réserve fédérale américaine dirigée par **Alan Greenspan** abaisse son taux directeur à 1 % en 2003 et l'y maintient. L'argent est presque gratuit.

Cette liquidité surabondante trouve un débouché naturel : l'**immobilier**. Le prix des maisons américaines double entre 2000 et 2006. Les ménages achètent, revendent, refinancent. Ils extraient de la valeur du bien qui prend chaque année. Les banques prêtent — de plus en plus généreusement, à des emprunteurs de moins en moins solvables.

Naît alors une catégorie particulière de crédit : le **subprime**. Destiné à des ménages à faible *credit score* (moins de 640), il porte souvent un taux variable, avec une phase initiale — le *teaser rate* — extrêmement basse (2-3 ans à 3-4 %), suivie d'un ajustement brutal à des taux beaucoup plus élevés. L'emprunteur, poussé par le vendeur, se dit qu'il aura le temps de refinancer avant l'ajustement, ou de revendre avec plus-value.`
    },

    {
      type: 'widget',
      titre: `La chaîne de la titrisation`,
      composant: 'ListeMethodes',
      params: {
        methodes: [
          { titre: `1. Le prêt (banque locale)`, description: `Un courtier propose un prêt subprime à un ménage américain. La banque signe — mais ne compte pas garder ce prêt à son bilan.` },
          { titre: `2. La titrisation (MBS)`, description: `Des milliers de ces prêts sont regroupés dans un *pool*. Une entité ad hoc (SPV) émet des titres — les [MBS]{accent} — adossés aux flux de remboursement de ce pool.` },
          { titre: `3. Le retranchement (CDO)`, description: `Les MBS sont eux-mêmes découpés en **tranches** hiérarchisées. La tranche senior est servie en premier — donc notée AAA. La tranche equity absorbe les premières pertes.` },
          { titre: `4. La notation`, description: `Les agences (S&P, Moody's, Fitch) apposent leurs notes. Un mille-feuille de prêts subprime peut ainsi contenir 80 % de tranches [AAA]{accent} — mêmes notes que la dette allemande.` },
          { titre: `5. La distribution mondiale`, description: `Ces produits sont vendus à des banques, des fonds, des collectivités locales, en Europe, en Asie, partout. Personne ne sait plus précisément quels prêts se cachent derrière quel titre.` }
        ]
      }
    },

    {
      type: 'encadre',
      label: `Le péché originel`,
      contenu_md: `La titrisation n'est pas mauvaise en soi — elle permet de disperser le risque. Le péché originel est que la banque qui *originaire* le prêt n'en supporte plus le défaut : elle n'a donc plus d'incitation à vérifier la solvabilité de l'emprunteur. C'est le [risque moral]{accent} au cœur de la chaîne.`
    },

    {
      type: 'texte',
      titre: `Le retournement (2006-2007)`,
      contenu_md:
`Deux forces se combinent pour retourner le marché. D'abord, la Fed remonte progressivement ses taux à partir de 2004, pour lutter contre l'inflation naissante : de 1 % en 2003 à 5,25 % en 2006. Les taux variables des subprimes explosent au moment où les *teaser rates* prennent fin. Les mensualités doublent parfois.

Ensuite, les prix de l'immobilier commencent à baisser mi-2006. L'emprunteur ne peut plus revendre avec plus-value pour rembourser. Il ne peut plus refinancer non plus, car la valeur du bien est devenue inférieure au capital emprunté (*negative equity*). Le seul choix qui reste est de faire défaut.

Les défauts se multiplient en 2007. Les MBS perdent de la valeur. Les CDO censés être AAA se révèlent parfaitement toxiques. L'onde de choc remonte la chaîne : les fonds monétaires exposés, les hedge funds spécialisés, puis les banques d'investissement elles-mêmes qui ont conservé au bilan les tranches les plus risquées.

Un moment souvent daté du **9 août 2007** : **BNP Paribas** bloque trois de ses fonds monétaires « en raison de la disparition de toute liquidité » sur le marché des MBS américains. C'est la première alerte européenne d'ampleur. Un mois plus tard, la banque britannique **Northern Rock** connaît la première ruée bancaire au Royaume-Uni depuis 1866.`
    },

    {
      type: 'widget',
      titre: `Chronologie 2007-2010`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: 'Fév. 2007', titre: `Alerte HSBC`, description: `HSBC provisionne 10,5 Mds $ sur ses subprimes — premier signal fort.` },
          { date: 'Août 2007', titre: 'Blocage BNP', description: `BNP Paribas gèle trois fonds monétaires. Le marché interbancaire européen se tend.` },
          { date: 'Sept. 2007', titre: `Ruée sur Northern Rock`, description: `Files d'attente devant les agences de la banque britannique — première panique publique.` },
          { date: 'Mars 2008', titre: 'Bear Stearns', description: `La banque d'investissement est rachetée en catastrophe par JPMorgan avec la garantie de la Fed.` },
          { date: '7 sept. 2008', titre: 'Fannie & Freddie', description: `Les deux géants publics du crédit immobilier US sont mis sous tutelle fédérale.` },
          { date: '15 sept. 2008', titre: 'Lehman Brothers', description: `Faillite de la 4ᵉ banque d'investissement US. Choc mondial, gel du marché interbancaire.` },
          { date: '16 sept. 2008', titre: `Sauvetage d'AIG`, description: `L'assureur reçoit 85 Mds $ (finalement 182) pour couvrir ses expositions CDS.` },
          { date: '3 oct. 2008', titre: 'TARP', description: `Le Congrès vote un plan de 700 Mds $ pour recapitaliser les banques américaines.` },
          { date: '2009', titre: `Récession mondiale`, description: `Contraction du PIB mondial, chômage massif, plans de relance keynésiens.` },
          { date: '2010', titre: `Crise grecque`, description: `La crise financière se mue en crise des dettes souveraines de la zone euro.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `<em>15 septembre 2008 :</em> le moment Lehman`,
      contenu_md:
`Pendant tout l'été 2008, les regards se tournent vers **Lehman Brothers**, quatrième banque d'investissement américaine, très exposée aux MBS. Son PDG Dick Fuld cherche désespérément un repreneur — la coréenne KDB, la britannique Barclays, la Bank of America. Aucun n'aboutit, notamment parce que le gouvernement américain, échaudé par le sauvetage de Bear Stearns six mois plus tôt et par le coût politique du sauvetage de Fannie et Freddie, refuse cette fois d'apporter la moindre garantie publique.

Le week-end du 13-14 septembre, le secrétaire au Trésor **Henry Paulson** convoque les grands banquiers de Wall Street pour organiser une solution privée. Elle échoue dans la nuit. Le lundi **15 septembre 2008**, Lehman se déclare en faillite. C'est la **plus grande faillite bancaire de l'histoire américaine** : 613 milliards de dollars de dette.

L'effet est immédiat et global. Personne ne sait plus qui détient quoi. Le [marché interbancaire]{accent} — où les banques se prêtent quotidiennement des liquidités — se fige. Aucune banque n'ose plus prêter à une autre, de peur qu'elle ne fasse défaut le lendemain. Sans ce marché, tout le système de crédit s'arrête. En 24 heures, le monde comprend que la question n'est plus « quelle banque va tomber ? » mais « le système bancaire mondial peut-il survivre à la semaine ? ».`
    },

    {
      type: 'texte',
      titre: `Le rôle catastrophique des <em>CDS</em>`,
      contenu_md:
`Ce qui transforme une crise immobilière en effondrement du système, ce sont les **Credit Default Swaps** — des contrats d'assurance sur défaut, développés massivement dans les années 2000. Un investisseur qui détient une obligation ou un MBS achète un CDS pour se protéger : si l'émetteur fait défaut, la contrepartie du CDS le rembourse.

Le problème : le marché des CDS a explosé — plus de **60 000 milliards de dollars** de notionnel en 2008, quatre fois le PIB américain — sans aucune régulation ni chambre de compensation. Chacun avait vendu des CDS à chacun, dans un enchevêtrement opaque.

Le cas emblématique est celui d'**AIG**, alors plus grand assureur mondial. Sa filiale londonienne AIG Financial Products avait vendu, sans provisionner correctement, plusieurs centaines de milliards de dollars de CDS sur des MBS subprime. Quand les MBS se déprécient, AIG doit poster du collatéral. Elle ne l'a pas. Elle risque de faire défaut, ce qui déclencherait en cascade des défauts chez toutes les banques mondiales qui lui avaient acheté sa protection — Goldman Sachs en tête. Le Trésor américain injecte finalement **182 milliards de dollars** dans AIG. Sans ce sauvetage, la faillite de Lehman aurait été suivie d'une réaction en chaîne probablement fatale au système.`
    },

    {
      type: 'texte',
      titre: `La réponse et les leçons`,
      contenu_md:
`La réponse politique est massive et rapide. Le **TARP** américain (*Troubled Asset Relief Program*), voté par le Congrès le 3 octobre 2008, alloue 700 milliards de dollars pour recapitaliser les banques. La Fed lance le premier de plusieurs programmes d'assouplissement quantitatif (*QE*) : achat massif d'actifs pour inonder le système de liquidités. La BCE suit avec plusieurs années de retard. En Europe, les États nationalisent partiellement Fortis, Dexia, RBS, Lloyds, Commerzbank.

Le coût final pour les contribuables est difficile à chiffrer. Aux États-Unis, une grande part du TARP a été in fine remboursée avec profit. Mais les coûts indirects — récession, chômage, dette publique gonflée — se comptent en milliers de milliards.

La régulation change en profondeur. Aux États-Unis, le **Dodd-Frank Act** (2010) impose la [compensation centralisée]{accent} des dérivés OTC, sépare les activités spéculatives de la banque de dépôt (règle Volcker), crée une agence de protection des consommateurs financiers. En Europe, **Bâle III** durcit les exigences en fonds propres et introduit des ratios de liquidité. Le G20 devient le lieu de coordination financière mondiale.

Politiquement, les conséquences sont durables. La montée des **populismes** des deux côtés de l'Atlantique dans les années 2010 est directement liée au sentiment — largement fondé — que les responsables de la crise (banquiers, régulateurs, agences de notation) n'ont subi aucune sanction personnelle, tandis que des millions de ménages ont perdu leur maison ou leur emploi.`
    }
  ],

  quiz: [
    {
      q: `Que sont les prêts subprime ?`,
      options: [
        `Des prêts à taux fixe pour primo-accédants`,
        `Des prêts immobiliers à ménages à faible solvabilité, souvent à taux variable`,
        `Des prêts d'État aux banques en difficulté`,
        `Des prêts entre banques centrales`
      ],
      correcte: 1,
      explication: `Les subprimes sont accordés à des emprunteurs à faible score de crédit, avec souvent un teaser rate initial très bas suivi d'un ajustement brutal.`
    },
    {
      q: `Qu'est-ce que la titrisation ?`,
      options: [
        `L'introduction en Bourse d'une entreprise`,
        `Le regroupement de créances (comme des prêts) en titres négociables revendus à des investisseurs`,
        `La cotation d'un titre en euros et en dollars`,
        `L'émission d'obligations par un État`
      ],
      correcte: 1,
      explication: `La titrisation transforme des créances non liquides (des prêts) en titres liquides (MBS) que les banques peuvent revendre — se déchargeant du risque.`
    },
    {
      q: `Quelle banque d'investissement fait faillite le 15 septembre 2008 ?`,
      options: [`Bear Stearns`, `Merrill Lynch`, `Lehman Brothers`, `Goldman Sachs`],
      correcte: 2,
      explication: `Lehman Brothers, 4ᵉ banque d'investissement américaine. Sa faillite — la plus grosse de l'histoire — provoque le gel du marché interbancaire mondial.`
    },
    {
      q: `Qu'est-ce qu'un CDS ?`,
      options: [
        `Un compte de dépôt sécurisé`,
        `Un contrat d'assurance sur défaut d'un actif ou d'un émetteur`,
        `Un dérivé sur cours du dollar`,
        `Un certificat de dépôt en Suisse`
      ],
      correcte: 1,
      explication: `Un Credit Default Swap est un contrat où une contrepartie s'engage, moyennant prime, à indemniser une autre en cas de défaut d'un émetteur — assurance qui s'est retournée contre le système via les expositions massives d'AIG.`
    },
    {
      q: `Pourquoi les agences de notation ont-elles noté AAA des produits toxiques ?`,
      options: [
        `Elles n'ont commis aucune erreur`,
        `Elles étaient payées par les émetteurs des produits qu'elles notaient — conflit d'intérêts`,
        `Elles ne notaient pas ces produits`,
        `Elles étaient obligées de suivre les recommandations de la Fed`
      ],
      correcte: 1,
      explication: `Le modèle « issuer pays » créait un conflit d'intérêts structurel : les banques choisissaient l'agence la plus généreuse. Ajouté à la sous-estimation de la corrélation des défauts, ce fut l'un des grands défauts de conception révélés par la crise.`
    },
    {
      q: `Quel plan américain est voté en octobre 2008 pour recapitaliser les banques ?`,
      options: [
        `Le Marshall Plan`,
        `Le TARP (Troubled Asset Relief Program)`,
        `Le New Deal`,
        `Le plan Volcker`
      ],
      correcte: 1,
      explication: `Le TARP de 700 milliards de dollars, porté par le secrétaire au Trésor Henry Paulson, permet à l'État fédéral de recapitaliser les principales banques américaines.`
    },
    {
      q: `Quelle réforme majeure encadre la finance américaine après la crise ?`,
      options: [
        `Le Glass-Steagall Act`,
        `Le Sarbanes-Oxley Act`,
        `Le Dodd-Frank Act`,
        `Le Patriot Act financier`
      ],
      correcte: 2,
      explication: `Le Dodd-Frank Act (2010) impose la compensation centralisée des dérivés OTC, sépare les activités spéculatives (règle Volcker) et crée une agence de protection des consommateurs financiers.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Subprime',
      definition: `Prêt immobilier américain accordé à un emprunteur à faible score de crédit (généralement < 640). Souvent assorti d'un taux variable et d'un *teaser rate* trompeur. Cœur combustible de la crise de 2007-2008.`
    },
    {
      terme: `Titrisation`,
      definition: `Opération financière qui transforme des créances (prêts, factures) en titres négociables adossés aux flux qu'elles génèrent. Permet à l'émetteur de sortir le risque de son bilan, mais crée du **risque moral** si l'incitation à sélectionner de bons emprunteurs disparaît.`
    },
    {
      terme: 'MBS',
      definition: `*Mortgage-Backed Security*. Titre adossé à un pool de prêts immobiliers. Les flux d'intérêt et de remboursement des emprunteurs alimentent les coupons du titre. Massivement utilisés aux États-Unis depuis les années 1970, ils deviennent toxiques quand ils incorporent des subprimes.`
    },
    {
      terme: 'CDO',
      definition: `*Collateralized Debt Obligation*. Produit structuré qui découpe un panier de titres (souvent des MBS) en tranches hiérarchisées : *senior*, *mezzanine*, *equity*. La tranche senior est servie en priorité — d'où sa notation AAA, souvent illusoire.`
    },
    {
      terme: 'CDS',
      definition: `*Credit Default Swap*. Contrat d'assurance sur défaut. L'acheteur paie une prime périodique ; le vendeur s'engage à indemniser en cas de défaut de l'émetteur sous-jacent. Explosion incontrôlée du marché des CDS (60 000 Mds $ en 2008) — vecteur central de la contagion.`
    },
    {
      terme: 'Risque moral',
      definition: `Situation où un agent modifie son comportement parce qu'il n'assume pas les conséquences de ses actes. Une banque qui titrise ses prêts n'a plus d'incitation à en vérifier la qualité — c'est le péché originel de la chaîne subprime.`
    },
    {
      terme: 'Marché interbancaire',
      definition: `Marché où les banques se prêtent quotidiennement des liquidités à très court terme. Son gel en septembre 2008, après la faillite de Lehman, a fait basculer la crise financière en crise systémique — plus aucune banque n'osant prêter à une autre.`
    },
    {
      terme: 'TARP',
      definition: `*Troubled Asset Relief Program*. Plan américain voté en octobre 2008 de 700 milliards de dollars, destiné à racheter les actifs toxiques puis, très vite, à recapitaliser directement les grandes banques. La majorité des fonds a été in fine remboursée à l'État.`
    },
    {
      terme: 'Quantitative easing (QE)',
      definition: `Politique monétaire non conventionnelle : la banque centrale achète massivement des actifs (obligations d'État, MBS) pour injecter de la liquidité dans le système et faire baisser les taux longs. Adoptée par la Fed dès 2008, par la BCE en 2015.`
    }
  ]
});
