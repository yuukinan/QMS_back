var config = require('../config')
var Sequelize = require('sequelize')

var sequelize = new Sequelize(
    config.db_database,
    config.db_user,
    config.db_password,
    {
    	host: config.db_host,
    	dialect: 'mysql'
    }
)

module.exports = sequelize