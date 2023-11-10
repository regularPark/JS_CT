const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = input.shift();
const cmd = input.shift().split('');

let switchLoc;
let zombie = [];

const board = input.map((v) => v);

console.log(board);
