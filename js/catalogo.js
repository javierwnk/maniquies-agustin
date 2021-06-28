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

    
    if(data.length > 0) {
        let html = "";

        data.forEach(doc => {
            const product = doc.data()
            const card = `
            <div class="product-card-container">
                <a href="producto.html?id=${doc.id}">
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
            </a>
        </div>
            `

            html += card
        })

        productoList.innerHTML = html

    } else {
        productoList.innerHTML = `<p style="margin: 0 auto;">No se encontraron productos para la categoría seleccionada</p>`
    }
}

// Manejo de breadcrumb

let categorias = {
    "maniquies": [{"id": 1, "name":"Cuerpo Completo"}, {"id": 2, "name":"Colgante"}, {"id": 3, "name":"Bustos"}, {"id": 4, "name":"Lenceria"}, {"id": 5, "name":"Cabeza"}, {"id": 6, "name":"Piernas"}, {"id": 7, "name":"Fibra de Vidrio"}],
    "equipamiento": [{"id": 8, "name":"Perchas"},{"id": 9, "name":"Percheros"},{"id": 10, "name":"Portacarteras"},{"id": 11, "name":"Mensulas"},{"id": 12, "name":"Ganchos S"},{"id": 13, "name":"Cajas Registradoras"}]
}

let breadcrumb = () => {

    let path = ""
    let categoria2Name = ""

    if(urlParams.has('all')) {
        path = `<li class="breadcrumb-item"><a href="catalogo.html?all=true">Productos</a></li>
                <li class="breadcrumb-item active">Todos los productos</li>
        `

        document.getElementById("breacrumb-catalogo").innerHTML = path
    } else {
        path = `<li class="breadcrumb-item"><a href="catalogo.html?all=true">Productos</a></li>
                <li class="breadcrumb-item"><a href="catalogo.html?mainCategory=${categoria1}">${categoria1}</a></li>`

                if(urlParams.has('gender') && urlParams.has('secondCategory')) {

                    if(categoria1 == "maniquies") {
                        for(let i = 0; i < categorias.maniquies.length; i++) {
                            if (categoria2 == categorias.maniquies[i].id) {
                                categoria2Name = categorias.maniquies[i].name
                                break;   
                            }
                        }    
                    }

                    if(categoria1 == "equipamiento") {
                        for(let i = 0; i < categorias.equipamiento.length; i++) {
                            if (categoria2 == categorias.equipamiento[i].id) {
                                categoria2Name = categorias.equipamiento[i].name
                                break;   
                            }
                        }    
                    }

                    path += `<li class="breadcrumb-item"><a href="catalogo.html?mainCategory=${categoria1}&&gender=${gender}">${gender}</a></li>`
                    path += `<li class="breadcrumb-item active"><a href="catalogo.html?mainCategory=${categoria1}&&gender=${gender}&&secondCategory=${categoria2}">${categoria2Name}</a></li>`

                } else if(urlParams.has('gender') && urlParams.has('secondCategory') == false) {

                    path += `<li class="breadcrumb-item active"><a href="catalogo.html?mainCategory=${categoria1}&&gender=${gender}">${gender}</a></li>`

                } else if(urlParams.has('gender') == false && urlParams.has('secondCategory')) {

                    if(categoria1 == "maniquies") {
                        for(let i = 0; i < categorias.maniquies.length; i++) {
                            if (categoria2 == categorias.maniquies[i].id) {
                                categoria2Name = categorias.maniquies[i].name
                                break;   
                            }
                        }    
                    }

                    if(categoria1 == "equipamiento") {
                        for(let i = 0; i < categorias.equipamiento.length; i++) {
                            if (categoria2 == categorias.equipamiento[i].id) {
                                categoria2Name = categorias.equipamiento[i].name
                                break;   
                            }
                        }    
                    }

                    path += `<li class="breadcrumb-item active"><a href="catalogo.html?mainCategory=${categoria1}&&gender=${gender}&&secondCategory=${categoria2}">${categoria2Name}</a></li>`

                }

                document.getElementById("breacrumb-catalogo").innerHTML = path

    }


}

breadcrumb()