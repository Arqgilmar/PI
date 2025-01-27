document.addEventListener("DOMContentLoaded", function () {
  // Inicializa todos os itens como visíveis
  const items = document.querySelectorAll(".itens");
  items.forEach((item) => {
    item.classList.add("active");
  });
});

// Adiciona evento de clique ao container dos botões
document.querySelector(".button-container").addEventListener("click", function (event) {
  if (event.target.classList.contains("botao")) {
    const filter = event.target.getAttribute("data-filter"); // Obtém o filtro do botão clicado
    const items = document.querySelectorAll(".itens"); // Seleciona todos os itens da lista

    // Itera pelos itens e aplica/remover a classe "active"
    items.forEach((item) => {
      if (item.classList.contains(filter)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
});

  
  