
var backgroundImage
var spaceship,spaceship_imgcee
var asteroid 
var laser
var shield
var powerUp
  function preload(){
  backgroundImage = loadImage("background.jpg")
  spaceship_img = loadImage("spaceshipimg.png")
  asteroidimg= loadImage("asteroid.png")
  laserimg = loadImage("laser.png")
  shieldimg= loadImage("shield.png")
  powerUpimg = loadImage("powerup.png")
  
  }
  
function setup() {
createCanvas(800,600)
spaceship = createSprite(100,300,40,40)
spaceship.addImage(spaceship_img)
spaceship.color = "white"
spaceship.scale = 0.5
if (keyIsDown("a"))
{
  spaceship.velocityY = 0
  spaceship.velocityX=-5
}

if (keyIsDown("w"))
{
  spaceship.velocityY = -5
  spaceship.velocityX=0
}
if (keyIsDown("s"))
{
  spaceship.velocityY = 0
  spaceship.velocityX=5
}
if (keyIsDown("x"))
{
  spaceship.velocityY = -10
  spaceship.velocityX=0
}
}

function draw() {
  background(backgroundImage)
  drawSprites()
}
