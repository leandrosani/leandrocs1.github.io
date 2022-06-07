
/////////////////////TOP 2////////////////////////////

// slide 1
let topSlide1 = [{

    background: "url('fotosCreepys/espiritoDeUmSuicida.jpg')",
    link: "pagesCreepys/espiritoDeUmSuicida.html",
    titulo: "Relato Sobre o Espirito de um Suicida.",
    desc: "Relato real de uma pessoa que visitou uma amiga e presenciou coisas estranhas."
}];


// slide 2 
let topSlide2 = [{

    background: "url('fotosFatos/projetoAbigail.jpg')",
    link: "pagesFatos/projetoAbigail.html",
    titulo: "Projeto Abigail 'Área 51'",
    desc: "Uma experiência feita na 'área 51' que não deu muito certo, porém existem muitos segredos."
}];








/////////////////////TOP 2////////////////////////////

   
topSlide1.map((item,index)=>{
    let top1 = document.querySelector('.top1')

    top1.href = item.link;
    top1.querySelector(".img").style.backgroundImage = item.background; 
    top1.querySelector('h2').innerHTML = item.titulo;
    top1.querySelector('.chamda-description').innerHTML = item.desc;

});

topSlide2.map((item,index)=>{
    let top2 = document.querySelector('.top2')

    top2.href = item.link;
    top2.querySelector(".img").style.backgroundImage = item.background; 
    top2.querySelector('h2').innerHTML = item.titulo;
    top2.querySelector('.chamda-description').innerHTML = item.desc;

});


////////////////////////////////////////////////////////////////////////////////