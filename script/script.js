const numbers = document.getElementsByClassName("number");
const submitButton = document.getElementById("submit-button");
const mainCardThank = document.getElementsByClassName("main-card-thank");
const mainCardState = document.getElementsByClassName("main-card-state");
const mark = document.getElementById("mark");
let chosenMark = "";

// COLORS
const hoverBackgroundColor = "hsl(25, 97%, 53%)";
const hoverTextColor = "hsl(0, 0%, 100%)";
const clickTextColor = hoverTextColor;
const clickBackgroundColor = "hsl(217, 12%, 63%)";
const initialNumberBackground = "rgba(124, 135, 152, 0.1)";
const initialNumberColor = "hsl(217deg, 12%, 63%)";

// INTERMEDIATE FUNCTIONS
function setIsClicked() {
	for (number of numbers) {
		number.setAttribute("isClicked", false);
		resetStyle(number);
	}
}

function resetStyle(e) {
	e.style.color = initialNumberColor;
	e.style.backgroundColor = initialNumberBackground;
}

function changeColor(element, color, backgroundColor) {
	element.style.color = color;
	element.style.backgroundColor = backgroundColor;
}

function addMouseOver() {
	for (number of numbers) {
		number.addEventListener("mouseover", function (event) {
			if (event.target.getAttribute("isClicked") !== "click") {
				changeColor(event.target, hoverTextColor, hoverBackgroundColor);
			}
		});
	}
}

function addMouseLeave() {
	for (number of numbers) {
		number.addEventListener("mouseleave", (event) => {
			if (event.target.getAttribute("isClicked") !== "click") {
				resetStyle(event.target);
			}
		});
	}
}

function addClick() {
	for (number of numbers) {
		number.addEventListener("click", function (event) {
			setIsClicked();
			event.target.setAttribute("isClicked", "click");
			changeColor(event.target, clickTextColor, clickBackgroundColor);
			chosenMark = event.target.textContent;
		});
	}
}

submitButton.addEventListener("click", function (e) {
	e.preventDefault();
	mainCardThank[0].style.display = "flex";
	mainCardState[0].style.display = "none";
	if (!chosenMark) {
		mark.innerHTML = "0";
	} else {
		mark.innerHTML = chosenMark;
	}
});

setIsClicked();
addMouseOver();
addMouseLeave();
addClick();
