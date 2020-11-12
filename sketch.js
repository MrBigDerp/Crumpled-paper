
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,680,800,20)

	side1= new Box(500,660,150,20)
	side2 = new Box(430,620,20,100)
	side3 = new Box(580,620,20,100)
	ball= new Paper(100,620,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ground.display();
 side1.display();
 side2.display();
 side3.display();
 ball.display();
}
function keyPressed() 
{ if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ball.body, ball.body.position, {x: 45, y:-45}); } }


