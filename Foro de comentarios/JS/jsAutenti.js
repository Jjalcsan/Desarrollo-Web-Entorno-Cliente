registro = document.getElementById("registro");

nombre = document.getElementById("nombre");

correo = document.getElementById("correo");

contra = document.getElementById("contra");

repetir = document.getElementById("repetir");

condiciones = document.getElementById("condiciones");

formulario = document.getElementById("formulario");


const objetoValidado = {
    elnombre : false,
    elcorreo : false,
    elcontra : false,
    elcondiciones : false,
};

nombre.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 3) objetoValidado.elnombre = true;
        else(alert("El nombre tiene que tener mas de 3 caracteres"));
});

correo.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 5) objetoValidado.elcorreo = true;
        else(alert("El correo tiene que ser valido"));
});

contra.addEventListener("change", (e) => {
    if (e.target.value.trim().length > 5) objetoValidado.elcontra = true;
        else(alert("La contraseña tiene que tener al menos 6 caracteres"));
});

condiciones.addEventListener("change", (e) => {
    if(e.target.checked == true) objetoValidado.elcondiciones = true;
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
});

const validateForm = () => {
    const formValues = Object.values(objetoValidado);

    const valid = formValues.findIndex(value => value == false);

    if (valid == -1){
        
        formulario.submit();

        const peticion = new XMLHttpRequest();

        const datosUsuario = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        contra: document.getElementById("contra").value};

        peticion.open('POST', 'http://localhost:3000/usuarios');
    
        peticion.setRequestHeader('Content-type', 'application/json');
    
        peticion.send(JSON.stringify(datosUsuario));

    }else alert("Formulario invalido");
};
