// Introduzione a una Signed Distance Field campionata su griglia.

function setup() {
	createCanvas(480, 480)

}

function draw() {

	background(220)

	const numX = 30
	const numY = 30
	const cella = 16

	for (let j=0; j<numY; j++) {
		for (let i=0; i<numX; i++) {

			const x = i / numX
			const y = j / numY

			// Distanza dal punto di riferimento: valore base della SDF.
			const d = sqrt( x * x + y * y)

			fill(d * 400)
			rect(i * cella, j * cella, cella, cella)
		}
	}
}

