// '/dev/stdin'
const input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const N = input.shift();
const arr = input[0].split(' ').map(Number);

const groupLength = Number(N) - 3;

let answer = -1;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

for (let i = 0; i < arr.length; i++) {
  let target = 1;
  let groupSum = 0;
  for (let j = i; j < i + groupLength; j++) {
    target *= arr[j];
    groupSum += arr[j];
  }
  const targetSum = sum - groupSum + target;
  answer = answer < targetSum ? targetSum : answer;
}

console.log(answer);
