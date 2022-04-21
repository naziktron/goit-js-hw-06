
const refs = {
    btnIncrement: document.querySelector('button[data-action="increment"]'),
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    span: document.querySelector('#value'),

} 
refs.btnDecrement.addEventListener('click', decrementValue);
refs.btnIncrement.addEventListener('click',incrementValue);




 let  counterValue = 0;

function incrementValue (){
    counterValue+=1;
    refs.span.textContent = counterValue;
}

function decrementValue (){
   counterValue-=1;
   refs.span.textContent = counterValue;

}



