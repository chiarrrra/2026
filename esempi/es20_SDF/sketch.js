// Introduzione a una Signed Distance Field campionata su griglia.

function setup() {
	createCanvas(480, 480)

}

function draw() {

	background(220)

	const numX = 30
	const numY = 30
	const cella = 16

	textAlign(LEFT, TOP)
	textSize(cella)
	const densita = "ABC;:+-,._"

	for (let j=0; j<numY; j++) {
		for (let i=0; i<numX; i++) {

			const x = i / (numX-1) * 2 - 1
			const y = j / (numY-1) * 2 - 1

			// Distanza dal punto di riferimento: valore base della SDF.
			const d1 = cerchio(x, y, 0.8, 0, 0.7)
			const d2 = cerchio(x, y, sin(frameCount * 0.013), sin(frameCount * 0.021), 0.7)

			const d = opSmoothUnion(d1, d2, 0.5)

			fill((sin(d * 20 + frameCount * 0.1) * 0.5 + 0.5) * 255)
			rect(i * cella, j * cella, cella, cella)
			fill(255,0,0)
			const char = densita[Math.floor(d * 7 + 10) % densita.length]
			text(char, i * cella, j * cella)
		}
	}
}

function cerchio(x, y, cx, cy, r) {
	const dx = cx - x
	const dy = cy - y
	const d = sqrt( dx * dx + dy * dy) - r
	return d
}

// https://iquilezles.org/articles/distfunctions/
function opSmoothUnion(  a,  b,  k )
{
    k *= 4.0
    const h = max(k-abs(a-b), 0.0)
    return min(a, b) - h * h * 0.25 / k
}

