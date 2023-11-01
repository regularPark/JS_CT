const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const rank = [10, 8, 6, 5, 4, 3, 2, 1, 0];

const board = input.map((v) => v.split(' '));

board.sort((a, b) => {
  return a[0] > b[0] ? 1 : -1;
});

let red = 0;
let blue = 0;

board.forEach((val, idx) => {
  val[1] == 'B' ? (blue += rank[idx]) : (red += rank[idx]);
});

console.log(blue > red ? 'Blue' : 'Red');
