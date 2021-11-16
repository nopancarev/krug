var left = 0;

function moveLeft() {
  left = left - 10;
  document.getElementById('circle').style.marginLeft = left + 'px';
}
function moveRight() {
  left = left + 10;
  document.getElementById('circle').style.marginLeft = left + 'px';
}

var up = 0;

function moveUp() {
  up = up - 10;
  document.getElementById('circle').style.marginTop = up + 'px';
}
function moveDown() {
  up = up + 10;
  document.getElementById('circle').style.marginTop = up + 'px';
}