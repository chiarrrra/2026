// Composizione iterativa di trasformazioni per generare una texture geometrica animata.

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

	background(220)
	translate(width/2, height/2)
	for (let i=0; i<300; i++) {

		const rot = Math.sin(frameCount * 0.002 + i * 0.003) * TAU
		const s   = Math.sin(frameCount * 0.020 + i * 0.050) * 10 + 15
		const tx  = Math.sin(frameCount * 0.006 + i * 0.050) * 50
		const ty  = Math.sin(frameCount * 0.007 + i * 0.050) * 50

		// Trasformazione composta per istanza: posizione, orientamento e scala.
		const M = new Mat3().trasla(tx, ty).ruota(rot).scala(s, s)

		stroke(0)
		fill(255)
		beginShape()
		for (let i=0; i<forma.length; i++) {
			const pt = M.moltiplicaVettore(forma[i])
			vertex(pt.x, pt.y)
		}
		endShape(CLOSE)
	}
}
