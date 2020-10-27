var speed, wall, car, weight;

function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

  car = createSprite(50, 200, 50, 50);
  wall= createSprite(1500,200,60,200);
  wall.shapeColor = rgb(80,80,80);

  car.velocityX = speed;

  
}

function draw() {
  background("purple"); 
  deformation = Math.round((0.5*weight*speed*speed)/22500); 

  if(wall.x-car.x < ((car.width/2) + (wall.width/2))){
    
    car.velocityX = 0;
    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
    if(deformation>99 && deformation <180){
      car.shapeColor = color(230,230,0);
    }
    if(deformation>179){
      car.shapeColor = color(255,0,0);
    }
  }


  drawSprites();

  textSize(20);
  fill("white");
  stroke("yellow");
  text("Speed: "+speed,1200,20);
  text("Weight: "+weight,1200,40);
  text("Deformation: "+deformation,1200,60);
}