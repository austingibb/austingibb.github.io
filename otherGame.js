var x = 0, y = 0, ctx;

function init() {
	var c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
}

function drawCircle(ctx, x, y, r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2*Math.PI);
	ctx.stroke();
}

function draw() {
	drawCircle(ctx, x, y, 5);
}

function loop(timestamp) {
  draw();
  window.requestAnimationFrame(loop)
}

window.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 37: // Left
	  x -= 2;
	break;

    case 38: // Up
	  y += 2;
    break;

    case 39: // Right
      x += 2;
    break;

    case 40: // Down
      y -= 2;
    break;
  }
}, false);

window.onload = init;

window.requestAnimationFrame(loop);