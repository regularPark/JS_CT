const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m] = input.shift().split(' ').map(Number);

const basket = Array.from({ length: n }, (_, i) => i + 1);

for (let k = 0; k < m; k++) {
  const [i, j] = input.shift().split(' ').map(Number);
  let a = basket[i - 1];
  let b = basket[j - 1];

  basket[i - 1] = b;
  basket[j - 1] = a;
}

console.log(basket.join(' '));
