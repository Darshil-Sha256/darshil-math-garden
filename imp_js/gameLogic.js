var num1 = 3;
var num2 = 2;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
	num1 = Math.floor(Math.random() * 5);
	num2 = Math.ceil(Math.random() * 5);

	document.getElementById('n1').innerHTML = num1;
	document.getElementById('n2').innerHTML = num2;
}

function checkAnswer() {
	var answer = num1 + num2;
	const prediction = predict();
	console.log(`Correct Answer :- ${answer}, Predicted Answer :- ${prediction}`);

	if (prediction == answer) {
		score++;
		if (score < 7) {
			backgroundImages.push(`url(images/background${score}.svg)`);
			document.body.style.backgroundImage = backgroundImages;
		} else {
			alert('Well Done!! Your Math Garden is in full bloom!! Play Again');
			score = 0;
			backgroundImages = [];
			document.body.style.backgroundImage = backgroundImages;
		}
	} else {
		if (score != 0) {
			score--;
			backgroundImages.pop();
			document.body.style.backgroundImage = backgroundImages;
		}
	}
}
