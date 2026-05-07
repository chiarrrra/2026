// Variante di DynaDraw: simulazione di inerzia con coda del tratto.

let posizione
let forza
const coda = []

function setup() {
	createCanvas(800, 600)
	posizione = new Vec2(width/2, height/2)
	forza = new Vec2(0, 0)
}

function draw() {

	const m = new Vec2(mouseX, mouseY)

	const delta = m.sottrai(posizione).moltiplica(0.04)
	forza = forza.somma(delta)
	// Attrito numerico: limita la velocita' e stabilizza la traiettoria.
	forza = forza.moltiplica(0.95)
	posizione = posizione.somma(forza)

	coda.push(posizione.copia())

	while(coda.length > 100) {
		coda.shift()
	}

	background(220)
	noFill()
	strokeWeight(4)
	beginShape()
	for (let i=0; i<coda.length; i++) {
		const v = coda[i]
		vertex(v.x, v.y)
	}
	endShape()
}

