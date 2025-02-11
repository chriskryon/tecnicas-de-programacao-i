class Carro {
  marca = '';
  modelo = '';
  setMarca(marca: string): void {
    this.marca = marca;
  }
  setModelo(modelo: string): void {
    this.modelo = modelo;
  }
  print(): void {
    console.log(`${this.marca} ${this.modelo}`);
  }
}

const gol = new Carro();
const uno = new Carro();

gol.setMarca('Volkswagen');
gol.setModelo('Gol');

uno.setMarca('Fiat');
uno.setModelo('Uno');

gol.print();
uno.print();
