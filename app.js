require('./models')
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();

//app.use(express.static(path.join(_dirname, 'public'))) 
app.use(express.static('public'));
//parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

//app.get('/', function(req, res){
// 	res.send('Hello World!');
// });

//app.post('/addName',function(req,res){
//    console.log('req: ',req)
//    console.log(req.body)
//      res.send('hello world')
//})
 var server = app.listen(3000, function(){
 	var host = server.address().address;
 	var port = server.address().port;

 	console.log('Example app listening at http://%s:%s', host, port);
 });

