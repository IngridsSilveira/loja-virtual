const cart = [...document.querySelectorAll(".cart")]
let cartNum = document.querySelector(".cartNum")
let count = 0
cart.map((el) => {
    el.addEventListener("click", (evt) => {
        const divFather = evt.target.parentElement.parentElement;

        
        //QUANTIDADE DE VEZES QUE O ELEMENTO É CLICADO//
        cartNum.textContent = count; 
        count++;
    })
})