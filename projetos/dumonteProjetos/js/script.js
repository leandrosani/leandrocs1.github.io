let header1 = document.querySelector('.header1');

function headerScroll(){

    header1.style.transition = "none"
    if(window.pageYOffset >= 1){
        header1.style.background = "#021820";
    }else{
        header1.style.transition = "0.2s"
        header1.style.background = "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(53,70,77,1) 35%, rgba(255,255,255,0) 100%)"
    }

};

window.addEventListener('scroll',()=>{
    headerScroll();
});

/******************************/

let carouselClass = document.querySelector('.header-carousel');
let carousel1Class = document.querySelector('.image-carousel-1');
let margin = 0;

setInterval(function (){

    if(margin > -200){
        carousel1Class.style.opacity = "0.5";
        carouselClass.style.transition = "1s ease-out";
        margin -= 100;
        carouselClass.style.marginLeft = margin+'%';
    }else{
        carouselClass.style.transition = "none";
        margin = 0;
        carouselClass.style.marginLeft = margin+'%';
        carousel1Class.style.opacity = "1";
    }

}, 12000);

