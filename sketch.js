const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, polygon_img;
var slingShot, ground, stand;
var block1, block2, block3,block4,block5, block6, block7, block8, block9;

function preload() {
   polygon_img = loadImage("Polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
   
  var options = {
    isStatic: false,
    restitution:0.8,
    friction:1.0,
    density:1.0
}

  polygon = Bodies.circle(50,200,20,options);
  World.add(world, polygon);
  
    slingShot = new Slingshot(polygon, {x:100, y:200});

    ground = new Ground(0,height,2000,20);
    stand = new Ground(380, 270, 300, 10);
    
    //level two
    block1 = new Box(330,235,30,40);
    block2 = new Box(360,235,30,40);
    block3 = new Box(390,235,30,40);
    block4 = new Box(420,235,30,40);
    block5 = new Box(450,235,30,40);
    //level three
    block6 = new Box(360,195,30,40);
    block7 = new Box(390,195,30,40);
    block8 = new Box(420,195,30,40);
    //top
    block9 = new Box(390,155,30,40);

}

function draw() {
  rectMode(CENTER)
  background("skyblue"); 
  
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  
  slingShot.display();
  ground.display();
  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();  
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}