
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango1,mango2,mango1,mango2;
var boy,boyImg,tree;
var ground;
var sling;

function preload (){
boyImg = loadImage ("Plucking mangoes/boy.png")
}


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (600,800,1200,20);
	tree = new Tree (600,300,500,500);
	
    mango1 = new Mango(730,380,50,50);
	mango2 = new Mango(760,320,50,50);
	mango3 = new Mango(790,360,50,50);
	mango4 = new Mango(820,440,50,50);
	mango5 = new Mango(850,480,50,50);
	mango6 = new Mango(880,400,50,50);
	
	

	stone = new Stone (100,200,50);
	
	string = new Sling(stone.body,{x:100, y:500});

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
    Engine.update(engine);
	strokeWeight(4);
	
	ground.display();
	
	tree.display();
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();

	image(boyImg,200,525,400,400)
    
	stone.display();

	string.display();


	detectcollision (stone,mango1);
	detectcollision (stone,mango2);
	detectcollision (stone,mango3);
	detectcollision (stone,mango4);
	detectcollision (stone,mango5);
	detectcollision (stone,mango6);

   
	
    
  
  drawSprites();
 
}
function keyPressed (){
	if (keyCode===32){
		Matter.Body.setPosition(stone.body,{x:300,y:100})
		launchObject
	}
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    string.fly();
}

function detectcollision (stone,mango){
	var mangoBodyPosition = mango.body.position
	var stoneBodyPosition = stone.body.position 

	var distance = dist (stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance <-mango.r+stone.r){
		Matter.body.setStatic (mango.body,false);
	}
}


