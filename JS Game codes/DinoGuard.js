//This project was made by DracoMoy123 (roblox user), CEO of Mountain Gaming
//Make sure to play FLOOR IS NEON RED on Roblox and give it a like and favorite!
//All rights reserved
//This is the origanal/updated version of the "Dino Guard (UNBLOCKED!)
prompt("Make sure to play FLOOR IS NEON RED & use the MGS Discord Bot! Have fun! (use the arrows to move)");

// Variables
var score = 10;
var health = 100;

// Create Sprites
var cake = createSprite(350,200);
cake.setAnimation("gameplay_purplediamond_1");
cake.scale = 0.2;

var player = createSprite(200,200);
player.setAnimation("dino");
player.scale = 0.55;

var enemy1 = createSprite();
setEnemy1();

var enemy2 = createSprite();
setEnemy2();

var enemy3 = createSprite();
enemy3.x = -20;
enemy3.y = randomNumber(150,250);
enemy3.setAnimation("android");
enemy3.scale = 0.0455;

var enemy4 = createSprite();
enemy4.x = -20;
enemy4.y = randomNumber(150,250);
enemy4.setAnimation("android");
enemy4.scale = 0.0455;

var funny = createSprite(5,370);
funny.visible = false;

function draw() {
  
  // draw the background
  if(score > 1000) {
    thirdbg();
    enemy4.velocityX = randomNumber(4,7);
  }
  if(score >= 100) {
    secondbg();
    enemy3.velocityX = randomNumber(3,6);
  }
  else {
  gameBackground();
  }
  
  // update the sprites
  enemiesTouchCake();
  movePlayer();
  displaceEnemies();
  enemiesTouchWater();
  showScore();
  drawSprites();
  
  if(keyDown("q")) {
    health = 0;
  }
  if(health <= 0) {
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
    enemy1.velocityX = 0;
    enemy2.velocityX = 0;
  }
}

// Functions
function gameBackground() {
  noStroke();
  background(rgb(0,100,255));
  fill(rgb(250, 25, 220));
  rect(0,150,400,100);
  fill(rgb(80, 80, 80));
  rect(0,140,400,10);
  rect(0,250,400,10);
}

function secondbg() {
  noStroke();
  background(rgb(0, 0, 0));
  fill(rgb(57, 255, 20	));
  rect(0,150,400,100);
  fill(rgb(211,211,211));
  rect(0,140,400,10);
  rect(0,250,400,10);
  fill("white");
  textSize(50);
  text("RUN",170,70);
}

function thirdbg() {
   noStroke();
  background(rgb(139, 0, 0));
  fill(rgb(0, 0, 0));
  rect(0,150,400,100);
  fill(rgb(80, 80, 80));
  rect(0,140,400,10);
  rect(0,250,400,10);
  fill("white");
  textSize(50);
  text("HIDE",170,70);
}

function enemiesTouchCake(){
  if(enemy1.x >= 450) {
    enemy1.y = randomNumber(150,250);
    enemy1.x = -50;
  }
  if(enemy2.x >= 450) {
    enemy2.y = randomNumber(150,250);
    enemy2.x = -50;
  }
  if(enemy3.x >= 450) {
    enemy3.y = randomNumber(150,250);
    enemy3.x = -50;
  }
  if(enemy1.isTouching(cake)) {
    enemy1.y = randomNumber(150,250);
    enemy1.x = -50;
    score = score - 2;
  }
   if(enemy2.isTouching(cake)) {
    enemy2.y = randomNumber(150,250);
    enemy2.x = -50;
    score = score - 2;
  }
   if(enemy3.isTouching(cake)) {
    enemy3.y = randomNumber(150,250);
    enemy3.x = -50;
    score = score - 50;
  }
   if(enemy4.isTouching(cake)) {
    enemy4.y = randomNumber(150,250);
    enemy4.x = -50;
    score = score - 100;
  }
  if(keyDown("CTRL")) {
    score = score + 100000;
  }
  if(score >= 100000) {
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
    enemy1.velocityX = 0;
    enemy2.velocityX = 0;
    enemy3.velocityX = 0;
    enemy4.velocityX = 0;
  }
}

function movePlayer(){
  if(player.y >= 230) {
    player.velocityY = 0;
  }
  if(player.y <= 150) {
    player.velocityY = 0;
  }
  
  if(keyDown("left")) {
    player.velocityX = -3;
    player.setAnimation("dino");
  }
  if(keyDown("right")) {
    player.velocityX = 3;
    player.setAnimation("dino_copy_1");
  }
  if(keyDown("up")) {
    player.velocityY = -3;
  }
  if(keyDown("down")) {
    player.velocityY = 3;
  }
}

function displaceEnemies(){
if(player.isTouching(enemy1)) {
  player.displace(enemy1);
}
if(player.isTouching(enemy2)) {
  player.displace(enemy2);
}
if(player.isTouching(enemy3)) {
  player.displace(enemy3);
}
if(player.isTouching(enemy4)) {
  player.displace(enemy4);
}
}

function enemiesTouchWater(){
  if(enemy1.y <= 140) {
    setEnemy1();
    score = score + 3;
  }
  if(enemy1.y >= 260) {
    setEnemy1();
     score = score + 3;
  }
   if(enemy2.y <= 140) {
    setEnemy2();
     score = score + 3;
  }
  if(enemy2.y >= 260) {
    setEnemy2();
     score = score + 3;
  }
  if(enemy3.y <= 140) {
    setEnemy3();
     score = score + 3;
  }
  if(enemy3.y >= 260) {
    setEnemy3();
     score = score + 3;
  }
   if(enemy4.y <= 140) {
    setEnemy4();
     score = score + 3;
  }
  if(enemy4.y >= 260) {
    setEnemy4();
     score = score + 3;
  }
}

function setEnemy2(){
enemy2.x = 0;
enemy2.y = randomNumber(150,250);
enemy2.setAnimation("android");
enemy2.scale = 0.0455;
enemy2.velocityX = randomNumber(2,5);
}

function setEnemy1(){
enemy1.x = 0;
enemy1.y = randomNumber(150,250);
enemy1.setAnimation("android");
enemy1.scale = 0.0455;
enemy1.velocityX = randomNumber(2,5);
}

function setEnemy3(){
enemy3.x = 0;
enemy3.y = randomNumber(150,250);
enemy3.setAnimation("android");
enemy3.scale = 0.0455;
enemy3.velocityX = randomNumber(3,6);
}

function setEnemy4(){
enemy4.x = 0;
enemy4.y = randomNumber(150,250);
enemy4.setAnimation("android");
enemy4.scale = 0.0455;
enemy4.velocityX = randomNumber(4,7);
}

function showScore() {
  fill("white");
  textSize(20);
  text("Score:",20,20,200,100);
  text(score,20,40,200,100);
}
