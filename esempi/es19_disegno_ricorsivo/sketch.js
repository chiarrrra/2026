// Albero ricorsivo pseudo-casuale con seme controllabile.

let seme = 0

function setup() {
	createCanvas(600, 500)
}

function mousePressed() {
	seme++
}

function draw() {
	background(255, 220, 220)

	// Stesso seme => stessa struttura dell'albero a ogni frame.
	randomSeed(seme)
	ramo(width/2, height * 0.95, 100, -PI/2, 11)

	fill(0)
	noStroke()
	text("seme=" + seme, 20, 20)
}

function ramo(x, y, lunghezza, angolo, iterazione) {

	strokeWeight(iterazione)
	stroke(0)
	const dx = x + cos(angolo) * lunghezza
	const dy = y + sin(angolo) * lunghezza
	line(x, y, dx, dy)

	const m = mouseX * 0.01

	if (iterazione > 0) {
		if (random(1) < 0.95) {
			ramo(dx, dy, lunghezza * random(0.65, 0.9), angolo + random(0.3, 0.7) * m, iterazione - 1)
		}
		if (random(1) < 0.95) {
			ramo(dx, dy, lunghezza * random(0.65, 0.9), angolo - random(0.3, 0.7) * m, iterazione - 1)
		}
		if (random(1) < 0.10) {
			ramo(dx, dy, lunghezza * random(0.65, 0.9), angolo + random(0.1, 0.1) * m, iterazione - 1)
		}
	} else {
		fill(255)
		noStroke()
		circle(x, y, 5)
	}
}