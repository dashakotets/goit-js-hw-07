function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const divBoxEl = document.querySelector('div#boxes');

let step = 20;
let boxesArr = [];

function createBoxes(value) {
  if (value >= 1 && value <= 100) {
    for (let i = 0; i < value; i++) {
      step += 10;
      const boxDiv = document.createElement('div');
      boxDiv.style.width = `${step} px`;
      boxDiv.style.height = `${step} px`;
      boxDiv.style.backgroundColor = getRandomHexColor();
      boxesArr.append(boxDiv);
    }
    divBoxEl.append(...boxesArr);
  }
  inputEl.reset();
  return;
  
};

createBtn.addEventListener('click', createBoxes(inputEl.value));





