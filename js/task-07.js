const textControl = document.querySelector('#font-size-control');
const textAction = document.querySelector('#text');

const defaultSize = textControl.value;
console.log(defaultSize);

const sizeChanger = () => {
    textAction.style.fontSize = `${textControl.value}px`;
}
textControl.addEventListener('input', sizeChanger);

