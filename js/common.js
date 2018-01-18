

function isTouch($box1, $box2) {
	var x1 = $box1.position().left - $box2.width()/2
	var y1 = $box1.position().top - $box2.height()/2

	var x2 = $box1.position().left + $box1.width() + $box2.width()/2
	var y2 = $box1.position().top + $box1.height() + $box2.height()/2
	
	var x0 = $box2.position().left + $box2.width()/2
	var y0 = $box2.position().top + $box2.height()/2
	
	
	if ( x0 >= x1 && x0 <= x2  && y0 >= y1 && y0 <= y2) {
		
		return true
	} else {
		return false
	}
}

