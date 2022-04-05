document.getElementById("nick").addEventListener("change", validaNick);
document.getElementById("pass").addEventListener("change", validaContra);
document.getElementById("name").addEventListener("change", validaNombre);
document.getElementById("surname").addEventListener("change", validaApellido);
document.getElementById("age").addEventListener("change", validaEdad);
document.getElementById("gender").addEventListener("change", validaGenero);
document.getElementById("email").addEventListener("change", validaEmail);

document.getElementById("register");

//Backend con JSon
//Estilo
//Acceso al main

const formulario = document.getElementById("form").addEventListener("submit", (e)=> { e.preventDefault(); validarForm();});

//Objeto a validar del formulario
const allGoodForm = {
    nick : false,
    pass : false,
    namer : false,
    surname : false,
    age : false,
    gender : false,
    email : false
}

function validarForm() {

    const formValues = Object.values(allGoodForm);
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) formulario.submit()
    else alert('Form invalid')

}

function validaNick() {

    value = document.getElementById("nick").value

    if(value!= ""){

        allGoodForm.nick = true;
        //Comprobacion de JsonServer
        document.getElementById("errorNick").innerHTML = "";

    } else {

        document.getElementById("errorNick").innerHTML = "El nick no puede estar vacío";
        document.getElementById("nick").value = "";

    }

}

function validaContra() {
    
    contraValida = /[a-zA-Z0-9]{8,10}/
    value = document.getElementById("pass").value

    if(!contraValida.test(value)){

        document.getElementById("errorPass").innerHTML = "La contraseña debe tener como minimo 8 caracteres y 10 como maximo";
        document.getElementById("pass").value = "";

    } else {

        allGoodForm.pass = true;
        document.getElementById("errorPass").innerHTML = "";

    }

}

function validaNombre() {
    
    namerValido = /^[a-zA-Z ]{2,30}$/;
    value = document.getElementById("name").value

    if(!namerValido.test(value)){

        document.getElementById("errorName").innerHTML= "El nombre solo puede tener letras";
        document.getElementById("name").value = "";
        console.log("mal");

    } else {

        allGoodForm.namer = true;
        document.getElementById("errorName").innerHTML = "";

    }
}

function validaApellido() {

    surnameValido = /^[a-zA-Z ]{2,30}$/;
    value = document.getElementById("surname").value

    if(!surnameValido.test(value)){

        document.getElementById("errorSurname").innerHTML= "Debes poner dos apellidos y solo pueden tener letras";
        document.getElementById("surname").value = "";
        console.log("mal");

    } else {

        allGoodForm.surname = true;
        document.getElementById("errorSurname").innerHTML = "";

    }

}

function validaEdad() {
    
    value = document.getElementById("age").value;

    if(value>=18) {

        allGoodForm.age = true;
        document.getElementById("errorAge").innerHTML = "";

    } else {

        document.getElementById("errorAge").innerHTML = "Debes tener 18 años como mínimo"
        document.getElementById("age").value = "";

    }
}

function validaGenero() {

    value = document.getElementById("gender").value;

    console.log(value);
    if(value!="") {

        allGoodForm.gender = true;
        document.getElementById("errorGender").innerHTML = "";

    } else {

        document.getElementById("errorGender").innerHTML = "Elige una opción";

    }
    
}

function validaEmail() {

    validEmail = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    value = document.getElementById("email").value;

    if(validEmail.test(value)){
        allGoodForm.email = true;
        document.getElementById("errorEmail").innerHTML = "";
    } else {
        document.getElementById("errorEmail").innerHTML="<p>Debes introducir un email valido</p>";
        document.getElementById("email").value = "";
        
    }
}