const comida = []   //será un array de elementos
const listadoServ = [] //será un array de objetos

const inputComida = document.querySelector("#inputComida")
const inputImporte = document.querySelector("#inputImporte")

const btnCargar = document.querySelector("#btnCargar")
const btnCancelar = document.querySelector("#btnCancelar")
const btnVer = document.querySelector("#btnVer") 

btnCargar.addEventListener("click", ()=> {
    comida.push(inputComida.value)
    localStorage.setItem("comida", JSON.stringify(comida))
    console.log("Se agregó una comida nueva.")
    btnCancelar.click()
    inputComida.focus()
})

/*
const recuperarArrays = ()=> {
    //debugger
    if (localStorage.getItem("comida")) {
        let serv = JSON.parse(localStorage.getItem("comida"))
            for (elemento of serv) {
                comida.push(elemento)
            }
    }
}
recuperarArrays()
*/

btnCancelar.addEventListener("click", ()=> {
    inputComida.value = ""
})

btnVer.addEventListener("click", ()=> {
    location.href = "comida.html"
})