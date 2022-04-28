



 let inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onBlur);

function onBlur(event){
    this.classList.add('invalid');
    this.classList.remove('valid');
    if(Number(event.currentTarget.value.length)===Number(event.currentTarget.dataset.length)){
        this.classList.add('valid');
        this.classList.remove('invalid');

    }  
    

}

