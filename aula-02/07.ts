class Ponto {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public distancia(ponto: Ponto): number {
    const p1 = (ponto.x - this.x) ** 2;
    const p2 = (ponto.y - this.y) ** 2;
    const soma = p1 + p2;
    const resultado = Math.sqrt(soma);
    return resultado;
  }
}

const a = new Ponto(3, 5);
const b = new Ponto(1, 2);
//observe que passamos como parâmetro um objeto do tipo Ponto
console.log('Distância:', a.distancia(b));
