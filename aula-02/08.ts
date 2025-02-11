class Point {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public distance(point: Point): number {
    const p1 = (point.x - this.x) ** 2;
    const p2 = (point.y - this.y) ** 2;
    const sum = p1 + p2;
    const result = Math.sqrt(sum);
    return result;
  }
}

class Rectangle {
  public inferiorEsquerdo: Point;
  public superiorDireito: Point;

  constructor(ie: Point, sd: Point) {
    this.inferiorEsquerdo = ie;
    this.superiorDireito = sd;
  }

  public area(): number {
    const largura = this.superiorDireito.x - this.inferiorEsquerdo.x;
    const altura = this.superiorDireito.y - this.inferiorEsquerdo.y;

    const resultado = largura * altura;

    return resultado;
  }
}

const sd = new Point(3, 5);
const ie = new Point(1, 2);

//observe que o construtor da classe Rectangle
//recebe dois objetos do tipo Point como parâmetro
const r = new Rectangle(ie, sd);
console.log('Área:', r.area());
