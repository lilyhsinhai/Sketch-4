//Sketch 4 - Lily Hsin-Hai

const quilts = [];
var gridSize;
var step;

function setup() {
  createCanvas(800, 800);
  quilts.push(loadImage('quilts/redBorder.jpg'));
  quilts.push(loadImage('quilts/pinkMandala.jpg'));
  quilts.push(loadImage('quilts/parasol.jpg'));
  quilts.push(loadImage('quilts/lilypads.jpg'));
  quilts.push(loadImage('quilts/tulip.jpg'));
  quilts.push(loadImage('quilts/rose.jpg'));
  quilts.push(loadImage('quilts/diamonds.jpg'));
  quilts.push(loadImage('quilts/crane.jpg'));
  quilts.push(loadImage('quilts/circles.jpg'));
  quilts.push(loadImage('quilts/abstract.jpg'));
  quilts.push(loadImage('quilts/swirl.jpg'));
  quilts.push(loadImage('quilts/sun.jpg'));
  quilts.push(loadImage('quilts/squares.jpg'));
  quilts.push(loadImage('quilts/rabbit.jpg'));
  quilts.push(loadImage('quilts/pompoms.jpg'));
  quilts.push(loadImage('quilts/anemone.jpg'));
  quilts.push(loadImage('quilts/plants.jpg'));
  quilts.push(loadImage('quilts/oragami.jpg'));
  quilts.push(loadImage('quilts/moths.jpg'));
  quilts.push(loadImage('quilts/mandala.jpg'));
  quilts.push(loadImage('quilts/kaleidescope.jpg'));
  quilts.push(loadImage('quilts/houses.jpg'));
  quilts.push(loadImage('quilts/flowers.jpg'));
  quilts.push(loadImage('quilts/blue.jpg'));
  quilts.push(loadImage('quilts/blobs.jpg'));

  gridSize = sqrt(quilts.length);
  step = width / gridSize;
  
}

function draw() {
  tileQuilt();
  var row = floor(mouseX/step);
  var col = floor(mouseY/step);
  fill(255,100);
  stroke(255);
  strokeWeight(3);
  rect(step*row, step*col, step, step);
}

function tileQuilt() {
  var x = 0;
  var y = 0;
  for (const quilt of quilts) {
    image(quilt, x, y, step, step);
    x += step;
    if (x >= width) {
      x = 0;
      y += step;
    }
  }  
}