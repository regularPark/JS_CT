const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

let n = input.shift();

let dp = Array(n).fill(0);
dp[0] = input[0];
dp[1] = Math.max(input[0] + input[1], input[1]);
dp[2] = Math.max(input[0] + input[2], input[1] + input[2]);

for (let i = 3; i < n; i += 1) {
  dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
}

// console.log(dp);
console.log(dp[n - 1]);
