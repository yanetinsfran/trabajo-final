
// REALIZO  mi array con los productos a vender

let remeras = [
  {talla: "S", color: "Rojo", marca: "Nike", precio: 10},
  {talla: "M", color: "Rojo", marca: "Nike", precio: 10},
  {talla: "L", color: "Rojo", marca: "Nike", precio: 10},
  {talla: "XL", color: "Rojo", marca: "Nike", precio: 10},
  {talla: "S", color: "Azul", marca: "Adidas", precio: 15},
  {talla: "M", color: "Azul", marca: "Adidas", precio: 15},
  {talla: "L", color: "Azul", marca: "Adidas", precio: 15},
  {talla: "XL", color: "Azul", marca: "Adidas", precio: 15},
  {talla: "S", color: "Blanco", marca: "Puma", precio: 20},
  {talla: "M", color: "Blanco", marca: "Puma", precio: 20},
  {talla: "L", color: "Blanco", marca: "Puma", precio: 20},
  {talla: "XL", color: "Blanco", marca: "Puma", precio: 20},
  {talla: "S", color: "Negro", marca: "Reebok", precio: 25},
  {talla: "M", color: "Negro", marca: "Reebok", precio: 25},
  {talla: "L", color: "Negro", marca: "Reebok", precio: 25},
  {talla: "XL", color: "Negro", marca: "Reebok", precio: 25},
];
// agrego 2 productos mas
remeras.push({talla: "S", color: "Verde", marca: "Under Armour", precio: 12});
remeras.push({talla: "M", color: "Gris", marca: "Converse", precio: 18});
console.table(remeras);

let pantalon = [
  {talla: "S", color: "Rojo", marca: "Nike", precio: 110},
  {talla: "M", color: "Rojo", marca: "Nike", precio: 110},
  {talla: "L", color: "Rojo", marca: "Nike", precio: 110},
  {talla: "XL", color: "Rojo", marca: "Nike", precio: 110},
  {talla: "S", color: "Azul", marca: "Adidas", precio: 151},
  {talla: "M", color: "Azul", marca: "Adidas", precio: 151},
  {talla: "L", color: "Azul", marca: "Adidas", precio: 151},
  {talla: "XL", color: "Azul", marca: "Adidas", precio: 151},
  {talla: "S", color: "Blanco", marca: "Puma", precio: 201},
  {talla: "M", color: "Blanco", marca: "Puma", precio: 201},
  {talla: "L", color: "Blanco", marca: "Puma", precio: 201},
  {talla: "XL", color: "Blanco", marca: "Puma", precio: 201},
  {talla: "S", color: "Negro", marca: "Reebok", precio: 251},
  {talla: "M", color: "Negro", marca: "Reebok", precio: 251},
  {talla: "L", color: "Negro", marca: "Reebok", precio: 251},
  {talla: "XL", color: "Negro", marca: "Reebok", precio: 251},
];
// agrego 3 producto mas
pantalon.push({talla: "S", color: "Verde", marca: "Under Armour", precio: 102});
pantalon.push({talla: "M", color: "Gris", marca: "Converse", precio: 108});
pantalon.push({talla: "L", color: "Rosa", marca: "Converse", precio: 108});
console.table(pantalon);


// Obtener referencia al formulario de remeras y al precio total
const remerasForm = document.getElementById("remeras-form");
const precioTotal = document.getElementById("precio-total");
const boton = document.getElementById("boton")
const botonAgregarRemera = document.getElementById("agregar-carrito-remera");
let carritoTotal =[]

const botonAgregarPantalon = document.getElementById("agregar-carrito-pantalon");
const carrito = document.getElementById("carrito");
const select = document.getElementById("talle")
const selectRemeras =document.getElementById("Remeras")
const selectPantalones = document.getElementById("Pantalones")

select.addEventListener("change",()=> {
  MostrarProductosTalla(select.value)
})
selectRemeras.addEventListener("change",()=>{
  MostrarProductosTalla(select.value)
})

function MostrarProductosTalla(talla){
  const remerasOptions = remeras.filter((producto)=> producto.talla === talla);
  generarOpciones("Remeras",remerasOptions);
  console.log(remerasOptions)

  const pantalonesOptions = pantalon.filter((producto)=> producto.talla === talla);//filtrar y mostarsr solo los pantalones disponibles en el tamaño seleccionado
  generarOpciones("Pantalones",pantalonesOptions);
  }

function generarOpciones(menuId, productos) {
  const menu = document.getElementById(menuId);
  menu.innerHTML = ""
  productos.forEach((producto) => {
    const opcion = document.createElement("option");
    opcion.value = producto.marca;
    opcion.textContent =`${producto.talla} - ${producto.color} - ${producto.marca} - $${producto.precio}`;
    menu.appendChild(opcion);
  });
}

botonAgregarRemera.addEventListener("click", () => { 
  AgregarRemera();
});

botonAgregarPantalon.addEventListener("click", () => { 
  AgregarPantalon();
})

function AgregarRemera(){
  const remeraSeleccionada =selectRemeras.value;
  const tallaSelecionada = select.value;
  const remera = remeras.find((producto)=>producto.marca ===remeraSeleccionada && producto.talla ===tallaSelecionada);
  console.log(remera)
  if (remera){
    carritoTotal.push(remera);
    console.log(carritoTotal);
    carrito.innerHTML += `<p>remeras:${remera.talla}- ${remera.color}-${remera.marca}-${remera.precio}</p>`;
    actualizarTotalCarrito()
  }
}


MostrarProductosTalla(select.value)

function AgregarPantalon(){
  const pantalonSeleccionado = selectPantalones.value;
  const tallaSelecionada = select.value;  
  const pantalonEncontrado= pantalon.find((producto)=>producto.marca=== pantalonSeleccionado && producto.talla===tallaSelecionada);

  if (pantalonEncontrado){
    carritoTotal.push(pantalonEncontrado);
    console.log(carritoTotal)
    carrito.innerHTML+=`<p>Pantalon:${pantalonEncontrado.talla}- ${pantalonEncontrado.color}-${pantalonEncontrado.marca}-${pantalonEncontrado.precio}</p>`;
    actualizarTotalCarrito()
  }
}
MostrarProductosTalla(select.value)

 
function actualizarTotalCarrito() {
  const total = carritoTotal.reduce((accumulator, currentValue) => accumulator + currentValue.precio, 0);
  precioTotal.textContent = `$${total}`;
}

const botonVaciarCarrito = document.getElementById("vaciar-carrito");

function vaciarCarrito() {
  carritoTotal = [];
  carrito.innerHTML = "";
  actualizarTotalCarrito();
}

botonVaciarCarrito.addEventListener("click",()=>{
  vaciarCarrito()
})