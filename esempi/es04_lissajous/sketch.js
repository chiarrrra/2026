// Figura di Lissajous: un punto colorato si muove seguendo
// due oscillazioni sinusoidali (x e y) a frequenze diverse.
// Lo sfondo viene dipinto solo all'avvio: il punto lascia traccia.

// setup(): eseguita UNA volta all'avvio.
function setup() {
	createCanvas(800, 600)
	// sfondo dentro setup() = i cerchi lasciano traccia
	background(200, 200, 200)
}

// draw(): eseguita 60 volte al secondo (loop continuo).
function draw() {

	// sposta l'origine (0,0) al centro della tela
	translate(width/2, height/2)

	// "orologio" che cresce nel tempo
	const t = frameCount * 0.002

	const raggio = 250

	// sin() oscilla tra -1 e 1; con frequenze diverse (5 e 7)
	// si ottiene una figura di Lissajous (curva intrecciata)
	const x = sin(t*5) * raggio
	const y = sin(t*7) * raggio

	// colore animato: map() porta sin() da [-1,1] a [0,255]
	const r = map(sin(t * 10), -1, 1, 0, 255)
	const g = map(sin(t * 11), -1, 1, 0, 255)
	const b = map(sin(t * 12), -1, 1, 0, 255)

	noStroke()
	fill(r, g, b)
	circle(x, y, 300)

}

