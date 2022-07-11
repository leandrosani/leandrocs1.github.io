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

//Animação enter

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);  //descobrir posição do scroll = window.scrollY;
        target.forEach(function(element){
            if((windowTop) > element.offsetTop){
                element.classList.add(animationClass);
            }else{
                element.classList.remove(animationClass);
            }
    });
}

animeScroll();

//verificar se tem alguma animação, se nao existir ele não executará;
if(target.length){ 
    window.addEventListener('scroll', ()=>{
        animeScroll();
    });
};

