pending = document.getElementById("pending");
ongoing = document.getElementById("ongoing");
finished = document.getElementById("finished");

document.getElementById("create").addEventListener("click", crearTarea);

window.onload = function() {

    let peticion = new XMLHttpRequest();
    peticion.open('GET', 'http://localhost:3000/tasks');
    peticion.send();
    peticion.addEventListener('readystatechange', function() {
        if (peticion.readyState === 4) {
            if (peticion.status === 200) {

                //Creamos la variable tareas que almacene la respuesta del Json
                let tareas = JSON.parse(peticion.responseText);

                //Con este metodo igualamos el contador a la ultima id del array de tareas para que al crear una nueva continue por donde estaba
                const getLastId = (tareas) => { 
                    let lastItem=tareas[tareas.length-1].id
                    return lastItem 
                }  
                contador = getLastId(tareas);

                //Con este bucle se cargaran todas las tareas que tengas como usuario el usuario en seion, almacenandolas en sus respectivas cajas 
                for (let step = 0; step < tareas.length; step++){
                    if (tareas[step]["user"]==localStorage.getItem("usuario")){

                        if (tareas[step]["pos"]==1){
                            pending.innerHTML += `<div draggable="true" class="border border-black" id='${step}'><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${tareas[step]["title"]}</p></div><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${tareas[step]["content"]}</p></div></div>`
                        }
                        if (tareas[step]["pos"]==2){
                            ongoing.innerHTML += `<div draggable="true" class="border border-black" id='${step}'><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${tareas[step]["title"]}</p></div><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${tareas[step]["content"]}</p></div></div>`
                        }
                        if (tareas[step]["pos"]==3){
                            finished.innerHTML += `<div draggable="true" class="border border-black" id='${step}'><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${tareas[step]["title"]}</p></div><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${tareas[step]["content"]}</p></div></div>`
                        }
                        
                    }

                }

            } else {
                console.log("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
            }
        }
    })

}




function crearTarea(e) {

    e.preventDefault();

    valueTitle = document.getElementById("input1").value
    valueDescrip = document.getElementById("input2").value

    if (valueTitle!="") {

        contador++;

        const newTask = {
            title : document.getElementById("input1").value,
            content : document.getElementById("input2").value,
            user : localStorage.getItem("usuario"),
            pos : "1",
            id : contador
        }

        pet = new XMLHttpRequest();
        pet.open("POST", "http://localhost:3000/tasks");
        pet.setRequestHeader('Content-type', 'application/json');
        pet.send(JSON.stringify(newTask));

       
        pending.innerHTML += `<div draggable="true" class="border border-black" id='${contador}'><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${valueTitle}</p></div><div><p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">${valueDescrip}</p></div></div>`

    } else {

        Swal.fire({
            title: 'La tarea debe tener un titulo',
            text: 'La descripción es opcional',
            icon: 'error',
            confirmButtonText: 'Ok'
          })

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
    let data = e.dataTransfer.getData('text/plain')
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

    ongoing.appendChild(element);

    let peticion = new XMLHttpRequest();
    peticion.open('GET', `http://localhost:3000/tasks/${data}`);
    peticion.send();
    peticion.addEventListener('readystatechange', function() {
        if (peticion.readyState === 4) {
            if (peticion.status === 200) {
                let tarea = JSON.parse(peticion.responseText);
                const newTask = {
                    title : tarea.title,
                    content : tarea.content,
                    user : tarea.user,
                    pos : "2",
                    id : tarea.id
                }
                let peticion2 = new XMLHttpRequest();
                peticion2.open('PUT', `http://localhost:3000/tasks/${data}`);
                peticion2.setRequestHeader('Content-type', 'application/json');
                peticion2.send(JSON.stringify(newTask));
            }
        }
    })

    // let peticion2 = new XMLHttpRequest();
    // peticion.open('PUT', `http://localhost:3000/tasks?id=${data}`);
    // peticion.send(JSON.stringify({pos : "2"}));



    

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
    if(document.getElementById("body").classList.contains("bg-stone-900")){

        document.getElementById("body").classList.replace("bg-stone-900","bg-red-100");
        document.getElementById("label1").classList.replace("text-white","text-red-700")
        document.getElementById("label2").classList.replace("text-white","text-red-700")
        document.getElementById("input1").classList.replace("bg-white","bg-red-200")
        document.getElementById("input1").classList.replace("text-white","text-red-700")
        document.getElementById("input1").classList.replace("border-white","border-red-500")
        document.getElementById("input1").classList.replace("bg-stone-900","bg-red-200")
        document.getElementById("input2").classList.replace("bg-stone-200","bg-red-200")
        document.getElementById("input2").classList.replace("text-white","text-red-700")
        document.getElementById("input2").classList.replace("border-white","border-red-500")
        document.getElementById("input2").classList.replace("bg-stone-900","bg-red-200")
        document.getElementById("create").classList.replace("hover:bg-white","hover:bg-red-700")
        document.getElementById("create").classList.replace("text-white","text-red-700")
        document.getElementById("create").classList.replace("border-white","border-red-500")
        document.getElementById("create").classList.replace("hover:text-black","hover:text-white")
        document.getElementById("pending").classList.replace("border-white","border-red-500")
        document.getElementById("h2pending").classList.replace("text-white","text-red-700")
        document.getElementById("ongoing").classList.replace("border-white","border-red-500")
        document.getElementById("h2ongoing").classList.replace("text-white","text-red-700")
        document.getElementById("finished").classList.replace("border-white","border-red-500")
        document.getElementById("h2finished").classList.replace("text-white","text-red-700")
        localStorage.setItem(localStorage.getItem("usuario"), "rojo")
        

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
        localStorage.setItem(localStorage.getItem("usuario"), "rojo")

    }
    if(document.getElementById("body").classList.contains("bg-blue-300")){
        document.getElementById("body").classList.replace("bg-blue-300","bg-red-100");
        document.getElementById("label1").classList.replace("text-gray-700", "text-red-700")
        document.getElementById("label2").classList.replace("text-gray-700", "text-red-700")
        document.getElementById("input1").classList.replace("bg-gray-200", "bg-red-200")
        document.getElementById("input1").classList.replace("text-gray-700","text-red-700")
        document.getElementById("input1").classList.replace("border-gray-500","border-red-500")
        document.getElementById("input1").classList.replace("bg-blue-300","bg-red-100")
        document.getElementById("input2").classList.replace("bg-gray-200", "bg-red-200")
        document.getElementById("input2").classList.replace("text-gray-700","text-red-700")
        document.getElementById("input2").classList.replace("border-gray-500","border-red-500")
        document.getElementById("input2").classList.replace("bg-blue-300","bg-red-100")
        document.getElementById("create").classList.replace("hover:bg-blue-800","hover:bg-red-700")
        document.getElementById("create").classList.replace("text-black-700","text-red-700")
        document.getElementById("create").classList.replace("border-black","border-red-700")
        document.getElementById("pending").classList.replace("border-black","border-red-700")
        document.getElementById("h2pending").classList.replace("text-gray-700", "text-red-700")
        document.getElementById("ongoing").classList.replace("border-black","border-red-700")
        document.getElementById("h2ongoing").classList.replace("text-gray-700", "text-red-700")
        document.getElementById("finished").classList.replace("border-black","border-red-700")
        document.getElementById("h2finished").classList.replace("text-gray-700", "text-red-700")
        localStorage.setItem(localStorage.getItem("usuario"), "rojo")
    }
})

document.getElementById("negro").addEventListener('click', () => {

    if(document.getElementById("body").classList.contains("bg-white")){
        document.getElementById("body").classList.replace("bg-white","bg-stone-900");
        document.getElementById("label1").classList.replace("text-gray-700", "text-white")
        document.getElementById("label2").classList.replace("text-gray-700", "text-white")
        document.getElementById("input1").classList.replace("bg-gray-200", "bg-white")
        document.getElementById("input1").classList.replace("text-gray-700","text-white")
        document.getElementById("input1").classList.replace("border-gray-500","border-white")
        document.getElementById("input1").classList.replace("bg-white","bg-stone-900")
        document.getElementById("input2").classList.replace("bg-gray-200", "bg-stone-200")
        document.getElementById("input2").classList.replace("text-gray-700","text-white")
        document.getElementById("input2").classList.replace("border-gray-500","border-white")
        document.getElementById("input2").classList.replace("bg-white","bg-stone-900")
        document.getElementById("create").classList.replace("hover:bg-black","hover:bg-white")
        document.getElementById("create").classList.replace("text-black-700","text-white")
        document.getElementById("create").classList.replace("border-black","border-white")
        document.getElementById("create").classList.replace("hover:text-white","hover:text-black")
        document.getElementById("pending").classList.replace("border-black","border-white")
        document.getElementById("h2pending").classList.replace("text-gray-700", "text-white")
        document.getElementById("ongoing").classList.replace("border-black","border-white")
        document.getElementById("h2ongoing").classList.replace("text-gray-700", "text-white")
        document.getElementById("finished").classList.replace("border-black","border-white")
        document.getElementById("h2finished").classList.replace("text-gray-700", "text-white")
        localStorage.setItem(localStorage.getItem("usuario"), "negro")
    }
    if(document.getElementById("body").classList.contains("bg-blue-300")){
        document.getElementById("body").classList.replace("bg-blue-300","bg-stone-900");
        document.getElementById("label1").classList.replace("text-gray-700", "text-white")
        document.getElementById("label2").classList.replace("text-gray-700", "text-white")
        document.getElementById("input1").classList.replace("bg-gray-200", "bg-white")
        document.getElementById("input1").classList.replace("text-gray-700","text-white")
        document.getElementById("input1").classList.replace("border-gray-500","border-white")
        document.getElementById("input1").classList.replace("bg-blue-300","bg-stone-900")
        document.getElementById("input2").classList.replace("bg-gray-200", "bg-stone-200")
        document.getElementById("input2").classList.replace("text-gray-700","text-white")
        document.getElementById("input2").classList.replace("border-gray-500","border-white")
        document.getElementById("input2").classList.replace("bg-blue-300","bg-stone-900")
        document.getElementById("create").classList.replace("hover:bg-blue-800","hover:bg-white")
        document.getElementById("create").classList.replace("text-black-700","text-white")
        document.getElementById("create").classList.replace("border-black","border-white")
        document.getElementById("create").classList.replace("hover:text-white","hover:text-black")
        document.getElementById("pending").classList.replace("border-black","border-white")
        document.getElementById("h2pending").classList.replace("text-gray-700", "text-white")
        document.getElementById("ongoing").classList.replace("border-black","border-white")
        document.getElementById("h2ongoing").classList.replace("text-gray-700", "text-white")
        document.getElementById("finished").classList.replace("border-black","border-white")
        document.getElementById("h2finished").classList.replace("text-gray-700", "text-white")
        localStorage.setItem(localStorage.getItem("usuario"), "negro")
    }

    if(document.getElementById("body").classList.contains("bg-red-100")){

        document.getElementById("body").classList.replace("bg-red-100","bg-stone-900");
        document.getElementById("label1").classList.replace("text-red-700","text-white")
        document.getElementById("label2").classList.replace("text-red-700","text-white")
        document.getElementById("input1").classList.replace("bg-red-200","bg-stone-900")
        document.getElementById("input1").classList.replace("text-red-700","text-white")
        document.getElementById("input1").classList.replace("border-red-500","border-gray-500")
        document.getElementById("input1").classList.replace("bg-red-100","bg-stone-900")
        document.getElementById("input2").classList.replace("bg-red-200","bg-stone-900")
        document.getElementById("input2").classList.replace("text-red-700","text-white")
        document.getElementById("input2").classList.replace("border-red-500","border-gray-500")
        document.getElementById("input2").classList.replace("bg-red-100","bg-stone-900")
        document.getElementById("create").classList.replace("hover:bg-red-700","hover:bg-white")
        document.getElementById("create").classList.replace("text-red-700","text-white")
        document.getElementById("create").classList.replace("border-red-700","border-white")
        document.getElementById("create").classList.replace("hover:text-white","hover:text-black")
        document.getElementById("pending").classList.replace("border-red-700","border-white")
        document.getElementById("h2pending").classList.replace("text-red-700","text-white")
        document.getElementById("ongoing").classList.replace("border-red-700","border-white")
        document.getElementById("h2ongoing").classList.replace("text-red-700","text-white")
        document.getElementById("finished").classList.replace("border-red-700","border-white")
        document.getElementById("h2finished").classList.replace("text-red-700","text-white")
        localStorage.setItem(localStorage.getItem("usuario"), "negro")
    }

})

document.getElementById("azul").addEventListener('click', () => {

    if(document.getElementById("body").classList.contains("bg-white")){
        document.getElementById("body").classList.replace("bg-white","bg-blue-300");
        document.getElementById("input1").classList.replace("bg-white","bg-blue-300")
        document.getElementById("input2").classList.replace("bg-white","bg-blue-300")
        document.getElementById("create").classList.replace("hover:bg-black","hover:bg-blue-800")
        localStorage.setItem(localStorage.getItem("usuario"), "azul")
    }
    if(document.getElementById("body").classList.contains("bg-stone-900")){
        document.getElementById("body").classList.replace("bg-stone-900","bg-blue-300");
        document.getElementById("label1").classList.replace("text-white","text-gray-700")
        document.getElementById("label2").classList.replace("text-white","text-gray-700")
        document.getElementById("input1").classList.replace("bg-white","bg-gray-200")
        document.getElementById("input1").classList.replace("text-white","text-gray-700")
        document.getElementById("input1").classList.replace("border-white","border-gray-500")
        document.getElementById("input1").classList.replace("bg-stone-900","bg-blue-300")
        document.getElementById("input2").classList.replace("bg-gray-200", "bg-stone-200",)
        document.getElementById("input2").classList.replace("text-white","text-gray-700")
        document.getElementById("input2").classList.replace("border-white","border-gray-500")
        document.getElementById("input2").classList.replace("bg-stone-900","bg-blue-300")
        document.getElementById("create").classList.replace("hover:bg-white","hover:bg-blue-800")
        document.getElementById("create").classList.replace("text-white","text-black-700",)
        document.getElementById("create").classList.replace("border-white","border-black")
        document.getElementById("create").classList.replace("hover:text-black","hover:text-white")
        document.getElementById("pending").classList.replace("border-white","border-black")
        document.getElementById("h2pending").classList.replace("text-white","text-gray-700")
        document.getElementById("ongoing").classList.replace("border-white","border-black")
        document.getElementById("h2ongoing").classList.replace("text-white","text-gray-700")
        document.getElementById("finished").classList.replace("border-white","border-black")
        document.getElementById("h2finished").classList.replace("text-white","text-gray-700")
        localStorage.setItem(localStorage.getItem("usuario"), "azul")
    }
    if(document.getElementById("body").classList.contains("bg-red-100")){

        document.getElementById("body").classList.replace("bg-red-100","bg-blue-300");
        document.getElementById("label1").classList.replace("text-red-700","text-gray-700")
        document.getElementById("label2").classList.replace("text-red-700","text-gray-700")
        document.getElementById("input1").classList.replace("bg-red-200","bg-gray-200")
        document.getElementById("input1").classList.replace("text-red-700","text-gray-700")
        document.getElementById("input1").classList.replace("border-red-500","border-gray-500")
        document.getElementById("input1").classList.replace("bg-red-100","bg-blue-300")
        document.getElementById("input2").classList.replace("bg-red-200","bg-gray-200")
        document.getElementById("input2").classList.replace("text-red-700","text-gray-700")
        document.getElementById("input2").classList.replace("border-red-500","border-gray-500")
        document.getElementById("input2").classList.replace("bg-red-100","bg-blue-300")
        document.getElementById("create").classList.replace("hover:bg-red-700","hover:bg-blue-800")
        document.getElementById("create").classList.replace("text-red-700","text-gray-700")
        document.getElementById("create").classList.replace("border-red-700","border-black")
        document.getElementById("pending").classList.replace("border-red-700","border-black")
        document.getElementById("h2pending").classList.replace("text-red-700","text-gray-700")
        document.getElementById("ongoing").classList.replace("border-red-700","border-black")
        document.getElementById("h2ongoing").classList.replace("text-red-700","text-gray-700")
        document.getElementById("finished").classList.replace("border-red-700","border-black")
        document.getElementById("h2finished").classList.replace("text-red-700","text-gray-700")
        localStorage.setItem(localStorage.getItem("usuario"), "azul")
    }

})

document.getElementById("blanco").addEventListener('click', () => {

    if(document.getElementById("body").classList.contains("bg-blue-300")){
        document.getElementById("body").classList.replace("bg-blue-300","bg-white");
        document.getElementById("input1").classList.replace("bg-blue-300","bg-white")
        document.getElementById("input2").classList.replace("bg-blue-300","bg-white")
        document.getElementById("create").classList.replace("hover:bg-blue-800","hover:bg-black")
        localStorage.setItem(localStorage.getItem("usuario"), "blanco")
    }

    if(document.getElementById("body").classList.contains("bg-stone-900")){
        document.getElementById("body").classList.replace("bg-stone-900","bg-white");
        document.getElementById("label1").classList.replace("text-white","text-gray-700")
        document.getElementById("label2").classList.replace("text-white","text-gray-700")
        document.getElementById("input1").classList.replace("bg-gray-200", "bg-white")
        document.getElementById("input1").classList.replace("text-gray-700","text-white")
        document.getElementById("input1").classList.replace("border-white","border-gray-500")
        document.getElementById("input1").classList.replace("bg-stone-900","bg-white")
        document.getElementById("input2").classList.replace("bg-gray-200", "bg-stone-200")
        document.getElementById("input2").classList.replace("text-gray-700","text-white")
        document.getElementById("input2").classList.replace("border-white","border-gray-500")
        document.getElementById("input2").classList.replace("bg-stone-900","bg-white")
        document.getElementById("create").classList.replace("hover:bg-white","hover:bg-black")
        document.getElementById("create").classList.replace("text-white","text-black-700")
        document.getElementById("create").classList.replace("border-white","border-black",)
        document.getElementById("create").classList.replace("hover:text-black","hover:text-white")
        document.getElementById("pending").classList.replace("border-white","border-black")
        document.getElementById("h2pending").classList.replace("text-white","text-gray-700")
        document.getElementById("ongoing").classList.replace("border-white","border-black")
        document.getElementById("h2ongoing").classList.replace("text-white","text-gray-700")
        document.getElementById("finished").classList.replace("border-white","border-black")
        document.getElementById("h2finished").classList.replace("text-white","text-gray-700")
        localStorage.setItem(localStorage.getItem("usuario"), "blanco")
    }

    if(document.getElementById("body").classList.contains("bg-red-100")){

        document.getElementById("body").classList.replace("bg-red-100","bg-white");
        document.getElementById("label1").classList.replace("text-red-700","text-gray-700")
        document.getElementById("label2").classList.replace("text-red-700","text-gray-700")
        document.getElementById("input1").classList.replace("bg-red-200","bg-gray-200")
        document.getElementById("input1").classList.replace("text-red-700","text-gray-700")
        document.getElementById("input1").classList.replace("border-red-500","border-gray-500")
        document.getElementById("input1").classList.replace("bg-red-100","bg-white")
        document.getElementById("input2").classList.replace("bg-red-200","bg-gray-200")
        document.getElementById("input2").classList.replace("text-red-700","text-gray-700")
        document.getElementById("input2").classList.replace("border-red-500","border-gray-500")
        document.getElementById("input2").classList.replace("bg-red-100","bg-white")
        document.getElementById("create").classList.replace("hover:bg-red-700","hover:bg-black")
        document.getElementById("create").classList.replace("text-red-700","text-black-700")
        document.getElementById("create").classList.replace("border-red-700","border-black")
        document.getElementById("pending").classList.replace("border-red-700","border-black")
        document.getElementById("h2pending").classList.replace("text-red-700","text-gray-700")
        document.getElementById("ongoing").classList.replace("border-red-700","border-black")
        document.getElementById("h2ongoing").classList.replace("text-red-700","text-gray-700")
        document.getElementById("finished").classList.replace("border-red-700","border-black")
        document.getElementById("h2finished").classList.replace("text-red-700","text-gray-700")
        localStorage.setItem(localStorage.getItem("usuario"), "blanco")

    }

})