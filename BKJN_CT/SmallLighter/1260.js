const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m, v] = input.shift().split(' ').map(Number);

let graph = new Array(n + 1);

for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}

for (let i = 0; i < m; i++) {
  let [from, to] = input.shift().split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((el) => {
  el.sort((a, b) => a - b);
});

let visited = new Array(n + 1).fill(false);
let dfsAnswer = [];

const dfs = (v) => {
  if (visited(v)) return;
  visited[v] = true;
  dfsAnswer.push(v);
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (!visited[next]) {
      dfs(next);
    }
  }
};

let bfsAnswer = [];
visited.fill(false);

const bfs = (v) => {
  let queue = [v];
  while (queue.length) {
    let x = queue.shift();
    if (visited[x]) {
      continue;
    }
    visited[x] = true;
    bfsAnswer.push(x);
    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      if (!visited[next]) {
        queue.push(next);
      }
    }
  }
};
