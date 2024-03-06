const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// 최소 횟수 => BFS

const dx = [2, 2, -2, -2, -1, -1, 1, 1];
const dy = [1, -1, 1, -1, 2, -2, -2, 2];

const TC = +input.shift(); // 테케 수

for (let i = 0; i < TC; i++) {
  const L = +input.shift(); // 체스판 길이
  const graph = Array.from(Array(L), () => Array(L).fill(0));
  let cnt = 0;

  const [startX, startY] = input.shift().split(' ').map(Number);
  const [destX, destY] = input.shift().split(' ').map(Number);
  graph[startX][startY] = 1;

  function BFS() {
    let q = [];
    q.push([startX, startY]);

    while (q.length) {
      const len = q.length; // 틀렸던 이유, q.length가 동적으로 변해서 for문을 탈출하지 못함.
      for (let i = 0; i < len; i++) {
        let [mx, my] = q.shift();
        if (destX === mx && destY === my) {
          return cnt;
        }
        for (let i = 0; i < 8; i++) {
          const nx = mx + dx[i];
          const ny = my + dy[i];
          if (nx >= 0 && nx < L && ny >= 0 && ny < L && !graph[nx][ny]) {
            graph[nx][ny] = 1;
            q.push([nx, ny]);
          }
        }
      }
      cnt++;
    }
  }
  console.log(BFS());
}
