boton = document.getElementById("submit");

nombre = document.getElementById("nombre");

email = document.getElementById("email");

hijos = document.getElementById("kids");

invisible = document.getElementById("invisible");

terminos = document.getElementById("terminos");

genero = document.getElementById("genero");

formulario = document.getElementById("formulario");

const objetoValido = {
    nombre: false,
    email: false,
    genero: false,
    terminos: false,
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
})

nombre.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) objetoValido.nombre = true
}); 

email.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) objetoValido.email = true
})

genero.addEventListener("change", (e) => {
    if(e.target.checked == true) objetoValido.genero = true
})

hijos.addEventListener("change", (e) =>{
    if(e.target.checked == true){
        invisible.classList.remove("invisible");
        invisible.classList.add("visible");}
    else{
        invisible.classList.remove("visible");
        invisible.classList.add("invisible");}

});

terminos.addEventListener("change", (e) => {
    if(e.target.checked == true) objetoValido.terminos = true;
})

const validateForm = () => {
    const formValues = Object.values(objetoValido)
    const valid = formValues.findIndex(value => value == false)
    if (valid != -1) alert("Form invalid")
        else form.submit();

};
