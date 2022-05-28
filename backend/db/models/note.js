'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    dueDate: DataTypes.DATEONLY,
    body: DataTypes.STRING,
    propertyId: DataTypes.INTEGER
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
  };
  return Note;
};