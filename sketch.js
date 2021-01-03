var thickness, wall;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83)
}

function draw() {
  background(0, 0, 0);
  
  bullet = createSprite(50, 200, 15, 5);
  bullet.shapeColor = color(255, 255, 255);
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness)
    
    if(damage<10){
      bullet.shapeColor = color(0, 255, 0);
    } 
    if(damage=10||damage>10){
      bullet.shapeColor = color(255, 0, 0);
    }
  }
  hasCollided();
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width
  wallleftEdge = lwall.x
  if (bulletRightEdge>=wallleftEdge){
    return true
  }
  return false;
}