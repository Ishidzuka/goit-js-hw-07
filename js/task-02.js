const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientElement = document.querySelector('#ingredients');

const ingredientList = ingredients.forEach(el => {
    let items = document.createElement('li');
    items.textContent = el;
    ingredientElement.append(items); 
})
console.log(ingredientElement);