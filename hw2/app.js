var http = require('http');
var express = require('express');
var path = require('path');
var jade = require('jade');
var bodyParser = require('body-parser');
var override = require('method-override');

var routes = require('./routes');

var app = express();

app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(override('X-HTTP-Method'));

app.use('/', routes);

http.createServer(app).listen(3000, function() {
	console.log('listening on port 3000');
});

module.exports = app;