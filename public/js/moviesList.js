window.onload = function(){
    const qs = (tag) => document.querySelector(tag);

    const body = qs('body');
    const moviesListTitulo = qs('.moviesListTitulo');
    const logo = qs('figure');
    const a = qs('.botonAgregar');

    logo.addEventListener('click', () => {
        body.classList.toggle('fondoMoviesList')
    })

    a.addEventListener('mouseover', () => {
        a.style.backgroundColor = 'darkgreen'
    })

    a.addEventListener('mouseout', () => {
        a.style.backgroundColor = 'green'
    })

    
    /* let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    } */

    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}