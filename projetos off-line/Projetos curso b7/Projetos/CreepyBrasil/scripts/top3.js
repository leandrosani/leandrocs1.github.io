// slide 1
let topSlide1 = [{

    background: "url('fotos/buracoNegro.jpg')",
    link: "textos/curiosidades/o buraco negro.html",
    titulo: "O buraco negro",
    desc: "O mistério do buraco negro em nosso universo, tudo que você precisa saber!"
}];


// slide 2 
let topSlide2 = [{

    background: "url('fotos/Terror2.jpg')",
    link: "textos/curiosidades/o buraco negro.html",
    titulo: "O caveira da morte",
    desc: "Se você acredita que pessoas podem voltar das trevas, esse texto é para você, uma lenda do sobrenatural"
}];


// slide 3
let topSlide3 = [{

    background: "url('fotos/caveira_morte.jpg')",
    link: "textos/curiosidades/o buraco negro.html",
    titulo: "Morte!",
    desc: "A morte como você nunca leu..."
}];

/////////////////////TOP 3////////////////////////////
   
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

topSlide3.map((item,index)=>{
    let top3 = document.querySelector('.top3')

    top3.href = item.link;
    top3.querySelector(".img").style.backgroundImage = item.background; 
    top3.querySelector('h2').innerHTML = item.titulo;
    top3.querySelector('.chamda-description').innerHTML = item.desc;

});

////////////////////////////////////////////////////////////////////////////////