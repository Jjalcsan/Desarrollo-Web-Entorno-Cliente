enviar = document.getElementById("enviar");
nombre = document.getElementById("nombre");
titulo = document.getElementById("titulo");
contenido = document.getElementById("contenido");
autores = document.getElementById("autores");
formulario = document.getElementById("formulario");


const peticion = new XMLHttpRequest();
peticion.overrideMimeType("application/json");
peticion.open('GET', 'http://localhost:3000/usuarios', true);

peticion.onload = function(){   
    const jsonResponse = JSON.parse(peticion.responseText);
    console.log(jsonResponse)
    for (let step = 0; step < jsonResponse.length; step++) {
    autores.innerHTML += "<option value='"+jsonResponse[step]["nombre"]+"'>"+jsonResponse[step]["nombre"]+"</option>"
    }
}

peticion.send(null);

formulario.addEventListener("submit", (e) => {

    const datosPost = {
        author: document.getElementById("autores").value,
        title: document.getElementById("titulo").value,
        content: document.getElementById("contenido").value};
  
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(datosPost),
        headers:{'Content-Type': 'application/json'}
    }).then(response => {
        if(response.ok){
            return response.json();
        }
        return Promise.reject(response)
    })
    .catch(err => {
        console.log('Error en la peticion: '+err.message);
    })

    /*const peticion = new XMLHttpRequest();
    const datosPost = {
        author: document.getElementById("autores").value,
        title: document.getElementById("titulo").value,
        content: document.getElementById("contenido").value};

    peticion.open('POST', 'http://localhost:3000/posts');
    
    peticion.setRequestHeader('Content-type', 'application/json');
    
    peticion.send(JSON.stringify(datosPost));*/
})