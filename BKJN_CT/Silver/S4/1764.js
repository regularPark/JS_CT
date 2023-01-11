const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((x) => +x);

let answer = [];
let notListen = new Set();

for (let i = 0; i < N; i += 1) {
  notListen.add(input[i]);
}

for (let i = N; i < N + M; i += 1) {
  if (notListen.has(input[i])) {
    answer.push(input[i]);
  }
}

console.log(answer.length);
answer.sort();
for (let word of answer) {
  console.log(word);
}
