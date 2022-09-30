const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((x) => +x));

const [n, m] = input.shift();
const firstArr = [];
const secondArr = [];

for (let i = 0; i < n; i++) {
  firstArr.push(input.shift());
}

const [a, b] = input.shift();

for (let i = 0; i < a; i++) {
  secondArr.push(input.shift());
}

// console.log(firstArr);
// console.log(secondArr);

const answer = [];
for (let i = 0; i < n; i++) {
  answer.push([]);
  for (let j = 0; j < b; j++) {
    let sum = 0;
    for (let k = 0; k < a; k++) {
      sum += firstArr[i][k] * secondArr[k][j];
    }
    answer[answer.length - 1].push(sum);
  }
}

console.log(answer.map((x) => x.join(" ")).join("\n"));

// n:3 m:2 / a:2  b:3
// (00 01 * 00 10) + (00 01 * 10 11) + (00 01 * 20 21)
