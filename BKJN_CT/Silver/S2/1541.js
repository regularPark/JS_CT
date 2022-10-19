const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();

const numbers = input.split("-").map((num) =>
  num
    .split("+")
    .map(Number)
    .reduce((sum, val) => sum + val, 0)
);

let answer = numbers[0] * 2 - numbers.reduce((sum, val) => sum + val, 0);

console.log(answer);
