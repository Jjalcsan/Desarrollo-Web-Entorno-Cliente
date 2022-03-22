adelante = document.getElementById("adelante")
atras = document.getElementById("atras")
Xadelante = document.getElementById("Xadelante")
Xatras = document.getElementById("Xatras")

adelante.addEventListener("click", () => {
    window.history.forward();
});

atras.addEventListener("click", () => {
    window.history.back();
})

Xadelante.addEventListener("click", () => {
    var numero = prompt("¿Cuantas paginas hacia delante quieres moverte?");
    window.history.forward(numero);
})

Xatras.addEventListener("click", () => {
    var numero = prompt("¿Cuantas paginas hacia atras quieres moverte?");
    window.history.back(-(numero));
})