let cadastro = []

function enviar () {
    let nome = (document.getElementById("nome")).value
    let sobrenome = (document.getElementById("sobrenome")).value
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
       cadastro.push(
            bancoDados = {
                name: nome,
                surname: sobrenome,
                weight: peso,
                height: altura
        })
    document.getElementById("texto").innerText += (`${bancoDados.name} ${bancoDados.surname}, ${bancoDados.weight}, ${bancoDados.height} \n`)
}
