const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
let balls = input.pop().split(" ").map(Number);

console.log(balls);

let max = -1;

const dfs = (arr, sum) => {
  if (arr.length === 2) {
    max = Math.max(max, sum);
    return;
  }

  for (let i = 1; i < arr.length - 1; i++) {
    const newBalls = [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)];
    dfs(newBalls, sum + arr[i - 1] * arr[i + 1]);
  }
};
dfs(balls, 0);

console.log(max);
