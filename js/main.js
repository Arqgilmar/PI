//JS LOGIN
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

//JS FEED
let currentIndex1 = 0;
let currentIndex2 = 0;

function showSlide(id, index) {
    const carrossel = document.getElementById(id);
    const totalSlides = carrossel.children.length;
    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }
    carrossel.style.transform = 'translateX(' + (-index * 100) + '%)';
    if (id === 'carrossel1') {
        currentIndex1 = index;
    } else if (id === 'carrossel2') {
        currentIndex2 = index;
    }
}

function nextSlide(id) {
    if (id === 'carrossel1') {
        showSlide(id, currentIndex1 + 1);
    } else if (id === 'carrossel2') {
        showSlide(id, currentIndex2 + 1);
    }
}

function prevSlide(id) {
    if (id === 'carrossel1') {
        showSlide(id, currentIndex1 - 1);
    } else if (id === 'carrossel2') {
        showSlide(id, currentIndex2 - 1);
    }
}




//JS CADASTRO
const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const sobrenomeSocial = document.getElementById('sobrenomeSocial').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const rg = document.getElementById('rg').value;
    const cpf = document.getElementById('cpf').value;   

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;   

    const etnia = document.getElementById('etnia').value;
    const genero = document.getElementById('genero').value;

    if (!nome) {
        alert('O campo nome é obrigatório.');
        return false;
    }

    if (!sobrenome) {
        alert('O campo sobrenome é obrigatório.');
        return false;
    }

    if (!dataNascimento) {
        alert('O campo data de nascimento é obrigatório.');
        return false;
    }

    if (!rg) {
        alert('O campo RG é obrigatório.');
        return false;
    }

    if (!cpf) {
        alert('O campo CPF é obrigatório.');
        return false;
    }

    if (!email) {
        alert('O campo email é obrigatório.');
        return false;
    }

    if (!senha) {
        alert('O campo senha é obrigatório.');
        return false;   

    }

    if (!etnia) {
        alert('O campo etnia é obrigatório.');
        return false;
    }

    if (!genero) {
        alert('O campo gênero é obrigatório.');
        return false;
    }

    // Validação de email (simplificada)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Digite um email válido.');
        return false;
    }

    // Validação de senha (mínimo de 8 caracteres)
    if (senha.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return false;
    }

    alert('Formulário válido! Dados enviados.');
    return true;
});



//JS NOVA SOLICITAÇÃO
const form = document.getElementById('form-solicitacao');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtenha os dados do formulário
  const servico = document.getElementById('servico').value;
  const problema = document.getElementById('problema').value;
  const fotos = document.getElementById('fotos').files;

  // Crie um objeto com os dados do formulário
  const formData = new FormData();
  formData.append('servico', servico);
  formData.append('problema', problema);
  for (let i = 0; i < fotos.length; i++) {
    formData.append('fotos', fotos[i]);
  }

  // Envie os dados para o servidor (substitua a URL pelo seu endpoint)
  fetch('/seu-endpoint', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao enviar os dados');
    }
    return response.json();
  })
  .then(data => {
    console.log('Dados enviados com sucesso:', data);
    // Exibir mensagem de sucesso para o usuário
  })
  .catch(error => {
    console.error('Erro:', error);
    // Exibir mensagem de erro para o usuário
  });
});