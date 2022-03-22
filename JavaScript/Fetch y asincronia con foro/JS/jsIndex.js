div = document.getElementById("div-de-los-datos");

    /*var newt = document.createElement("div");
    var t = document.createTextNode("Nuevo contenedor");       
    newt.appendChild(t);                                         
    div.appendChild(newt);*/

const peticion = new XMLHttpRequest();

peticion.overrideMimeType("application/json");

peticion.open('GET', 'http://localhost:3000/posts', true);

peticion.onload = function(){
    
    const jsonResponse = JSON.parse(peticion.responseText);
    console.log(jsonResponse);
    
    for (let step = 0; step < jsonResponse.length; step++){
        div.innerHTML += `<div class="div-de-un-post" id="${step}">
<table class="tabla-de-un-post" border="1px" bordercolor="black" style="background-color: ghostwhite;">
    <tr>
        <td class="autor" style="width:20%;" >${jsonResponse[step]["author"]}</td>
    <td class="titulo" style="width:60%;">${jsonResponse[step]["title"]}</td>
    <td class="ver" style="width:10%;"><button style="background-color: ghostwhite;"><a href="comentario.html?id=${step+1}" id="${step}"><img src="images/14777.png" height="50%" width="50%"></a></button></td>
    <td class="borrar" style="width:10%;"><button id="${step}" style="background-color: ghostwhite;" class="borrado"><img src="images/trash.png" height="50%" width="50%"></button></td>
    </tr>
    </table>
</div>`
    }
}
peticion.send(null);



