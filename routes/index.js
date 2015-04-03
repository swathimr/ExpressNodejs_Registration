var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var crypto = require('crypto');
//database information
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test'
});
	
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' })
});


// gets json posted from html file and inserts into database
router.post('/endpoint', function(req, res){
	console.log('body: ' + JSON.stringify(req.body));
	//values to be hashed 
	var first_name=crypto.createHash('md5').update(req.body.firstname).digest("hex");
	var last_name=crypto.createHash('md5').update(req.body.lastname).digest("hex");
	var email=crypto.createHash('md5').update(req.body.email).digest("hex");
	var age=crypto.createHash('md5').update(req.body.age).digest("hex");
	var sex=crypto.createHash('md5').update(req.body.sex).digest("hex");
	var pwd=crypto.createHash('md5').update(req.body.password).digest("hex");

	var values=[first_name,last_name,email,req.body.ssn,req.body.phoneno,age,sex,req.body.url,pwd,req.body.date,req.body.dobdt,req.body.creditcardno];
	
	var sqlquery=connection.query('INSERT INTO registration_info VALUES ( ?,?,?,?,?,?,?,?,?,?,?,?)', values,
	function (err, result) {
		 if (err) throw err;
        res.send('User added to database with ID: ' + result.insertId);
    });
	console.log("query is ::"+sqlquery.sql);
});

module.exports = router;
