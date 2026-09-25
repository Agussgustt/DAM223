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

//funcion para ordenar los productos de menor a mayor precio
function menor() {
let orden = (productos.sort(function (a, b){
    return a.precio - b.precio;
}))
let listaProductos = "";
    for (let i = 0; i < orden.length; i++) {
        let p = orden[i];
        listaProductos += p.id + ". " + p.nombre + " - $" + p.precio + " (Disponibles: " + p.cantidad + ")\n";
    }
    alert(listaProductos);
}

//funcion para ordenar los productos de mayor a menor precio
function mayor() {
let orden = (productos.sort(function (a, b){
    return b.precio - a.precio;
}))
let listaProductos = "";
    for (let i = 0; i < orden.length; i++) {
        let p = orden[i];
        listaProductos += p.id + ". " + p.nombre + " - $" + p.precio + " (Disponibles: " + p.cantidad + ")\n";
    }
    alert(listaProductos);
}

//funcion para mostrar los productos con descuento
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

//funcion para iniciar el pedido
function iniciarPedido() {
    let continuar = true;
    while (continuar) {
        let listaProductos = mostrarProductos();
        let menuMensaje = "Menu de la Cafeteria\n" + listaProductos + "Ingrese el ID del producto que desea comprar (o presione Cancelar para salir):";

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

    let ultimoPedido = pedidos[pedidos.length - 1];
    procesarPedido(ultimoPedido, notificarCliente); 
}

//funcion para mostrar la cuenta final del pedido
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
    let ivaCalculado = subtotal * IVA;
    let total = subtotal + ivaCalculado;

    resumen += ""
    resumen += `\nSubtotal: $${subtotal.toFixed(2)}\n`;
    resumen += `IVA: $${ivaCalculado.toFixed(2)}\n`;
    resumen += `Total a pagar: $${total.toFixed(2)}\n`;
    resumen += ""
    resumen += "Gracias por tu compra, vuelve pronto!\n";

    alert(resumen);

}

//funcion para listar los pedidos realizados
function listarpedidos() {
    for (let i = 0; i < pedidos.length; i++) {
    const pedido = pedidos[i];
    let mensaje = "Producto: " + pedido.producto.nombre + " Precio: " + pedido.precio + " Cantidad: " + pedido.cantidad
    alert(mensaje);
 }
}

//funcion para mostrar las bebidas disponibles
function bebidas() {
    let listaBebidas = productos.filter(producto => producto.categoria === "bebida");

   let mensajeBebidas = "Bebidas disponibles:\n";
    listaBebidas.forEach(producto => {
        mensajeBebidas += producto.nombre + " - $" + producto.precio + "\n";
    });
    alert(mensajeBebidas);
}

//funcion para mostrar los postres disponibles
function postres() {
    let listaPostres = productos.filter(producto => producto.categoria === "postre");

   let mensajePostres = "Postres disponibles:\n";
    listaPostres.forEach(producto => {
        mensajePostres += producto.nombre + " - $" + producto.precio + "\n";
    });
    alert(mensajePostres);
}

function procesarPedido(pedido, callback) {
    let listo = confirm(" El pedido esta listo? \n Presiona Aceptar si esta listo,\nCancelar si no lo esta");
    if (listo) {
        callback(pedido, "listo");
    } else {
        alert("El pedido no esta listo");
    }
}

function notificarCliente(pedido, estado) {
    if (estado === "listo") {
        alert("El pedido de " + pedido.producto.nombre + " esta listo");
    } else {
        alert("El pedido de " + pedido.producto.nombre + " fue cancelado");
    }
}

function cocinandoPedido() {
    return new Promise((resolve, reject) => {
        alert("Preparando el Pedido...");
        setTimeout(function() {
            let resultado = Math.random();
            if (resultado > 0.6) {
                resolve("El pedido está listo");
            } else {
                reject(" UPS! problemas en cocina \n No saldra el Pedido");
            }
        }, 3000);
    });
}

function revisarIngredientes() {
    return new Promise((resolve, reject) => {
        alert("Revisando los ingredientes...");
        setTimeout(function() {
            let ingredientesDisponibles = Math.random();
            if (ingredientesDisponibles > 0.4) {
                resolve("Los ingredientes están disponibles");
            } else {
                reject("Los ingredientes no están disponibles");
            }
        }, 2000);
    });
}

function prepararPedido() {
    revisarIngredientes()
        .then(function(mensaje) {
            alert(mensaje);
            return cocinandoPedido();
        })
        .then(function(mensaje){
            alert(" :D "+mensaje);
        })
        .catch(function(error){
            alert(" :C "+error);
        });
    }
