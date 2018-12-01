let score;
let lives;
let gameOver;

let rightButton;
let leftButton;
let buttonSize = 40;
let fallSpeed = 5;


let rightWindow;
let leftWindow;
let windowSize = 100;

let buffer = 20;

let song;

function preload() {
	song = loadSound('song.MP3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	song.loop();

	score = 0;
	lives = 10;

	let leftPose = createVector(windowWidth/2 - windowSize - buffer, height - 2 * windowSize);
	let rightPose = createVector(windowWidth/2 + windowSize + buffer, height - 2 * windowSize);

	leftButton = new Button(leftPose.x, 0, buttonSize);
	rightButton = new Button(rightPose.x, 0, buttonSize);

	
	leftWindow = new Window(leftPose.x, leftPose.y, windowSize);
	rightWindow = new Window(rightPose.x, rightPose.y, windowSize);

}


function keyPressed() {
	// check if window contains the button well
	console.log(key);
	if (key === '%') {
		if (leftWindow.contains(leftButton)) {
			console.log('left hit');
			score++;
		} else {
			console.log('left miss');
			lives--;
			if (lives <= 0) {
				gameOver = true;
			}
		}
	
	} else if (key === "'") {
		if (rightWindow.contains(rightButton)) {
			console.log('right hit');
			score++;
		} else {
			console.log('right miss');
			lives--;
			if (lives <= 0) {
				gameOver = true;
			}
		}

}



}

function draw() {

	if (frameCount % 400 == 0) {
		console.log('speed up');
		if (fallSpeed < 12) {
			fallSpeed ++;	
		}
		
	}

	background(200);

	strokeWeight(1);
	noStroke();
	fill(50, 250, 20);
	textSize(50);
	text("Score: " + score, windowWidth/10, 70);
	
	fill(255, 0, 100);
	text("Lives: " + lives, windowWidth/1.5, 70);
	
	fill(0);
	text("Fall Speed: " + fallSpeed, windowWidth/10, height-84);

	if (gameOver) {
		textAlign(CENTER);
		textSize(120);
		fill(255, 255, 255);
		strokeWeight(20);
		stroke(0);
		text("Game Over", windowWidth/2, height/2);
		fallSpeed = 0;
		song.stop();
		noLoop();
	}



	rightButton.fall(fallSpeed);
	rightButton.show();
	leftButton.fall(fallSpeed);
	leftButton.show();

	rightWindow.show();
	leftWindow.show();


}