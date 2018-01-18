

// 游戏引擎        游戏背景						开始， 结束


// 游戏引擎
var gameEngine = {
	
	ele: $("#box"),		
	start:function(){
		this.bgMove()
		var plane = new Plane()
		plane.move()
		plane.fire()
		setInterval(function(){
			 new Enemy1()
		},1000)
		setInterval(function(){
			new Enemy2()
		},3000)
		setInterval(function(){
			new Enemy3()
		},14000)
		//isTouch($('.enemy1:eq(0)'),$('.bullet'))
	},
	bgMove: function() {
		var self = this
		this.ele.animate({"background-position-y": "-360%"}, 10000, "linear", function() {
			self.ele.css({"background-position-y": "0%"})
			self.bgMove()
		})
	}
}
