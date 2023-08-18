var bk;

function preload(){
bkImg=loadImage("bk.jpg")
goalImg=loadImage("goalKee.png")
}


function setup(){
createCanvas(800,600); // width height

goal=createSprite(400,400,20,20);
goal.addImage(goalImg);
goal.scale=0.5

line1=createSprite(90,300,5,300)
line1.shapeColor="black"

line2=createSprite(690,300,5,300)
line2.shapeColor="black"

}

function draw(){
background(bkImg);

goal.velocityX=-5
goal.bounceOff(line1)

  
drawSprites()
}