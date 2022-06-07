let sliderElement = document.querySelector("#slider");
let buttonReference = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
  sizePassword.innerHTML = this.value;
};

buttonReference.addEventListener("click",()=>{
  let pass ="";

  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
    
  }
  
  containerPassword.classList.remove("hide")

  novaSenha = pass;
  password.innerHTML = novaSenha;
  

});


containerPassword.addEventListener("click", ()=>{
  navigator.clipboard.writeText(novaSenha);

  alert("Senha copiada com sucesso!");
});


