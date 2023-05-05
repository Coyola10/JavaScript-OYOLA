

// LOGEO
const usuarios = [
    { id: 1, usr_name: 'Coyola', mail: 'cotyoyola@gmail.com', pass: '5125' },
    { id: 1, usr_name: 'Gmoreno', mail: 'mmoreno@gmail.com', pass: 'G555' }
]

function getProductos() {
    return fetch('./productos.json')
        .then((response) => response.json())
        .then((productos) => productos)
}

function login() {
    const mail = document.getElementById('mail').value;
    const pass = document.getElementById('pass').value;
    const btnSwal = document.getElementById("botonSwal");
    const usuario = findUser(usuarios, mail, pass);
    if (usuario) {
        localStorage.setItem('usuario', JSON.stringify(usuario))
        window.location.href = "./inicio.html"
    } else {
        btnSwal.addEventListener('click', () => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña invalido',
            })
        })
    }

}

function findUser(arr, mail, pass) {
    const encontrado = arr.find((el) => {
        return el.mail.includes(mail)
    })
    if (encontrado) {
        if (pass == encontrado.pass) {
            return encontrado
        }
    }
}

function isLogged() {
    const usuario = localStorage.getItem('usuario')
    if (usuario) {
        return true;
    } window.location.href = "./index.html";
}

function aMostrar() {
    const Logeo = document.getElementById('Logeo');
    const Login = document.getElementById('Login');
    if (isLogged()) {
        Logeo.style.display = 'block'
        Login.style.display = 'none'
    } else {
        Logeo.style.display = 'none'
        Login.style.display = 'block'
    }
}

// PRODUCTOS

const contenedor = document.querySelector('#contenedor')

if (contenedor) {
    getProductos().then((productos) => productos.forEach((prod) => {
        const { id, nombre, cantidad, precio, img } = prod
        contenedor.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">Precio: ${precio}</p>
          <p class="card-text">Cantidad: ${cantidad}</p>
          <button onclick="agregarAlCarrito(${id})" class="btn btn-primary">Agregar al carrito</a>
        </div>
      </div>
        `
    }))

}

// AGREGAR AL CARRITO Y MOSTRAR EN EL CARRITO

const carrito = JSON.parse(localStorage.getItem('carrito')) ?? []

function agregarAlCarrito(id) {
    getProductos().then((productos) => {
        const prod = productos.find((prod) => prod.id === id)
        carrito.push(prod)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
}


const contenedorCarrito = document.querySelector('#contenedorCarrito')
console.log(carrito)
const carritoStorage = JSON.parse(localStorage.getItem('carrito')) ?? []
console.log(carritoStorage)

if (contenedorCarrito) {
    carritoStorage.forEach((prod) => {
        const { id, nombre, cantidad, precio, img } = prod
        contenedorCarrito.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <button onclick="eliminarProductos(${id})" class="btn btn-primary">Eliminar Producto</a>
    </div>
  </div>
    `
    });
}

// PRECIO TOTAL

const precioTotal = document.querySelector("#precioTotal");

if (precioTotal){
    precioTotal.textContent = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0 )
    console.log(precioTotal)
}


