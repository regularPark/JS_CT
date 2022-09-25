const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");

let total = Number(input[0]);
let sum = 0;

for (let i = 2; i < input.length; i++) {
  let li = input[i].split(" ").map(Number);
  sum += li[0] * li[1];
}

console.log(total === sum ? "YES" : "NO");
