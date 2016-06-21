var sequelize = require('./base')
var Sequelize = require('sequelize')

var Question = sequelize.define('question', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	}
})

//建表
Question.sync({force: false}).then(function(){
	console.log('create table: question successful')
})

exports.Question = Question