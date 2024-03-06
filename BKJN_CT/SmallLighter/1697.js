const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, k] = input.shift().split(' ').map(Number);

let visited = new Array(100001).fill(false);

const bfs = (v) => {
  let q = [];
  q.push(v);

  visited[v] = true;
  let second = 0;

  while (q.length) {
    const cycle = q.length;
    for (let i = 0; i < cycle; i++) {
      const x = q.shift();
      if (x === k) return second;
      for (let nx of [x - 1, x + 1, 2 * x]) {
        if (nx >= 0 && nx <= 100000 && !visited[nx]) {
          visited[nx] = true;
          q.push(nx);
        }
      }
    }
    second++;
  }
};

console.log(bfs(n));
