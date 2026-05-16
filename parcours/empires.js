/* ===================================================================
   PARCOURS — Empires et puissances
   ===================================================================
   Sept étapes pour comprendre comment des humains construisent et
   défont des empires — de Rome au détroit de Taïwan.
   =================================================================== */

window.CarnetDeSavoirs.registerParcours({
  meta: {
    id: 'empires',
    titre: '<em>Empires</em> et puissances',
    domaine: 'Histoire',
    description: `Un empire, c'est un État qui assume sa pluralité — peuples, langues, religions sous une même autorité. Sept étapes pour suivre la mécanique impériale à travers les siècles : Rome qui invente le modèle, Byzance qui le prolonge, les Mongols qui le rendent contigu, la Soie qui le tisse, Constantinople qui le réinvente, Napoléon qui le ressuscite à la française, et le détroit de Taïwan qui en montre la dernière variation au XXIᵉ siècle.`,
    duree_estimee_min: 220
  },
  etapes: [
    {
      slug: 'rome-antique',
      note: `Le modèle. Douze siècles d'histoire continue, depuis une bourgade au bord du Tibre jusqu'à un empire allant de l'Écosse au Sahara. Tout ce qui suivra dans le bassin méditerranéen — droit, urbanisme, idée même d'imperium — en porte la marque.`
    },
    {
      slug: 'empire-byzantin',
      note: `Quand Rome tombe en Occident en 476, **Constantinople** continue. Pendant **mille ans encore**, l'Empire romain d'Orient prolonge l'idée impériale et préserve l'héritage grec — jusqu'à sa chute en 1453, qui marque un autre basculement de l'histoire mondiale.`
    },
    {
      slug: 'empire-mongol',
      note: `Au XIIIᵉ siècle, un autre modèle impérial déboule : **Gengis Khan** et ses successeurs bâtissent en cent ans le plus vaste empire contigu de l'histoire — quatre fois la taille de Rome. Tout est question de mobilité, d'organisation tribale et d'une violence calibrée.`
    },
    {
      slug: 'route-de-la-soie',
      note: `Les empires se touchent par des routes. La **Soie** relie Rome, Byzance, le califat abbasside, l'Empire mongol puis Ming. Sur ces routes circulent marchandises, religions, techniques — et la peste, qui en 1346-1350 redessine les équilibres démographiques de l'Eurasie.`
    },
    {
      slug: 'empire-ottoman',
      note: `En 1453, **Constantinople** tombe aux mains de **Mehmed II**. L'**Empire ottoman** prend le relais : trois continents, six siècles, deux échecs aux portes de Vienne. Sa disparition en 1922 redessine encore aujourd'hui les frontières du Moyen-Orient.`
    },
    {
      slug: 'napoleon',
      note: `Côté occidental, **Napoléon** ressuscite l'idée impériale à la française : sacre romain en 1804, aigles, code, organisation administrative qui reste la nôtre. Trois millions de morts dans les guerres napoléoniennes attestent que les empires ne se font pas sans violence.`
    },
    {
      slug: 'detroit-de-taiwan',
      note: `Aujourd'hui, l'enjeu impérial se rejoue à 180 km de côte : la **Chine** revendique **Taïwan**, et toute la chaîne mondiale des semi-conducteurs en dépend. Un petit détroit où se cristallise la grande rivalité sino-américaine du XXIᵉ siècle.`
    }
  ]
});
