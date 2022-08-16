
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;    
}

const refs = {
  
  colorChangeButton: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
  bodyRef: document.querySelector('body'),
}

refs.colorChangeButton.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  let randomColor = getRandomHexColor();
  
  refs.bodyRef.style.backgroundColor = randomColor;
  
  refs.spanColor.textContent = randomColor;
}




