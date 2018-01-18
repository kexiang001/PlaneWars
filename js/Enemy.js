

function Enemy1(){
	this.ele = $("<div></div>") 
	this.ele.addClass("enemy1")
	this.ele.appendTo($("body")) 
	
	var x = Math.random() * ($("body").width() - 100)
	this.ele.css({left:x,top:-200})
	this.fly()
}

Enemy1.prototype.fly = function(f){
	var y = $("body").height();
	this.ele.animate({
		top: y
	}, 3000,"linear",function(){
		this.remove()
	})
	
}
Enemy1.prototype.die = function(){
	
}
function Enemy2(){
	Enemy1.call(this)
	this.ele.removeClass().addClass("enemy2")
	this.fly()
}
Enemy2.prototype = {}
for(var k in Enemy1.prototype){
	Enemy2.prototype[k] = Enemy1.prototype[k]
}
Enemy2.prototype.fly = function(f){
	var y = $("body").height();
	this.ele.animate({
		top: y
	}, 7000,"linear",function(){
		this.remove()
	})
	
}
function Enemy3(){
	Enemy1.call(this)
	this.ele.removeClass().addClass("enemy3")
	this.fly()
}
Enemy3.prototype = {}
	for(var k in Enemy1.prototype){
	Enemy3.prototype[k] = Enemy1.prototype[k]
}
Enemy3.prototype.fly = function(f){
	var y = $("body").height();
	this.ele.animate({
		top: y
	}, 13000,"linear",function(){
		this.remove()
	})
	
}
