
const IVA = 0.16;
const pedidos = [];


//productos de la cafeteria
const productos = [
    { id: 1, nombre: "Roles de Canela", precio: 20, cantidad: 10},
    { id: 2, nombre: "Gomitas", precio: 13, cantidad: 5},
    { id: 3, nombre: "Frappe de Oreo", precio: 150, cantidad: 15},
    { id: 4, nombre: "Qroasant", precio: 20, cantidad: 10},
    { id: 5, nombre: "Donas", precio: 7, cantidad: 15},
    { id: 6, nombre: "Tarta", precio: 35, cantidad: 10},
];


function iniciPedido() {
    let continuar = true;
    while (continuar) {
        let menu = "Menu de la KFE\n";
        productos.forEach((producto) => {
            menu += "$[p.id] ${producto.nombre} - $${producto.precio} - Cantidad: ${producto.cantidad}\n";
        });

        let opcion = prompt(menu);

        if (eleccion === null || eleccion.trim() === "") {
      continuarComprando = false;
      break;
    }

    let idProducto = parseInt(eleccion);
    let productoEncontrado = productos.find(p => p.id === idProducto);

    if (!productoEncontrado) {
        alert(" ERROR");
        continue;
    }
    
    if (productoEncontrado.cantidad === 0) {
        alert(" Producto agotado");
        continue;
    }

    let cantidadIngresada = prompt("Cuantas piezas deseas comprar?");
    let cantidad = parseInt(cantidadIngresada);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida");
        continue;
    }

    if (cantidad > productoEncontrado.cantidad) {
        alert("No hay piezas disponibles");
        continue;
    }

    productoEncontrado.cantidad -= cantidad;
    pedidos.push({ producto: productoEncontrado, precio: productoEncontrado.precio, cantidad: cantidad });

    alert("Producto agregado al pedido: " + productoEncontrado.nombre + " - Cantidad: " + cantidad);    

    continuar = confirm("Deseas agregar otro producto al pedido?");
    }
     mostrrarCuentaF();
}

function mostrrarCuentaF() {
    if (pedidos.length === 0) {
        alert("No hay productos en el pedido");
        return;
    }

    let resumen = "Resumen del pedido:\n";

    pedidos.forEach((pedido, indice) => {
        let subtotal = pedido.precio * pedido.cantidad;
        resumen += `${indice + 1}. ${pedido.producto.nombre} - $${pedido.precio} - Cantidad: ${pedido.cantidad} - Subtotal: $${subtotal}\n`;
    });

    let total = pedidos.reduce((acumulador, pedido) => acumulador + (pedido.precio * pedido.cantidad), 0);
    let totalConIVA = total * (1 + IVA);
    resumen += `Total: $${total.toFixed(2)}\n`;
    resumen += `Total con IVA: $${totalConIVA.toFixed(2)}\n`;

    alert(resumen);
}
