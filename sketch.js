const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


function preload(){

}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(1800,1000);

  ground= new Ground()
 
  s1 = new Stand(500,430,270,10);
  s2 = new Stand(840,350,200,10);
 
 //row one
  block1 = new Block(400,275+60,30,40);  
  block2 = new Block(430,275+60,30,40);
  block3 = new Block(460,275+60,30,40);
  block4 = new Block(490,275+60,30,40);
  block5 = new Block(520,275+60,30,40);
  block6 = new Block(550,275+60,30,40);
  block7 = new Block(580,275+60,30,40);
  block8 = new Block(610,275+60,30,40);
  //row two
  block9 = new Block(430,235+60,30,40);
  block10 = new Block(460,235+60,30,40);
  block11 = new Block(490,235+60,30,40);
  block12 = new Block(520,235+60,30,40);
  block13 = new Block(550,235+60,30,40);
  block14 = new Block(580,235+60,30,40);
  //row three
  block15 = new Block(460,195+60,30,40);
  block16 = new Block(490,195+60,30,40);
  block17 = new Block(520,195+60,30,40);
  block18 = new Block(550,195+60,30,40);
  //row four
  block19 = new Block(490,155+60,30,40);
  block20 = new Block(520,155+60,30,40);
  //row five
  block21 = new Block(505,115+60,30,40);

 
  //row one
  blocks1 = new Block(780,175+50,30,40);
  blocks2 = new Block(810,175+50,30,40);
  blocks3 = new Block(840,175+50,30,40);
  blocks4 = new Block(870,175+50,30,40);
  blocks5 = new Block(900,175+50,30,40);
  //row two
  blocks6 = new Block(810,135+50,30,40);
  blocks7 = new Block(840,135+50,30,40);
  blocks8 = new Block(870,135+50,30,40);
  //row three
  blocks9 = new Block(840,95+50,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  rope = new SlingShot(this.ball,{x:200,y:350});

}

function draw() { 
 background("lightgrey")
  Engine.update(engine);

  ground.display()
  textFont("Audiowide")
  textSize(30)
 text ("Vaibhav Raj",30,30)
  strokeWeight(2);
  stroke(15);
  
  s1.display();
  s2.display();
  
  stroke(15);
  fill("yellow")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  stroke(15)
  fill("cyan")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
 stroke(15)
 fill("lightgreen")
  block15.display();
  block16.display();
  block17.display();
  block18.display();
    stroke(15)
    fill("pink")
  block19.display();
  block20.display();
 stroke(15)
 fill("violet")
  block21.display();

  stroke(15)
  fill("cyan")
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  stroke(15)
  fill("violet")
  blocks6.display();
  blocks7.display();
  blocks8.display();
  stroke(15)
  fill("lightpurple")
  blocks9.display();
 
  ellipse(ball.position.x,ball.position.y,30);
  rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope.fly();
}
