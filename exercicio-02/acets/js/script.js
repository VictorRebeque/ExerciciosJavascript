const iniciar = document.querySelector("#iniciar");
const pausar = document.getElementById("pausar");
const zerar = document.getElementById("zerar");
const cronometro = document.getElementById("cronometro");

let segundos = 0;
let minuto = 0;
let hora = 0;
let timer;

function identador (a) {
    if (a < 10) {
        return `0${a}`
    } else {
        return a
    }
}

function data() {
   if (segundos == 59) {
        segundos = 0;
        minuto++
        if (minuto == 59) {
            minuto = 0;
            hora++
        }
   }
   cronometro.innerText = (`${identador(hora)}:${identador(minuto)}:${identador(segundos)}`)
   segundos++;
}
function fIniciar() {
    iniciar.disabled = true
    timer = setInterval(data, 1000)
    cronometro.style.color = "black"
}

function fPausar() {
    iniciar.disabled = false
    clearInterval(timer)
    cronometro.style.color = "red"
}

function fZerar () {
    iniciar.disabled = false
    clearInterval(timer, 0)
    cronometro.style.color = "black"
    segundos = 0
    minuto = 0
    hora = 0
    cronometro.innerText = `0${hora}:0${minuto}:0${segundos}`
}