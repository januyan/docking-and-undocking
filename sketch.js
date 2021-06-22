var bg, issimg, sc1, sc2, sc3, sc4;
var iss, spacecraft;
var  hasdocked = false;
function preload(){
  issimg = loadImage("iss.png");
  bg = loadImage("spacebg.jpg");
  sc1 = loadImage("spacecraft1.png");
  sc2 = loadImage("spacecraft2.png");
  sc3 = loadImage("spacecraft3.png");
  sc4 = loadImage("spacecraft4.png");
 }

function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(285, 240);
  spacecraft.addImage(sc1);
  spacecraft.scale = 0.15;

  iss = createSprite(330, 130);
  iss.addImage(sc1)
  iss.scale = 0.25
}

function draw() {
  background(bg);  
  spacecraft.addImage(sc1);
  
  if(!hasdocked){
    spacecraft.x = spacecraft.x + random(-1, 1);

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y - 2;
    }
    
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(sc1);
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(sc1);
      spacecraft.x = spacecraft.x + 1;
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(sc1);
      spacecraft.x = spacecraft.x - 1;
    }
  }
  
  if(spacecraft.y <=(iss.y +70)&& spacecraft.x <=(iss.x -10)){
    hasdocked = true;
    textSize(25);
    fill("red");
    text("Docking Successful!", 200, 300);
  }
  
  drawSprites();
}