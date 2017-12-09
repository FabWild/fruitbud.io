'use strict';
module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define('Person', {
    uuid: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dob: DataTypes.DATE,
    dod: DataTypes.DATE,
    fictional: DataTypes.BOOLEAN
  });
  Person.associate = function(models) {
    // Person.hasMany(models.Quote, {foreignKey:"personId", through:"Person_has_Quote"});
    Person.hasMany(models.Work);
  };
  return Person;
};
