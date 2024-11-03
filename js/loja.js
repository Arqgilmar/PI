function atualizarCalculo() {
  // Seleciona os elementos com as classes 'quant' e 'calc'
  const quantElement = document.querySelector('.quant');
  const calcElement = document.querySelector('.calc');

  // Obtém o valor atual de 'quant' e converte para número
  const valorQuant = Number(quantElement.textContent);

  // Calcula o resultado da multiplicação e formata como real
  const resultado = valorQuant * 5;
  const valorFormatado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Atualiza o conteúdo de 'calc' com o valor formatado
  calcElement.textContent = valorFormatado;
}

// Função para adicionar 1 ao valor
function adicionar() {
  // Seleciona o elemento com a classe 'quant'
  const quantElement = document.querySelector('.quant');

  // Obtém o valor atual do elemento e converte para número
  let valorAtual = Number(quantElement.textContent);

  // Incrementa o valor em 1
  valorAtual++;

  // Atualiza o conteúdo do elemento com o novo valor
  quantElement.textContent = valorAtual;

  atualizarCalculo();
}

// Função para remover 1 do valor
function remover() {
  // Seleciona o elemento com a classe 'quant'
  const quantElement = document.querySelector('.quant');

  // Obtém o valor atual do elemento e converte para número
  let valorAtual = Number(quantElement.textContent);

  // Decrementa o valor em 1, mas impede que o valor seja negativo
  valorAtual = Math.max(0, valorAtual - 1);

  // Atualiza o conteúdo do elemento com o novo valor
  quantElement.textContent = valorAtual;

  atualizarCalculo();
}

// Adiciona um ouvinte de evento para o botão com a classe 'add'
const botaoAdicionar = document.querySelector('.add');
botaoAdicionar.addEventListener('click', adicionar);

// Adiciona um ouvinte de evento para o botão com a classe 'rem'
const botaoRemover = document.querySelector('.rem');
botaoRemover.addEventListener('click', remover);
