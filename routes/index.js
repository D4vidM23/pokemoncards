var express = require('express');
var router = express.Router();
const pokemonController = require('../controllers/pokemonController')

/* GET home page. */
router.get('/', pokemonController.viewAll)


// router.get('/', async function(req, res, next) {
//   const {sequelize} = require("../models/index");
//   const {QueryTypes} = require("sequelize");
//
//   let pokemoncards = await sequelize.query('select * from pokemontable', {type: QueryTypes.SELECT})
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
