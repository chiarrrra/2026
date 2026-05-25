

function setup() {
	createCanvas(800, 600)

}
function draw() {
	background(220)
	stroke(0)
	noFill()
	// randomSeed(0)
	beginShape()
	for (let i=0; i<width; i++) {
		const x = i;
		const y = height/3 + random(-60, 60)
		vertex(x, y)
	}
	endShape()


	beginShape()
	for (let i=0; i<width; i++) {
		const x = i;
		const y = height/3*2 + noise(i * 0.01) * 120 - 60
		vertex(x, y)
	}
	endShape()


}
