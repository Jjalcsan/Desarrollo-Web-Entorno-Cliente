enviar = document.getElementById("enviar");

todoList = document.getElementById("todo-list");
ongoingList = document.getElementById("ongoing-list");
finishedList = document.getElementById("finished-list");

contador = localStorage.length;



enviar.addEventListener("click", (e) => {
   
    e.preventDefault();

    objeto = document.getElementById("objeto").value;
    if (objeto==""){
        alert("Escribe algo nuevo para la lista");
    }else{
        ++contador;
        const tarea = {
            id : contador,
            tarea : objeto,
            lista : "todoList"
        }
        todoList.innerHTML += `<div id="${contador}" draggable="true">${objeto}</div>`;
        localStorage.setItem(contador, JSON.stringify(tarea)); 
    }

})

todoList.addEventListener('dragstart', (e) => {
    
        e.dataTransfer.setData('text/plain', e.target.id);
        
})

ongoingList.addEventListener('dragstart', (e) => {
    console.log(e.target)
    if (e.target && e.target.matches('div[draggable]')) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }
})

finishedList.addEventListener('dragstart', (e) => {
    if (e.currentTarget && e.currentTarget.matches('div[draggable]')) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }
})

todoList.addEventListener('dragover', (e) => {
    e.preventDefault()
})

ongoingList.addEventListener('dragover', (e) => {
    e.preventDefault()
})


finishedList.addEventListener('dragover', (e) => {
    e.preventDefault()
})


ongoingList.addEventListener('drop', (e) => {
    e.preventDefault();

    const element = document.getElementById(e.dataTransfer.getData('text'));

    aBorrar = element.parentNode

    aBorrar.removeChild(element);

    ongoingList.appendChild(element)

    const tarea = {
        id : element.attributes.id.value,
        tarea : element.innerHTML,
        lista : "ongoingList"
    };

    localStorage.setItem(element.attributes.id.value, JSON.stringify(tarea));
})

todoList.addEventListener('drop', (e) => {
    e.preventDefault();

    const element = document.getElementById(e.dataTransfer.getData('text'));

    aBorrar = element.parentNode

    aBorrar.removeChild(element);

    todoList.appendChild(element)

    const tarea = {
        id : element.attributes.id.value,
        tarea : element.innerHTML,
        lista : "todoList"
    };

    localStorage.setItem(element.attributes.id.value, JSON.stringify(tarea));
})

finishedList.addEventListener('drop', (e) => {
    e.preventDefault();

    const element = document.getElementById(e.dataTransfer.getData('text'));

    aBorrar = element.parentNode

    aBorrar.removeChild(element);

    finishedList.appendChild(element)

    const tarea = {
        id : element.attributes.id.value,
        tarea : element.innerHTML,
        lista : "finishedList"
    };

    localStorage.setItem(element.attributes.id.value, JSON.stringify(tarea));


})

