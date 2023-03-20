//Da la bienvenida al cliente
let ingresaNombre = prompt('Ingrese su nombre')
if(validarName(ingresaNombre)){
    alert("Bienvenida/o " + ingresaNombre);

//Solicita ingresar clave 
let acceso = false;


for(let i = 2; i >= 0; i --){
    let pimClave = prompt("Ingrese su clave");
    if(validarPass(pimClave)){
        alert("Ingreso exitoso!");
        acceso = true;
        break;
    }else{
        alert('Clave incorrecta');
  }
}


// Se muestran las opciones en pantalla
if(acceso){
    alert('Bienvenido a Tienda Mora!!');
    let opciones = prompt(
        "Seleccione su opcion: \n1 - Total a pagar. \n2 - Metodo de pago. \n3 - Eliminar producto. \nPresiona x para salir."
    );
    while(opciones != "x") {

    }
}else{
    alert('Error de acceso');
}

}else{
    alert("Error, Por favor ingresar nuevamente su nombre");
}

function validarPass(pass){
    let clave= "5125";
    return pass === clave
  };


function validarName(name){
   if(name != "" && name === "Constanza"||name === "CONSTANZA") {
    return true
   }else{
    return false
   }
}






