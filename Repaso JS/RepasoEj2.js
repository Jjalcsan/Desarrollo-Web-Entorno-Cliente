var boton = document.getElementById("addboton");
var borrar = document.getElementById("delboton");

boton.addEventListener("click", anade);
boton.addEventListener("click", borra);

var lista = document.getElementById("lista");



function anade() {

    pos = document.getElementById("posicion").value;

    valor = document.getElementById("nuevo").value;

    valor.insertBefore(document.getElementsByTagName("li")[pos-1]);
    
    }

function borra(){

    var posicion = document.getElementById("borrado").value;
    lista.removeChild(document.getElementsByTagName("li")[posicion-1]);
}
    