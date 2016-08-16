Collectable.prototype = Object.create(Drawable.prototype);
Collectable.prototype.constructor = Drawable;
	
function Collectable(x,y,itemConfig) {
	Drawable.call(this,x,y,24,24);
	
	var collected = false;
	this.hits = itemConfig.hits||false;
	
	if(!itemConfig.handleHit) {
		this.handleHit = function(hitObj) {
			if(!collected) {
				collected = true;
				this.needsRedraw = true;
				Inventory.addItem(itemConfig.type,1);
				Dialog.addMessage(itemConfig.collectMsg);
			}
		}
	} else {
		this.handleHit = itemConfig.handleHit;
	}
	
	var texture = new Image();
	texture.src = "img/"+itemConfig.type+".png";
	texture.addEventListener('load',function() {
		this.needsRedraw = true;
	}.bind(this));
	
	
	this.userDraw = function() {
		if(!collected) {
			this.context.fillStyle = this.context.createPattern(texture,"repeat");
			this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
		}
	}
	
}