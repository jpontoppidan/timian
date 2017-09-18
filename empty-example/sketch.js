function setup() {
   createCanvas(1280, 640);
   ghost = new Ghost()
   man = new Man()
}

function draw() {
  background(124)
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
//  ellipse(mouseX, mouseY, 80, 80);
  ghost.show()
  man.show()
}


function Man() {
	this.velocity = 0
	this.x = width/2
	this.y = height/2
	this.show = function() {
		if ((this.x + this.velocity) > 1280){
			this.x = 1280
			this.velocity = -this.velocity
		} else if ((this.x + this.velocity)<0 ) {
			this.x = 0
			this.velocity = -this.velocity
		} else {
			this.x += this.velocity
		}
		rect(this.x, this.y, 20, 20)
	}

	this.move = function(direction) {
		this.velocity += direction
	}
}

function Ghost() {
	this.snapshots = []
	this.show = function() {
	  noStroke();
	  ellipse(mouseX, mouseY, 80, 80);
	  for (i=0; i<this.snapshots.length; i++) {
	  	ellipse(this.snapshots[i].x, this.snapshots[i].y, 80, 80);
	  }
	}

	this.snapshot = function() {
		snapshot = {
			x:mouseX,
			y:mouseY
		}
		console.log(snapshot)
		this.snapshots.push(snapshot)

		this.snapshots.push({x:mouseX, y:mouseY})
	}
}




function keyPressed() {
  console.log(keyCode)
  if (keyCode === LEFT_ARROW) {
  	man.move(-1)
  } else if (keyCode === RIGHT_ARROW) {
  	man.move(1)
  }
}

function mouseClicked() {
	ghost.snapshot()
}
