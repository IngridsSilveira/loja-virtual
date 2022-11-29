const cart = [...document.querySelectorAll(".cart")]
let cartNum = document.querySelector(".cartNum")
const teste = document.getElementById("teste")
let count = 0

cart.map((el) => {
    el.addEventListener("click", (evt) => {
        const elementoId = el.id
        teste.append(el.id)

        //QUANTIDADE DE VEZES QUE O ELEMENTO É CLICADO//
        cartNum.textContent = count; 
        count++;
    })
})