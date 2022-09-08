export class Pessoa {
    constructor(nome, listaDeDesejo = []) {
        this.nome = nome;
        this.listaDeDesejo = listaDeDesejo;
        this.amigoSecreto = false;
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
        return this.amigoSecreto;
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
