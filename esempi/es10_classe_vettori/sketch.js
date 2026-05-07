// Interpolazione geometrica a tre punti (costruzione tipo De Casteljau).

function setup() {
	createCanvas(800, 600)
}

function draw() {

	const A  = new Vec2(120, 420)
	const B  = new Vec2(515, 344)
	const C1 = new Vec2(mouseX, mouseY)

	background(220)

	stroke(0, 50)
	line(A.x, A.y, C1.x, C1.y)
	line(B.x, B.y, C1.x, C1.y)

	noStroke()
	fill(0)
	circle(A.x, A.y, 10)
	circle(B.x, B.y, 10)
	circle(C1.x, C1.y, 10)

	const risoluzione = floor(mouseX * 0.05)

	for (let i=0; i<risoluzione; i++) {
		const t = i / risoluzione
		const A_C1 = C1.sottrai(A).moltiplica(t).somma(A)
		const C1_B = B.sottrai(C1).moltiplica(t).somma(C1)
		// Seconda interpolazione: produce i punti della curva.
		const P = C1_B.sottrai(A_C1).moltiplica(t).somma(A_C1)
		circle(P.x, P.y, 8)
	}
}

