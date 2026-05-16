/* ===================================================================
   PARCOURS — L'économie moderne
   ===================================================================
   Du capitalisme marchand des Routes de la Soie à la consommation de
   signes du XXIᵉ siècle, en passant par le cœur monétaire et ses
   réinventions numériques.
   =================================================================== */

window.CarnetDeSavoirs.registerParcours({
  meta: {
    id: 'economie-moderne',
    titre: 'L\'<em>économie</em> moderne, en cinq actes',
    domaine: 'Économie',
    description: `Comprendre comment une poignée de marchands italiens du XIIᵉ siècle est devenue la civilisation des plateformes numériques. Cinq étapes pour suivre le fil : naissance des grands réseaux marchands, théorisation du capitalisme, lecture monétaire (inflation, banques centrales), réinvention numérique de la monnaie, et enfin la consommation comme nouveau régime de sens.`,
    duree_estimee_min: 160
  },
  etapes: [
    {
      slug: 'route-de-la-soie',
      note: `Avant tout système économique, des **circuits**. Pendant quinze siècles, les Routes de la Soie ont fait circuler marchandises, techniques, religions et idées entre la Chine et la Méditerranée. C'est sur ces réseaux que se construit le **capitalisme marchand** — comptoirs, lettres de change, foires, premières banques italiennes.`
    },
    {
      slug: 'capitalisme',
      note: `Une fois les réseaux en place, le système se théorise. Propriété privée, libre marché, accumulation, salariat : quatre piliers, deux révolutions (marchande puis industrielle), trois grandes lectures (Smith, Marx, Weber). C'est la matrice à laquelle s'accrochent les étapes suivantes.`
    },
    {
      slug: 'inflation',
      note: `Le capitalisme tourne, mais ses prix bougent. Pourquoi ? L'**inflation** est l'instrument de lecture le plus parlant du capitalisme contemporain : elle révèle ses crises (Weimar, années 1970, post-COVID) autant que ses outils de pilotage (taux directeur, banques centrales).`
    },
    {
      slug: 'monnaies-numeriques',
      note: `Et si la monnaie elle-même changeait de support ? Bitcoin, stablecoins et monnaies numériques de banque centrale racontent trois projets de société radicalement différents — entre **désintermédiation** cypherpunk, **dollarisation** algorithmique et **traçabilité** étatique.`
    },
    {
      slug: 'consumerisme',
      note: `Dernier tournant : ce que le capitalisme fait à nos vies. Le **consumérisme** n'est plus la simple satisfaction de besoins, c'est un régime où la consommation devient identité, valeur sociale, sens. Bourdieu, Baudrillard, Galbraith te donnent les outils pour le penser.`
    }
  ]
});
