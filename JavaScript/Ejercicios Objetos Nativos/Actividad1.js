var ventana

crear= document.getElementById("crear");
chico= document.getElementById("chico");
grande= document.getElementById("grande");
izq= document.getElementById("izq");
der= document.getElementById("der");


crear.addEventListener("click", nuevo);
chico.addEventListener("click", redimensionmenor);
grande.addEventListener("click", redimensionmayor);
izq.addEventListener("click", moverizquierda);
der.addEventListener("click", moverderecha);


function nuevo (){
   ventana =  window.open("", "", "width= 600, height= 600");
}

function redimensionmenor(){
   ventana.resizeBy(-50, -50);
}

function redimensionmayor(){
    ventana.resizeBy(50, 50);
}

function moverderecha(){
    ventana.moveBy(50,0);
}

function moverizquierda(){
    ventana.moveBy(-50,0);
}

