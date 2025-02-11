class Retangulo {
  base: number;
  altura: number;
  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }
  area(): number {
    return this.base * this.altura;
  }
  perimetro(): number {
    return 2 * this.base + 2 * this.altura;
  }
}

const r1 = new Retangulo(2, 3);
console.log('Área:', r1.area());
console.log('Perímetro:', r1.perimetro());
