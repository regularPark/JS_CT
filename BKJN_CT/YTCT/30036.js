const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [i, n, k] = input.shift().split(' ').map(Number);

const dir = { U: [-1, 0], D: [1, 0], L: [0, 1], R: [0, -1] };
