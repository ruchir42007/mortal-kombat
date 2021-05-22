var scorpion,scorp,subZ,subzero;
var scorpio_k,scorpio_p;
var subzero_k,subzero_p;
var bg;
const World=Matter.World;
const Body=Matter.Body;
const Engine=Matter.Engine;
var  world,body,engine
var s_health=100,z_health=100;
  function preload(){
      bg=loadImage("images/bg1.jpg");
      scorpion=loadImage("images/scorpiopos.png");
      subzero=loadImage("images/sub zeropos.jpg");
      scorpio_k=loadImage("images/kick.png");
      scorpio_p=loadImage("images/punch.png");
      subzero_k=loadImage("images/sub zero kick.png");
      subzero_p=loadImage("images/sub zero punch.png");

  }
  

function setup(){
    var canvas = createCanvas(displayWidth-20,displayHeight-30);
    subZ=createSprite(displayWidth*3/4,displayHeight/2)
    subZ.scale=0.3;
    scorpio=createSprite(displayWidth*1/4,displayHeight/2);

    subZ.addImage("subz",subzero);
    scorpio.addImage("scorp",scorpion);
   
    

}

function draw(){
    
    scorpio.setCollider("rectangle",0,0,110,400);
    scorpio.debug=true;
    subZ.setCollider("rectangle",0,0,600,1200);
    subZ.debug=true;
    background(0);
    image(bg,0,0,displayWidth,displayHeight);
    // rect(displayWidth*3/4,50,300,30);
    // rect(displayWidth*1/27,50,300,30);
    if(keyWentDown("space")){
        scorpio.changeImage(scorpio_k);
    
    }
    if(keyWentUp("space")){
        scorpio.changeImage(scorpio);
    }
    if(keyDown("z")){
        scorpio.x-=10
    }
    if(keyDown("c")){
        scorpio.x+=10
    }
    if(keyDown("left")){
        subZ.x-=10
    }
    if(keyDown("right")){
        subZ.x+=10
    }
    if (scorpio.isTouching(subZ)){
        z_health=z_health-20;
        
    }
    if(z_health==100){
        fill("green");
        rect(displayWidth*3/4,50,300,30);
    }
    if(z_health==80){
        fill("yellow");
        rect(displayWidth*3/4,50,220,30);
    }
    if(z_health==60){
        fill("orange");
        rect(displayWidth*3/4,50,140,30);
    }
    if(z_health==40){
        fill("red");
        rect(displayWidth*3/4,50,60,30);
    }
    if(z_health==20){
    fill("black")
    rect(displayWidth*1/27,50,0,30);
    }
    if (subZ.isTouching(scorpio)){
        s_health=s_health-20;
        
        }
        if(s_health==100){
            fill("green");
            rect(displayWidth*1/27,50,300,30);
        }
        if(s_health==80){
            fill("yellow");
            rect(displayWidth*1/27,50,220,30);
        }
        if(s_health==60){
            fill("orange");
            rect(displayWidth*1/27,50,140,30);
        }
        if(s_health==40){
            fill("red");
            rect(displayWidth*1/27,50,60,30);
        }
        if(s_health==20){
            fill("black");
            rect(displayWidth*1/27,50,20,30);
        
    }

    drawSprites();
   
    
}