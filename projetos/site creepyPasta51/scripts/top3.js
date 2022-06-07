
/////////////////////TOP 2////////////////////////////

// slide 1
let topSlide1 = [{

    background: "url('fotosCreepys/maeEstranha.jpg')",
    link: "pagesCreepys/ultimamenteMinhaMaeEstaEstranha.php",
    titulo: "Ultimamente Minha Mãe Está Estranha.",
    desc: " Minha mãe sempre foi um pouco peculiar. Gostava de fazer as coisas de uma maneira específica e sempre em um dia específico...",

    dataPostagem:"31/05/2021"
}];


// slide 2 
let topSlide2 = [{

    background: "url('fotosCreepys/pizza.jpg')",
    link: "pagesCreepys/olaEuGostariaDePedirUmaPizza.php",
    titulo: "Olá! Eu gostaria de pedir uma pizza...",
    desc: "‘Olá, gostaria de pedir uma pizza’ É o que tenho ouvido o dia todo e não consigo acreditar.",

    dataPostagem:"09/06/2021"
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