const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, R] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let visited = new Array(N);
let graph = new Map();
for (let i = 0; i < N; i++) {
  graph.set(i + 1, []);
}

for (let x of input) {
  let [start, end] = x.split(" ").map((v) => +v);
  graph.get(start).push(end);
  graph.get(end).push(start);
}

graph.forEach((v) => {
  v.sort((a, b) => a - b);
});

console.log(graph);

function bfs(r) {
  graph.get(r).forEach((v) => bfs(v));
}

bfs(R);
