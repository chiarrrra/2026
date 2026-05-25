

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
	const livelloMare = mouseY / height
	const t = frameCount * 0.001
	const num = 96
	const scala = 10

	for (let j=0; j<num; j++) {
		beginShape()
		for (let i=0; i<num; i++) {
			let n = noise(i * 0.04 + 3, j * 0.04 + offsetY + 2, t + 10)
			if (n < livelloMare) {
				stroke(0, 200, 255)
				n = livelloMare
			} else {
				stroke(0)
			}
			const x = (i - num/2) * scala
			const y = (j- num/2) * scala
			const z = n * 300
			vertex(x, y, z)
		}
		endShape()
	}


}
