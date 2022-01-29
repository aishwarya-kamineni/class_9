
function setup() {
  //cfreates the background
  createCanvas(400,400); //width,height

  ball = createSprite(200,200,50,50)

}

function draw() 
{
  background("red");

  if ( keyIsDown(RIGHT_ARROW) ){
    ball.x = ball.x + 5 //ball.x += 5 --> unary operator
  }

  drawSprites()
}

//keyDown("RIGHT_ARROW")
//keyIsDown(RIGHT_ARROW)

