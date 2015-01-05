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

  document.body.appendChild(getMessageBOX(msg));
}

function getMessageBOX(msg) {
  var node = document.createElement('div'),
    closeButton = document.createElement('span');

  closeButton.className = 'btn-close';
  closeButton.onclick = function () {
    document.body.removeChild(this.parentNode);
  };
  closeButton.innerHTML = ' [ X ]';
  closeButton.title = 'Close';

  node.id = 'message-box';
  node.className = 'success';
  node.innerHTML = msg;
  node.appendChild(closeButton);

  return node;
}
