import { Pessoa } from './Pessoa.js';
import { ListaDeParticipantes } from './ListaDeParticipantes.js';
const pessoa1 = new Pessoa('Isabela', ['Notebook']);
const pessoa2 = new Pessoa('Juliana', ['Iphone']);
const pessoa3 = new Pessoa('Kerlem', ['Viagem']);
const pessoa4 = new Pessoa('Paulo', ['Carro novo']);
const pessoa5 = new Pessoa('Rafael', ['PC Gamer']);
const participantes = new ListaDeParticipantes();
participantes.adicionarParticipante(pessoa1);
participantes.adicionarParticipante(pessoa2);
participantes.adicionarParticipante(pessoa3);
participantes.adicionarParticipante(pessoa4);
participantes.adicionarParticipante(pessoa5);
function distribuiAmigoSecreto(lista) {
    const pegaPessoaAleatoria = (lista) => {
        const indice = Math.floor(Math.random() * lista.length);
        return lista[indice];
    };
    const verificaAmigoSecreto = (sorteado, participante) => {
        const seSorteou = sorteado.nome === participante.nome;
        const jaTemPresenteador = sorteado.vaiReceberPresente;
        const acertou = !seSorteou && !jaTemPresenteador;
        return {
            acertou: acertou,
            seSorteou: seSorteou,
            jaTemPresenteador: jaTemPresenteador
        };
    };
    for (const participante of lista) {
        let pessoaSorteada = pegaPessoaAleatoria(lista);
        const { acertou, seSorteou, jaTemPresenteador } = verificaAmigoSecreto(pessoaSorteada, participante);
        if (acertou) {
            participante.definirAmigoSecreto(pessoaSorteada.nome);
            pessoaSorteada.definirVaiReceberPresente();
        }
        ;
        while (seSorteou || jaTemPresenteador) {
            const possivelAmigo = pegaPessoaAleatoria(lista);
            let { acertou } = verificaAmigoSecreto(possivelAmigo, participante);
            const ultimoParticipante = lista[lista.length - 1];
            if (acertou) {
                pessoaSorteada = possivelAmigo;
                participante.definirAmigoSecreto(pessoaSorteada.nome);
                pessoaSorteada.definirVaiReceberPresente();
                break;
            }
            else if (ultimoParticipante === participante && !ultimoParticipante.vaiReceberPresente) {
                let trocaAmigo = lista.filter(pessoa => {
                    return pessoa.nome !== participante.amigoSecreto;
                })[0];
                participante.definirAmigoSecreto(trocaAmigo.amigoSecreto);
                trocaAmigo.definirAmigoSecreto(participante.nome);
                break;
            }
        }
    }
}
distribuiAmigoSecreto(participantes.lista);
console.table(participantes.lista);
