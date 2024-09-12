'use strict'
const sectionControls = document.querySelector("#controls");
const sectionBoxes = document.querySelector("#boxes");
const textInput = document.querySelector("#controls input");
const buttonCreate = document.querySelector("#controls button[data-create]");
const buttonDestroy = document.querySelector("#controls button[data-destroy]");

  
function createBoxes(amount) {
  const elements = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const newElement = document.createElement("div");
    newElement.style.width = `${size}px`;
    newElement.style.height = `${size}px`;
    newElement.style.backgroundColor = getRandomHexColor();
    newElement.style.margin = `5px`;
    size += 10;
    elements.push(newElement);
  };
  sectionBoxes.append(...elements);
};

function deleteBoxes() {sectionBoxes.innerHTML = " "; }

buttonCreate.addEventListener("click", () => {const amount = parseInt(textInput.value, 10);
  if (amount >= 1 && amount <= 100) {
    deleteBoxes();
    createBoxes(amount);
    textInput.value = "";
  } else { alert('Please enter a number between 1 and 100') };
});

buttonDestroy.addEventListener("click", () => {
  deleteBoxes();})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
