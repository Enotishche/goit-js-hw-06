const inputRef = document.querySelector('#validation-input');
const dataLength = +inputRef.dataset.length;
console.log(dataLength);

function onInputFocus(event) {
    if (event.currentTarget.value.length === dataLength) {
    
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
        
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    }
   console.log('event :', event.target.value.length);

};

inputRef.addEventListener('blur', onInputFocus);
    