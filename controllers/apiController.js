const axios = require('axios')

class ApiController {
    static list (req, res, next) {
        axios({
            method: 'get',
            url: `https://www.themealdb.com/api/json/v1/1/list.php?c=list`,
        })
            .then(({data}) => {
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                res.status(404).json({
                    msg: err.message
                })
            })
    }

    static category (req, res, next) {
        const menu = req.params.category
        axios({
            method: 'get',
            url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${menu}`,
        })
            .then(({data}) => {
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                res.status(404).json({
                    msg: err.message
                })
            })
    }

    static restaurant (req, res, next) {
        const menu = req.params.menu
        axios({
            method: 'get',
            url: `https://developers.zomato.com/api/v2.1/search?q=${menu}`,
            headers: {
                "user-key": "4d5f07ed9534e2586d16d4bfc135404a"
            }
        })
            .then(({data}) => {
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                res.status(404).json({
                    msg: err.message
                })
            })
    }
}

module.exports = ApiController