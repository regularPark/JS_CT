const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let target = input[0];
let bomb = input[1];
const len = bomb.length;

let stack = [];
for (let i = 0; i < target.length; i++) {
  let isMatch = true;
  if (target[i] === bomb[len - 1]) {
    for (j = 0; j < len - 1; j++) {
      if (stack[stack.length - (j + 1)] === bomb[len - (j + 2)]) {
        continue;
      }
      isMatch = false;
      break;
    }
    if (!isMatch) stack.push(target[i]);
    else {
      for (let k = 0; k < len - 1; k++) {
        stack.pop();
      }
    }
  } else {
    stack.push(target[i]);
  }
}

let answer = stack.join("");
console.log(answer.trim() === "" ? "FRULA" : answer.trim());
