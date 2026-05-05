function setup() {
	createCanvas(500, 500)
}

function draw() {
	background(220)

	const vettoreCentro = new Vec2(width/2, height/2)
	vettoreCentro.disegna("red")

	const vettoreMouse = new Vec2(mouseX, mouseY)
	//vettoreMouse.disegna("blue")

	// vettoreMouse - vettoreCentro
	const vettoreCM = vettoreMouse.sottrai(vettoreCentro)
	vettoreCM.disegna("green", vettoreCentro)

	const vettoreCMInverso = new Vec2(-vettoreCM.x, -vettoreCM.y)
	vettoreCMInverso.disegna("orange", vettoreCentro)

	const vettoreCMSinistra = new Vec2(vettoreCM.y, -vettoreCM.x)
	vettoreCMSinistra.disegna("orange", vettoreCentro)

	const vettoreCMDestra = new Vec2(-vettoreCM.y, vettoreCM.x)
	vettoreCMDestra.disegna("orange", vettoreCentro)


	const vettore100 = vettoreCM.normalizza().moltiplica(100)
	vettore100.disegna("brown", vettoreCentro)

}


