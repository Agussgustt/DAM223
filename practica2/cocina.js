const productos = [];
function agregarProducto(nombre, precio, cantidad) {
    const producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };
    productos.push(producto);
    console.log("Producto agregado con éxito: " + nombre);
}

function mostrarProductos() {
    console.log("\nLISTA DE PRODUCTOS");
    if (productos.length === 0) {
        console.log("No hay productos registrados");
        return;
    }

    productos.forEach((producto, indice) => {
        console.log(
            `${indice + 1}. ${producto.nombre} - $${producto.precio} - Cantidad: ${producto.cantidad}`
        );
    });

    function editarProducto(indice, nuevoNombre, nuevoPrecio, nuevaCantidad) {
        const indice = posicion - 1;
        if (indice >= 0 && indice < productos.length) {
            productos[indice].nombre = nuevoNombre;
            productos[indice].precio = nuevoPrecio;
            productos[indice].cantidad = nuevaCantidad;
            console.log("Producto editado con éxito: " + nuevoNombre);
        } else {
            console.log("Índice de producto inválido");
        }
    }

    function eliminarProducto(posicion) {
        const indice = posicion - 1;
        if (indice >= 0 && indice < productos.length) {
            const productoEliminado = productos.splice(indice, 1);
            console.log("Producto eliminado con éxito: " + productoEliminado[0].nombre);
        } else {
            console.log("Índice de producto inválido");
        }
    }

    agregarProducto("Hamburguesa", 80, 10);
    agregarProducto("Refresco", 25, 20);
    agregarProducto("Papas", 40, 15);
    mostrarProductos();

    editarProducto(2, "Refresco Grande", 30, 25);
    mostrarProductos();

    eliminarProducto(1);
    mostrarProductos();
}