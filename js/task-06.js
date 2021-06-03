const symbolValidation = document.querySelector('#validation-input');

const inputLength = symbolValidation.dataset.length;

symbolValidation.addEventListener('change', e => {
    const text = e.target.value;

    if (text.length === +inputLength) {
        symbolValidation.classList.add('valid');
        symbolValidation.classList.remove('invalid');
    }
    else {
        symbolValidation.classList.remove('valid');
        symbolValidation.classList.add('invalid');
    }
});
console.log(symbolValidation);
