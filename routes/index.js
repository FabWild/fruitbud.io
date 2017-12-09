var express = require('express');
var router = express.Router();
// const models = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET a quote. */
router.get('/quote', function(req, res, next) {
  let data = {
    text: "Hello world",
    author: "John Smith",
    source: "A book"
  };
  res.json(data);
});

module.exports = router;
