import { comidaDulce } from "./script.js"

////////////////////////////////////////////////////////////////
// GENERAMOS EL CARRITO DE COMPRAS Y GUARDAMOS EN LOCAL STORAGE
///////////////////////////////////////////////////////////////

let carritoCompras = [];
const carritocontenedor = document.querySelector(".carrito-contenedor")
export const carritoIndex = (productoId) => {
    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductoCarrito = () => {
        let producto = comidaDulce.find(producto => producto.id == productoId)
        carritoCompras.push(producto)

        producto.cantidad = 1

        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `<p class="fuente"> ${producto.nombre}</p>
                            <p class="fuente">${producto.precio}</p>
                            <p class="fuente" id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                            <button id="eliminar${producto.id}" class="boton-eliminar">Eliminar</button>
                            `



        contenedorCarrito.appendChild(div)
        div
            .querySelector('.boton-eliminar')
            .addEventListener('click', removeShoppingCartItem);
    }

    localStorage.setItem('carrito', JSON.stringify(carritoCompras))
    renderProductoCarrito()
}

    function recuperoCarrito() {
        if (localStorage.getItem('carrito')) {
        let carritoCompras = JSON.parse(localStorage.getItem('carrito'))
        return carritoCompras;
        }   
    }
    recuperoCarrito()




//////////////////////////////////////////
// FUNCION PARA REMOVER ITEMS DEL CARRITO
/////////////////////////////////////////

function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.productoEnCarrito').remove();
}

//////////////////////////////////////////////////////////////
// LIMPIAR EL CARRITO AL COMPRAR / DAR LAS GRACIAS AL CLIENTE.
/////////////////////////////////////////////////////////////

const botoncito = document.querySelector('#comprarButton')
botoncito.addEventListener('click', () => {
    BorrarTodo()
    Gracias()
})

function BorrarTodo() {
    const div1 = document.querySelector('#carrito-contenedor').innerHTML = '';
}

function Gracias() {
    Swal.fire({
        title: `Gracias por tu compra!`,
        text: 'Volve a la tienda para seguir comprando',
        icon: 'success',
        confirmButtonText: 'Cerrar'
    })
}


