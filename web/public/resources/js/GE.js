function GE() {
  this.socket;

  try{
    this.socket = io();
  }catch(err){
    socket = null;
  }

  if(!this.socket){
    throw 'Socket.io constructor cannot be inicializate. Check if the [socket.io.js] was imported on page.';
  }
}

GE.prototype.showError = function (msg) {
  var node = getMessageBOX(msg);

  node.className = 'error';

  document.body.appendChild(node);
}

GE.prototype.showSuccess = function (msg) {
  var node = getMessageBOX(msg);

  document.body.appendChild(node);
}

function getMessageBOX(msg) {
  var node = document.createElement('div');

  node.id = 'message-box';
  node.className = 'success';
  node.innerHTML = msg;

  setTimeout(function () {
    node.style.opacity = 0;

    setTimeout(function () {
      document.body.removeChild(node);
    }, 1000);
  }, 4000);

  return node;
}
