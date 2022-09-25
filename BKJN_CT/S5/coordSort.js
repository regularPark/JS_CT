const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let len = input.shift();
const answer = [];

for (let i = 0; i < input.length; i++) {
  let tmp = input[i].split(" ");
  answer.push(tmp);
}

answer.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else return a[1] - b[1];
});

console.log(answer.map((x) => x.join(" ")).join("\n"));
