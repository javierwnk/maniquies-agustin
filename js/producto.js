
// FICHA DE PRODUCTO - INPUT DE CANTIDAD

let btnAdd = document.querySelector("#add")
let btnSubstract = document.querySelector("#subtract")
let quantityInput = document.querySelector("#quantityInput")

btnAdd.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
})

btnSubstract.addEventListener('click', () => {
    if (quantityInput.value > 1)
    quantityInput.value = parseInt(quantityInput.value) - 1;
})

// Obtención de datos de la url

const valores = window.location.search;

// Creamos la instancia
const urlParams = new URLSearchParams(valores)

let idProducto = urlParams.get("id");

// Consulta a la base de Firebase

let producto // Guardaremos la info acá

fs.doc("products/" + idProducto)
.get()
.then((doc) => {
    producto = doc.data()
    console.log(producto)
})

