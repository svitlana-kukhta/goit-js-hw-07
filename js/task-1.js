'use strict'
const categoriesList = document.querySelector("#categories");
const listItems = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);
listItems.forEach(category => {
    const categoryTitle = category.querySelector("h2").textContent;
    const categoryItemNumber = category.querySelectorAll("ul > li").length;
    
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItemNumber}`);
});