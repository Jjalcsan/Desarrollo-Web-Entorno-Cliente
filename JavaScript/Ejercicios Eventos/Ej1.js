div = document.getElementById("box");
input = document.getElementById("input")

div.addEventListener('mouseenter', () => {
    div.classList.remove("box");
    div.classList.add("verde");
});

div.addEventListener('mouseleave', () => {
    div.classList.remove("verde");
    div.classList.add("box");
});

div.addEventListener('mousedown', () => {
    console.log("Has pulsado la caja");
});

div.addEventListener('mouseup', () => {
    console.log("Has soldado el boton izquierdo dentro de la caja")
});

input.addEventListener('keydown', (event)=> {
    console.log(event.key);
});

window.addEventListener('keyup', () => {
    console.log("Has soltado una tecla");
});


