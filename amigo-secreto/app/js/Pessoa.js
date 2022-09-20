export class Pessoa {
    constructor(_nome, _listaDeDesejo = []) {
        this._nome = _nome;
        this._listaDeDesejo = _listaDeDesejo;
        this._amigoSecreto = false;
        this._vaiReceberPresente = false;
    }
    ;
    get nome() {
        return this._nome;
    }
    editarNome(novoNome) {
        this._nome = novoNome;
    }
    get listaDeDesejo() {
        return this._listaDeDesejo;
    }
    editarlistaDeDesejo(presente) {
        this._listaDeDesejo.push(presente);
    }
    get amigoSecreto() {
        return this._amigoSecreto;
    }
    definirAmigoSecreto(amigo) {
        this._amigoSecreto = amigo;
    }
    get vaiReceberPresente() {
        return this._vaiReceberPresente;
    }
    definirVaiReceberPresente() {
        this._vaiReceberPresente = true;
    }
}
