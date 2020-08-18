/*
Case sensitive = reconhece letras miusculas e minusculas
por Tag: getElementeByTagName()
por Id: getElementById() 
por Nome: getElementByName()
por Classe:getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() 
{
    let txt = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txt.innerHTML = "Nome Invalido"
        txt.style.color = "red"
    }else{
        txt.innerHTML = "Nome valido"
        txt.style.color = "green"
    
    }
}
function validaEmail()
{
        let txtEmail = document.querySelector("#txtEmail")
        if(email.value.indexOf('@') == -1){
            txtEmail.innerHTML = "E-mail invalido"
            txtEmail.style.color = "red"
        }else
        {
            txtEmail.innerHTML = "E-mail valido"
            txtEmail.style.color = "green"
        }
}            
            
