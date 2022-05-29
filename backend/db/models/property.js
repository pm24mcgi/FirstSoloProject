'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    lat: DataTypes.TEXT,
    long: DataTypes.TEXT,
    address: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Property.associate = function(models) {
    // associations can be defined here
    Property.belongsTo(models.User, {foreignKey: 'userId'})
    Property.belongsTo(models.Tag, {foreignKey: 'tagId'})
    Property.hasMany(models.Note, {foreignKey: 'propertyId'})
  };
  return Property;
};
