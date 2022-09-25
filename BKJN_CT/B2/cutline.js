const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");

const [N, k] = input[0].split(" ").map(Number);
const li = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(li[k - 1]);
