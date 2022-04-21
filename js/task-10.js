
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  input:document.querySelector('input'),
  btnCreate:document.querySelector('button[data-create]'),
  btnDestroy:document.querySelector('button[data-destroy]'),
  div:document.querySelector('#boxes'),

}
ref.btnCreate.addEventListener('click',onInputValue);
ref.btnDestroy.addEventListener('click',destroyBoxes);



let countSizeBox = 30;

function onInputValue(){
  const inputValue = createBoxes(ref.input.value);
  ref.div.append(...inputValue);
 
}



function createBoxes(amount){
  let sizeBox = 0;
  const divBoxEl = [];
  for(let i =0; i<amount;i+=1){
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    sizeBox = countSizeBox+i*10;
    boxEl.style.width = `${sizeBox}px`;
    boxEl.style.height = `${sizeBox}px`;
    divBoxEl.push(boxEl);

  }
  countSizeBox = sizeBox + 10;
  return divBoxEl;
}
function destroyBoxes(){
  ref.div.innerHTML = '';
  countSizeBox = 30;
}

