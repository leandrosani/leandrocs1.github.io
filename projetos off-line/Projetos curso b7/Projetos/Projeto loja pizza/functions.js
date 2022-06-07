const qs = (e)=>document.querySelector(e);
const qsA = (e)=>document.querySelectorAll(e);
let pedido = [];


pizzasJason.map((item, index)=>{
    let pizzas = qs('.pizzas-unity').cloneNode(true);

        pizzas.querySelector('.pizzas-unity--img img').src = item.img;
        pizzas.querySelector('.type h2').innerHTML = item.type;
        pizzas.querySelector('.description p').innerHTML = item.description;

        pizzas.querySelector('a').addEventListener('click', (el)=>{
            el.preventDefault();

            qs('.wrap-window').style.opacity = 0
            qs('aside.window').style.display = 'flex'
            setTimeout(()=>{
                qs('.wrap-window').style.opacity = 1
            },02);

            qs('.wrap-window--img img').src = item.img;
            qs('.type h3').innerHTML = item.type;
            qs('.wrap-window--desc .description p').innerHTML = item.description;

        });
    
    qs('main.pizzasjs').append(pizzas)
});

///         CANCELAR MENU       ///
qs('.cancel-button').addEventListener('click',()=>{
    qs('aside.window').style.display = 'none'
    qs('.size.selected').classList.remove('selected');
   
    qsA('.size').forEach((sizeItem, sizeIndex)=>{
        if(sizeIndex == 2){
            sizeItem.classList.add('selected');
        }
    }); 
});

///     Selecionar tamanho      ///
qsA('.size').forEach((sizeItem, sizeIndex)=>{
    sizeItem.addEventListener('click',()=>{
        qs('.size.selected').classList.remove('selected');
        sizeItem.classList.add('selected');
    });
});

qs('.add-button h2').addEventListener('click',()=>{   
    let sabor = qs('.type h3').innerHTML;     
    let tamanho = qs('.size.selected').innerHTML;
    
    let indentifier = sabor+'@'+tamanho;
    
    pedido.push({sabor,tamanho});

    qs('aside.window').style.display = 'none'
    qs('.size.selected').classList.remove('selected');
   
    qsA('.size').forEach((sizeItem, sizeIndex)=>{
        if(sizeIndex == 2){
            sizeItem.classList.add('selected');
        }
    });

});    
