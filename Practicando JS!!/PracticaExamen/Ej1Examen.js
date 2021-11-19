nick = document.getElementById("nick");
nombre = document.getElementById("name");
pass = document.getElementById("pass");
dni = document.getElementById("dni");
edad = document.getElementById("edad");

enviar = document.getElementById("enviar");
borrar = document.getElementById("borrar");
consultar = document.getElementById("consultar");
consultarUlti = document.getElementById("consultarUlti");

formulario = document.getElementById("formulario");

const objetoValido = {
    nick : false,
    nombre : false,
    pass : false,
    dni : false,
    edad : false
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validarFormulario()
})


nick.addEventListener("change", (e) =>{
    if (e.target.value.trim().length>0){
        objetoValido.nick=true;
    } else {
        alert("nick erroneo")
    }
});

nombre.addEventListener("change", (e) => {
    if (e.target.value.trim().length>0){
        objetoValido.nombre = true;
    } else {
        alert("nombre erroneo")
    }
});

pass.addEventListener("change", (e) => {
    contra =/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
    if( contra.test(pass.value)){
        objetoValido.pass = true;
    } else {
        alert("contra invalida")
    }
});

dni.addEventListener("change", (e) => {
    if (e.target.value.trim().length>0){
        objetoValido.dni = true;
    } else {
        alert("nombre erroneo")
    }
});

edad.addEventListener("change", (e) => {
    if (e.target.value>0){
        objetoValido.edad = true;
    } else {
        alert("nombre erroneo")
    }
});

contador = 0

const validarFormulario = () => {
    const formValues = Object.values(objetoValido)
    const valid = formValues.findIndex(value => value == false)
    if (valid != -1) alert("Form invalid")
        else {
            formulario.submit(); 
            alert("all good");
            const objetoLocal = {
                nick : document.getElementById("nick").value,
                nombre : document.getElementById("name").value,
                pass : document.getElementById("pass").value,
                dni : document.getElementById("dni").value,
                edad : document.getElementById("edad").value,
                fecha : Date.now()
            }
            localStorage.setItem(document.getElementById("nick").value, JSON.stringify(objetoLocal));
        }

};

borrar.addEventListener("click", () => {
    localStorage.clear();
});

consultar.addEventListener("click", () =>{
    busqueda = prompt("Elige un nick el cual buscar");

    for(let i = 0; i < localStorage.length; i++){
        if(busqueda==localStorage.key(i)){
            lista = localStorage.getItem(busqueda).split(",")
            div = document.getElementById("div");
            div.innerHTML=`<table><tr><td>${lista[0]}</td></tr><tr><td>${lista[1]}</td></tr><tr><td>${lista[2]}</td></tr><tr><td>${lista[3]}</td></tr><tr><td>${lista[4]}</td></tr><tr><td>${lista[5]}</td></tr>`;
        }
    }

})

consultarUlti.addEventListener("click", () => {
    ultimo = localStorage.length
    busqueda = localStorage.key(ultimo-1)
    lista = localStorage.getItem(busqueda).split(",")
    div = document.getElementById("div");
    div.innerHTML=`<table><tr><td>${lista[0]}</td></tr><tr><td>${lista[1]}</td></tr><tr><td>${lista[2]}</td></tr><tr><td>${lista[3]}</td></tr><tr><td>${lista[4]}</td></tr><tr><td>${lista[5]}</td></tr>`;
    
})

