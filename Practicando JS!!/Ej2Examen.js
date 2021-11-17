boton = document.getElementById("consultar");

boton.addEventListener("click", () => {
    if(document.getElementById("select").value==""){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            if(response.ok){
                return response.json();
            }
        })
        .then(function(data){
            for (let i = 0; i<data.length; i++){
                usuario = data[i]
                select = document.getElementById("select");
                select.innerHTML+=`<option value=${usuario.id}>${usuario.name}</option>`
            }
        })
    }else{
        console.log(document.getElementById("select").value)
    
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            if(response.ok){
                return response.json();
            }
        })
        .then(function(data){
            for (let i = 0; i<data.length; i++){
                contrastar = data[i]
                
                if(document.getElementById("select").value==contrastar.id){
                    div = document.getElementById("div");
                    console.log(data[i].name)
                    div.innerHTML+=`<table><tr><td>${data[i].id}</td></tr><td>${data[i].name}</td></tr><td>${data[i].username}</td></tr><td>${data[i].email}</td></tr><td>${data[i].address}</td></tr><td>${data[i].phone}</td></tr><td>${data[i].website}</td></tr><td>${data[i].company}</td></tr></table>`
                }
            }
        })
    }

})

