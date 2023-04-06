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
};

function findService(arr, filtro) {
    const encontrado = arr.find((el) => {
        return el.nombre.includes(filtro)
    })
    return encontrado;
}

function Prendas(nombre, precio, img) {
    this.id = prendas.length + 1;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
};

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
        let prendaIngresada = ""
        let prendaResultado
        console.log('Entre')
        //Array
        const prendas = [
            { id: 1, nombre: "pantalon", precio: 12000, img: "" },
            { id: 2, nombre: "remera manga corta", precio: 3500, img: "" },
            { id: 3, nombre: "remera manga larga", precio: 5000, img: "" },
            { id: 4, nombre: "pollera", precio: 3600, img: "" },
            { id: 5, nombre: "top", precio: 2300, img: "" },
            { id: 6, nombre: "buzo polar", precio: 7900, img: "" },
            { id: 7, nombre: "campera", precio: 35000, img: "" }
        ];
        let aMostrar = '';
        for (const prenda of prendas) {
            aMostrar += `${prenda.nombre} --> ${prenda.precio} \n`
        }
         
        do { prendaIngresada = ""

            prendaIngresada = prompt(aMostrar = 'Ingrese el nombre de la prenda o Enter para salir');
            if (prendaIngresada && prendaIngresada !== null && prendaIngresada !== "") {
                prendaResultado = findService(prendas, prendaIngresada);
            }
            if (prendaResultado) {
                alert(`Prenda: ${prendaResultado.nombre} \n Precio: ${prendaResultado.precio}`)
            }
            if (!prendaResultado) {
                alert('La prenda ingresada no existe')
                prendaIngresada = undefined
            }


        } while (!prendaIngresada)

        alert(`Se agrego la prenda ${prendaResultado.nombre} al carrito`);
    } else {
        alert('Error de acceso');
    }

} else {
    alert("Error, Por favor ingresar nuevamente su nombre");
}

