const qs = (e)=> document.querySelector(e);
const qsA = (e)=> document.querySelectorAll(e);


// Header escurecer após rolar para baixo
let lastScroll = window.pageYOffset;

window.addEventListener("scroll",()=>{
    if(window.scrollY > 10 ){
        qs("header .header-fixed").style.background = "#141414";
    }else
        qs("header .header-fixed").style.background = "rgba(20,20,20,0.2)";
});

/////////////////////MENU MOBILIE////////////////////////////

let botaoMenu = document.getElementById("btn-menu");
let menuAberto = document.querySelector(".nav-mobile");

botaoMenu.addEventListener("click", ()=>{
    if(menuAberto.style.left != "0px"){
        menuAberto.style.left = "0px"
    }else{
        menuAberto.style.left = "100vw"
    }
});