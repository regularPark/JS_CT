const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m] = input.shift().split(' ').map(Number);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let graph = [];

for (let i = 0; i < n; i++) {
  graph.push(input.shift().split('').map(Number));
}

const bfs = (x, y) => {
  let q = [];
  q.push([x, y]);

  while (q.length) {
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (0 <= nx && nx < n && 0 <= ny && ny < m && graph[nx][ny] === 1) {
        q.push([nx, ny]);
        graph[nx][ny] = graph[x][y] + 1;
      }
    }
  }

  return graph[n - 1][m - 1];
};

console.log(bfs(0, 0));

let visited = new Array(n).fill(false);

const dfs = (x, y) => {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (0 <= nx && nx < n && 0 <= ny && ny < m) {
      if (graph[nx][ny] === 1 && !visited[nx][ny]) {
        graph[nx][ny] = graph[x][y] + 1;
        dfs(nx, ny);
      }
    }
  }
  return graph[n - 1][m - 1];
};

console.log(dfs(0, 0));
