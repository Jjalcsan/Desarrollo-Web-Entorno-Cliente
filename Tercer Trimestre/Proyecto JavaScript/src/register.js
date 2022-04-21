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

document.getElementById("form").addEventListener("submit", (e)=> { e.preventDefault(); validarForm();});

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
    if(valid == -1) {

        const newUser = {
            nick:document.getElementById("nick").value,
            pass:document.getElementById("pass").value,
            name:document.getElementById("name").value,
            surname:document.getElementById("surname").value,
            age:document.getElementById("age").value,
            gender:document.getElementById("gender").value,
            email:document.getElementById("email").value
        }

        pet = new XMLHttpRequest();
        pet.open("POST", "http://localhost:3000/users");
        pet.setRequestHeader('Content-type', 'application/json');
        pet.send(JSON.stringify(newUser));
        if(pet.readyState===4){
            if(pet.status===201){
                console.log("way");
                document.getElementById("divUsu").innerHTML=`<div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                <p class="font-bold">Informational message</p>
                <p class="text-sm">Some additional text to explain said message.</p>
              </div>`
            } else {
                console.log("error")
    
            }
        }

    }
    else alert('Form invalid')

}

function validaNick() {

    value = document.getElementById("nick").value

    if(value!= ""){

        allGoodForm.nick = true;
        //Comprobacion de JsonServer
        let pet = new XMLHttpRequest();
        pet.overrideMimeType("application/json");
        pet.open('GET', 'http://localhost:3000/users', true);
        let usuarios = checkNick(pet);
        console.log(usuarios)
        /*for (let step = 0; step < usuarios.length; step++){

            if(user[step]["nick"]==value){
                document.getElementById("errorNick").innerHTML = "Ya existe un usuario con ese nombre";
            } else {
                document.getElementById("errorNick").innerHTML = "";
            }
        }*/

        

    } else {


        document.getElementById("errorNick").innerHTML = "El nick no puede estar vacío";
        document.getElementById("nick").value = "";
        document.getElementById("nick").classList.replace("border-gray-200", "border-red-500")
        document.getElementById("nick").classList.replace("focus:border-gray-500", "focus:border-red-500")

    }

}

function checkNick(pet){
    let usuarios
    if(pet.readyState===4){
        if(pet.status===200){
            let usuarios = JSON.parse(pet.responseText);
            console.log(usuarios);
        } else {
            console.log("error")

        }
    }

    

}

function validaContra() {
    
    contraValida = /[a-zA-Z0-9]{8,10}/
    value = document.getElementById("pass").value

    if(!contraValida.test(value)){

        document.getElementById("errorPass").innerHTML = "La contraseña debe tener como minimo 8 caracteres y 10 como maximo";
        document.getElementById("pass").value = "";
        document.getElementById("pass").classList.replace("border-gray-200", "border-red-500")
        document.getElementById("pass").classList.replace("focus:border-gray-500", "focus:border-red-500")

    } else {

        allGoodForm.pass = true;
        document.getElementById("errorPass").innerHTML = "";
        document.getElementById("pass").classList.replace("border-red-500", "border-gray-200")
        document.getElementById("pass").classList.replace("focus:border-red-500", "focus:border-gray-500")

    }

}

function validaNombre() {
    
    namerValido = /^[a-zA-Z ]{2,30}$/;
    value = document.getElementById("name").value

    if(!namerValido.test(value)){

        document.getElementById("errorName").innerHTML= "El nombre solo puede tener letras";
        document.getElementById("name").value = "";
        document.getElementById("name").classList.replace("border-gray-200", "border-red-500")
        document.getElementById("name").classList.replace("focus:border-gray-500", "focus:border-red-500")

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
        document.getElementById("surname").classList.replace("border-gray-200", "border-red-500")
        document.getElementById("surname").classList.replace("focus:border-gray-500", "focus:border-red-500")

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
        document.getElementById("age").classList.replace("border-gray-200", "border-red-500")
        document.getElementById("age").classList.replace("focus:border-gray-500", "focus:border-red-500")

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
        document.getElementById("errorGender").classList.replace("border-gray-200", "border-red-500")
        document.getElementById("errorGender").classList.replace("focus:border-gray-500", "focus:border-red-500")

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
        document.getElementById("email").classList.replace("border-gray-200", "border-red-500")
        document.getElementById("email").classList.replace("focus:border-gray-500", "focus:border-red-500")
        
    }
}