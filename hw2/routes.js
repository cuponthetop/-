var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.send('test');
});

router.get('/test', function (req, res) {
	res.send('Hello World!');
});

router.get('/users', function(req, res) {
	res.render('signUp');
});

router.get('/success', function (req, res) {
	res.render('success');
});

router.get('*', function (req, res) {
	res.send('404 Page Not Found');
});

router.post('/users', function (req, res) {
	console.log(req.body.username);
	res.redirect('success');
});

module.exports = router;