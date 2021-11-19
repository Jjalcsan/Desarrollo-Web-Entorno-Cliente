formulario = document.getElementById("formulario");

nombre = document.getElementById("nombre");
apellidos = document.getElementById("apellidos");
login = document.getElementById("login");
pass = document.getElementById("pass");
fecha = document.getElementById("fecha");
edad = document.getElementById("edad");

borrar = document.getElementById("borrar");
consultar = document.getElementById("consultar");
consultarUlti = document.getElementById("consultarUlti");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    compruebaFormulario();
})

const objetoValido = {
    nombre : false,
    apellidos : false,
    pass : false,
    fechaN : false
}

nombre.addEventListener("change", (e) => {
    console.log(nombre.value[0])
    fetch('https://intranetjacaranda.es/pruebaJS/arrayNombres.php')
    .then(response => {
        if (response.ok){
            return response;
        }
    })
    .then(data => {
        console.log(data)
    })

})

apellidos.addEventListener("change", (e) => {
    const compruebaApellidos = /[A-Za-z][ ][A-Za-z]/
    if (compruebaApellidos.test(apellidos.value)){
        objetoValido.apellidos = true;
    } else {
        alert("Deben introducir dos apellidos separados")
    }
})

pass.addEventListener("change", (e) => {
    const compruebaContra = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
    if (compruebaContra.test(pass.value)){
        objetoValido.contra = true;
    } else {
        alert("La contraseña debe de tener al menos 8 carácteres de los cuales 1 debe de ser mayuscula, 1 minuscula y otro un numero");
    }
})

fecha.addEventListener("change", (e) =>{
    const date = new Date(fecha.value)
    if(120-date.getYear()>=18){
        pintar = document.getElementById("edad")
        pintar.innerHTML=120-date.getYear()
        objetoValido.fechaN = true;
    } else {
        alert("Debes de tener al menos 18 años para registrarte")
    }
    console.log(120-date.getYear());
})

const compruebaFormulario = () => {
    const formValues = Object.values(objetoValido);
    const valid = formValues.findIndex(value => value == false)
    if (valid != -1){
        formulario.submit();
        const objetoLocal = {
            nombre : document.getElementById("nombre").value,
            apellidos : document.getElementById("apellidos").value,
            login : document.getElementById("login").value,
            pass : document.getElementById("pass").value,
            fecha : new Date(),
            edad : document.getElementById("edad").innerHTML
        }
        
        const peticion = new XMLHttpRequest();
        peticion.open('POST', 'http://localhost:3000/users')
        peticion.setRequestHeader('Content-type', 'application/json')
        peticion.send(JSON.stringify(objetoLocal))

    }else{
        alert("formulario invalido")
    }
}

borrar.addEventListener("click", () => {
    localStorage.clear();
})

consultar.addEventListener("click", () => {
    usuario = prompt("Indica el usuario que quieres buscar");
    const peticion = new XMLHttpRequest();
    peticion.open('GET', 'http://localhost:3000/users');
    peticion.send();
    
    
})