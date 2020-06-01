const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = '#ffffff';
const LINE_WIDTH = 15;
var prevX = 0;
var prevY = 0;
var currX = 0;
var currY = 0;
var canvas;
var context;

function clearCanvas() {
	prevX = 0;
	prevY = 0;
	currX = 0;
	currY = 0;
	context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
	pressed = false;
}

function prepareCanvas() {
	console.log('Preparing Canvas');
	canvas = document.getElementById('my-canvas');
	context = canvas.getContext('2d');

	// context.fillRect(x, y, 16, 16);

	context.fillStyle = BACKGROUND_COLOR;
	context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
	context.strokeStyle = LINE_COLOR;
	context.lineWidth = LINE_WIDTH;
	context.lineJoin = 'round';
	var pressed = false;

	document.addEventListener('mousedown', function(event) {
		// console.log(
		// 	'Co-ordinates (X, Y):- ' + (event.clientX - canvas.offsetLeft) + ', ' + (event.clientY - canvas.offsetTop)
		// );
		pressed = true;
	});

	document.addEventListener('mouseup', function(event) {
		// console.log(
		// 	'Co-ordinates (X, Y):- ' + (event.clientX - canvas.offsetLeft) + ', ' + (event.clientY - canvas.offsetTop)
		// );
		pressed = false;
	});

	document.addEventListener('mousemove', function(event) {
		// console.log('Move');

		if (pressed) {
			let bound = canvas.getBoundingClientRect();

			let x = event.clientX - bound.left - canvas.clientLeft;
			let y = event.clientY - bound.top - canvas.clientTop;
			prevX = currX;
			// currX = event.clientX;
			// currX = event.clientX - canvas.offsetLeft;
			currX = x;

			prevY = currY;
			// currY = event.clientY;
			// currY = event.clientY - canvas.offsetTop;
			currY = y;

			// console.log('Co-ordinates (X, Y):- ' + currX + ', ' + currY);
			if (prevX != 0 && prevY != 0) {
				context.beginPath();
				context.moveTo(prevX, prevY);
				context.lineTo(currX, currY);
				context.closePath();
				context.stroke();
			}
		}
	});

	//Touch for mobiles

	canvas.addEventListener('touchstart', function(event) {
		// console.log(
		// 	'Co-ordinates (X, Y):- ' + (event.clientX - canvas.offsetLeft) + ', ' + (event.clientY - canvas.offsetTop)
		// );
		pressed = true;
		// console.log('mobile');
	});

	canvas.addEventListener('touchcancel', function(event) {
		// console.log(
		// 	'Co-ordinates (X, Y):- ' + (event.clientX - canvas.offsetLeft) + ', ' + (event.clientY - canvas.offsetTop)
		// );
		pressed = false;
		// console.log('mobile');
	});

	canvas.addEventListener('touchend', function(event) {
		// console.log(
		// 	'Co-ordinates (X, Y):- ' + (event.clientX - canvas.offsetLeft) + ', ' + (event.clientY - canvas.offsetTop)
		// );
		pressed = false;
		// console.log('mobile');
	});

	canvas.addEventListener('touchmove', function(event) {
		// console.log('Move');

		if (pressed) {
			let bound = canvas.getBoundingClientRect();

			let x = event.touches[0].clientX - bound.left - canvas.clientLeft;
			let y = event.touches[0].clientY - bound.top - canvas.clientTop;
			prevX = currX;
			// currX = event.clientX;
			// currX = event.clientX - canvas.offsetLeft;
			currX = x;

			prevY = currY;
			// currY = event.clientY;
			// currY = event.clientY - canvas.offsetTop;
			currY = y;

			// console.log('Co-ordinates (X, Y):- ' + currX + ', ' + currY);
			if (prevX != 0 && prevY != 0) {
				context.beginPath();
				context.moveTo(prevX, prevY);
				context.lineTo(currX, currY);
				context.closePath();
				context.stroke();
			}
		}
	});
}
