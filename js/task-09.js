const ref =  {
  btn: document.querySelector('.change-color'),
  span:document.querySelector('.color'),
  body:document.querySelector('body'),
}

ref.btn.addEventListener('click',onChangeBtn);


function getRandomHexColor() {
  
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeBtn(){
  ref.body.style.backgroundColor = getRandomHexColor();
  ref.span.textContent = ref.body.style.backgroundColor;
}
