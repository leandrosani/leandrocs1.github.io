let montadoraInputRef = document.querySelector(".montadora");
let marcaInputRef = document.querySelector(".marca");
let anoInputRef = document.querySelector(".ano");
let btnRef = document.querySelector("#btn");
let tableRef = document.querySelector("table");

let tabelaStorage = [];
tabelaStorage = JSON.parse(localStorage.getItem("tabelaCadastro"));

function getForm(){
    btnRef.addEventListener("click", event =>{
        event.preventDefault();
        if(tabelaStorage == null){
            tabelaStorage = [];
        }

        if(montadoraInputRef.value == "" || marcaInputRef.value == "" || anoInputRef.value == ""){
                alert("Preencha o formulário por completo!")
        }else{
            tabelaStorage.push({
                montadora: montadoraInputRef.value,
                marca: marcaInputRef.value,
                ano: anoInputRef.value
                });
                
            localStorage.setItem("tabelaCadastro", JSON.stringify(tabelaStorage));

            montadoraInputRef.value = "";
            marcaInputRef.value = "";
            anoInputRef.value = "";
            setPage()
        }; //else end

    });
};

function setPage(){
    tableRef.innerHTML = `
        <tr class="tr-main">
            <th>Montadora</th>
            <th>Montadora</th>
            <th>Ano</th>
            <th>DEL</th>
        </tr>`;
    
    if(tabelaStorage != null){
        tabelaStorage.forEach((index, key)=>{

            tableRef.innerHTML += `
                <tr class="trDinamic"> <!--COLUNA-->
                    <td>${tabelaStorage[key].montadora.toUpperCase()}</td> <!--LINHA-->
                    <td>${tabelaStorage[key].marca.toUpperCase()}</td>
                    <td>${tabelaStorage[key].ano.toUpperCase()}</td>
                    <td class="del">X</td>
                </tr>        
                `    
        });
    };

    //ESSA FUNCTION DE DELETAR LINHA TEM QUE SER CRIADA DENTRO DO SETPAGE
    //NÃO ENTENDI EXATAMENTE O PORQUE TEM QUE FICAR DENTRO DA FUNÇÃO
    

    let delButtons = document.querySelectorAll(".del");
    
        delButtons.forEach((indexDel, keyDel)=>{
            indexDel.addEventListener("click", event =>{
                event.preventDefault();
                if (confirm("Deseja apagar definitivamente?") == true) {    
                    tableRef.innerHTML = "";

                    tabelaStorage.splice(keyDel, 1);

                    localStorage.setItem("tabelaCadastro", JSON.stringify(tabelaStorage));
                    setPage()
                };
            });
        });
};

getForm()
setPage()