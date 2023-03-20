//Da la bienvenida al cliente
let ingresaNombre = prompt('Ingrese su nombre')
if (validarName(ingresaNombre)) {
    alert("Bienvenida/o " + ingresaNombre);

    //Solicita ingresar clave 
    let acceso = false;


    for (let i = 2; i >= 0; i--) {
        let pimClave = prompt("Ingrese su clave");
        if (validarPass(pimClave)) {
            alert("Ingreso exitoso! Bienvenido a Tienda Mora!!");
            acceso = true;
            break;
        } else {
            alert('Clave incorrecta');
        }
    }


    // Se muestran las opciones en pantalla
    if (acceso) {
        let opciones;
        do{
            let saldo = 10500;
            opciones = prompt(
                "Seleccione su opcion: \n1 - Total a pagar. \n2 - Pago en cuotas. \nPresiona X para salir."
            );
            switch (opciones) {
                case "1":
                    alert("El monto total a pagar es $" + saldo);
                    break;
                case "2":
                    let cuotas = (prompt("Seleccione el numero de cuotas"));
                    saldo = saldo / cuotas;
                    alert("El monto total a pagar es $" + saldo);
                    break;
                default:
                    alert("Gracias por su visita!");
                    break;
            }
            
        }
        while (opciones == 1 || opciones == 2)     
    
    } else {
        alert('Error de acceso');
    }

} else {
    alert("Error, Por favor ingresar nuevamente su nombre");
}

function validarPass(pass) {
    let clave = "5125";
    return pass === clave
};


function validarName(name) {
    if (name != "" && name === "Constanza" || name === "CONSTANZA") {
        return true
    } else {
        return false
    }
}






