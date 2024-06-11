const ver = document.querySelectorAll("span");



ver.forEach((elemento, array)=>{
  const p = document.querySelectorAll(".conteudo p")[array];

  ver[array].addEventListener("click", ()=>{
    if(p.classList.contains("mostrar")){
      ver.textContent = "Ver mais";
      p.classList.remove("mostrar");
    }else{
      ver.textContent = "Ocultar";
      p.classList.add("mostrar");
    }
  });


  
});

