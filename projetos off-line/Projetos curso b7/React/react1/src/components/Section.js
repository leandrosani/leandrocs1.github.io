import React from 'react'
import './Section.css'

const qs =(e)=>{document.querySelector(e)};

let jsonContent = [
    {image: "endereço da url" ,title: "Título", synopsis: "Resumo do meu texto"},
    {image: "endereço da url" ,title: "Título", synopsis: "Resumo do meu texto"},
    {image: "endereço da url" ,title: "Título", synopsis: "Resumo do meu texto"},
    {image: "endereço da url" ,title: "Título", synopsis: "Resumo do meu texto"},
    {image: "endereço da url" ,title: "Título", synopsis: "Resumo do meu texto"},
    {image: "endereço da url" ,title: "Título", synopsis: "Resumo do meu texto"},
    {image: "endereço da url" ,title: "Título", synopsis: "Resumo do meu texto"},
    {image: "endereço da url" ,title: "Título", synopsis: "Resumo do meu texto"}
];

jsonContent.map((item, key)=>{
    let content = qs('.wrap-content').cloneNode(true);

    
    qs(content).append('.scroll');
});

export default ()=>{
    return(
        <section className="scroll">
            <div className="wrap-content">


            </div>

        </section>
    )
};
