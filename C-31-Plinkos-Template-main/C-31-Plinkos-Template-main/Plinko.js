class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {
        
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};
          //  super.display();
      //  if(this.body.velocity.x>10 && this.body.position.x>200){
      //  var position=[this.body.position.x,this.body.position.y]
      //  this.array.push(position)}
       // for(var i=0;i<this.array.length; i++){
         // image(this.img2,this.array[i][0],this.array[i][1])}
          
        