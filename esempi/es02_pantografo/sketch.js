// Pantografo: il movimento del mouse viene replicato a scale diverse.
// Esempi storici di pantografi:
// https://circuitousroot.com/artifice/letters/press/typemaking/making-matrices/pantographs-for-working-patterns/index.html

function setup() {
	createCanvas(800, 600)
	// sfondo in setup() = il segno resta (non si ricancella ogni frame)
	background(200, 200, 200)
}

function draw() {
	// disegna solo mentre tieni premuto il mouse
	if (mouseIsPressed) {
		stroke(0)

		// 10 copie dello stesso tratto, ognuna ingrandita un po' di più
		for (let i=0; i<10; i++) {
			// fattore di scala: 1.0, 1.1, 1.2, ... 1.9
			const f = i * 0.1 + 1
			// segmento dal frame precedente (pmouseX/Y) a quello attuale,
			// moltiplicato per il fattore = stessa forma, dimensione diversa
			line(mouseX * f, mouseY * f, pmouseX * f, pmouseY * f)
		}
	}
}

function keyPressed() {
	// 's' per salvare un PNG (nome con timestamp)
	if (key == 's') {
		saves("panto_" + (new Date()).getTime() + ".png")
	}
}

