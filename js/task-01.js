const categorySum = document.querySelectorAll('.item');
console.log(`В списке ${categorySum.length} категории`);

const categoryText = document.querySelectorAll('.item');
categoryText.forEach(el => {
    console.log(`Категория: ${el.firstElementChild.textContent}, Количество элементов :${eL.lastElementChild.children.length}`);

})
