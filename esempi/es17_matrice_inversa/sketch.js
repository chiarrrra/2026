const rettangolo = [
	new Vec2( 10, 10),
	new Vec2(100, 10),
	new Vec2(100, 80),
	new Vec2( 10, 80),
]

function setup() {
	createCanvas(500, 500)
}

function draw() {
	background(230)

	const M1 = new Mat3()
	const M2 = new Mat3().ruota(0.3).trasla(200, 30).scala(3, 1.8)
	const M2i = M2.inverti()

	const mouse = new Vec2(mouseX, mouseY)
	const mouseT = M2.moltiplicaVettore(mouse)
	const mouseTi = M2i.moltiplicaVettore(mouse)

	stroke(0)
	fill(255)
	disegnaForma(rettangolo, M1)
	disegnaForma(rettangolo, M2)

	noStroke()
	fill(255,0,0)
	circle(mouse.x, mouse.y, 10)
	fill(0,255,0)
	circle(mouseT.x, mouseT.y, 10)
	fill(0,0,255)
	circle(mouseTi.x, mouseTi.y, 10)

}

function disegnaForma(punti, matrice) {
	beginShape()
	for (let i=0; i<punti.length; i++) {
		const p = punti[i]
		const pt = matrice.moltiplicaVettore(p)
		vertex(pt.x, pt.y)
	}
	endShape(CLOSE)
}