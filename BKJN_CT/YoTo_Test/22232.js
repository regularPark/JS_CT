const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m] = input.shift().split(' ').map(Number);

const files = input.slice(0, n).map((val) => val.split('.'));
const extensions = new Set(input.slice(-m));

const answer = [];

files.sort((a, b) => {
  if (a[0] != b[0]) {
    return a[0] > b[0] ? 1 : -1;
  } else if (a[0] == b[0]) {
    if (extensions.has(a[1]) && !extensions.has(b[1])) return -1;
    else if (!extensions.has(a[1]) && extensions.has(b[1])) return 1;
    else return a[1] > b[1] ? 1 : -1;
  }
});

files.forEach((val) => {
  answer.push(val.join('.'));
});

console.log(answer.join('\n'));
