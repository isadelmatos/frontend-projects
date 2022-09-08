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


function distribuiAmigoSecreto(participantes: ListaDeParticipantes){
    const lista = participantes.getLista();

    for(const participante of lista) {

        const indice = Math.floor(Math.random() * lista.length);
        let pessoaSorteada = lista[indice];

        let sorteouAPropriaPessoa = pessoaSorteada.getNome() === participante.getNome();
        let aPessoaJaTemPresenteador = pessoaSorteada.getVaiReceberPresente();

        //só é atribuido o amigo secreto caso a pessoa não se sorteie
        if(!sorteouAPropriaPessoa) {
            participante.setAmigoSecreto(lista[indice].getNome());
            pessoaSorteada.setVaiReceberPresente();
        }

        //caso ela tenha se sorteado ou a pessoa sorteada já vai receber presente de outro amigo o loop fica em execução até as duas condições sejam falsas
        while(sorteouAPropriaPessoa || aPessoaJaTemPresenteador) {
            const indice = Math.floor(Math.random() * lista.length);
            
            if(lista[indice].getNome() !== participante.getNome() && lista[indice].getVaiReceberPresente() === false) {
                
                pessoaSorteada = lista[indice];
                participante.setAmigoSecreto(lista[indice].getNome());
                pessoaSorteada.setVaiReceberPresente();
                break;

            } else if (lista[lista.length - 1] === participante && !lista[lista.length - 1].getVaiReceberPresente()) {

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


