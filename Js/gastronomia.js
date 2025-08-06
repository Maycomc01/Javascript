let pedidos = [];
let ultimoId = 1;

function mostrarFormulario() {
  document.getElementById("formularioDelPedido").style.display = "block";
  document.getElementById("verPedidos").style.display = "none";
}

function mostrarTodos() {
  document.getElementById("formularioDelPedido").style.display = "none";
  document.getElementById("verPedidos").style.display = "none";
}

function mostrarFiltro() {
  document.getElementById("formularioDelPedido").style.display = "none";
  document.getElementById("verPedidos").style.display = "block";
}

function crearTicket(e) {
  e.preventDefault();

  const mesa = document.getElementById("mesa").value;
  const plato = document.getElementById("plato").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);

  if (!mesa || !plato) {
    alert("Por favor, completa los campos de mesa y plato.");
    return;
  }

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("La cantidad debe ser un número mayor a 0.");
    return;
  }

  if (isNaN(precio) || precio <= 0) {
    alert("El precio debe ser un número mayor a 0.");
    return;
  }

  const resumen = {
    id: ultimoId++,
    mesa: mesa,
    plato: plato,
    cantidad: cantidad,
    precio: precio,
    total: precio * cantidad,
    estado: "abierto",
  };

  pedidos.push(resumen);
  alert("✅ Ticket creado");
  mostrarTickets(pedidos);
  document.getElementById("pedidoFormulario").reset();
}

// Mostrar tickets
function mostrarTickets(lista) {
  const listaPedidos = document.getElementById("listaPedidos");
  if (lista.length === 0) {
    listaPedidos.innerHTML = "<p>No hay pedidos</p>";
    return;
  }

  let mensaje = "<h3>Lista de Pedidos</h3>";

  lista.forEach((t) => {
    mensaje += `
      <div>
        <p><strong>ID:</strong> ${t.id}</p>
        <p><strong>MESA:</strong> ${t.mesa}</p>
        <p><strong>PLATO:</strong> ${t.plato}</p>
        <p><strong>PRECIO:</strong> ${t.precio}</p>
        <p><strong>CANTIDAD:</strong> ${t.cantidad}</p>
        <p><strong>TOTAL:</strong> ${t.total}</p>
        <p><strong>ESTADO:</strong> ${t.estado}</p>
        ${
          t.estado === "abierto"
            ? `<button class="btnCerrar" data-id="${t.id}">Cerrar Ticket</button>`
            : ""
        }
        <hr>
      </div>
    `;
  });

  listaPedidos.innerHTML = mensaje;

  const botonCerrar = document.querySelectorAll(".btnCerrar");
  botonCerrar.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      cerrarTicketPorId(id);
    });
  });
}

function cerrarTicketPorId(id) {
  const ticket = pedidos.find((t) => t.id === id);
  if (!ticket || ticket.estado === "cerrado") {
    alert("Ticket no válido o ya cerrado");
    return;
  }
  ticket.estado = "cerrado";
  alert("Ticket cerrado");
  mostrarTickets(pedidos);
}

document.getElementById("btnAplicarFiltro").addEventListener("click", () => {
  const estado = document.getElementById("filtroPedido").value;
  const filtrados =
    estado === "todos" ? pedidos : pedidos.filter((t) => t.estado === estado);
  mostrarTickets(filtrados);
});

document
  .getElementById("pedidoFormulario")
  .addEventListener("submit", crearTicket);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formularioDelPedido").style.display = "none";
  document.getElementById("verPedidos").style.display = "none";

  document
    .getElementById("btnCrear")
    .addEventListener("click", mostrarFormulario);

  document
    .getElementById("btnVerPedidos")
    .addEventListener("click", mostrarTodos);

  document.getElementById("btnEstado").addEventListener("click", mostrarFiltro);
});
