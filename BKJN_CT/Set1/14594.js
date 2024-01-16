const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();
const m = +input.shift();

const wall = Array.from({ length: n - 1 }, () => false);

for (let i = 0; i < m; i++) {
  const [start, end] = input.shift().split(' ').map(Number);
  for (let j = start - 1; j < end - 1; j++) {
    wall[j] = true;
  }
}

console.log(wall.filter((el) => !el).length + 1);
