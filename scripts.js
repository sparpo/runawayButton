var myButton = document.getElementById("myButton");
var xPos = "600px";
var yPos = "400px";
var x = 600;
var y = 400;

var dx;
var dy;
console.log("hello");

onmousemove = function(e) {
	//console.log(e.clientX);
	dx = x-e.clientX;
	dy = y-e.clientY;
	if(Math.sqrt(dx*dx + dy*dy) < 100) {
		x += Math.random()*100 - 50;
		y += Math.random()*100 - 50;
		xPos = x.toString() + "px"; // 200px
		yPos = y.toString() + "px";
		myButton.style.left = xPos;
		myButton.style.top = yPos;
	}
}
