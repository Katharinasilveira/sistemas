
    /* ==== INTERAÇÃO JAVASCRIPT ==== */
    document.addEventListener("DOMContentLoaded", () => {
        const cartoes = document.querySelectorAll(".cartao-foto");

        cartoes.forEach((cartao) => {
            /* // ELEMENTOS DOS CARTOES */
            const botaoCurtir = cartao.querySelector(".botao-curtir");
            const contadorCurtidas = cartao.querySelector(".contador-curtidas");
            const botaoComentarios = cartao.querySelector(".botao-comentarios");
            const contadorComentarios = cartao.querySelector(".contador-comentarios");
            const secaoComentarios = cartao.querySelector(".secao-comentarios");
            const entradaComentario = cartao.querySelector(".entrada-comentario");
            const botaoAdicionarComentario = cartao.querySelector(".botao-adicionar-comentario");
            const listaComentarios = cartao.querySelector(".lista-comentarios");

            let totalCurtidas = 0;
            let totalComentarios = 0;

            /* // CURTIR */
            botaoCurtir.addEventListener("click", () => {
                totalCurtidas++;
                contadorCurtidas.textContent = totalCurtidas;
                botaoCurtir.classList.add("curtido"); // animação rápida
                setTimeout(() => botaoCurtir.classList.remove("curtido"), 300);
            });

            /* // MOSTRAR E OCULTAR COMENTÁRIO */
            botaoComentarios.addEventListener("click", () => {
                secaoComentarios.classList.toggle("ativa");
            });

            /* // ADICIONAR COMENTÁRIO */
            botaoAdicionarComentario.addEventListener("click", () => {
                const texto = entradaComentario.value.trim();
                if (texto) {
                    const li = document.createElement("li");
                    li.textContent = texto;
                    listaComentarios.appendChild(li);

                    entradaComentario.value = "";

                    totalComentarios++;
                    contadorComentarios.textContent = totalComentarios;
                }
            });
        });
    });