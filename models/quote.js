'use strict';
module.exports = (sequelize, DataTypes) => {
  var Quote = sequelize.define('Quote', {
    uuid: DataTypes.STRING,
    text: DataTypes.STRING
  });
  Quote.associate = function(models) {
    // Quote.belongsTo(models.Person);
    Quote.belongsTo(models.Work);
  };
  return Quote;
};
