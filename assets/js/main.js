const cart = [...document.querySelectorAll(".cart")]
let cartNum = document.querySelector(".cartNum")
const caixaDiv = document.getElementById("caixaDiv")
let count = 1

const criar = (elemento) => {
    //CRIA UM ELEMENTO BASEADO NO CLICK DO CARRINHO
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("class", "div-itens");
    novoElemento.innerHTML = elemento.id;

    //CRIA A DIV COM O A LIXEIRA
    const lixeira = document.createElement("div")
    lixeira.setAttribute("id", "lixeira")
    lixeira.innerHTML = `<i class="bi bi-trash3-fill"></i>`

    //COLOCA OS ELEMENTOS DENTRO DAS DIVS
    novoElemento.appendChild(lixeira)
    caixaDiv.appendChild(novoElemento)

    //REMOVENDO ELEMENTOS
    const lixeiraBtn = [...document.querySelectorAll("#lixeira")]
    lixeiraBtn.map((el) => {
        el.addEventListener("click", (evt) => {
            const alvo = evt.target
            const parenteAlvo = alvo.parentElement.parentElement
            parenteAlvo.remove()
            const teste = [...document.querySelectorAll(".div-itens")]
            for(let i in teste){
                console.log(teste.length)
                if(cartNum.textContent >= "1"){
                    cartNum.textContent = teste.length
                } 
            }
        })
    })
}

cart.map((el) => {
    el.addEventListener("click", (evt) => {
        //Criando o elemento
        criar(el)
        //QUANTIDADE DE VEZES QUE O ELEMENTO É CLICADO//
        cartNum.textContent = count; 
        count++;
    })
})