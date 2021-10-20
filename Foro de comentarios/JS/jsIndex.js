const peticion = new XMLHttpRequest();

peticion.overrideMimeType("application/json");

peticion.open('GET', 'http://localhost:3000/posts', true);

peticion.onload = function(){
    
    const jsonResponse = JSON.parse(peticion.responseText);
    console.log(jsonResponse);
    
    document.write('<div id="div-de-todo"><div id="div-de-la-cabecera"><div id="div-de-usuarios">usuarios</div><div id="div-de-posts">posts</div></div>');
    
    document.write('<div id="div-de-los-posts"><div id="div-de-las-columnas"><table><tr><th width=200px class="autor">Autor</th><th width=400px class="titulo">Titulo</th><th width=50px class="ver">Ver el comentario</th><th width=1px class="borrar">Borrar el comentario</th></tr></table></div>')
    
    for (let step = 0; step < jsonResponse.length; step++){
        document.write('<div class="div-de-un-post" id="'+step+'div"><table class="tabla-de-un-post"><tr><th width=200px class="autor">'+jsonResponse[step]["author"]+'</th><th width=400px class="titulo">'+jsonResponse[step]["title"]+'</th><th width=60px class="ver"><button><a href="" id="'+step+'v"><img src="images/14777.png" height="50%" width="50%"></a></button></th><th width=60px class="borrar"><button id="'+step+'b"><img src="images/trash.png" height="50%" width="50%"></button></th></tr></table></div>')
    }
    
    document.write('<div><button><a href="nuevoPost.html">Añadir comentario</a></button></div></div></div>')
}
peticion.send(null);


borrarDiv = function(){

}