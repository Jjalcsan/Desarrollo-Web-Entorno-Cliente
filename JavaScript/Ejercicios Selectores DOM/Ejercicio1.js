enlaces = document.querySelectorAll("a").length;

var penultimoEnlace = document.querySelectorAll("a")[5];

var enlazandoA = document.querySelectorAll("a[href='http://prueba/']").length;

var enlaces3 = document.querySelectorAll("p:nth-child(3) a").length

document.write("Hay "+ enlaces +" enlaces<br>"); 
document.write("El penultimo enlace enlaza a " +penultimoEnlace+"<br>");
document.write("Hay "+enlazandoA + " enlaces a http://prueba <br>");
document.write("Hay "+enlaces3+ " enlaces en el tercer parrafo");