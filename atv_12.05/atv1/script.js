function configurar() {
    let nomeCompleto = document.getElementById('nomeCompleto');
    let validarNome = document.getElementById('validarNome');

    if ((nomeCompleto instanceof HTMLInputElement) && (validarNome instanceof HTMLButtonElement)) {
        validarNome.addEventListener('click', () => {
            validarNomeCompleto(nomeCompleto.value);
        });
    }
}

function validarNomeCompleto(nome) {
    let regex = /^[A-Za-z]+( [A-Za-z]+)+$/;

    if (regex.test(nome)) {
        exibirResultado("Nome válido!");
    } else {
        exibirResultado("Nome inválido! (apenas letras e espaços)");
    }
}

function exibirResultado(resultado) {
    let saida = document.getElementById('resultado');

    if (saida instanceof HTMLParagraphElement) {
      saida.textContent = resultado;  
    }
}

document.addEventListener('DOMContentLoaded', configurar);
