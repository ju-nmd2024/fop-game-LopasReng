//position variables
let x = 380;
let y = 50;

//Game logic variables
let velocityY = 0.1;
let acceleration = 0.1;

//Game state 
let gameState = "startScreen";

function setup() {
  createCanvas(800, 600);
}

function BackGround(){
  background(150, 200, 250);  
  fill(100, 200, 100);
  noStroke();
  rect(0, 500, 800, 100);
  
  // Hill
  fill(100, 200, 100);
  strokeWeight(5);
  arc(580, 550, 500, 350, PI, 0);
  
  // House
  fill(60, 60, 60);
  noStroke();
  rect(450, 290, 250, 150);

  fill(70, 70, 70);
  noStroke();
  rect(440, 200, 270, 150);

  fill(80, 80, 80);
  triangle(530, 300, 580, 180, 630, 300);
  
  fill(80, 80, 80);
  noStroke();
  rect(530, 300, 100, 150);

  //windows
  fill (0, 150, 250);
  noStroke();
  ellipse(578, 270, 40);

  fill (50, 150, 250);
  noStroke();
  rect(564, 310, 30, 50);

  //door
  fill(100, 50, 90);
  noStroke();
  rect (560, 390, 40, 60);

  //sun
  fill(250, 250, 150);
  noStroke();
  ellipse(100, 100, 100);
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

function startScreen(){
    background(0, 100, 155);
    //start button
    fill(253, 224, 38);
    noStroke();
    rect(280, 200, 200, 100);

    fill(0, 0, 0);
    textSize(32);
    text('Start Game', 300, 260);

    fill(255, 255, 255);
    textSize(60);
    text("Bob the Rocket Game", 100, 150);

  }

function gameScreen(){
  BackGround();
  characterMinion();
}

function crashResult(){
background(0, 100, 155);
fill(255, 255, 255);
textSize(60);
text("Game Over...", 240, 200);
//button
fill(253, 224, 38);
rect(300, 300, 200, 100); 
fill(0, 0, 0);
textSize(30);
text("Try Again", 335, 360);
}

function safeLandingResult(){
  background(0, 100, 155);
  fill(255);
  textSize(60);
  text("You Made It!", 240, 200);
// Try Again button
  fill(253, 224, 38);
  rect(300, 300, 200, 100); 

  fill(0, 0, 0);
  textSize(30);
  text("Try Again", 335, 360);
}

function mousePressed() {
  if (gameState === "startScreen") {
    // Start button logic
    if (mouseX >= 280 && mouseX <= 480 && mouseY >= 200 && mouseY <= 300) {
      gameState = "gameScreen";
      console.log("You started the game!");
    }
  } else if (gameState === "crashResult" || gameState === "safeLandingResult") {
    // Try Again button logic
    if (mouseX >= 300 && mouseX <= 500 && mouseY >= 300 && mouseY <= 400) {
      gameState = "gameScreen"; // Restart the game
      // Reset positions
      x = 380; 
      y = 50;
      velocityY = 0.1;
      console.log("You are trying again!");
    }
  }
}

function draw() {
  frameRate(60);

  if (gameState === "startScreen") {
    startScreen();
  } else if (gameState === "gameScreen") {
    gameScreen();
    // Update the minion's position
    y = y + velocityY;
    velocityY = velocityY + acceleration;

    // Decrease the velocity when clicking
    if (keyIsDown(32)) {
      velocityY = velocityY - 0.3;
    }

    // the following 19 lines of code was viewed and corrected by https://chatgpt.com/share/673cc44c-351c-800c-a023-ad68ce8254b8
    // Stop the game if minion hits the ground
    if (y > 700) {
      if (velocityY > 2) {
        gameState = "crashResult";
        console.log("Oh no! You died!");
      } else {
        y = 700;
        velocityY = 0.02;
        gameState = "safeLandingResult"; // Transition to safe landing result screen
        console.log("You landed safely!");
      }
    }
  } else if (gameState === "crashResult") {
    crashResult();
  } else if (gameState === "safeLandingResult") {
    safeLandingResult();
  }
}