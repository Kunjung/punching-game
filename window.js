class Window {
	constructor(x, y, size) {
		this.x = x
		this.y = y
		this.size = size
	}

	show() {
		rectMode(CENTER);
		strokeWeight(10);
		stroke(255, 0, 0);
		noFill();
		rect(this.x, this.y, this.size, this.size);
	}

	contains(button) {
		let distance = dist(button.x, button.y, this.x, this.y);
		//console.log("distance is " + distance);
		if (distance < this.size/3) {
			return true;
		}
		else {
			return false;
		}
	}
}