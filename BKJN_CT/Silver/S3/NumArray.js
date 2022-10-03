const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let max = -Infinity;
let sum = 0;

const [n, k] = input.shift().split(" ").map(Number);
const tempList = input.shift().split(" ").map(Number);

let lt = 0;
let rt = k;

for (let i = 0; i < k; i++) {
  sum += tempList[i];
}

max = Math.max(sum, max);

while (rt < n) {
  sum -= tempList[lt];
  lt++;
  sum += tempList[rt];
  rt++;

  max = Math.max(sum, max);
}

console.log(max);
