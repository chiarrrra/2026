
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
			const col2a = pixel(immagineB, x, y)
			const col2b = pixel(immagineB, x - mouseX, )
			const col2c = pixel(immagineB, x, y - mouseY)

			const r = col2a.r + col1.r
			const g = col2b.g + col1.g
			const b = col2c.b + col1.b

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
