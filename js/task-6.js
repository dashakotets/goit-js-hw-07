function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector('#boxes');



function createBoxes(value) {

  let step = 30;
  let boxesArr = [];
  

  for (let i = 0; i < value; i++) {
      
      const boxDiv = document.createElement('div');
      boxDiv.style.width = `${step}px`;
      boxDiv.style.height = `${step}px`;
    boxDiv.style.backgroundColor = getRandomHexColor();
    step += 10;
      boxesArr.push(boxDiv);
  }
  
  boxEl.prepend(...boxesArr);
  
};

createBtn.addEventListener('click', () => {
  const amount = parseInt(inputEl.value, 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = '';
  } 
});

destroyBtn.addEventListener('click', () => {
  boxEl.innerHTML = '';  
});





