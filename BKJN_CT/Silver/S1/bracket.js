const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(" ");

let answer = 0;
let stack = [];

for (let x of input[0]) {
  if (x === "(" || x === "[") stack.push(x);
  else if (x === ")") {
    if (stack[stack.length - 1] === "(") {
      stack.pop();
      stack.push(2);
    } else if (
      stack[stack.length - 2] === "(" &&
      stack[stack.length - 1] !== "["
    ) {
    }
  } else if (x === "]") {
    if (stack[stack.length - 1] === "[") {
      stack.pop();
      stack.push(3);
    }
  }
}

// console.log(input);
