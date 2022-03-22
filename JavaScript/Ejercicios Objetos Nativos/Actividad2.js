
modificacion = document.getElementById("modificacion");
acceso = document.getElementById("acceso");
recuentos = document.getElementById("recuentos");

modificacion.addEventListener("click", modificado);
acceso.addEventListener("click", ultimaPag);
recuentos.addEventListener("click", recuento);


function modificado (){
    alert(document.lastModified);
}

function ultimaPag (){
    alert(document.referrer);
}

function recuento(){
    alert("El documento tiene "+ document.forms.length+ " formularios, "+document.links.length + " links externos, "+ document.images.length+" imagenes y "+document.anchors.length+ " anclas.");
}


