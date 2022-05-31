'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    lat: DataTypes.TEXT,
    long: DataTypes.TEXT,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postal: DataTypes.TEXT,
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
