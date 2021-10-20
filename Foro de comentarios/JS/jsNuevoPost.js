const peticion = new XMLHttpRequest();

peticion.overrideMimeType("application/json");

peticion.open('GET', 'http://localhost:3000/usuarios', true);

peticion.onload = function(){
    
    const jsonResponse = JSON.parse(peticion.responseText);
    console.log(jsonResponse)
}

autores = document.getElementById("autores");

for (let step = 0; step < jsonResponse.length; step++) {
    opcion = document.createElement("option");
    texto = document.createTextNode(jsonResponse[step])
    
}


peticion.send(null);