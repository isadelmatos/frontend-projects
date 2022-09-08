import { Pessoa } from "./Pessoa";

export class ListaDeParticipantes {
    private lista: Pessoa[] = [];

    public getLista(): Pessoa[] {
        return this.lista;
    }

    public adicionarParticipante(participante: Pessoa) {
        this.lista.push(participante);
    }
}