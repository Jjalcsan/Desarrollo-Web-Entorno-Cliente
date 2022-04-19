pending = document.getElementById("pending");
ongoing = document.getElementById("ongoing");
finished = document.getElementById("finished");

document.getElementById("create").addEventListener("click", crearTarea);

let pet = new XMLHttpRequest();

pet.overrideMimeType("application/json");

pet.open('GET', 'http://localhost:3000/tasks', true);

pet.onload = function(){
    
    let jsonResponse = JSON.parse(pet.responseText);
    console.log(jsonResponse);

    for (let step = 0; step < jsonResponse.length; step++){
        pending.innerHTML += `<div draggable="true" id='${step}'><div>${jsonResponse[step]["title"]}</div><div>${jsonResponse[step]["content"]}</div></div>`
    }
}
pet.send(null);

function crearTarea(e) {

    e.preventDefault();

    valueTitle = document.getElementById("title").value
    valueDescrip = document.getElementById("descrip").value
    contador = 0

    if (valueTitle!="") {

        const newTask = {
            title : document.getElementById("title").value,
            content : document.getElementById("descrip").value,
            user : "",
            pos : "1"
        }

        pet = new XMLHttpRequest();
        pet.open("POST", "http://localhost:3000/tasks");
        pet.setRequestHeader('Content-type', 'application/json');
        pet.send(JSON.stringify(newTask));

        contador++;
        pending.innerHTML += `<div draggable="true" id='${contador}'><div>${valueTitle}</div><div>${valueDescrip}</div></div>`

    } else {

        alert("La tarea debe tener un titulo, la descripcion es opcional");

    }

}

pending.addEventListener('dragstart', (e) => {
    
    e.dataTransfer.setData('text/plain', e.target.id);
    
})

ongoing.addEventListener('dragstart', (e) => {
console.log(e.target)
if (e.target && e.target.matches('div[draggable]')) {
    e.dataTransfer.setData('text/plain', e.target.id);
}
})

finished.addEventListener('dragstart', (e) => {
if (e.currentTarget && e.currentTarget.matches('div[draggable]')) {
    e.dataTransfer.setData('text/plain', e.target.id);
}
})

pending.addEventListener('dragover', (e) => {
e.preventDefault()
})

ongoing.addEventListener('dragover', (e) => {
e.preventDefault()
})


finished.addEventListener('dragover', (e) => {
e.preventDefault()
})

pending.addEventListener('drop', (e) => {
    e.preventDefault();

    const element = document.getElementById(e.dataTransfer.getData('text'));

    aBorrar = element.parentNode

    aBorrar.removeChild(element);

    pending.appendChild(element)

})

ongoing.addEventListener('drop', (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData('text/plain')
    const element = document.getElementById(e.dataTransfer.getData('text/plain'));

    aBorrar = element.parentNode

    aBorrar.removeChild(element);

    ongoing.appendChild(element)

})

finished.addEventListener('drop', (e) => {
    e.preventDefault();

    const element = document.getElementById(e.dataTransfer.getData('text'));

    aBorrar = element.parentNode

    aBorrar.removeChild(element);

    finished.appendChild(element)


})