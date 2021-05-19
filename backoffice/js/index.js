const loggedOut = document.querySelectorAll(".logged-out")

const loggedIn = document.querySelectorAll(".logged-in")

// Log in check

const loginCheck = user => {
    if(user) {
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
                    <div class="card" style="width: 18rem;">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price}</p>
                            <a href="#" class="btn btn-secondary">Editar</a>
                            <a href="#" class="btn btn-danger">Eliminar</a>

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