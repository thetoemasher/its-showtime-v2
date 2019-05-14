require('dotenv').config()
const express = require('express')
const {sequelizeInstance, models} = require('./models')
const session = require('express-session')

const app = express()
const {SESSION_SECRET, NODE_ENV} = process.env

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: NODE_ENV === 'development' ? false : true,
      maxAge: 600000
    }
}))


app.set('models', models)
    sequelizeInstance
    .authenticate()
    .then(() => {
      console.log('Database connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

app.use('/api', require('./routes'))



app.listen(3000, () => console.log('I love you 3000'))