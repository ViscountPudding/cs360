var fs = require('fs')
var http = require('http')
var url = require('url')
var app = require('./app')
var ROOT_DIR = "comments/public"

app.set('port', 3001);

var server = http.createServer(app);

server.listen(3001);