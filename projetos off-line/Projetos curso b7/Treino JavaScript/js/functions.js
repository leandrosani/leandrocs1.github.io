//arrays
/*let nome = ['Leandro', 31, 'Casado'];

console.log(nome)//mostra os 3 valores
console.log(nome[0])//mostra apenas o valor na posiçao 0 'Leandro'
console.log(nome[1])
console.log(nome[2])
*/


///////////////////////////////////////////

//Verbo + Substantivo para nomear as functions
/*
let = corSite = "azul"

function resetaCor(){
    corSite = "";           // quando executar a function resetaCor irá deixar a cor do site em branco.
}

function restauraCor(){
    corSite = "azul";
}

resetaCor();
console.log(corSite);


restauraCor();
console.log(corSite);
*/

////////////////////////////////////////////

//Criar uma function para preencher a cor na hora
/*
let corSite = "azul";

function alterarCor(cor, tonalidade){     // cor/tonalidade = parametro / entrada
    corSite = cor + ' ' + tonalidade;    // cor+tonalidade = argumento da function(o que eu vou fazer com os valores que foram passados dentro da minha function)
}

alterarCor("verde","claro");
console.log(corSite);
*/
/*
let idade = 31;

function mudarIdade(novaIdade){
    idade = novaIdade;
}

console.log(idade);

mudarIdade(24);

console.log(idade);


let nome = "Leandro";

console.log(nome)

function trocaNome(novo){
    nome = novo;
}

trocaNome('Leonardo');

console.log(nome)


let ChamadaCafe = ['Venha provar o café nº 1 do Brasil! Seja o ', 1]

console.log(ChamadaCafe)

function mudarContagem(nova){
    ChamadaCafe[1] = nova;
}

mudarContagem(2);
    console.log(ChamadaCafe)



// function sem retorno:
function nome(){
    console.log(`leandro`);
}

nome();



// function com retorno:
function multiplicarPorDois(valor){
    return valor* 2;
}

multiplicarPorDois(5);

//console.log(multiplicarPorDois(30))

//let resultado = multiplicarPorDois(5);

console.log(resultado);


//resumir if(?) e else(:) Se meu cliente tem mais de 100 pontos ele é premium:
let pontos = 101;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);




//Operador logico e(&&) vai retornar true quando todos os operadores forem verdadeiros
//uma pessoa que só pode entrar na vaga se for maior que 18 anos e tiver carteira de trabalho
let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

    console.log(podeAplicar);




//Operador logico e(||) vai retornar true quando um dos operadores forem verdadeiros
//uma pessoa que só pode entrar na vaga se for maior que 18 anos e tiver carteira de trabalho
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

    console.log('Aprovado: ', podeAplicar);


//Operador logico NOT(!)
//uma pessoa que só pode entrar na vaga se for maior que 18 anos e tiver carteira de trabalho

let candidatoRecusado = !podeAplicar;

console.log('Aprovado: ', candidatoRecusado);



//Minha empresa só vai aprovar quem tirou nota 10 e tem carteira de trabalho:

let nota = 10;
let carteiraDeTrabalho = false;
let condicao = nota >=10 && carteiraDeTrabalho ? 'aprovado' : 'reprovado';

console.log(condicao)




let a = 'vermelho';
let b = 'azul';



function mudarCor(){
    a = 'azul';
    b = 'vermelhor';
}

mudarCor();

console.log(a);
console.log(b);



//if .. else
//Se a hora estiver entre 06:00hrs e 12:00 vamos exibir "bom dia", de 12:00 a 18:00 exibir "boa tarder" , caso contrario "Boa noite"

let hora = 20;

if(hora >= 6 && hora < 12){
    console.log('Bom dia!');

}else if(hora < 18 && hora > 12){
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite!')
}



let permissao;

permissao = 'diretor';

switch(permissao){
    case 'comum' :
        console.log('Usuário comum!');
        break;

    case 'premium' :
            console.log('Usuário premium!');
            break;

    case 'diretor' :
        console.log('Usuário diretor!');
        break;

    default:
        console.log('Usuário não cadastrado!');    

}



//for - LOOP


for(let i = 0 ; i < 5 ; i++){
    console.log(0,i);
}



//while - LOOP

let i = 5;

while (i >= 1){
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}



let i = 0;

while(i <= 5){
    console.log(i);
    i++;
}



//for-of LOOP para arrays

let cores = ['amarelo', 'azul', 'vermelho'];

for(let cor of cores){
    console.log(cor);
}



//Escreva uma function que usa 2 numeros e retorna o maior entre eles.

let maiorNumero = max(20, 10);

function max(numero1, numero2){
    if(numero1 > numero2){
        return numero1;
    }else{
        return numero2;
    }
} 

console.log(maiorNumero);
////////////////////////////////////////////////////
let maiorNumero = max(52, 75);

function max(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
}
console.log(maiorNumero);



 //divisivel por 3 => Fizz
 //divisivel por 5 => Buzz
 //divisivel por ambos => FizzBuzz
 //não divisivel apresenta o mesmo valor

 let resultado = FizzBuzz(5);

 function FizzBuzz(numero1){
    if(numero1 % 3 === 0 && numero1 % 5 === 0){
        console.log('FizzBuzz');
    }else if(numero1 % 3 === 0){
        console.log('Fizz');
    }else if(numero1 % 5 === 0){
        console.log('Buzz');
    }else if(typeof numero1 !== 'number'){
        console.log('Não é um numero!')
    
        }else{
         console.log(numero1);
    }
 }





//Velocidade max de 70km retorna OK.
//a cada 5km acima ganha 1 ponto na carteira.
//Math.Floor()
//caso os pontos sejam maiores que 12 a carteira é suspendida.

verificarVelocidade(120);


function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    const MaximoPonto = 12;

    if(velocidade <= velocidadeMaxima){
        console.log('Ok!') 
    }else{
        const pontos = (velocidade - velocidadeMaxima) / kmPorPonto;
            if(pontos < MaximoPonto){
                console.log('Pontos: ' + Math.floor(pontos)); //Math.floor arrendoda numero.
            }else{
                console.log('Carteira Suspensa!');
            }

    }
}

//Receber uma quantidade de numeros para avaliar
//function exibe se cada valor é impar ou par

exibirTipo(30);

function exibirTipo(quantidade){
 
    for (let i = 0; i <= quantidade; i++) {
        if (i % 2 === 0){
            console.log(i + ' PAR');
        }else{
            console.log(i + ' IMPAR');
        }}};



let btn = document.getElementById("myBtn");
let menu = document.getElementById("menuMobile");


btn.addEventListener("click", abrirFecharMenu);
    
function abrirFecharMenu(e){

    e.preventDefault();

    menu.classList.toggle('menu--open');
    menu.style.height = "208px"

}


////////// ABRIR E FECHAR MENU RESPONSIVO //////////////////

var btnAbrir = document.querySelector(".btn");
var btnFechar = document.querySelector(".btnX");

    btnAbrir.addEventListener("click", function(){

        let menuAbrir = document.querySelector(".menu");

        menuAbrir.style.height = 208;

        btnFechar.style.display = "block";
        btnAbrir.style.display = "none";
   
    })

    btnFechar.addEventListener("click", function(){

        let menuFechar = document.querySelector(".menu");

        menuFechar.style.height = 0;

        btnAbrir.style.display = "block";
        btnFechar.style.display = "none";
    })

   
    
 

    ////botoes
    let botaoSoma = document.querySelector(".botao1");
    let botaoMultiplica = document.querySelector(".botao2");

    botaoSoma.addEventListener("click", somar);
    botaoMultiplica.addEventListener("click", multiplica);

        function somar(){
            let valor1 = Number(document.getElementById("val1").value);
            let valor2 = Number(document.getElementById("val2").value); //usa-se Number para transformar "string" em numero
            let resultado = valor1 + valor2;
            
            document.querySelector(".result").innerHTML = resultado;
        }
        function multiplica(){
            let valor1 = Number(document.getElementById("val1").value);
            let valor2 = Number(document.getElementById("val2").value);
            let resultadoMult = valor1 * valor2

            document.querySelector(".result").innerHTML = resultadoMult;


        }



        function azul(){
            limpar();
            document.getElementById("texto").classList.add('azul');
        }

        function amarelo(){
            limpar();
            document.getElementById("texto").classList.add('amarelo');
        }

        function vermelho(){
            limpar();
            document.getElementById("texto").classList.add('vermelho');
        }


        function limpar(){
            document.getElementById("texto").classList.remove('azul');
            document.getElementById("texto").classList.remove('amarelo');
            document.getElementById("texto").classList.remove('vermelho');
        }

   


    function red(){
        document.getElementById("texto").style.color = 'red';
    }

    function blue(){
        document.getElementById("texto").style.color = 'blue';
    }

    function green(){
        document.getElementById("texto").style.color = 'green';
    }





        let soma = document.querySelector(".soma");

        soma.addEventListener("click", mudarCor);
    
    function mudarCor(){
        document.getElementById("texto").style.color = 'red';
    }

    for(let i = 0; i <=5 )
   




//                                      BUTON 1
let contagem = '';
let contagem2 = '';
let contagem3 = '';

for(let i = 0; i <= 5; i++){
    contagem += i + "&nbsp";
}

let texto = document.getElementById("div1");
let button1 = document.getElementById("button1");

button1.addEventListener("click", executarContagem);

function executarContagem(){
    if(texto.style.color != "red"){
        
        texto.style.color = "red";
        texto.innerHTML = contagem;
    }else{
        texto.style.color = "black";
        texto.innerHTML = "";
    }
}


//                                      BUTON 2

for(let e = 0; e <= 10; e++){
    contagem2 += e + "&nbsp";
};

let texto2 = document.getElementById("div2");
let button2 = document.getElementById("button2");

button2.addEventListener("click", executarContagem2);

function executarContagem2(){
    if(texto2.style.color != "blue"){
        
        texto2.style.color = "blue";
        texto2.innerHTML = contagem2;
    }else{
        texto2.style.color = "yellow";
        texto2.innerHTML = "";
    }
}

//                                      BUTON 3

for(let j = 0; j <= 15; j++){
    contagem3 += j + "&nbsp";
};

let texto3 = document.getElementById("div3");
let button3 = document.getElementById("button3");

button3.addEventListener("click", executarContagem3);

function executarContagem3(){
    if(texto3.style.color != "yellow"){
        
        texto3.style.color = "yellow";
        texto3.innerHTML = contagem3;
    }else{
        texto3.style.color = "black";
        texto3.innerHTML = "";
    }
}  



let carros = [
    {nome:"Corolla", cor:"Preto", ano:"2021"},
    {nome:"Ferrari", cor:"Vermelho", ano:"2021"},
    {nome:"S18", cor:"Preto", ano:"2013"}
];


let nomeDoCarro = carros[2].nome;
let div1 = document.getElementById("div1");
const button1 = document.getElementById("button1");

button1.addEventListener("click", function(){
    if(div1.innerHTML == ""){
        div1.innerHTML = "Carro: " + nomeDoCarro;
    }else{
        div1.innerHTML = "";
    }
});


let corDoCarro = carros[0].cor;
let div2 = document.getElementById("div2");
const button2 = document.getElementById("button2");

button2.addEventListener("click", function(){
    if(div2.innerHTML == ""){
        div2.innerHTML = "Cor: " + corDoCarro;
    }else{
        div2.innerHTML = "";
    }
});


let anoDoCarro = carros[0].ano;
let div3 = document.getElementById("div3");
const button3 = document.getElementById("button3");

button3.addEventListener("click", function(){
    if(div3.innerHTML == ""){
        div3.innerHTML = "Ano: " + anoDoCarro;
    }else{
        div3.innerHTML = "";
    }
});




let nome = "25"

const resultado = nome
console.log(resultado);




//////////////////////Menu Responsivo//////////////////////////

let botao = document.querySelector(".menu-mobile");
let wrapMenu = document.querySelector(".wrap-menu");

botao.addEventListener("click", abrirMenu);


function abrirMenu(){
    if(wrapMenu.style.width != "65%"){
        wrapMenu.style.width = "65%";
        wrapMenu.style.transition = "0.5s";
    }else{
        wrapMenu.style.width = "0";
        wrapMenu.style.transition = "0.5s";
    }
};




let apertar1 = document.getElementById("mini1");
let apertar2 = document.getElementById("mini2");
let apertar3 = document.getElementById("mini3");
let apertar4 = document.getElementById("mini4");
let apertar5 = document.getElementById("mini5");
let apertar6 = document.getElementById("mini6");
let fotoGrande = document.getElementById("fotoPrincipal");


apertar1.addEventListener("click", clicar1);
apertar2.addEventListener("click", clicar2);
apertar3.addEventListener("click", clicar3);
apertar4.addEventListener("click", clicar4);
apertar5.addEventListener("click", clicar5);
apertar6.addEventListener("click", clicar6);


function clicar1(){
    fotoGrande.style.backgroundImage = "url(photos/arara.jpg)"
    fotoGrande.style.backgroundPosition = "center"
    fotoGrande.style.backgroundSize = "contain"
    fotoGrande.style.backgroundRepeat = "no-repeat"
}
function clicar2(){
    fotoGrande.style.backgroundImage = "url(photos/coringa.jpg)"
    fotoGrande.style.backgroundPosition = "center"
    fotoGrande.style.backgroundSize = "contain"
    fotoGrande.style.backgroundRepeat = "no-repeat"
}
function clicar3(){
    fotoGrande.style.backgroundImage = "url(photos/joystick.jpg)"
    fotoGrande.style.backgroundPosition = "center"
    fotoGrande.style.backgroundSize = "contain"
    fotoGrande.style.backgroundRepeat = "no-repeat"
}
function clicar4(){
    fotoGrande.style.backgroundImage = "url(photos/pier.jpg)"
    fotoGrande.style.backgroundPosition = "center"
    fotoGrande.style.backgroundSize = "contain"
    fotoGrande.style.backgroundRepeat = "no-repeat"
}
function clicar5(){
    fotoGrande.style.backgroundImage = "url(photos/quadro.jpg)"
    fotoGrande.style.backgroundPosition = "center"
    fotoGrande.style.backgroundSize = "contain"
    fotoGrande.style.backgroundRepeat = "no-repeat"
}
function clicar6(){
    fotoGrande.style.backgroundImage = "url(photos/wolf.jpg)"
    fotoGrande.style.backgroundPosition = "center"
    fotoGrande.style.backgroundSize = "contain"
    fotoGrande.style.backgroundRepeat = "no-repeat"
}



let carro = [
    {marca:'Toyota', modelo:'Corolla', ano:'2021'},
    {marca:'Volkswagen', modelo:'Jetta', ano:'2020'},
    {marca:'Chevrolet', modelo:'Camaro', ano:'2018'}
]

let marca = carro.find(function(item){
            return (item.marca == 'Chevrollet') ? true : false;
            });


let res = marca
console.log(res);




let cadastro = {
    numeroDoRegistro: 587,

    nomeCompleto: {
        nome: "Leandro",
        sobreNome: "Santos"
    },

    contato: {
        telefone: "99628-9062",
        email: "carmosantosleandro@gmail.com",
    },

    endereco: {
        rua: "Av. Presidente Vargas",
        bairro: "centro",
        cidade: "Domingos Martins",
        estado: "ES"
    }
};
    
let {contato:{telefone}} = cadastro;


console.log(telefone);



const c = function(el){
    return document.querySelector(el);
}

const cs = (el)=>document.querySelectorAll(el);



let pizzasJson = [
    {id: 1, tipo: "Calabresa", tamanho:["P","M","G"], preco:[18.50,30.02,55.50]},
    {id: 2, tipo: "Portuguesa", tamanho:["P","M","G"], preco:[18.50,30.02,55.50]},
    {id: 3, tipo: "Moda da Casa", tamanho:["P","M","G"], preco:[18.50,30.02,55.50]},
    {id: 4, tipo: "Brigadeiro", tamanho:["P","M","G"], preco:[18.50,30.02,55.50]}
]

pizzasJson.map((pizza,index)=>{
    let itemPizza = c(".clone").cloneNode(true);

    itemPizza.querySelector(".tipo").innerHTML = pizza.tipo
    
    c("section").append(itemPizza)
});





const c = (el)=>document.querySelector(el);

let carros = [
    {id: 1, marca: 'Fiat', modelo: 'Cronos', ano: 2021},
    {id: 1, marca: 'Toyota', modelo: 'Corolla', ano: 2020},
    {id: 1, marca: 'Volvo', modelo: 'XC90', ano: 2022},
    {id: 1, marca: 'Mitsubishi', modelo: 'TR4', ano: 2019}
]

carros.map((item,index)=>{
    let carrosItem = c('.carros').cloneNode(true)

    carrosItem.querySelector('.marca').innerHTML = item.marca
    carrosItem.querySelector('.modelo').innerHTML = item.modelo
    carrosItem.querySelector('.ano').innerHTML = item.ano
    

    c('section').append(carrosItem)

});



    const c=(el)=>document.querySelector(el);

let pizzasJson = [
    {tipo: "Calabresa", tamanho:["P","M","G"], preco:[19.80,30.50,45.89],img: "photos/arara.jpg"},
    {tipo: "Portuguesa", tamanho:["P","M","G"], preco:[19.80,30.50,45.89],img: "photos/pier.jpg"},
    {tipo: "Moda", tamanho:["P","M","G"], preco:[19.80,30.50,45.89],img: "photos/quadro.jpg"},
    {tipo: "Quatro queijos", tamanho:["P","M","G"], preco:[19.80,30.50,45.89],img: "photos/coringa.jpg"}
];


pizzasJson.map((item,index)=>{
    let copiaPizzas = c('.pizzas').cloneNode(true);

    copiaPizzas.setAttribute('data-key', index);
    copiaPizzas.querySelector('.imagem img').src = item.img;
    copiaPizzas.querySelector('.tipo').innerHTML = item.tipo;
    copiaPizzas.querySelector('.tamanho').innerHTML = item.tamanho;
    copiaPizzas.querySelector('.preco').innerHTML = item.preco;
    copiaPizzas.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        let guardarInfo = e.getAttribute(index);

        c('.wrap-float').style.opacity = 0;
        c('.wrap-float').style.display = "flex";
        setTimeout(()=>{
            c('.wrap-float').style.opacity = 1;
        },20)

        console.log(guardarInfo)
    });



    c('section.area-pizzas').append(copiaPizzas);

    console.log(index)
    
});

*/

