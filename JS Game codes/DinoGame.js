//This project was made by DracoMoy123 (roblox user), CEO of Mountain Gaming
//Make sure to play FLOOR IS NEON RED on Roblox and give it a like and favorite!
//All rights reserved
//This is the origanal/updated version of the "Dino game (UNBLOCKED!)
//hold the key "u" for update log
//most of the stuff in this game isn't mine. I used things from: Blooket, Code,org, Android, Doors, Roblox, and chrome
prompt('PLAY FLOOR IS NEON RED ON ROBLOX. THIS GAME IS THE CHROME DINOSAUR MADE BY ZENO');

var bg1 = createSprite(200,200);
bg1.setAnimation("desert_1");
bg1.velocityX = -2;
var bg = createSprite(600,200);
bg.setAnimation("desert_1");
bg.velocityX = -2;
var sp1 = createSprite(190,350);
sp1.setAnimation("dino2");
sp1.scale = 1;
sp1.debug = false;
sp1.setCollider("rectangle",0,0,30,80,0);
var sp2 = createSprite(390, 350);
sp2.setAnimation("cactus_1");
sp2.scale = 0.4;
sp2.velocityX = -4;
sp2.debug = false;
sp2.setCollider("rectangle",0,0,10,70,0);
var sp4 = createSprite(400,150);
sp4.setAnimation("missle");
sp4.visible = false;
sp4.velocityX = -3;
var sp5 = createSprite(400,260);
sp5.setAnimation("apple_1");
sp5.velocityX = -3;
sp5.scale = 0.5;
var sp6 = createSprite(200,200);
sp6.setAnimation("screech");
sp6.scale = 2;
sp6.velocityX = 2;
sp6.visible = false;
var sp7 = createSprite(399,230);
sp7.setAnimation("prehistoric_01_1");
sp7.scale = 0.3;
sp7.setCollider("rectangle",0,0,15,50,0);
sp7.velocityX = -1;
var sp8 = createSprite(400,100);
sp8.setAnimation("missle");
sp8.visible = false;
sp8.velocityX = -3;
var funny = createSprite(5,370);
funny.visible = false;
var android = createSprite(200,200);
android.setAnimation("android");
android.visible = false;
var bone1 = createSprite(60,0);
bone1.setAnimation("bone_1");
bone1.scale = 0.5;
bone1.velocityY = 3;
var bone2 = createSprite(330,0);
bone2.setAnimation("bone_1");
bone2.scale = 0.5;
bone2.velocityY = 5;
var rocket = createSprite(400,325);
rocket.setAnimation("rocket1_1");
rocket.scale = 0.2;
rocket.visible = false;

//score stuff
var score = 0;
var health = 100;
var counter = 0;
var rocko = 0;
var jumpc = 0;

