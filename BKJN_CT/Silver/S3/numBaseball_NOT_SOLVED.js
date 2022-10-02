const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = input.shift();

const balls = [];

for (let x of input) {
  balls.push(x.split(" "));
}

console.log(balls);
