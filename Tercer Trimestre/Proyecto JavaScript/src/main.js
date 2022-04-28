pending = document.getElementById("pending");
ongoing = document.getElementById("ongoing");
finished = document.getElementById("finished");

document.getElementById("create").addEventListener("click", crearTarea);

let pet = new XMLHttpRequest();

pet.overrideMimeType("application/json");

pet.open('GET', 'http://localhost:3000/tasks', true);

pet.onload = function(){
    
    let jsonResponse = JSON.parse(pet.responseText);

    for (let step = 0; step < jsonResponse.length; step++){
        if (jsonResponse[step]["pos"]==1){
            pending.innerHTML += `<div draggable="true" class="border border-black" id='${step}'><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${jsonResponse[step]["title"]}</p></div><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${jsonResponse[step]["content"]}</p></div></div>`
        }
        if (jsonResponse[step]["pos"]==2){
            ongoing.innerHTML += `<div draggable="true" class="border border-black" id='${step}'><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${jsonResponse[step]["title"]}</p></div><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${jsonResponse[step]["content"]}</p></div></div>`
        }
        if (jsonResponse[step]["pos"]==3){
            finished.innerHTML += `<div draggable="true" class="border border-black" id='${step}'><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${jsonResponse[step]["title"]}</p></div><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${jsonResponse[step]["content"]}</p></div></div>`
        }
    }
}
pet.send(null);

function crearTarea(e) {

    e.preventDefault();

    valueTitle = document.getElementById("input1").value
    valueDescrip = document.getElementById("input2").value
    contador = 20

    if (valueTitle!="") {

        contador++;

        const newTask = {
            title : document.getElementById("input1").value,
            content : document.getElementById("input2").value,
            user : "",
            pos : "1",
            id : contador
        }

        pet = new XMLHttpRequest();
        pet.open("POST", "http://localhost:3000/tasks");
        pet.setRequestHeader('Content-type', 'application/json');
        pet.send(JSON.stringify(newTask));

       
        pending.innerHTML += `<div draggable="true" class="border border-black" id='${contador}'><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${valueTitle}</p></div><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${valueDescrip}</p></div></div>`

    } else {

        alert("La tarea debe tener un titulo, la descripcion es opcional");

    }

}

pending.addEventListener('dragstart', (e) => {
    
    e.dataTransfer.setData('text/plain', e.target.id);
    
})

ongoing.addEventListener('dragstart', (e) => {
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

    let url = `http://localhost:3000/tasks?id=${e.target.id}`;

    let data = {};
    data.pos = 2;
    let json = JSON.stringify(data);

    let xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(json);

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
    let data = e.dataTransfer.getData('text/plain')
    const element = document.getElementById(e.dataTransfer.getData('text'));

    aBorrar = element.parentNode

    aBorrar.removeChild(element);

    finished.appendChild(element)


})

document.getElementById("rojo").addEventListener('click', () => {
    if(document.getElementById("body").classList.contains("bg-black")){

        

    }
    if(document.getElementById("body").classList.contains("bg-white")){

        document.getElementById("body").classList.replace("bg-white","bg-red-100");
        document.getElementById("label1").classList.replace("text-gray-700", "text-red-700")
        document.getElementById("label2").classList.replace("text-gray-700", "text-red-700")
        document.getElementById("input1").classList.replace("bg-gray-200", "bg-red-200")
        document.getElementById("input1").classList.replace("text-gray-700","text-red-700")
        document.getElementById("input1").classList.replace("border-gray-500","border-red-500")
        document.getElementById("input1").classList.replace("bg-white","bg-red-100")
        document.getElementById("input2").classList.replace("bg-gray-200", "bg-red-200")
        document.getElementById("input2").classList.replace("text-gray-700","text-red-700")
        document.getElementById("input2").classList.replace("border-gray-500","border-red-500")
        document.getElementById("input2").classList.replace("bg-white","bg-red-100")
        document.getElementById("create").classList.replace("hover:bg-black","hover:bg-red-700")
        document.getElementById("create").classList.replace("text-black-700","text-red-700")
        document.getElementById("create").classList.replace("border-black","border-red-700")
        document.getElementById("pending").classList.replace("border-black","border-red-700")
        document.getElementById("h2pending").classList.replace("text-gray-700", "text-red-700")
        document.getElementById("ongoing").classList.replace("border-black","border-red-700")
        document.getElementById("h2ongoing").classList.replace("text-gray-700", "text-red-700")
        document.getElementById("finished").classList.replace("border-black","border-red-700")
        document.getElementById("h2finished").classList.replace("text-gray-700", "text-red-700")

    }
    if(document.getElementById("body").classList.contains("bg-blue-300")){
        
    }
})

document.getElementById("negro").addEventListener('click', () => {

    if(document.getElementById("body").classList.contains("bg-white")){
        document.getElementById("body").classList.replace("bg-white","bg-stone-900");
        document.getElementById("label1").classList.replace("text-gray-700", "text-white-700")
        document.getElementById("label2").classList.replace("text-gray-700", "text-white-700")
        document.getElementById("input1").classList.replace("bg-gray-200", "bg-red-200")
        document.getElementById("input1").classList.replace("text-gray-700","text-red-700")
        document.getElementById("input1").classList.replace("border-gray-500","border-red-500")
        document.getElementById("input1").classList.replace("bg-white","bg-stone-900")
        document.getElementById("input2").classList.replace("bg-gray-200", "bg-red-200")
        document.getElementById("input2").classList.replace("text-gray-700","text-red-700")
        document.getElementById("input2").classList.replace("border-gray-500","border-red-500")
        document.getElementById("input2").classList.replace("bg-white","bg-stone-900")
        document.getElementById("create").classList.replace("hover:bg-black","hover:bg-red-700")
        document.getElementById("create").classList.replace("text-black-700","text-red-700")
        document.getElementById("create").classList.replace("border-black","border-red-700")
        document.getElementById("pending").classList.replace("border-black","border-red-700")
        document.getElementById("h2pending").classList.replace("text-gray-700", "text-red-700")
        document.getElementById("ongoing").classList.replace("border-black","border-red-700")
        document.getElementById("h2ongoing").classList.replace("text-gray-700", "text-red-700")
        document.getElementById("finished").classList.replace("border-black","border-red-700")
        document.getElementById("h2finished").classList.replace("text-gray-700", "text-red-700")
    }

})