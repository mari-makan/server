'use strict';
module.exports = (sequelize, DataTypes) => {
  const {
    Model
  } = require("sequelize")

  class Recipe extends Model {
    associate = function (models) {
      // associations can be defined here
      Recipe.belongsTo(models.User)
    };
  }

  Recipe.init({
    instruction: {
      type: DataTypes.STRING
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize
  })

  return Recipe;
};