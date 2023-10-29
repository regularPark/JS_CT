const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const [N, M] = input().shift().split(' ');
let cnt = 0;
