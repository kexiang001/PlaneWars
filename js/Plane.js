
function Plane(){
	this.ele = $('<div></div>')
	this.ele.addClass("plane")
	this.ele.appendTo($('body'))
}
Plane.prototype.move = function(){
	var self = this
	this.ele.mousedown(function(e){
		var e = e || window.e;
		var l = e.offsetX;
		var t = e.offsetY;
		console.log(l,t);
		document.onmousemove = function(event){
			var event = event || window.event;
			var x = event.clientX - l;
			var y = event.clientY - t;
			self.ele.css({
				left:x,
				top:y
			})
			event.returnValue = false
		}
	})
	this.ele.mouseup(function(){
		document.onmousemove = null;
	})
	$(document).keydown(function(e){
		var c = e.keyCode
		var x = self.ele.offset().left
		var y = self.ele.offset().top
		console.log(x)
		if(c == 37){
			x = x-10
			self.ele.css({
				left:x,
				top:y
			})
		}else if(c == 39){
			x = x+10
			self.ele.css({
				left:x,
				top:y
			})
		}else if(c == 38){
			y = y-10
			self.ele.css({
				left:x,
				top:y
			})
		}else if(c == 40){
			y = y+10
			self.ele.css({
				left:x,
				top:y
			})
		}
	})
}
function Bullet(){
	this.ele = $('<div></div>')
	this.ele.addClass("bullet")
	this.ele.appendTo($('.plane'))
}
Bullet.prototype.fly = function(){
	var self = this
	this.ele.animate({top:-500},1000 ,"linear")
}
Bullet.prototype.remove =function(){
	this.ele.remove()
}
