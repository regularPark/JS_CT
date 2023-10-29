const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let result = [];
let answer = [];
let [n, m] = input.shift().split(' ').map(Number);

const memos = input.map((memo) => memo.split(' '));

memos.forEach((memo) => {
  if (memo[0] === 'order') {
    result.push([memo[1], memo[2]]);
    answer.push(result.map((val) => val[0]));
  } else if (memo[0] === 'sort') {
    if (result.length === 0) answer.push('sleep');
    else {
      result.sort((a, b) => {
        if (a[1] === b[1]) {
          return +a[0] - +b[0];
        } else {
          return +a[1] - +b[1];
        }
      });
      answer.push(result.map((val) => val[0]));
    }
  } else {
    result = result.filter((val) => memo[1] != val[0]);

    if (result.length > 0) {
      answer.push(result.map((val) => val[0]));
    } else {
      answer.push('sleep');
    }
  }
});

console.log(
  answer.map((val) => (Array.isArray(val) ? val.join(' ') : val)).join('\n')
);
