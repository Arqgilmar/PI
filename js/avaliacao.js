document.addEventListener("DOMContentLoaded", function () {
    // Simulando dados de avaliações
    const avaliacoes = {
        1: 3,   // 3 pessoas deram 1 estrela
        2: 5,   // 5 pessoas deram 2 estrelas
        3: 10,  // 10 pessoas deram 3 estrelas
        4: 20,  // 20 pessoas deram 4 estrelas
        5: 50   // 50 pessoas deram 5 estrelas
    };

    // Verificando se os elementos existem antes de tentar acessá-los
    const mediaNotaEl = document.getElementById("media-nota");
    const totalAvaliacoesEl = document.getElementById("total-avaliacoes");

    if (!mediaNotaEl || !totalAvaliacoesEl) {
        console.error("Erro: Elementos de nota ou total de avaliações não encontrados no DOM.");
        return;
    }

    // Calculando total de avaliações
    const totalAvaliacoes = Object.values(avaliacoes).reduce((a, b) => a + b, 0);

    // Calculando a média das notas
    const mediaNota = (
        (avaliacoes[1] * 1 + avaliacoes[2] * 2 + avaliacoes[3] * 3 +
         avaliacoes[4] * 4 + avaliacoes[5] * 5) / totalAvaliacoes
    ).toFixed(1);

    // Atualizando a interface com os valores calculados
    mediaNotaEl.innerText = mediaNota;
    totalAvaliacoesEl.innerText = totalAvaliacoes;

    // Atualizando distribuição das avaliações
    for (let i = 1; i <= 5; i++) {
        const countEl = document.getElementById(`count-${i}`);
        const barEl = document.getElementById(`bar-${i}`);

        if (!countEl || !barEl) {
            console.warn(`Aviso: Elementos da barra de avaliação ${i} não encontrados.`);
            continue;
        }

        const count = avaliacoes[i] || 0;
        countEl.innerText = count;
        const percentage = totalAvaliacoes > 0 ? (count / totalAvaliacoes) * 100 : 0;
        barEl.style.width = `${percentage}%`;
    }

    console.log("Média de nota calculada:", mediaNota);
    console.log("Total de avaliações:", totalAvaliacoes);
});

