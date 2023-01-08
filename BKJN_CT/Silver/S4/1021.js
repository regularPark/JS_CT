const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);

const [N, M] = input
  .shift()
  .split(" ")
  .map((x) => +x);

console.log(N, M);

const numbers = input
  .shift()
  .split(" ")
  .map((x) => +x);

console.log(numbers);

// deque를 어떻게 구성할지..?
