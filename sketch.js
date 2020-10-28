var movingrect,fixedrect;

function setup() {
   createCanvas(800,400);
movingrect=createSprite(400,50,100,40)
fixedrect=createSprite(600,100,80,100)
movingrect.shapeColor="green"
fixedrect.shapeColor="green"


}

function draw() {
  background("black");  
 movingrect.x=World.mouseX
 movingrect.y=World.mouseY
 
  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
   &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2
   &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    )
 {
movingrect.shapeColor="red"
fixedrect.shapeColor="red"


 }

 else{
movingrect.shapeColor="green"
fixedrect.shapeColor="green"
 }
  drawSprites();
}