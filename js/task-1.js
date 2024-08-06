const allLi = document.querySelectorAll("li.item");

console.log(`Number of categories: ${allLi.length}`);

// console.log(allLi[0].firstElementChild.innerHTML);
// console.dir(allLi[0].lastElementChild.childElementCount);

allLi.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.childElementCount}`)
});