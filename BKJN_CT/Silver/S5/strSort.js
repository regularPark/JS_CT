const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const li = [];
for (let i = 1; i < input.length; i++) {
  li.push(input[i]);
}
let set = new Set(li);
const answer = Array.from(set);
answer.sort((a, b) => {
  if (a.length === b.length) {
    return a < b ? -1 : 1;
  } else {
    return a.length - b.length;
  }
});

console.log(answer.join("\n"));
