const [N, M] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let nums = [];
let answer = "";

function dfs(cnt) {
  if (cnt === M) {
    answer += `${nums.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    nums.push(i + 1);
    dfs(cnt + 1);
    nums.pop();
  }
}

dfs(0);

console.log(answer.trim());
