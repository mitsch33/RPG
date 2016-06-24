Brick.prototype = Object.create(PlateContent.prototype);
Brick.prototype.constructor = PlateContent;
	
var brickTexture = new Image();
brickTexture.src = "img/brick.png";


function Brick(width,height,x,y) {
	PlateContent.call(this,width,height);
	
	this.getPosition = function() {
		return {
			x: x,
			y: y
		}
	}

	brickTexture.addEventListener('load',function() {
		this.needsRedraw = true;
		this.draw();
	}.bind(this));
	
	this.draw = function() {
		if(!this.needsRedraw) return;
		this.needsRedraw = false;
		this.context.fillStyle = this.context.createPattern(brickTexture,"repeat");
		this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
	}
}