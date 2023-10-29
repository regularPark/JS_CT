const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [K, L, N] = input.shift().split(' ').map(Number);

const answer = [];
const timer = input.shift().split('').map(Number);

let standTime = 0;
let flushTime = 0;
let flushFlag = false;

timer.forEach((val, idx) => {
  if (idx < N - 1) {
    if (val === 1) {
      standTime++;
      flushTime = 0;
      if (standTime === K) {
        flushFlag = true;
      }
    } else if (val === 0) {
      flushTime++;
      standTime = 0;
      if (flushFlag && flushTime === L) {
        flushFlag = false;
        answer.push(idx + 1);
      }
    }
  } else if (idx === N - 1) {
    if (val === 1) {
      standTime++;
      if (flushFlag || standTime >= K) answer.push(L + idx + 1);
    }
    if (val === 0 && flushFlag) {
      flushTime++;
      answer.push(idx + 1 + L - flushTime);
    }
  }
});

console.log(answer.length > 0 ? answer.join('\n') : 'NIKAD');
