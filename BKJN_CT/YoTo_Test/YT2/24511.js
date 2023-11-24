const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();
const dsType = input.shift().split(' ').map(Number);
const elements = input.shift().split(' ').map(Number);

const stack = [];
const queue = [];

let answer = [];

let flag = new Array(n).fill(false);

for (let i = 0; i < n; i++) {
  flag[i] = Boolean(dsType[i]);
}

for (let i = 0; i < n; i++) {
  if (!flag[i]) {
    stack.push(elements[i]);
  }
}

while (stack.length !== 0) {
  queue.push(stack.pop());
}

let m = +input.shift();
let inputs = input.shift().split(' ').map(Number);

for (let i = 0; i < m; i++) {
  queue.push(inputs[i]);
}

let startIdx = 0;
for (let i = 0; i < m; i++) {
  answer.push(queue[startIdx + i]);
}

console.log(answer.join(' '));
