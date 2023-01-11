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
let notListen = [];
let notSeen = [];

for (let i = 0; i < N; i += 1) {
  notListen.push(input.shift());
}

for (let i = 0; i < M; i += 1) {
  notSeen.push(input.shift());
}

for (let i = 0; i < N; i += 1) {
  if (notSeen.includes(notListen[i])) {
    answer.push(notListen[i]);
  }
}

console.log(answer.length);
answer.sort();
for (let word of answer) {
  console.log(word);
}
