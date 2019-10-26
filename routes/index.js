const Router = require('express').Router()
const users_routes = require('./users_routes.js')
const login_routes = require('./login_routes.js')
const coming_soon_routes = require('./coming_soon_routes.js')

Router.get('/', (req, res) => {
    console.log('yo')  
})

Router.use(users_routes)
Router.use(login_routes)
Router.use(coming_soon_routes)

module.exports = Router