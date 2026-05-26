window.CarnetDeSavoirs.register({
  meta: {
    id: 'epargne-et-placements',
    titre: 'L\'<em>épargne</em> et les placements',
    domaines: ['Économie'],
    tags: ['épargne', 'placement', 'PEA', 'assurance-vie', 'intérêts composés', 'ETF', 'fiscalité'],
    difficulte: 2,
    duree_estimee_min: 45,
    prerequis: [],
    lie_a: ['inflation'],
    date_creation: '2026-05-21',
    date_maj: '2026-05-21'
  },

  resume: `Comprendre comment faire travailler son argent : la distinction entre enveloppe fiscale et support d'investissement, l'arbitrage entre liquidité et rendement, la magie des intérêts composés sur le long terme, et le paysage des enveloppes françaises (Livret A, PEA, assurance-vie).`,

  points_cles: [
    'Une **enveloppe fiscale** (PEA, assurance-vie) n\'est pas un placement : c\'est un contenant avec un cadre fiscal propre. Le placement est ce qu\'on met dedans.',
    'Tout argent placé arbitre entre [liquidité]{accent} (récupérer vite), [rendement]{accent} (gagner plus) et [risque]{accent} (perte possible). Aucun produit n\'optimise les trois en même temps.',
    'Les **intérêts composés** transforment de petits versements réguliers en patrimoine conséquent sur 20-40 ans. Le temps est l\'allié principal de l\'épargnant.',
    'Le [rendement réel]{accent} se calcule en retranchant l\'inflation au rendement nominal. Un Livret A à 2,4 % avec 2 % d\'inflation ne fait gagner que 0,4 % de pouvoir d\'achat.',
    'L\'ancienneté d\'une enveloppe (5 ans pour le PEA, 8 ans pour l\'assurance-vie) débloque une fiscalité avantageuse, d\'où l\'intérêt d\'**ouvrir tôt**, même symboliquement — on appelle cela *prendre date*.',
    'La **diversification** via un ETF large (panier de 1500+ entreprises mondiales) protège contre la défaillance d\'une entreprise particulière, sans renoncer au rendement des actions.',
    'Sur 20 ans glissants, les actions diversifiées mondiales n\'ont historiquement jamais été perdantes. Mais sur 1 an, la volatilité reste forte — l\'horizon de placement transforme l\'incertitude en quasi-certitude.',
    'Les **frais** sont l\'ennemi silencieux du long terme : 2 % de frais annuels érodent environ 40 % du capital final sur 30 ans.'
  ],

  carte_mentale: {
    central: 'epargne',
    noeuds: [
      { id: 'epargne', label: 'Épargne & placements', description: 'L\'art de faire travailler son argent en arbitrant entre [liquidité]{accent}, [rendement]{accent} et [risque]{accent}.' },

      { id: 'concepts', label: 'Concepts clés', description: 'Les notions à maîtriser avant tout choix de placement.' },
      { id: 'enveloppes', label: 'Enveloppes fiscales', description: 'Les contenants juridiques qui définissent la fiscalité de ce qu\'on place dedans.' },
      { id: 'supports', label: 'Supports d\'investissement', description: 'Les actifs concrets qu\'on glisse dans une enveloppe.' },
      { id: 'principes', label: 'Principes d\'action', description: 'Les règles de conduite qui distinguent un bon investisseur de longue durée.' },

      { id: 'liquidite', label: 'Liquidité vs rendement', description: 'Le compromis fondamental : plus on accepte de bloquer son argent, plus on peut espérer gagner.', parent: 'concepts' },
      { id: 'rendement-reel', label: 'Rendement réel', description: 'Rendement nominal moins inflation. C\'est ce qu\'on gagne **en pouvoir d\'achat**.', parent: 'concepts' },
      { id: 'interets-composes', label: 'Intérêts composés', description: 'Les intérêts produisent à leur tour des intérêts. Mécanisme exponentiel qui récompense la durée.', parent: 'concepts' },
      { id: 'prendre-date', label: 'Prendre date', description: 'L\'ancienneté d\'une enveloppe compte plus que ce qu\'il y a dedans. Ouvrir tôt fait courir le compteur fiscal.', parent: 'concepts' },

      { id: 'livret-a', label: 'Livret A', description: 'Défiscalisé, liquide, plafond 22 950 €, taux fixé par l\'État. Idéal pour la réserve de sécurité.', parent: 'enveloppes' },
      { id: 'pea', label: 'PEA', description: 'Plan d\'Épargne en Actions. Après 5 ans : 0 % d\'impôt sur le revenu (juste 17,2 % de prélèvements sociaux).', parent: 'enveloppes' },
      { id: 'assurance-vie', label: 'Assurance-vie', description: 'Enveloppe la plus souple. Fiscalité douce après 8 ans. Avantages successoraux significatifs.', parent: 'enveloppes' },
      { id: 'per', label: 'PER', description: 'Plan Épargne Retraite. Déduction fiscale à l\'entrée, blocage jusqu\'à la retraite. Utile aux contribuables fortement imposés.', parent: 'enveloppes' },

      { id: 'fonds-euros', label: 'Fonds euros', description: 'Support à capital garanti dans l\'assurance-vie. Rendement modeste (~2,5 %), risque nul.', parent: 'supports' },
      { id: 'etf', label: 'ETF', description: 'Panier diversifié d\'actions répliquant un indice. Frais très bas, simple, performant sur le long terme.', parent: 'supports' },
      { id: 'scpi', label: 'SCPI', description: 'Sociétés Civiles de Placement Immobilier. Achat de parts d\'un patrimoine immobilier diversifié, géré par un professionnel.', parent: 'supports' },
      { id: 'actions', label: 'Actions', description: 'Titres de propriété d\'une entreprise cotée. Performance liée à une seule société : risque élevé en concentré.', parent: 'supports' },

      { id: 'diversification', label: 'Diversification', description: 'Ne jamais miser sur un seul actif. Un ETF Monde répartit le risque sur 1500+ entreprises.', parent: 'principes' },
      { id: 'patience', label: 'Patience', description: 'L\'horizon long lisse la volatilité. La pire ennemie de l\'épargnant : la panique pendant un krach.', parent: 'principes' },
      { id: 'dca', label: 'DCA', description: '*Dollar Cost Averaging* : étaler ses achats dans le temps pour lisser le prix moyen et neutraliser le timing.', parent: 'principes' },
      { id: 'frais', label: 'Surveillance des frais', description: 'Sur 30 ans, 2 % de frais annuels mangent ~40 % du capital final. Toujours comparer.', parent: 'principes' }
    ],
    liens: [
      { de: 'pea', vers: 'etf' },
      { de: 'assurance-vie', vers: 'fonds-euros' },
      { de: 'assurance-vie', vers: 'scpi' },
      { de: 'interets-composes', vers: 'patience' }
    ]
  },

  cours: [
    {
      type: 'texte',
      titre: 'Le malentendu fondamental : <em>enveloppe</em> ou placement ?',
      contenu_md:
`La confusion la plus répandue chez l'épargnant débutant tient en une phrase : *« je place mon argent en bourse »*, ou *« je place dans un PEA »*. Ces deux affirmations désignent en réalité **deux choses radicalement différentes**.

La [bourse]{accent} est un **marché**. Un lieu d'échange où s'achètent et se vendent des titres : actions, obligations, ETF. C'est le supermarché.

Le [PEA]{accent} est une **enveloppe fiscale**. Un contenant juridique avec un cadre fiscal propre, dans lequel on range les titres qu'on a achetés en bourse. C'est le sac de courses.

On ne place pas *dans la bourse* — on y achète. On ne place pas *dans le PEA* — on y stocke. La distinction paraît subtile mais elle conditionne tout le reste : car la fiscalité dépend de l'enveloppe, pas du contenu.`
    },

    {
      type: 'encadre',
      label: 'À retenir',
      contenu_md: 'Une [enveloppe fiscale]{accent} est un contenant juridique (PEA, assurance-vie, PER, compte-titres). Un [support d\'investissement]{accent} est ce qu\'on met dedans (actions, ETF, fonds euros, SCPI). Les deux décisions sont **distinctes** : *quelle enveloppe ouvrir* est une question de fiscalité ; *quel support y mettre* est une question de risque et de rendement.'
    },

    {
      type: 'texte',
      titre: 'L\'arbitrage liquidité / rendement / risque',
      contenu_md:
`Aucun placement n'est simultanément liquide, rentable et sans risque. Ce trilemme structure toute la finance personnelle.

La [liquidité]{accent} mesure la rapidité avec laquelle on peut récupérer son argent sans pénalité. Le Livret A est ultra-liquide (quelques heures). Un appartement locatif l'est très peu (plusieurs mois).

Le [rendement]{accent} est ce que le placement rapporte, généralement en pourcentage annuel. Un Livret A rapporte ~2,4 %. Les actions mondiales, sur le long terme, environ 7 % en moyenne annualisée.

Le [risque]{accent} mesure la probabilité et l'ampleur d'une perte temporaire ou définitive. Un Livret A : aucun risque. Une action individuelle : risque de perte totale possible.

Tout produit financier se positionne dans ce triangle, et **renoncer à une dimension permet d'en gagner une autre**. Renoncer à la liquidité (PEL bloqué, immobilier) peut augmenter le rendement. Accepter du risque (actions) ouvre des rendements supérieurs. Vouloir les trois simultanément est l'apanage des arnaques.`
    },

    {
      type: 'widget',
      titre: 'Les trois poches d\'épargne, par horizon',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          { tag: '0 — 6 mois', titre: 'Sécurité', description: 'Coussin d\'imprévus. **Liquidité maximale**, risque nul, rendement faible accepté. Outils : Livret A, LDDS, Livret Jeune. Cible : 2 à 3 mois de dépenses.' },
          { tag: '2 — 10 ans', titre: 'Projets', description: 'Achat immobilier, voyage, études. Capital quasi-garanti, sortie possible. Outils : PEL, fonds euros d\'assurance-vie, comptes à terme.' },
          { tag: '10 ans et +', titre: 'Long terme', description: 'Constitution de patrimoine, préparation retraite. Risque accepté contre rendement supérieur. Outils : PEA, unités de compte en assurance-vie, SCPI, immobilier locatif.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le rendement <em>nominal</em> et le rendement <em>réel</em>',
      contenu_md:
`Un placement affiche toujours un rendement [nominal]{accent} : le chiffre brut annoncé. Livret A à 2,4 %. ETF Monde à 7 %. Compte à terme à 3 %.

Mais ce chiffre ne mesure pas le **gain de pouvoir d'achat**. L'inflation érode chaque année la valeur de l'argent : ce qu'on pouvait acheter cette année coûte un peu plus l'année suivante. Le [rendement réel]{accent} retranche l'inflation au rendement nominal.

Quand l'inflation est à 2 % et le Livret A à 2,4 %, le gain réel n'est que de **0,4 %**. Et lorsque l'inflation grimpe au-delà du taux du livret — comme en 2022-2023 où elle a culminé à 5-6 % alors que le Livret A plafonnait à 3 % —, le rendement réel **devient négatif** : l'argent immobilisé sur ce livret perdait du pouvoir d'achat chaque mois.

C'est pourquoi la *sécurité* d'un livret n'est pas synonyme d'*absence de perte*. Le capital nominal est préservé ; le capital réel, lui, peut s'éroder silencieusement.`
    },

    {
      type: 'widget',
      titre: 'Rendement nominal de quelques produits courants',
      composant: 'SelecteurValeurs',
      params: {
        unite: '% / an',
        options: [
          { label: 'Livret A', valeur: 2.4, description: 'Taux fixé par l\'État, révisé tous les 6 mois. Défiscalisé.' },
          { label: 'LEP', valeur: 3.5, description: 'Livret d\'Épargne Populaire. Réservé sous condition de ressources. Défiscalisé. Taux supérieur au Livret A.' },
          { label: 'Fonds euros', valeur: 2.8, description: 'Support à capital garanti dans une assurance-vie. Rendement variable selon l\'assureur.' },
          { label: 'SCPI', valeur: 4.5, description: 'Distribution moyenne des Sociétés Civiles de Placement Immobilier. Fiscalité lourde en direct, plus douce en assurance-vie.' },
          { label: 'ETF Monde', valeur: 7, description: 'Moyenne historique annualisée sur plusieurs décennies. **Pas une garantie** — volatilité forte d\'année en année.' },
          { label: 'Inflation', valeur: 2, description: 'Repère : tout rendement inférieur à ce chiffre fait perdre du pouvoir d\'achat.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La magie des <em>intérêts composés</em>',
      contenu_md:
`Le concept le plus puissant — et le plus contre-intuitif — de la finance personnelle est celui des [intérêts composés]{accent}. Le principe : les intérêts gagnés une année produisent à leur tour des intérêts l'année suivante. Le capital grossit *exponentiellement*, non *linéairement*.

Sur 5 ans, l'effet est modeste. Sur 15 ans, il devient sensible. Sur 30 ou 40 ans, il devient spectaculaire. C'est pour cette raison qu'**un euro placé à 20 ans vaut plusieurs fois un euro placé à 40 ans**, à versement total identique.

Cette mécanique récompense deux choses : la **durée** de placement, et la **régularité** des versements. Elle punit en revanche durement les frais : 1 % de frais annuels en plus, c'est environ 20 % de capital final en moins sur 30 ans.`
    },

    {
      type: 'widget',
      composant: 'Equation',
      params: {
        tex: 'C_n = C_0 \\cdot (1 + r)^n',
        legende: 'Formule des intérêts composés. C₀ : capital initial. r : taux d\'intérêt annuel. n : nombre d\'années. La croissance est exponentielle en n.',
        affichage: 'block'
      }
    },

    {
      type: 'widget',
      titre: 'Effet du temps sur 100 € versés mensuellement à 7 % par an',
      composant: 'CurseurParametrique',
      params: {
        label: 'Durée du placement',
        min: 5,
        max: 45,
        step: 1,
        valeurInitiale: 10,
        unite: 'ans',
        degradePiste: '#5b8def 0%, #5b8def 22%, #ffb86c 22%, #ffb86c 55%, #ff6b35 55%, #ff6b35 100%',
        seuils: [
          {
            jusqua: 15,
            titre: 'Phase d\'amorçage',
            description: 'Sur 5 à 15 ans, le capital reste dominé par les versements. Pour 10 ans : ~17 000 € pour 12 000 € versés. L\'effet boule de neige est encore discret.',
            couleur: '#5b8def'
          },
          {
            jusqua: 30,
            titre: 'Effet boule de neige',
            description: 'Entre 15 et 30 ans, la part des intérêts dépasse celle des versements. Pour 25 ans : ~81 000 € pour 30 000 € versés. **Les intérêts produisent désormais plus que les versements eux-mêmes.**',
            couleur: '#ffb86c'
          },
          {
            jusqua: Infinity,
            titre: 'Explosion exponentielle',
            description: 'Au-delà de 30 ans, la croissance devient spectaculaire. Pour 40 ans : ~264 000 € pour 48 000 € versés. Plus de **80 % du capital final** provient des intérêts composés, pas des versements.',
            couleur: '#ff6b35'
          }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'L\'idée centrale',
      contenu_md: 'Une enveloppe fiscale comme le **PEA** ou l\'**assurance-vie** confère ses avantages fiscaux après une durée d\'ancienneté du contrat (5 ans pour le PEA, 8 ans pour l\'assurance-vie). Ouvrir l\'enveloppe **dès que possible**, même avec un dépôt symbolique, fait courir ce compteur en arrière-plan. À 25 ans, une assurance-vie ouverte à 19 ans aura déjà passé son cap fiscal. On appelle cette pratique [prendre date]{accent}.'
    },

    {
      type: 'texte',
      titre: 'Diversification : la défense par le nombre',
      contenu_md:
`Acheter une action unique, c'est miser sur une seule entreprise. Si elle prospère, le gain est important ; si elle fait faillite, la perte est totale. *Nokia* en 2000, *Kodak*, *Lehman Brothers* — l'histoire boursière abonde d'exemples.

La [diversification]{accent} consiste à répartir le risque sur des centaines, voire des milliers d'entreprises simultanément. L'outil moderne pour cela est l'[ETF]{accent} (*Exchange-Traded Fund*), un fonds coté qui réplique un indice — par exemple le **MSCI World**, qui contient plus de 1500 grandes entreprises dans 23 pays développés.

Avec un seul ETF Monde, on possède une fraction de Apple, Microsoft, Nestlé, LVMH, Toyota, Samsung et de mille autres. Si l'une d'elles fait faillite, l'impact sur le portefeuille est marginal. **Le risque spécifique disparaît ; seul subsiste le risque global du système économique mondial**, beaucoup plus tolérable et historiquement positif sur le long terme.`
    },

    {
      type: 'widget',
      titre: 'Les quatre principes d\'un investissement durable',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          { titre: 'Diversifier largement', description: 'Préférer un **ETF Monde** à une action individuelle. Le risque spécifique d\'une entreprise s\'efface dans un panier de 1500 titres.' },
          { titre: 'Tenir dans la durée', description: 'Sur des périodes de **20 ans glissants**, aucun investissement diversifié en actions mondiales n\'a historiquement été perdant. Ne jamais vendre par panique pendant un krach.' },
          { titre: 'Automatiser les versements', description: 'Un virement programmé mensuel évite l\'oubli, la tentation de *timer* le marché, et impose la régularité. C\'est aussi la mise en pratique du [DCA]{accent} (étalement temporel des achats).' },
          { titre: 'Surveiller les frais', description: 'Comparer systématiquement les frais d\'entrée, de gestion et d\'arbitrage. Sur 30 ans, **1 % de frais annuels** consomme environ **20 % du capital final**.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le paysage des <em>enveloppes</em> françaises',
      contenu_md:
`Le système français propose une mosaïque d'enveloppes fiscales, chacune avec une logique propre. Maîtriser leur articulation est l'essentiel du travail.

Le [Livret A]{accent} et le [LDDS]{accent}, défiscalisés et plafonnés (respectivement 22 950 € et 12 000 €), constituent la **couche de sécurité**. Liquides en quelques heures, rendement modeste, aucun risque.

Le [PEL]{accent} (Plan Épargne Logement) est une niche orientée projet immobilier. Sa fiscalité a été durcie après 2018 : les PEL ouverts avant cette date conservent une fiscalité avantageuse, ceux d'après subissent la *flat tax* de 30 % sur les intérêts.

Le [PEA]{accent} est l'enveloppe **reine pour les actions européennes et mondiales** (via ETF éligibles). Après 5 ans, les gains ne supportent plus que les prélèvements sociaux (17,2 %) — pas d'impôt sur le revenu. Une variante existe pour les 18-25 ans rattachés au foyer fiscal de leurs parents : le **PEA Jeunes**.

L'[assurance-vie]{accent} est l'enveloppe la plus **polyvalente** : on peut y loger fonds euros (sécurisés), unités de compte (ETF, SCPI), et bénéficier après 8 ans d'un abattement annuel sur les gains. Avantage successoral significatif en cas de transmission.

Le [PER]{accent} (Plan Épargne Retraite) permet de **déduire ses versements du revenu imposable**, en contrepartie d'un blocage jusqu'à la retraite. Intéressant pour les contribuables dans les tranches d'imposition élevées (30 %, 41 %, 45 %).

Enfin le [compte-titres ordinaire]{accent} (CTO) n'a aucun avantage fiscal mais aucune contrainte non plus : tous les titres mondiaux y sont accessibles. Utile une fois les autres enveloppes saturées.`
    },

    {
      type: 'widget',
      titre: 'Repères chronologiques d\'une stratégie d\'épargne',
      composant: 'Frise',
      params: {
        evenements: [
          { date: 'Jour 1', titre: 'Ouverture des enveloppes', description: 'Ouvrir un **PEA** et une **assurance-vie**, même avec un dépôt symbolique. Faire démarrer les compteurs fiscaux (5 ans et 8 ans).' },
          { date: '~ 1 an', titre: 'Coussin de sécurité', description: 'Atteindre 2 à 3 mois de dépenses sur Livret A / LDDS. Avant cela, **aucun investissement risqué**.' },
          { date: '~ 5 ans', titre: 'Maturité fiscale du PEA', description: 'Les gains du PEA ne supportent plus que les **prélèvements sociaux** (17,2 %). Plus d\'impôt sur le revenu.' },
          { date: '~ 8 ans', titre: 'Maturité fiscale de l\'assurance-vie', description: 'Abattement annuel de **4 600 €** (personne seule) sur les gains lors des retraits.' },
          { date: '~ 15 ans', titre: 'Effet boule de neige', description: 'Les intérêts annuels deviennent **comparables aux versements** annuels. Le capital prend son envol.' },
          { date: '~ 30+ ans', titre: 'Explosion exponentielle', description: 'Plus de **80 % du patrimoine accumulé** provient des intérêts composés, pas des versements. Récolte du temps long.' }
        ]
      }
    }
  ],

  quiz: [
    {
      q: 'Quelle est la différence entre le PEA et la bourse ?',
      options: [
        'Aucune, ce sont deux synonymes',
        'Le PEA est un type d\'action, la bourse est l\'endroit où on l\'achète',
        'Le PEA est une enveloppe fiscale, la bourse est un marché d\'échange',
        'Le PEA est réservé aux experts, la bourse à tous'
      ],
      correcte: 2,
      explication: 'Le PEA est un contenant juridique avec un cadre fiscal propre. La bourse est le lieu (le marché) où s\'achètent les titres qu\'on glisse ensuite dans le PEA.'
    },
    {
      q: 'Un Livret A rapporte 2,4 % par an. L\'inflation est à 2 %. Quel est le rendement réel ?',
      options: [
        '4,4 %',
        '2,4 %',
        '0,4 %',
        '−0,4 %'
      ],
      correcte: 2,
      explication: 'Le rendement réel se calcule en retranchant l\'inflation au rendement nominal : 2,4 % − 2 % = 0,4 %. C\'est le gain effectif en pouvoir d\'achat.'
    },
    {
      q: 'Pourquoi est-il pertinent d\'ouvrir une assurance-vie tôt, même avec un dépôt symbolique ?',
      options: [
        'Pour bénéficier de meilleurs taux d\'intérêt',
        'Pour faire démarrer le compteur d\'ancienneté qui débloque la fiscalité avantageuse à 8 ans',
        'Pour que la banque accorde plus de crédits par la suite',
        'Cela n\'a aucun intérêt particulier'
      ],
      correcte: 1,
      explication: 'C\'est le principe de la *prise de date* : la fiscalité avantageuse de l\'assurance-vie se débloque après 8 ans d\'ancienneté du contrat, quel que soit le montant placé pendant cette période.'
    },
    {
      q: 'Sur 40 ans, 100 € versés chaque mois à 7 % par an donnent environ 264 000 €. Quelle part vient des versements eux-mêmes ?',
      options: [
        'Environ 18 % (48 000 €)',
        'Environ 40 % (105 000 €)',
        'Environ 60 % (160 000 €)',
        'Environ 85 % (224 000 €)'
      ],
      correcte: 0,
      explication: 'On verse 100 € × 12 × 40 = 48 000 €. Tout le reste, soit environ 216 000 € (82 %), provient des intérêts composés. C\'est précisément ce qui fait la puissance du temps long.'
    },
    {
      q: 'Pourquoi un ETF Monde est-il généralement préféré à l\'achat d\'une action unique ?',
      options: [
        'Un ETF Monde rapporte toujours plus qu\'une action',
        'Il dilue le risque sur plus de 1500 entreprises, supprimant le risque spécifique',
        'Il bénéficie d\'une fiscalité plus avantageuse',
        'Il est plus liquide qu\'une action'
      ],
      correcte: 1,
      explication: 'La diversification d\'un ETF Monde fait disparaître le risque lié à une entreprise particulière. Si l\'une fait faillite, l\'impact sur le portefeuille est marginal — seul subsiste le risque global du système économique mondial.'
    },
    {
      q: 'Après combien d\'années d\'ancienneté le PEA bénéficie-t-il de sa fiscalité avantageuse complète ?',
      options: [
        '2 ans',
        '5 ans',
        '8 ans',
        '15 ans'
      ],
      correcte: 1,
      explication: 'Après 5 ans d\'ancienneté du PEA, les gains ne supportent plus que les prélèvements sociaux (17,2 %) et sont totalement exonérés d\'impôt sur le revenu.'
    },
    {
      q: 'Sur quelle durée minimale les marchés actions diversifiés ont-ils historiquement toujours été positifs ?',
      options: [
        '1 an',
        '5 ans',
        '10 ans',
        '20 ans'
      ],
      correcte: 3,
      explication: 'Sur des périodes glissantes de 20 ans, aucun krach historique (1929, 1973, 2000, 2008, 2020) n\'a produit une performance négative pour un investisseur en actions mondiales diversifiées. Sur 10 ans, des périodes perdantes existent. Sur 1 an, la volatilité reste forte.'
    },
    {
      q: 'Quel impact ont 2 % de frais annuels supplémentaires sur le capital final d\'un placement à 30 ans ?',
      options: [
        'Aucun impact significatif, c\'est marginal',
        'Une perte d\'environ 5 % du capital final',
        'Une perte d\'environ 15 % du capital final',
        'Une perte d\'environ 40 % du capital final'
      ],
      correcte: 3,
      explication: 'Les frais agissent comme des intérêts composés négatifs. Sur 30 ans, 2 % de frais annuels érodent environ 40 % du capital final. C\'est pour cette raison qu\'il faut systématiquement comparer les frais avant de souscrire un produit.'
    }
  ],

  vocabulaire: [
    {
      terme: 'Enveloppe fiscale',
      definition: 'Contenant juridique (PEA, assurance-vie, PER, CTO) dans lequel on loge des supports d\'investissement. Chaque enveloppe possède un **cadre fiscal propre** (durée d\'éligibilité, abattements, taux applicables). Une enveloppe n\'est pas elle-même un placement : elle définit la fiscalité de ce qu\'on met dedans.'
    },
    {
      terme: 'Liquidité',
      definition: 'Capacité à convertir un actif en espèces rapidement et sans pénalité. Un Livret A est ultra-liquide (récupération en heures), un appartement très peu (vente en mois). En finance, la liquidité s\'arbitre généralement contre le rendement.'
    },
    {
      terme: 'Rendement réel',
      definition: 'Rendement nominal d\'un placement diminué du taux d\'inflation. Mesure le **gain effectif en pouvoir d\'achat**, et non en valeur monétaire faciale. Un rendement réel négatif (inflation > taux du placement) signifie que l\'épargne s\'érode malgré les intérêts perçus.'
    },
    {
      terme: 'Intérêts composés',
      definition: 'Mécanisme par lequel les intérêts produits une année génèrent à leur tour des intérêts les années suivantes. Croissance **exponentielle** du capital, modélisée par C_n = C_0(1+r)^n. Sur le long terme (30 ans et plus), les intérêts composés dépassent généralement les versements eux-mêmes en contribution au capital final.'
    },
    {
      terme: 'Prendre date',
      definition: 'Ouvrir une enveloppe fiscale (notamment PEA ou assurance-vie) **dès que possible**, même avec un dépôt symbolique, afin de faire démarrer le compteur d\'ancienneté qui débloque la fiscalité avantageuse (5 ans pour le PEA, 8 ans pour l\'assurance-vie). Pratique standard en gestion de patrimoine.'
    },
    {
      terme: 'ETF',
      definition: '*Exchange-Traded Fund*. Fonds coté en bourse qui réplique passivement un indice (ex. MSCI World, S&P 500, CAC 40). Permet d\'acquérir en une seule transaction une **fraction de centaines ou milliers d\'entreprises**, à frais très bas (souvent <0,5 % par an). Outil central de la diversification.'
    },
    {
      terme: 'Diversification',
      definition: 'Stratégie consistant à répartir l\'épargne sur de **nombreux actifs distincts** (entreprises, secteurs, zones géographiques) pour neutraliser le risque spécifique de chacun. Mathématiquement, elle réduit la variance globale du portefeuille sans pénaliser le rendement espéré.'
    },
    {
      terme: 'DCA',
      definition: '*Dollar Cost Averaging*. Technique consistant à investir une somme fixe à **intervalles réguliers**, indépendamment du niveau du marché. Lisse le prix d\'achat moyen, neutralise la tentation de *timer* le marché, et discipline l\'épargnant.'
    },
    {
      terme: 'Coût d\'opportunité',
      definition: 'Manque à gagner résultant du choix d\'un placement plutôt qu\'un autre, calculé par rapport à la **meilleure alternative renoncée**. Mettre 20 000 € sur un Livret A à 2,4 % alors qu\'un ETF Monde à 7 % était envisageable représente un coût d\'opportunité de ~4,6 % par an.'
    },
    {
      terme: 'Effet de levier',
      definition: 'Mécanisme par lequel un investisseur **emprunte** pour amplifier la mise sur un actif. Particulièrement utilisé en immobilier : la banque finance 80-100 % du bien, l\'investisseur ne mobilise qu\'un faible apport personnel mais bénéficie de la totalité de la plus-value et des loyers. Démultiplie symétriquement les gains et les pertes.'
    }
  ]
});
