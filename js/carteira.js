//Botão esconder e mostrar valores
const valorDinheiro = document.getElementById('valor-dinheiro'); const valorMcoins = document.getElementById('valor-mcoins'); const botao1 = document.getElementById('botao1'); 
const botao2 = document.getElementById('botao2'); 

let dinheiroVisivel = true; 
let mcoinsVisivel = true; 

botao1.addEventListener('click', () => {
    if (dinheiroVisivel) { 
        valorDinheiro.textContent = '- - -'; 
        dinheiroVisivel = false; 
    } else { 
        valorDinheiro.textContent = 'R$ 110,00';
        dinheiroVisivel = true; 
    } 
}); 

botao2.addEventListener('click', () => {
    if (mcoinsVisivel) { 
        valorMcoins.textContent = '- - -'; 
        mcoinsVisivel = false; 
    } else { 
        valorMcoins.textContent = '20 un';
        mcoinsVisivel = true; 
    } 
});