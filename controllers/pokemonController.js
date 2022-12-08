
module.exports.viewAll = function(req,res,next) {
    const pokemons = {
        id:1,
        name: 'Unown',
        numberhp: 40,
        icon: '/images/phsychic_type-removebg-preview.png',
        image: 'https://img.pokemondb.net/artwork/avif/unown.avif',
        attack1: 'Tackle',
        energycard: '/images/normal_type-removebg-preview.png',
        damage: 20,
        attack2: 'Hidden Power',
        energycard2: ('/images/normal_type-removebg-preview.png','/images/phsychic_type-removebg-preview.png'),
        damage2: 50,
        energy4: '/images/phsychic_type-removebg-preview.png',
        energy5: '/images/normal_type-removebg-preview.png',
    };
    res.render('index', {pokemons})
}