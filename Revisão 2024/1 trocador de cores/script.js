var background = document.querySelector('.wrap-color');

var blueButton = document.querySelector('button.blue');
var redButton = document.querySelector('.red');
var yellowButton = document.querySelector('.yellow');


blueButton.addEventListener('click',()=>{
  background.style.backgroundColor = 'blue';
});

redButton.addEventListener('click',()=>{
  background.style.backgroundColor = 'red';
});

yellowButton.addEventListener('click',()=>{
  background.style.backgroundColor = 'yellow';
});