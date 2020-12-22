class Rope {
constructor (bodyA,bodyB){
var option={
bodyA:bodyA,
bodyB:bodyB,
stiffness:1,
length:10
}
this.rope=Constraint.create(option);
World.add(world,this.chain);
}
display(){
var pointA=this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}