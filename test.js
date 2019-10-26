const bcrypt = require('bcrypt')

const salt = bcrypt.genSaltSync(10)
const hashedPassword = bcrypt.hashSync('hello', salt)

console.log(hashedPassword)