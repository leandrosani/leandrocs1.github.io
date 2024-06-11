  const bullets = document.querySelectorAll(".bullet-single");
  const images = document.querySelectorAll("img");
  images[0].classList.add("opacity");

  bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
      // Remove a classe 'opacity' de todas as imagens
      images.forEach(img => img.classList.remove("opacity"));
      bullets.forEach(blt => blt.classList.remove("active-bullet"));
      
      // Adiciona ou remove a classe 'opacity' na imagem correspondente ao bullet clicado
      images[index].classList.add("opacity");
      bullet.classList.add("active-bullet");
    });
  });










































/*var lastIndex = 0;

var images = document.querySelectorAll('.container img');

images.forEach((item,index)=>{
    document.querySelectorAll('.bullet-single')[index]
    .addEventListener('click',()=>{
        let lastImage = document.querySelectorAll('.container img')[lastIndex];
        let actualImage = document.querySelectorAll('.container img')[index];
        
        //Resetar as bullets e setar a nova com base na imagem.

        document.querySelectorAll('.bullet-single')[lastIndex]
        .classList.remove('active-bullet');
        
        ;
        document.querySelectorAll('.bullet-single')[index]
        .classList.add('active-bullet');

        lastImage.style.opacity = 0;
        actualImage.style.opacity = 1;

        lastIndex = index;
        
    })
})

*/

