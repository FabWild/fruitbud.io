'use strict';
module.exports = (sequelize, DataTypes) => {
  var Worktype = sequelize.define('Worktype', {
    uuid: DataTypes.STRING,
    type: DataTypes.STRING
  });
  Worktype.associate = function(models) {
    Worktype.hasMany(models.Work);
  };
  return Worktype;
};
