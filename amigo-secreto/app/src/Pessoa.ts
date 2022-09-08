export class Pessoa {

    private amigoSecreto: string | boolean = false;
    private vaiReceberPresente: boolean  = false;

    constructor(
        private nome: string,
        private listaDeDesejo: String[] = []
    ){};

    public getNome(): string{
        return this.nome;
    }

    public setNome(novoNome: string): void {
        this.nome = novoNome;
    }

    public getlistaDeDesejo(): String[] {
        return this.listaDeDesejo;
    }

    public setlistaDeDesejo(presente: string): void {
        this.listaDeDesejo.push(presente);
    }

    public getAmigoSecreto(): string | boolean {
        return this.amigoSecreto;
    }

    public setAmigoSecreto(amigo: string) {
        this.amigoSecreto = amigo;
    }

    public getVaiReceberPresente(): boolean {
        return this.vaiReceberPresente;
    }

    public setVaiReceberPresente() {
        this.vaiReceberPresente = true;
    }

}