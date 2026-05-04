function setup() {
	createCanvas(800, 600)
	background(200, 200, 200)
}

function draw() {
	if(mouseIsPressed) {
		fill(random(256), random(256), random(256))
		circle(mouseX, mouseY, 80)
		circle(width - mouseX, mouseY, 80)
	}
}

function keyPressed() {
	if (key == 's') {
		saves("maschera_" + (new Date()).getTime() + ".png")
	} else if (key == 'n') {
		background(200, 200, 200)
	} else if (key == 'r') {
		background(random(256), random(256), random(256))
	}
}

