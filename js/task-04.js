const button = {
    btnValue: document.querySelector('#value'),
    increment: document.querySelector("[data-action = 'increment']"),
    decrement: document.querySelector("[data-action = 'decrement']")
}

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    button.btnValue.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    button.btnValue.textContent = counterValue;
};


button.increment.addEventListener("click", increment);
button.decrement.addEventListener("click", decrement);