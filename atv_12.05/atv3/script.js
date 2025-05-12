function configurar(){
    let padraoSenha = document.getElementById('padraoSenha');
    let validarBtn = document.getElementById('validarBtn');

    if ((padraoSenha instanceof HTMLInputElement) && (validarBtn instanceof HTMLButtonElement)){

            validarBtn.addEventListener('click', () => {
                validarCredenciais(padraoSenha.value);
            });
        }
    }

    function validarCredenciais(senha){
        let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}$/


        if (regex.test(senha)) {
            exibirResultado("Senha válida!")
        }else{
            exibirResultado("Senha inválida!")
     }
}

function exibirResultado(resultado) {
    console.log("Resultado:", resultado);

    let saida = document.getElementById('resultado');

    if (saida instanceof HTMLParagraphElement) {
      saida.textContent = resultado;  
    }
}

document.addEventListener('DOMContentLoaded', configurar);
        

