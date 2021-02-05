const pestanaImagen = document.getElementById ('pestaña-imagen');

const pestanitaImagen = document.getElementById ('pestañita-imagen');

const pestanaTexto = document.getElementById ('pestaña-texto');

const pestanitaTexto = document.getElementById ('pestañita-texto');

pestanaImagen.addEventListener('click', () => {
    pestanitaImagen.style.display = 'block'
    pestanitaTexto.style.display = 'none'
});

pestanaTexto.addEventListener('click', () => {
    pestanitaTexto.style.display = 'block'
    pestanitaImagen.style.display = 'none'
});

// MODO NOCTURNO

/* const modoNocturno = document.getElementById('modo-nocturno');

modoNocturno.addEventListener('click') */

