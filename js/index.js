
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