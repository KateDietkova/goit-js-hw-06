const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsList = document.querySelector("#ingredients");

const listMarkup = ingredients.map(element => {
  const listItem = document.createElement('li');
  listItem.textContent = element;
  listItem.classList.add('item');
  
  return listItem;
});

ingridientsList.append(...listMarkup);