function draw() {
  
  //bg scroll
  if(bg1.x == -200) {
    bg1.x = 600;
  }
  if(bg.x == -200) {
    bg.x = 600;
  }
  
  //secret level
  if(keyDown(LEFT_ARROW)) {
    prompt("You are going to the secret universe... do you wish to proceed?");
    bg1.setAnimation("abstract_15_1");
    bg.setAnimation("abstract_15_1");
    sp2.setAnimation("abstract_16_1");
    sp2.scale = 0.2;
    sp7.setAnimation("abstract_16_1");
    sp7.scale = 0.2;
    sp1.setAnimation("abstract_16_1");
    sp1.scale = 0.1;
  }
  if(keyDown("j")) {
prompt("You are teleporting back...");
  bg1.setAnimation("desert_1");
    bg.setAnimation("desert_1");
    sp2.setAnimation("cactus_1");
    sp2.scale = 0.4;
    sp7.setAnimation("prehistoric_01_1");
    sp7.scale = 0.3;
    sp1.setAnimation("dino2");
    sp1.scale = 1;
  }
  
  //collide
  if (sp1.isTouching(sp2)) {
    health = health - 25;
  }
  if (keyDown("space")) {
    score = score + 1;
  }
  if(keyDown(UP_ARROW)) {
    score = score + 1;
  }
  if (sp1.isTouching(sp5)) {
    health = health + 1;
    sp5.x = 410;
  }
    if (sp1.isTouching(sp7)) {
    health = health /10;
    sp7.x = 400;
  }
  if (sp1.isTouching(sp4)) {
    playSound("no.mp3");
  }
  if (mousePressedOver(bone1)) {
    score = score + 100;
    bone1.visible = false;
  }
  if (mousePressedOver(bone2)) {
    score = score + 100;
    bone2.visible = false;
  }
  
  //jump
  if (sp1.y >= 350) {
    sp1.velocityY = 0;
  }
  if (keyWentDown("space")) {
    sp1.velocityY = -5;
    playSound("sound://category_achievements/lighthearted_bonus_objective_4.mp3");
  }
  if(keyDown("up")) {
  sp1.velocityY = -5;
    playSound("sound://category_achievements/lighthearted_bonus_objective_4.mp3");
  }
  if (mouseDown()) {
    sp1.velocityY = -5;
    playSound("sound://category_achievements/lighthearted_bonus_objective_4.mp3");
  }
  if (sp1.y <= 260) {
    sp1.velocityY = 3;
  }
  
  //rocket thing
  if (score >= 5000) {
    rocket.visible = true;
    rocket.velocityX = -2;
  }
  if(sp1.isTouching(rocket)) {
    rocko = rocko + 50;
  }
  
  if(score >= 1000) {
    sp2.velocityX = -10;
    sp7.velocityX = -1;
  }
  //loop
  if (sp2.x <= -15) {
    sp2.x = 410;
  }
  if (sp4.x <= -15) {
    sp4.x = 400;
  }
  if (sp5.x <= -15) {
    sp5.x = 400;
    sp5.visible = true;
  }
  if (sp7.x <= -15) {
    sp7.x = 410;
  }
  if (sp8.x <=0) {
    sp8.x = 400;
  }
  if (bone1.y >= 420) {
    bone1.y = -5;
    bone1.visible = true;
  }
  if (bone2.y >= 420) {
    bone2.y = -5;
    bone2.visible = true;
  }
  if (sp1.isTouching(rocket)) {
    rocket.velocityX = 0;
    rocket.x = 400;
    rocket.visible = false;
    sp1.setAnimation("dino3.png_1");
    sp1.scale = 0.2;
  }
  
  //screech
  if (keyDown("h")) {
    sp6.visible = true;
  }
  if (sp6.x == 370) {
    sp6.velocityX = -3;
  }
  if (sp6.x == 100) {
    sp6.velocityX = 3;
  }
  if (keyWentUp("h")) {
    sp6.visible = false;
  }
  //counter
  if (keyDown("space")) {
    counter = counter + 1;
  }
  if (counter == 15) {
    sp2.velocityX = -5;
  }
  if (counter == 20) {
    sp2.velocityX = -6;
  }
  if (counter == 40) {
    sp2.velocityX = -9;
  }
  if (score >= 5000) {
    sp5.setAnimation("gameplay_greendiamond2_1");
    sp5.scale = 0.2;
  }
  else {
    sp5.setAnimation("apple_1");
    sp5.scale = 0.5;
  }
  if (keyDown("space")) {
    jumpc = jumpc + 1;
  }
  
  //draw
  drawSprites();
  
  //score and health
  fill("blue");
  textSize(20);
  text("Health:", 20, 30);
  text (health, 90, 30);
  text("Score:",20,50);
  text(score, 90,50);
  text("press r on your keyboard", 20,70);

  //NEXT LEVEL 2
  if (score >= 5000) {
    fill("blue");
    textSize(20);
    bg1.setAnimation("background_landscape09_1");
    bg.setAnimation("background_landscape09_1");
    sp7.setAnimation("alienBlue_badge_1");
    sp7.scale = 1;
    sp5.setAnimation("gameplay_greendiamond2_1");
    textSize(40);
    fill("purple");
    text("Level 2",20,110);
    bone1.setAnimation("planet18_1");
    bone1.scale = 0.1;
    bone2.setAnimation("planet18_1");
    bone2.scale = 0.1;
  }
  
  //NEXT LEVEL 3
  if (score >= 1000000) {
    bg1.setAnimation("background_underwater_17_1");
    bg.setAnimation("background_underwater_17_1");
    sp2.setAnimation("fish_01_1");
    sp7.setAnimation("fish_08_1");
    sp7.scale = 0.2;
    bone1.setAnimation("shell_08_1");
    bone2.setAnimation("shell_08_1");
  }
  
  //info
  if (keyDown("r")) {
    background("green");
    sp2.velocityX = 0;
    textSize(20);
    fill("black");
    textSize(11);
    text("THIS IS THE REAL/ORIGANAL VERSION OF THE DINO GAME ON CODE.ORG", 5, 50);
    textSize(20);
    text("Made by Zeno", 20, 100);
    text("CEO & CO-founder of Mountain Gaming", 20, 130);
    text("Play FLOOR IS NEON RED", 20, 160);
    text("Press space to jump, q to quit, r for this", 20, 190);
    text("press u for update log", 20, 220);
    text("press c for credits", 20, 250);
  }
  else {
    sp2.velocityX = -4;
  }
  
  //quit
    if (keyDown("q")) {
    health = -200;
  }
  
  if (keyDown("alt")) {
    score = score + 100000;
  }
  if (keyDown("ctrl")) {
    health = 100;
  }
  if (keyDown(TAB)) {
    sp1.y = 70;
    score = score + 10000000; 
    health = health + 10000000;
    rocko = rocko + 10000000;
  }
  
  //update log
  if (keyDown("u")) {
    background("black");
    textSize(50);
    text("UPDATE LOG", 40, 100);
    textSize(30);
    fill("green");
    text("-New win screen", 40, 150);
    text("-New apple (gives health)",40,180);
    text("-New cactus (why not)", 40, 210);
    text("-New fly (villan)",40, 240);
    text("-New counter!",40,270);
    text("-New change at 1k clicks!",40,300);
    text("-New enemy at 2000!",40,330);
    text("-New bone (100+)",40,360);
    text("-New level!",40,390);
    sp2.velocityX = 0;
  }
  
  //credits
  if (keyDown("c")) {
    background("black");
    textSize(50);
    text("CREDITS", 40, 100);
    textSize(30);
    fill("green");
    text("-Zeno, Scripter & Builder", 40, 150);
    text("-Wesley, Builder",40,180);
    text("-Xavier, Tester", 40, 210);
    text("-Preston, Tester", 40, 240);
    sp2.velocityX = 0;
  }
  
  //side script
  if (score >= 100000) {
    fill("black");
    noStroke();
    rect(0,330,120);
    textSize(50);
    fill("green");
    text("Hack",5, 380);
  }
  if (mousePressedOver(funny)) {
    health = health + 1000000000000000000000000000000000000000000000000000009;
    score = score + 10000;
    sp1.scale = 0.1;
    counter = 1000;
    sp1.setAnimation("android");
    sp1.rotation = randomNumber(-1000,10000);
  }

  //health help
  if (sp5.setAnimation("gameplay_greendiamond2_1")) {
    if (sp1.isTouching(sp5)) {
      health = health + 10000000;
    }
  }
  
  //Additional GUI
  if (keyDown("0")) {
    background("black");
    textSize(50);
    text("EXPLOITS", 40, 100);
    textSize(30);
    fill("green");
    text("-H: Screech pops up.", 40, 150);
    text("-ALT: Hack gui pops up.",40,180);
    text("-CTRL: Revives you.", 40, 210);
    text("-TAB: Puts you at the top", 40, 240);
    text("-B: Turn into a banana",40,270);
    text("Made by Anonymous....",40,300);
    sp2.velocityX = 0;
  }
  
  //Avatars

  if (keyDown("BACKSPACE")) {
    background("black");
    textSize(50);
    text("AVATARS", 40, 100);
    textSize(30);
    fill("green");
    text("-p: Original Dino Avatar.", 40, 150);
    text("-b: Banana avatar.",40,180);
    text("-d:  reset your avatar.", 40, 210);
    text("Made by MGS", 40,300);
    sp2.velocityX = 0;
  }
  
  if (keyDown("k")) {
    sp2.scale = 1;
    sp2.setAnimation("screech");
  }
  if (keyDown("b")) {
    prompt("You are changing your main avatar to a banana. Do you wish to continue?");
    sp1.setAnimation("face_banana_1");
    sp1.scale = 0.3;
  }
  if (keyDown("d")) {
    prompt("You are resetting your avatar. Do you wish to continue?");
    sp1.setAnimation("dino2");
    sp1.scale = 1;
  }
  if(keyDown("p")) {
    prompt("You are changing your main avatar to the original dino. Do you wish to continue?");
    sp1.setAnimation("dino");
    sp1.scale = 0.8;
  }
  
  //auto
  if (keyDown(SHIFT)) {
    score = 100e+30;
    health = 1000000000;
  }
  if(keyDown(RIGHT_ARROW)) {
    prompt("You are reseting your entire game.");
    health = 100;
    score = 0;
    sp2.x = 400;
  }

  //blob
  if (score >= 5000) {
    sp2.setAnimation("images.jpeg_1");
    sp2.scale = 1;
  }
  
  //Win
  if (score >= 100e+30) {
    background("black");
    textSize(50);
    fill("blue");
    text("You won!" , 40, 100);
    text("Good Job.. :)", 40, 150);
    textSize(25);
    text("PLAY FLOOR IS NEON RED",40, 200 );
    text("on ROBLOX (:",40,230);
    text("I KNOW IT'S LOW QUAILITY",40, 260);
    text("DEAL WITH IT >:(", 40, 300);
    text("Score:",40,350);
    text(score, 130, 350);
    sp2.velocityX = 0;
  }
  
  //Lose
  if (health <= -10) {
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
    text('Rockets:', 210, 350);
    text(rocko, 310, 350);
    text("Press the right arrow to restart!", 40, 380);
    sp2.velocityX = 0;
                                              
    //console
    console.log("test");
  }
}
   
