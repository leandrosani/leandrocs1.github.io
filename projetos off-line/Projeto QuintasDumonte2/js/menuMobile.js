
//////////// MENU MOBILE ////////////

let botaoMenu = document.getElementById("btn-menu");

botaoMenu.addEventListener("click", abrirMenu);

function abrirMenu(){
    let menu = document.querySelector(".nav-mobile");
    if(menu.style.width != "100%"){
        menu.style.width = "100%";
    }else{
        menu.style.width = "0";
    }
};


//////////// GALERIA DE FOTOS ////////////



let gigaFoto = document.querySelector(".giga-foto");
let fotoVal = "";
let miniImg = document.querySelectorAll(".mini-img");
let visibility = document.querySelector(".wrap-giga--foto");
let buttonClose = document.querySelector(".button-close");


for(let i=0 ; i<miniImg.length ; i++){
    miniImg[i].addEventListener('click', function(){

        fotoVal = miniImg[i].getAttribute('id');
        gigaFoto.setAttribute('id', fotoVal);

        visibility.classList.toggle('visibility-visible')

    });

};

    buttonClose.addEventListener("click", function(){
        visibility.classList.toggle('visibility-visible')
    });

