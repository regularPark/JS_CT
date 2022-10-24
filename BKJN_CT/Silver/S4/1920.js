const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const arr = input[1].split(" ").map((v) => +v);
const M = input[2];
const targetArr = input[3].split(" ").map((v) => +v);

arr.sort((a, b) => a - b);

let answer = [];

targetArr.forEach((val) => {
  let left = 0;
  let right = arr.length - 1;
  let isFlag = false;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (val > arr[mid]) {
      left = mid + 1;
    } else if (val < arr[mid]) {
      right = mid - 1;
    } else {
      isFlag = true;
      break;
    }
  }
  isFlag ? answer.push(1) : answer.push(0);
});

console.log(answer.join("\n"));
