const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

let answer = "";
let board = new Map();

for (let num of input[1]) {
  board.get(num) ? board.set(num, board.get(num) + 1) : board.set(num, 1);
}

for (let number of input[3]) {
  board.get(number) ? (answer += board.get(number) + " ") : (answer += "0 ");
}

console.log(answer.trim());
