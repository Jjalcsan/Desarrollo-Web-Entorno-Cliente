boton = document.getElementById("pintar");
boton.addEventListener('click', pintar);

function pintar(){

    ejex = document.getElementById("x").value;
    ejey = document.getElementById("y").value;
    
    cambio = document.querySelector(`tr:nth-of-type(${ejex}) td:nth-of-type(${ejey})`);
    //alert(ejex);

    cambio.classList.add("rojo");
}