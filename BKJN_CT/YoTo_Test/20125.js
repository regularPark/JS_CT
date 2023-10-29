const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const body = '*';
const none = '_';

const N = input.shift();

let head = false;

const answer = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!head && input[i][j] === body) {
      head = true;
      answer.push([i + 2, j + 1]);
      break;
    }
  }
}

//left arm
let lArmLength = 0;
while (true) {
  if (answer[0][1] - 2 - lArmLength < 0) {
    answer.push(lArmLength);
    break;
  } else if (input[answer[0][0] - 1][answer[0][1] - 2 - lArmLength] === none) {
    answer.push(lArmLength);
    break;
  } else {
    lArmLength++;
  }
}

// right arm
let rArmLength = 0;
while (true) {
  if (answer[0][1] + rArmLength >= N) {
    answer.push(rArmLength);
    break;
  } else if (input[answer[0][0] - 1][answer[0][1] + rArmLength] === none) {
    answer.push(rArmLength);
    break;
  } else {
    rArmLength++;
  }
}

// waist
let waistLength = 0;
while (true) {
  if (input[answer[0][0] + waistLength][answer[0][1] - 1] === none) {
    answer.push(waistLength);
    break;
  } else {
    waistLength++;
  }
}

// left leg
let lLegLength = 0;
while (true) {
  if (answer[0][0] + waistLength + lLegLength >= N) {
    answer.push(lLegLength);
    break;
  } else if (
    input[answer[0][0] + waistLength + lLegLength][answer[0][1] - 2] === none
  ) {
    answer.push(lLegLength);
    break;
  } else {
    lLegLength++;
  }
}

// right leg
let rLegLength = 0;
while (true) {
  if (answer[0][0] + waistLength + rLegLength >= N) {
    answer.push(rLegLength);
    break;
  } else if (
    input[answer[0][0] + waistLength + rLegLength][answer[0][1]] === none
  ) {
    answer.push(rLegLength);
    break;
  } else {
    rLegLength++;
  }
}

console.log(answer.shift().join(' '));
console.log(answer.join(' '));
