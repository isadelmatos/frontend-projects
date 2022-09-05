let form = document.querySelector('.form');
let toast = document.querySelector('.toast__cadastro-confirmacao');

let campos = form.querySelectorAll("[required]");
for(let campo of campos) {
    campo.addEventListener('blur', event => {
        validacao(event);
    });
}

function validacao(event) {

    let spanErro =  event.target.parentElement.querySelector('span');
    let validadores = event.target.validity;

    if(event.target.id === 'cpf') {
        const cpfValido = validaCPF(event.target.value);
        if(!cpfValido) {
            event.target.setCustomValidity('Por favor, insira um CPF válido');
        } else {
            event.target.setCustomValidity('');
        }
    }

    for(let prop in validadores) {
        if(prop !== 'valid' && validadores[prop] === true) {
                event.target.classList.add('form__input-invalido');
                spanErro.innerHTML = mensagensValidacao[event.target.id][prop];
                return;
        } else {
                event.target.classList.remove('form__input-invalido');
                spanErro.innerHTML = "";
        }
    }

}

const mensagensValidacao = {

    email: {
        valueMissing: "Esse campo deve ser preenchido",
        typeMismatch: "Deve ser inserido um e-mail no formato email@exemplo.com"
    },
    senha: {
        valueMissing: "Esse campo deve ser preenchido",
        tooShort: "Por favor insira uma senha com mais de 3 caracteres"
    },
    nome: {
        valueMissing: "Esse campo deve ser preenchido",
        tooShort: "Por favor insira um nome com mais de 3 letras"
    },
    genero: {
        valueMissing: "Por favor selecione um dos campos"
    },
    dataNascimento: {
        valueMissing: "Esse campo deve ser preenchido"
    },
    cpf: {
        valueMissing: "Esse campo deve ser preenchido",
        patternMismatch: "O CPF deve conter 11 digitos númericos no formato XXX.XXX.XXX-XX",
        customError: "Por favor, insira um CPF válido"
    }
}

function validaCPF(cpfInserido) {
    
    // primeiro a verificação de casos que não necessitam de calculo para saber que é falso
    function verificaCasosConhecidos() {
        let cpfsInvalidos = [
            '000.000.000-00',
            '111.111.111-11',
            '222.222.222-22',
            '333.333.333-33',
            '444.444.444-44',
            '555.555.555-55',
            '666.666.666-66',
            '777.777.777-77',
            '888.888.888-88',
            '999.999.999-99'
        ]
    
        for (let cpfFalso of cpfsInvalidos) {
            if(cpfInserido === cpfFalso) {
                return true;
            }
        }
    }

    let ehCpfRepetido = verificaCasosConhecidos();
    
    if(ehCpfRepetido) {
        return false;
    }



    // começa a verificação dos digitos retirando os caracteres de . e -
    let cpf = cpfInserido.replace(/\D/g, "");

    // função que pega digito pela sua posição, compara total da multiplicação dos digitos anteriores e retorna boolean conforme o resultado da comparação coms os digitos verificadores.
    function verificaDigito(digito) {
        let digitoVerificador = parseInt(cpf.charAt(digito-1));
        let verificacao = (calculaMultiplicacaoDeDigitos(cpf, digito) * 10) % 11;
        
        if(verificacao === 10 || verificacao == 11){
            verificacao = 0;
        } 
    
        if(digitoVerificador !== verificacao) {
            return false;
        }
    
        return true;
    }

    let verificacao1 = verificaDigito(10);
    let verificacao2 = verificaDigito(11);

    if(verificacao1 && verificacao2) {
        return true;
    }
}

function calculaMultiplicacaoDeDigitos(cpf, multiplicador) {


    let digitosCPF = retornaListaDigitosCPF(cpf);
    let soma = 0;

    // multiplicador = 10 coincide com o ultimo indice de digitos do cpf então quando parar no m = 1 estará excluindo o indice 1 e 0 (digitos verificadores).
    //multiplicador = 11 é um valor de indice + 1 da lista de digitos do cpf, quando o loop chegar em m = 1 vai parar excluindo somente um indice, o último digito verificador.

    for(let digito in digitosCPF){

        if(multiplicador === 1) {
            break;
        }
        soma += digitosCPF[digito] * multiplicador;
        multiplicador--;
    }

    return soma;
}

function retornaListaDigitosCPF(cpf) {
    let digitosCPF = [];

    for(let i = 0; i < cpf.length; i++) {
        let digito = parseInt(cpf.charAt(i));
        digitosCPF.push(digito);
    }

    return digitosCPF;
}

function mostrarSenha(event) {
    let senha = event.target.parentElement.querySelector('input');

    if(senha.type === 'password') {
        event.target.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
        senha.type = 'text';
    } else {
        senha.type = 'password';
        event.target.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}

form.addEventListener('submit', event => {
    event.preventDefault();

    for(let campo of campos) {
       campo.value = '';
    };

    toast.classList.add('animar');
    setTimeout(() => {
        toast.classList.remove('animar');
    }, 5000)

});
