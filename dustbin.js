class Dustbin {
    constructor(x,y,w,h) {
        var options = {
            friction:0.5,
            restitution: 0.3,
            isStatic:true,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
       // this.image = loadImage("dustbin.png")
        World.add(world, this.body);
        this.width = w;
        this.height = h;
        this.body.addImage = this.image;      
    }

    display(){
    var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y,this.width,this.height);
      //image(this.image , pos.x, pos.y,this.width,this.height);

    }
}