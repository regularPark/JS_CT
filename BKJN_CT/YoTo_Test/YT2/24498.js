const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();
const towers = input.shift().split(' ').map(Number);

let answer = Math.max(towers[0], towers[n - 1]);

for (let i = 1; i < n - 1; i++) {
  const tower = towers[i];
  const left = i - 1;
  const right = i + 1;
  const lower = Math.min(towers[left], towers[right]);
  if (answer < tower + lower) {
    answer = tower + lower;
  }
}
console.log(answer);
