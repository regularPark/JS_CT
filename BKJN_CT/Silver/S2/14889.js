const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map((e) => +e));

let n = input.shift();

let list = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i == j) continue;
    list.push(input[i][j] + input[j][i]);
  }
}
console.log(list);
let set = new Set(list);
if (set.size !== list.length) console.log(0);
else {
  input.sort((a, b) => a - b);
  console.log(input);
}
