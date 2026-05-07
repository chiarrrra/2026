// Tracciamento di una curva di Lissajous con frequenze differenti su x/y.
// Il punto lascia scia per evidenziare la figura nel tempo.

function setup() {
	createCanvas(800, 600)
	background(200, 200, 200)
}
function draw() {
	translate(width/2, height/2)
	const t = frameCount * 0.002

	const raggio = 200
	// Frequenze diverse su x e y generano la curva di Lissajous.
	const x = sin(t*5) * raggio
	const y = sin(t*7) * raggio
	const r = map(sin(t * 10), -1, 1, 0, 255)
	const g = map(sin(t * 11), -1, 1, 0, 255)
	const b = map(sin(t * 12), -1, 1, 0, 255)

	const diam = map(sin(t * 30), -1, 1, 50, 150)

	noStroke()
	fill(r, g, b)
	circle(x, y, diam)

}

