Swal.fire('Gracias por registar tus datos!!')

let form = document.getElementById("form")
const divUsuario = document.getElementById("mostrarUsuario")
//consolstorage.clear()

function guardarformulario(e){      /* creo la funcio  donde va tomar los datos del html y lo va mostrar*/
e.preventDefault();
const nombre = document.querySelector("#inputnombre").value
const apellido = document.querySelector("#inputapellido").value
const edad = document.querySelector("#inputedad").value
const mail = document.querySelector("#inputmail").value
const user ={
  nombre:nombre,
  apellido:apellido,
  edad:edad,
  mail:mail
}
localStorage.setItem("usuario",JSON.stringify(user))
}
//llamo a funcion
form.addEventListener("submit", (e)=>{
guardarformulario(e)
mostrarUsuario()})

function mostrarUsuario(){
const usuario =JSON.parse(localStorage.getItem("usuario"))
console.log(usuario)
let mensaje = usuario.edad >=18 ? "Tiene un descuento":"NO tienes descuesnto en la compra"

let respuesta = document.getElementById("mensaje")
respuesta.innerHTML =` <p>${mensaje}</p>`


divUsuario.innerHTML = `
  <h2> Su nombre ingresado es: ${usuario.nombre}</h2><hr>
  <h2> Su apellido es: ${usuario.apellido}</h2><hr>
  <h2> Su edad es: ${usuario.edad}</h2><hr>
  <h2> Su mail es:  ${usuario.mail}</h2><hr>
`
}
