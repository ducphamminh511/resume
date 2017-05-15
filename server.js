var express = require('express')
var app = express();
var config = require('./config/config.json');

var server = require('http').createServer(app);
app.set('port', process.env.PORT || config.port);
server.listen(app.get('port'),function(){
    console.log('Server is running on port : ' + app.get('port'));
});