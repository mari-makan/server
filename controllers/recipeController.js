const {
    Recipe
} = require('../models')

class RecipeController {
    static create(req, res, next) {
        Recipe.create({
                instruction: req.body.instruction,
                UserId: req.UserId
            })
            .then(recipe => {
                res.status(201).json({
                    data: recipe,
                    msg: 'create success'
                })
            })
            .catch(err => {
                console.log(err)
                res.status(404).json({
                    msg: err
                })
            })
    }

    static findRecipe(req, res, next) {
        Recipe.findOne({
                where: {
                    UserId: req.UserId
                }
            })
            .then(recipe => {
                res.status(200).json({
                    data: recipe,
                    msg: 'find success'
                })
            })
            .catch(next)
    }

    static delete(req, res, next) {
        Recipe.destroy({
            where: {
                id: req.params.id
            }
        })
        then(recipe => {
                if (recipe === 0) {
                    next({
                        status: 400,
                        msg: 'data not found'
                    })
                } else {
                    res.status(200).json()
                }
            })
            .catch(next)
    }
}

module.exports = RecipeController