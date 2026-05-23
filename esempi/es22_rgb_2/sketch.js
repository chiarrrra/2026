
let immagineA
let immagineB

function preload() {
	immagineA = loadImage("gatto.jpg")
	immagineB = loadImage("foglie.jpg")
}

function setup() {
	createCanvas(400, 400)
	immagineA.loadPixels()
	immagineB.loadPixels()
}

function draw() {
	background(0)


	const sfum = mouseX / width

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < height; x++) {
			const col1 = pixel(immagineA, x, y)
			const col2 = pixel(immagineB, x-100, y)

			const r = col2.r * sfum + col1.r * (1 - sfum)
			const g = col2.g * sfum + col1.g * (1 - sfum)
			const b = col2.b * sfum + col1.b * (1 - sfum)

			set(x, y, color(r, g, b))
		}
	}

	updatePixels()
}

function pixel(imm, x, y) {
	if (x < 0 || x >= imm.width || y < 0 || y >= imm.height) return { r:0, g: 0, b: 0, a: 0}
	const i = (x + y * imm.width) * 4
	const r = imm.pixels[i + 0]
	const g = imm.pixels[i + 1]
	const b = imm.pixels[i + 2]
	const a = imm.pixels[i + 3]
	return {r, g, b, a}
}
