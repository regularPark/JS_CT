const [N, M] = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visited = new Array(N);
let nums = [];
let answer = "";

function dfs(idx, cnt) {
  if (cnt === M) {
    answer += `${nums.join(" ")}\n`;
    return;
  }

  for (let i = idx; i < N; i++) {
    visited[i] = true;
    nums.push(i + 1);
    dfs(i, cnt + 1);
    nums.pop();
    visited[i] = false;
  }
}

dfs(0, 0);

console.log(answer.trim());
