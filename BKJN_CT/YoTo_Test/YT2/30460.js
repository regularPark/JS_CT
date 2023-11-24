const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();
const score = input.shift().split(' ').map(Number);

let MAX = new Array(200001).fill(0);
let arr = new Array(200001).fill(0);

for (let i = 1; i <= n + 2; i++) {
  MAX[i] = -Infinity;
  if (i <= n) arr[i] = score[i - 1];
  else arr[i] = 0;
  if (i >= 3)
    MAX[i] = Math.max(
      MAX[i],
      MAX[i - 3] + (arr[i - 2] + arr[i - 1] + arr[i]) * 2
    );
  MAX[i] = Math.max(MAX[i], MAX[i - 1] + arr[i]);
}
console.log(MAX[n + 2]);
