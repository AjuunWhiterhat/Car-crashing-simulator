
var car,car2,car3,car4, wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 40, 20,20);
  car.velocityX = speed;
  
  car2=createSprite(50, 140, 20,20);
  car2.velocityX = speed;
  
  car3=createSprite(50, 240, 20,20);
  car3.velocityX = speed;
  
  car4=createSprite(50, 340, 20,20);
  car4.velocityX = speed
 
  wall=createSprite(1500,200,60,height+2);
  wall.shapeColor = rgb(80,80,80);


}

function draw() {
  background(210);  
  car1accident();
  car2accident();
  car3accident();
  car4accident();
  
  drawSprites();

  

}

function car1accident(){
  if(car.isTouching(wall)){
    deformation = 0.5*weight*speed*speed/22500;
    car.velocityX =0;
    car.collide(wall);
    
    if(deformation<100){
    car.shapeColor = rgb(0,225,0);
    }

    else if(deformation>=100 && deformation<=180){
      car.shapeColor = rgb(230,230,0);
    }

    else if(deformation>180){
      car.shapeColor = rgb(255,0,0);
    }
  }
}

function car2accident(){
  if(car2.isTouching(wall)){
    deformation = 0.5*weight*speed*speed/22500;
    car2.velocityX =0;
    car2.collide(wall);
    
    if(deformation<100){
    car2.shapeColor = rgb(0,225,0);
    }

    else if(deformation>=100 && deformation<=180){
      car2.shapeColor = rgb(230,230,0);
    }

    else if(deformation>180){
      car2.shapeColor = rgb(255,0,0);
    }
  }
}

function car3accident(){
  if(car3.isTouching(wall)){
    deformation = 0.5*weight*speed*speed/22500;
    car3.velocityX =0;
    car3.collide(wall);
    
    if(deformation<100){
    car3.shapeColor = rgb(0,225,0);
    }

    else if(deformation>=100 && deformation<=180){
      car3.shapeColor = rgb(230,230,0);
    }

    else if(deformation>180){
      car3.shapeColor = rgb(255,0,0);
    }
  }
}

function car4accident(){
  if(car4.isTouching(wall)){
    deformation = 0.5*weight*speed*speed/22500;
    car4.velocityX =0;
    car4.collide(wall);
    
    if(deformation<100){
    car4.shapeColor = rgb(0,225,0);
    }

    else if(deformation>=100 && deformation<=180){
      car4.shapeColor = rgb(230,230,0);
    }

    else if(deformation>180){
      car4.shapeColor = rgb(255,0,0);
    }
  }
}