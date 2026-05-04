// Trigonometria di base: visualizza seno, coseno e tangente
// di un angolo controllato dal mouse (asse X).

function setup() {
	createCanvas(800, 600)
}

function draw() {
	// sfondo in draw() = ridisegnato ogni frame (nessuna scia)
	background(220)

	// sposta l'origine (0,0) al centro della tela
	translate(width/2, height/2)

	noFill()

	// assi cartesiani (grigio chiaro)
	strokeWeight(1)
	stroke(0, 40)
	line(-width, 0, width, 0)
	line(0, -height, 0, height)

	// l'angolo dipende dalla posizione X del mouse
	const angolo = mouseX * 0.01
	const raggio = 100
	// punto sul cerchio: (cos, sin) * raggio
	const px = cos(angolo) * raggio
	const py = sin(angolo) * raggio
	const t  = tan(angolo)

	// archetto che mostra l'angolo
	arc(0, 0, 50, 50, 0, angolo)
	// cerchio unitario (raggio = 100)
	circle(0, 0, raggio * 2)

	// raggio dal centro al punto
	stroke(0)
	line(0, 0, px, py)

	strokeWeight(2)
	// SENO = altezza verticale (rosso)
	stroke(255,0,0)
	line(0, py, px, py)

	// COSENO = lunghezza orizzontale (blu)
	stroke(0, 0, 255)
	line(px, 0, px, py)

	// TANGENTE = retta tangente al cerchio nel punto (arancione)
	stroke(255, 128, 0)
	line(px, py, px + py * t, py - px * t)

	// pallino e valore dell'angolo in radianti
	noStroke()
	fill(0)
	circle(px, py, 8)
	const segno = py > 0 ? 1 : -1
	textAlign(CENTER, CENTER)
	text("ang=" + angolo.toFixed(2), px, py + segno * 20)

}
