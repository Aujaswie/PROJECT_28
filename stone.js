class Stone {
    constructor(x, y, radius) {
      var options = {
        'isStatic' : false,
          'restitution':0,
          'friction':1,
          'density':1.6
      }
     
      this.body = Bodies.circle(x, y, radius/3, options);
      this.radius = radius;
      this.image = loadImage ("Plucking mangoes/stone.png")
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("cyan");
      ellipse(pos.x,pos.y,this.radius,this.radius);


      pop();
    };
  }
    