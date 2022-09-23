export class ListaDeParticipantes {
    constructor() {
        this._lista = [];
    }
    get lista() {
        return this._lista;
    }
    adicionarParticipante(participante) {
        this.lista.push(participante);
    }
}
