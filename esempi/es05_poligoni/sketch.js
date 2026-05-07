// Poligono regolare controllato dal mouse: lati e raggio variano in diretta.

function setup() {
	createCanvas(800, 600)
}

function draw() {
	background(220)

	translate(width/2, height/2)

	noFill()
	stroke(0)

	const raggio = mouseY * 0.3
	const lati = floor(mouseX * 0.1)

	beginShape()
	for (let i=0; i<lati; i++) {
		// Angolo dei vertici distribuito uniformemente sul giro completo.
		const angolo = TAU / lati * i
		const px = cos(angolo) * raggio
		const py = sin(angolo) * raggio
		vertex(px, py)
	}
	endShape(CLOSE)

}
