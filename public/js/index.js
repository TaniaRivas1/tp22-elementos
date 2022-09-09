console.log('index.js success');

const qs = (element) => document.querySelector(element)
const qsa = (element) => document.querySelectorAll(element)
const main = qs('.container')
const subtitulo = qs('h2.subtitulo')
const parrafos = qsa('p')
const link= qs('a')

let nombre = prompt('Decime tu nombre')
if (nombre) {
    subtitulo.innerHTML += nombre
}else{
    subtitulo.innerHTML += "Invitado"
}

subtitulo.style.transform = "uppercase";
link.style.color = '#E51B3E'
let respuesta = confirm('¿Desea agregar un fondo de pantalla?')
if (respuesta) {
    qs('body').classList.add('fondo')
    for (let i = 0; i < parrafos.length; i++) {
        if (i % 2 === 0) {
            parrafos[i].classList.add('destacadoPar')
        }else{
            parrafos[i].classList.add('destacadoImpar')
        }
    }
}
main.style.display = 'block'