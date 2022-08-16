const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action = "increment"]' );
const valueEl = document.querySelector("#value");
let counterValue = 0;
const decrement = () => counterValue -= 1;
const increment = () => counterValue += 1;

btnIncrement.addEventListener('click', () => {
    valueEl.textContent = increment();
});

btnDecrement.addEventListener('click', () => {
    valueEl.textContent = decrement();
});