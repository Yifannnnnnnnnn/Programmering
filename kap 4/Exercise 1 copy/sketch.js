let x = 5;
let y = 5;
let katx = 250;
let katy = 250;
let katxspeed = 8;
let katyspeed = 8;
let speed = 10;
function setup() {
    createCanvas(500, 500);
}
function draw() {
 background(220);
 ellipse(x, y, 30, 30);
    if (x > width) {
        x = 0;
      }
    
      if (x < 0) {
        x = width;
      }
    
      if (y > height) {
        y = 0;
      }
    
      if (y < 0) {
        y = height;
      }
    
    if (keyIsPressed == true){
      if (keyCode === 40) {
        y += speed;
        x += 0;
      }
      if (keyCode === 38) {
        y += -speed;
        x += 0;
      }
      if (keyCode === 37) {
        y += 0;
        x += -speed;
      }
      if (keyCode === 39) {
        y += 0;
        x += speed;
      }
    } 
  ellipse(katx, katy, 50, 50);
  katx += katxspeed;
  katy += katyspeed;

    if (katx + 50 / 2 >= width) {
      katxspeed *= random(-0.9,-1.1);
    }
    if (katx - 50 / 2 <= 0) {
      katxspeed *= random(-0.9,-1.1);
    }
    if (katy + 50 / 2 >= height) {
      katyspeed *= random(-0.9,-1.1);
    }
    if (katy - 50 / 2 < 0) {
      katyspeed *= random(-0.9,-1.1);
    } 
    distand = sqrt((x - katx) * (x - katx) + (y - katy) * (y - katy));
    if (distand < 40){
    katxspeed = 0;
    katyspeed = 0;
    speed = 0;
    fill(255,0,0)
    }
}

       
    