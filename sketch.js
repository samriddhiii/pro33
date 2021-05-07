const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var backgroundImg;
var charaimg;
var kidsprite;
var snow=[];

function preload(){
  backgroundImg = loadImage("snow1.jpg");
  charaimg = loadImage("character.png")
}

function setup() {

   engine = Engine.create();
   world = engine.world;
  createCanvas(windowWidth,windowHeight);

  kidsprite = createSprite(400, height-180, 50, 50);
  kidsprite.addImage(charaimg)
  kidsprite.scale=.5;

  //if(frameCount % 150 === 0){
for(var i=0; i<100; i++){
  snow.push(new snowfall(random(0,width),random(0,height),50))
}
 // }

}

function draw() {
  background(backgroundImg); 
  drawSprites();

  Engine.update(engine)

  if(keyIsDown(LEFT_ARROW)){
   kidsprite.x=kidsprite.x-50
  }

  if(keyIsDown(RIGHT_ARROW)){
    kidsprite.x=kidsprite.x+50
   }


  //if(frameCount%2===0){
   //snow= new snowfall(500,500,50)
  //}
  for(var i=0; i<snow.length; i++){
    snow[i].display()
    snow[i].update()
  }


}

function keyPressed(){
  if(keyCode===32){
    kidsprite.y=kidsprite.y-50
  }
  //console.log(1)
}

function keyReleased(){
  if(keyCode===32){
    kidsprite.y=kidsprite.y+50
  }
}