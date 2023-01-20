var express = require('express');
var router = express.Router();
const pokemonController = require('../controllers/pokemonController')
const {renderEditForm} = require("../controllers/pokemonController");

/* GET home page. */
router.get('/', pokemonController.viewAll);

router.get('/add', pokemonController.renderAddForm);

router.post('/add', pokemonController.addPokemon);

router.get('/edit/:id', pokemonController.renderEditForm)

router.post('/edit/:id', pokemonController.updatePoke)

// router.get('/', async function(req, res, next) {
//   const {sequelize} = require("../models/index");
//   const {QueryTypes} = require("sequelize");
//
//   let pokemoncards = await sequelize.query('select * from pokemontable', {type: QueryTypes.SELECT})
//   res.render('index', { title: 'Express' });
// });



module.exports = router;
