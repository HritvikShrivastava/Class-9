
var sprite;

function setup() {
  createCanvas(800,800);
  sprite = createSprite(400, 400, 100, 100)
}



function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW)) {
    sprite.position.x=sprite.position.x+5
    }

  if (keyIsDown(UP_ARROW)) {
    sprite.position.y=sprite.position.y-5
     }

  if (keyIsDown(LEFT_ARROW)) {
    sprite.position.x=sprite.position.x-5
     }

  if (keyIsDown(DOWN_ARROW)) {
    sprite.position.y=sprite.position.y+5
      }

  drawSprites()

}
