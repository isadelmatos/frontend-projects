import { Pessoa } from "./Pessoa";

export class ListaDeParticipantes {
    private _lista: Pessoa[] = [];

    public get lista(): Pessoa[] {
        return this._lista;
    }

    public adicionarParticipante(participante: Pessoa) {
        this.lista.push(participante);
    }
}