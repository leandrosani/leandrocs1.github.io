let galeria = [
    {img:'photos/arara.jpg', titulo:'Arara'},
    {img:'photos/coringa.jpg', titulo:'Coringa'},
    {img:'photos/joystick.jpg', titulo:'Joystick'},
    {img:'photos/pier.jpg', titulo:'Pier'},
    {img:'photos/quadro.jpg', titulo:'Quadro'},
    {img:'photos/wolf.jpg', titulo:'Lobo'},
];

const qs = (el)=>document.querySelector(el);



galeria.map((item, index)=>{
    let cloneGaleria = qs('.wrap-galeria').cloneNode(true);

    cloneGaleria.querySelector('.foto img').src = item.img;
    cloneGaleria.querySelector('.foto .titulo').innerHTML = item.titulo;

    cloneGaleria.querySelector('.foto').addEventListener('click',()=>{
        let atributoImg = cloneGaleria.querySelector('.foto img').getAttribute('src');
        let wrapImg = qs('.wrap-foto--grande img');
        wrapImg.src = atributoImg;
        
        qs('aside.foto-grande').style.display = 'flex';

        wrapImg.style.opacity = 0;
        setTimeout(()=>{
            wrapImg.style.opacity = 1;
        },5);
    });

    qs('.fechar').addEventListener('click',()=>{
        qs('aside.foto-grande').style.display = 'none';
    });





    qs('main.wrap').append(cloneGaleria);
});