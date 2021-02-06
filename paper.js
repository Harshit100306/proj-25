class paper{


    constructor(x,y,width,height){

        var options = {
            'isStatic': false,
      		'restitution': 0.3,
      		'friction': 0.5,
      		'density': 1.2,
        }
        this.image = loadImage('paper.png');
		this.body = Bodies.rectangle(x,y,width,height,options);
		this.x= x
		this.y =y
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){


		var pos = this.body.position;
		pos.x = mouseX
		pos.y = mouseY

        rectMode(CENTER)
        push();
        translate(pos.x, pos.y);
		strokeWeight(4);
		image(this.image, this.width, this.height);
        rect(0,0,this.x,this.y,this.width,this.height);
        pop();


    }
}
