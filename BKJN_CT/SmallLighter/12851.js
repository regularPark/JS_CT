const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, K] = input.shift().split(' ').map(Number);

const time = new Array(100001).fill(0); // 경과 시간
const path = new Array(100001).fill(0); // 경로의 수

function bfs(v) {
  if (N === K) {
    return [0, 1].join('\n');
  }
  const q = [];
  q.push(v);

  path[v] = 1;

  while (q.length) {
    const cycle = q.length;
    for (let i = 0; i < cycle; i++) {
      const x = q.shift();

      for (let nx of [x - 1, x + 1, x * 2]) {
        if (time[nx] === 0) {
          q.push(nx);
          time[nx] = time[x] + 1;
          path[nx] += path[x];
        } else if (time[nx] === time[x] + 1) {
          // 현재 이동할 수 있는 위치(nx로 이동한 위치)로 이동하는 경과시간이 이전 위치에서 1초를 더한 것(이동한 것)과 같다면
          // 즉, nx가 다른 경로로 이동해도 갈 수 있는 위치라면
          // nx의 경로 수에 x까지 가는 경로의 수를 더해준다.
          path[nx] += path[x];
        }
      }
    }
  }
  return [time[K], path[K]].join('\n');
}

console.log(bfs(N));
