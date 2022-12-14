import { carritoIndex } from "./carritoIndex.js";

/********************** CREACION DE LA CLASE PRODUCTO *****************************/  

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

/********************** CREAMOS FUNCION PARA DETERMINAR SI HAY O NO STOCK *****************************/  

    informacion() {
        let info = `Nombre: ${this.nombre}, Precio: ${this.precio}`;

        if (this.stock > 0) {
            info += ` / Hay stock: ${this.stock}`;
        } else {
            info = +`No hay stock`;
        }
        console.log(info)
    }
}

/********************** DEFINICION DE LOS PARAMETROS CREANDO PRODUCTROS NUEVOS *****************************/  

const torta1 = new Producto('Lemonpie', 1500, 5);
const torta2 = new Producto('Brownie', 2000, 20);
const torta3 = new Producto('Rogel', 1100, 30);


/*************** LLAMAMOS A CONSOLA LA INFORMACION A TRAVES DE LA FUNCION CREADA ANTERIORMENTE ***************/  
torta1.informacion()
torta2.informacion()
torta3.informacion()

/********************** CREACION DE LOS ARRAYS / OBJETOS DENTRO DE ARRAYS *****************************/  

const comidaSalada = [`milanesa`, `sanguches`, `empanadas`, `pizza`];

export const comidaDulce = [
    { id:1, nombre: "lemonpie", tipo: "torta", precio:"2500", img:'img/lemon.jpg', cantidad:""},
    { id:2, nombre: "brownie", tipo: "torta", precio:"2500", img:'img/brownie.jpg', cantidad:""},
    { id:3, nombre: "rogel", tipo: "torta", precio:"2500", img:'img/rogel.jpg', cantidad:""},
    { id:4, nombre: "cupcakes", tipo: "pastel", precio:"1500", img:"img/cupcakes.jpg", cantidad:""},
    { id:5, nombre: "magdalenas", tipo: "pastel", precio:"1500", img:'img/magdalenas.jpg', cantidad:""},
    { id:6, nombre: "muffins", tipo: "pastel", precio:"1500", img:'img/muffins.jpg', cantidad:""},

]

/********************** FUNCIONES DE TIPO PUSH - INCLUDES - FILTER *****************************/  

function agregarComida() {
    let comida = prompt(`que comida queres queres agregar?`);
    comidaSalada.push(comida);
    console.clear();
    alert(`Hemos agregado: "` + comida + `"al menu`)
}

function eliminarComida() {
    let comidaEliminada = comidaSalada.pop()
    alert(`Hemos sacado: "` + comidaEliminada + `" del menu`)
}

function buscarComida() {
    let comidaAbuscar = prompt(`Que comida desea buscar?`);
    let resultado = comidaSalada.includes(comidaAbuscar)
    if (resultado) {
        console.log(`Tenemos esa comida!`)
    } else {
        console.warn(`No tenemos por el momento ` + comidaAbuscar + `. Podr?? dejarnos su sugerencia proximamente. `)
    }
}

function buscarTortas() {
    const filtro = comidaDulce.filter(x => x.tipo == "torta")
    console.log(filtro)
}

function buscarPasteles() {
    const filtro2 = comidaDulce.filter(x => x.tipo == "pastel")
    console.log(filtro2)
}

function buscarFacturas() {
    const filtro3 = comidaDulce.filter(x => x.tipo == "facturas")
    console.log(filtro3)
}

/********************** MODIFICANDO EL DOM *****************************/  
/********************** MODIFICANDO EL DOM *****************************/  
/********************** MODIFICANDO EL DOM *****************************/  

const tituloNuevo = document.getElementById('titulo')
tituloNuevo.innerHTML = "RICURAS DE GABRIELA"
const subtituloNuevo = document.getElementById('subtitulo')
subtituloNuevo.innerHTML = "Date el gusto, la vida es dulce"

tituloNuevo.className = "titleModificated"

function listarProductos() {
    comidaSalada.forEach((comida) => {
    console.table(comida)
});
}

const productos = [];

const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById('producto-contenedor'); 


    comidaDulce.forEach(producto =>  {
        const div = document.createElement('div')
        div.classList.add('card-main')
        div.innerHTML += ` <div class="card">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title"> ${producto.nombre}</h5>
                                    <p class="card-text">Tipo: ${producto.tipo}</p>
                                    <p class="card-text">Precio:$ ${producto.precio}</p>
                                    <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
                                </div> 
                            </div>`

                            contenedorProductos.appendChild(div)
                            

                            const boton = document.getElementById(`boton${producto.id}`)
                            boton.addEventListener(`click`, ()=>{
                                carritoIndex(producto.id)
                                Swal.fire({
                                    title: `Agregaste ${producto.nombre} al carrito!`,
                                    text: 'Segu?? seleccionando productos para tu compra :)',
                                    icon: 'success',
                                    confirmButtonText: 'Cerrar'
                                })
                            } )
    
                            } )
                        
                            
}




mostrarProductos(comidaDulce)


const alertita = document.getElementById('btnCancelar');
const alerta2 = document.getElementById('btnCargar');

/////////////////////////////////////////////
/////////////SWEET ALERTS////////////////////
/////////////////////////////////////////////

alerta2.addEventListener('click', () => {
    Swal.fire({
        title: 'Cargado!',
        text: 'Gracias por tu recomendaci??n',
        icon: 'success',
        confirmButtonText: 'Cerrar'
    })
})


const contenidoDOM = document.querySelector("#contenido")
const URL = 'ingredientes.json'

const obtenerContenido = (URL) => {
    debugger
    fetch(URL)
    .then((response)=> response.json())
    .then((data)=>{
        console.table(data)
    })

}
    