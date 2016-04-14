var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function(req, res){
	res.sendFile(__dirname +'/index.html');
});
//turn on connection event, what happens when user sends something. kind of like document.ready
io.sockets.on('connection', function(socket){ //function with user's socket
	socket.on('send message', function(data){ //do something with message data
		io.sockets.emit('new message', data);
	});
});