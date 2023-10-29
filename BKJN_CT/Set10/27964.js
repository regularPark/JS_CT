const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const N = input.shift();

const cheese = 'Cheese';
let cnt = 0;
let variant = new Set();

const toppingArr = input.shift().split(' ');

toppingArr.forEach((val) => {
  if (val.slice(-6) === cheese && !variant.has(val.slice(0, -6))) {
    variant.add(val.slice(0, -6));
    cnt++;
  }
});

console.log(cnt >= 4 ? 'yummy' : 'sad');
