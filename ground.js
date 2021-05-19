class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(900,500,1800,20,options);      
      World.add(world, this.ground);
    }

    display(){     
      strokeWeight(2);
      fill("grey");
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,1800,20);
    }
  }