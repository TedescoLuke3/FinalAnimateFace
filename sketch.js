
function setup() {
  createCanvas(500, 500);
}
var mouseX=0
var mouseY=0
var mouseXX= 0 +91.199
var mouseYY= 0
function draw() {
//background
  background(0, 174, 239);
  
//circle
  noStroke();
  fill(173, 226, 242);
  circle(500, 0, 443.35);
  
//face
  noStroke();
  fill(242, 190, 126);
  rect(62.966, 57.386, 357.303, 357.303);
  
//mouth
  stroke(244, 128, 88);
  strokeWeight(8);
  fill(163, 66, 41);
  rect(89.371, 295.026, 248.06, 98.876);

  //big tooth
    stroke(196, 196, 196);
    strokeWeight(3);
    fill(250, 250, 250);
    rect(112.404, 298.521, 53.933, 44.944);
  
  //small tooth
    stroke(196, 196, 196);
    strokeWeight(3);
    fill(250, 250, 250);
    rect(200.045, 295.026, 30.899, 22.472);
  
  //skin behind eyes
    stroke(244, 128, 88);
    strokeWeight(8);
    fill(244, 128, 88);
    rect(147.281, 109.136, 121.021, 147.879);
  
  //small skin behind eyes
    stroke(244, 128, 88);
    strokeWeight(8);
    fill(244, 128, 88);
    rect(314.055, 158.487, 55.769, 89.629);
  
  //big eye
    noStroke();
    fill(250,250,250);
    rect(151.169, 98.959, 125.281, 155.056);
  
  //small eye
    noStroke();
    fill(250,250,250);
    rect(307.094, 150.082, 60.674, 96.067);
  
  //pupil
    stroke(0,0,0);
    strokeWeight(8);
    fill(0,0,0);
    rect(mouseX, mouseY, 60.674, 96.067);
    
  //small pupil
    stroke(0,0,0);
    strokeWeight(8)
    fill(0,0,0);
    rect(mouseX +104,mouseY +28, 33.258, 52.659);
  
  //shine in eyes
    noStroke();
    fill(250,250,250);
    circle(mouseX+ 10, mouseY+10, 11);
  
  //small eye shine
    noStroke();
    fill(250,250,250);
    circle(mouseX +114,mouseY +38, 11);
  
  //nose
    stroke(244, 128, 88);
    strokeWeight(8);
    fill(244, 128, 88);
    rect(266.644, 239.408, 45.506, 29.213);

}




