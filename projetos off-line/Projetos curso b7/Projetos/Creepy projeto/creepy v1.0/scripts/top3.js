
/////////////////////TOP 2////////////////////////////

// slide 1
let topSlide1 = [{

    background: "url('fotosCreepys/isolada.jpg')",
    link: "pagesCreepys/isoladaNaSala.php",
    titulo: "Leia as regras antes de aceitar esse emprego.",
    desc: "Coisas acontencem durante a noite dentro dessa sala, e se as regras não forem seguidas...",

    dataPostagem:"27/05/2021"
}];


// slide 2 
let topSlide2 = [{

    background: "url('fotosFatos/projetoAbigail.JPG')",
    link: "pagesFatos/projetoAbigail.php",
    titulo: "Projeto Abigail 'Área 51'",
    desc: "Uma experiência feita na 'área 51' que não deu muito certo, porém existem muitos segredos.",

    dataPostagem:"25/05/2021"
}];








/////////////////////TOP 2////////////////////////////

   
topSlide1.map((item,index)=>{
    let top1 = document.querySelector('.top1')

    top1.href = item.link;
    top1.querySelector(".img").style.backgroundImage = item.background; 
    top1.querySelector('h2').innerHTML = item.titulo;
    top1.querySelector('.chamda-description').innerHTML = item.desc;
    top1.querySelector('.data').innerHTML = item.dataPostagem;

});

topSlide2.map((item,index)=>{
    let top2 = document.querySelector('.top2')

    top2.href = item.link;
    top2.querySelector(".img").style.backgroundImage = item.background; 
    top2.querySelector('h2').innerHTML = item.titulo;
    top2.querySelector('.chamda-description').innerHTML = item.desc;
    top2.querySelector('.data').innerHTML = item.dataPostagem;

});


////////////////////////////////////////////////////////////////////////////////