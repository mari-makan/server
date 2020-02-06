'use strict';
module.exports = (sequelize, DataTypes) => {
  const {
    Model
  } = require("sequelize")
  const bcrypt = require("../helpers/bcrypt")

  class User extends Model {
    associate = function (models) {
      // associations can be defined here
      User.hasMany(models.Recipe)
    };
  }

  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "invalid email"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6],
          msg: "password must be at least 6 characters"
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, options) => {
        user.password = bcrypt.hash(user.password)
      }
    }
  })

  return User;
};