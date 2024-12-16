// Selecionando os elementos do formulário
const form = document.querySelector('.content_body_2');
const inputs = form.querySelectorAll('input, textarea');
const button = form.querySelector('button');
const iframe = document.querySelector('iframe');

// Função 1: Validação do formulário
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita envio padrão
    let isValid = true;

    // Verifica se todos os campos estão preenchidos
    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            input.style.border = '2px solid red'; // Destaca o campo vazio
            isValid = false;
        } else {
            input.style.border = '2px solid green'; // Indica que o campo está preenchido
        }
    });

    // Exibe mensagem de erro ou sucesso
    if (isValid) {
        alert('Formulário enviado com sucesso!');
        form.reset(); // Limpa o formulário após o envio
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

// Função 2: Exibir mensagem de confirmação
button.addEventListener('click', () => {
    const allFilled = Array.from(inputs).every((input) => input.value.trim() !== '');
    if (allFilled) {
        alert('Obrigado por entrar em contato! Vamos responder em breve.');
    }
});

// Função 3: Interatividade com o mapa
// Função 3: Interatividade com o mapa
const mapControls = document.createElement('div');
mapControls.style.margin = '10px auto';
mapControls.style.textAlign = 'center';
form.parentElement.appendChild(mapControls); // Adiciona controles após o formulário

// Botões de zoom com o estilo atualizado para ficar igual ao padrão do seu código
['Zoom In', 'Zoom Out', 'Reset'].forEach((label) => {
    const button = document.createElement('button');
    button.innerText = label;
    button.style.margin = '5px';
    button.style.padding = '10px';
    button.style.borderRadius = '20px'; // Seguindo o estilo do seu botão
    button.style.border = 'none'; // Retira a borda do botão
    button.style.backgroundColor = '#7075'; // Cor de fundo igual ao seu código
    button.style.color = '#fff'; // Cor do texto
    mapControls.appendChild(button);

    button.addEventListener('click', () => {
        let src = new URL(iframe.src); // Manipula a URL do iframe

        if (label === 'Zoom In') {
            src.searchParams.set('z', '10'); // Ajuste de zoom (mais próximo)
        } else if (label === 'Zoom Out') {
            src.searchParams.set('z', '5'); // Ajuste de zoom (mais distante)
        } else {
            src.searchParams.delete('z'); // Remove o zoom para resetar
        }

        iframe.src = src.toString(); // Atualiza a URL do iframe
    });
});


// Função 4: Efeitos de animação
inputs.forEach((input) => {
    input.addEventListener('focus', () => {
        input.style.backgroundColor = '#e6f7ff'; // Foco: fundo azul claro
    });

    input.addEventListener('blur', () => {
        input.style.backgroundColor = 'white'; // Perde o foco: fundo branco
    });
});
