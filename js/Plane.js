
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
		//console.log(l,t);
		document.onmousemove = function(event){
			var event = event || window.event;
			var x = event.clientX - l;
			var y = event.clientY - t;
			if(x<=-self.ele.width()/2)x=-self.ele.width()/2;
			if(y<=0)y=0;
			if(y>=$('body').height()-self.ele.height()/2)y=$('body').height()-self.ele.height()/2
			if(x>=$('body').width()-self.ele.width()/2)x=$('body').width()-self.ele.width()/2
			self.ele.css({
				left:x,
				top:y
			})
			event.returnValue = false
		}
		self.ele.mouseup(function(){
			document.onmousemove = null;
		})
	})

	$(document).keydown(function(e){
		var c = e.keyCode
		var x = self.ele.offset().left
		var y = self.ele.offset().top
		//console.log(x)
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

Plane.prototype.fire= function(){
	
	setInterval(function(){
		var x = $('.plane')[0].offsetLeft + ($('.plane').width() -$(".bullet").width())/2
		var y = $('.plane')[0].offsetTop - $(".bullet").height()
		//console.log(x,y)
		new Bullet().fly(x,y)
	},100)
}
function Bullet(){
	this.ele = $('<div></div>')
	this.ele.addClass("bullet")
	this.ele.appendTo($('body'))
	this.id = "s"+gameEngine.bullets.len++
	gameEngine.bullets[this.id] = this
	
	
	
}
Bullet.prototype.fly = function(x,y){
	var self = this
	
	this.ele.css({left:x,top:y})
	this.ele.animate({left:x,top:0},1000 ,"linear",function(){
		self.ele.css({background:'url(../img/die1.png)'})
		this.remove()
		delete gameEngine.bullets[self.id]
	})
	
}
Bullet.prototype.boom = function(){
	var self = this
	var dieImg = [
		"img/die1.png",
		"img/die2.png"
	]
	var i = 0;
	this.ele.stop()
	var timer = setInterval(function(){
		
		self.ele.css({background:"url("+ dieImg[i++] +")"})
		self.ele.css({
			width:40,
			height:43
		})
		if(i >= dieImg.length){
			clearInterval(timer)
			self.ele.remove()
		}
	},100)
	
	delete gameEngine.bullets[this.id]
}
