function configurar(){
    let padraoRG = document.getElementById('padraoRG');
    let padraoCPF = document.getElementById('padraoCPF');
    let validarBtn = document.getElementById('validarBtn');

    if (((padraoRG instanceof HTMLInputElement) && (padraoCPF instanceof HTMLInputElement)
         && (validarBtn instanceof HTMLButtonElement))){

            validarBtn.addEventListener('click', () => {
                validarDocumentos(padraoRG.value, padraoCPF.value);
            });
        }
    }

    function validarDocumentos(rg, cpf){

        console.log("CPF:", cpf);
        console.log("RG:", rg);
        let regexrg = /^\d{2}\.?\d{3}\.?\d{3}\-\d{1}$/;
        let regexcpf = /^\d{3}\.?\d{3}\.?\d{3}\-\d{2}$/;

        console.log("Validando CPF:", regexcpf.test(cpf));
        console.log("Validando RG:", regexrg.test(rg));

        if (regexrg.test(rg) && regexcpf.test(cpf)) {
            exibirResultado("Caractéres válidos!")
        }else{
            exibirResultado("Documentos invalidados!")
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
    

