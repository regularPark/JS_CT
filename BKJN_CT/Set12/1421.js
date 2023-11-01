const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, cost, won] = input.shift().split(' ').map(Number);

const trees = input.map(Number);

let max = Math.max(...trees);

let profits = [];

for (let i = 1; i <= max; i++) {
  let profit = [];
  for (let tree of trees) {
    profit.push(
      Math.max(
        0,
        Math.floor(tree / i) * i * won - (Math.ceil(tree / i) - 1) * cost
      )
    );
  }
  profits.push(
    profit.reduce(function add(sum, cur) {
      return sum + cur;
    }, 0)
  );
}
console.log(Math.max(...profits));
