class Sling {
constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.1,
        length:3
    }
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
}
 fly(){
    this.sling.bodyA = null;
 }

display(){
    if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.pointB;
    strokeWeight(4);
    
    line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}

}