
boton = document.getElementById("boton");

boton.addEventListener("click", mostrar)



function mostrar() {

}

const cronometro = new Date();
document.getElementById("cronometro").innerHTML="Hoy es "+ cronometro.getDate()+"-"+cronometro.getMonth()+"-"+cronometro.getFullYear()+" y son las "+cronometro.getHours()+":"+cronometro.getMinutes()+":"+cronometro.getSeconds();