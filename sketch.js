const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowflakes = []
var maxsnowflakes = 100

function preload(){
  backgroundIMG = loadImage("snow1.jpg");
  boyIMG = loadImage("winter boy.png")
  girlIMG = loadImage("winter girl.png")
}
function setup() {
  createCanvas(1200,600);
 engine = Engine.create();
 world = engine.world;

 
  boy = createSprite(200,550)
  boy.addImage(boyIMG)

  girl = createSprite(500,500);
  girl.addImage(girlIMG);

  if(frameCount % 150 === 0){
    for(var i=0; i<maxsnowflakes; i++){
    snowflakes.push(new snowflake(random(0,400), random(0,400)));
    }
  }    
}

function draw() {
  background(backgroundIMG);  
  Engine.update(engine);
  for(var i = 0; i<maxsnowflakes; i++){
    snowflakes[i].display();
    }
  
  drawSprites();

}