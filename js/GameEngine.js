

// 游戏引擎        游戏背景						开始， 结束


// 游戏引擎
var gameEngine = {
	
	ele: $("#box"),		
	start:function(){
		this.bgMove()
	},
	bgMove: function() {
		var self = this
		this.ele.animate({"background-position-y": "-360%"}, 10000, "linear", function() {
			self.ele.css({"background-position-y": "0%"})
			self.start()
		})
	}
}
