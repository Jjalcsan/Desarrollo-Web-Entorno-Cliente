nombre = document.getElementById("nombre");
version = document.getElementById("version");
info = document.getElementById("info");
localizacion = document.getElementById("localizacion");
nucleos = document.getElementById("nucleos");
lenguaje = document.getElementById("lenguaje");
so = document.getElementById("so");
plugins = document.getElementById("plugins");

nombre.addEventListener("click", () => {
    alert(navigator.appCodeName);
});

version.addEventListener("click", () => {
    alert(navigator.appVersion);
});

info.addEventListener("click", () => {
    alert(navigator.connection);
});

localizacion.addEventListener("click", () => {
    alert(navigator.geolocation);
});

nucleos.addEventListener("click", () => {
    alert(navigator.deviceMemory);
});

lenguaje.addEventListener("click", () => {
    alert(navigator.language);
});

so.addEventListener("click", () => {
    alert(navigator.platform);
});

plugins.addEventListener("click", () => {
    alert(navigator.plugins);
});