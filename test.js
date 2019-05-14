const bcrypt = require('bcrypt')
let salt = bcrypt.genSaltSync(10)
let pass = bcrypt.hashSync('password', salt)
console.log(pass)