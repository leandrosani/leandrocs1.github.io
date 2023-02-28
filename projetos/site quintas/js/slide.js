//    .fume      margin-left: -200vw;

setTimeout(()=>{
    let slide = document.querySelector('.fume');
    let loop = slide.style.marginLeft;

   setTimeout(()=>{
    if(slide.style.marginLeft == 0){
        slide.style.marginLeft = '-100vw'
    }
   },5000);

},2000);

