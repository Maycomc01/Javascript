// let platos = [];

// function ingresarPlatos() {
//   let nombre = prompt("Ingrese el nombre del plato");
//   let precio = parseFloat(prompt("Ingrese el precio del plato"));
//   let cantidad = parseInt(prompt("Cantidad de platos pedidos"));
//   platos.push({ nombre, precio, cantidad });
// }

// function calcularPrecios() {
//   let total = 0;
//   for (let i = 0; i < platos.length; i++) {
//     total += platos[i].precio * platos[i].cantidad;
//   }
//   return total;
// }

// function calcularTotal() {
//   console.log("Resumen del Pedido");

//   for (let i = 0; i < platos.length; i++) {
//     console.log(
//       `${platos[i].nombre} x${platos[i].cantidad} - $${
//         platos[i].precio * platos[i].cantidad
//       }`
//     );
//   }
//   alert("Total a pagar: $" + calcularPrecios());
// }

// do {
//   ingresarPlatos();
// } while (confirm("¿Desea agregar otro plato?"));

// calcularTotal();
let platos = [];

function ingresarPlatos() {
  let nombre = document.getElementById("nombre");
  let precio = document.getElementById("precio");
  let cantidad = document.getElementById("cantidad");
  platos.push({ nombre, precio, cantidad });
}
let ultimoId = 1;

function mostrarFormulario() {
  document.getElementById("formularioDelPedido").style.display = "block";
  document.getElementById("verPedidos").style.display = "none";
}

function motrarPedidos() {
  document.getElementById("formularioDelPedido").style.display = "none";
  document.getElementById("verPedidos").style.display = "none";
}
function mostrarFiltro() {
  document.getElementById("formularioDelPedido").style.display = "none";
  document.getElementById("verPedidos").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formularioDelPedido").style.display = "none";
  document.getElementById("verPedidos").style.display = "none";

  document
    .getElementById("btnCrear")
    .addEventListener("click", mostrarFormulario);

  document
    .getElementById("btnVerPedidos")
    .addEventListener("click", motrarPedidos);

  document.getElementById("btnEstado").addEventListener("click", mostrarFiltro);
});
