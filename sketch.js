var bg,bgImg;
var player, shooterImg, shooter_shooting;
var cityzz,flyingzz
var heart
var heartgd = 0
var gameoverimg




function preload(){
  
  shooterImg = loadAnimation("assets/shooter_2.png")
  shooter_shooting = loadAnimation("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  cityz = loadImage("city zombie.png")
  
  flyingz = loadImage("flying zombie.png")
  flyingz2 = loadImage("flying zombie 2.png")
  kidz = loadImage("kid zombie.png")
  ladyz = loadImage("lady zombie.png")
  normalz = loadImage("normal zombie.png")
  cakez = loadImage("zombie cake.png")
  dogz = loadImage("zombie dog.png")
  risingz = loadImage("zombie rising.png")
  risingz2 = loadImage("zombie rising 2.png")
  swordz = loadImage("zombie sword.png")
  girlz = loadImage("zombie girl.png")
  bullet = loadImage("bullet.png")
  heart3 = loadAnimation("assets/heart_3.png")
  heart2 = loadAnimation("assets/heart_2.png")
  heart1 = loadAnimation("assets/heart_1.png")
  gameoverimg = loadImage("gameover.png")
  

  //zombiesound = loadSound("zombie sound.mp3")


}

function setup(){
 
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)


edges = createEdgeSprites()
shoot = createImg("shootfire.png")
shoot.size(75,75)
shoot.position(200,10)

shoot.mousePressed(shoot1)

hearts = createSprite(1000,70)
hearts.addAnimation("h",heart3)
hearts.scale = 0.4
hearts.addAnimation("hq",heart2)
hearts.addAnimation("hw",heart1)





bg.scale = 1.1

risingzz = createSprite(1300,600,0,0)
risingzz.scale = 0.6
risingzz2 = createSprite(1250,500,0,0)
risingzz2.scale = 0.6
bulletk = createSprite(0,0,0,0)
bulletk.scale = 0.11



risingzz.addImage(risingz)
risingzz2.addImage(risingz2)
bulletk.addImage(bullet)







//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addAnimation("labe",shooterImg)
 player.addAnimation("la",shooter_shooting)
   player.scale = 0.5
   //player.debug = true
   player.setCollider("rectangle",0,0,300,300)

zombies = new Group()

GAMEOVER = createSprite(displayWidth,displayHeight)
GAMEOVER.addImage(gameoverimg)

}

function draw() {
  background(0); 

 

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-15
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+15
}


(player.collide(zombies,hit))

if(player.x<100){
 player.x = displayWidth-1150
}
//if(zombies.isTouching(player)){
  //heartgd +=1
  //zombies.destroyEach()
  // }
  
  if(heartgd == 3){
  hearts.changeAnimation("hq")
  GAMEOVER.visible = false
  }
  
  if(heartgd == 6 ){
  hearts.changeAnimation("hw")
  GAMEOVER.visible = false
  }
  if(heartgd == 9){
  hearts.destroy()
  GAMEOVER.visible = false
  }
  if(heartsgd = 10){
    GAMEOVER.visible = true
  }

  
  bulletk.bounceOff(zombies,qa)
  
//zombiesound.play()




  







player.collide(edges[2])
player.collide(edges[3])
randomm()
spawn()
dspawn()

shooting()


drawSprites();

}

function hit(player,flyingzz){
 flyingzz.destroy()
 player.velocityX = 0
 heartgd+=1
 /*cityzz.destroy()
 flyingzz2.destroy()
kidzz.destroy()
normalzz.destroy()
ladyzz.destroy()
cakezz.destroy()
//swordzz.destroy()
//girlzz.destroy()
dogzz.destroy()*/
}

function qa(bulletk,x){
bulletk.destroy()
x.destroy()
}

function shooting(){
  if(keyWentDown("space")){
 
    player.changeAnimation("la",shooter_shooting)
    bulletk = createSprite(player.x,player.y)
    bulletk.scale = 0.2
    bulletk.velocityX = 20
    bulletk.addImage(bullet)
    
   
  }
  
  
  else if(keyWentUp("space")){
    player.changeAnimation("labe",shooterImg)
  }
  
}


function shoot1(){
  player.changeAnimation("la",shooter_shooting)
  bulletk = createSprite(player.x,player.y)
  bulletk.scale = 0.2
  bulletk.velocityX = 20
  bulletk.addImage(bullet)
}
function mouseReleased(){
  player.changeAnimation("labe",shooterImg)
}




function randomm(){
  if (frameCount% (Math.round(random(250,500))) === 0){
    cityzz = createSprite(1300,(Math.round(random(550,600))),0,0)
    cityzz.scale = 0.6
    cityzz.velocityX = -2
    zombies.add(cityzz)
flyingzz = createSprite(1000,(Math.round(random(50,120))),0,0)
flyingzz.scale = 0.6
flyingzz.velocityX = -2
zombies.add(flyingzz)
flyingzz2 = createSprite(1040,(Math.round(random(50,50))),0,0)
flyingzz2.scale = 0.8
flyingzz2.velocityX = -2
zombies.add(flyingzz2)

cityzz.addImage(cityz)
flyingzz.addImage(flyingz)
flyingzz2.addImage(flyingz2)
   }
}





function spawn(){
  if (frameCount% (Math.round(random(300,550))) === 0){
    kidzz = createSprite(1090,(Math.round(random(400,700))),0,0)
    kidzz.scale = 0.6
    kidzz.velocityX = -3
    zombies.add(kidzz)
ladyzz = createSprite(900,(Math.round(random(500,600))),0,0)
ladyzz.scale = 0.6
ladyzz.velocityX = -1
zombies.add(ladyzz)
normalzz = createSprite(1000,(Math.round(random(600,700))),0,0)
normalzz.scale = 0.8
normalzz.velocityX = -2
zombies.add(normalzz)
cakezz = createSprite(750,(Math.round(random(650,700))),0,0)
cakezz.scale = 0.8
cakezz.velocityX = -1
zombies.add(cakezz)

kidzz.addImage(kidz)
ladyzz.addImage(ladyz)
normalzz.addImage(normalz)
cakezz.addImage(cakez)
   }
}




function dspawn(){
  if (frameCount% (Math.round(random(300,700))) === 0){
    dogzz = createSprite(850,(Math.round(random(500,700))),0,0)
    dogzz.scale = 0.6
    dogzz.velocityX = -3
    zombies.add(dogzz)
swordzz = createSprite(910,(Math.round(random(550,600))),0,0)
swordzz.scale = 0.6
swordzz.velocityX = -1
zombies.add(swordzz)
girlzz = createSprite(850,(Math.round(random(500,650))),0,0)
girlzz.scale = 0.6
girlzz.velocityX = -1
zombies.add(girlzz)

dogzz.addImage(dogz)
swordzz.addImage(swordz)
girlzz.addImage(girlz)
   }
}

