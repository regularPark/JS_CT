const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();

const others = [];
const baekjoon = [];
const url = 'boj.kr/';

for (let i = 0; i < n; i++) {
  if (
    input[i].startsWith(url) &&
    !isNaN(input[i].slice(url.length, input[i].length))
  ) {
    baekjoon.push(input[i]);
  } else {
    others.push(input[i]);
  }
}

const record = others.sort((a, b) => {
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  }
  return a.length - b.length;
});

const sortedBJ = baekjoon.sort((a, b) => {
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  }
  return a.length - b.length;
});

if (record.length > 0) console.log(record.join('\n'));
if (sortedBJ.length > 0) console.log(sortedBJ.join('\n'));
