var left = 0;
var up = 0;
var circle = $('#circle');

function moveLeft() {
  left = left - 10;
  circle.css("marginLeft", left);
}
function moveRight() {
  left = left + 10;
  circle.css('marginLeft', left);
}
function moveUp() {
  up = up - 10;
  circle.css('marginTop', up);
}
function moveDown() {
  up = up + 10;
  circle.css('marginTop', up);
}

$('#btnLeft').on('click', moveLeft);
$('#btnRight').on('click', moveRight);
$('#btnUp').on('click', moveUp);
$('#btnDown').on('click', moveDown);

$(document).on('keydown', function (event) {
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
})