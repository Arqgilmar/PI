document.addEventListener("DOMContentLoaded", function () {
    const estrelas = document.querySelectorAll(".estrela");
    const notaMediaEl = document.getElementById("nota-media");
    
    let notaSelecionada = 0;

    estrelas.forEach(estrela => {
        estrela.addEventListener("mouseover", function () {
            const valor = this.getAttribute("data-valor");
            destacarEstrelas(valor);
        });

        estrela.addEventListener("mouseout", function () {
            destacarEstrelas(notaSelecionada);
        });

        estrela.addEventListener("click", function () {
            notaSelecionada = this.getAttribute("data-valor");
            notaMediaEl.innerText = notaSelecionada;
        });
    });

    function destacarEstrelas(nota) {
        estrelas.forEach(estrela => {
            if (estrela.getAttribute("data-valor") <= nota) {
                estrela.classList.add("ativa");
            } else {
                estrela.classList.remove("ativa");
            }
        });
    }
});
