const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const t = +input.shift();
for (let i = 0; i < t; i++) {
  const k = +input.shift();
  const n = +input.shift();
  const zeroFloor = [];
  for (let j = 1; j <= n; j++) {
    zeroFloor.push(j);
  }
  for (let l = 0; l < k; l++) {
    for (let m = 1; m < n; m++) {
      zeroFloor[m] += zeroFloor[m - 1];
    }
  }
  console.log(zeroFloor.pop());
}
