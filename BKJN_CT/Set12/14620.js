const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = input.shift();

const board = input.map((v) => v.split(' '));

const visited = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);

let min = 50000;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

search(0, 0);

function check(x, y) {
  for (let k = 0; k < 4; k++) {
    if (visited[x + dx[k]][y + dy[k]]) return false;
  }
  return true;
}

function search(cnt, sum) {
  if (cnt === 3) {
    min = Math.min(min, sum);
    return;
  }
  for (let r = 1; r < n - 1; r++) {
    for (let c = 1; c < n - 1; c++) {
      if (!visited[r][c] && check(r, c)) {
        visited[r][c] = true;
        cost = +board[r][c];
        for (let k = 0; k < 4; k++) {
          nr = r + dx[k];
          nc = c + dy[k];
          visited[nr][nc] = true;
          cost += +board[nr][nc];
        }
        search(cnt + 1, sum + cost);
        visited[r][c] = false;
        reset(r, c);
      }
    }
  }
}

function reset(r, c) {
  for (let i = 0; i < 4; i++) {
    let nr = r + dx[i];
    let nc = c + dy[i];
    visited[nr][nc] = false;
  }
}

console.log(min);
