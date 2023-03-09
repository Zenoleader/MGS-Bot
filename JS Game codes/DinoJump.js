// Variables
var score = 10;
var health = 100;

// Create Sprites
var player = createSprite();
setPlayer();

var block = createSprite();
setBlock();

var block2 = createSprite();
setBlock2();

var star = createSprite();
setStar();

var star2 = createSprite();
setStar2();

var apple = createSprite();
setApple();

var funny = createSprite(5,370);
funny.visible = false;

function draw() {
  // draw the background
  if(score >= 1000) {
    background2();
  } else {
     background1();
  }
  
  //other stuff
  showScore();
  showHealth();

  // update the sprites
    Conditions();
    PlayerFall();
    PlayerCollide();
    collectItems();
    controls();
  
  //draw sprites
  drawSprites();
  
  //Lose Game
  if(health <= 0) {
    player.velocityY = 0;
    background("black");
    fill("green");
    textSize(50);
    text("Game Over!" , 40, 100);
    text("Get better.. :)", 40, 150);
    textSize(25);
    text("PLAY FLOOR IS NEON RED",40, 200 );
    text("on ROBLOX (:",40,230);
    text("I KNOW IT'S LOW QUAILITY",40, 260);
    text("DEAL WITH IT >:(", 40, 300);
    text("Score:",40,350);
    text(score, 130, 350);
  }
}

// Functions
function background1() {
  background("darkBlue");
  noStroke();
  fill("yellow");
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(340, 50, 60, 60);
  fill("darkBlue");
  ellipse(320, 30, 60, 60);
}
function background2() {
  background("black");
  noStroke();
  fill("red");
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(340, 50, 60, 60);
  fill("black");
  ellipse(320, 30, 60, 60);
  fill("red");
  textSize(80);
  text("RUN", 160,200);
}
function showScore() {
  fill("white");
  textSize(20);
  text("Score: ",10, 20);
  text(score, 80, 20);
  
  if(keyDown("a")) {
    score = score + 1000;
  }
}
function showHealth() {
  fill("white");
  textSize(20);
  text("Health: ",10, 40);
  text(health, 80, 40);
  
  if(keyDown("a")) {
    score = score + 1000;
  }
}
function setBlock() {
block.setAnimation("platform");
block.y = -30;
block.x = 100;
block.velocityY = 3;
}

function setBlock2() {
block2.setAnimation("platform");
block2.y = -30;
block2.x = 300;
block2.velocityY = 1;
}

function setStar() {
star.setAnimation("star");
star.y = randomNumber(-30,-60);
star.x = randomNumber(50,350);
star.velocityY = randomNumber(3,5);
star.scale = 0.45;
}

function setStar2() {
star2.setAnimation("star");
star2.y = randomNumber(-30,-60);
star2.x = randomNumber(50,350);
star2.velocityY = randomNumber(3,5);
star2.scale = 0.45;
}

function setApple() {
apple.setAnimation("apple_1");
apple.y = randomNumber(-30,-60);
apple.x = randomNumber(50,350);
apple.velocityY = randomNumber(3,5);
apple.scale = 0.5;
}

function setPlayer() {
player.setAnimation("dino");
player.y = 10;
player.x = 200;
}

function PlayerFall() {
  player.velocityY = 8;
}

function Conditions() {
  if(block.y >= 430) {
    setBlock();
  }
  if(block2.y >= 430) {
    setBlock2();
  }
  if(star.y >= 430) {
    setStar();
  }
   if(star2.y >= 430) {
    setStar2();
  }
   if(player.y >= 430) {
     health = 0;
  }
  if(player.y <= 0) {
     health = 0;
  }
   if(player.x >= 430) {
     health = 0;
  }
  if(player.x <= 0) {
     health = 0;
  }
  if(score >= 10000) {
    fill("black");
    noStroke();
    rect(0,330,120);
    textSize(50);
    fill("green");
    text("Hack",5, 380);
  }
   if (mousePressedOver(funny)) {
    score = score + 10000000000000000;
    player.rotation = -100,100;
    block.velocityX = 0;
    block2.velocityX = 0;
    star.velocityX = 0;
    star2.velocityX = 0;
  }
}

function controls() {
  if(keyDown(RIGHT_ARROW)) {
    player.setAnimation("dino");
    player.velocityX = 6;
  }
  if(keyDown(LEFT_ARROW)) {
    player.setAnimation("dino2");
    player.velocityX = -6;
  }
  if(keyDown(UP_ARROW)) {
    player.velocityY = -6;
  }
   if(keyDown("d")) {
    player.setAnimation("dino");
    player.velocityX = 6;
  }
  if(keyDown("a")) {
    player.setAnimation("dino2");
    player.velocityX = -6;
  }
  if(keyDown("w")) {
    player.velocityY = -6;
  }
  if(keyDown("space")) {
    player.velocityY = -6;
  }
  if(keyDown("q")) {
    prompt("You are about to quit the game!");
    health = 0;
  }
  if(keyDown("ctrl")) {
    score = score + 10000;
  }
}

function PlayerCollide() {
player.collide(block);
player.collide(block2);
}

function collectItems() {
  if(player.isTouching(star)) {
    score = score + 10;
    setStar();
  }
   if(player.isTouching(star2)) {
    score = score + 10;
    setStar2();
  }
  if(player.isTouching(apple)) {
    health = health + 100;
    setApple();
  }
}
