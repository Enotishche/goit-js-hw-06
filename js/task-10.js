function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const inputAmount =  document.querySelector('input');

let basicSize = 30;

function createBoxes() {
  
  let fragment = new DocumentFragment();
  const arrayDiv = []
  for (let i = 0; i < inputAmount.value; i++) {
    const nextElementSize = basicSize + i * 10 + 'px';
    let createNewDiv = document.createElement('div');

    createNewDiv.style.width = `${nextElementSize}`;
    createNewDiv.style.height = `${nextElementSize}`;
    createNewDiv.style.backgroundColor = getRandomHexColor();

    arrayDiv.push(createNewDiv);

    fragment.appendChild(createNewDiv);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  basicSize = 30;
  boxes.innerHTML = '';
  inputAmount.value = '';
}
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);




