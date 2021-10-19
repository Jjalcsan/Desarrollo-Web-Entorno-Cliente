distanciaizquierda = document.getElementById("distanciaizquierda");
distanciaarriba = document.getElementById("distanciaarriba");
orientacion = document.getElementById("orientacion");
anchura = document.getElementById("anchura");
altura = document.getElementById("altura");

distanciaizquierda.addEventListener("click", () => {
    alert(screenLeft);
})

distanciaarriba.addEventListener("click", () => {
    alert(screenTop);
})

orientacion.addEventListener("click", () => {
    alert(screen.orientation);
})

anchura.addEventListener("click", () => {
    alert(screen.width);
})

altura.addEventListener("click", () => {
    alert(screen.height);
})