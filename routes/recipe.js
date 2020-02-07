const router = require("express").Router()
const recipeController = require("../controllers/recipeController")

router.post('/recipes', recipeController.create)
router.get('/recipes', recipeController.findRecipe)

module.exports = router