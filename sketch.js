var block;
var movingBlock;

function setup() {
  createCanvas(800,400);
 block = createSprite(400, 200, 50, 50);
 block.shapeColor="green";
 block.debug=true;
 movingBlock = createSprite(100, 200, 50, 50);
 movingBlock.shapeColor="green";
 movingBlock.debug=true;
}


function draw() {
  background(0,0,0);  
  movingBlock.x=World.mouseX;
  movingBlock.y=World.mouseY;
console.log(block.x-movingBlock.x);

if(block.x-movingBlock.x<block.width/2+movingBlock.width/2
  && movingBlock.x-block.x<block.width/2+movingBlock.width/2
  && block.y-movingBlock.y<block.height/2+movingBlock.height/2
  && movingBlock.y-block.y<block.height/2+movingBlock.height/2){
block.shapeColor="red";
movingBlock.shapeColor="red";
}
else
{
  block.shapeColor="green";
  movingBlock.shapeColor="green";
}

  drawSprites();
}