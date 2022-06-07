/*Buttons*/
let uppercaseReference = document.querySelector('#uppercase');
let lowercaseReference = document.querySelector('#lowercase');
let firstUpperReference = document.querySelector('#firstUpper');
let firstUppersReference = document.querySelector('#firstUppers');

/*textAre Value*/
let textareaReference = document.querySelector('#textarea');
let textareaValue = "";
function captureTextareaValue(){
  textareaValue = textareaReference.value;
};


uppercaseReference.addEventListener("click", ()=>{
  captureTextareaValue();
  let textareaValueUpperCase = textareaValue.toUpperCase();
  textareaReference.value = textareaValueUpperCase;
});

lowercaseReference.addEventListener("click", ()=>{
  captureTextareaValue();
  let textareaValuelowercase = textareaValue.toLowerCase();
  textareaReference.value = textareaValuelowercase;
});

firstUpperReference.addEventListener("click", ()=>{
  captureTextareaValue();
  let textareaValuefirstUpper = textareaValue[0].toUpperCase();
  textareaReference.value = textareaValuefirstUpper + textareaValue.substring(1);
});

firstUppersReference.addEventListener("click", ()=>{
  captureTextareaValue();
  let textareaValueArray = textareaValue.split(" ");
  // [leandro,do,carmo,santos]

  let firstUppers = [];
  textareaValueArray.forEach((element, index)=>{
    firstUppers.push(element[0].toUpperCase() + element.substring(1));

    
    textareaReference.value = firstUppers.join(" ");
    
  });

  


  // let textareaValuefirstUppers = textareaValue.toUpperCase();
  // textareaReference.value = textareaValuefirstUppers;

  
});