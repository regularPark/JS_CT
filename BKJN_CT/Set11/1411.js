const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = Number(input.shift());

let answer = 0;

const combination = (n) => {
  if (n < 2) {
    return 0;
  }

  return factorial(n) / (2 * factorial(n - 2));
};

const factorial = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

let patterns = new Map();

input.forEach((str) => {
  let diff = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() > 96 && str[i].charCodeAt() < 123)
      str = str.replaceAll(str[i], diff++);
  }

  patterns.get(str)
    ? patterns.set(str, patterns.get(str) + 1)
    : patterns.set(str, 1);
});

patterns.forEach((val) => (answer += combination(val)));

console.log(answer);
