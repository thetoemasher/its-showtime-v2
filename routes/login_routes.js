const Router = require('express').Router()
const {login_controller} = require('../controllers')
Router.post('/login', login_controller.login)
Router.post('/register', login_controller.register)


module.exports = Router