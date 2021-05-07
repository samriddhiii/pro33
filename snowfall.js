class snowfall{
    constructor(x,y,radius){
    var options={
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.circle(x,y,radius,options)
    this.r=radius
    this.image1 = loadImage("snow4.webp");
    //this.image2 = loadImage("snow5.webp");
    World.add(world,this.body)
    }

    display(){
     var position= this.body.position
     imageMode(CENTER);
     //if(frameCount%23===0){
    image(this.image1, position.x, position.y, this.r,this.r);
     //}
     //else if(frameCount%50===0)
     //{
     //image(this.image2, position.x, position.y, this.width, this.height);
     //}
    }

    update()
    {
        if(this.body.position.y > height){
        Matter.Body.setPosition(this.body, {x:random(0,width), y:random(0 ,height)})
        }
    }
}