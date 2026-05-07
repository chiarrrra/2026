// Studio dei poligoni con funzione dedicata e rotazione animata.

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	background(255,0,0)

	noFill()
	stroke(255)

	for(let i=0; i<40; i++) {
		// Ogni anello ha una fase diversa per evitare una rotazione rigida.
		const rot = sin(frameCount * 0.02 - i * 0.03) * 2
		poligono(width/2, height/2, i + 3, 80 + i*5, rot)
	}

}

function poligono(x, y, lati, raggio, rot=0) {
	beginShape()
	for (let i=0; i<lati; i++) {
		const angolo = TAU / lati * i + rot
		const px = x + cos(angolo) * raggio
		const py = y + sin(angolo) * raggio
		vertex(px, py)
	}
	endShape(CLOSE)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}