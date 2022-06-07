
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
    }
});

botaoEsquerdo.addEventListener("click",()=>{
    switch(slider.style.marginLeft){
        case "-100vw":
            resetMargin();
    break;
    }
});

//Automatizado:

setInterval(() => {
    switch(slider.style.marginLeft){
        case "0px":
            slider2()            
    break;
        case "-100vw":
            resetMargin();
    break;
    }
}, 13000);


////////////////////////listaCreepy Lista1///////////////////////////////////////
let listaCreepyFiltrada = listaCreepy.slice(0,16); //Retornando Uma Quantidade especifica De Elementos Do Array;
listaCreepyFiltrada.map((item,index)=>{
    
    let cloneListaFiltrada = document.querySelector('.display-none a').cloneNode(true);

    cloneListaFiltrada.querySelector(".img").style.backgroundImage = `url('${item.image}`;
    cloneListaFiltrada.querySelector('h4').innerHTML = item.title;
    cloneListaFiltrada.href = item.link;
    
    document.querySelector('section .lista .wraps-list1').append(cloneListaFiltrada);
});
////////////////////////FINAL listaCreepy Lista1///////////////////////////////////////


////////////////////////listaFatos Lista2////////////////////////////

let listaFatosFiltrada = listaFatos.slice(0,16); //Retornando Uma Quantidade especifica De Elementos Do Array;
listaFatosFiltrada.map((item, index)=>{

    let cloneListaFatos = document.querySelector('.display-none a').cloneNode(true);

    cloneListaFatos.querySelector(".img").style.backgroundImage = "url('"+item.image;
    cloneListaFatos.querySelector('h4').innerHTML = item.title;
    cloneListaFatos.href = item.link;


    document.querySelector('section .lista .wraps-list2').append(cloneListaFatos);
});
////////////////////////FINAL listaFatos Lista2////////////////////////////


//Slider item1///////////////////////////////////

let botaoDireitoItem1 = document.getElementById("item1d");
let botaoDireitoItem2 = document.getElementById("item2d");

let botaoEsquerdoItem1 = document.getElementById("item1e");
let botaoEsquerdoItem2 = document.getElementById("item2e");

let botaoLinkItem1 = document.getElementById("link-list1");
let botaoLinkItem2 = document.getElementById("link-list2");

let scrollList1 = document.getElementById("wrap-list1");
let scrollList2 = document.getElementById("wrap-list2");

//         CLICK BOTAO DIREITO :
    botaoDireitoItem1.addEventListener("click",()=>{
        switch(scrollList1.style.marginLeft){
            case "0px":
                scrollList1.style.marginLeft = "-91.125vw"
                break;
        }

        setTimeout(()=>{
            //if()
            botaoLinkItem1.style.display = "flex";
            botaoDireitoItem1.style.display = "none";
        },1000);
    });


    botaoDireitoItem2.addEventListener("click",()=>{
        switch(scrollList2.style.marginLeft){
            case "0px":
                scrollList2.style.marginLeft = "-91.125vw"
                break;
        }

        setTimeout(()=>{
            botaoLinkItem2.style.display = "flex";
            botaoDireitoItem2.style.display = "none";
        },1000);
    });

//         CLICK BOTAO ESQUERDO :

    botaoEsquerdoItem1.addEventListener("click",()=>{
        switch(scrollList1.style.marginLeft){        
            case "-91.125vw":
                scrollList1.style.marginLeft = "0px"
                break;
        }

        botaoDireitoItem1.style.display = "flex";
        botaoLinkItem1.style.display = "none";
    });

    botaoEsquerdoItem2.addEventListener("click",()=>{
        switch(scrollList2.style.marginLeft){        
            case "-91.125vw":
                scrollList2.style.marginLeft = "0px"
                break;
        }

        botaoDireitoItem2.style.display = "flex";
        botaoLinkItem2.style.display = "none";
    });



    function resetScrollItem1(){
        scrollList1.style.marginLeft = "0px"
    }
    resetScrollItem1();
    function resetScrollItem2(){
        scrollList2.style.marginLeft = "0px"
    }
    resetScrollItem2();






////////////////////////listaFatos Lista2////////////////////////////