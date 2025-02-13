document.addEventListener('DOMContentLoaded', () => {
    const perguntas = document.querySelectorAll('.pergunta');
    const campoPesquisa = document.getElementById('campo-pesquisa');

    perguntas.forEach(pergunta => {
        // A seta é o próximo elemento irmão dentro da mesma div
        const itemPergunta = pergunta.parentElement; // O div que contém a pergunta e a seta
        const seta = itemPergunta.querySelector('.icone-seta'); // Seleciona a seta

        pergunta.addEventListener('click', () => {
            const resposta = itemPergunta.nextElementSibling; // A resposta é o próximo irmão

            // Alterna a exibição da resposta
            resposta.style.display = resposta.style.display === 'block' ? 'none' : 'block';

            // Rotaciona ou reverte a rotação da seta
            seta.classList.toggle('rotacionada');
        });
    });

    campoPesquisa.addEventListener('input', () => {
        const query = campoPesquisa.value.toLowerCase();
        perguntas.forEach(pergunta => {
            const item = pergunta.parentElement; // O div que contém a pergunta e a resposta
            const isMatch = pergunta.textContent.toLowerCase().includes(query);
            item.style.display = isMatch ? 'block' : 'none';
        });
    });
});