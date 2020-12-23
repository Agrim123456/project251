// var rect1,rect2,
var rect3
var ground
var paperImage,dusrtbinImage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperImage=loadImage("paper.png");
	dustbinImage=loadImage("dustbingreen.png");


}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
//	
	ground=Bodies.rectangle(width/2,height-35,width,10,{isStatic:true});
	
	World.add(world,ground);
	//rect1=createSprite(620,635,10,50)
	//rect1.shapeColor="white"
	//rect2=createSprite(780,635,10,50)
	//rect2.shapeColor="white"
	rect3=createSprite(700,580,150,10)
	rect3.shapeColor="white"
	rect3.addImage(dustbinImage);
	rect3.scale=0.5

	//Create the Bodies Here.


	
	var options={
		
		restitution:0.3,
		friction:0.5,
		density:1.2,
	}
	paper=Bodies.circle(200,400,20,options);
	World.add(world,paper)
	Engine.run(engine);
	//paper1=createSprite(400,400,20,200)
	//paper1.scale=0.5

	//paper1.addImage(paperImage)
}


function draw() {
 // rectMode(CENTER);
  background("white");
  fill("pink");
 imageMode(CENTER)
  image(paperImage,paper.position.x,paper.position.y,50,50);
  fill("yellow")
rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width,10)
  
  drawSprites();
 
}
function keyPressed(){
if (keyDown(UP_ARROW)){
	Matter.Body.applyForce(paper,paper.position,{x:55,y:-75}
	)
}
}


