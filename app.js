var model = require('./models')
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()

app.use(express.static('public'))

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())


app.get('/detail',function(req,res){
    res.header('Access-Control-Allow-Origin', '*')
    var id = parseInt(req.query.id)

    model.question.findAll({
		where: {
			id: id
		}
	}).then(function (data) {
		console.log(data)
		res.json({
			data: data,
			result: {
				code: 200,
				msg: "success"
			}
		})
	}, function (err) {
		res.json({
			result: {
				code: 201,
				msg: "fail"
			}
		})
	})
})

app.get('/edit',function(req,res){
	res.header('Access-Control-Allow-Origin', '*')
	var id = parseInt(req.query.id)
	model.question.findAll({
		where: {
			id: id
		}
	}).then(function (data){
		res.json({
			data: data,
			result: {
				code: 200,
				msg: "success"
			}
		})
	}, function (err){
		res.json({
			result: {
				code: 201,
				msg: "fail"
			}
		})
	})
})

app.get('/list',function(req,res){
	res.header('Access-Control-Allow-Origin', '*')
	model.question.findAll({
		order: 'id ASC'
	}).then(function (data) {
		console.log(data)
		res.json({
			data: {
				questionList: data
			},
			result: {
				code: 200,
				msg: "success"
			}
		})
	}, function (err) {
		res.json({
			result: {
				code: 201,
				msg: "fail"
			}
		})
	})
})

app.post('/addNew',function(req,res){
	res.header('Access-Control-Allow-Origin', '*')
	model.question.create(req.body).then(function(val){
		res.json({
		 data:{
		 	id: val.dataValues.id
		 },
		 result: {
		   code: 200,
		   msg: "success"}
		   })
	}, function (err){
		res.json({
			result: {
				code: 201,
				mesg: "fail"
			}
		})
	})
})

//app.post('/edit',function(req,res){
//
//})

 var server = app.listen(3000, function(){
 	var host = server.address().address;
 	var port = server.address().port;

 	console.log('Example app listening at http://%s:%s', host, port);
 });

