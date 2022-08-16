const refs = {
    input: document.querySelector('#name-input'),
    title: document.querySelector('#name-output')
};

const onInputChange = () => refs.input.value ? refs.title.textContent = refs.input.value : refs.title.textContent = "Anonymous";
refs.input.addEventListener('input', onInputChange);