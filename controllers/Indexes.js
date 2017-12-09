var Indexes = {

  indexGet: function (req, res, next) {
      console.log('render index');
      res.render('index/index', { title: 'Express' });
  },

  quoteGet: function (req, res, next) {
    let data = {
      text: "Hello world",
      author: "John Smith",
      source: "A book"
    };
    res.json(data);
  },

  erreur404: function(req, res){
      res.render('error');
  },

};



  module.exports = Indexes;
