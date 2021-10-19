codhash = document.getElementById("codhash");
codhost = document.getElementById("codhost");
codhostname = document.getElementById("codhostname");
codhref = document.getElementById("codhref");
codpathname = document.getElementById("codpathname");
codport = document.getElementById("codport");
codprotocol = document.getElementById("codprotocol");
codsearch = document.getElementById("codsearch");

codhash.addEventListener("click", () => {
    alert(window.location.hash);
});

codhost.addEventListener("click", () => {
    alert(window.location.host);
});

codhostname.addEventListener("click", () => {
    alert(window.location.hostname);
});

codhref.addEventListener("click", () => {
    alert(window.location.href);
});

codpathname.addEventListener("click", () => {
    alert(window.location.pathname);
});

codport.addEventListener("click", () => {
    alert(window.location.port);
});

codprotocol.addEventListener("click", () => {
    alert(window.location.protocol);
});

codsearch.addEventListener("click", () => {
    alert(window.location.search);
});