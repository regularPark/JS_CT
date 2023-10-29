const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m] = input.shift().split(' ');

const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const rear = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];

let [r, c, d] = input.shift().split(' ').map(Number);
const room = input.map((el) => el.split(' ').map(Number));
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);

let answer = 0;
let stuckCount = 0;

while (true) {
  if (stuckCount === 4) {
    const [rearR, rearC] = [r + dir[(d + 6) % 4][0], c + dir[(d + 6) % 4][1]];
    if (room[rearR][rearC] === 1) break;
    else {
      r = rearR;
      c = rearC;
      stuckCount = 0;
    }
  }

  if (!visited[r][c]) {
    visited[r][c] = true;
    room[r][c] = -1;
    answer++;
  }

  const [newR, newC] = [r + dir[(d + 3) % 4][0], c + dir[(d + 3) % 4][1]];
  if (room[newR][newC] === 0) {
    r = newR;
    c = newC;
    stuckCount = 0;
  } else {
    stuckCount++;
  }
  d = (d + 3) % 4;
}

console.log(answer);
