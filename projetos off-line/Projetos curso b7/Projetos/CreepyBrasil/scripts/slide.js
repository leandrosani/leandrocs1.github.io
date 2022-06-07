
const botaoDireito = document.querySelector(".arrow-selector--right");
const botaoEsquerdo = document.querySelector(".arrow-selector--left");

let slider = document.querySelector("header .slider");

function resetMargin(){slider.style.marginLeft = "0px"}

function slider2(){slider.style.marginLeft = "-100vw"}
function slider3(){slider.style.marginLeft = "-200vw"}

//Slider principal site

resetMargin();

botaoDireito.addEventListener("click",()=>{
    switch(slider.style.marginLeft){
        case "0px":
            slider2()            
    break;
        case "-100vw":
            slider3()
    break;
    }
});

botaoEsquerdo.addEventListener("click",()=>{
    switch(slider.style.marginLeft){
        case "-200vw":
            slider2();
    break;
        case "-100vw":
            resetMargin();
    }
});

//Slider item1//////////// LISTA FILTRADA ///////////////////////

let botaoDireitoItem = document.querySelector("section .arrow-selector--right");
let botaoEsquerdoItem = document.querySelector("section .arrow-selector--left");
let botaoLinkItem = document.querySelector("section .arrow-selector--link");

let scrollItem = document.querySelector(".lista .lista-wrap");

//Json Lista1
let jsonListaFiltrada1 = jsonLista1.slice(0,16); //Retornando Uma Quantidade especifica De Elementos Do Array;
jsonListaFiltrada1.map((item,index)=>{
    
    let cloneLista = document.querySelector('.display-none a').cloneNode(true);

    cloneLista.querySelector(".img").style.backgroundImage = `url('${item.image}`;
    cloneLista.querySelector('h4').innerHTML = item.title;
    cloneLista.href = item.link;
    
    document.querySelector('section .lista .lista-wrap').append(cloneLista);
});

function resetScrollItem(){
    scrollItem.style.marginLeft = "0px"
}

resetScrollItem();

botaoDireitoItem.addEventListener("click",()=>{

    switch(scrollItem.style.marginLeft){
        case "0px":
            scrollItem.style.marginLeft = "-91.125vw"
            break;
    }

    
    setTimeout(()=>{
        botaoLinkItem.style.display = "flex";
        botaoDireitoItem.style.display = "none";
    },1000);
});

botaoEsquerdoItem.addEventListener("click",()=>{

    switch(scrollItem.style.marginLeft){        
        case "-91.125vw":
            scrollItem.style.marginLeft = "0px"
            break;
    }

    botaoDireitoItem.style.display = "flex";
    botaoLinkItem.style.display = "none";
});



//width 232  