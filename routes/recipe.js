const router = require("express").Router()
const recipeController = require("../controllers/recipeController")
const { authentication } = require('../middlewares/jwt')
const { authorize } = require('../middlewares/authorize')

router.use(authentication)
router.post('/', recipeController.create)
router.get('/', recipeController.findRecipe)
router.delete('/:id', authorize, recipeController.delete)

module.exports = router