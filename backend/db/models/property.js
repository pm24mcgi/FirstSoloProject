'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    lat: DataTypes.TEXT,
    long: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Property.associate = function(models) {
    // associations can be defined here
  };
  return Property;
};