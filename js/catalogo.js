// CATALOGO

// Obtenemos los parámetros de la URL

const valores = window.location.search;

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

//Verificar si existe el parámetro

let categoria1 = "null"
let gender = "null"
let categoria2 = "null"
let all = ""

if(urlParams.has('mainCategory'))
categoria1 = urlParams.get('mainCategory')

if(urlParams.has('gender'))
gender = urlParams.get('gender')

if(urlParams.has('secondCategory'))
categoria2 = urlParams.get('secondCategory')

if(urlParams.has('all'))
all = urlParams.get('all')


const catalogList = () => {

    if (all == "true") {
        fs.collection("products").orderBy("mainCategory")
        .get()
        .then((snapshot) => {
            listarProductos(snapshot.docs)
        })

    } else  if (gender == "null" && categoria2 == "null") {
        fs.collection("products")
        .where("mainCategory", "==", categoria1)
        .get()
        .then((snapshot) => {
            listarProductos(snapshot.docs)
        })
    
    } else if (gender == "null" && categoria2 != "null") {
        fs.collection("products")
        .where("mainCategory", "==", categoria1)
        .where("secondCategory", "==", categoria2)
        .get()
        .then((snapshot) => {
            listarProductos(snapshot.docs)
        })
    } else if (gender != "null" && categoria2 == "null") {
        fs.collection("products")
        .where("mainCategory", "==", categoria1)
        .where("gender", "==", gender)
        .get()
        .then((snapshot) => {
            listarProductos(snapshot.docs)
        })
    
    } else {
        fs.collection("products")
        .where("mainCategory", "==", categoria1)
        .where("secondCategory", "==", categoria2)
        .where("gender", "==", gender)
        .get()
        .then((snapshot) => {
            listarProductos(snapshot.docs)
        })
    }
    
    }


catalogList()

let productoList = document.querySelector(".product-list")

const listarProductos = data => {
    if(data.length) {
        let html = "";

        data.forEach(doc => {
            const product = doc.data()
            const card = `
            <div class="product-card">
            
            <div class="image-content">
                <div class="product-card-image">
                <img src="${product.image}" alt="${product.name}" />
                </div>
            </div>
            
            <div class="product-card-content">
                <p class="body-card">
                ${product.name}
                </p>
                <p class="body-price">
                    $${product.price}
                </p>
            </div>
        </div>

            `

            html += card
        })

        productoList.innerHTML = html

    }
}
