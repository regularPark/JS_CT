const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [a, b, n] = input.shift();

let sm = 0;
let js = 0;
let time = 0;

const workTable = input.map((val) => val.split(' '));

// while (true) {
//   time++;
// }
console.log(workTable);
