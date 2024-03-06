const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);

let answer = 0;
let graph = [];
let visited = new Array(N + 1).fill(false);

for (let i = 1; i <= N; i++) graph[i] = [];

for (let i = 0; i < input.length; i++) {
  const [from, to] = input[i].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

// 연결된 집합의 개수를 찾는 문제, dfs로 풀이
const dfs = (v) => {
  if (visited[v]) return;
  visited[v] = true;
  for (let i = 0; i < graph[v].length; i++) {
    if (!visited[[graph[v][i]]]) {
      dfs(graph[v][i]);
    }
  }
};

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    answer++;
  }
}

console.log(answer);
