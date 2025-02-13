document.addEventListener('DOMContentLoaded', () => {
    const perguntas = document.querySelectorAll('.item-pergunta');
    const campoPesquisa = document.getElementById('campo-pesquisa');

    perguntas.forEach(pergunta => {
        const itemPergunta = pergunta.parentElement; // O div que contém a pergunta e a resposta
        const resposta = itemPergunta.querySelector('.resposta'); // Seleciona a resposta dentro do mesmo item
        const seta = itemPergunta.querySelector('.icone-seta'); // Seleciona a seta

        pergunta.addEventListener('click', () => {
            // Alterna a exibição da resposta
            resposta.style.display = resposta.style.display === 'block' ? 'none' : 'block';

            // Rotaciona a seta
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
                item.style.display = "block"; // Mostra a pergunta correspondente
            } else {
                item.style.display = "none"; // Esconde as que não correspondem
            }
        });
    });
});