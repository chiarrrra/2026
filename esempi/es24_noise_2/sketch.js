

function setup() {
	createCanvas(800, 600, WEBGL)

}
function draw() {
	background(220)
	stroke(0)
	noFill()

	rotateX(1.0)
	rotateZ(mouseX * 0.01)

	const offsetY = frameCount * 0.01
	const livelloMare = height/2 - mouseY
	const t = frameCount * 0.01

	const num = 64
	for (let j=0; j<num; j++) {
		beginShape()
		for (let i=0; i<num; i++) {
			const x = (i - num/2) * 8
			const y = (j- num/2) * 8
			let z = noise(i * 0.04, j * 0.04 + offsetY, t) * 200
			if (z < livelloMare) {
				stroke(0, 200, 255)
				z = livelloMare
			} else {
				stroke(0)
			}
			vertex(x, y, z)
		}
		endShape()
	}


}
