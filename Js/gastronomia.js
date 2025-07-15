let platos = [];

function ingresarPlatos() {
  let nombre = prompt("Ingrese el nombre del plato");
  let precio = parseFloat(prompt("Ingrese el precio del plato"));
  let cantidad = parseInt(prompt("Cantidad de platos pedidos"));
  platos.push({ nombre, precio, cantidad });
}

function calcularPrecios() {
  let total = 0;
  for (let item of platos) {
    total += item.precio * item.cantidad;
  }
  return total;
}
// hasta aca lo hizo solo, desde aca me ayude de la IA
function calcularTotal() {
  console.log("Resumen de pedido");
  platos.forEach((p) => {
    console.log(`${p.nombre} x${p.cantidad} - $${p.precio * p.cantidad}`);
  });
  alert("Total a pagar: $" + calcularPrecios());
}
do {
  ingresarPlatos();
} while (confirm("¿Desea agregar otro plato?"));

calcularTotal();
