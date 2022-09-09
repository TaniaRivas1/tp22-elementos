console.log('movieList.js success');

const body = document.querySelector('body');
const titulo = document.querySelector('.moviesListTitulo');

let respuesta = confirm('¿Desea cambiar a modo oscuro?')
if (respuesta) {
    body.style.backgroundColor = "#7f7f7f";
    body.classList.add('fondoMoviesList')
}
titulo.innerHTML ='Listado de Peliculas';
titulo.style.color = "white";
titulo.style.backgroundColor= "teal";
titulo.style.pading= "20px";
