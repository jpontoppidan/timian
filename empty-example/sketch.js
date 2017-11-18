//var song;
var value = 0
var man
var ghost
var blackhole
    //var death = 0
var bullets
var bhbs
var bhb
var lives = 10
var follow

function preload() {
    song = loadSound('Soundtest.mp3');
    particleImage = loadImage("../empty-example/assets/particles.png")
    bulletImage = loadImage("../empty-example/assets/bullet.png")
    blackhole = loadAnimation("../empty-example/assets/BlackHole/bh0001.png", "../empty-example/assets/BlackHole/bh0024.png")
}

function setup(type) {
    createCanvas(1536, 793);


    //man = new Man()



    man = createSprite(0, height / 2, 100, 100)
        //man.addAnimation("../empty-example/assets/Boo.png", "../empty-example/assets/Boo.png");
    man.debug = false
    man.depth = 10
    man.friction = 0.009
    man.maxSpeed = 25
    man.scale = 0.8
        //man.scale = 0.2
    ghosts = new Group();
    particleImage = loadImage("../empty-example/assets/particles.png")
    bulletImage = loadImage("../empty-example/assets/bullet.png")
        //BlackHole
    blackhole = createSprite(1350, height / 2)
    song.loop()


    blackhole.addAnimation("move", "../empty-example/assets/BlackHole/bh0001.png", "../empty-example/assets/BlackHole/bh0024.png");
    blackhole.changeAnimation("move")
    blackhole.setCollider("circle", 0, 0, 400)
    blackhole.scale = 0.2
    blackhole.mass = 2 + blackhole.scale;

    // blackhole.debug = true
    blackhole.depth = 10
        //blackhole.scale = 0.3
    blackhole.debug = false
    bullets = new Group()
    bhbs = new Group()
    bhb = new Group()
    createFollow()

    setInterval(function() {
        //var angle = math.atan2(man.position.x/man.position.y)
        var bullet = createSprite(blackhole.position.x, blackhole.position.y);
        bullet.addImage(bulletImage);
        bullet.setSpeed(0, 180 /*angle*/ );

        bullet.life = 300;
        // bullet.debug = true
        bullet.setCollider("circle", 0, 0, 20)
        bullet.attractionPoint(7, man.position.x, man.position.y)

        //bullet.attractionPoint(50, man.position.x, height/2)
        bhbs.add(bullet);
        //bhbs.overlap (man, manHit)
    }, 1122)


    setInterval(function() {
        //var angle = math.atan2(man.position.x/man.position.y)
        for (var i = 0; i < 20; i++) {
            var bullet = createSprite(blackhole.position.x, blackhole.position.y);
            bullet.addImage(bulletImage);
            bullet.setSpeed(7, random(150, 200));
            //bullet.friction = 0.95;
            bullet.life = random(100, 200);
            bullet.debug = false
            bullet.setCollider("circle", 0, 0, 40)
            bullet.scale = .4
            bhb.add(bullet);
        }

    }, 4488)
}


//for (var i = 0; i < 5; i++)
//var ghost = createSprite(width/2, height/2, 100, 50)

//ghost.debug
//ghost.addAnimation("../empty-example/assets/LargePlatform.png", "../empty-example/assets/LargePlatform.png");
//ghost.scale = 0.2
//ghost.depht = 10
//ghosts.add(ghost)

//this.savedsnapshots = []
//ghost = createSprite(100, 100)




//for (i=0; i<this.savedsnapshots.length; i++) {
//        ghost(this.savedsnapshots[i].x, this.savedsnapshots[i].y, 80, 30)


//this.takesnapshot = function() {
// if (this.savedsnapshots.length<4){
//  this.savedsnapshots.push({x:mouseX, y:mouseY})
//}
//}






