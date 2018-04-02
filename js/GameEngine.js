

// 游戏引擎        游戏背景						开始， 结束


// 游戏引擎
var gameEngine = {
	
	ele: $("#box"),	
	enemys:{len : 0},
	bullets:{len : 0},
	start:function(){
		this.bgMove()
		var plane = new Plane()
		plane.move()
		plane.fire()
		this.createEnemy()
		this.touchListen()
		//console.log(gameEngine.enemys)
	},
	//碰撞检测
	touchListen: function(){
		
		setInterval(touchTest,30)
		function touchTest(){
			//console.log(gameEngine.enemys)
			for(var k in gameEngine.enemys){
				if(k == 'len'){
					continue
				}
				var enemy = gameEngine.enemys[k];
				for(var i in gameEngine.bullets){
					if(i == 'len'){
						continue
					}
					var bullet = gameEngine.bullets[i];
					if(isTouch(enemy.ele,bullet.ele)){
						enemy.looseBlood()
						bullet.boom()
						console.log("打中了")
					}
				}
				if(isTouch($('.plane'),enemy.ele)){
						Plane.die()
						console.log("死亡")
				}
			}
		}
	},
	//创建敌人飞机
	createEnemy: function(){
		setInterval(function(){
			
			if(Math.random() < 0.9)new Enemy1().fly(6000)
			
			if(Math.random() < 0.4)new Enemy2().fly(8000)
			
			if(Math.random() < 0.1)new Enemy3().fly(16000)
			
		},1000)
	},
	//背景移动
	bgMove: function() {
		var self = this
		this.ele.animate({"background-position-y": "-360%"}, 50000, "linear", function() {
			self.ele.css({"background-position-y": "0%"})
			self.bgMove()
		})
	}
}
