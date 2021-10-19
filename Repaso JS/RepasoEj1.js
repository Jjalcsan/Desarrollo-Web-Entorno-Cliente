boton = document.getElementById('wo');
boton.addEventListener('click',clicar);



function clicar(){
    
    pos = document.getElementById('pos').value;
    equipo = document.getElementById('eq').value;
    puntos = document.getElementById('point').value;

    fila = document.createElement('tr');

    posicionFinal = document.createTextNode(pos);
    primtd = document.createElement('td');
    primtd.appendChild('posicionFinal');

    equipoFinal = document.createTextNode(equipo);
    sectd = document.createElement('td');
    sectd.appendChild('equipoFinal');

    puntosFinal = document.createTextNode(puntos);
    tertd = document.createElement('td');
    tertd.appendChild('puntosFinal');

    fila.appendChild(posicionFinal);
    fila.appendChild(equipoFinal);
    fila.appendChild(puntosFinal);

    tabla.replaceChild(filainsertar, tabla.columnas[pos]);
}


