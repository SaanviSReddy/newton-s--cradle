
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
	ball1 = new Ball(100, 500)
	ball2 = new Ball(200, 500)
	ball3 = new Ball(300, 500)
	ball4 = new Ball(400, 500)
	ball5 = new Ball(500, 500)
	ground = new Ground(350, 200, 800, 50)
	chain1 = new Chain(ball1.body, {x:100, y:200})
	chain2 = new Chain(ball2.body, {x:200, y:200})
	chain3 = new Chain(ball3.body, {x:300, y:200})
	chain4 = new Chain(ball4.body, {x:400, y:200})
	chain5 = new Chain(ball5.body, {x:500, y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
ball1.display()
ball2.display()
ball3.display()
ball4.display()
ball5.display()
ground.display()
chain1.display()
chain2.display()
chain3.display()
chain4.display()
chain5.display()

  drawSprites();
 
}

function keyPressed() {

	if (keyCode===32) {
Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-10, y:-10})

console.log(ball1.body.position.x, ball1.body.position.y)
	}

}


