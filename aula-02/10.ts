class Circulo {
  public raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }

  public area(): number {
    return Math.PI * this.raio ** 2;
  }

  public perimetro(): number {
    return 2 * Math.PI * this.raio;
  }
}

const circulo = new Circulo(5);

console.log('Área:', circulo.area());
console.log('Perímetro:', circulo.perimetro());
