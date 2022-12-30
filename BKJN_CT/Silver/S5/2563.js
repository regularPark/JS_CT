const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

let answer = 0;
let n = input.shift();
let xMax = -1;
let yMax = -1;
for (let i = 0; i < n; i++) {
  xMax = Math.max(xMax, input[i][0] + 10);
  yMax = Math.max(yMax, input[i][1] + 10);
}

let board = Array.from(Array(xMax), () => Array(yMax).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = input[i][0]; j < input[i][0] + 10; j++) {
    for (let k = input[i][1]; k < input[i][1] + 10; k++) {
      if (board[j][k] == 0) {
        board[j][k] = 1;
        answer++;
      }
    }
  }
}

// for (let i = 0; i < board.length; i++) {
//   for (let j = 0; j < board[0].length; j++) {
//     if (board[i][j] == 1) answer++;
//   }
// }

console.log(answer);
