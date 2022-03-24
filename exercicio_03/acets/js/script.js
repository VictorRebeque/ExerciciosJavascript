const input = document.getElementById("input");
const adicionar = document.getElementById("adicionar");
const lista = document.getElementById("lista");

function fapagar () {
    console.log("entrando em fapagar()")
    const apagando = this.parentNode;
    apagando.parentNode.removeChild(apagando)
}

function fadicionar () {
    const container = document.querySelector('.container');
    container.onsubmit = function(evento) {
        evento.preventDefault()
    }

    console.log("entrou em fAdicionar()")

    const p = document.createElement("p");
    p.className = "item";
    p.innerText = input.value;
    lista.appendChild(p)
    input.value = ""

    const button = document.createElement("button");
    button.className = "buttonApagar";
    button.innerText = "apagar";
    button.onclick = fapagar
    p.appendChild(button)
}



adicionar.addEventListener("click",fadicionar)
