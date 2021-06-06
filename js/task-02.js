const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientElement = document.querySelector('#ingredients');

const list = ingredients.reduce((string, item) => string + `<li>${item}</li>`, '');

ingredientElement.insertAdjacentHTML('afterbegin', list);
console.log(ingredientElement);