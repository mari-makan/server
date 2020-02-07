const router = require("express").Router()
const userController = require("../controllers/userController")

router.post("/login", userController.login)

router.post("/register", userController.register)

router.post("/googleLogin", userController.google_login)

module.exports = router