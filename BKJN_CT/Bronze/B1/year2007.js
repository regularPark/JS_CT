const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let n = input.shift();
let m = input.shift();

let sum = 0;

for (let i = 0; i < n; i++) {
  sum += month[i];
}

console.log(day[(sum + m) % 7]);
