const ref = {
    inputEl: document.querySelector('#font-size-control'),
    spanEl: document.querySelector('#text'),

}

ref.inputEl.addEventListener('change', onSpanChangeText);

function onSpanChangeText(){
    
    
    ref.spanEl.style.fontSize = ref.inputEl.value + "px";
    
}

console.log(ref.inputEl);


