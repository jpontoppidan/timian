   /*function Ghost() {
     //fill(value);
     //ellipse(mouseX, mouseY, 30, 20);
     this.savedsnapshots = []
     this.show = function (){
         stroke(255)
         fill(10)
         
         rect(mouseX, mouseY, 80, 30) *0.01  ;

         for (i=0; i<this.savedsnapshots.length; i++) {
             rect(this.savedsnapshots[i].x, this.savedsnapshots[i].y, 80, 30)
         }

     }

     this.takesnapshot = function() {
      if (this.savedsnapshots.length<4){
       this.savedsnapshots.push({x:mouseX, y:mouseY})
      }
     }
   }