'use strict';
module.exports = (sequelize, DataTypes) => {
  const {
    Model
  } = require("sequelize")

  class User extends Model {
    associate = function (models) {
      // associations can be defined here
      User.hasMany(models.Recipe)
    };
  }

  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  })

  return User;
};