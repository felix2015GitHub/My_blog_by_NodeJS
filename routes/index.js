/*
var express = require('express');
var router = express.Router();
*/
/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

module.exports = function(app) {
	app.get('/', function (req, res) {
		res.render('index', { title: '主頁'});
	});
	app.get('/reg', function (req, res) {
		res.render('reg', { title: '註冊'});
	});
	app.get('/login', function (req, res) {
		res.render('login', { title: '登錄'});
	});
	app.get('/post', function (req, res) {
		res.render('post', { title: '發表'});
	});
	app.post('/post', function (req, res) {

	});
	app.get('/logout', function (req, res) {
		
	});
	app.get('/test', function (req, res) {
		res.send('Hello, Welcome to my Node Project.');
	});
};