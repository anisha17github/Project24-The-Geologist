class Stone{
	constructor(x,y, w, h)
	{
    var options={
		restitution:0.8,
		friction:0.9,
		density:12
}
this.body = Bodies.rectangle(x, y, w, h, options);
this.width = w;
this.height = h;
		
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0, 0, this.width, this.height);
			pop()
	}

}