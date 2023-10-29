const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const N = input.shift();
const answer = [];

const range = 1000000;

for (let i = 0; i < N; i++) {
  if (input[i] === 0) {
    answer.push(`Case #${i + 1}: INSOMNIA`);
    continue;
  }
  let numbers = new Set();
  let j = 1;
  while (j < range) {
    (input[i] * j)
      .toString()
      .split('')
      .forEach((number) => numbers.add(number));
    if (numbers.size === 10) {
      answer.push(`Case #${i + 1}: ${input[i] * j}`);
      break;
    }
    j++;
  }
}

console.log(answer.join('\n'));
