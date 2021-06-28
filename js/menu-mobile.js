const closeMenu = () => {
    document.getElementById("menu-mobile").style.visibility = "hidden";
    document.getElementById("main").style.display = "block"
    document.getElementById("footer").style.display = "block"
}

const maniquiesMenu = id => {

    const categorias = ["Cuerpo completo", "Colgante", "Lenceria", "Cabeza", "Piernas"]
    let html = `<div class="mobile-menu-action">
        <p onclick="subcategoryMenu(1)">Volver</p>
    </div>`
    switch (id) {
        case 0:



            categorias.forEach( (element, index) => {
                html += `<a href="catalogo.html?gender=mujer&secondCategory=${index + 1}&mainCategory=maniquies">
                            <div class="mobile-menu-item">
                                <p>${element}</p>
                            </div>
                        </a>`
            })

            html += `<a href="catalogo.html?gender=mujer&mainCategory=maniquies">
            <div class="mobile-menu-item">
                <p>Ver todo en Mujeres</p>
            </div>
            </a>`
            break;
    
        case 1:
            categorias.forEach( (element, index) => {
                html += `<a href="catalogo.html?gender=hombre&secondCategory=${index + 1}&mainCategory=maniquies">
                            <div class="mobile-menu-item">
                                <p>${element}</p>
                            </div>
                        </a>`
            })

            html += `<a href="catalogo.html?gender=hombre&mainCategory=maniquies">
            <div class="mobile-menu-item">
                <p>Ver todo en Mujeres</p>
            </div>
            </a>`
            break;
    }

    document.getElementById("menu-mobile").innerHTML = html

}

const subcategoryMenu = id => {
    const maniquies = ["Mujer", "Hombres"]
    const equipamiento = [{"id": 8, "name":"Perchas"},{"id": 9, "name":"Percheros"},{"id": 10, "name":"Portacarteras"},{"id": 11, "name":"Mensulas"},{"id": 12, "name":"Ganchos S"},{"id": 13, "name":"Cajas Registradoras"}]

    let html = `    <div class="mobile-menu-action">
                        <p onclick="categoryMenu()">Volver</p>
                    </div>`

    switch (id) {
        case 1:
            maniquies.forEach( (category, index) => {
                html += `<div class="mobile-menu-item" onclick="maniquiesMenu(${index})">
                            <p>${category} <span class="iconify" style="float: right;" data-icon="ant-design:caret-right-outlined" height="22px"></span></p>
                        </div>`
            })

            html += `
            <a href="catalogo.html?mainCategory=maniquies">
            <div class="mobile-menu-item">
                <p>Niños <span class="iconify" style="float: right;" data-icon="ant-design:caret-right-outlined" height="22px"></span></p>
            </div>
            </a>

            <a href="catalogo.html?mainCategory=maniquies">
            <div class="mobile-menu-item">
                <p>Ver todo en Maniquíes</p>
            </div>
            </a>
            `
            break;
        case 2:

            equipamiento.forEach(category => {
                html += `
                <a href="catalogo.html?mainCategory=equipamiento&secondCategory=${category.id}">
                <div class="mobile-menu-item">
                    <p>${category.name}</p>
                </div>
                </a>
                `
            })

            html += `
            <a href="catalogo.html?mainCategory=equipamiento">
            <div class="mobile-menu-item">
                <p>Ver todo en Equipamiento Comercial</p>
            </div>
            </a>
            `
        
            break;
    }

    document.getElementById("menu-mobile").innerHTML = html
}

const categoryMenu = () => {
    document.getElementById("menu-mobile").innerHTML = `
    <div class="mobile-menu-action">
        <p onclick="displayMainMenu()">Volver</p>
    </div>

    <div class="mobile-menu-item" onclick="subcategoryMenu(1)">
        <p>Maniquies <span class="iconify" style="float: right;" data-icon="ant-design:caret-right-outlined" height="22px"></span></p>
    </div>

    <a href="catalogo.html?mainCategory=modistas">
    <div class="mobile-menu-item">
        <p>Modista <span class="iconify" style="float: right;" data-icon="ant-design:caret-right-outlined" height="22px"></span></p>
    </div>
    </a>

    <div class="mobile-menu-item" onclick="subcategoryMenu(2)">
    <p>Equipamiento Comercial <span class="iconify" style="float: right;" data-icon="ant-design:caret-right-outlined" height="22px"></span></p>
    </div>

    <a href="catalogo.html?all=true">
        <div class="mobile-menu-item">
            <p>Ver todos los productos</p>
        </div>
    </a>
`
}

const displayMainMenu = () => {
    document.getElementById("menu-mobile").style.visibility = "visible";

   document.getElementById("menu-mobile").innerHTML = `
        <div class="mobile-menu-action">
            <span class="iconify" onclick="closeMenu()" data-icon="clarity:close-line" height="22px"></span>
        </div>
        <a href="index.html">
            <div class="mobile-menu-item">
                <p>Inicio</p>
            </div>
        </a>
        <div class="mobile-menu-item" onclick="categoryMenu()">
            <p>Productos <span class="iconify" style="float: right;" data-icon="ant-design:caret-right-outlined" height="22px"></span></p>
        </div>
        <a href="about.html">
            <div class="mobile-menu-item">
                <p>Sobre nosotros</p>
            </div>
        </a>
        <a href="faq.html">
            <div class="mobile-menu-item">
                <p>Preguntas Frecuentes</p>
            </div>
        </a>
        <a href="contacto.html">
            <div class="mobile-menu-item">
                <p>Contacto</p>
            </div>
        </a>
    `


}


document.getElementById("hamburger").addEventListener("click", () => {
    displayMainMenu()
    document.getElementById("main").style.display = "none"
    document.getElementById("footer").style.display = "none"
})