module.exports = (sequelize, dataTypes) => {
    return sequelize.define('coming_soon', {
        coming_soon_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tmdb_id: {
            type: dataTypes.TEXT
        }
    }, {  freezeTableName: true})
}