const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ref = {
  ulElement: document.querySelector('#ingredients'),
}





const ingredientsList = ingredients.map(ingredient => {
const list = document.createElement('li');
list.classList.add('item');
list.textContent = ingredient;
  return list;
});
ref.ulElement.append(...ingredientsList);


// for(let i =0; i<ingredients.length; i+=1){
//   const list = document.createElement('li');
//   list.classList.add('item');
//   list.textContent = ingredients[i];
// ref.ulElement.append(list);

// }