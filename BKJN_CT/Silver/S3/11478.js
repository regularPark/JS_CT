const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim();
let answer = new Set();
let len = input.length;

let i = 1;

while (i <= len) {
  for (let j = 0; j < len; j += 1) {
    if (input.substring(j, j + i).length == i)
      answer.add(input.substring(j, j + i));
  }
  i += 1;
}

console.log(answer.size);
