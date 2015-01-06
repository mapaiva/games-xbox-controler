/**
  * Canvas Game
  */
function Game() {
  this.name = 'Game interpreting Xbox controller commands';
  this.util = {
    query: function (att) {
      return document.querySelector(att);
    }
  };

  this.WS = this.util.query('.workspace-game');
  this.WS.width = (window.innerWidth - 240);
  this.WS.height = (window.innerHeight - 110);

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
