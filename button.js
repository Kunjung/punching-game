class Button {
	constructor(x, y, size) {
		this.x = x;
		this.y = random(-400, 0);
		this.size = size;
	}

	fall(speed) {
		this.y = this.y + speed;
		if (this.y > windowHeight + this.size) {
			this.y = -this.size + random(-800, 0);
		}
	}

	show() {
		ellipseMode(CENTER);
		fill(40, 205, 0);
		noStroke();
		ellipse(this.x, this.y, this.size, this.size);
	}
}