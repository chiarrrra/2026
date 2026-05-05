/*
Tentativo di implementazione di “DynaDraw” di Paul Haeberli
https://www.graficaobscura.com/dyna/index.html

*/

const num = 2
const posizione = new Array(num)
const forza = new Array(num)
const coda = []

function setup() {
	createCanvas(800, 600)
	for (let i=0; i<num; i++) {
		posizione[i] = new Vec2(width/2, height/2)
		forza[i] = new Vec2(0, 0)
	}
}

function mousePressed() {
	coda.length = 0
}

function draw() {

	const m = new Vec2(mouseX, mouseY)

	for (let i=0; i<num; i++) {
		const delta = m.sottrai(posizione[i]).moltiplica(0.04)
		forza[i] = forza[i].somma(delta  )
		forza[i] = forza[i].moltiplica(0.94 + i * 0.01)
		posizione[i] = posizione[i].somma(forza[i])

		coda.push(posizione[i].copia())

		ellipse(posizione[i].x, posizione[i].y, 10, 10)
	}

	while(coda.length > num * 100) {
		coda.shift()
	}

	background(220)
	fill(220)
	stroke(1)
	strokeWeight(1)

	for (let j=0; j<coda.length / num - 1; j++) {
		beginShape(QUAD_STRIP)
		for (let i=0; i<num; i++) {
			const v1 = coda[j * num + i]
			const v2 = coda[(j + 1) * num + i]
			vertex(v1.x, v1.y)
			vertex(v2.x, v2.y)
		}
		endShape()
	}

}


