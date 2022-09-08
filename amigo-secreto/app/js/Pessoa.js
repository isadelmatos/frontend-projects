export class Pessoa {
    constructor(nome, listaDeDesejo = []) {
        this.nome = nome;
        this.listaDeDesejo = listaDeDesejo;
        this.vaiReceberPresente = false;
    }
    ;
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    getlistaDeDesejo() {
        return this.listaDeDesejo;
    }
    setlistaDeDesejo(presente) {
        this.listaDeDesejo.push(presente);
    }
    getAmigoSecreto() {
        if (this.amigoSecreto) {
            return this.amigoSecreto;
        }
        return false;
    }
    setAmigoSecreto(amigo) {
        this.amigoSecreto = amigo;
    }
    getVaiReceberPresente() {
        return this.vaiReceberPresente;
    }
    setVaiReceberPresente() {
        this.vaiReceberPresente = true;
    }
}
