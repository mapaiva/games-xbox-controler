/**
  * Canvas Game
  */
function Game(GE) {
  this.name = 'Game interpreting xbox controller commands';
  this.GE = GE;
  this.socket = (GE && GE.socket) || null;
  this.util = {
    query: function (att) {
      return document.querySelector(att);
    }
  };

  this.WS = this.util.query('.workspace-game');
  this.WS.width = (window.innerWidth - 240);
  this.WS.height = (window.innerHeight - 40);

  this.x = 80;
  this.y = 100;

  this.buildWorkSpace();
}

Game.prototype.buildWorkSpace = function () {
  if(!this.WS){
    throw 'Element [canvas.workspace-game] not found';
  }

  this.context = this.WS.getContext('2d');

  var ctx = this.context;

  ctx.fillStyle = 'blue';

  // set line width for all lines
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(this.x, this.y);

  ctx.strokeStyle = '#377dc4';
  ctx.stroke();
}

Game.prototype.moveLeft = function (size) {
  this.x = this.x - size;

  this.context.lineTo(this.x, this.y);
  this.context.stroke();
}

Game.prototype.moveRight = function (size) {
  this.x = this.x + size;

  this.context.lineTo(this.x, this.y);
  this.context.stroke();
}

Game.prototype.moveDown = function (size) {
  this.y = this.y + size;

  this.context.lineTo(this.x, this.y);
  this.context.stroke();
}

Game.prototype.moveUp = function (size) {
  this.y = this.y - size;

  this.context.lineTo(this.x, this.y);
  this.context.stroke();
}

Game.prototype.start = function () {
  this.interpretSocketEvents();
}

Game.prototype.interpretSocketEvents = function () {
  var socket = this.socket;

  if(socket){
    var game = this,
      GE = game.GE;

    socket.on('generalerror', function (msg) {
      GE.showError(msg);
    });

    socket.on('a', function () {
      GE.showSuccess('[A] button pressed');
    });

    socket.on('b', function () {
      GE.showSuccess('[B] button pressed');
    });

    socket.on('y', function () {
      GE.showSuccess('[Y] button pressed');
    });

    socket.on('x', function () {
      GE.showSuccess('[X] button pressed');
    });

    socket.on('rb', function () {
      GE.showSuccess('[RB] button pressed');
    });

    socket.on('lb', function () {
      GE.showSuccess('[LB] button pressed');
    });

    socket.on('start', function () {
      GE.showSuccess('[Start] button pressed');
    });

    socket.on('select', function () {
      GE.showSuccess('[Select] button pressed');
    });

    socket.on('up', function () {
      game.moveUp(50);
    });

    socket.on('down', function () {
      game.moveDown(50);
    });

    socket.on('left', function () {
      game.moveLeft(50);
    });

    socket.on('right', function () {
      game.moveRight(50);
    });
  }
}
