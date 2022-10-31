const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, R] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let visited = new Array(N + 1).fill(0);
visited[R] = 1;
let cnt = 1;
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

const queue = [];

function bfs(r) {
  graph.get(r).forEach((v) => {
    {
      if (visited[v] === 0) {
        cnt++;
        visited[v] = cnt;
        queue.push(v);
      }
    }
  });

  newR = queue.shift();
  if (newR <= graph.size) bfs(newR);
}

bfs(R);

console.log(visited.slice(1).join("\n"));
