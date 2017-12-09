var express = require('express');
var router = express.Router();
// const models = require("../models");

var indexes = require('../controllers/Indexes');


/* GET home page. */
router.get('/',  indexes.indexGet);

/* GET a quote. */
router.get('/quote',  indexes.quoteGet);

/* GET Affichage de la page d'erreur 404 */
router.get('/erreur404', indexes.erreur404);

module.exports = router;
