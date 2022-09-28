const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split(" ");

const li = [];
const answer = [];
const n = input[0];
const m = input[1];
for (let i = 0; i < n; i++) {
  li.push(i + 1);
}

while (li.length > 0) {
  for (let i = 0; i < m - 1; i++) {
    let num = li.shift();
    li.push(num);
  }
  let num = li.shift();
  answer.push(num);
}

console.log("<" + answer.join(", ") + ">");
