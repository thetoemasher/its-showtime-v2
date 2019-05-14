const Sequelize = require('sequelize')
    , users_model = require('./users_model')
const sequelizeInstance = new Sequelize(process.env.CONNECTION_URI, {
    dialect: 'postgres',
    // native: true,

    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    define: {
        timestamps: false
    },
})

const preModels = [
    { key: 'Users', setup: users_model },
  ]
  
  let postModels = { models: {}, sequelizeInstance }
  
  preModels.forEach(model => {
    const setupModel = model.setup(sequelizeInstance, Sequelize)
    postModels.models[model.key] = setupModel
  })  

module.exports = postModels