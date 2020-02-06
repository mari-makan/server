const {
    User
} = require("../models/")
const jwt = require("jsonwebtoken")
const bcrypt = require("../helpers/bcrypt")
const privateKey = "secret"

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
                    let passwordCheck = bcrypt.check(password, data.password)
                    if (passwordCheck) {
                        let token = jwt.sign({
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
            })
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
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = UserController