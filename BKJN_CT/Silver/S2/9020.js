const { PassThrough } = require("stream");

const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input.shift();
const answer = [];
const MAX = Math.max(...input);

let isPrime = new Array(MAX + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i <= MAX + 1; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= MAX + 1; j += i) {
      isPrime[j] = false;
    }
  }
}

for (let num of input) {
  for (let i = Math.ceil(num / 2); i > 1; i--) {
    if (isPrime[i] && isPrime[num - i]) {
      answer.push(`${i} ${num - i}`);
      break;
    }
  }
}

console.log(answer.join("\n"));
