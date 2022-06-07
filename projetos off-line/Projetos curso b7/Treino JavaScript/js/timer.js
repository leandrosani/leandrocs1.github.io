/*
let timer;


function showTime(){
    let t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();

    let mostrarHora = `Agora são ${h} horas ${m} minutos e ${s} segundos!`
    
    cronometro.style.display = `block`;
    cronometro.innerHTML = mostrarHora;
}

let iniciar = document.getElementById("iniciar");
let parar = document.getElementById("parar")
let cronometro = document.querySelector(".cronometro")


iniciar.addEventListener("click", showTime);

parar.addEventListener("click", display);

function display(){
    cronometro.style.display = `none`;
}

*/

let pergunta = "Qual a cor da mesa?"
let botao = document.querySelector(".procurar");
let posicao = document.querySelector(".posicao")

botao.addEventListener("click", respostaCorreta)

function respostaCorreta(){
    let resposta = document.querySelector(".busca").value;


    if(resposta === "preto" || "preta"){
        posicao.innerHTML = "Resposta correta, Catarina Gorda!";
    }else{
        posicao.innerHTML = "Você errou, continue tentando!";
    }

    
}

