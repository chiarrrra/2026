// Sketch di partenza: disegna a specchio col mouse.
// Dimostra setup/draw, mouseIsPressed e tasti per pulire/salvare.

// setup(): eseguita UNA volta all'avvio.
function setup() {
	createCanvas(800, 600)
	// sfondo dentro setup() = i cerchi lasciano traccia
	background(200, 200, 200)
}

// draw(): eseguita 60 volte al secondo (loop continuo).
function draw() {
	// disegna solo mentre il mouse è premuto
	if(mouseIsPressed) {
		// random(256) = numero casuale tra 0 e 255 (colore RGB)
		fill(random(256), random(256), random(256))
		// cerchio sotto al mouse
		circle(mouseX, mouseY, 80)
		// e il suo "specchio" sull'asse verticale
		circle(width - mouseX, mouseY, 80)
	}
}

// keyPressed(): chiamata UNA volta a ogni tasto premuto.
function keyPressed() {
	if (key == 's') {
		// salva l'immagine (nome con timestamp = sempre diverso)
		saves("maschera_" + (new Date()).getTime() + ".png")
	} else if (key == 'n') {
		// "nuovo": ridipinge lo sfondo grigio (cancella tutto)
		background(200, 200, 200)
	} else if (key == 'r') {
		// sfondo casuale
		background(random(256), random(256), random(256))
	}
}

