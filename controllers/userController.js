const { User } = require("../models/");
const jwt = require("jsonwebtoken");
const bcrypt = require("../helpers/bcrypt");
const privateKey = process.env.PRIVATEKEY;
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

class UserController {
  static login(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({
      where: {
        email: email
      }
    })
      .then(data => {
        if (data) {
          let passwordCheck = bcrypt.check(password, data.password);
          console.log(passwordCheck)
          if (passwordCheck) {
            let token = jwt.sign(
              {
                data
              },
              privateKey
            );
            res.status(200).json({
              email: data.email,
              token
            });
          } else {
            let err = {
              err: "WRONG LOGIN DATA",
              msg: "USERNAME OR PASSWORD IS WRONG"
            };
            next(err);
          }
        }
      })
      .catch(err => {
        let error = {
          err: "WRONG LOGIN DATA",
          msg: "USERNAME OR PASSWORD IS WRONG"
        };
        next(error);
      });
  }

  static register(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    User.create({
      email: email,
      password: password
    })
      .then(data => {
        res.status(201).json({
          data,
          msg: "Account registered successfully"
        });
      })
      .catch(err => {
        next(err);
      });
  }

  static googleLogin(req, res, next) {
    let payload = "";
    client
      .verifyIdToken({
        idToken: req.headers.id_token,
        audience: process.env.CLIENT_ID
      })
      .then(result => {
        payload = result.payload;
        return User.findOne({
          where: {
            email: payload.email
          }
        });
      })
      .then(data => {
        if (!data) {
          return User.create({
            email: payload.email,
            password: process.env.GOOGLE_PASSWORD
          });
        } else return data;
      })
      .then(data => {
        let payload = {
          id: data.id,
          email: data.email
        };
        let token = jwt.sign(payload, privateKey);
        res.status(200).json({
          token
        });
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = UserController;
