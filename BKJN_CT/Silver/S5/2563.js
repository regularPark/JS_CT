const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

let n = input.shift();
let xMax = -1;
let yMax = -1;
for (let i = 0; i < n; i++) {
  xMax = Math.max(xMax, input[i][0] + 10);
  yMax = Math.max(yMax, input[i][1] + 10);
}

let board = new Array(xMax).fill(new Array(yMax).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = input[i][0]; j < input[i][0] + 10; j++) {
    for (let k = input[i][1]; k < input[i][1] + 10; k++) {
      board[k][j] = 1;
    }
  }
}
console.log(input);
console.log(board);
