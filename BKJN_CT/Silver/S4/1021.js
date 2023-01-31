const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((x) => +x);

const numbers = input
  .shift()
  .split(" ")
  .map((x) => +x);

let queue = [];

for (let i = 0; i < N; i++) {
  queue.push(i + 1);
}

const take = () => {
  queue.shift();
};

const popLeft = () => {
  let tmp = queue.shift();
  queue.push(tmp);
};

const popRight = () => {
  let tmp = queue.pop();
  queue.unshift(tmp);
};

let answer = 0;

for (let i = 0; i < numbers.length; i++) {
  let target = numbers[i];
  if (target === queue[0]) {
    take();
  } else {
    let pos = queue.indexOf(target);
    let mid = queue.length / 2;

    if (pos <= mid) {
      for (let j = 0; j < pos; j++) {
        popLeft();
        answer++;
      }
    } else {
      for (let k = 0; k < queue.length - pos; k++) {
        popRight();
        answer++;
      }
    }
    take();
  }
}

console.log(answer);
