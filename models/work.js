'use strict';
module.exports = (sequelize, DataTypes) => {
  var Work = sequelize.define('Work', {
    uuid: DataTypes.STRING,
    title: DataTypes.STRING
  });
  Work.associate = function(models) {
    Work.belongsTo(models.Person);
    Work.belongsTo(models.Worktype);
    Work.hasMany(models.Quote);
  };
  return Work;
};
