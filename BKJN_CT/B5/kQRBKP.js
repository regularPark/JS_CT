const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split(" ");

let li = [1, 1, 2, 2, 2, 8];
let answer = "";

input.map((x, i) => {
  answer += li[i] - x + " ";
});

console.log(answer.trim());
