divTitulo = document.getElementById("div-titulo");
divAutor = document.getElementById("div-autor");
divContenidoPost = document.getElementById("div-contenido-post");
formulario = document.getElementById("formulario");
autores = document.getElementById("autores");
comentario = document.getElementById("comentario");
divRespuestas = document.getElementById("div-respuestas");

cual = window.location.search

fetch('http://localhost:3000/posts'+cual, {
    method: 'GET',
    headers:{'Content-Type': 'application/json'}
}).then(response => {
    if(response.ok){
        console.log(response)
    }
    return Promise.reject(response)
})
.catch(err => {
    console.log('Error en la peticion: '+err.message);
})

/*const peticion = new XMLHttpRequest();

peticion.overrideMimeType("application/json");

peticion.open('GET', 'http://localhost:3000/posts'+cual, true);

peticion.onload = function(){
    
    const jsonResponse = JSON.parse(peticion.responseText);
    divTitulo.innerHTML = jsonResponse[0]["title"];
    divAutor.innerHTML = jsonResponse[0]["author"];
    divContenidoPost.innerHTML = jsonResponse[0]["content"];
}

peticion.send(null);*/


const peticion2 = new XMLHttpRequest();
peticion2.overrideMimeType("application/json");
peticion2.open('GET', 'http://localhost:3000/usuarios', true);

peticion2.onload = function(){   
    const jsonResponse = JSON.parse(peticion2.responseText);
    for (let step = 0; step < jsonResponse.length; step++) {
    autores.innerHTML += "<option value='"+jsonResponse[step]["nombre"]+"'>"+jsonResponse[step]["nombre"]+"</option>"
    }
}

peticion2.send(null);


formulario.addEventListener("submit", (e) => {

    const datosComentarios = {
        idpost: cual.substring(4,5),
        author: document.getElementById("autores").value,
        content: document.getElementById("comentario").value};

        fetch('http://localhost:3000/comments', {
            method: 'POST',
            body: JSON.stringify(datosComentarios),
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
})

const peticion4 = new XMLHttpRequest();

peticion4.overrideMimeType("application/json");

peticion4.open('GET', 'http://localhost:3000/comments', true);

peticion4.onload = function(){
    
    const jsonResponse = JSON.parse(peticion4.responseText);
    for (let step = 0; step < jsonResponse.length; step++) {

    	if (jsonResponse[step]["idpost"]==cual.substring(4,5)){
            
    		divRespuestas.innerHTML += `<div><p>${jsonResponse[step]["author"]}</p><p>${jsonResponse[step]["content"]}</p></div>`
    	}
    }
}

peticion4.send(null);

