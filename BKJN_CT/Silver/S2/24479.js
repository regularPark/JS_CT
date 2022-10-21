const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let graph = new Map();
let cnt = 1;

const [N, M, R] = input
  .shift()
  .split(" ")
  .map((v) => +v);

for (let i = 0; i < N; i++) {
  graph.set(i + 1, []);
}

let visited = new Array(N + 1).fill(false);

for (let x of input) {
  let [start, end] = x.split(" ").map((v) => +v);
  graph.get(start).push(end);
  graph.get(end).push(start);
}

graph.forEach((vertex) => {
  vertex.sort((a, b) => a - b);
});

let answer = new Array(N).fill(0);

function dfs(r) {
  if (visited[r] === false) {
    visited[r] = true;
    answer[r - 1] = cnt;
    cnt++;
    graph.get(r).forEach((vertex) => dfs(vertex));
  }
}

dfs(R);

console.log(answer.join("\n"));
