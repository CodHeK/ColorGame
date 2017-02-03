var numsq = 9;
var colors = generateRandomColors(numsq);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var vhardbtn = document.querySelector("#vhardbtn");

vhardbtn.addEventListener("click", function() {
	vhardbtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	easybtn.classList.remove("selected");
	numsq = 9;
	colors = generateRandomColors(numsq);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}
});
easybtn.addEventListener("click", function() {
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	vhardbtn.classList.remove("selected");
	numsq = 3;
	colors = generateRandomColors(numsq);
	pickedColor = pickColor();
	h1.style.background = "steelblue";
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click", function() {
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	vhardbtn.classList.remove("selected");
	numsq = 6;
	h1.style.background = "steelblue";
	colors = generateRandomColors(numsq);
	pickedColor = pickColor();
	h1.style.background = "steelblue";
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

resetButton.addEventListener("click", function() {

	colors = generateRandomColors(numsq);
	pickedColor = pickColor();
	this.textContent = "NEW COLORS"  //this has resetButton only so use "this" only
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "CORRECT !";
			resetButton.textContent = "PLAY AGAIN ?";
			messageDisplay.textContent = "";
			changeColors(clickedColor);
			h1.style.background = clickedColor
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "TRY AGAIN !";
		}
	});
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}	
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")"; //put spaces
}