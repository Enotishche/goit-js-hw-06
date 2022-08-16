const listCategories = document.querySelector("#categories");
console.log(listCategories);
const listOfCountedCategories = `Number of categories: ${listCategories.children.length}`;
console.log(listOfCountedCategories);

const listCategoriesItem = listCategories.querySelectorAll(".item").forEach(element => {
    const title = element.firstElementChild.textContent;
    const countedElementCategories = element.lastElementChild.childElementCount;
    return console.log(`Category: ${title} 
          Elements: ${countedElementCategories}`);
});