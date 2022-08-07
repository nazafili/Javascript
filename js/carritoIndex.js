import { comidaDulce } from "./script.js"

let carritoCompras = [];

export const carritoIndex = (productoId) => {
    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductoCarrito = () => {
        let producto = comidaDulce.find(producto => producto.id == productoId)
        carritoCompras.push(producto)

        producto.cantidad = 1

        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML =  `<p class="fuente"> ${producto.nombre}</p>
                            <p class="fuente">${producto.precio}</p>
                            <p class="fuente" id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                            <button id="eliminar${producto.id}" class="boton-eliminar">Eliminar</button>`

        contenedorCarrito.appendChild(div)
    }
    renderProductoCarrito()
}