
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var ball;


function setup() {
  createCanvas(1350, 700);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;

  
  
  

  ball_options ={
    restitution: 0.1,
	density: 1.2,
	isStatic: false

    
  }

  ball = Bodies.circle(100, 100, 15, ball_options);
  World.add(world, ball);

  ground =new Ground(width/2, 670, width, 20);
  left = new Ground(700, 600, 20, 120);
  right = new Ground(1000, 600, 20, 120);
  
  
Engine.run(engine)


 
  
  
}

function draw() 
{
  background(51);
 
  
 

  ellipse(ball.position.x, ball.position.y, 35, 35);
  ground.show();
  left.show()
  right.show()
  Engine.update(engine);

  
}



function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x:40, y: -40});
	}
	
}



