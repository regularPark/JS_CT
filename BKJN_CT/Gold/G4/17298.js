const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));
let stack = [];
for (let i = 0; i < input[1].length; i++) {
  while (stack.length && input[1][stack[stack.length - 1]] < input[1][i]) {
    input[1][stack.pop()] = input[1][i];
  }
  stack.push(i);
}

while (stack.length > 0) {
  input[1][stack.pop()] = -1;
}

console.log(input[1].join(" "));
