const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

input.shift();

let dp = new Array(10001).fill(1);

const answer = [];
dp[0] = 1;

for (let i = 2; i <= 3; i++) {
  for (let j = i; j <= 10001; j++) {
    dp[j] += dp[j - i];
  }
}

input.forEach((val) => answer.push(dp[val]));

console.log(answer.join('\n'));
