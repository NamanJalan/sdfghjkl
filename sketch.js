var snake;
var food;
function setup(){
  createCanvas(400,400);
  snake = createSprite(50,50);
  food = createSprite(20,20);
}
function draw(){
  createEdgeSprites();
  if(keyIsDown === LEFT_ARROW){
    snake.velocityX = -2;
  }
  if(keyIsDown === RIGHT_ARROW){
    snake.velocityX = 2;
  }
  if(keyIsDown === UP_ARROW){
    snake.velocityX = -2;
  }
  if(keyIsDown === DOWN_ARROW){
    snake.velocityX = 2;
  }
  if(snake.isTouching(food)){
    food.hide();
  }
  if(snake.isTouching(edges)){
    snake.hide();
    food.hide();
  }
}
function hide(){
  sprite.destroy();
}