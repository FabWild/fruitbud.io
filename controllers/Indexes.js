const request = require('request');
// const fetch = require('node-fetch');;
const cheerio = require('cheerio');
// const CircularJSON = require('circular-json')
const util = require('util');

var Indexes = {

  indexGet: function (req, res, next) {
    console.log('render index');
    res.render('index/index', { title: 'Express' });
  },

  // all current wikiquote quotes
  wikiquoteGet: function (req, res, next) {
    request("https://en.wikiquote.org/api/rest_v1/page/html/The_Wire?redirect=false", function(error, response, body){
      // console.log(response);
      let $ = cheerio.load(response.body);
      let quotes = $('dl');


      // console.log(quotes.length);
      let data;
      if(req.query.all == 'true'){
        console.log('all');
        data = util.inspect(quotes);
      } else
      {
        let randrank = Math.round(Math.random()*quotes.length);
        console.log(randrank);
        data = util.inspect(quotes[randrank]);
      }
      // console.log(data);
      res.json(data);
    });
  },

  erreur404: function(req, res){
    res.render('error');
  },

};

module.exports = Indexes;
