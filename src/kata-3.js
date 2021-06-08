export function kata3(n, m) {
  function divisors(n) {
    const divs = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) divs.push(i);
    }
    return divs;
  }
  function sumSquare(divisor) {
    const n = divisor.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += divisor[i] * divisor[i];
    }
    return sum;
  }
  let sqdiv = [];
  for (let j = n; j <= m; j++) {
    const divisor = divisors(j);
    const sum = sumSquare(divisor);
    const q1 = Math.sqrt(sum);
    const d1 = q1 % 1;
    if (d1 === 0) sqdiv.push([j, sum]);
  }
  return sqdiv;
}
