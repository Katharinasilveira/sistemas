document.addEventListener("DOMContentLoaded", () => {
    const btnCarrinho = document.getElementById("btn-carrinho");
    const carrinhoLateral = document.getElementById("carrinho-lateral");
    const contadorQuantidade = document.getElementById("contador-quantidade");
    const botoesAdicionar = document.querySelectorAll(".botao-carrinho");
    const itensCarrinho = document.getElementById("itens-carrinho");
    const totalCarrinho = document.getElementById("total-carrinho");
  
    let carrinho = [];
  
    // Abrir/fechar carrinho
    btnCarrinho.addEventListener("click", () => {
      if (carrinhoLateral.style.right === "0px") {
        carrinhoLateral.style.right = "-350px";
      } else {
        carrinhoLateral.style.right = "0px";
      }
    });
  
    // Adicionar produto ao carrinho
    botoesAdicionar.forEach((botao, index) => {
      botao.addEventListener("click", () => {
        const produto = botao.closest(".produto");
        const descricao = produto.querySelector(".descricao").innerText;
        const precoTexto = produto.querySelector(".preco").innerText.replace("R$ ", "").replace(",", ".");
        const preco = parseFloat(precoTexto);
        const imagem = produto.querySelector("img").src;
  
        // Verifica se produto já está no carrinho
        const itemExistente = carrinho.find(item => item.descricao === descricao);
  
        if (itemExistente) {
          itemExistente.quantidade++;
        } else {
          carrinho.push({
            descricao,
            preco,
            quantidade: 1,
            imagem
          });
        }
  
        atualizarCarrinho();
      });
    });
  
    // Atualizar carrinho
    function atualizarCarrinho() {
      itensCarrinho.innerHTML = "";
      let total = 0;
      let quantidadeTotal = 0;
  
      carrinho.forEach(item => {
        total += item.preco * item.quantidade;
        quantidadeTotal += item.quantidade;
  
        const divItem = document.createElement("div");
        divItem.classList.add("item-carrinho");
        divItem.innerHTML = `
          <img src="${item.imagem}" alt="${item.descricao}">
          <div class="item-carrinho-info">
            <div class="descricao">${item.descricao}</div>
            <div class="preco">R$ ${item.preco.toFixed(2).replace(".", ",")}</div>
            <div class="quantidade-container">
              <button class="btn-quantidade" data-descricao="${item.descricao}" data-acao="menos">-</button>
              <span>${item.quantidade}</span>
              <button class="btn-quantidade" data-descricao="${item.descricao}" data-acao="mais">+</button>
            </div>
          </div>
        `;
        itensCarrinho.appendChild(divItem);
      });
  
      totalCarrinho.innerText = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
      contadorQuantidade.style.display = quantidadeTotal > 0 ? "block" : "none";
      contadorQuantidade.innerText = quantidadeTotal;
  
      // Adicionar eventos para os botões + e -
      document.querySelectorAll(".btn-quantidade").forEach(btn => {
        btn.addEventListener("click", () => {
          const descricao = btn.getAttribute("data-descricao");
          const acao = btn.getAttribute("data-acao");
          const item = carrinho.find(i => i.descricao === descricao);
  
          if (acao === "mais") {
            item.quantidade++;
          } else if (acao === "menos") {
            item.quantidade--;
            if (item.quantidade <= 0) {
              carrinho = carrinho.filter(i => i.descricao !== descricao);
            }
          }
  
          atualizarCarrinho();
        });
      });
    }
  });
  // Carrossel
const carrossel = document.querySelector('.carrossel');
const imagens = document.querySelectorAll('.carrossel img');
const btnAnterior = document.querySelector('.seta-anterior');
const btnProximo = document.querySelector('.seta-proximo');

let indiceAtual = 0;

function atualizarCarrossel() {
  carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

btnAnterior.addEventListener('click', () => {
  indiceAtual = (indiceAtual === 0) ? imagens.length - 1 : indiceAtual - 1;
  atualizarCarrossel();
});

btnProximo.addEventListener('click', () => {
  indiceAtual = (indiceAtual === imagens.length - 1) ? 0 : indiceAtual + 1;
  atualizarCarrossel();
});



  
