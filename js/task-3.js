const fieldEl = document.querySelector('input#name-input');
const spanField = document.querySelector('span#name-output');

const onFieldInput = () => {
    const trimmedValue = fieldEl.value.trim(); 

    if (trimmedValue) {
      spanField.textContent = trimmedValue;
    } else {
        spanField.textContent = 'Anonymous';
    }
  
  
};


fieldEl.addEventListener('input', onFieldInput);

// console.dir(spanField);