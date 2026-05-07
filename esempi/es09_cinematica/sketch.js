// Inseguimento smorzato: il punto segue il mouse con velocita' proporzionale alla distanza.

let p = new Vec2(0, 0)

function setup() {
	createCanvas(800, 600)
	background(220)
	p.x = width/2
	p.y = height/2
}

function draw() {
	const m = new Vec2(mouseX, mouseY)
	// Fattore di inseguimento: piu' e' piccolo, piu' il moto risulta smorzato.
	const delta = m.sottrai(p).moltiplica(0.03)
	p = p.somma(delta)
	circle(p.x, p.y, (sin(frameCount * 0.04) * 0.5 + 0.5) * 100 + 20)
}

