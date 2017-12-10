const request = require('request');
const models = require("../models");
const uuidv1 = require('uuid/v1');

//returns an integer between 0 and n, included
function randrank(n) {return Math.floor(Math.random()*n)};

var Indexes = {

  indexGet: function (req, res, next) {
    console.log('render index');
    res.render('index/index', { title: 'Express' });
  },

  addwireGet: function (req, res, next) {
    let newid;
    let count = 0;
    request("https://en.wikiquote.org/api/rest_v1/page/html/The_Wire?redirect=false", function(error, response, body){
      let matches = response.body.match(new RegExp('<dl(.+?)/dl>','gi'));
      for (var i = 0; i < matches.length; i++) {
        newid = uuidv1();
        models.Quote.create(
          {
            uuid: newid,
            text: matches[i]
          })
          // .spread(
          //   (quote, created) => {
          //   created ? count++ : res.send('error');
          // })
        }
      });
    console.log(count);
    res.send(count);

    },

    quoteGet: function (req, res, next) {
      let data;
      models.Quote.findAll({})
      .then(results => {
        // console.log(results[0].dataValues.text);
        data = results[randrank(results.length)].dataValues.text;
        console.log(data);
        res.send(data);
      });
    },

    // a quote from current wikiquote, for all quotes : ?all=true
    wikiquoteGet: function (req, res, next) {
      request("https://en.wikiquote.org/api/rest_v1/page/html/The_Wire?redirect=false",
      function(error, response, body){
        // console.log(response);
        // let $ = cheerio.load(response.body);
        // let quotes = $('dl');
        let matches = response.body.match(new RegExp('<dl(.+?)/dl>','gi'));

        let data;
        req.query.all ?
        data = matches
        :data = matches[randrank(matches.length)];
        // res.json(data);
        res.send(data);
      });
    },

    erreur404: function(req, res){
      res.render('error');
    },

  };

  module.exports = Indexes;
