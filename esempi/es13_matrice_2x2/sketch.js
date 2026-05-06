function setup() {
	createCanvas(500, 500)
}

function draw() {

	background(230)

	const v1 = new Vec2(0, -100)
	const v2 = new Vec2(0, 0)
	const v3 = new Vec2(50, 0)

	let M1 = new Mat2()
	M1 = M1.scala(2, 2)
	M1 = M1.ruota(mouseX * 0.01)

	const t1 = M1.moltiplicaVettore(v1)
	const t2 = M1.moltiplicaVettore(v2)
	const t3 = M1.moltiplicaVettore(v3)

	fill(0)
	text(M1, 20, 20)

	translate(width/2, height/2)

	noFill()

	strokeWeight(1)
	beginShape()
	vertex(v1.x, v1.y)
	vertex(v2.x, v2.y)
	vertex(v3.x, v3.y)
	endShape()

	strokeWeight(3)
	beginShape()
	vertex(t1.x, t1.y)
	vertex(t2.x, t2.y)
	vertex(t3.x, t3.y)
	endShape()

}