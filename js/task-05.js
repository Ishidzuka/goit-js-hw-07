let inputElement = document.querySelector('#name-input');
inputElement.addEventListener('input', inputChange);


let outputElement = document.querySelector('#name-output');

function inputChange () {
    if (inputElement.value === "") {
        outputElement.innerHTML = "незнакомец";
    }

    else {
        outputElement.innerHTML = inputElement.value;
    }
}