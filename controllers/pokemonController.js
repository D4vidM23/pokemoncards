const {Pokemon} = require('../models')
const cardType = ['psychic']

module.exports.viewAll = async function(req,res,next) {
    const pokemons = await Pokemon.findAll();
    res.render('index', {pokemons});
}

module.exports.renderAddForm = function(req,res) {
    const pokemonadd = {
        name: "",
        hp: "",
        type: "",
        image: "",
        attack1: "",
        energycard: "",
        damage: "",
        attack2: "",
        energycard2: "",
        damage2: "",
        weakness: "",
        resistance: "",
    };
    res.render('add', {pokemonadd})
}

module.exports.addPokemon = async function(req, res){
    await Pokemon.create(
        {
            name: req.body.name,
            hp: req.body.numberhp,
            type: req.body.icon,
            image: req.body.image,
            attack1:req.body.attack1,
            energycard:req.body.energycard,
            damage:req.body.damage,
            attack2:req.body.attack2,
            energycard2:req.body.energycard2,
            damage2:req.body.damage2,
            weakness:req.body.energy4,
            resistance:req.body.energy5,
            cardClass: getCardClass(req.body.type),
        });
    res.redirect('/')
}















function getCardClass(type){
    if (type === "psychic"){
        return "psychic"
    } else if (type === "electric") {
        return "electric"
    } else if (type === "fairy") {
        return "fairy"
    } else if (type === "rock") {
        return "rock"
    } else if (type === "ground") {
        return "ground"
    } else if (type === "fighting") {
        return "fighting"
    } else if (type === "bug") {
        return "bug"
    } else if (type === "water") {
        return "water"
    } else if (type === "grass") {
        return "grass"
    } else if (type === "fire") {
        return "fire"
    } else if (type === "dragon") {
        return "dragon"
    } else if (type === "flying") {
        return "flying"
    } else if (type === "steel") {
        return "steel"
    } else if (type === "ice") {
        return "ice"
    } else if (type === "normal") {
        return "normal"
    } else if (type === "poison") {
        return "poison"
    } else if (type === "ghost") {
        return "ghost"
    }
}
//
// module.exports.viewAll = function(req,res,next) {
//     const pokemon = {
//         id:1,
//         name: 'Unown',
//         numberhp: 40,
//         icon: '/images/phsychic_type-removebg-preview.png',
//         image: 'https://img.pokemondb.net/artwork/avif/unown.avif',
//         attack1: 'Tackle',
//         energycard: '/images/normal_type-removebg-preview.png',
//         damage: 20,
//         attack2: 'Hidden Power',
//         energycard2: ('/images/normal_type-removebg-preview.png','/images/phsychic_type-removebg-preview.png'),
//         damage2: 50,
//         energy4: '/images/phsychic_type-removebg-preview.png',
//         energy5: '/images/normal_type-removebg-preview.png',
//     };
//     res.render('index', {pokemon})
// }