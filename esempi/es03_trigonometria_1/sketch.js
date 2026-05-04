function setup() {
	createCanvas(800, 600)
}

function draw() {
	background(220)

	translate(width/2, height/2)

	noFill()
	stroke(0, 40)
	line(-width, 0, width, 0)
	line(0, -height, 0, height)

	let angolo = mouseX * 0.01
	let raggio = 100
	let px = cos(angolo) * raggio
	let py = sin(angolo) * raggio
	let t  = tan(angolo)

	line(0, 0, px, py)

	arc(0, 0, 50, 50, 0, angolo)

	circle(0, 0, raggio * 2)

	stroke(255,0,0)
	line(0, py, px, py)

	stroke(0, 0, 255)
	line(px, 0, px, py)

	stroke(255, 128, 0)
	line(px, py, px + py * t, py - px * t)


	noStroke()
	fill(0)
	circle(px, py, 5)
	text("ang=" + angolo.toFixed(2), px + 5, py - 15)

}
