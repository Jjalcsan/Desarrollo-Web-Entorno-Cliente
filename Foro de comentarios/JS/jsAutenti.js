registro = document.getElementById("registro");

nombre = document.getElementById("nombre");

correo = document.getElementById("correo");

contra = document.getElementById("contra");

repetir = document.getElementById("repetir");

condiciones = document.getElementById("condiciones");

formulario = document.getElementById("formulario");

const objetoValidado = {
    nombre : false,
    correo : false,
    contra : false,
    condiciones : false,
}

nombre.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 3) objetoValidado.nombre = true
        else(alert("El nombre tiene que tener mas de 3 caracteres"))
})

correo.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 5) objetoValidado.correo = true
        else(alert("El correo tiene que ser valido"))
})

contra.addEventListener("change", (e) => {
    if (e.target.value.trim().length > 5) objetoValidado.contra = true
})

condiciones.addEventListener("change", (e) => {
    if(e.target.checked == true) objetoValidado.condiciones = true
})

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
})

const validateForm = () => {
    /*const valid = formValues.findIndex(value => value == false)
    if (valid != -1) alert("Formulario invalido")
        else form.submit();*/
    if (objetoValidado.nombre == true && objetoValidado.correo == true && objetoValidado.contra == true &&objetoValidado.condiciones == true) 
        form.submit()
    else (console.log("no"))

};