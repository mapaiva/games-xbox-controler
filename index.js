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

    emitControllerEvents(socket);
  }
});

function emitControllerEvents(socket) {

  xbox.on('a', function () {
    socket.emit('a');
  });

  xbox.on('b', function () {
    socket.emit('b');
  });

  xbox.on('y', function () {
    socket.emit('y');
  });

  xbox.on('x', function () {
    socket.emit('x');
  });

  xbox.on('rb', function () {
    socket.emit('rb');
  });

  xbox.on('lb', function () {
    socket.emit('lb');
  });

  xbox.on('start', function () {
    socket.emit('start');
  });

  xbox.on('back', function () {
    socket.emit('back');
  });

  xbox.on('up', function () {
    socket.emit('up');
  });

  xbox.on('down', function () {
    socket.emit('down');
  });

  xbox.on('left', function () {
    socket.emit('left');
  });

  xbox.on('right', function () {
    socket.emit('right');
  });

  xbox.on('upleft', function () {
    socket.emit('upleft');
  });

  xbox.on('upright', function () {
    socket.emit('upright');
  });

  /* none events */

  xbox.on('up:none', function () {
    socket.emit('up:none');
  });

  xbox.on('upleft:none', function () {
    socket.emit('upleft:none');
  });

  xbox.on('upright:none', function () {
    socket.emit('upright:none');
  });
}
