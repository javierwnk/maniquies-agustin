// Obtener datos del local storage

let carrito = JSON.parse(localStorage.getItem("carrito"))

// Validación de la tabla
const validarTabla = () => {
    if(!localStorage.getItem("carrito")) {
        document.getElementById("step1").innerHTML = `<p style="color: #5F5C59; text-align: center; font-size: 24px;">No hay productos agregados al carrito</p>
        <a style="text-decoration: none;" href="catalogo.html?all=true"><button class="btn-principal" style="margin: 44px auto;">Ver productos</button></a>
        `
        return false
    }

    return true
    
}


// Cargar la tabla

let totalCarrito = 0
let listado = ""

const displayCart = () => {


    validarTabla()


    carrito.forEach((producto, index) => {
        totalCarrito += Number(producto.price) * Number(producto.cantidad)
        listado += `<tr>
                        <th scope="row" class="product-info-2 align-middle"><img src="${producto.image}"> <p>${producto.name}</p></th>
                        <td class="align-middle">$${producto.price}</td>
                        <td class="align-middle">${producto.cantidad}</td>
                        <td class="align-middle">$${producto.price * producto.cantidad}</td>
                        <td class="align-middle"><span class="iconify delete-btn" style="font-size: 1.5rem;" onclick="deleteProducto(${index})" data-icon="ant-design:delete-outlined" data-inline="false"></span></td>
                    </tr>`
    });
    
    listado += `<tr>
                <th scope="row" class="product-info-2 align-middle"><p>TOTAL:</p></th>
                <td class="align-middle"></td>
                <td class="align-middle"></td>
                <td class="align-middle"></td>
                <td class="align-middle">$${totalCarrito}</td>
                </tr>`
    
    if(validarTabla())
    document.getElementById("cart-product-list").innerHTML = listado
    

}

displayCart()


// Delete action

const deleteProducto = (index) => {

    carrito.splice(index, 1) // elimino el producto del array
    listado = ""
    totalCarrito = 0
    debugger
    localStorage.setItem("carrito",JSON.stringify(carrito))
    if (localStorage.getItem("carrito") == "[]")
    localStorage.removeItem("carrito")

    displayCart()
}

// Resumen

const displayResume = () => {

    let resumenTotal = 0
    let listadoResumen = "<h3>Resumen del pedido</h3>"

    carrito.forEach(producto => {
        resumenTotal += Number(producto.price) * Number(producto.cantidad)
        listadoResumen += `<div class="resume-product">
                            <img src="${producto.image}">
                            <div class="resume-details align-middle">
                                <p class="resume-title">${producto.name}</p>
                                <p class="grey resume-price">Subtotal: $${producto.price * producto.cantidad}</p>
                                <p class="grey resume-qty">Cantidad: ${producto.cantidad}</p>
                            </div>
                            
                        </div>`
    });

    listadoResumen += `<div class="resume-total">
                            <p>Total: $${resumenTotal}</p>
                        </div>`

    document.getElementById("resumen").innerHTML = listadoResumen
}



// Cambio de paso en el carrtito

document.getElementById("next").addEventListener("click", () => {
    document.getElementById("step1").style = "display: none;"
    document.getElementById("step2").style = "display: block;"

    displayResume()

})

document.getElementById("back").addEventListener("click", () => {
    document.getElementById("step1").style = "display: block;"
    document.getElementById("step2").style = "display: none;"

})

// Form del carrito

const validarForm = () => {
    if(document.getElementById("name").value != "" &&
    document.getElementById("lastname").value != "" &&
    document.getElementById("dni").value != "" &&
    document.getElementById("phone").value != "" &&
    document.getElementById("city").value != "" &&
    document.getElementById("state").value != "") {

        document.getElementById("send").disabled = false
    } else {
        document.getElementById("send").disabled = true

    }
}

document.getElementById("name").addEventListener("blur", validarForm)
document.getElementById("lastname").addEventListener("blur", validarForm)
document.getElementById("dni").addEventListener("blur", validarForm)
document.getElementById("phone").addEventListener("blur", validarForm)
document.getElementById("city").addEventListener("blur", validarForm)
document.getElementById("state").addEventListener("blur", validarForm)

document.getElementById("send").addEventListener("click", (evt) => {
    evt.preventDefault();
    sentOrder()
    window.open("success.html", "_self")
    localStorage.removeItem("carrito")
})

const sentOrder = () => {
    // Se completa mensaje de whatsapp

    mensaje = `¡Hola Maniquies Agustin!%0ASoy ${document.getElementById("name").value} ${document.getElementById("lastname").value} y me gustaría hacerte este pedido:%0A%0A`

    carrito.forEach(producto => {
        mensaje += `Producto: *${producto.name}* %0APrecio unitario: $${producto.price}%0ACantidad: ${producto.cantidad}%0ASubtotal: $${producto.cantidad * producto.price}%0A%0A`
    });

    mensaje += `%0A*Total de la compra: $${totalCarrito}*%0A%0AMis datos son:%0ADNI: ${document.getElementById("dni").value}%0ATeléfono:  ${document.getElementById("phone").value}%0ASoy de: ${document.getElementById("city").value}, ${document.getElementById("state").value}%0A¡Muchas gracias!`

    window.open(`https://api.whatsapp.com/send?phone=541130333174&text=${mensaje}`)
    
}