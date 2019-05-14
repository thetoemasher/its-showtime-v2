module.exports = (sequelize, dataTypes) => {
    return sequelize.define('users', {
        user_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: dataTypes.STRING(20)
        },
        password: {
            type: dataTypes.TEXT
        },
        zipcode: {
            type: dataTypes.STRING(5)
        },
        first_name: {
            type: dataTypes.STRING(20)
        },
        last_name: {
            type: dataTypes.STRING(20)
        },
        email: {
            type: dataTypes.STRING(20)
        }
    })
}
