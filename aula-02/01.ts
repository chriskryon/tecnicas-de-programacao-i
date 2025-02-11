class Filme {
  titulo: string;
  duracao: number;
  constructor(titulo: string, duracao: number) {
    this.titulo = titulo;
    this.duracao = duracao;
  }
  print(): void {
    console.log(`O filme ${this.titulo} possui ${this.duracao} min.`);
  }
}

const devolta = new Filme('De Volta para o Futuro', 116);
const matrix = new Filme('Matrix', 136);

devolta.print();
matrix.print();
