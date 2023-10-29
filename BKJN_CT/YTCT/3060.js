const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath, 'utf-8') // filePath를 0으로 바꿨어야 하는 문제
  .toString()
  .trim()
  .split('\n');

const t = input.shift();

for (let i = 0; i < t; i++) {
  const total = +input.shift();
  const feed = input.shift().split(' ').map(Number);

  let day = 1;
  let sumFeed = feed.reduce(function add(sum, cur) {
    return sum + cur;
  }, 0);

  while (sumFeed <= total) {
    sumFeed *= 4;
    day++;
  }
  console.log(day);
}
