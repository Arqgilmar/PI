document.addEventListener("DOMContentLoaded", () => {
  const itens = document.querySelectorAll(".itens");

  // Torna todos visíveis por padrão
  itens.forEach(item => item.classList.add("active"));

  // Filtro por botão
  const containerBotoes = document.querySelector(".button-container");
  if (containerBotoes) {
    containerBotoes.addEventListener("click", event => {
      if (event.target.classList.contains("botao")) {
        const filtro = event.target.getAttribute("data-filter");
        itens.forEach(item => {
          if (filtro === "todos" || item.classList.contains(filtro)) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  }

  // Clique no item para abrir/fechar descrição, garantindo apenas um aberto por vez
  itens.forEach(item => {
    item.addEventListener("click", () => {
      // Fecha todos os outros
      document.querySelectorAll(".itens.open").forEach(outro => {
        if (outro !== item) {
          outro.classList.remove("open");
        }
      });

      // Alterna a descrição do item clicado
      item.classList.toggle("open");
    });
  });
});
