class Paper{
    constructor(x,y,radius) {
        var option={
            isStatic: false,
        'restitution' :0.3,
        'friction': 0.5,
        "density": 1.2,
         
        }
        this.bodies = Bodies.circle(x,y,radius,option)
        this.width = width
        this.height = height
    
        World.add (world,this.bodies)
    }
    display(){
        ellipseMode(CENTER)
        fill("yellow")
       ellipse(this.bodies.position.x,this.bodies.position.y,this.radius)
    
    }
    }