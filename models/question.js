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
})

var Topic = sequelize.define('topic', {
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

  content: {
    type: Sequelize.STRING,
  },

  status: {
    type: Sequelize.STRING
  },

  type: {
    type: Sequelize.STRING,
    defaultValue: 'singleSelect'
  },

  required: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  },

  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

var Option = sequelize.define('option', {
	id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },

  content: {
    type: Sequelize.STRING,
    allowNull: false
  },

  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  status: {
    type: Sequelize.STRING
  }
})

// 关联
Question.hasMany(Topic, {as: 'topics', foreignKey: 'questionId'})
Topic.hasMany(Option, {as: 'options', foreignKey: 'topicId'})

//建表
Question.sync({force: false}).then(function(){
	console.log('create table: question successful')
})

Topic.sync({force: true}).then(function(){
	console.log('create table: topic successful')
})

Option.sync({force: true}).then(function(){
	console.log('create table: option successful')
})

module.exports = Question