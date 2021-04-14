const btnImagen = document.getElementById ('btn-imagen');

const solapaImagen= document.getElementById ('solapa-imagen');

const btnTexto = document.getElementById ('btn-texto');

const solapaTexto = document.getElementById ('solapa-texto');

btnImagen.addEventListener('click', () => {
    solapaImagen.style.display = 'block'
    solapaTexto.style.display = 'none';
});

btnTexto.addEventListener('click', () => {
    solapaTexto.style.display = 'block'
    solapaImagen.style.display = 'none'
});

// MODO NOCTURNO

const botonClaro = document.getElementById ('modo-claro');

const botonOscuro = document.getElementById ('modo-oscuro');

function cambiarModoClaro(){
    document.body.classList.remove('cambiar-modo-oscuro');
    document.body.classList.add('cambiar-modo-claro');
};

function cambioModoOscuro(){
    document.body.classList.remove('cambiar-modo-claro');
    document.body.classList.add('cambiar-modo-oscuro');
}

//URL

const urlImagen = document.getElementById 
('url-img-input'); 

const divUrl = document.getElementById ('imagen-meme');

urlImagen.addEventListener('keyup',() =>{
    const url = urlImagen.value;
    divUrl.style.backgroundImage = `url('${url}')`; 
});



