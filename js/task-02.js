const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListItem = ingredients =>ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  return item;
});
const listItem = ingredientsListItem(ingredients);

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...listItem);
console.log(ingredientsList);