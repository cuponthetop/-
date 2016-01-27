var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('test');
});

router.get('/test', function (req, res) {
	res.send('Hello World!');
});

router.get('/users', function(req, res) {
	res.render('index');
});

router.post('/users', function (req, res) {

})

module.exports = router;