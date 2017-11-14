/*function Man() {
	this.x = width/2
	this.y =700 
    this.xdir = 0
     
     this.gravity = 0.6
     this.lift = -15
     this.velocity = 0 
     
     this.show = function(){
         rectMode (CENTER)
         rect(this.x, this.y, 20, 20)     
  }
     
 
     
     //this.move = function(direction) {	
      //this.velocity += direction
	//}  
     
      this.up = function() {
     this.velocity += this.lift
 }  
 
     this.update =function() {
    this.velocity += this.gravity
    this.velocity *= 0.9  
    this.y += this.velocity
    
    if( this.y > height) {
        this.y = height
        this.velocity = 0
    }
        if( this.y < 0) {
        this.y = 0
        this.velocity = 0
    }
        if (this.y > height.ghost) {
        this.y = ghost.pos
        this.velocity = 0
    }
  }
 }*/
