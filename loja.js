// Selecionar todos os botões "add"
const buttonsAdd = document.querySelectorAll('.add');

// Selecionar todos os botões "rem"
const buttonsRem = document.querySelectorAll('.rem');

// Função para incrementar a quantidade
function increment(element) {
  const quantityElement = element.parentNode.querySelector('.quant');
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
}

// Função para decrementar a quantidade
function decrement(element) {
  const quantityElement = element.parentNode.querySelector('.quant');
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 0) {
    quantity--;
    quantityElement.textContent = quantity;
  }
}

// Adicionar event listeners a todos os botões "add"
buttonsAdd.forEach(button => {
  button.addEventListener('click', () => {
    increment(button);
  });
});

// Adicionar event listeners a todos os botões "rem"
buttonsRem.forEach(button => {
  button.addEventListener('click', () => {
    decrement(button);
  });
});