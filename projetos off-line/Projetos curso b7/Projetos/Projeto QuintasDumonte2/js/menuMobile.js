
//////////// MENU MOBILE ////////////



let botaoMenu = document.getElementById("btn-menu");

botaoMenu.addEventListener("click", ()=>{
    let menu = document.querySelector(".nav-mobile");
   
    if(menu.style.width != "100%"){
        menu.style.width = "100%";
    }else{
        menu.style.width = "0";
    }

    document.querySelector('body .nav-mobile').addEventListener('click',()=>{
        if(document.querySelector('.nav-mobile').style.width == '100%'){
            document.querySelector('.nav-mobile').style.width = '0'
        }
    });

});


