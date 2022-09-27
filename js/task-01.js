const categoriesAllEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesAllEl.length}`);

const categoriesAllTitlesEl = document.querySelectorAll(".item > h2");

categoriesAllTitlesEl.forEach((categoryTitleEL) => {
  let listItemsInCategory = categoryTitleEL.nextElementSibling.children;
  console.log(`Category: ${categoryTitleEL.textContent}`);
  console.log(`Element: ${listItemsInCategory.length}`);
});

