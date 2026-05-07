// Visualizzazione di seno, coseno e tangente sul cerchio trigonometrico.
// L'angolo dipende dalla posizione orizzontale del mouse.

function setup() {
	createCanvas(800, 600)
}

function draw() {
	background(220)
	translate(width/2, height/2)

	noFill()
	strokeWeight(1)
	stroke(0, 40)
	line(-width, 0, width, 0)
	line(0, -height, 0, height)
	const angolo = mouseX * 0.01
	const raggio = 100
	const px = cos(angolo) * raggio
	const py = sin(angolo) * raggio
	const t  = tan(angolo)
	arc(0, 0, 50, 50, 0, angolo)
	circle(0, 0, raggio * 2)
	stroke(0)
	line(0, 0, px, py)

	strokeWeight(2)
	stroke(255,0,0)
	line(0, py, px, py)
	stroke(0, 0, 255)
	line(px, 0, px, py)
	stroke(255, 128, 0)
	// Direzione della tangente calcolata dal vettore perpendicolare al raggio.
	line(px, py, px + py * t, py - px * t)
	noStroke()
	fill(0)
	circle(px, py, 8)
	const segno = py > 0 ? 1 : -1
	textAlign(CENTER, CENTER)
	text("ang=" + angolo.toFixed(2), px, py + segno * 20)

}
