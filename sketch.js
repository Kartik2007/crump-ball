var ball;
var rect1;
var rect2;
var rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;






function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

	rect1 = createSprite(300,600,10,140);
	rect1.shapeColor = "red";
	rect2 = createSprite(450,650,300,10);
	rect2.shapeColor = "red";
	rect3 = createSprite(600,600,10,140);
	rect3.shapeColor = "red";
	Ball1= createSprite(50,645,56,46) ;
	Ball1.shapeColor = "green";



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;





	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);

  
  drawSprites();
 
}

function KeyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}









