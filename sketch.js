var ground1,paper1,dustbin1,dustbin2,dustbin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	

	engine = Engine.create();
	world = engine.world;	

	//Create the Bodies Here.
	ground1 = new Ground(800,680,1600,20);
	paper1 = new Paper(200,450,400);
	dustbin1 = new Dustbin(1100,680,150,20);
	dustbin2 = new Dustbin(1045,615,20,150);
	dustbin3 = new Dustbin(1155,615,20,150);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(220);
  Engine.update(engine);
  ground1.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}




function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}