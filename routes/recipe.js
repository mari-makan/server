const router = require("express").Router()
const recipeController = require("../controllers/recipeController")

router.post('/recipes', recipeController.create)
router.get('/recipes', recipeController.findRecipe)
router.delete('/recipes/:id', recipeController.delete)

module.exports = router