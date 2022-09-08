export class ListaDeParticipantes {
    constructor() {
        this.lista = [];
    }
    getLista() {
        return this.lista;
    }
    adicionarParticipante(participante) {
        this.lista.push(participante);
    }
}
