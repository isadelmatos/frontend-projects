export class Pessoa {

    private _amigoSecreto: string | boolean = false;
    private _vaiReceberPresente: boolean  = false;

    constructor(
        private _nome: string,
        private _listaDeDesejo: String[] = []
    ){};

    public get nome(): string{
        return this._nome;
    }

    public editarNome(novoNome: string) {
        this._nome = novoNome;
    }

    public get listaDeDesejo(): String[] {
        return this._listaDeDesejo;
    }

    public editarlistaDeDesejo(presente: string): void {
        this._listaDeDesejo.push(presente);
    }

    public get amigoSecreto(): string | boolean {
        return this._amigoSecreto;
    }

    public definirAmigoSecreto(amigo: string) {
        this._amigoSecreto = amigo;
    }

    public get vaiReceberPresente(): boolean {
        return this._vaiReceberPresente;
    }

    public definirVaiReceberPresente() {
        this._vaiReceberPresente = true;
    }
}