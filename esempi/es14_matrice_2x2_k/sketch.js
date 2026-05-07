// Applicazione di una matrice 2x2 a una forma composta da punti.

const forma = [
	new Vec2(0.00, 0.00),
	new Vec2(2.14, 0.00),
	new Vec2(2.14, 5.14),
	new Vec2(4.53, 2.61),
	new Vec2(7.15, 2.61),
	new Vec2(4.60, 5.24),
	new Vec2(7.48, 10.0),
	new Vec2(4.96, 10.0),
	new Vec2(3.06, 6.81),
	new Vec2(2.12, 7.96),
	new Vec2(2.12, 10.0),
	new Vec2(0.00, 10.0),
]

function setup() {
	createCanvas(500, 500)
}

function draw() {
	background(230)

	let M1 = new Mat2()
	M1 = M1.ruota(mouseX * 0.01)
	M1 = M1.scala(12, 12)

	const formaT = []

	for (let i=0; i<forma.length; i++) {
		// Ogni vertice viene trasformato nello spazio della matrice M1.
		formaT[i] = M1.moltiplicaVettore(forma[i])
	}

	fill(0)
	text(M1, 20, 20)

	translate(width/2, height/2)

	noFill()

	strokeWeight(1)
	stroke(0)
	noFill()
	beginShape()
	for (let i=0; i<forma.length; i++) {
		vertex(forma[i].x, forma[i].y)
	}
	endShape(CLOSE)
	noStroke()
	fill(255)
	beginShape()
	for (let i=0; i<formaT.length; i++) {
		vertex(formaT[i].x, formaT[i].y)
	}
	endShape(CLOSE)

}