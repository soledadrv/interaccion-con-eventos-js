window.onload = function(){
    const qs = (tag) => document.querySelector(tag);

    const titulo = qs('.moviesAddTitulo')
    const formulario = qs('#formulario');
    const article = qs('article');
    const input = qs('#titulo');

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let estadoSecreto = 0;

    const key = (key) => {

        switch(true) {

            case estadoSecreto === 0 && key.toLowerCase() === 's':
                estadoSecreto++
                break;     

            case estadoSecreto === 1 && key.toLowerCase() === 'e':
                estadoSecreto++
                break;

            case estadoSecreto === 2 && key.toLowerCase() === 'c':
                estadoSecreto++
                break;

            case estadoSecreto === 3 && key.toLowerCase() === 'r':
                estadoSecreto++
                break;

            case estadoSecreto === 4 && key.toLowerCase() === 'e':
                estadoSecreto++
                break;

            case estadoSecreto === 5 && key.toLowerCase() === 't':
                estadoSecreto++
                break;

            case estadoSecreto === 6 && key.toLowerCase() === 'o':
                alert('SECRETO MÁGICO')
                estadoSecreto = 0
                break;

            default:
                estadoSecreto = 0
                break;
        }

    }

    input.addEventListener('keypress', (event) => {
        key(event.key);
    })

}