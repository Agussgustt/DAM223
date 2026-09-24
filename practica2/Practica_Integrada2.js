const IVA = 0.16;
const pedidos = [];
let idu = 13;

//productos de la cafeteria
const productos = [
    { id: 1, nombre: "Roles de Canela", precio: 20, cantidad: 10, categoria: "postre" },
    { id: 2, nombre: "Gomitas", precio: 13, cantidad: 5, categoria: "postre" },
    { id: 3, nombre: "Frappe de Oreo", precio: 150, cantidad: 15, categoria: "bebida" },
    { id: 4, nombre: "Qroasant", precio: 20, cantidad: 10, categoria: "postre" },
    { id: 5, nombre: "Donas", precio: 7, cantidad: 15, categoria: "postre" },
    { id: 6, nombre: "Tarta", precio: 35, cantidad: 10, categoria: "postre" },
    { id: 7, nombre: "Pastel de Chocolate", precio: 50, cantidad: 10, categoria: "postre" },
    { id: 8, nombre: "Pastel de Vainilla", precio: 50, cantidad: 10, categoria: "postre" },
    { id: 9, nombre: "Pastel de Fresa", precio: 50, cantidad: 10, categoria: "postre" },
    { id: 10, nombre: "Pastel de Zanahoria", precio: 50, cantidad: 10, categoria: "postre" },
    { id: 11, nombre: "cafe americano", precio: 30, cantidad: 10, categoria: "bebida" },
    { id: 12, nombre: "cafe capuchino", precio: 35, cantidad: 10, categoria: "bebida" },
    { id: 13, nombre: "cafe latte", precio: 40, cantidad: 10, categoria: "bebida" },
];

function menor() {
let orden = (productos.sort(function (a, b){
    return a.precio - b.precio;
}))
let listaProductos = "";
    for (let i = 0; i < orden.length; i++) {
        let p = promo[i];
        listaProductos += p.id + ". " + p.nombre + " - $" + p.precio + " (Disponibles: " + p.cantidad + ")\n";
    }
    alert(listaProductos);
}

function mayor() {
let orden = (productos.sort(function (a, b){
    return b.precio - a.precio;
}))
let listaProductos = "";
    for (let i = 0; i < orden.length; i++) {
        let p = promo[i];
        listaProductos += p.id + ". " + p.nombre + " - $" + p.precio + " (Disponibles: " + p.cantidad + ")\n";
    }
    alert(listaProductos);
}


function promo() {
let promo = productos.map(function(x) {return {...x,precio: x.precio * 0.5};});
alert("Todos los productos al 50% del descuento");
let listaProductos = "";
    for (let i = 0; i < promo.length; i++) {
        let p = promo[i];
        listaProductos += p.id + ". " + p.nombre + " - $" + p.precio + " (Disponibles: " + p.cantidad + ")\n";
    }
    alert(listaProductos);
}


function agregarproducto() {
    idu = idu+1;
    let nombre = prompt("Ingresa el nombre del producto");
    let precio = prompt("Ingresa el precio del producto");
    let cantidad = prompt("Ingresa el numero de unidades que tienes del producto");
    let bebida = confirm("Haz click en aceptar si es una bebida, cancelar si es un postre");
    let categoria = "postre"
    if (bebida) {
    categoria = "bebida"    
    }
    productos.push({id: idu, nombre: nombre, precio: precio, cantidad: cantidad, categoria: categoria});
}

function mostrarProductos() {
    let listaProductos = "";
    for (let i = 0; i < productos.length; i++) {
        let p = productos[i];
        listaProductos += p.id + ". " + p.nombre + " - $" + p.precio + " (Disponibles: " + p.cantidad + ")\n";
    }
    alert(listaProductos);
    return listaProductos;
}

function iniciarPedido() {
    let continuar = true;
    while (continuar) {
        let listaProductos = mostrarProductos();
        let menuMensaje = "Menu de la KFE\n" + listaProductos + "Ingrese el ID del producto que desea comprar (o presione Cancelar para salir):";

        let opcion = prompt(menuMensaje);

        if (opcion === null){
            break;
        }
   

    let idProducto = parseInt(opcion);
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
    if(cantidadIngresada === null) break;
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

    let subtotal = pedidos.reduce((acumulador, pedido) => acumulador + (pedido.precio * pedido.cantidad), 0);
    let ivaCalc = subtotal * IVA;
    let total = subtotal + ivaCalc;

    resumen += ""
    resumen += `\nSubtotal: $${subtotal.toFixed(2)}\n`;
    resumen += `IVA: $${(ivaCalc - subtotal).toFixed(2)}\n`;
    resumen += `Total a pagar: $${total.toFixed(2)}\n`;
    resumen += ""
    resumen += "Gracias por tu compra, vuelve pronto!\n";

    alert(resumen);

}

function listarpedidos() {
 for (let i = 0; i < pedidos.length; i++) {
 const pedido = pedidos[i];
 let mensaje = "Producto: " + pedido.producto.nombre + " Precio: " + pedido.precio + " Cantidad: " + pedido.cantidad
 alert(mensaje);
 }
}

function bebidas() {
    let listaBebidas = productos.filter(producto => producto.categoria === "bebida");

   let mensajeBebidas = "Bebidas disponibles:\n";
    listaBebidas.forEach(producto => {
        mensajeBebidas += producto.nombre + " - $" + producto.precio + "\n";
    });
    alert(mensajeBebidas);
}

function postres() {
    let listaPostres = productos.filter(producto => producto.categoria === "postre");

   let mensajePostres = "Postres disponibles:\n";
    listaPostres.forEach(producto => {
        mensajePostres += producto.nombre + " - $" + producto.precio + "\n";
    });
    alert(mensajePostres);
}