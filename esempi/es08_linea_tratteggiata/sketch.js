function setup() {
	createCanvas(800, 600)
}

function draw() {
	background(220)

	const A = new Vec2(50, 80)
	const B = new Vec2(mouseX, mouseY)
	const C = B.sottrai(A) // B - A

	const distanzaPunti = 10
	const numeroPunti = Math.floor(C.modulo() / distanzaPunti)

	noStroke()
	fill(0)

	for (let i=0; i<=numeroPunti; i++) {
		const P = C.moltiplica( i / numeroPunti).somma(A)
		if (i % 2 == 0) {
			circle(P.x, P.y, 5)
		} else {
			circle(P.x, P.y, 10)
		}
	}
}


