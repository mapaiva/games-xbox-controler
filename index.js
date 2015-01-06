var express = require('express'),
  app = express(),
  server = require('http').Server(app),
  io = require('socket.io')(server),
  xbox = require('xbox-controller-node');

app.use(express.static(__dirname + '/web/public'));

server.listen(3005);

console.log('Examples page running on http://localhost:3005');

io.on('connection', function (socket) {
  if(!xbox.HIDController){

    socket.emit('generalerror', 'Xbox controller not found');
  }else{

    xbox.on('data', function (dir, ctrl) {
      socket.emit('controllerdata', dir, ctrl);
    });
  }
});
