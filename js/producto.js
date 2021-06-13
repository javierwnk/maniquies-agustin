
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
    buildProduct()
})

// Mostramos la información del producto

const buildProduct = () => {
    showBreadcrumb()
    showProductDetails()
}

const showBreadcrumb = () => {

    let categorias = {
        "maniquies": [{"id": 1, "name":"Cuerpo Completo"}, {"id": 2, "name":"Colgante"}, {"id": 3, "name":"Bustos"}, {"id": 4, "name":"Lenceria"}, {"id": 5, "name":"Cabeza"}, {"id": 6, "name":"Piernas"}, {"id": 7, "name":"Fibra de Vidrio"}],
        "equipamiento": [{"id": 8, "name":"Perchas"},{"id": 9, "name":"Percheros"},{"id": 10, "name":"Portacarteras"},{"id": 11, "name":"Mensulas"},{"id": 12, "name":"Ganchos S"},{"id": 13, "name":"Cajas Registradoras"}]
    }
    let categoria2Name = ""

    path = `<li class="breadcrumb-item"><a href="catalogo.html?all=true">Productos</a></li>
    <li class="breadcrumb-item"><a href="catalogo.html?all=true">${producto.mainCategory}</a></li>
    `
    
    if(producto.gender != "null")
    path += `<li class="breadcrumb-item active"><a href="catalogo.html?mainCategory=${producto.mainCategory}&&gender=${producto.gender}">${producto.gender}</a></li>`

    if(producto.secondCategory != "null") {

        if(producto.mainCategory == "maniquies") {
            for(let i = 0; i < categorias.maniquies.length; i++) {
                if (producto.secondCategory == categorias.maniquies[i].id) {
                    categoria2Name = categorias.maniquies[i].name
                    break;   
                }
            }    
        }

        if(producto.mainCategory == "equipamiento") {
            for(let i = 0; i < categorias.equipamiento.length; i++) {
                if (producto.secondCategory == categorias.equipamiento[i].id) {
                    categoria2Name = categorias.equipamiento[i].name
                    break;   
                }
            }    
        }

        path += `<li class="breadcrumb-item active"><a href="catalogo.html?mainCategory=${producto.mainCategory}&&gender=${producto.gender}&&secondCategory=${producto.secondCategory}">${categoria2Name}</a></li>`

    }


    document.getElementById("breadcrumbList").innerHTML = path
    

}

const showProductDetails = () => {

    // Información del producto
    document.getElementById("product-title").innerText = producto.name
    document.getElementById("product-price").innerText = `$${producto.price}`

    document.getElementById("description-list").innerHTML = `
    <li>${producto.description}</li>
    <li>Material: ${producto.material}</li>
    <li>Colores: ${producto.colors}</li>
    `

    // Imagen principal
    document.getElementById("image").src = producto.image

    // Slider gallery
    let gallery = `<div class="image-preview active" id="image1" onclick="changeMainImage(1)" style="background-image: url('${producto.image}');background-size: contain;background-repeat: no-repeat; background-position: center;"></div>`

    if(producto.image2 != "")
    gallery += `<div class="image-preview" id="image2" onclick="changeMainImage(2)" style="background-image: url('${producto.image2}');background-size: contain;background-repeat: no-repeat; background-position: center;"></div>`

    if(producto.image3 != "")
    gallery += `<div class="image-preview" id="image3" onclick="changeMainImage(3)" style="background-image: url('${producto.image3}');background-size: contain;background-repeat: no-repeat; background-position: center;"></div>`

    if(producto.image4 != "")
    gallery += `<div class="image-preview" id="image4" onclick="changeMainImage(4)" style="background-image: url('${producto.image4}');background-size: contain;background-repeat: no-repeat; background-position: center;"></div>`

    document.getElementById("slider-gallery").innerHTML = gallery
}

// Change de la imagen principal
    function changeMainImage (number) {
        switch (number) {
            case 1:
                document.getElementById("image").src = producto.image
                document.getElementById("image1").classList.add("active")
                document.getElementById("image2").classList.remove("active")
                document.getElementById("image3").classList.remove("active")
                document.getElementById("image4").classList.remove("active")

                break;
            case 2:
                document.getElementById("image").src = producto.image2
                document.getElementById("image1").classList.remove("active")
                document.getElementById("image2").classList.add("active")
                document.getElementById("image3").classList.remove("active")
                document.getElementById("image4").classList.remove("active")
                break;
            case 3:
                document.getElementById("image").src = producto.image3
                document.getElementById("image1").classList.remove("active")
                document.getElementById("image2").classList.remove("active")
                document.getElementById("image3").classList.add("active")
                document.getElementById("image4").classList.remove("active")
                break;
            case 4:
                document.getElementById("image").src = producto.image4
                document.getElementById("image1").classList.remove("active")
                document.getElementById("image2").classList.remove("active")
                document.getElementById("image3").classList.remove("active")
                document.getElementById("image4").classList.add("active")
                break;
                        
        }
    }

