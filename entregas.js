// function prueba (){
//     const mail = document.getElementById('mail')
//     console.log (mail.value)
// }

const usuarios = [
    {id:1,usr_name:'Coyola',mail:'oyolaconi04@gmail.com',pass:'5125'},
    {id:1,usr_name:'Gmoreno',mail:'gonzamoreno21@gmail.com',pass:'G555'}
]

function login (){
    const mail = document.getElementById('mail').value;
    const pass = document.getElementById('pass').value;
    const usuario = findUser(usuarios, mail, pass);
    console.log (usuario)
    localStorage.setItem ('usuario', JSON.stringify(usuario))
}

function findUser(arr, mail, pass) {
    const encontrado = arr.find((el) => {
        return el.mail.includes(mail)
    })
    if (encontrado){
        if (pass == encontrado.pass){
            return encontrado
        }
    }
}

function isLogged(){
    const usuario = localStorage.getItem('usuario')
    if (usuario){
        return true;
    } return false;
}

function aMostrar(){
    const Logeo = document.getElementById('Logeo');
    const Login = document.getElementById('Login');
    if (isLogged()){
        Logeo.style.display = 'block'
        Login.style.display = 'none'
    }else{
        Logeo.style.display = 'none'
        Login.style.display = 'block'
    }
}