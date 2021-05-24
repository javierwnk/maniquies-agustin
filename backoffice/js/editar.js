// Obtención de los datos del producto clickeado 

let productoAEditar = {
    "name": "",
    "description": "",
    "material": "",
    "price": "",
    "image": "",
    "colors": "",
    "mainCategory": "",
    "gender": "",
    "secondCategory": ""
}

let idProd = ""

function obtenerDatos(id) {
    idProd = id
    fs.doc("products/"+id)
    .get()
    .then(doc => {
        completarForm(doc.data())
        productoAEditar = doc.data()
    })
}

// Completar con categorias

document.getElementById("inputGroupSelect01-2").onchange = subcategoriasEdit

function subcategoriasEdit() {
    let options = ""
    switch (document.getElementById("inputGroupSelect01-2").value) {
        case "maniquies":
            for (i = 0; i < categorias.maniquies.length; i++) {
                options += `<option value="${categorias.maniquies[i]}">${categorias.maniquies[i]}</option>`
            }

            document.getElementById("inputGroupSelect03-2").innerHTML = options
            options = ""

            document.getElementById("generoManiqui2").style.display = "block";
            document.getElementById("subcategoria2").style.display = "block";    
            break;

        case "modistas": 
            document.getElementById("generoManiqui2").style.display = "none";
            document.getElementById("subcategoria2").style.display = "none";
            break;

        case "equipamiento":
            for (i = 0; i < categorias.equipamiento.length; i++) {
                options += `<option value="${categorias.equipamiento[i]}">${categorias.equipamiento[i]}</option>`
            }

            document.getElementById("inputGroupSelect03-2").innerHTML = options

            options = ""

            document.getElementById("generoManiqui2").style.display = "none";
            document.getElementById("subcategoria2").style.display = "block";    
            break;
    }
}

// Completar el formulario

function completarForm(data) {
    let options = ""
    document.getElementById("name2").value = data.name
    document.getElementById("description2").value = data.description
    document.getElementById("material2").value = data.material
    document.getElementById("price2").value = data.price
    document.getElementById("colors2").value = data.colors

    if(data.mainCategory == "maniquies") {

        for (i = 0; i < categorias.maniquies.length; i++) {
            options += `<option value="${categorias.maniquies[i]}">${categorias.maniquies[i]}</option>`
        }

        document.getElementById("inputGroupSelect03-2").innerHTML = options
        options = ""

        document.getElementById("generoManiqui2").style.display = "block";
        document.getElementById("subcategoria2").style.display = "block";
        
    } else if (data.mainCategory == "equipamiento") {
        for (i = 0; i < categorias.equipamiento.length; i++) {
            options += `<option value="${categorias.equipamiento[i]}">${categorias.equipamiento[i]}</option>`
        }

        document.getElementById("inputGroupSelect03-2").innerHTML = options

        options = ""


        document.getElementById("generoManiqui2").style.display = "none";
        document.getElementById("subcategoria2").style.display = "block";
    } else {
        document.getElementById("generoManiqui2").style.display = "none";
        document.getElementById("subcategoria2").style.display = "none";
    }
    document.getElementById("inputGroupSelect01-2").value = data.mainCategory
    document.getElementById("inputGroupSelect02-2").value = data.gender
    document.getElementById("inputGroupSelect03-2").value = data.secondCategory

}


// Validación de los campos editados (Exceptuando imagen, se entiende que ya hay una cargada previamente)

document.getElementById("name2").onblur = validarCamposCompletos2
document.getElementById("description2").onblur = validarCamposCompletos2
document.getElementById("material2").onblur = validarCamposCompletos2
document.getElementById("price2").onblur = validarCamposCompletos2
document.getElementById("colors2").onblur = validarCamposCompletos2

function validarCamposCompletos2() {
    if (document.getElementById("name2").value !== "" && document.getElementById("description2").value !== "" &&
        document.getElementById("material2").value !== "" && document.getElementById("price2").value !== "" &&
        document.getElementById("colors2").value !== "" && 
        document.getElementById("inputGroupSelect01-2").value !== "Seleccione" && document.getElementById("inputGroupSelect02-2").value !== "Seleccione" &&
        document.getElementById("inputGroupSelect03-2").value !== "Seleccione") {

        document.getElementById('confirmarEdicion').classList.remove('disabled')
        return 1

    } else {
        document.getElementById('confirmarEdicion').classList.add('disabled')
        return 0
    }
}

// Obtención y actualización de datos
document.getElementById("confirmarEdicion").onclick = editarProducto;

function editarProducto() {
    let status = validarCamposCompletos2()

    if (status == 1) {
        productoAEditar.name = document.getElementById("name2").value
        productoAEditar.description = document.getElementById("description2").value
        productoAEditar.material = document.getElementById("material2").value
        productoAEditar.price = document.getElementById("price2").value
        productoAEditar.colors = document.getElementById("colors2").value
        productoAEditar.mainCategory = document.getElementById("inputGroupSelect01-2").value
        productoAEditar.gender = document.getElementById("inputGroupSelect02-2").value
        productoAEditar.secondCategory = document.getElementById("inputGroupSelect03-2").value

        if (productoAEditar.image != imagenUrl) {
            productoAEditar.image = imagenUrl
        }

        fs.doc("products/" + idProd).update({
            "name": productoAEditar.name,
            "description": productoAEditar.description,
            "material": productoAEditar.material,
            "price": productoAEditar.price,
            "image": productoAEditar.image,
            "colors": productoAEditar.colors,
            "mainCategory": productoAEditar.mainCategory,
            "gender": productoAEditar.gender,
            "secondCategory": productoAEditar.secondCategory
        })
        .then (
            toast("edited-toast"),
            
            fs.collection("products") // Actualiza listado de productos
            .get()
            .then((snapshot) => {
                setupProducts(snapshot.docs),
                    statusSubida = 0,
                    document.getElementById('cargarProd').classList.add('disabled')
            })

        )
    } else {
        console.error("Campos incompletos")
    }
}