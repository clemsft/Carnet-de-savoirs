/* ===================================================================
   PARCOURS — Du cosmos à la conscience
   ===================================================================
   Six étapes pour traverser l'histoire de l'univers, depuis le Big
   Bang jusqu'à un cerveau qui se demande d'où il vient.
   =================================================================== */

window.CarnetDeSavoirs.registerParcours({
  meta: {
    id: 'du-cosmos-a-lhomme',
    titre: 'Du <em>cosmos</em> à la conscience',
    domaine: 'Astrophysique',
    description: `La plus longue histoire qu'on puisse raconter. 13,8 milliards d'années en six étapes : l'**univers primordial** se déploie, certaines régions s'effondrent en **trous noirs**, l'**espace-temps** se laisse modeler par la gravité, la **photosynthèse** allume la biosphère, l'**évolution** produit le vivant complexe, et finit par fabriquer un **cerveau** capable de tout reconstituer en pensée.`,
    duree_estimee_min: 200
  },
  etapes: [
    {
      slug: 'big-bang',
      note: `Acte un : tout s'allume. Pas une explosion dans l'espace, mais une **expansion** de l'espace lui-même. La cosmologie moderne a su reconstituer cette histoire grâce à Hubble, à Penzias et Wilson, puis aux satellites COBE, WMAP, Planck.`
    },
    {
      slug: 'trous-noirs',
      note: `À mesure que les étoiles se forment et meurent, certaines régions deviennent si compactes que rien n'en ressort — pas même la lumière. Les **trous noirs** sont les objets les plus extrêmes de l'univers, et leurs cousins supermassifs structurent le cœur des galaxies.`
    },
    {
      slug: 'theorie-relativite',
      note: `Pour comprendre ces extrêmes, il faut **Einstein**. La relativité restreinte (1905) détruit le temps absolu ; la relativité générale (1915) transforme la gravité en géométrie. C'est ce cadre qui explique aussi bien les trous noirs que les GPS de ton téléphone.`
    },
    {
      slug: 'photosynthese',
      note: `Tournant terrestre : la vie complexe nécessite de l'énergie continue. La **photosynthèse**, inventée par les cyanobactéries il y a ~3 milliards d'années, capte la lumière du Soleil et fabrique l'oxygène — sans lequel rien de ce qui suit ne se passe.`
    },
    {
      slug: 'evolution-darwin',
      note: `Une fois la biosphère oxygénée, l'**évolution darwinienne** prend le relais : variation aléatoire, sélection naturelle, et en quelques milliards d'années une diversité spectaculaire émerge — dont des vertébrés, des mammifères, des primates.`
    },
    {
      slug: 'cerveau-humain',
      note: `Dernier acte (pour l'instant) : un primate développe un **cerveau** capable de modéliser l'univers qui l'a produit. 86 milliards de neurones plus tard, ce même cerveau écrit des équations qui décrivent le Big Bang d'où il sort.`
    }
  ]
});
