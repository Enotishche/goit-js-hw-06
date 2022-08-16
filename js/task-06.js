const inputRef = document.querySelector('#validation-input');
const dataLength = inputRef.getAttribute('data-length');
console.log(dataLength);

const onInputFocus = () => { console.log('click') };
const onInputBlur = (event) => {
    if (event.target.value.length === Number(dataLength)) {
    
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
        
    } else {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }
   console.log('event :', event.target.value.length);

};

inputRef.addEventListener('click', onInputFocus);
    inputRef.addEventListener('click', onInputBlur);