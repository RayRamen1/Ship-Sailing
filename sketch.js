var sea,seaImg
var ship,shipAnim

function preload(){
  seaImg = loadImage("sea.png");
  shipAnim = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");

  sea = createSprite(200,100,50,50)
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.4
 
  ship = createSprite(200,200,50,50)
 ship.addAnimation("movingShip",shipAnim);
 ship.scale = 0.25
}


function draw() {
  background(0);
 
  sea.velocityX = -3;

  if(sea.x<0){
    sea.x = sea.width/8
  }

  drawSprites();
}