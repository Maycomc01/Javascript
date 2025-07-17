let platos = [];

function ingresarPlatos() {
  let nombre = prompt("Ingrese el nombre del plato");
  let precio = parseFloat(prompt("Ingrese el precio del plato"));
  let cantidad = parseInt(prompt("Cantidad de platos pedidos"));
  platos.push({ nombre, precio, cantidad });
}

function calcularPrecios() {
  let total = 0;
  for (let i = 0; i < platos.length; i++) {
    total += platos[i].precio * platos[i].cantidad;
  }
  return total;
}

function calcularTotal() {
  console.log("Resumen del Pedido");

  for (let i = 0; i < platos.length; i++) {
    console.log(
      `${platos[i].nombre} x${platos[i].cantidad} - $${
        platos[i].precio * platos[i].cantidad
      }`
    );
  }
  alert("Total a pagar: $" + calcularPrecios());
}

do {
  ingresarPlatos();
} while (confirm("¿Desea agregar otro plato?"));

calcularTotal();
