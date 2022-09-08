import {Pessoa} from './Pessoa.js';
import {ListaDeParticipantes} from './ListaDeParticipantes.js';


const pessoa1 = new Pessoa('Isabela', ['Notebook']);
const pessoa2 = new Pessoa('Juliana', ['Iphone']);
const pessoa3 = new Pessoa('Kerlem', ['Viagem']);
const pessoa4 = new Pessoa('Paulo', ['Carro novo']);
const pessoa5 = new Pessoa('Rafael', ['PC Gamer']);


const lista = new ListaDeParticipantes();
lista.adicionarParticipante(pessoa1);
lista.adicionarParticipante(pessoa2);
lista.adicionarParticipante(pessoa3);
lista.adicionarParticipante(pessoa4);
lista.adicionarParticipante(pessoa5);



const pegaPessoaAleatoria = (lista: Pessoa[]): Pessoa => { 
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

const verificaAmigoSecreto = (sorteado:Pessoa, participante: Pessoa) => {
    
    const seSorteou = sorteado.getNome() === participante.getNome();
    const jaTemPresenteador =  sorteado.getVaiReceberPresente();
    const acertou = !seSorteou && !jaTemPresenteador;

    return {
        acertou: acertou,
        seSorteou: seSorteou,
        jaTemPresenteador: jaTemPresenteador
    };
}

function distribuiAmigoSecreto(participantes: ListaDeParticipantes){

    const lista = participantes.getLista();

    for(const participante of lista) {

        let pessoaSorteada = pegaPessoaAleatoria(lista);
        const {acertou, seSorteou, jaTemPresenteador} = verificaAmigoSecreto(pessoaSorteada, participante);
        
        if(acertou) {
            participante.setAmigoSecreto(pessoaSorteada.getNome());
            pessoaSorteada.setVaiReceberPresente();
        };

        while(seSorteou || jaTemPresenteador) {

            const possivelAmigo = pegaPessoaAleatoria(lista);
            let {acertou} = verificaAmigoSecreto(possivelAmigo, participante);
            const ultimoParticipante = lista[lista.length - 1];

            if(acertou) {
                pessoaSorteada = possivelAmigo;
                participante.setAmigoSecreto(pessoaSorteada.getNome());
                pessoaSorteada.setVaiReceberPresente();
                break;

            } else if (ultimoParticipante === participante && !ultimoParticipante.getVaiReceberPresente()) {

                let trocaAmigo = lista.filter(pessoa => {
                    return pessoa.getNome() !== participante.getAmigoSecreto();
                })[0];

                participante.setAmigoSecreto(trocaAmigo.getAmigoSecreto() as string);
                trocaAmigo.setAmigoSecreto(participante.getNome());
                break;
            }
        }
    }
}

distribuiAmigoSecreto(lista);
console.table(lista.getLista());