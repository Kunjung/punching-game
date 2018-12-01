class Button {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}

	fall(speed) {
		this.y = this.y + speed;
		if (this.y > windowHeight + this.size) {
			this.y = -this.size + random(-400, 0);
		}
	}

	show() {
		rectMode(CENTER);
		fill(0, 255, 0);
		noStroke();
		rect(this.x, this.y, this.size, this.size);
	}
}