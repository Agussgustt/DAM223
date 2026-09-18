
const retrogral = "Caja";
const pedidos = [];

let totalPedidos = 0;

function agregarPedido(producto, precio) {
  
  const pedido = {
    producto: producto,
    precio: precio  
  }

  pedidos.push(pedido);

    totalPedidos += precio;

    console.log(" Pedido realizado con exito! ");
    console.log(" Producto: "+producto);
    console.log(" Precio $"+precio);

}

function mostrarPedidos(){
    console.log("\nLISTA DE PEDIDOS ");
    if(pedidos.length === 0){
        console.log(" No hay pedidos registrados");
        return;
    }

    pedidos.forEach((pedido, indice) => {
        console.log(
            `${indice + 1}. ${pedido.producto} - $${pedido.precio}`
        );
    });

    console.log("");
    console.log(" Total acomulado $"+totalPedidos);

}

