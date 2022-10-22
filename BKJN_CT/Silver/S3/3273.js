const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const numbers = input
  .shift()
  .split(" ")
  .map((v) => +v);

const x = +input.pop();

let answer = 0;

let i = 0;
let j = n - 1;

numbers.sort((a, b) => a - b);

while (i !== j) {
  if (numbers[i] + numbers[j] === x) {
    answer++;
    i++;
  } else if (numbers[i] + numbers[j] > x) {
    j--;
  } else {
    i++;
  }
}

console.log(answer);
