var left = 0;
var up = 0;

function moveLeft() {
  left = left - 10;
  document.getElementById('circle').style.marginLeft = left + 'px';
}
function moveRight() {
  left = left + 10;
  document.getElementById('circle').style.marginLeft = left + 'px';
}
function moveUp() {
  up = up - 10;
  document.getElementById('circle').style.marginTop = up + 'px';
}
function moveDown() {
  up = up + 10;
  document.getElementById('circle').style.marginTop = up + 'px';
}

document.getElementById("btnLeft").addEventListener("click", moveLeft);
document.getElementById("btnRight").addEventListener("click", moveRight);
document.getElementById("btnUp").addEventListener("click", moveUp);
document.getElementById("btnDown").addEventListener("click", moveDown);
document.addEventListener("keydown", function (event) {
  if (event.key === 'ArrowLeft') {
    moveLeft()
  }
  if (event.key === 'ArrowRight') {
    moveRight()
  }
  if (event.key === 'ArrowUp') {
    moveUp()
  }
  if (event.key === 'ArrowDown') {
    moveDown()
  }
}, true)