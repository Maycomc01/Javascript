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
const platos = [];

function ingresarPlatos() {
  const mesa = document.getElementById("mesa").value;
  const plato = document.getElementById("plato").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);

  const pedido = {
    mesa,
    plato,
    cantidad,
    precio,
    total: cantidad * precio,
    estado: "abierto",
  };

  platos.push(pedido);

  document.getElementById("pedidoFormulario").reset();
  alert("pedido agregado");
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("btnAceptar")
    .addEventListener("click", ingresarPlatos);
});

function mostrarFormulario() {
  document.getElementById("formularioDelPedido").style.display = "block";
  document.getElementById("verPedidos").style.display = "none";
}

function mostrarPedidos() {
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
    .addEventListener("click", mostrarPedidos);

  document.getElementById("btnEstado").addEventListener("click", mostrarFiltro);
});
