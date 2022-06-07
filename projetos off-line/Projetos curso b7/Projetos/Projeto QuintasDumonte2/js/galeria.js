// ADICIONAR FOTOS:
let fotos = [
    {img: 'images/1.jpg'},
    {img: 'images/2.jpg'},
    {img: 'images/3.jpg'},
    {img: 'images/4.jpg'},
    {img: 'images/5.jpg'},
    {img: 'images/11.jpg'},
    {img: 'images/12.jpg'},
    {img: 'images/13.jpg'},
    {img: 'images/14.jpg'},
    {img: 'images/15.jpg'},
    {img: 'images/1.jpg'},
    {img: 'images/2.jpg'},
    {img: 'images/3.jpg'}
];

let miniImg = document.querySelectorAll(".mini-img");
let modal = document.querySelector(".wrap-giga--foto");


const qs = (e)=>document.querySelector(e);

fotos.map((fotoItem, fotoIndex)=>{
    let miniImg = qs('body .mini-img').cloneNode(true);
    
    miniImg.querySelector('img').src = fotoItem.img

    miniImg.addEventListener('click',(e)=>{
        qs('.giga-foto img').src = fotoItem.img;

        qs('.giga-foto').style.opacity = 0
        modal.style.display = 'flex';
        setTimeout(()=>{
            qs('.giga-foto').style.opacity = 1
        },2)

    });

    qs('.photo-wrap').append(miniImg);
});

qs('.button-close').addEventListener('click',()=>{
    modal.style.display = 'none';
});