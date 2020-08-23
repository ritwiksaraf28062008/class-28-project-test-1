class Paper {
    constructor(x,y,r) {
      var options = {
          friction:0.5,
          restitution: 0.3,
          isStatic:false,
          density:1.2
      }
      this.body = Bodies.circle(x,y,r,options);
      this.image = loadImage("paper.png")
      this.radius = r;
      World.add(world, this.body);
      this.body.addImage = this.image;      
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      //ellipse(pos.x, pos.y,this.radius,this.radius);
      image(this.image , pos.x, pos.y,this.radius,this.radius)
      

    }
  }
  