const loggedOut = document.querySelectorAll(".logged-out")

const loggedIn = document.querySelectorAll(".logged-in")

// Log in check

const loginCheck = user => {
    if (user) {
        loggedIn.forEach(component => component.style.display = "block")
        loggedOut.forEach(component => component.style.display = "none")
    } else {
        loggedIn.forEach(component => component.style.display = "none")
        loggedOut.forEach(component => component.style.display = "block")
    }
}

// Log In Firebase Auth

const loginForm = document.querySelector("#login-form")

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            // Clear form

            loginForm.reset();

            // close modal
            var loginModal = new bootstrap.Modal(document.getElementById('loginModal'))
            loginModal.hide();

        })

})

// Logout Firebase Auth
const logout = document.querySelector("#logout")

logout.addEventListener("click", e => {
    e.preventDefault();

    auth.signOut().then(() => {
        console.log("Deslogeo exitoso")
    })
})




// Obtener datos de Firebase Firestore

const productList = document.querySelector(".productList");

const setupProducts = data => {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const product = doc.data()
            const card = `
                    <div class="card" id="${doc.id}" style="width: 18rem;">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">$${product.price}</p>
                            <a href="#" class="btn btn-secondary">Editar</a>
                            <a href="#" class="btn btn-danger" id="delete-btn" onclick="eliminarProducto('${doc.id}', '${product.name}')">Eliminar</a>

                        </div>
                    </div>`;

            html += card

        });

        productList.innerHTML = html
    } else {
        let html = "<p>Inicie sesión para administrar el sitio web</p>"
        productList.innerHTML = html
    }
}

// Alta de producto

document.getElementById("cargarProd").onclick = cargarProducto;

// funciones para validar que los campos esten completos
document.getElementById("name").onblur = validarCamposCompletos
document.getElementById("description").onblur = validarCamposCompletos
document.getElementById("material").onblur = validarCamposCompletos
document.getElementById("price").onblur = validarCamposCompletos
document.getElementById("colors").onblur = validarCamposCompletos
document.getElementById("formFile").onblur = validarCamposCompletos
document.getElementById("inputGroupSelect01").onchange = subcategorias

let categorias = {
    "maniquies": ["Cuerpo completo", "Colgante", "Bustos", "Lenceria", "Cabeza", "Piernas", "Fibra de vidrio"],
    "equipamiento": ["Perchas", "Percheros", "Portacarteras", "Mensulas", "Ganchos S", "Cajas Registradoras"]
}

function subcategorias() {
    let options = ""
    switch (document.getElementById("inputGroupSelect01").value) {
        case "maniquies":
            for (i = 0; i < categorias.maniquies.length; i++) {
                options += `<option value="${categorias.maniquies[i]}">${categorias.maniquies[i]}</option>`
            }
            document.getElementById("generoManiqui").innerHTML = `
            <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect02">Genero del Maniqui</label>
            <select class="form-select" id="inputGroupSelect02" required>
              <option selected>Seleccione</option>
              <option value="mujer">Mujer</option>
              <option value="mujer">Hombre</option>
              <option value="mujer">Niños</option>
            </select>
          </div>

            `

            document.getElementById("subcategoria").innerHTML = `
            <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect03">Categoria Secundaria</label>
            <select class="form-select" id="inputGroupSelect03" required>
              <option selected>Seleccione</option>
              ${options}
            </select>
          </div>

            `
            options = ""
            break;
        case "modistas":
            document.getElementById("generoManiqui").innerHTML = `
            <div class="input-group mb-3" style="display: none">
            <label class="input-group-text" for="inputGroupSelect02">Genero del Maniqui</label>
            <select class="form-select" id="inputGroupSelect02" required>
              <option value="null" selected>null</option>
            </select>
          </div>
            `

            document.getElementById("subcategoria").innerHTML = `
            <div class="input-group mb-3" style="display: none">
            <label class="input-group-text" for="inputGroupSelect03">Categoria Secundaria</label>
            <select class="form-select" id="inputGroupSelect03" required>
              <option value="null" selected>null</option>
            </select>
          </div>

            `
            break;
        case "equipamiento":
            for (i = 0; i < categorias.equipamiento.length; i++) {
                options += `<option value="${categorias.equipamiento[i]}">${categorias.equipamiento[i]}</option>`
            }
            document.getElementById("generoManiqui").innerHTML = `
            <div class="input-group mb-3" style="display: none">
            <label class="input-group-text" for="inputGroupSelect02">Genero del Maniqui</label>
            <select class="form-select" id="inputGroupSelect02" required>
              <option value="null" selected>null</option>
            </select>
          </div>
        `

            document.getElementById("subcategoria").innerHTML = `
            <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect03">Categoria Secundaria</label>
            <select class="form-select" id="inputGroupSelect03" required>
              <option selected>Seleccione</option>
              ${options}
            </select>
          </div>

            `
            options = ""
            break;
    }
}

