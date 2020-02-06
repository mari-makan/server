const express = require('express')
const router = express.Router()
const ApiController = require('../controllers/apiController')

// routing untuk list awal setelah login berhasil
router.get('/list-menu', ApiController.list)

// routing untuk menu spesifik. kirim paramter berupa pilihan user
router.get('/menu/:category', ApiController.category)

// list restoran sesuai dengan menu yang dipilih.
router.get('/restaurant/:menu', ApiController.restaurant)

module.exports = router