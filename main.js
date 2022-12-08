function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav")
	mario_die = loadSound("die.wav");
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("gameConsole");

	poseNet = ml5.poseNet('video', modalLoaded);
	poseNet.on('pose', gotPoses);
}

function modalLoaded() {
	console.log("Modal is Loaded!!!");
}

function gotPoses(results) {
	if(results.length > 0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;

		console.log("noseX = ", noseX, "noseY = ", noseY,);
	}
}

function draw() {
	game()
}






