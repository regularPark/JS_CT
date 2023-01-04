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
    if (visited[i] === true) continue;
    visited[i] = true;
    nums.push(i + 1);
    dfs(i, cnt + 1);
    nums.pop();
    visited[i] = false;
  }
}

dfs(0, 0);

console.log(answer.trim());

// short code

// var [N, M] = (require('fs').readFileSync('dev/stdin') + '').split(' ').map(e => +e);

// function dfs(s, from, m) {
// 	if (m == 0) {
// 		console.log(s.slice(0, -1));
// 		return;
// 	}

// 	for (var i = from; i <= N; i++) {
// 		dfs(s + i + ' ', i + 1, m - 1);
// 	}
// }

// dfs('', 1, M);
