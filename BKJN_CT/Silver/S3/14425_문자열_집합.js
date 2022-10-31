const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = 0;
const [N, M] = input[0].split(" ");
const checkList = new Set();

for (let i = 1; i <= N; i++) {
  checkList.add(input[i]);
}

for (let j = +N + 1; j <= +N + +M; j++) {
  if (checkList.has(input[j])) answer++;
}

console.log(answer);
