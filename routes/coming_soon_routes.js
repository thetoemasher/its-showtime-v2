const Router = require('express').Router()
const {coming_soon_controller} = require('../controllers')
Router.get('/coming-soon', coming_soon_controller.getComingSoon)
// Router.post('/register', login_controller.register)


module.exports = Router