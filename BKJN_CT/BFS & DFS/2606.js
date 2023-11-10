const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();
const m = +input.shift();

let answer = 0;

const graph = new Array(n + 1);

for (let i = 0; i < n + 1; i++) {
  graph[i] = [];
}

for (let i = 0; i < m; i++) {
  let [from, to] = input.shift().split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

let visited = Array.from({ length: n + 1 }, () => false);

const dfs = (v) => {
  if (visited[v]) return;
  visited[v] = true;
  answer++;
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (!visited[next]) {
      dfs(next);
    }
  }
};

dfs(1);

console.log(answer - 1);
