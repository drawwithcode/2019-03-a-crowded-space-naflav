var myMatisse;
var flowerfilling = [];



function preload() {
  // put preload code here
}



function setup() {
  //change color mode
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  background('#3564D2');
}



function mousePressed() {
  //flower filling effect
  for (var i = 0; i < 5; i++) {
    myMatisse = new Matisse(mouseX, mouseY, 40, 20);
    myMatisse.speedx = random(-700, 300);
    myMatisse.speedy = random(-700, 300);

    flowerfilling.push(myMatisse);
  }
}



function draw() {
  for (var j = 0; j < flowerfilling.length; j++) {
    flowerfilling[j].display();
    flowerfilling[j].move();
  }
  //title
  textSize(20);
  textAlign(CENTER);
  text("fill matisse's garden", width / 2, height / 2);
}



function Matisse(_x, _y, _width, _height) {
  //flower structure and colors
  this.speedx = 2;
  this.speedy = 2;
  this.x = _x;
  this.y = _y;
  this.display = function() {
    push();
    translate(this.x, this.y);
    rotate(frameCount / 4);
    noStroke();
    fill(random(200), random(120), random(245));
    for (let i = 0; i < 10; i++) {
      ellipse(0, 30, 20, 80);
      rotate(PI / 5);
    }
    pop();
  }

  this.move = function() {
    this.x += this.speedx;
    this.y += this.speedy;

  }
}
