const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let [a, b, n] = input.shift().split(' ');

const q = [];
const time = 0;
const workTable = input.map((val) => val.split(' '));

while (true) {}
