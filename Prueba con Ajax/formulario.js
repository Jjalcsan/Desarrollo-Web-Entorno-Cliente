document.getElementById('addProduct').addEventListener('submit', (event) => {
    const newPost={
        name: document.getElementById("Titulo").value,
        descrip: document.getElementById("Autor").value,
    }
    const peticion = new XMLHttpRequest();
    peticion.open('POST', 'http://localhost:3000/posts');
    peticion.setRequestHeader('Content-type', 'application/json');
    peticion.send(JSON.stringify(newPost));
})
