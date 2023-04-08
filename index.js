const precio1 = 1300;
const precio2 = 800;
const precio3 = 950;
const precio4 = 1000;

var precioTotal = 0;

var precioElemento = document.getElementById("precio");

function boton1() {
  precioTotal += precio1;
  mostrarPrecio();
}

function boton2() {
  precioTotal += precio2;
  mostrarPrecio();
}

function boton3() {
  precioTotal += precio3;
  mostrarPrecio();
}

function boton4() {
  precioTotal += precio4;
  mostrarPrecio();
}

function mostrarPrecio() {
  precioElemento.textContent = "Precio total: $" + precioTotal;
}

var listaElemento = document.getElementById("lista");

function agregarPedido() {
  let confirmar = false;
  while (!confirmar) {
    let pedidos = prompt("Por favor confirme su pedido:");
    if (pedidos != null && pedidos != "") {
      let pedidosArray = pedidos.split(",");
      for (let i = 0; i < pedidosArray.length; i++) {
        let pedido = pedidosArray[i].trim();
        if (pedido != "") {
          let li = document.createElement("li");
          li.textContent = pedido;
          listaElemento.appendChild(li);
        }
      }
    } else {
      alert("Por favor confirme su pedido.");
      continue;
    }
    confirmar = confirm("¿Está seguro de su compra?");
  }
}