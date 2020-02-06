const { Recipe } = require('../models')

class RecipeController {
    static create(req, res, next) {
        Recipe.crete({
            instruction: req.body.instruction,
            UserId: req.UserId
        })
            .then(recipe => {
                res.status(201).json({
                    data: recipe,
                    msg: 'create success'
                })
            })
            .catch(() => {
                next({
                    status: 400,
                    msg: 'errors'
                })
            })
    }
}

module.exports = RecipeController