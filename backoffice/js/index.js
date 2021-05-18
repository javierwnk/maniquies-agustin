// Log In Firebase Auth

const loginForm = document.querySelector("#login-form")

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    auth
        .signInWithEmailAndPassword(email, password)
        .then ( userCredential => {
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

