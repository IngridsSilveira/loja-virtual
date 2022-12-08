const cart = [...document.querySelectorAll(".cart")];
let cartNum = document.querySelector(".cartNum");
const caixaDiv = document.getElementById("caixaDiv");


const criar = (elemento) => {
  //CRIA UM ELEMENTO BASEADO NO CLICK DO CARRINHO
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("class", "div-itens");
  novoElemento.innerHTML = elemento.id;

  //CRIA A DIV COM O A LIXEIRA
  const lixeira = document.createElement("div");
  lixeira.setAttribute("id", "lixeira");
  lixeira.innerHTML = `<i class="bi bi-trash3-fill"></i>`;

  //COLOCA OS ELEMENTOS DENTRO DAS DIVS
  novoElemento.appendChild(lixeira);
  caixaDiv.appendChild(novoElemento);

  //REMOVENDO ELEMENTOS
  const lixeiraBtn = [...document.querySelectorAll("#lixeira")];
  lixeiraBtn.map((el) => {
    el.addEventListener("click", (evt) => {
      const alvo = evt.target;
      const parenteAlvo = alvo.parentElement.parentElement;
      parenteAlvo.remove();

      if (caixaDiv.children.length >= 0) {
        cartNum.textContent = caixaDiv.children.length;
      } else if (caixaDiv.children.length == 0) {
        cartNum.textContent = caixaDiv.children.length;
      }
    });
  });
};
cart.map((el) => {
  el.addEventListener("click", (evt) => {
    //Criando o elemento
    criar(el);

    //QUANTIDADE DE VEZES QUE O ELEMENTO É CLICADO//
    if (caixaDiv.children.length >= 0) {
      cartNum.textContent = caixaDiv.children.length;
    }
  });
});
