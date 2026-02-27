window.onload = () => {
	console.log('script is connected');
	// first param in the class instance: canvas function that is defined in your js
	// second param: id of the element you want to add the canvas to
	let myp5 = new p5(myCanvas, 'canvas');
	let myp52 = new p5(mySecondCanvas, 'canvas2');
};

// the sketch parameter is the reference to the p5 library
// any p5 function needs to have sketch. prepended in front of it
const myCanvas = (sketch) => {
	// function setup(){
	//     createCanvas(400, 400)
	// }
	// function draw(){
	//     background(220)
	// }
	sketch.setup = () => {
		sketch.createCanvas(window.innerWidth, window.innerHeight);
	};
	sketch.draw = () => {
		sketch.background(220);
	};

	sketch.mousePressed = () => {
		console.log(sketch.mouseX, sketch.mouseY);
	};
};

const mySecondCanvas = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(400, 400);
		sketch.background(0, 0, 255, 100);
	};
	sketch.draw = () => {};
};
