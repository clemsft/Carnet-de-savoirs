/* ===================================================================
   PARCOURS — Géopolitique du XXIᵉ siècle
   ===================================================================
   Cinq foyers de tension qui dessinent la carte du monde contemporain :
   un détroit, une calotte glaciaire, une monnaie, une technologie, une
   orbite.
   =================================================================== */

window.CarnetDeSavoirs.registerParcours({
  meta: {
    id: 'geopolitique-xxie',
    titre: '<em>Géopolitique</em> du XXIᵉ siècle',
    domaine: 'Géopolitique',
    description: `La rivalité entre grandes puissances ne se joue plus seulement sur des champs de bataille, mais sur des **interfaces** — un détroit où passent 90 % des semi-conducteurs avancés, une banquise qui fond et ouvre des routes, des monnaies qui changent de support, des modèles d'IA qui rebattent la productivité, et des orbites où se déploient des constellations. Cinq étapes pour cartographier les fronts du siècle, du plus géographique au plus dématérialisé.`,
    duree_estimee_min: 175
  },
  etapes: [
    {
      slug: 'detroit-de-taiwan',
      note: `Premier front, le plus classique en apparence : un **détroit** de 180 km. Mais c'est aussi le point où passe l'essentiel des semi-conducteurs avancés produits par **TSMC**. La rivalité sino-américaine s'y cristallise à la fois sur le terrain militaire et sur la chaîne mondiale de la microélectronique.`
    },
    {
      slug: 'arctique',
      note: `Plus au nord, un autre théâtre s'ouvre — littéralement. La **fonte** de la banquise libère des routes maritimes (passage du Nord-Est, du Nord-Ouest) et des gisements d'hydrocarbures. Russie, États-Unis, Chine, pays nordiques s'y positionnent pour un siècle où l'**Arctique** deviendra navigable.`
    },
    {
      slug: 'monnaies-numeriques',
      note: `Aux fronts territoriaux s'ajoutent les fronts monétaires. **Bitcoin**, stablecoins et monnaies numériques de banque centrale ne sont pas que des innovations techniques : ce sont trois projets politiques distincts, qui contestent ou renforcent l'hégémonie du **dollar** comme monnaie de réserve mondiale.`
    },
    {
      slug: 'ia-generative',
      note: `Le levier suivant est cognitif. L'**IA générative** redistribue la productivité, la souveraineté industrielle et le contrôle de l'information. Maîtriser les modèles, les puces qui les entraînent et les données qui les nourrissent devient un enjeu de puissance — qui boucle directement sur Taïwan.`
    },
    {
      slug: 'conquete-spatiale-moderne',
      note: `Dernier théâtre, le plus haut : l'**orbite basse**. SpaceX, le programme chinois, l'Artemis lunaire, les constellations de satellites — la **conquête spatiale moderne** n'est plus le duel de la guerre froide, mais un échiquier où s'imbriquent acteurs privés, militaires et stratégies d'écosystème.`
    }
  ]
});