function draw() {
    background(50);
    //ghost.show();
    fill(0)
        //ambientLight(1, 12)
        //man.show();
        //man.update()
    fill(255);
    noStroke();
    textSize(50);
    textAlign(RIGHT, RIGHT);
    text(lives, width, height);
    /*else {
     text("you Loose!", width/2, height/2);
     textSize(50)
    }*/




    //ghost.position.x = mouseX;
    //ghost.position.y = mouseY;
    /*for (var i = 0; i < ghost.length; i++) {

   // ghost[i].addSpeed(0.1, 90);
    if (ghost[i].position.y > height) {
    ghost[i].velocity.y *= -1;
     }
    }*/



    //this.GRAVITY = 0


    man.velocity.x = 0;
    man.velocity.y = 0
    man.maxvel = 40

    if (keyDown(65))
        man.addSpeed(7, 180)
    if (keyDown(68))
        man.addSpeed(7, 0)
    if (keyDown(87))
        man.addSpeed(7, 270)
    if (keyDown(83))
        man.addSpeed(7, 90)
        //man.velocity.y += GRAVITY;
    man.collide(ghosts)
    if (man.overlap(blackhole)) {
        man.life = 0
    }
    man.attractionPoint(4, 1350, height / 2)
    blackhole.overlap(bullets, blackholeHit)


    if (bhbs.overlap(man, bhbsHit)) {
        lives -= 1
    }
    if (bhb.overlap(man, bhbHit)) {
        lives -= 1
    }

    if (bhbs.overlap(ghosts, bhbsHit))

    ghosts.overlap(bhb, bhbHit)

    if (lives < 0) {
        text("You Lose!", width / 2, height / 2);
        textSize(100)
        frameRate(0)
        song.stop
        song.noLoop
        song.pause
    }


    // if(ghost.overlapPixel(man.position.x, man.position.y)==false)


    // while(ghosts.overlapPixel(man.position.x, man.position.y))
    //   {
    // man.position.y--;
    //man.velocity.y = 0;
    // }
    if (keyWentDown(81)) {
        var bullet = createSprite(man.position.x, man.position.y);
        bullet.addImage(bulletImage);
        bullet.setSpeed(1 + man.getSpeed(), blackhole.postion);
        bullet.life = 300;
        bullet.attractionPoint(30, mouseX, mouseY),
            bullets.add(bullet);
        bullet.debug = false
        bullet.scale = 0.9
            //bullet.addcollider(circle, 20, 20)
    }
    if (keyWentDown(69)) {
        var ghost = createSprite(man.position.x - 100, man.position.y - 100, 100, 100)
        ghost.position.x = man.position.x
        ghost.position.y = man.position.y
            //ghost.debug


        ghost.shapeColor = color(255)
            //ghost.addAnimation("../empty-example/assets/LargePlatform.png", "../empty-example/assets/LargePlatform.png");
            //ghost.scale = 0.2
        ghost.depht = 10
        ghosts.add(ghost)
        ghost.life = 300
    }
    if (follow) follow.attractionPoint(8, man.position.x, man.position.y)

    updateFollower()
    drawSprites()
}

//   ellipse(width/2, height/2, 200, 200 )
//fill(0);




/* function keyIsPressed() {
   if (key == 'q') {
     //ghosts = new Group();
       //for (var i = 0; i < 5; i++)
   var ghost = createSprite(man.position.x+10, man.position.y, 100, 100)
   ghost.position.x = man.position.x
   ghost.position.y = man.position.y
   //ghost.debug



   ghost.shapeColor = color(255)
   //ghost.addAnimation("../empty-example/assets/LargePlatform.png", "../empty-example/assets/LargePlatform.png");
  // ghost.scale = 0.2
   ghost.depht =
   ghosts.add(ghost)
   ghost.life = 300
   }

 }*/
function bhbsHit(bullet, man) {
    bullet.remove()
}

function XbhbsHit(bhbs) {
    bhbs.life = 0
    for (var i = 0; i < 10; i++) {
        var p = createSprite(bhbs.position.x, bhbs.position.y);
        p.addImage(particleImage);
        p.setSpeed(random(10, 20), random(0, 360));
        p.scale = 0.01
        p.friction = 0.03;
        p.life = 15;
        p.attractionPoint(8, 1000, height / 2)

    }
}

function bhbHit(bullet, p) {
    bullet.remove()
    for (var i = 0; i < 7; i++) {
        var p = createSprite(bullet.position.x, bullet.position.y);
        p.addImage(particleImage);
        p.setSpeed(random(10, 20), random(100, 250));
        p.scale = 0.01
        p.friction = 0.02;
        p.life = 20;
    }

}

function manHit3(man, follow) {
    lives -= 1
}

function blackholeHit(blackhole, bullet) {
    //var newType = blackhole.type-1;
    console.log(blackhole.scale)
    blackhole.scale = blackhole.scale * .975


    if (blackhole.scale < 0.05) {
        text("you win!", width / 2, height / 2);
        textSize(100)
        blackhole.life = 0
    }

    for (var i = 0; i < 10; i++) {
        var p = createSprite(bullet.position.x, bullet.position.y);
        p.addImage(particleImage);
        p.setSpeed(random(10, 20), random(100, 250));
        p.scale = 0.01
        p.friction = 0.02;
        p.life = 20;
    }
    bullet.remove()
        //console.log("hi")
        //blackhole.remove()
        //blackhole.remove()

}

function updateFollower() {
    follow.overlap(man, manHit3)
    follow.collide(ghosts)
    bullets.overlap(follow, followOverlap)
}

function createFollow() {
    follow = createSprite(blackhole.position.x, blackhole.position.y)
    follow.scale = .5
        // follow.debug = true
    follow.friction = 0.8
}

function followOverlap(follow, man) {
    follow.remove()
    createFollow()
}
