class snowflake{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.snow = Bodies.circle(x,y,5,options)
        this.radius = 5;
        this.image = loadImage("snow4.webp");
        World.add(world, this.snow);
        
    }

   

    display(){
        fill("blue")
        imageMode(CENTER);
       image(this.image, this.x, this.y, this.radius,this.radius )
    }
}