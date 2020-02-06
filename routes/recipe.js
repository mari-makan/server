const router = require("express").Router()
const recipeController = require("../controllers/recipeController")

router.post('/recipes', recipeController.create)

module.exports = router