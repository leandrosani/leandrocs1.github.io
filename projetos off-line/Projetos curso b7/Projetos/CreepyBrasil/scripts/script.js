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


/////////////////////LISTA CREEPYPASTA COMPLETA////////////////////////////
   
    jsonLista1.map((item,index)=>{
        
        let cloneLista = document.querySelector('.display-none a').cloneNode(true);

        cloneLista.querySelector(".img").style.backgroundImage = `url('../${item.image}`;
        cloneLista.querySelector('h4').innerHTML = item.title;
        cloneLista.href = `../${item.link}`;
        

        document.querySelector('.lista-wrap').append(cloneLista);
    });

////////////////////////////////////////////////////////////////////////////////


