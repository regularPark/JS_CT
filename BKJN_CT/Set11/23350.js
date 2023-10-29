const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);

let priority = 0;
const weight = [];

console.log(N, M);

for (let i = 0; i < N; i++) {
  const [p, w] = input[i].split(' ').map(Number);
  console.log(p);
  priority = p > priority ? p : priority;
  weight.push(w);
}

console.log(priority, weight);
