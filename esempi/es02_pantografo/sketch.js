// Pantografo digitale: lo stesso gesto viene replicato a scale diverse.
// Utile per osservare omotetie in tempo reale.

function setup() {
	createCanvas(800, 600)
	background(200, 200, 200)
}

function draw() {
	if (mouseIsPressed) {
		stroke(0)
		for (let i=0; i<10; i++) {
			// Fattore di scala progressivo per le copie del tratto.
			const f = i * 0.1 + 1
			line(mouseX * f, mouseY * f, pmouseX * f, pmouseY * f)
		}
	}
}

function keyPressed() {
	if (key == 's') {
		saves("panto_" + (new Date()).getTime() + ".png")
	}
}

