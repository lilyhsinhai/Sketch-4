const quilts = [];

function setup() {
  createCanvas(800, 800);
  quilts.push(loadImage('quilts/redBorder.jpg'));
  quilts.push(loadImage('quilts/pinkMandala.jpg'));
  quilts.push(loadImage('quilts/parasol.jpg'));
  quilts.push(loadImage('quilts/lilypads.jpg'));

}

function draw() {
  tileQuilt();
}

function tileQuilt() {
  var x = 0;
  var y = 0;
  var gridSize = sqrt(quilts.length);
  var step = width / gridSize;
  for (const quilt of quilts) {
    image(quilt, x, y, step, step);
    x += step;
    if (x >= width) {
      x = 0;
      y += step;
    }
  }  
}