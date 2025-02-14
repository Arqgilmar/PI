document.addEventListener('DOMContentLoaded', () => {
    const perguntas = document.querySelectorAll('.item-pergunta');
    const campoPesquisa = document.getElementById('campo-pesquisa');

    perguntas.forEach(pergunta => {
        const itemPergunta = pergunta.parentElement;
        const resposta = itemPergunta.querySelector('.resposta');
        const seta = itemPergunta.querySelector('.icone-seta');

        pergunta.addEventListener('click', () => {
            resposta.style.display = resposta.style.display === 'block' ? 'none' : 'block';
            seta.classList.toggle('rotacionada');
        });
    });

    campoPesquisa.addEventListener('input', () => {
        const query = campoPesquisa.value.toLowerCase();
        document.querySelectorAll('.item').forEach(item => {
            const pergunta = item.querySelector('.pergunta').textContent.toLowerCase();
            item.style.display = pergunta.includes(query) ? 'block' : 'none';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const campoPesquisa = document.getElementById("campo-pesquisa");
    const itens = document.querySelectorAll(".item");

    campoPesquisa.addEventListener("input", function () {
        const termoBusca = campoPesquisa.value.toLowerCase();

        itens.forEach((item) => {
            const pergunta = item.querySelector(".pergunta").innerText.toLowerCase();

            if (pergunta.includes(termoBusca)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});