const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 연결 집합의 개수와 그 집합을 구성하는 요소의 개수를 구하는 문제

const N = +input.shift();

let graph = input.map((row) => row.split('').map(Number));

let visited = Array.from(Array(N), () => Array(N).fill(false));

let cntHome = 0;
let cntComplex = 0;
const answer = [];

const dfs = (x, y) => {
  if (graph[x][y] === 0 || visited[x][y]) return;

  visited[x][y] = true;
  cntHome++;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < N && ny >= 0 && ny < N) dfs(nx, ny);
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1 && !visited[i][j]) {
      dfs(i, j);
      cntComplex++;
      answer.push(cntHome);
      cntHome = 0;
    }
  }
}

console.log(cntComplex + '\n' + answer.sort((a, b) => a - b).join('\n'));
