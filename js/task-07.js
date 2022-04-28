const ref = {
    inputEl: document.querySelector('#font-size-control'),
    spanEl: document.querySelector('#text'),

}

ref.inputEl.addEventListener('input', onSpanChangeText);

function onSpanChangeText(){
    
    
    ref.spanEl.style.fontSize = ref.inputEl.value + "px";
    
}
onSpanChangeText();
console.log(ref.inputEl);


