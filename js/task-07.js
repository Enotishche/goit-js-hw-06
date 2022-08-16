const refs = {
    text: document.querySelector('#text'),
    fontControl: document.querySelector('#font-size-control')
};

const onFontChange = (event) => refs.text.style.fontSize = `${event.target.value}px`;

refs.fontControl.addEventListener('input', onFontChange);