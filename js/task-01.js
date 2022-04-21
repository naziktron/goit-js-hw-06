


const ref = {
    liElement: document.querySelectorAll('li.item'),
    ulElement: document.querySelectorAll('#categories>li'),
}
console.log(`У списку  є ${ref.liElement.length} категорій`);

ref.ulElement.forEach(ulEl => {
    console.log(`У категорії ${ulEl.firstElementChild.textContent}  є ${ulEl.lastElementChild.children.length} елементів`)
    
})
