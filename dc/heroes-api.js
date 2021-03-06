exports.getDcHeroes = (req, res) => {
  const { superhero } = req.body;
  const heroes = require('./heroes.json');
  let heroesMatch = heroes.filter((hero, index) => {
    if (
      hero.superhero.toLowerCase().includes(superhero.toLowerCase()) &&
      hero.publisher == 'DC Comics'
    ) {
      return hero;
    }
  });
  res.send(heroesMatch);
};
