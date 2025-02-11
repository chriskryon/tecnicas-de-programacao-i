// biome-ignore lint/complexity/useArrowFunction: <explanation>
const operar2 = function (p1: number[], p2: string[]): string[] {
  const res = [];

  for (let i = 0; i < p1.length; i++) {
    res[i] = p1[i] + p2[i];
  }

  return res;
};

const vetor1 = [5, 3, 1, 8, 2];
const vetor2 = ['M', 'a', 'r', 'i', 'a'];
console.log('Resultado:', operar2(vetor1, vetor2));
