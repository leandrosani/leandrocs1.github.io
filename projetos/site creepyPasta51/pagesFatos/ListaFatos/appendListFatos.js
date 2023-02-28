/////////////////////LISTA FATOS SOBRENATURAIS COMPLETA////////////////////////////
   
listaFatos.map((item,index)=>{

    let cloneLista = document.querySelector('.display-none a').cloneNode(true);

    cloneLista.querySelector(".img").style.backgroundImage = `url('../../${item.image}`;
    cloneLista.querySelector('h4').innerHTML = item.title;
    cloneLista.href = `../../${item.link}`;
    
    document.querySelector('.lista-wrap-completa').append(cloneLista);

});

////////////////////////////////////////////////////////////////////////////////
