// Esempio base p5.js: disegno a specchio guidato dal mouse.
// Introduce ciclo draw, interazione e salvataggio su file.

function setup() {
	createCanvas(800, 600)
	background(200, 200, 200)
}
function draw() {
	if(mouseIsPressed) {
		fill(random(256), random(256), random(256))
		circle(mouseX, mouseY, 80)
		// Secondo cerchio riflesso rispetto all'asse verticale della tela.
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

