//position variables
let x = 500;
let y = 50;

//Game logic variables
let velocityY = 0.2;
let acceleration = 0.2;

//Game state 
let gameState = true;

function setup() {
  createCanvas(800, 600);
}

function BackGround(){
  background(150, 150, 150);  
  fill (100, 100, 100);
  noStroke();
  rect(0, 450, width, 150);

}

function characterMinion(){   
  scale(0.5, 0.5);
  //Body
  fill(253, 224, 38);
  noStroke();
  rect(x, y, 200, 250, 90);
  
  
  //glasses
  fill(167, 122, 81);
  rect (x,y+60, 200, 25, 4);
  
  fill(149, 149, 153);
  ellipse(x+60, y+70, 90);
  
  fill(149, 149, 153);
  ellipse(x+140, y+70, 90);
  
  
  
  //eyes
  fill(255, 255, 255);
  ellipse(x+60, y+70, 65);
  
  fill(255, 255, 255);
  ellipse(x+140, y+70, 65);
  
  //colours
  fill(167, 122, 81);
  ellipse(x+60, y+70, 35);
  
  fill(167, 152, 81);
  ellipse(x+140, y+70, 35);
  
  //iris
  fill(0, 0, 0);
  ellipse(x+140, y+70, 20);
  
  fill(0, 0, 0);
  ellipse(x+60, y+70, 20);
  
  //light
  fill(255, 255, 255);
  ellipse(x+55, y+60, 10);
  
  fill(255, 255, 255);
  ellipse(x+145, y+60, 10);
  
  
  
  //mouth
  fill(253, 224, 38);
  stroke (0, 0, 0);
  strokeWeight(5);
  arc (x+100, y+125, 70, 20, 0, PI);
  
  
  
  //arms
  fill(253, 224, 38);
  noStroke();
  rect (x-10, y+125, 15, 120, 9);
  
  fill(253, 224, 38);
  noStroke();
  rect (x+195, y+125, 15, 120, 9);
  
  //hands
  fill(0, 0, 0);
  noStroke();
  ellipse (x-2, y+235, 27);
  
  fill(0, 0, 0);
  noStroke();
  ellipse (x+203, y+235, 27);
  
  fill(0, 0, 0);
  noStroke();
  rect (x-17, y+220, 30, 10, 9);
  
  fill(0, 0, 0);
  noStroke();
  rect (x+188, y+220, 30, 10, 9);
  
  //fingers left
  fill(0, 0, 0);
  noStroke();
  ellipse (x-15, y+245, 18);
  
  fill(0, 0, 0);
  noStroke();
  ellipse (x-3, y+252, 18);
  
  fill(0, 0, 0);
  noStroke();
  ellipse (x+10, y+247, 18);
  
  
  //fingers right
  fill(0, 0, 0);
  noStroke();
  ellipse (x+190, y+245, 18);
  
  fill(0, 0, 0);
  noStroke();
  ellipse (x+202, y+252, 18);
  
  fill(0, 0, 0);
  noStroke();
  ellipse (x+215, y+247, 18);
  
  
  
  //trousers
  fill(14, 117, 188);
  stroke (14, 117, 188);
  strokeWeight(1);
  arc (x+100, y+170, 200, 180, 0, PI);
  
  fill(14, 117, 188);
  noStroke();
  rect(x+50, y+150, 100, 100, 10);
  
  
  //legs
  fill(14, 117, 188);
  noStroke();
  rect(x+60, y+230, 40, 50, 10);
  
  fill(14, 117, 188);
  noStroke();
  rect(x+100, y+230, 40, 50, 10);
  
  
  // feet
  fill(0, 0, 0);
  ellipse(x+75, y+285, 55, 30);
  
  fill(0, 0, 0);
  ellipse(x+125, y+285, 55, 30);
  }

function draw() {
  frameRate (60);
  BackGround();
  
  characterMinion();
  y = y + velocityY;
  velocityY = velocityY + acceleration;
}
