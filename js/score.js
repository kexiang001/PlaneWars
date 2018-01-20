

var score = {
	
	sum: 0,						
	
	addScore: function(a) {		
		this.sum += a			
		
		$('#box2').html(this.sum)
	}
}