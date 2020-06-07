var car,wall,wall2;
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1400,200,60,height/2);
  wall2=createSprite(1500,200,60,height/2);
  car.velocityX=speed;
  car.shapeColor="white";
  wall.visible=false;
}

function draw() {
  background(0);  
  drawSprites();
  if(wall.x-car.x<(car.width+wall.width+1)/2){
car.velocityX=0;
car.x=1450;
deformation=0.5*weight*speed*speed/22500;
if(deformation<100){
  car.shapeColor="green";
}else if(deformation>100&&deformation<180){
  car.shapeColor="yellow";
}else if(deformation>180){
  car.shapeColor="red";
}

    }
}