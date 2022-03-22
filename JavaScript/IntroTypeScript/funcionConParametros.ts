// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
//function getAvenger( nombre, poder, arma ){
//    var mensaje;
//    if( poder ){
//       mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
//    }else{
//       mensaje = nombre + " tiene un " + poder
//    }
//  };

function getAvenger(nombre : string, poder? : string, arma : string = "arco") {
    let mensaje : string;

    if( poder ){
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma " + arma;
    }
}