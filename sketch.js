let ground;
let lander;
var lander_img;
var bg_img;
var moon;
var moon_img;

var vy = 0;
var g = 0.05;

function preload()
{
  lander_img = loadImage("normal.png");
  moon_img = loadImage("moon.png")
  bg_img = loadImage("bg1.webp");

}

function setup() {
  createCanvas(800,1200);
  
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200)

  moon = createSprite(600,550);
  moon.addImage(moon_img);
  moon.scale = 1;
  moon.setCollider("rectangle",0,0,200,200)

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  imageMode(CENTER);
  image(bg_img,275,550);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
}

function upward_thrust()
{
  vy = -1;
}