function validarCamposCompletos() {
    if (document.getElementById("name").value !== "" && document.getElementById("description").value !== "" &&
        document.getElementById("material").value !== "" && document.getElementById("price").value !== "" &&
        document.getElementById("colors").value !== "" && statusSubida != 0 &&
        document.getElementById("inputGroupSelect01").value !== "Seleccione" && document.getElementById("inputGroupSelect02").value !== "Seleccione" &&
        document.getElementById("inputGroupSelect03").value !== "Seleccione") {

        document.getElementById('cargarProd').classList.remove('disabled')
        return 1

    } else {
        document.getElementById('cargarProd').classList.add('disabled')
        return 0
    }
}

const altaForm = document.querySelector("#alta-form") // Sirve para limpiar el form mas adelante

// Manejo de subida de la imagen
document.getElementById("formFile").onchange = cargarImagen

let imagenUrl = "" // url de imagen
let statusSubida = 0

function cargarImagen(event) {

    // Obtener el archivo
    const file = event.target.files[0]

    // Crear referencia en Cloud Storage
    const ref = stg.ref("images/" + file.name)

    // Subir el archivo
    const upload = ref.put(file)

    // Supervición del proceso
    upload.on("state_changed",
        function progress(snapshot) {
            console.warn((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            document.getElementById("statusSubida").innerText = "Subiendo..."
        },
        function error(error) {
            document.getElementById("statusSubida").innerText = "Error al subir la imagen"
        },
        function complete() {
            document.getElementById("statusSubida").innerText = "Imagen cargada exitosamente"
            statusSubida = 1
            validarCamposCompletos()
            console.info("Finished uploading!")
            ref.getDownloadURL()
                .then(url => {
                    imagenUrl = url
                })
                .catch(error => {
                    console.error(error)
                })
        }
    )
}


function cargarProducto() {

    let status = validarCamposCompletos()

    if (status == 1) {
        let productoNuevo = {
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

        productoNuevo.name = document.getElementById("name").value
        productoNuevo.description = document.getElementById("description").value
        productoNuevo.material = document.getElementById("material").value
        productoNuevo.price = document.getElementById("price").value
        productoNuevo.colors = document.getElementById("colors").value
        productoNuevo.mainCategory = document.getElementById("inputGroupSelect01").value
        productoNuevo.gender = document.getElementById("inputGroupSelect02").value
        productoNuevo.secondCategory = document.getElementById("inputGroupSelect03").value

        productoNuevo.image = imagenUrl

        fs.collection('products').add(productoNuevo)
            .then(
                toast("created-toast"),

                altaForm.reset(), // Resetea formulario de alta

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


// Eliminación de productos

function eliminarProducto(id, name) {
    let m = confirm(`¿Está seguro que desea eliminar el producto ${name}? Esta acción no se puede revertir.`)
    var card = document.getElementById(id);
    if (m == 1) {
        fs.collection("products").doc(id).delete()
            .then(
                eliminarCard(id),
                toast("delete-toast")
            )
    }
}

//Eliminación de card
function eliminarCard(id) {
    let card = document.getElementById(id);
    padre = card.parentNode,
        padre.removeChild(card)
}

function toast(toast) {
    let toastHTMLElement = document.getElementById(toast);
    var toastElement = new bootstrap.Toast(toastHTMLElement, { animation: true, delay: 2000 })

    toastElement.show()
}


// Events
// list or auth state changes

auth.onAuthStateChanged(user => {
    if (user) {
        // Consulta a firestore si está auth
        fs.collection("products")
            .get()
            .then((snapshot) => {
                setupProducts(snapshot.docs)
                loginCheck(user)
            })
    } else {
        console.log("sign out")
        setupProducts([])
        loginCheck(user)
    }
})
