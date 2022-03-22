var boton = document.getElementById("enlace");

boton.addEventListener("click", pinchar);

function pinchar (){

    var texto = document.querySelector(".oculto");
    var borro = document.getElementById("enlace");

    texto.classList.replace("oculto","visible");
    borro.classList.add("oculto");

}
