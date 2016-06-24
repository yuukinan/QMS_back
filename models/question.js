var sequelize = require('./base')
var Sequelize = require('sequelize')

var Question = sequelize.define('question', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	endTime: {
		type: Sequelize.DATE,
		allowNull: false
	},
	status: {
		type: Sequelize.STRING
	}
});

//建表
Question.sync({force: false}).then(function(){
	console.log('create table: question successful')
})

module.exports = Question