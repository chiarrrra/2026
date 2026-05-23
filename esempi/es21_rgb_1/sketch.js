// Esempio base p5.js: disegno a specchio guidato dal mouse.
// Introduce ciclo draw, interazione e salvataggio su file.

let spaziatura = 0

function setup() {
	createCanvas(600, 400, WEBGL)
}
function draw() {
	background(200, 200, 200)
	noStroke()
	const numero = 13
	const lato = 9
	let ds = 0
	if (mouseIsPressed) ds = 30
	spaziatura += (ds - spaziatura) * 0.02
	rotateX(mouseY * 0.01)
	rotateY(mouseX * 0.01)
	const s = -((lato + spaziatura) * (numero - 1) - spaziatura) / 2
	translate(s, s, s)

	for (let k = 0; k < numero; k++) {
		for (let j = 0; j < numero; j++) {
			for (let i = 0; i < numero; i++) {
				push()
				const x = (lato + spaziatura) * i
				const y = (lato + spaziatura) * j
				const z = (lato + spaziatura) * k
				const r = 255 / (numero - 1) * i
				const g = 255 / (numero - 1) * j
				const b = 255 / (numero - 1) * k
				fill(r, g, b)
				translate(x, y, z)
				box(lato, lato, lato)
				pop()
			}
		}
	}
}
