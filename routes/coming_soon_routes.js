const Router = require('express').Router()
const {coming_soon_controller} = require('../controllers')
Router.get('/coming-soon', coming_soon_controller.getComingSoon)


module.exports = Router