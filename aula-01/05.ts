const operarArrow = (v1: number[], v2: string[]): string[] => {
  const res = [];

  for (let i = 0; i < v1.length; i++) {
    res[i] = v1[i] + v2[i];
  }

  return res;
};

const vetArrow1 = [5, 3, 1, 8, 2];
const vetArrow2 = ['M', 'a', 'r', 'i', 'a'];
console.log('Resultado:', operarArrow(vetArrow1, vetArrow2));
