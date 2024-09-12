'use strict'
const button = document.querySelector("button.change-color");
const body = document.querySelector("body");
const buttonColor = document.querySelector("span.color");
button.addEventListener("click", () => {
  const randomColor = getRandomHexColor(); 
  body.style.backgroundColor = randomColor;
  buttonColor.textContent = randomColor;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



