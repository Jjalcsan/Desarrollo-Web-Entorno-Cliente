document.getElementById("login").addEventListener("click", (e) => {e.preventDefault(); validarLogin()});

function validarLogin(){

    nickIntroducido = document.getElementById("nick").value;
    passIntroducida = document.getElementById("pass").value;
    
    let peticion = new XMLHttpRequest();
        peticion.open('GET', 'http://localhost:3000/users');
        peticion.send();
        peticion.addEventListener('readystatechange', function() {
            if (peticion.readyState === 4) {
                if (peticion.status === 200) {
                    let usuarios = JSON.parse(peticion.responseText);
                    for (let i = 0; i<usuarios.length; i++){

                        if (usuarios[i].nick==nickIntroducido && usuarios[i].pass==passIntroducida){

                            window.location.href = "main.html"
                            localStorage.setItem("usuario", nickIntroducido)

                        } else {

                            document.getElementById("errorLogin").innerHTML = "Usuario o contraseña incorrectos";
                        }
                    }
    
                } else {
                    console.log("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
                }
            }
        })


}