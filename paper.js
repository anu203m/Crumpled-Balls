class Paper{
	constructor(x,y,r){

	var options={
		isStatic:false,
		'restitution':0.3,
		'friction':0,
		'density':1.2
	}

    this.image=loadImage("paper.png");


		this.x=x;
		this.y=y;
		this.r=r
		paper=Bodies.circle(this.x, this.y, (this.r-10)/2, options)
		World.add(world, paper);

	}
	display(){


		imageMode(CENTER)

		image(this.image, paper.position.x, paper.position.y, radius)
	}
	

}