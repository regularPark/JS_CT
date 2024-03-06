const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const t = Number(input.shift());

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let graph;
let M, N, K;

const bfs = (x, y) => {
  const q = [[x, y]];
  while (q.length) {
    const [x, y] = q.shift();

    if (!graph[x][y]) continue;
    else graph[x][y] = 0;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < M && ny >= 0 && ny < N && graph[nx][ny]) {
        q.push([nx, ny]);
      }
    }
  }
};

for (let i = 0; i < t; i++) {
  [M, N, K] = input.shift().split(' ').map(Number);
  graph = [];
  let cnt = 0;

  for (let j = 0; j < M; j++) {
    graph.push(new Array(N).fill(0));
  }

  for (let k = 0; k < K; k++) {
    const [x, y] = input.shift().split(' ').map(Number);
    graph[x][y] = 1;
  }

  for (let l = 0; l < M; l++) {
    for (let m = 0; m < N; m++) {
      if (graph[l][m]) {
        bfs(l, m);
        cnt++;
      }
    }
  }
  console.log(cnt);
}