const qS = (e)=>document.querySelector(e);

let pizzasJson = [
    {id: 01, sabor: 'Calabresa', tamanho: ['P','M','G'], preco: 15.30, img: 'photos/arara.jpg'},
    {id: 02, sabor: 'Portuguesa', tamanho: ['P','M','G'], preco: 16.30, img: 'photos/coringa.jpg'},
    {id: 03, sabor: 'Moda da Casa', tamanho: ['P','M','G'], preco: 16.30, img: 'photos/wolf.jpg'},
    {id: 02, sabor: 'Portuguesa', tamanho: ['P','M','G'], preco: 16.30, img: 'photos/coringa.jpg'}
];

pizzasJson.map((item, index)=>{
    
    let clonePizzas = qS('.pizzas').cloneNode(true);

    clonePizzas.querySelector('.tipo').innerHTML = item.sabor
    clonePizzas.querySelector('.tamanho').innerHTML = item.tamanho
    clonePizzas.querySelector('.preco').innerHTML = item.preco
    clonePizzas.querySelector('.imagem img').src = item.img

    clonePizzas.querySelector('a').addEventListener('click',(e)=>{
        e.preventDefault();
        qS('.wrap-float').style.display = "flex";

        qS('.float-center').style.opacity = 0;
        setTimeout(()=>{
            qS('.float-center').style.opacity = 1;
        },5);

    });

    qS('.fechar').addEventListener('click',()=>{
        qS('.wrap-float').style.display = "none";
        qS('.click.selected').classList.remove('selected')
        document.querySelectorAll('.click').forEach((val, clickIndex)=>{
            if(clickIndex == 2){
                val.classList.add('selected');
            }
        });
        
        
    });

   
    qS('section.area-pizzas').append(clonePizzas);

});

document.querySelectorAll('.click').forEach((clickValue, clickIndex) =>{
    clickValue.addEventListener('click', ()=>{
        qS('.click.selected').classList.remove('selected')
        clickValue.classList.add('selected');
    });
});



let addArr = [];

addArr.push({queijo: 'mussarela'})

console.log(addArr)