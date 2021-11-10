// Cree una interfaz que sirva para validar el siguiente objeto
//var batman = {
//    nombre: "Bruno Díaz",
//   artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
//  }

interface batman {
    name : string ;
    artesMarciales: Array<string>;
}

function heroe(baman : batman){
    return "I'm "+baman.name+" and my abilities are "+baman.artesMarciales;
}

console.log(heroe({name: "Bruno Díaz", artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]}))