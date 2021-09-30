let y = 15;
let speed = 0.8;
let x = 15;
let arrow;
arrow = arrowFunction;

function setup() {
  var canvas = createCanvas(65, 70);
  canvas.parent("canvasForHTML");
  //createCanvas(65, 70);
  frameRate(29);
}

function draw() {
  background("#0C0C0C");
  //background("#111");
  arrowFunction();

  if (y > 25 || y < 10) {
    speed = speed * -1;
  }
  y = y + speed;
}

function arrowFunction() {
  stroke("white");
  strokeWeight(5);
  line(x, y, x + 20, y + 20);
  line(x + 40, y, x + 20, y + 20);
}
