var left = 0;

function moveLeft() {
  left = left - 10;
  document.getElementById('circle').style.marginLeft = left + 'px';
}


function moveRight() {
  left = left + 10;
  document.getElementById('circle').style.marginLeft = left + 'px';
}