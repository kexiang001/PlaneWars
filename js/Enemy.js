
//创建敌人飞机对象模板
function Enemy(){
	this.ele = $("<div></div>") 
	this.ele.appendTo($("body")) 
	this.id = "e" + gameEngine.enemys.len++
	
	gameEngine.enemys[this.id] = this
//	setInterval(function(){
//		console.log(gameEngine.enemys)
//	},30)
	
	this.hp = 1;
	var x = Math.random() * ($("body").width() - 100)
	this.ele.css({left:x,top:-200})
	
}

Enemy.prototype.fly = function(f){
	var self = this
	var y = $("body").height();
	this.ele.animate({
		top: y
	}, f,"linear",function(){
		delete gameEngine.enemys[self.id]
		this.remove()
		
	})
	
}
Enemy.prototype.looseBlood = function(){
	var self = this
	this.hp -- 
	if(this.hp <= 0){
		var i = 0	
		score.addScore(this.score)
		var timer = setInterval(function() {  
			
			self.ele.css("background", self.dieImg[i++])
			if (i >= self.dieImg.length) {	
				clearInterval(timer)		
				self.ele.remove() 			
			}
		}, 100)
		delete gameEngine.enemys[self.id]
	}
}
//小号敌人机
function Enemy1(){
	Enemy.call(this)
	this.score = 10
	this.ele.removeClass().addClass("enemy1")
	this.dieImg = [		
		"url(img/plain1_die1.png)",
		"url(img/plain1_die2.png)",
		"url(img/plain1_die3.png)"
	]
}
Enemy1.prototype = {}
for(var k in Enemy.prototype){
	Enemy1.prototype[k] = Enemy.prototype[k]
}
//中号敌人机
function Enemy2(){
	Enemy.call(this)
	this.ele.removeClass().addClass("enemy2")
	this.hp = 3;
	this.score = 100
	this.dieImg = [		
		"url(img/plain2_die1.png)",
		"url(img/plain2_die2.png)",
		"url(img/plain2_die3.png)",
		"url(img/plain2_die4.png)"
	]
}
Enemy2.prototype = {}
for(var k in Enemy.prototype){
	Enemy2.prototype[k] = Enemy.prototype[k]
}
//大号敌人机
function Enemy3(){
	Enemy.call(this)
	this.ele.removeClass().addClass("enemy3")
	this.hp = 8;
	this.score = 1000
	this.dieImg = [		
		"url(img/plain3_die1.png)",
		"url(img/plain3_die2.png)",
		"url(img/plain3_die3.png)",
		"url(img/plain3_die4.png)",
		"url(img/plain3_die5.png)",
		"url(img/plain3_die6.png)"
	]
}
Enemy3.prototype = {}
for(var k in Enemy.prototype){
	Enemy3.prototype[k] = Enemy.prototype[k]
}

