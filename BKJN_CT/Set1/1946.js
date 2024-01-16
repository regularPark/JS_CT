const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const t = +input.shift();

for (let i = 0; i < t; i++) {
  const n = +input.shift();

  const rank = input
    .splice(0, n)
    .map((v) => v.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);

  let answer = 1;
  let top = rank[0][1];

  for (let j = 1; j < n; j++) {
    if (rank[j][1] < top) {
      top = rank[j][1];
      answer++;
    }
    if (top === 1) break;
  }

  console.log(answer);
}
