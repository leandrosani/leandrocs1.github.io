let arrowTop = document.querySelector(".arrow-top");

rolarParaAparecer()

arrowTop.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

function rolarParaAparecer() {
    if(window.scrollY > 0 && window.innerWidth > 1000){
        arrowTop.style.display = "block";
    }else{
        arrowTop.style.display = "none";
    }
}

setInterval(rolarParaAparecer, 100);


//*** Sumir frase OLX e WHATSAPP ***/

let linkColor1 = document.querySelector('.link1');
let linkColor2 = document.querySelector('.link2');
let frase1 = document.querySelector('.frase-olx');
let frase2 = document.querySelector('.numero-whatsapp');


if(window.innerWidth < 351){
    linkColor1.style.backgroundColor = 'transparent';
    linkColor2.style.backgroundColor = 'transparent';

    frase1.style.display = 'none';
    frase2.style.display = 'none';
}